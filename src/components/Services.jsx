import React from "react";

const services = [
  {
    title: "Home CCTV Installation",
    description:
      "Secure your home with properly positioned indoor and outdoor cameras, DVR/NVR setup, and remote viewing.",
  },
  {
    title: "Office & Commercial Installation",
    description:
      "End-to-end surveillance solutions for offices, shops, showrooms, warehouses, and commercial spaces.",
  },
  {
    title: "Street Surveillance Systems",
    description:
      "High-clarity cameras for streets, societies, apartments, schools, and colleges for 24x7 monitoring.",
  },
  {
    title: "CCTV Repair & Maintenance",
    description:
      "Fast diagnosis, repair, and maintenance of existing CCTV setups, DVRs, NVRs, and wiring.",
  },
  {
    title: "3-Month Free Support",
    description:
      "Get free service & support for 3 months after installation for peace of mind.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section" aria-labelledby="services-h">
      <div className="container">
        <div className="section-header">
          <h2 id="services-h">CCTV &amp; Security Services</h2>
          <p>
            Complete CCTV solutions for homes, offices, streets, apartments,
            schools, and colleges with reliable after-sales support.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="card-icon">
                <span role="img" aria-hidden="true">
                  🎯
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


