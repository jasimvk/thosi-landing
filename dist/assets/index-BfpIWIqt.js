(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function d(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=d(i);fetch(i.href,s)}})();document.querySelector("#app").innerHTML=`
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo"><img src="/logo.png" alt="DreamNXT.ai" class="logo-img"></div>
        <div class="nav-links">
          <a href="#who-we-are">Who We Are</a>
          <a href="#services">What We Do</a>
          <a href="#how-we-work">How We Work</a>
          <a href="#packages">Packages</a>
          <a href="#cta-block" class="nav-cta">Book a Call</a>
        </div>
        <button class="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="hero-content reveal">
        <p class="subtitle">Focus. Accountability. ROI.</p>
        <h1>Your Entire<br/><span class="accent">Digital Growth</span></h1>
        <p class="description">
          A social media and digital sales management consultancy working 
          with a <span class="serif-text">limited number of clients</span> to deliver measurable results.
        </p>
        <div class="hero-btns">
          <a href="#" class="btn btn-primary book-trigger">Book a Strategy Call</a>
        </div>
      </div>
      <div class="hero-bg-glow"></div>
    </section>

    <section id="who-we-are" class="section reveal">
      <div class="container">
        <div class="grid grid-2 who-we-are-grid">
          <div class="who-we-are-content">
            <span class="label">Digital Growth Partner</span>
            <h2 class="title-main">We don't just 'consult'. <br/><span class="accent-text serif-text">We take ownership.</span></h2>
            <p class="description-main">
              Most agencies focus on clicks. We focus on <span class="highlight-text">business outcomes</span>. 
              DreamNXT.ai was built for companies that want a specialized partner to manage 
              their entire digital footprint—from high-converting performance ads to 
              AI-automated sales systems.
            </p>
          </div>
          <div class="highlight-box-container">
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Accountability</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">Premium</span>
              <span class="stat-label">Execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <div class="services-header reveal">
          <span class="label">Our Services</span>
          <h2>End-to-End Digital Management</h2>
        </div>
        <div class="grid grid-3">
          <div class="service-card reveal" style="animation-delay: 0.1s">
            <div class="service-icon"><i data-lucide="search"></i></div>
            <h3>Website & SEO</h3>
            <ul class="service-list">
              <li>Conversion optimization</li>
              <li>SEO for Google ranking</li>
              <li>AEO for AI & Voice search</li>
              <li>Intent-based structure</li>
            </ul>
          </div>
          <div class="service-card reveal" style="animation-delay: 0.2s">
            <div class="service-icon"><i data-lucide="share-2"></i></div>
            <h3>Social Media</h3>
            <ul class="service-list">
              <li>Facebook & Instagram</li>
              <li>YouTube & Google Business</li>
              <li>Content planning</li>
              <li>Brand consistency</li>
            </ul>
          </div>
          <div class="service-card reveal" style="animation-delay: 0.3s">
            <div class="service-icon"><i data-lucide="trending-up"></i></div>
            <h3>Paid Ads</h3>
            <ul class="service-list">
              <li>Strategy & Creatives</li>
              <li>Targeting & Testing</li>
              <li>Performance & ROI</li>
              <li>Scaling campaigns</li>
            </ul>
          </div>
          <div class="service-card reveal" style="animation-delay: 0.1s">
            <div class="service-icon"><i data-lucide="zap"></i></div>
            <h3>AI Content</h3>
            <ul class="service-list">
              <li>Product posts & creatives</li>
              <li>Short & long-form videos</li>
              <li>Scripts & Ad copies</li>
              <li>High-speed execution</li>
            </ul>
          </div>
          <div class="service-card reveal" style="animation-delay: 0.2s">
            <div class="service-icon"><i data-lucide="bot"></i></div>
            <h3>Automation</h3>
            <ul class="service-list">
              <li>WhatsApp & FB bots</li>
              <li>Lead capture logic</li>
              <li>Inquiry handling</li>
              <li>Automated follow-ups</li>
            </ul>
          </div>
          <div class="service-card reveal" style="animation-delay: 0.3s">
            <div class="service-icon"><i data-lucide="target"></i></div>
            <h3>Sales Support</h3>
            <ul class="service-list">
              <li>Inquiry-to-sale conversion</li>
              <li>Offer optimization</li>
              <li>CRM & WhatsApp flow</li>
              <li>Behavior alignment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="section">
      <div class="container">
        <div class="services-header reveal">
          <span class="label">The Roadmap</span>
          <h2>Your Path to Digital Dominance</h2>
        </div>
        <div class="roadmap-grid">
          <div class="roadmap-step reveal" style="animation-delay: 0.1s">
            <div class="step-number">01</div>
            <div class="step-content">
              <h4>Audit & Alignment</h4>
              <p>We analyze your existing presence and align on business outcomes, not just metrics.</p>
            </div>
          </div>
          <div class="roadmap-step reveal" style="animation-delay: 0.2s">
            <div class="step-number">02</div>
            <div class="step-content">
              <h4>Infrastructure Optimization</h4>
              <p>Building the foundation: Website conversion, SEO/AEO setup, and CRM integration.</p>
            </div>
          </div>
          <div class="roadmap-step reveal" style="animation-delay: 0.3s">
            <div class="step-number">03</div>
            <div class="step-content">
              <h4>Growth Engine Launch</h4>
              <p>Content clusters, AI-driven creatives, and high-performance ad campaigns go live.</p>
            </div>
          </div>
          <div class="roadmap-step reveal" style="animation-delay: 0.4s">
            <div class="step-number">04</div>
            <div class="step-content">
              <h4>Scale & Automate</h4>
              <p>Continuous optimization and implementing automated engagement systems to handle scale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-we-work" class="section">
      <div class="container reveal">
        <div class="how-we-work-card">
           <div class="grid grid-2" style="align-items: center;">
              <div>
                <span class="label">How We Work</span>
                <h2>Focus Drives Results</h2>
              </div>
              <div class="grid grid-2 gap-small">
                <div class="work-feature">
                  <h4>Limited Clients</h4>
                  <p>Quality over volume.</p>
                </div>
                <div class="work-feature">
                  <h4>Hands-on</h4>
                  <p>Deep involvement.</p>
                </div>
                <div class="work-feature">
                  <h4>Data-Driven</h4>
                  <p>No assumptions.</p>
                </div>
                <div class="work-feature">
                  <h4>ROI Centric</h4>
                  <p>Measurable outcomes.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <section id="packages" class="section">
      <div class="container">
        <div class="services-header reveal">
          <span class="label">Our Packages</span>
          <h2>Monthly Consultancy Retainers</h2>
        </div>
        <div class="grid grid-3" style="align-items: stretch;">
          <div class="package-card reveal blue" style="animation-delay: 0.1s">
            <div class="package-header">
              <h3>Focused Growth</h3>
              <div class="price">QAR 10,000<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>Website optimization guidance</li>
              <li>SEO fundamentals + AEO basics</li>
              <li>FB & Instagram management</li>
              <li>AI-generated posts</li>
              <li>Basic ads management</li>
            </ul>
            <a href="#" class="btn btn-outline book-trigger">Choose Plan</a>
          </div>
          <div class="package-card reveal green featured" style="animation-delay: 0.2s">
            <div class="package-badge">Most Chosen</div>
            <div class="package-header">
              <h3>Performance Partner</h3>
              <div class="price">QAR 15,000<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>Full website conversion</li>
              <li>Advanced SEO + AEO</li>
              <li>All major platforms</li>
              <li>High-quality AI videos</li>
              <li>WhatsApp automation</li>
              <li>Lead flow & sales support</li>
            </ul>
            <a href="#" class="btn btn-primary book-trigger">Choose Plan</a>
          </div>
          <div class="package-card reveal purple" style="animation-delay: 0.3s">
            <div class="package-header">
              <h3>Revenue Accelerator</h3>
              <div class="price">QAR 22,000<span>/mo</span></div>
            </div>
            <ul class="package-features">
              <li>Full strategy ownership</li>
              <li>Advanced CRO</li>
              <li>Multi-platform scaling</li>
              <li>Sales funnel design</li>
              <li>Weekly reviews</li>
              <li>Priority execution</li>
            </ul>
            <a href="#" class="btn btn-outline book-trigger">Choose Plan</a>
          </div>
        </div>
      </div>
    </section>

    <section id="cta-block" class="section">
      <div class="container reveal">
        <div class="cta-box">
          <h2>Let's Talk</h2>
          <p>If you want a focused partner who manages digital growth like a business function, not a side task, let’s connect.</p>
          <div class="hero-btns">
            <a href="#" class="btn btn-primary book-trigger">Book a Strategy Call</a>
            <a href="#" class="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer reveal">
    <div class="container">
       <div class="footer-grid">
         <div class="footer-brand">
           <div class="logo"><img src="/logo.png" alt="DreamNXT.ai" class="logo-img"></div>
           <p>Few clients. Deep focus. <br/>Committed ROI.</p>
         </div>
         <div class="footer-col">
           <h4>Navigation</h4>
           <ul>
             <li><a href="#who-we-are">Who We Are</a></li>
             <li><a href="#services">What We Do</a></li>
             <li><a href="#how-we-work">Our Process</a></li>
             <li><a href="#packages">Packages</a></li>
           </ul>
         </div>
         <div class="footer-col">
           <h4>What We Do</h4>
           <ul>
             <li><a href="#services">Website & SEO</a></li>
             <li><a href="#services">Social & AI Content</a></li>
             <li><a href="#services">Performance Ads</a></li>
             <li><a href="#services">Sales CRM & Automation</a></li>
           </ul>
         </div>
         <div class="footer-col">
           <h4>Support</h4>
           <ul>
             <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">Terms of Service</a></li>
             <li><a href="mailto:hello@dreamnxt.ai">hello@dreamnxt.ai</a></li>
           </ul>
         </div>
       </div>
       <div class="footer-bottom">
         <p>&copy; 2026 DreamNXT.ai. All rights reserved.</p>
         <div class="footer-disclaimer">
           Ad and media spend is paid directly by the client. Our fee covers strategy, execution, AI systems, and results.
         </div>
       </div>
    </div>
  </footer>

  <div id="booking-modal" class="modal-overlay">
    <div class="modal">
      <button class="modal-close">&times;</button>
      <div class="booking-container">
        <h2>Schedule Your Strategy Call</h2>
        <p>Choose a time that works for you.</p>
        <div class="calendly-inline-widget" data-url="https://calendly.com/dreamnxt-ai/30min" style="min-width:320px;height:700px;"></div>
      </div>
    </div>
  <div class="floating-cta">
    <a href="#" class="btn btn-glass book-trigger">Book Strategy Call</a>
  </div>
`;const t=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".nav-links");t==null||t.addEventListener("click",()=>{t.classList.toggle("active"),o==null||o.classList.toggle("active"),document.body.classList.toggle("menu-open")});document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{t==null||t.classList.remove("active"),o==null||o.classList.remove("active"),document.body.classList.remove("menu-open")})});window.addEventListener("scroll",()=>{const e=document.querySelector(".floating-cta");window.scrollY>500?e==null||e.classList.add("visible"):e==null||e.classList.remove("visible")});const l=document.getElementById("booking-modal"),r=document.querySelector(".modal-close");document.querySelectorAll(".book-trigger").forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),l.style.display="flex",document.body.style.overflow="hidden"})});r==null||r.addEventListener("click",()=>{l.style.display="none",document.body.style.overflow="auto"});l==null||l.addEventListener("click",e=>{e.target===l&&(l.style.display="none",document.body.style.overflow="auto")});window.addEventListener("scroll",()=>{const e=document.querySelector(".header");window.scrollY>50?e==null||e.classList.add("scrolled"):e==null||e.classList.remove("scrolled")});const v={threshold:.1},u=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},v);document.querySelectorAll(".reveal").forEach(e=>u.observe(e));lucide.createIcons();
