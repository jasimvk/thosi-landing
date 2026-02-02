import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="custom-cursor"></div>
  <div class="bg-blobs">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>

  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo"><img src="/logo.png" alt="DreamNXT.ai" class="logo-img"></div>
        <div class="nav-links">
          <a href="#who-we-are">Strategy</a>
          <a href="#services">Expertise</a>
          <a href="#roadmap">Process</a>
          <a href="#packages">Retainers</a>
        </div>
        <div class="magnetic-wrap">
          <a href="#cta-block" class="btn btn-glass nav-cta book-trigger">Book Call</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" class="hero reveal">
      <div class="hero-content">
        <p class="subtitle">Focus. Accountability. ROI.</p>
        <h1>Engineering<br/><span class="accent">Digital Growth</span></h1>
        <p class="description">
          A high-performance sales and growth consultancy working 
          exclusively with a <span class="serif-text">limited circle of clients</span> to drive uncapped revenue.
        </p>
        <div class="magnetic-wrap">
          <a href="#" class="btn btn-primary book-trigger">Start Your Growth Engine</a>
        </div>
      </div>
    </section>

    <section id="who-we-are" class="section">
      <div class="container">
        <div class="grid grid-2 reveal">
          <div class="who-we-are-content">
            <span class="label">Our Philosophy</span>
            <h2 class="title-main">We don't consult.<br/><span class="accent-text serif-text">We take ownership.</span></h2>
            <p class="description-main">
              Most agencies trade on activity. We trade on <span class="highlight-text">outcomes</span>. 
              DreamNXT.ai is a specialized partner for founders who want high-converting performance ads 
              and AI-driven sales systems that operate 24/7.
            </p>
          </div>
          <div class="service-card featured">
             <div class="price">100%</div>
             <p class="stat-label">Ownership of Lead Flow</p>
             <hr style="opacity: 0.1; margin: 2rem 0"/>
             <div class="price">Zero</div>
             <p class="stat-label">Empty Marketing Activity</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="label">Expertise</span>
          <h2>Dominating Every Touchpoint</h2>
        </div>
        <div class="grid grid-3">
          <div class="service-card reveal" style="transition-delay: 0.1s">
            <div class="service-icon"><i data-lucide="layout"></i></div>
            <h3>Conversion Architecture</h3>
            <ul class="service-list">
              <li>High-converting landing pages</li>
              <li>Intent-based SEO & AEO</li>
              <li>UX Performance optimization</li>
            </ul>
          </div>
          <div class="service-card reveal" style="transition-delay: 0.2s">
            <div class="service-icon"><i data-lucide="cpu"></i></div>
            <h3>AI Growth Systems</h3>
            <ul class="service-list">
              <li>WhatsApp automated sales</li>
              <li>AI Content generation</li>
              <li>Bot-led lead qualification</li>
            </ul>
          </div>
          <div class="service-card reveal" style="transition-delay: 0.3s">
            <div class="service-icon"><i data-lucide="bar-chart-3"></i></div>
            <h3>Paid Acquisition</h3>
            <ul class="service-list">
              <li>Multi-platform ad scaling</li>
              <li>Precision retargeting</li>
              <li>Full ROI accountability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="section">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="label">The Process</span>
          <h2>Your 90-Day Roadmap</h2>
        </div>
        <div class="roadmap-grid">
          <div class="roadmap-progress"></div>
          <div class="roadmap-step reveal">
            <div class="step-dot"></div>
            <div class="step-content">
              <span class="label">Phase 01</span>
              <h4>Deep Audit & Alignment</h4>
              <p>We break down your existing unit economics and align on high-revenue business outcomes.</p>
            </div>
          </div>
          <div class="roadmap-step reveal">
            <div class="step-dot"></div>
            <div class="step-content">
              <span class="label">Phase 02</span>
              <h4>Foundation Hardening</h4>
              <p>Deploying conversion-optimized infrastructure: Landing pages, SEO/AEO, and CRM logic.</p>
            </div>
          </div>
          <div class="roadmap-step reveal">
            <div class="step-dot"></div>
            <div class="step-content">
              <span class="label">Phase 03</span>
              <h4>Scale & Automate</h4>
              <p>Aggressive ad deployment paired with AI-automated engagement to handle incoming scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="packages" class="section">
      <div class="container">
        <div class="section-title-wrap reveal">
          <span class="label">Retainers</span>
          <h2>Transparent Partnership</h2>
        </div>
        <div class="grid grid-3">
          <div class="package-card reveal">
            <div class="package-header">
              <h3>Focused Growth</h3>
              <div class="price">QAR 10k<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>SEO & AEO Fundamentals</li>
              <li>Platform Management</li>
              <li>Basic AI Content</li>
              <li>Ads Management</li>
            </ul>
            <div class="magnetic-wrap">
              <a href="#" class="btn btn-glass book-trigger">Apply Now</a>
            </div>
          </div>
          <div class="package-card featured reveal">
            <div class="package-badge">Most Chosen</div>
            <div class="package-header">
              <h3>Performance Partner</h3>
              <div class="price">QAR 15k<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>Full Website Conversion</li>
              <li>Advanced AI Video</li>
              <li>WhatsApp Sales Bot</li>
              <li>Full Strategy & ROI</li>
            </ul>
            <div class="magnetic-wrap">
              <a href="#" class="btn btn-primary book-trigger">Apply Now</a>
            </div>
          </div>
          <div class="package-card reveal">
            <div class="package-header">
              <h3>Accelerator</h3>
              <div class="price">QAR 22k<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>Full Strategy Ownership</li>
              <li>Multi-Platform Scaling</li>
              <li>Advanced Automation</li>
              <li>Priority Execution</li>
            </ul>
            <div class="magnetic-wrap">
              <a href="#" class="btn btn-glass book-trigger">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta-block" class="section">
      <div class="container reveal" style="text-align: center;">
        <h2 style="margin-bottom: 3rem;">Ready to shift gears?</h2>
        <div class="magnetic-wrap">
          <a href="#" class="btn btn-primary btn-large book-trigger">Secure a Strategy Call</a>
        </div>
        <p style="margin-top: 2rem; color: var(--text-muted);">Strictly limited to 2 new partners per month.</p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container reveal">
       <div class="footer-grid">
         <div class="footer-brand">
           <img src="/logo.png" alt="DreamNXT.ai" class="logo-img">
           <p>Engineered for growth. <br/>Reserved for the few.</p>
         </div>
         <div class="footer-col">
           <h4>Services</h4>
           <a href="#services">Conversion Architecture</a>
           <a href="#services">AI Automation</a>
           <a href="#services">Paid Scaling</a>
         </div>
         <div class="footer-col">
           <h4>Contact</h4>
           <a href="mailto:hello@dreamnxt.ai">hello@dreamnxt.ai</a>
           <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 1rem;">Based in Qatar.</p>
         </div>
       </div>
       <div class="footer-bottom">
         <p>&copy; 2026 DreamNXT.ai</p>
       </div>
    </div>
  </footer>

  <div id="booking-modal" class="modal-overlay">
    <div class="modal">
      <button class="modal-close">&times;</button>
      <div class="booking-container">
        <h2>Book Your Private Strategy Call</h2>
        <div class="calendly-inline-widget" data-url="https://calendly.com/dreamnxt-ai/30min" style="min-width:320px;height:700px;"></div>
      </div>
    </div>
  </div>

  <div class="floating-cta">
    <div class="magnetic-wrap">
      <a href="#" class="btn btn-glass book-trigger">Book Call</a>
    </div>
  </div>
