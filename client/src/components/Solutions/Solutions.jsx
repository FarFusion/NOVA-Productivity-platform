import "./Solutions.css";

function Solutions() {
  const useCases = [
    {
      icon: "📣",
      title: "Marketing Teams",
      description:
        "Plan campaigns, manage content, and automate repetitive marketing tasks.",
    },
    {
      icon: "⚙️",
      title: "Operations Teams",
      description:
        "Streamline workflows, monitor processes, and keep daily operations organized.",
    },
    {
      icon: "🤝",
      title: "Remote Teams",
      description:
        "Stay aligned with shared workspaces, automated updates, and real-time collaboration.",
    },
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">USE CASES</span>

          <h2>
            Built for every team
          </h2>

          <p>
            NOVA helps teams work smarter by bringing projects,
            automation, and collaboration into one powerful workspace.
          </p>
        </div>

        {/* Featured Solution */}
        <div className="solutions__featured">

          <div className="solutions__content">

            <span className="solutions__tag">
              FOR PRODUCT TEAMS
            </span>

            <h3>
              Turn ideas into products, faster.
            </h3>

            <p>
              Give your product team one place to plan projects,
              track progress, automate repetitive tasks, and
              collaborate with everyone involved.
            </p>

            <ul className="solutions__list">
              <li>
                <span>✓</span>
                Plan and organize projects
              </li>

              <li>
                <span>✓</span>
                Automate repetitive workflows
              </li>

              <li>
                <span>✓</span>
                Track team performance
              </li>

              <li>
                <span>✓</span>
                Collaborate in real time
              </li>
            </ul>

            <a href="#how-it-works" className="solutions__link">
              See how it works →
            </a>

          </div>

          {/* Dashboard Visual */}
          <div className="solutions__visual">

            <div className="solutions-window">

              <div className="solutions-window__header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>Product Workspace</span>
              </div>

              <div className="solutions-window__body">

                <div className="workspace-sidebar">
                  <div className="sidebar-line active"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                </div>

                <div className="workspace-content">

                  <div className="workspace-title">
                    <div className="title-line"></div>
                    <div className="title-small"></div>
                  </div>

                  <div className="workspace-cards">
                    <div className="workspace-card">
                      <span>Tasks</span>
                      <strong>24</strong>
                    </div>

                    <div className="workspace-card">
                      <span>Completed</span>
                      <strong>18</strong>
                    </div>

                    <div className="workspace-card">
                      <span>Progress</span>
                      <strong>82%</strong>
                    </div>
                  </div>

                  <div className="workspace-progress">
                    <div className="progress-label">
                      <span>Project progress</span>
                      <span>82%</span>
                    </div>

                    <div className="progress-bar">
                      <span></span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Other Use Cases */}
        <div className="solutions__grid">

          {useCases.map((useCase) => (
            <article
              className="solution-card"
              key={useCase.title}
            >
              <div className="solution-card__icon">
                {useCase.icon}
              </div>

              <h3>{useCase.title}</h3>

              <p>{useCase.description}</p>

              <a href="#features">
                Explore solution →
              </a>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Solutions;