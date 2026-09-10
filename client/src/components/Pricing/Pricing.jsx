import { useState } from "react";
import "./Pricing.css";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For individuals getting started with smarter workflows.",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Up to 3 projects",
        "Basic automation",
        "5 GB storage",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      description: "For growing teams that need more power and automation.",
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        "Unlimited projects",
        "Advanced automation",
        "100 GB storage",
        "Team collaboration",
        "Priority support",
      ],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations that need advanced control and support.",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">PRICING</span>

          <h2>
            Simple pricing that scales with you
          </h2>

          <p>
            Start for free and upgrade when your team needs
            more power, automation, and flexibility.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="pricing__toggle-wrapper">

          <div className="pricing__toggle">

            <button
              className={!isAnnual ? "active" : ""}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>

            <button
              className={isAnnual ? "active" : ""}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>

          </div>

          <span className="pricing__save">
            Save 20%
          </span>

        </div>

        {/* Pricing Cards */}
        <div className="pricing__grid">

          {plans.map((plan) => {

            const price = isAnnual
              ? plan.annualPrice
              : plan.monthlyPrice;

            return (
              <article
                className={`pricing-card ${
                  plan.popular ? "pricing-card--popular" : ""
                }`}
                key={plan.name}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <span className="pricing-card__badge">
                    MOST POPULAR
                  </span>
                )}

                {/* Plan Information */}
                <div className="pricing-card__top">

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                  <div className="pricing-card__price">
                    <strong>${price}</strong>

                    <span>/month</span>
                  </div>

                  {isAnnual && plan.monthlyPrice > 0 && (
                    <small>
                      Billed annually
                    </small>
                  )}

                </div>

                {/* Features */}
                <ul className="pricing-card__features">

                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}

                </ul>

                {/* Button */}
                <button className="pricing-card__button">
                  {plan.button}
                </button>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Pricing;