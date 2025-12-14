/**
 * Authentication Service
 * Uses the existing profiles table structure for user management
 * Designed for easy migration to Google Cloud/Workspace later
 */

import { supabase } from '@/integrations/supabase/client';

export interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  organization?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

class AuthService {
  private authState: AuthState = {
    user: null,
    isLoading: true,
    isAuthenticated: false
  };

  private listeners: ((state: AuthState) => void)[] = [];

  constructor() {
    this.initialize();
  }

  private async initialize() {
    try {
      // Get initial session
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error getting session:', error);
        this.setAuthState({ user: null, isLoading: false, isAuthenticated: false });
        return;
      }

      if (session?.user) {
        const user = await this.buildUserFromSession(session.user);
        this.setAuthState({ user, isLoading: false, isAuthenticated: true });
      } else {
        this.setAuthState({ user: null, isLoading: false, isAuthenticated: false });
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);

        if (session?.user) {
          // Use setTimeout to avoid potential deadlock
          setTimeout(async () => {
            const user = await this.buildUserFromSession(session.user);
            this.setAuthState({ user, isLoading: false, isAuthenticated: true });
          }, 0);
        } else {
          this.setAuthState({ user: null, isLoading: false, isAuthenticated: false });
        }
      });
    } catch (error) {
      console.error('Auth initialization error:', error);
      this.setAuthState({ user: null, isLoading: false, isAuthenticated: false });
    }
  }

  private async buildUserFromSession(authUser: any): Promise<User> {
    // Query profiles table by user_id (not id)
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', authUser.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error);
    }

    // If no profile exists, create one via the trigger or return basic info
    if (!profile) {
      // The handle_new_user trigger should create profiles automatically
      // Return basic user info from auth metadata
      return {
        id: authUser.id,
        email: authUser.email!,
        name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || 'User',
        role: 'nurse',
        avatar_url: authUser.user_metadata?.avatar_url,
        created_at: authUser.created_at,
        updated_at: authUser.updated_at || authUser.created_at
      };
    }

    return {
      id: authUser.id,
      email: authUser.email!,
      name: profile.full_name || authUser.user_metadata?.full_name,
      role: profile.role || 'nurse',
      organization: profile.organization,
      avatar_url: profile.avatar_url || authUser.user_metadata?.avatar_url,
      created_at: profile.created_at,
      updated_at: profile.updated_at
    };
  }

  private setAuthState(state: AuthState) {
    this.authState = state;
    this.listeners.forEach(listener => listener(state));
  }

  // Public methods
  getAuthState(): AuthState {
    return { ...this.authState };
  }

  subscribe(listener: (state: AuthState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  async signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
    try {
      this.setAuthState({ ...this.authState, isLoading: true });

      console.log('🔐 Attempting sign in for:', email);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('❌ Supabase auth error:', error);
        this.setAuthState({ ...this.authState, isLoading: false });

        if (error.message?.includes('Invalid login credentials')) {
          return { user: null, error: 'Invalid email or password. Please check your credentials and try again.' };
        } else if (error.message?.includes('Email not confirmed')) {
          return { user: null, error: 'Please check your email and click the confirmation link before signing in.' };
        } else if (error.message?.includes('Too many requests')) {
          return { user: null, error: 'Too many sign-in attempts. Please wait a few minutes and try again.' };
        }

        return { user: null, error: error.message };
      }

      if (data.user) {
        console.log('✅ Sign in successful for:', data.user.email);
        const user = await this.buildUserFromSession(data.user);
        return { user, error: null };
      }

      return { user: null, error: 'Sign in failed - no user data returned' };
    } catch (error: any) {
      console.error('💥 Sign in exception:', error);
      this.setAuthState({ ...this.authState, isLoading: false });
      return { user: null, error: error.message || 'Sign in failed' };
    }
  }

  async signUp(email: string, password: string, name?: string): Promise<{ user: User | null; error: string | null }> {
    try {
      this.setAuthState({ ...this.authState, isLoading: true });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name || email.split('@')[0]
          },
          emailRedirectTo: `${window.location.origin}/app`
        }
      });

      if (error) {
        this.setAuthState({ ...this.authState, isLoading: false });
        return { user: null, error: error.message };
      }

      if (data.user) {
        // The handle_new_user trigger will create the profile
        const user: User = {
          id: data.user.id,
          email: data.user.email!,
          name: name || data.user.user_metadata?.full_name,
          role: 'nurse',
          avatar_url: data.user.user_metadata?.avatar_url,
          created_at: data.user.created_at,
          updated_at: data.user.updated_at || data.user.created_at
        };

        return { user, error: null };
      }

      return { user: null, error: 'Sign up failed' };
    } catch (error: any) {
      this.setAuthState({ ...this.authState, isLoading: false });
      return { user: null, error: error.message || 'Sign up failed' };
    }
  }

  async signInWithGoogle(): Promise<{ user: User | null; error: string | null }> {
    try {
      this.setAuthState({ ...this.authState, isLoading: true });

      const redirectTo = `${window.location.origin}/app`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo
        }
      });

      if (error) {
        this.setAuthState({ ...this.authState, isLoading: false });
        return { user: null, error: error.message };
      }

      // OAuth will redirect
      return { user: null, error: null };
    } catch (error: any) {
      this.setAuthState({ ...this.authState, isLoading: false });
      return { user: null, error: error.message || 'Google sign in failed' };
    }
  }

  async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return { error: error.message };
      }

      this.setAuthState({ user: null, isLoading: false, isAuthenticated: false });
      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Sign out failed' };
    }
  }

  async resetPassword(email: string): Promise<{ error: string | null }> {
    try {
      const redirectTo = `${window.location.origin}/reset-password`;

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo
      });

      if (error) {
        return { error: error.message };
      }

      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Password reset failed' };
    }
  }

  async updateProfile(updates: Partial<User>): Promise<{ user: User | null; error: string | null }> {
    if (!this.authState.user) {
      return { user: null, error: 'Not authenticated' };
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          full_name: updates.name,
          role: updates.role,
          organization: updates.organization,
          avatar_url: updates.avatar_url,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', this.authState.user.id)
        .select()
        .single();

      if (error) {
        return { user: null, error: error.message };
      }

      if (data) {
        const updatedUser: User = {
          ...this.authState.user,
          name: data.full_name,
          role: data.role,
          organization: data.organization,
          avatar_url: data.avatar_url,
          updated_at: data.updated_at
        };

        this.setAuthState({
          ...this.authState,
          user: updatedUser
        });

        return { user: updatedUser, error: null };
      }

      return { user: null, error: 'Profile update failed' };
    } catch (error: any) {
      return { user: null, error: error.message || 'Profile update failed' };
    }
  }

  async updatePassword(newPassword: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        return { error: error.message };
      }

      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Password update failed' };
    }
  }

  async handlePasswordReset(accessToken: string, refreshToken: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });

      if (error) {
        return { error: error.message };
      }

      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Failed to handle password reset' };
    }
  }
}

// Export singleton instance
export const authService = new AuthService();
