import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Top */}
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">

            <a href="#" className="footer__logo">
              NOVA
            </a>

            <p>
              AI-powered productivity for teams that want
              to work smarter and move faster.
            </p>

          </div>

          {/* Product Links */}
          <div className="footer__column">

            <h3>Product</h3>

            <a href="#features">Features</a>
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>

          </div>

          {/* Solutions Links */}
          <div className="footer__column">

            <h3>Solutions</h3>

            <a href="#solutions">Marketing</a>
            <a href="#solutions">Operations</a>
            <a href="#solutions">Remote teams</a>
            <a href="#solutions">Product teams</a>

          </div>

          {/* Company Links */}
          <div className="footer__column">

            <h3>Company</h3>

            <a href="#testimonials">Customers</a>
            <a href="#faq">FAQ</a>
            <a href="#cta">Get started</a>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">

          <p>
            © 2026 NOVA. All rights reserved.
          </p>

          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;