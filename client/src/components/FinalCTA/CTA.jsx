import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">

        <div className="cta__box">

          {/* Background Glow */}
          <div className="cta__glow"></div>

          {/* Content */}
          <div className="cta__content">

            <span className="section-label">
              GET STARTED
            </span>

            <h2>
              Ready to work smarter?
            </h2>

            <p>
              Join thousands of teams using NOVA to automate
              work, collaborate better, and move faster.
            </p>

            {/* CTA Buttons */}
            <div className="cta__actions">

              <a
                href="#pricing"
                className="cta__button cta__button--primary"
              >
                Start for free
              </a>

              <a
                href="#how-it-works"
                className="cta__button cta__button--secondary"
              >
                Book a demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;