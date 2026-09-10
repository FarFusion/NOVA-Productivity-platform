import "./Features.css";

function Features() {
  const features = [
    {
      icon: "✦",
      title: "AI Assistant",
      description:
        "Get intelligent suggestions, summaries, and insights that help your team move faster.",
    },
    {
      icon: "⚡",
      title: "Smart Automation",
      description:
        "Automate repetitive workflows and spend more time on the work that actually matters.",
    },
    {
      icon: "◈",
      title: "Real-time Analytics",
      description:
        "Turn your team's activity into clear insights with powerful productivity analytics.",
    },
    {
      icon: "◉",
      title: "Project Management",
      description:
        "Plan projects, organize tasks, and keep every deadline visible from one workspace.",
    },
    {
      icon: "◎",
      title: "Team Collaboration",
      description:
        "Bring conversations, tasks, files, and updates together so everyone stays aligned.",
    },
    {
      icon: "◆",
      title: "Powerful Integrations",
      description:
        "Connect NOVA with the tools your team already uses and create one connected workflow.",
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__eyebrow">
            Everything in one place
          </span>

          <h2 className="section-header__title">
            Powerful tools for
            <span>productive teams.</span>
          </h2>

          <p className="section-header__description">
            NOVA brings your projects, people, workflows, and insights
            together in one intelligent workspace.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="features__grid">
          {features.map((feature) => (
            <article
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-card__icon">
                {feature.icon}
              </div>

              <h3 className="feature-card__title">
                {feature.title}
              </h3>

              <p className="feature-card__description">
                {feature.description}
              </p>

              <span className="feature-card__arrow">
                →
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;