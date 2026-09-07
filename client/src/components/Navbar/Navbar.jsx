import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__container">

        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon">✦</span>
          NOVA
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__links">
          <a href="#features">Features</a>
          <a href="#product">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar__actions">
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar__menu-button"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`navbar__mobile-menu ${
          isMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#product" onClick={closeMenu}>
          Product
        </a>

        <a href="#solutions" onClick={closeMenu}>
          Solutions
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Navbar;