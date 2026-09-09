import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">

        {/* Hero Content */}
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot"></span>
            AI-powered productivity platform
          </div>

          <h1 className="hero__title">
            Build Better.
            <span>Work Smarter.</span>
          </h1>

          <p className="hero__description">
            NOVA helps modern teams manage projects, automate repetitive
            tasks, and collaborate more efficiently — all from one powerful
            workspace.
          </p>

          <div className="hero__actions">
            <a href="#pricing" className="btn btn-primary">
              Start Free
            </a>

            <a href="#how-it-works" className="btn btn-secondary">
              See How It Works
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__avatars">
              <span>F</span>
              <span>A</span>
              <span>R</span>
              <span>+</span>
            </div>

            <div>
              <strong>10,000+ teams</strong>
              <p>already working smarter</p>
            </div>
          </div>

        </div>

        {/* Product Visual */}
        <div className="hero__visual">

          <div className="hero__glow"></div>

          <div className="dashboard">

            {/* Dashboard Header */}
            <div className="dashboard__header">
              <div className="dashboard__brand">
                <span className="dashboard__brand-icon">✦</span>
                NOVA
              </div>

              <div className="dashboard__profile">
                <span></span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="dashboard__body">

              <div className="dashboard__sidebar">
                <div className="dashboard__sidebar-item dashboard__sidebar-item--active">
                  Overview
                </div>

                <div className="dashboard__sidebar-item">
                  Projects
                </div>

                <div className="dashboard__sidebar-item">
                  Tasks
                </div>

                <div className="dashboard__sidebar-item">
                  Analytics
                </div>
              </div>

              <div className="dashboard__main">

                <div className="dashboard__welcome">
                  <p>Good morning, Alex 👋</p>
                  <h3>Here's your productivity overview.</h3>
                </div>

                <div className="dashboard__stats">

                  <div className="dashboard__stat-card">
                    <span>Tasks completed</span>
                    <strong>248</strong>
                    <small>+18.2%</small>
                  </div>

                  <div className="dashboard__stat-card">
                    <span>Projects</span>
                    <strong>24</strong>
                    <small>+4 this week</small>
                  </div>

                  <div className="dashboard__stat-card">
                    <span>Productivity</span>
                    <strong>92%</strong>
                    <small>Excellent</small>
                  </div>

                </div>

                <div className="dashboard__chart">

                  <div className="dashboard__chart-header">
                    <div>
                      <span>Weekly productivity</span>
                      <strong>84%</strong>
                    </div>

                    <span className="dashboard__chart-badge">
                      +12.5%
                    </span>
                  </div>

                  <div className="dashboard__chart-area">
                    <div className="chart-line chart-line--one"></div>
                    <div className="chart-line chart-line--two"></div>
                    <div className="chart-line chart-line--three"></div>
                    <div className="chart-line chart-line--four"></div>

                    <div className="chart-graph">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;