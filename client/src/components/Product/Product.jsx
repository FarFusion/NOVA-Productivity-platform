import "./Product.css";

function Product() {
  const benefits = [
    "Centralized workspace for your entire team",
    "AI-powered workflows that save hours every week",
    "Real-time collaboration across every project",
  ];

  return (
    <section className="product section" id="product">
      <div className="container">
        <div className="product__container">

          {/* Content */}
          <div className="product__content">

            <span className="product__eyebrow">
              One intelligent workspace
            </span>

            <h2 className="product__title">
              Everything your team needs,
              <span>together.</span>
            </h2>

            <p className="product__description">
              NOVA brings projects, tasks, conversations, automation,
              and analytics into one simple workspace built for modern
              teams.
            </p>

            <ul className="product__benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="product__check">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <a href="#how-it-works" className="product__link">
              Explore how NOVA works
              <span>→</span>
            </a>

          </div>

          {/* Product Visual */}
          <div className="product__visual">

            <div className="product__glow"></div>

            <div className="product-window">

              {/* Window Header */}
              <div className="product-window__header">
                <div className="product-window__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="product-window__title">
                  nova.app
                </span>

                <div className="product-window__avatar">
                  A
                </div>
              </div>

              {/* Window Body */}
              <div className="product-window__body">

                <aside className="product-window__sidebar">

                  <div className="product-window__logo">
                    <span>✦</span>
                    NOVA
                  </div>

                  <div className="product-window__nav">
                    <span className="active">Overview</span>
                    <span>Projects</span>
                    <span>Tasks</span>
                    <span>Calendar</span>
                    <span>Analytics</span>
                  </div>

                </aside>

                <main className="product-window__main">

                  <div className="product-window__welcome">
                    <span>Workspace</span>
                    <h3>Good morning, Alex</h3>
                  </div>

                  <div className="product-window__cards">

                    <div className="product-mini-card">
                      <span>Active projects</span>
                      <strong>12</strong>
                      <small>+3 this month</small>
                    </div>

                    <div className="product-mini-card">
                      <span>Tasks completed</span>
                      <strong>248</strong>
                      <small>+18.2%</small>
                    </div>

                  </div>

                  <div className="product-window__activity">

                    <div className="product-window__activity-header">
                      <span>Recent activity</span>
                      <span>View all</span>
                    </div>

                    <div className="activity-item">
                      <span className="activity-item__icon">✓</span>

                      <div>
                        <strong>Landing page completed</strong>
                        <small>Marketing · 10 min ago</small>
                      </div>
                    </div>

                    <div className="activity-item">
                      <span className="activity-item__icon">✦</span>

                      <div>
                        <strong>AI generated project summary</strong>
                        <small>Product · 32 min ago</small>
                      </div>
                    </div>

                    <div className="activity-item">
                      <span className="activity-item__icon">+</span>

                      <div>
                        <strong>New team member added</strong>
                        <small>Engineering · 1 hr ago</small>
                      </div>
                    </div>

                  </div>

                </main>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Product;