`

// --- LOGIC ---

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
  if (cursor) {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  }
});

// Magnetic Buttons
const magnets = document.querySelectorAll('.magnetic-wrap');
magnets.forEach((m) => {
  const magnet = m as HTMLElement;
  const btn = magnet.querySelector('.btn') as HTMLElement;
  
  magnet.addEventListener('mousemove', (e) => {
    const rect = magnet.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    if (cursor) cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px) scale(2)`;
  });

  magnet.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0px, 0px)`;
    if (cursor) cursor.style.transform = `translate(0, 0) scale(1)`;
  });
});

// Roadmap Progress
const roadmapSteps = document.querySelectorAll('.roadmap-step');
const progressBar = document.querySelector('.roadmap-progress') as HTMLElement;

window.addEventListener('scroll', () => {
  const roadmap = document.getElementById('roadmap');
  if (roadmap && progressBar) {
    const rect = roadmap.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    
    if (rect.top < viewHeight && rect.bottom > 0) {
      const progress = Math.max(0, Math.min(100, ((viewHeight - rect.top) / (rect.height + viewHeight)) * 130));
      progressBar.style.height = `${progress}%`;
      
      roadmapSteps.forEach((step, idx) => {
        const stepRect = step.getBoundingClientRect();
        if (stepRect.top < viewHeight * 0.7) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }
  }
  
  // Floating CTA visibility
  const floatingCta = document.querySelector('.floating-cta');
  if (window.scrollY > 800) {
    floatingCta?.classList.add('visible');
  } else {
    floatingCta?.classList.remove('visible');
  }

  // Header scroll
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Modal Logic
const modal = document.getElementById('booking-modal') as HTMLElement;
const closeBtn = document.querySelector('.modal-close') as HTMLElement;

document.querySelectorAll('.book-trigger').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// @ts-ignore
lucide.createIcons();
