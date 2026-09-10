import "./Stats.css";

function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Teams using NOVA",
    },
    {
      value: "2.5M+",
      label: "Tasks automated",
    },
    {
      value: "98%",
      label: "Customer satisfaction",
    },
    {
      value: "40%",
      label: "Average time saved",
    },
  ];

  return (
    <section className="stats">
      <div className="container">

        <div className="stats__grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong className="stat__value">
                {stat.value}
              </strong>

              <span className="stat__label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;