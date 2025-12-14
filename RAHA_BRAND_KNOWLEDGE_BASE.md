# 🏥 RAHA AI — Complete Brand Knowledge Base

> **For Designers, Developers & Brand Partners**
> Version 2.0 | Updated December 2024

---

## 🎯 BRAND IDENTITY

### Brand Name
**RAHA AI** (pronounced: RAH-hah)

### Tagline Options
- **Primary:** "Professional AI-powered documentation for healthcare"
- **Secondary:** "Voice to Note in Seconds"
- **Tertiary:** "Where Clinical Excellence Meets AI Innovation"

### Brand Mission
To transform healthcare documentation through intelligent AI, enhancing efficiency, accuracy, and human-centered clinical workflows — saving nurses 15+ minutes per note.

### Brand Personality
- **Professional** — Clinical-grade, trustworthy, precise
- **Innovative** — AI-first, cutting-edge technology
- **Warm** — Human-centered, empathetic, supportive
- **Efficient** — Time-saving, streamlined, powerful

---

## 🎨 COLOR SYSTEM

### Primary Palette (HSL Values)

| Color Name | HSL Value | Hex Equivalent | Usage |
|------------|-----------|----------------|-------|
| **Soft Teal** | `164 35% 64%` | `#6DBDA9` | Primary brand, CTAs, icons |
| **Warm Beige** | `28 45% 65%` | `#CDA67A` | Secondary elements, warmth |
| **Clay/Terracotta** | `23 55% 58%` | `#C9825A` | Accents, highlights |
| **Warm Sand** | `32 25% 92%` | `#F2EDE6` | Light backgrounds |
| **Deep Brown** | `30 15% 18%` | `#372F2A` | Text, dark mode base |

### Semantic Colors

| Purpose | Light Mode HSL | Dark Mode HSL |
|---------|----------------|---------------|
| **Background** | `32 25% 92%` | `30 14% 9%` |
| **Foreground** | `30 15% 18%` | `32 25% 92%` |
| **Card** | `0 0% 100%` | `30 12% 18%` |
| **Primary** | `164 35% 64%` | `164 35% 64%` |
| **Secondary** | `28 45% 65%` | `28 45% 65%` |
| **Accent** | `23 55% 58%` | `23 55% 58%` |
| **Success** | `174 40% 64%` | `174 40% 64%` |
| **Warning** | `29 78% 64%` | `29 78% 64%` |
| **Destructive** | `6 85% 56%` | `6 85% 56%` |
| **Muted** | `32 25% 92%` | `30 10% 20%` |
| **Border** | `32 20% 86%` | `30 10% 25%` |

### Gradients

```css
/* Primary Gradient - Teal Flow */
--gradient-primary: linear-gradient(135deg, hsl(164 35% 64%) 0%, hsl(164 40% 54%) 100%);

/* Secondary Gradient - Warm Blend */
--gradient-secondary: linear-gradient(135deg, hsl(28 45% 65%) 0%, hsl(23 55% 58%) 100%);

/* Accent Gradient - Clay Depth */
--gradient-accent: linear-gradient(135deg, hsl(23 55% 58%) 0%, hsl(23 60% 48%) 100%);

/* Hero Gradient - Subtle Overlay */
--gradient-hero: linear-gradient(135deg, hsl(164 35% 64% / 0.15) 0%, hsl(28 45% 65% / 0.15) 100%);

/* Glass Gradient - Frosted Effect */
--gradient-glass: linear-gradient(135deg, hsl(32 25% 92% / 0.95) 0%, hsl(0 0% 100% / 0.7) 100%);

/* Mesh Gradient - Complex Background */
--gradient-mesh: radial-gradient(at 30% 20%, hsl(164 35% 64% / 0.12) 0px, transparent 50%),
                 radial-gradient(at 80% 0%, hsl(28 45% 65% / 0.12) 0px, transparent 50%),
                 radial-gradient(at 10% 60%, hsl(23 55% 58% / 0.12) 0px, transparent 50%);
```

### Color Psychology for Healthcare
- **Soft Teal** → Trust, calm, medical professionalism
- **Warm Beige** → Comfort, approachability, human touch
- **Clay/Terracotta** → Energy, action, warmth
- **Sand/Cream** → Clean, sterile, clinical precision

---

## ✍️ TYPOGRAPHY

