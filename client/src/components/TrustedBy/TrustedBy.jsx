import "./TrustedBy.css";

function TrustedBy() {
  const companies = [
    "Vercel",
    "Linear",
    "Stripe",
    "Notion",
    "Slack",
  ];

  return (
    <section className="trusted-by">
      <div className="container">

        <p className="trusted-by__label">
          Trusted by teams at
        </p>

        <div className="trusted-by__companies">
          {companies.map((company) => (
            <span
              className="trusted-by__company"
              key={company}
            >
              {company}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBy;