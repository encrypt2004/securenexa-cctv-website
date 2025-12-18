import React from "react";

const Brands = () => {
  return (
    <section
      id="brands"
      className="section"
      aria-labelledby="brands-h"
    >
      <div className="container brands-grid">
        <div>
          <h2 id="brands-h">Authorized Brand Collaboration</h2>
          <p>
            We work with trusted brands like CP Plus to deliver high-quality surveillance
            solutions with clear video, stable performance, and long-term reliability.
          </p>
        </div>
        <div className="brand-card" aria-label="CP Plus collaboration">
          <div className="brand-logo-placeholder">
            <span>CP Plus Logo</span>
          </div>
          <p className="brand-note">
            Logo placeholder &mdash; replace with official CP Plus logo when available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;


