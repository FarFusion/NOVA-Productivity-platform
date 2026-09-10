import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "NOVA completely changed how our team manages projects. We spend less time on repetitive tasks and more time building great products.",
      name: "Sarah Chen",
      role: "Product Lead",
      company: "Vertex Labs",
      initials: "SC",
    },
    {
      quote:
        "The automation alone saves our team several hours every week. Everything feels more organized and much easier to track.",
      name: "Marcus Lee",
      role: "CTO",
      company: "Orbit Systems",
      initials: "ML",
    },
    {
      quote:
        "NOVA gives our remote team a single place to collaborate, manage work, and understand what's happening across every project.",
      name: "Emily Carter",
      role: "Marketing Director",
      company: "Northstar",
      initials: "EC",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">CUSTOMER STORIES</span>

          <h2>
            Loved by teams that move fast
          </h2>

          <p>
            See how teams use NOVA to simplify their workflows,
            automate repetitive work, and get more done.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials__grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >

              {/* Rating */}
              <div className="testimonial-card__rating">
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote>
                "{testimonial.quote}"
              </blockquote>

              {/* Customer */}
              <div className="testimonial-card__customer">

                <div className="testimonial-card__avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>

                  <p>
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;