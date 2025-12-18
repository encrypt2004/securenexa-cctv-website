import React from "react";

const About = () => {
  return (
    <section id="about" className="section section-alt" aria-labelledby="about-h">
      <div className="container about-grid">
        <div>
          <h2 id="about-h">About Securenexa Technologies</h2>
          <p>
            Securenexa Technologies provides professional CCTV and electronic security
            system installation services for homes, offices, streets, and institutions.
            We focus on quality installation, reliable after-sales support, and trusted
            brands to ensure customer safety and satisfaction.
          </p>
          <p>
            From small home setups to large commercial and institutional projects, our
            team designs and installs surveillance systems tailored to your exact needs.
          </p>
        </div>
        <div className="about-team">
          <h3>Team</h3>
          <ul>
            <li>
              <span className="role">Chairperson</span>
              <span className="name">Nitish Kumar</span>
              <span className="phone">📞 9334276124, 9102482501</span>
            </li>
            <li>
              <span className="role">Staff Manager</span>
              <span className="name">Himanshu Kumar</span>
            </li>
            <li>
              <span className="role">Receptionist</span>
              <span className="name">Priyanka Kumari</span>
            </li>
            <li>
              <span className="role">Technical Staff</span>
              <span className="name">Sudhanshu Kumar</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


