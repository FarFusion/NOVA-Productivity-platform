import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Bring your team together, create projects, and organize everything in one central workspace.",
    },
    {
      number: "02",
      title: "Automate your workflow",
      description:
        "Use NOVA's intelligent automation to handle repetitive tasks and keep your projects moving.",
    },
    {
      number: "03",
      title: "Grow with insights",
      description:
        "Track performance, discover bottlenecks, and use real-time insights to make better decisions.",
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__eyebrow">
            Simple by design
          </span>

          <h2 className="section-header__title">
            Get more done in
            <span>three simple steps.</span>
          </h2>

          <p className="section-header__description">
            NOVA removes the complexity from team productivity so you
            can focus on meaningful work.
          </p>
        </div>

        {/* Steps */}
        <div className="how-it-works__steps">

          {steps.map((step, index) => (
            <article
              className="step"
              key={step.number}
            >
              <div className="step__number">
                {step.number}
              </div>

              <div className="step__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step__connector">
                  <span>→</span>
                </div>
              )}
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;