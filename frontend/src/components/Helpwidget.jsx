import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "What is Health Vault Plus?",
    a: "Health Vault Plus is a pre-authorization intelligence tool. It checks your health insurance claim documents before you file — catching coverage gaps, missing paperwork, and code errors so you walk away with the maximum payout you're entitled to.",
  },
  {
    q: "What does a pre-auth check actually do?",
    a: "It validates everything before your claim is submitted — policy coverage, document completeness, and medical code accuracy. Instead of discovering problems after a rejection, you fix them upfront.",
  },
  {
    q: "Who is this built for?",
    a: "Policyholders who want their claim to go through without shortfalls, hospitals helping patients secure cashless approval, and insurance advisors ensuring clients receive every rupee they're entitled to.",
  },
  {
    q: "Will my claim definitely get approved?",
    a: "We can't guarantee approval — only the insurer decides that. But we make sure that from your side, everything is correct, complete, and in order before you file, giving you the strongest possible position.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the contact form and our team will reach out within 24 hours to walk you through how Health Vault Plus works for your specific case.",
  },
];

export default function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [view, setView] = useState("main"); // 'main' | 'form'
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        const btn = document.getElementById("hvp-help-btn");
        if (btn && btn.contains(e.target)) return;
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_URL}/api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Could not reach the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setView("main");
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", query: "" });
  };

  return (
    <>
      {/* Pulse ring - only show when closed */}
      {!open && <div className="hvp-pulse-ring" />}

      {/* Floating button */}
      <button
        id="hvp-help-btn"
        className={`hvp-widget-btn${open ? " open" : ""}`}
        onClick={() => {
          setOpen((o) => !o);
          if (!open) {
            setView("main");
          }
        }}
        aria-label={open ? "Close help" : "Need help?"}
      >
        {/* Question mark */}
        <svg
          className="icon-q"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <text
            x="12"
            y="18"
            textAnchor="middle"
            fontSize="22"
            fontWeight="800"
            fill="white"
            fontFamily="serif"
          >
            ?
          </text>
        </svg>
        {/* Close X */}
        <svg
          className="icon-close"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M1 1L17 17M17 1L1 17"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="hvp-panel" ref={panelRef}>
          <div className="hvp-panel-header">
            {view === "form" && (
              <button
                className="hvp-form-back"
                onClick={() => {
                  setView("main");
                  setSubmitted(false);
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9 2L4 7L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
            )}
            <h3>
              <span className="hvp-header-dot" />
              {view === "form" ? "Contact Us" : "Need more details?"}
            </h3>
            <p>
              {view === "form"
                ? "Fill in the form and we'll get back to you within 24 hours."
                : "We're here to help. Browse FAQs or reach out directly."}
            </p>
          </div>

          <div className="hvp-panel-body">
            {view === "main" && (
              <>
                {/* CTA to contact form */}
                <button
                  className="hvp-cta-contact"
                  onClick={() => setView("form")}
                >
                  <div className="hvp-cta-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="hvp-cta-text">
                    <strong>Contact Us</strong>
                    <span>Send us your query — we respond within 24 hrs</span>
                  </div>
                </button>

                {/* FAQs */}
                <p className="hvp-faq-label">Quick Answers</p>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`hvp-faq-item${expandedFaq === i ? " active" : ""}`}
                  >
                    <button
                      className="hvp-faq-q"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === i ? null : i)
                      }
                    >
                      {faq.q}
                      <svg
                        className="hvp-faq-chevron"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {expandedFaq === i && (
                      <div className="hvp-faq-a">{faq.a}</div>
                    )}
                  </div>
                ))}
              </>
            )}

            {view === "form" && !submitted && (
              <form onSubmit={handleSubmit}>
                <div className="hvp-field">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    placeholder="Dr. Priya Sharma"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>
                <div className="hvp-field">
                  <label>Business Email *</label>
                  <input
                    type="email"
                    placeholder="you@hospital.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
                <div className="hvp-field">
                  <label>Contact Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </div>
                <div className="hvp-field">
                  <label>Your Query *</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you'd like to know or discuss..."
                    required
                    value={form.query}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, query: e.target.value }))
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="hvp-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}

            {view === "form" && submitted && (
              <div className="hvp-success">
                <div className="hvp-success-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path
                      d="M5 13L10.5 18.5L21 8"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Message Sent!</h4>
                <p>
                  We've received your query and will get back to you within 24
                  hours.
                </p>
                <button className="hvp-success-back" onClick={reset}>
                  Back to Help
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