### Font Stack
```css
/* Primary - UI & Interface */
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Body - Readable Content */
--font-family-body: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Headings - Impact */
--font-family-heading: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Code/Technical */
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | `clamp(2rem, 5vw, 3.5rem)` | 800 | 1.2 | Page titles |
| H2 | `clamp(1.5rem, 4vw, 2.5rem)` | 700 | 1.2 | Section headers |
| H3 | `clamp(1.25rem, 3vw, 2rem)` | 700 | 1.2 | Subsections |
| Body | 16px | 400 | 1.6 | Main content |
| Body Large | 18px | 400 | 1.6 | Featured text |
| Body Small | 14px | 400 | 1.5 | Captions, labels |
| Mono | 14px | 500 | 1.5 | Code, data |

### Typography Guidelines
- Letter spacing for headings: `-0.025em`
- Use `font-feature-settings: 'cv11', 'ss01'` for Inter
- Numeric content: `font-variant-numeric: tabular-nums`

---

## 📐 SPACING & LAYOUT

### Radius System
```css
--radius-sm: 0.5rem;   /* 8px - Small elements */
--radius: 0.75rem;     /* 12px - Default */
--radius-lg: 1rem;     /* 16px - Cards */
--radius-xl: 1.5rem;   /* 24px - Large containers */
```

### Shadow System
```css
/* Light Mode */
--shadow-xs: 0 1px 2px 0 hsl(30 20% 12% / 0.08);
--shadow-sm: 0 1px 3px 0 hsl(30 20% 12% / 0.12), 0 1px 2px -1px hsl(30 20% 12% / 0.12);
--shadow-md: 0 4px 6px -1px hsl(30 20% 12% / 0.14), 0 2px 4px -2px hsl(30 20% 12% / 0.12);
--shadow-lg: 0 10px 15px -3px hsl(30 20% 12% / 0.18), 0 4px 6px -4px hsl(30 20% 12% / 0.14);
--shadow-xl: 0 20px 25px -5px hsl(30 20% 12% / 0.2), 0 8px 10px -6px hsl(30 20% 12% / 0.16);
--shadow-2xl: 0 25px 50px -12px hsl(30 20% 12% / 0.22);
```

### Transitions
```css
--transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🖼️ LOGO GUIDELINES

### Logo Concept
The Raha AI logo should embody:
- **Stylized "R"** with subtle AI/waveform integration
- **Clean, geometric** construction
- **Medical cross** subtle integration (optional)
- **Voice wave** or microphone element (represents voice-to-text)

### Logo Variations
1. **Full Wordmark:** "RAHA AI" with icon
2. **Icon Only:** Stylized R for app icons/favicons
3. **Stacked:** Icon above wordmark
4. **Horizontal:** Icon + wordmark side by side

### Logo Colors
- **Primary:** Soft Teal `#6DBDA9` on light backgrounds
- **Reversed:** White `#FFFFFF` on dark/colored backgrounds
- **Monochrome:** Deep Brown `#372F2A` for print

### Minimum Sizes
- **Full logo:** 120px width
- **Icon only:** 32px (minimum for clarity)
- **Favicon:** 16px, 32px, 192px, 512px variants

### Clear Space
Maintain padding equal to the height of the "R" on all sides.

---

## 🎭 ICONOGRAPHY

### Style Guidelines
- **Weight:** Medium (2px stroke)
- **Style:** Rounded corners, consistent sizing
- **Library:** Lucide React (primary)

### Core Icons
| Feature | Icon | Usage |
|---------|------|-------|
| Voice Recording | `Mic` | Primary action |
| AI Processing | `Brain`, `Sparkles` | AI features |
| Notes/Docs | `FileText`, `ClipboardList` | Documentation |
| Security | `Shield`, `Lock` | HIPAA/security |
| Speed | `Zap`, `Timer` | Performance |
| Healthcare | `Heart`, `Activity`, `Stethoscope` | Medical context |
| Templates | `LayoutTemplate` | Note templates |
| Export | `Download`, `Share` | EHR export |
| Settings | `Settings`, `Cog` | Configuration |
| User | `User`, `UserCircle` | Account |

---

## ✨ UI COMPONENTS

### Glass Morphism
```css
.glass {
  background: hsl(32 20% 96% / 0.9);
  border: 1px solid hsl(30 15% 18% / 0.35);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
```

### Premium Button
```css
.btn-premium {
  background: linear-gradient(135deg, hsl(164 35% 64%) 0%, hsl(164 40% 54%) 100%);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-premium:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-xl);
}
```

