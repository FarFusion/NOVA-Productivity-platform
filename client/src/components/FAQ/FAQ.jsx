import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive workflows, and collaborate from one central workspace.",
    },
    {
      question: "Can I try NOVA for free?",
      answer:
        "Yes. NOVA offers a free Starter plan so individuals and small teams can explore the platform before upgrading to a paid plan.",
    },
    {
      question: "How does NOVA automation work?",
      answer:
        "You can create automated workflows that handle repetitive tasks based on triggers and actions, helping your team save time and stay focused on important work.",
    },
    {
      question: "Can my entire team use NOVA?",
      answer:
        "Yes. NOVA is designed for teams of different sizes, with collaboration features that allow members to work together, share information, and track progress.",
    },
    {
      question: "Does NOVA integrate with other tools?",
      answer:
        "NOVA is designed to connect with the tools your team already uses. Integrations can help synchronize information and reduce repetitive manual work.",
    },
    {
      question: "Can I cancel my plan at any time?",
      answer:
        "Yes. You can cancel your subscription whenever you want. Your access will continue according to the terms of your current billing period.",
    },
  ];

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq" id="faq">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">FAQ</span>

          <h2>
            Frequently asked questions
          </h2>

          <p>
            Everything you need to know about NOVA and how
            it can help your team work smarter.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq__list">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                key={faq.question}
              >

                {/* Question Button */}
                <button
                  className="faq__question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq__icon">
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="faq__answer"
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;