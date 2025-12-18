import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo" onClick={() => handleScroll("home")}>
          <span className="logo-mark">S</span>
          <span className="logo-text">
            Securenexa <span>Technologies</span>
          </span>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <button onClick={() => handleScroll("services")}>Services</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


