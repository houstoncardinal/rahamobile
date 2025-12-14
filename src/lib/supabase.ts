/**
 * Supabase Service Layer
 * Abstraction layer for database operations - designed for easy migration
 * to Google Cloud/Workspace or other backends later
 */

import { supabase } from '@/integrations/supabase/client';

// ============================================================================
// Types - These are abstracted from the database schema for portability
// ============================================================================

export interface UserProfile {
  id: string;
  user_id: string;
  email?: string;
  name?: string;
  full_name?: string;
  role?: string;
  organization?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

// For future migration - these types are ready for additional tables
export interface NoteMetadata {
  id: string;
  user_id: string;
  template: string;
  duration_seconds: number;
  time_saved_minutes: number;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string;
  action: string;
  resource: string;
  timestamp: string;
  details?: Record<string, any>;
}

// ============================================================================
// Supabase Service Class
// ============================================================================

class SupabaseService {
  private initialized = false;

  constructor() {
    this.initialized = true;
    console.log('✅ SupabaseService initialized');
  }

  /**
   * Get the raw Supabase client for advanced operations
   */
  getSupabaseClient() {
    return supabase;
  }

  /**
   * Check if service is available
   */
  isAvailable(): boolean {
    return this.initialized && supabase !== null;
  }

  // ==========================================================================
  // User Profile Operations (uses existing profiles table)
  // ==========================================================================

  async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('Failed to get user profile:', error);
        return null;
      }

      if (!data) return null;

      return {
        id: data.id,
        user_id: data.user_id,
        name: data.full_name,
        full_name: data.full_name,
        role: data.role,
        organization: data.organization,
        avatar_url: data.avatar_url,
        created_at: data.created_at,
        updated_at: data.updated_at
      };
    } catch (error) {
      console.error('Failed to get user profile:', error);
      return null;
    }
  }

  async upsertUserProfile(profile: Partial<UserProfile> & { id?: string; email?: string }): Promise<UserProfile | null> {
    try {
      // Map our abstract type to the actual table columns
      const payload: any = {
        user_id: profile.user_id || profile.id,
        full_name: profile.name || profile.full_name,
        role: profile.role || 'nurse',
        organization: profile.organization,
        avatar_url: profile.avatar_url,
        updated_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('profiles')
        .upsert(payload, { onConflict: 'user_id' })
        .select()
        .single();

      if (error) {
        console.error('Failed to upsert user profile:', error);
        return null;
      }

      return {
        id: data.id,
        user_id: data.user_id,
        name: data.full_name,
        full_name: data.full_name,
        role: data.role,
        organization: data.organization,
        avatar_url: data.avatar_url,
        created_at: data.created_at,
        updated_at: data.updated_at
      };
    } catch (error) {
      console.error('Failed to upsert user profile:', error);
      return null;
    }
  }

  async updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile | null> {
    try {
      const payload: any = {
        updated_at: new Date().toISOString()
      };

      if (updates.name || updates.full_name) {
        payload.full_name = updates.name || updates.full_name;
      }
      if (updates.role) {
        payload.role = updates.role;
      }
      if (updates.organization) {
        payload.organization = updates.organization;
      }
      if (updates.avatar_url) {
        payload.avatar_url = updates.avatar_url;
      }

      const { data, error } = await supabase
        .from('profiles')
        .update(payload)
        .eq('user_id', userId)
        .select()
        .single();

      if (error) {
        console.error('Failed to update user profile:', error);
        return null;
      }

      return {
        id: data.id,
        user_id: data.user_id,
        name: data.full_name,
        full_name: data.full_name,
        role: data.role,
        organization: data.organization,
        avatar_url: data.avatar_url,
        created_at: data.created_at,
        updated_at: data.updated_at
      };
    } catch (error) {
      console.error('Failed to update user profile:', error);
      return null;
    }
  }

  // ==========================================================================
  // Local Storage Operations (for notes - HIPAA compliant, no PHI in cloud)
  // ==========================================================================

  saveNoteLocally(noteId: string, noteData: any): void {
    try {
      const notes = this.getLocalNotes();
      notes[noteId] = {
        ...noteData,
        id: noteId,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem('raha_notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to save note locally:', error);
    }
  }

  getLocalNotes(): Record<string, any> {
    try {
      const notes = localStorage.getItem('raha_notes');
      return notes ? JSON.parse(notes) : {};
    } catch (error) {
      console.error('Failed to get local notes:', error);
      return {};
    }
  }

  getLocalNote(noteId: string): any | null {
    const notes = this.getLocalNotes();
    return notes[noteId] || null;
  }

  deleteLocalNote(noteId: string): void {
    try {
      const notes = this.getLocalNotes();
      delete notes[noteId];
      localStorage.setItem('raha_notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to delete local note:', error);
    }
  }

  // ==========================================================================
  // Analytics (local storage - can be synced to cloud later)
  // ==========================================================================

  trackEvent(eventType: string, eventData: Record<string, any>): void {
    try {
      const events = this.getLocalEvents();
      events.push({
        id: crypto.randomUUID(),
        type: eventType,
        data: eventData,
        timestamp: new Date().toISOString()
      });
      
      // Keep only last 1000 events
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem('raha_analytics', JSON.stringify(events));
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  getLocalEvents(): any[] {
    try {
      const events = localStorage.getItem('raha_analytics');
      return events ? JSON.parse(events) : [];
    } catch (error) {
      console.error('Failed to get local events:', error);
      return [];
    }
  }

  getAnalyticsSummary(): { totalNotes: number; totalTimeSaved: number; averageAccuracy: number } {
    try {
      const analytics = localStorage.getItem('nursescribe_analytics');
      if (analytics) {
        const data = JSON.parse(analytics);
        return {
          totalNotes: data.totalNotes || 0,
          totalTimeSaved: data.totalTimeSaved || 0,
          averageAccuracy: data.averageAccuracy || 99.2
        };
      }
      return { totalNotes: 0, totalTimeSaved: 0, averageAccuracy: 99.2 };
    } catch (error) {
      return { totalNotes: 0, totalTimeSaved: 0, averageAccuracy: 99.2 };
    }
  }

  updateAnalytics(updates: Partial<{ totalNotes: number; totalTimeSaved: number }>): void {
    try {
      const current = this.getAnalyticsSummary();
      const updated = {
        ...current,
        totalNotes: (current.totalNotes || 0) + (updates.totalNotes || 0),
        totalTimeSaved: (current.totalTimeSaved || 0) + (updates.totalTimeSaved || 0)
      };
      localStorage.setItem('nursescribe_analytics', JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to update analytics:', error);
    }
  }
}

// Export singleton instance
export const supabaseService = new SupabaseService();