### Card Styles
```css
.card-premium {
  background: linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted) / 0.3) 100%);
  border: 1px solid hsl(var(--border) / 0.5);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s;
}
.card-premium:hover {
  box-shadow: var(--shadow-xl);
}
```

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(135deg, hsl(164 35% 64%) 0%, hsl(164 40% 54%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🎬 ANIMATIONS

### Keyframes Available
```css
/* Fade In - Page load, modals */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide Up - Cards, panels */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale In - Buttons, icons */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

/* Pulse Slow - Recording indicator */
@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Animation Classes
- `.animate-fade-in` — 0.6s ease-out
- `.animate-slide-up` — 0.6s ease-out  
- `.animate-scale-in` — 0.4s ease-out
- `.animate-pulse-slow` — 2s infinite

---

## 🏥 CORE FEATURES

### Voice-to-Note Pipeline
1. **Voice Capture** → Browser Speech API + Whisper fallback
2. **AI Processing** → OpenAI GPT-4 with medical prompts
3. **Template Formatting** → 13 clinical note templates
4. **Export** → Epic, Cerner, HL7 FHIR, PDF

### Note Templates (13 Total)
| Template | Type | Use Case |
|----------|------|----------|
| SOAP | Universal | General clinical notes |
| SBAR | Communication | Nurse handoffs |
| PIE | Progress | Problem-focused care |
| DAR | Focus | Documentation by exception |
| Epic Shift Assessment | Epic | Full shift documentation |
| Epic MAR | Epic | Medication administration |
| Epic I&O | Epic | Intake & output tracking |
| Epic Wound Care | Epic | Wound assessment |
| Epic Safety Checklist | Epic | Safety protocols |
| Epic Med-Surg | Epic | Medical-surgical unit |
| Epic ICU | Epic | Intensive care |
| Epic NICU | Epic | Neonatal intensive care |
| Epic Mother-Baby | Epic | Postpartum care |

### Key Metrics
- **Voice Accuracy:** 95%+
- **Note Generation:** <3 seconds
- **Time Saved:** 15+ minutes per note
- **HIPAA Compliant:** AES-256 encryption

---

## 📱 APP STORE PRESENCE

### App Name
**Raha** (or "Raha AI" if available)

### Short Description (30 chars)
"AI Nursing Documentation"

### Long Description
> Transform your clinical workflow with Raha AI — the intelligent voice-to-note platform built for nurses. Dictate patient assessments, and our AI instantly generates professional SOAP, SBAR, PIE, DAR, and Epic-compliant notes. Save 15+ minutes per note while maintaining clinical accuracy. HIPAA-compliant, offline-capable, and designed for real-world nursing workflows.

### Keywords
`nursing, documentation, voice, AI, SOAP, SBAR, Epic, EHR, HIPAA, healthcare, clinical, notes, medical, transcription`

### App Category
- **Primary:** Medical
- **Secondary:** Productivity

---

## 🎨 VISUAL DESIGN CONCEPTS

### Hero Image Concepts
1. **Nurse with tablet** — Modern, professional, using app
2. **Voice waves → Document** — Visual transformation metaphor
3. **Clock + Checkmark** — Time savings focus
4. **Abstract AI brain + Stethoscope** — Tech meets healthcare

### UI Screenshots (App Store)
1. Voice recording interface (teal gradient, microphone animation)
2. Note template selection (grid of cards)
3. Generated note preview (clean typography, edit mode)
4. Export to EHR (success state, green accents)
5. Dark mode variant

### Mood Board Keywords
- Clinical elegance
- Warm professionalism
- Modern healthcare
- AI-powered efficiency
- Trust and security
- Human-centered technology

---

## 📏 DESIGN DO'S & DON'TS

### ✅ DO
- Use warm, earthy tones from the palette
- Maintain generous whitespace
- Apply glass morphism for overlays
- Use gradients on primary CTAs
- Keep text highly readable (WCAG AA minimum)
- Animate with purpose (feedback, transitions)

### ❌ DON'T
- Use harsh, clinical blues (feels cold)
- Overcrowd interfaces
- Mix too many gradients
- Animate excessively
- Use low-contrast text
- Stray from the HSL color system

---

## 📦 ASSET REQUIREMENTS

### App Icons
- 1024x1024 (App Store)
- 512x512 (Google Play)
- 192x192 (PWA)
- 180x180 (Apple Touch)
- 32x32, 16x16 (Favicon)

### Splash Screens
- 2732x2732 (iPad Pro)
- 1284x2778 (iPhone Pro Max)
- 1170x2532 (iPhone Pro)
- 1080x1920 (Android)

### Social Media
- 1200x630 (Open Graph)
- 1200x1200 (Twitter Card)
- 1080x1080 (Instagram)

---

## 🔗 BRAND RESOURCES

### Design Files
- `src/index.css` — Complete CSS design system
- `tailwind.config.ts` — Tailwind configuration
- `src/styles/luxury-theme.css` — Premium theme extensions
- `src/styles/enhanced-aesthetics.css` — Advanced visual effects

### Documentation
- `RAHA_BRANDING_GUIDE.md` — Original branding guide
- `POWERFUL_FEATURES_SUMMARY.md` — Feature documentation
- `COMPREHENSIVE_FEATURE_DOCUMENTATION.md` — Technical specs

---

## 📞 BRAND VOICE

### Tone Guidelines
- **Professional yet warm** — "We're experts, but we're here to help"
- **Clear and concise** — Medical accuracy, plain language
- **Empowering** — Focus on nurse success, not just the tool
- **Trustworthy** — Security-first, HIPAA-conscious

### Example Copy
- ❌ "Our AI will revolutionize your documentation!"
- ✅ "Generate accurate clinical notes in seconds."
- ❌ "Super easy to use!"
- ✅ "Designed for real-world nursing workflows."

---

*This knowledge base is your complete reference for creating Raha AI brand assets, marketing materials, app store presence, and visual design.*
