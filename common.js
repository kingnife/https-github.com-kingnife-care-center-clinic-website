/* ========================================================================= */
/* CARE CENTER — SHARED JAVASCRIPT CONTROLLERS                               */
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  initHeroFrameMotion();
  initGlobalModalHandlers();
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (icon) icon.setAttribute('data-lucide', 'x');
  } else {
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (icon) icon.setAttribute('data-lucide', 'menu');
  }
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Global ESC key listener to close active overlays
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobile-menu');
    if (menu && !menu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  }
});

// Global modal accessibility & keyboard dismissal
function initGlobalModalHandlers() {
  // ESC key closes all active modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeVideoModal();
      closeTelehealthModal();
      closeClinicianModal();
      closeServiceModal();
      closePatientPortalModal();
      closeCheckInModal();
      closeEmergencyModal();
      const concierge = document.getElementById('care-concierge-modal');
      if (concierge && !concierge.classList.contains('hidden')) {
        concierge.classList.add('hidden');
      }
    }
  });

  // Clicking modal backdrop overlay closes the modal
  document.addEventListener('click', (e) => {
    const activeModal = e.target.closest('[id$="-modal"]:not(.hidden)');
    if (activeModal && e.target === activeModal) {
      activeModal.classList.add('hidden');
    }
  });
}

// Booking Modal Handlers
function openBookingModal(serviceName) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  if (serviceName) {
    const select = document.getElementById('modal-service');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(serviceName) || select.options[i].value === serviceName) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
}

function handleBookingSubmit(e) {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }
  const nameEl = document.getElementById('modal-name');
  const serviceEl = document.getElementById('modal-service');
  const name = nameEl?.value.trim() || 'Patient';
  const service = serviceEl?.value.trim() || 'Requested Service';
  alert(`Thank you, ${name}! Your intake appointment request for ${service} has been received. Our patient care coordinator will contact you within 2 business hours to confirm your time.`);
  closeBookingModal();
  e.target.reset();
}

// Video Tour Modal Handlers
function openVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) modal.classList.add('hidden');
}

// Telehealth Modal Handlers
function openTelehealthModal() {
  const modal = document.getElementById('telehealth-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeTelehealthModal() {
  const modal = document.getElementById('telehealth-modal');
  if (modal) modal.classList.add('hidden');
}

function handleTelehealthJoin(e) {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }
  alert("Connecting to secure telehealth room... Please enable your camera and microphone when prompted.");
  closeTelehealthModal();
}

// Clinician Modal Handlers
function openClinicianModal(name, spec, imgUrl, bio) {
  const modal = document.getElementById('clinician-modal');
  if (!modal) return;
  const title = document.getElementById('clinician-modal-title');
  const nameEl = document.getElementById('clinician-modal-name');
  const specEl = document.getElementById('clinician-modal-spec');
  const imgEl = document.getElementById('clinician-modal-img');
  const bioEl = document.getElementById('clinician-modal-bio');

  if (title) title.textContent = name;
  if (nameEl) nameEl.textContent = name;
  if (specEl) specEl.textContent = spec;
  if (imgEl) imgEl.src = imgUrl;
  if (bioEl) bioEl.textContent = bio;

  modal.classList.remove('hidden');
}

function closeClinicianModal() {
  const modal = document.getElementById('clinician-modal');
  if (modal) modal.classList.add('hidden');
}

// Service Modal Handlers
function openServiceModal(title, desc) {
  const modal = document.getElementById('service-modal');
  if (!modal) return;
  const titleEl = document.getElementById('service-modal-title');
  const descEl = document.getElementById('service-modal-desc');

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  modal.classList.remove('hidden');
}

function closeServiceModal() {
  const modal = document.getElementById('service-modal');
  if (modal) modal.classList.add('hidden');
}

// Path Tab Switcher (Used on Process page or section)
function switchPathTab(step) {
  for (let i = 1; i <= 3; i++) {
    const btn = document.getElementById(`tab-btn-${i}`);
    const content = document.getElementById(`tab-content-${i}`);
    if (!btn || !content) continue;
    if (i === step) {
      btn.className = "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all bg-forest-900 text-white shadow-sm";
      content.classList.remove("hidden");
    } else {
      btn.className = "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all text-content-secondary hover:text-forest-900";
      content.classList.add("hidden");
    }
  }
}

