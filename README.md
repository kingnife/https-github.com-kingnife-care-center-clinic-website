# Care Center — Full-Website Glassmorphism Design System

A cohesive, premium healthcare platform uniting general medical care with mental health and wellness services, engineered with a controlled 4-layer glassmorphism design system.

---

## 🏛️ The 4-Layer Glassmorphism Architecture

| Layer | Role | Implementation | Key Surfaces |
|---|---|---|---|
| **Layer 1** | **Page Foundation** | `#F8F7F2` warm cream background, organic botanical lighting, whitespace | Body background, ambient gradients, natural photography |
| **Layer 2** | **Primary Glass Surfaces** | `rgba(255,255,255,0.65)`, `blur(16px)`, `border: 1px solid rgba(255,255,255,0.82)`, subtle shadow | Header pill navigation, Service cards, Live Clinic Zone panels, Trust strip, Process switcher, FAQ accordions |
| **Layer 3** | **Floating Glass Elements** | `rgba(250,251,247,0.85)`, `blur(20px)`, elevated shadow `0 14px 38px`, crisp border | Hero mental-health card, Care Concierge chat drawer, Modals (Booking, Video Tour, Clinicians, Telehealth, Service), Floating status pills |
| **Layer 4** | **Active & Selected Controls** | Solid `#082F26` forest-green buttons with white text, pale-mint active indicators (`#DDF2DF`) | Primary booking CTA, confirmed appointment slots, focused form inputs |

---

## 🌿 Global Color System

- **Primary Forest Green**: `#082F26` (buttons, key headings, active navigation)
- **Deep Green**: `#061F1A` (footer, dark bands)
- **Warm Cream Background**: `#F8F7F2`
- **Soft Mint**: `#DDF2DF` (icons, highlights, real-time indicators)
- **Muted Sage**: `#E8F0E7` (subtle containers and borders)
- **Primary Text**: `#203A32` (high-contrast, editorial clarity)
- **Secondary Text**: `#5F6B64`
- **Muted Text**: `#7C867F`
- **Subtle Border**: `#E9E8E2`

---

## 🏥 Interactive Features & Components

1. **Header Navigation (Pill Architecture)**:
   - Left: Compact brand pill with botanical emblem, **Care Center**, and tagline `HEALTH · MIND · YOU`.
   - Center: Unified white pill container with 7 links (`About`, `Clinic Zones`, `Services`, `Clinicians`, `Insurance & Fees`, `Our Process`, `FAQ`).
   - Right: Outlined glass `Join Session` button + Solid forest-green `Book Intake` button with northeast arrow.
   - Mobile: Responsive glass floating drawer menu.

2. **Hero Section (Full-Bleed Dark Glassmorphism & 199-Frame Motion Engine)**:
   - **Cinematic 199-Frame Canvas Engine**: Progressively loads and smoothly plays 199 high-resolution frames (`clinic/ezgif-frame-001.jpg` to `199.jpg`) at 25 fps, featuring the meditating person in the sunlit green forest with seamless looping, zero flicker, and HiDPI retina support.
   - **Performance Optimized**: Uses HTML5 Canvas + `requestAnimationFrame`, controlled 6-channel concurrent preloading, and `IntersectionObserver` to automatically sleep when scrolled out of view.
   - **Interactive Live Motion Toggle**: Discretely placed in the header navigation with a live pulsing emerald dot, allowing patients to pause or resume motion with full `prefers-reduced-motion` compliance.
   - **Dark Glassmorphic Layering**: Subtle high-contrast gradient overlay preserving text readability on the left while keeping the live motion footage crisp and unblurred on the right.

3. **Live Clinic Zones & Availability Panels (Section 10)**:
   - **Zone 1: Sanctuary Suites (In-Person Care)** — Real-time availability indicator, average wait times, and direct booking trigger.
   - **Zone 2: Telehealth Virtual Suites** — Encrypted video room status and instant intake coordinator connectivity.
   - **Zone 3: Mindfulness & Botanical Garden** — Patient quiet-hours protocol and acoustic guidance.

4. **Clinical Services & Categorical Cards**:
   - Primary glass cards with distinct category tabs (`[ 01 ] PSYCHIATRY & MED MGMT`, `[ 02 ] PSYCHOTHERAPY`, `[ 03 ] TRAUMA & EMDR`).
   - Interactive modals for detailed clinical track exploration.

5. **Clinician Directory**:
   - 3-column portrait cards with bottom frosted blur glass overlay, credentials, and open appointment slots modal.

6. **Interactive Care Concierge & Assistant**:
   - Floating corner pill with pulsing live indicator.
   - Expandable glass floating drawer with interactive question-answering, instant slot lookup, insurance guide, and emergency 988 banner.

7. **Patient Modals & High-Legibility Forms**:
   - Dedicated Appointment Booking Modal with opaque, high-contrast inputs for optimal clarity.
   - Telehealth Session Access Modal, Sanctuary Video Tour, and Service Detail drawers.

---

## 🚀 How to Run

### Direct in Browser:
```powershell
Start-Process "index.html"
```

### With Local Development Server:
```powershell
npm.cmd start
```
