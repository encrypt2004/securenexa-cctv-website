import React from "react";

const Hero = () => {
  const phonePrimary = "9334276124";

  const handleCall = () => {
    window.location.href = `tel:${phonePrimary}`;
  };

  const handleConsult = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-kicker">
            CCTV & Security System Installation • Hazaribagh
          </p>
          <h1 id="hero-heading">
            Smart CCTV &amp; Security Solutions for Home and Business
          </h1>
          <p className="hero-subtitle">
            Reliable CCTV installation, repair, and maintenance services in
            Hazaribagh for homes, offices, streets, schools, and institutions.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleCall}>
              Call Now
            </button>
            <button className="btn btn-outline" onClick={handleConsult}>
              Get Free Consultation
            </button>
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Working Hours</span>
              <span className="meta-value">10:30 AM – 9:00 PM</span>
            </div>
            <div>
              <span className="meta-label">Service Area</span>
              <span className="meta-value">Hazaribagh & nearby locations</span>
            </div>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <div className="hero-camera-animation">
            <div className="hero-badge">Smart Security Solutions</div>
            <div className="camera-container">
              <div className="camera-body">
                <div className="camera-lens">
                  <div className="lens-glass"></div>
                  <div className="lens-reflection"></div>
                  <div className="lens-glow"></div>
                </div>
                <div className="camera-base"></div>
                <div className="camera-mount"></div>
                <div className="scan-line"></div>
              </div>
              <div className="camera-sweep"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