// FAQ Accordion Toggle
function toggleFaq(id) {
  const ans = document.getElementById(`faq-ans-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  if (!ans) return;
  const isOpen = !ans.classList.contains('hidden');
  
  // Close all FAQs on the page
  for (let i = 1; i <= 10; i++) {
    const a = document.getElementById(`faq-ans-${i}`);
    const ic = document.getElementById(`faq-icon-${i}`);
    if (a) a.classList.add('hidden');
    if (ic) ic.innerText = '+';
  }

  if (!isOpen) {
    ans.classList.remove('hidden');
    if (icon) icon.innerText = '−';
  }
}

// Floating Care Concierge Toggle
function toggleCareConcierge() {
  const modal = document.getElementById('care-concierge-modal');
  if (modal) modal.classList.toggle('hidden');
}

// HTML Entity Sanitizer to prevent Stored/DOM XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Interactive Concierge Chat and Quick Actions
function conciergeQuickAction(actionType) {
  const msgContainer = document.getElementById('concierge-messages');
  if (!msgContainer) return;

  if (actionType === 'Check Intake Slots') {
    const userMsg = document.createElement('div');
    userMsg.className = "bg-forest-900 text-white p-2.5 rounded-xl text-right text-xs ml-8";
    userMsg.textContent = "What are the earliest available intake openings?";
    msgContainer.appendChild(userMsg);

    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = "bg-white/95 p-3 rounded-2xl border border-content-border shadow-xs text-xs text-content-primary";
      botMsg.innerHTML = "We have <strong>Monday Nov 3 at 10:30 AM</strong> (In-Person with Dr. Jenkins) and <strong>Wednesday Nov 5 at 2:00 PM</strong> (Telehealth). Would you like to reserve one now? <br><button onclick=\"openBookingModal('General Intake')\" class=\"mt-2 text-xs font-semibold text-white bg-forest-900 px-3 py-1.5 rounded-full\">Reserve Slot →</button>";
      msgContainer.appendChild(botMsg);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 350);
  } else if (actionType === 'Verify Insurance') {
    const userMsg = document.createElement('div');
    userMsg.className = "bg-forest-900 text-white p-2.5 rounded-xl text-right text-xs ml-8";
    userMsg.textContent = "How do you handle health insurance and superbills?";
    msgContainer.appendChild(userMsg);

    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = "bg-white/95 p-3 rounded-2xl border border-content-border shadow-xs text-xs text-content-primary";
      botMsg.innerHTML = "We are directly in-network with <strong>Anthem, Aetna, Cigna, and Medicare</strong>. For all out-of-network plans, we provide itemized Superbills with diagnostic codes for direct reimbursement. We can verify your policy in 15 minutes before your visit!";
      msgContainer.appendChild(botMsg);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }, 350);
  }
}

function handleConciergeChat(e) {
  e.preventDefault();
  const input = document.getElementById('concierge-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const msgContainer = document.getElementById('concierge-messages');
  if (!msgContainer) return;
  
  // User message (textContent prevents XSS)
  const userMsg = document.createElement('div');
  userMsg.className = "bg-forest-900 text-white p-2.5 rounded-xl text-right text-xs ml-8";
  userMsg.textContent = val;
  msgContainer.appendChild(userMsg);
  input.value = '';

  // Assistant response with escaped user content
  const safeVal = escapeHtml(val);
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = "bg-white/95 p-3 rounded-2xl border border-content-border shadow-xs text-xs text-content-primary";
    botMsg.innerHTML = `Thank you for your question regarding "<em>${safeVal}</em>". Our patient care coordinator will review your request. For immediate assistance with scheduling, you may also call us at <strong>(555) 019-2834</strong> or request a direct intake.`;
    msgContainer.appendChild(botMsg);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }, 450);
}

// Patient Portal Modal Handlers
function openPatientPortalModal() {
  const modal = document.getElementById('patient-portal-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closePatientPortalModal() {
  const modal = document.getElementById('patient-portal-modal');
  if (modal) modal.classList.add('hidden');
}

function handlePortalLogin(e) {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }
  alert("Logging in to Care Center Secure Patient Portal... Redirecting to patient dashboard.");
  closePatientPortalModal();
}

// Patient Digital Check-In Modal Handlers
function openCheckInModal() {
  const modal = document.getElementById('check-in-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeCheckInModal() {
  const modal = document.getElementById('check-in-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCheckInSubmit(e) {
  e.preventDefault();
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }
  const name = document.getElementById('checkin-name')?.value.trim() || 'Patient';
  alert(`Welcome, ${name}! You are successfully checked in. Please take a seat in our Sanctuary Lounge; your care team has been notified.`);
  closeCheckInModal();
}

// Emergency Guidance Modal Handlers
function openEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  if (modal) modal.classList.add('hidden');
}

/* ========================================================================= */
/* CARE CENTER — 199-FRAME HERO MOTION ENGINE (HIGH-PERFORMANCE ARCHITECTURE) */
/* ========================================================================= */

let isHeroMotionPlaying = true;
let heroRafId = null;
let isDataSaverActive = false;

function toggleHeroMotion() {
  const dot = document.getElementById('hero-motion-dot');
  const text = document.getElementById('hero-motion-text');
  isHeroMotionPlaying = !isHeroMotionPlaying;

  if (isHeroMotionPlaying) {
    if (dot) {
      dot.className = "w-2 h-2 rounded-full bg-[#A7E8BD] animate-pulse";
    }
    if (text) text.textContent = "Motion Live";
    if (window._resumeHeroMotion) window._resumeHeroMotion();
  } else {
    if (dot) {
      dot.className = "w-2 h-2 rounded-full bg-white/40";
    }
    if (text) text.textContent = isDataSaverActive ? "Data Saver" : "Motion Paused";
    if (window._pauseHeroMotion) window._pauseHeroMotion();
  }
}

function initHeroFrameMotion() {
  const canvas = document.getElementById('hero-motion-canvas');
  const fallbackImg = document.getElementById('hero-fallback-img');
  const heroSection = document.getElementById('hero-section');
  if (!canvas) return;

  // Optimize context: alpha: false eliminates compositing alpha channel overhead (25% faster render)
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return;

  const TOTAL_FRAMES = 199;
  const frames = new Array(TOTAL_FRAMES);
  let currentFrameIndex = 0;
  let isHeroVisible = true;
  let hasStarted = false;
  let loadedCount = 0;

  // Frame URL constructor: clinic/ezgif-frame-001.jpg .. clinic/ezgif-frame-199.jpg
  function getFrameUrl(idx) {
    const num = String(idx + 1).padStart(3, '0');
    return `clinic/ezgif-frame-${num}.jpg`;
  }

  // Draw frame with aspect ratio cover and focal alignment
  function renderFrame(idx) {
    const img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    if (!cw || !ch) return;

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const imgAspect = iw / ih;
    const canvasAspect = cw / ch;

    // Focal point alignment: meditating subject centered horizontally & positioned vertically
    const isDesktop = window.innerWidth >= 1024;
    const focalX = isDesktop ? 0.62 : 0.50;
    const focalY = 0.38;

    let rw, rh, ox, oy;
    if (canvasAspect > imgAspect) {
      rw = cw;
      rh = cw / imgAspect;
      ox = 0;
      oy = (ch - rh) * focalY;
    } else {
      rh = ch;
      rw = ch * imgAspect;
      ox = (cw - rw) * focalX;
      oy = 0;
    }

    ctx.drawImage(img, ox, oy, rw, rh);
  }

  // Responsive canvas resizing with HiDPI support (capped at 2x) & layout thrashing guards
  let resizeRafId = null;
  function performResize() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = Math.round(rect.width * dpr);
    const newHeight = Math.round(rect.height * dpr);

    // Guard against redundant GPU buffer reallocations
    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
    }
    renderFrame(currentFrameIndex);
  }

  function resizeCanvas() {
    if (resizeRafId) cancelAnimationFrame(resizeRafId);
    resizeRafId = requestAnimationFrame(performResize);
  }

  window.addEventListener('resize', resizeCanvas, { passive: true });

  // 120Hz/144Hz Jitter-Free Frame Timing with Delta Accumulator
  const targetFps = 25; // 25 fps = smooth, calming cinematic meditation motion
  const frameDuration = 1000 / targetFps; // 40.0ms
  let lastTime = performance.now();
  let accumulator = 0;

  function loop(now) {
    if (!isHeroMotionPlaying || !isHeroVisible) {
      heroRafId = null;
      return;
    }
    heroRafId = requestAnimationFrame(loop);

    let delta = now - lastTime;
    lastTime = now;

    // Guard against large time jumps after background tab suspension
    if (delta > 250) {
      delta = frameDuration;
    }

    accumulator += delta;

    if (accumulator >= frameDuration) {
      while (accumulator >= frameDuration) {
        accumulator -= frameDuration;
        const nextIndex = (currentFrameIndex + 1) % TOTAL_FRAMES;
        const nextImg = frames[nextIndex];
        if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
          currentFrameIndex = nextIndex;
        }
      }
      renderFrame(currentFrameIndex);
    }
  }

  window._resumeHeroMotion = function() {
    if (!heroRafId && isHeroVisible) {
      // Resume preloader if frames still needed
      resumePreloader();
      if (hasStarted) {
        lastTime = performance.now();
        accumulator = 0;
        heroRafId = requestAnimationFrame(loop);
      }
    }
  };

  window._pauseHeroMotion = function() {
    if (heroRafId) {
      cancelAnimationFrame(heroRafId);
      heroRafId = null;
    }
  };

  // Mobile Bandwidth & Data-Saver Detection (navigator.connection.saveData & slow connections)
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    if (conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
      isDataSaverActive = true;
      isHeroMotionPlaying = false;
    }
  }

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    isHeroMotionPlaying = false;
  }

  // Update UI dot & label if motion is paused by data-saver or reduced-motion
  if (!isHeroMotionPlaying) {
    const dot = document.getElementById('hero-motion-dot');
    const text = document.getElementById('hero-motion-text');
    if (dot) dot.className = "w-2 h-2 rounded-full bg-white/40";
    if (text) {
      text.textContent = isDataSaverActive ? "Data Saver" : "Motion Paused";
    }
  }

  // IntersectionObserver to pause motion AND image preloader when scrolled out of view
  let observer = null;
  if ('IntersectionObserver' in window && heroSection) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
        if (isHeroVisible) {
          if (isHeroMotionPlaying && !heroRafId && hasStarted) {
            lastTime = performance.now();
            accumulator = 0;
            heroRafId = requestAnimationFrame(loop);
          }
          // Resume downloading subsequent frames only when visible
          resumePreloader();
        } else {
          window._pauseHeroMotion();
        }
      });
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  // Tab visibility management (pause animation and preloading when tab is in background)
  const onVisibilityChange = () => {
    if (document.hidden) {
      window._pauseHeroMotion();
    } else if (isHeroVisible && isHeroMotionPlaying && hasStarted) {
      window._resumeHeroMotion();
    }
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  // Clean lifecycle teardown on pagehide to prevent detached memory leaks
  window.addEventListener('pagehide', () => {
    window._pauseHeroMotion();
    if (resizeRafId) cancelAnimationFrame(resizeRafId);
    if (observer) observer.disconnect();
    window.removeEventListener('resize', resizeCanvas);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  }, { once: true });

  // Intelligent Adaptive Preloader
  // Adaptive concurrency: 2 for cellular/slow connections, 4 for broadband (never saturates 6-slot HTTP limit)
  let nextLoadIndex = 0;
  let activeWorkers = 0;
  const isSlowConn = conn && (conn.saveData || /2g|3g/.test(conn.effectiveType || ''));
  const CONCURRENCY = isSlowConn ? 2 : 4;

  function loadNextImage() {
    // If reduced motion or data saver is active and user hasn't explicitly unpaused, stop after Frame 0!
    if ((isDataSaverActive || prefersReduced) && !hasStarted && nextLoadIndex > 0) {
      return;
    }
    // Pause queue if hero is off-screen to preserve mobile bandwidth and battery
    if (!isHeroVisible && loadedCount > 10) {
      return;
    }
    if (nextLoadIndex >= TOTAL_FRAMES) {
      return;
    }

    const idx = nextLoadIndex++;
    activeWorkers++;
    const img = new Image();
    img.decoding = 'async';

    img.onload = () => {
      frames[idx] = img;
      loadedCount++;
      activeWorkers--;

      // When Frame 0 loads, draw it immediately and smoothly reveal canvas
      if (idx === 0) {
        performResize();
        canvas.classList.remove('opacity-0');
        canvas.classList.add('opacity-100');
        if (fallbackImg) {
          fallbackImg.classList.add('opacity-0');
        }
      }

      // Start motion loop once initial buffer (6 frames) is loaded
      if (loadedCount >= 6 && !hasStarted && isHeroMotionPlaying) {
        hasStarted = true;
        lastTime = performance.now();
        accumulator = 0;
        heroRafId = requestAnimationFrame(loop);
      }

      loadNextImage();
    };

    img.onerror = () => {
      frames[idx] = frames[0] || img;
      activeWorkers--;
      loadNextImage();
    };

    img.src = getFrameUrl(idx);
  }

  function resumePreloader() {
    while (activeWorkers < CONCURRENCY && nextLoadIndex < TOTAL_FRAMES) {
      loadNextImage();
    }
  }

  // Preload Frame 0 immediately
  loadNextImage();

  // If user doesn't have data saver or reduced motion enabled, kick off concurrent pipeline
  if (!isDataSaverActive && !prefersReduced) {
    for (let c = 1; c < CONCURRENCY; c++) {
      loadNextImage();
    }
  }
}
