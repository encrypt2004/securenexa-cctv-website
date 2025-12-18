import React from "react";

const Contact = () => {
  const phonePrimary = "9334276124";
  const phoneSecondary = "9102482501";

  const handleCall = () => {
    window.location.href = `tel:${phonePrimary}`;
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-h"
    >
      <div className="container contact-grid">
        <div>
          <h2 id="contact-h">Contact &amp; Free Consultation</h2>
          <p>
            Share your CCTV requirements for home, office, shop, school, or street
            surveillance. We will help you choose the right camera, placement, and
            recording system for your budget.
          </p>
          <div className="contact-details">
            <div>
              <span className="label">Business Name</span>
              <span className="value">Securenexa Technologies</span>
            </div>
            <div>
              <span className="label">Category</span>
              <span className="value">
                CCTV &amp; Security System Installation
              </span>
            </div>
            <div>
              <span className="label">Chairman</span>
              <span className="value">Nitish Kumar</span>
            </div>
            <div>
              <span className="label">Phone</span>
              <span className="value">
                <a href={`tel:${phonePrimary}`}>{phonePrimary}</a>,{" "}
                <a href={`tel:${phoneSecondary}`}>{phoneSecondary}</a>
              </span>
            </div>
            <div>
              <span className="label">Email</span>
              <span className="value">
                <a href="mailto:contact@securenexatechnologies.com">
                  contact@securenexatechnologies.com
                </a>
              </span>
            </div>
            <div>
              <span className="label">Working Hours</span>
              <span className="value">10:30 AM – 9:00 PM</span>
            </div>
          </div>
        </div>
        <div className="contact-cta-card">
          <h3>Request a Call Back</h3>
          <p>
            Call us directly or tap the button below to start a call and discuss
            your security requirements.
          </p>
          <button className="btn btn-primary full-width" onClick={handleCall}>
            Call Now
          </button>
          <p className="contact-note">
            No obligation &mdash; get a free site assessment and quotation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


