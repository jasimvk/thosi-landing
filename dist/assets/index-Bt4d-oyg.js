(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">DreamNxt</div>
        <div class="nav-links">
          <a href="#who-we-are">Who We Are</a>
          <a href="#services">What We Do</a>
          <a href="#how-we-work">How We Work</a>
          <a href="#packages">Packages</a>
          <a href="#cta-block" class="nav-cta">Book a Call</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="hero-content reveal">
        <p class="subtitle">Focus. Accountability. ROI.</p>
        <h1>We Manage Your Entire<br/><span class="accent">Digital Growth</span></h1>
        <p class="description">
          We are a social media and digital sales management consultancy working 
          with a limited number of clients to deliver measurable results.
        </p>
        <div class="hero-btns">
          <a href="#cta-block" class="btn btn-primary">Book a Strategy Call</a>
        </div>
      </div>
      <div class="hero-bg-glow"></div>
    </section>

    <section id="who-we-are" class="section">
      <div class="who-we-are reveal">
        <div class="container">
          <div class="grid grid-2" style="align-items: center; padding: 6rem 0;">
            <div class="who-we-are-content">
              <span class="label">Who We Are</span>
              <h2>Your Digital<br/>Growth Partner</h2>
              <p class="outcome-text">We are not a volume-based marketing agency.</p>
            </div>
            <div class="highlight-box">
              <p>We take ownership of your online presence, lead flow, and performance. By intentionally working with fewer clients, we stay hands-on with strategy and execution.</p>
              <span class="outcome-text">Our success is measured by business outcomes, not likes or impressions.</span>
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
            <a href="#cta-block" class="btn btn-outline">Choose Plan</a>
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
            <a href="#cta-block" class="btn btn-primary">Choose Plan</a>
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
            <a href="#cta-block" class="btn btn-outline">Choose Plan</a>
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
            <a href="#" class="btn btn-primary">Book a Strategy Call</a>
            <a href="#" class="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
       <div class="footer-grid">
         <div class="footer-info">
           <div class="logo">DreamNxt</div>
           <p>Few clients. Deep focus. Committed ROI.</p>
         </div>
         <div class="footer-note">
           <p>Ad and media spend is paid directly by the client. Our fee covers strategy, execution, AI systems, optimization, and accountability.</p>
         </div>
       </div>
    </div>
  </footer>
`;const r={threshold:.1},o=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},r);document.querySelectorAll(".reveal").forEach(a=>o.observe(a));lucide.createIcons();
