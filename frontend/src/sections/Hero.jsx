import React from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Left Column */}
          <div className="hero__left">
            <div className="hero__eyebrow hero-anim-1">
              <span className="hero__eyebrow-dot" />
              <span>Automated Insurance Helper for Hospitals</span>
            </div>

            <h1 className="hero__headline hero-anim-2">
              Automate Hospital Claims & <span className="accent">Insurance Workflows</span>
            </h1>

            <p className="hero__subtext hero-anim-3">
              We turn slow, manual hospital paperwork into fast, automated, and error-free insurance claims. We move your hospital from messy, unstructured doctor notes to clean digital files that insurance systems can read and approve instantly.
            </p>

            <div className="hero__cta-row hero-anim-4">
              <Button
                label="Request Demo"
                variant="primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
              <Button
                label="Talk to Us"
                variant="ghost"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
            </div>
          </div>

          {/* Right Column — Claims Validation Card (Mockup UI) */}
          <div className="hero__right" style={{ flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <div className="mockup-card hero-anim-card cvc">
              {/* Header */}
              <div className="mockup-card__header">
                <span className="mockup-card__claim-id">
                  <span className="cvc__badge-dot" />
                  Simulated Claims Checking Demo
                </span>
                <Badge label="Demo Preview" variant="success" />
              </div>

              <div className="mockup-card__divider" />

              {/* Steps */}
              <ol className="cvc__steps">
                {[
                  {
                    num: "✓",
                    state: "done",
                    title: "Verify patient details instantly",
                    detail: "Pull patient policies and records automatically.",
                    tag: null,
                  },
                  {
                    num: "✓",
                    state: "done",
                    title: "Autofill claims & codes",
                    detail: "System suggests correct treatment codes automatically.",
                    tag: { label: "Standard Compliant", variant: "default" },
                  },
                  {
                    num: "3",
                    state: "active",
                    title: "Catch mistakes automatically",
                    detail:
                      "Flags missing documents and incorrect numbers before sending.",
                    tag: null,
                  },
                  {
                    num: "4",
                    state: "idle",
                    title: "Submit in one click",
                    detail:
                      "Reviewer approves and sends directly to the insurance network.",
                    tag: { label: "Ready to send ✓", variant: "success" },
                  },
                ].map((step, i) => (
                  <li key={i} className={`cvc__step cvc__step--${step.state}`}>
                    <div className="cvc__step-num">{step.num}</div>
                    <div className="cvc__step-body">
                      <p className="cvc__step-title">{step.title}</p>
                      <p className="cvc__step-detail">{step.detail}</p>
                      {step.tag && (
                        <span
                          className={`cvc__step-tag cvc__step-tag--${step.tag.variant}`}
                        >
                          {step.tag.label}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mockup-card__divider" />

              {/* Stats footer */}
              <div className="cvc__stats">
                {[
                  { value: "70%", label: "fewer rejections", color: "warn" },
                  { value: "₹15", label: "cost per claim", color: "blue" },
                  { value: "10-15min", label: "processing time", color: "green" },
                ].map((s, i) => (
                  <div key={i} className="cvc__stat">
                    <span className={`cvc__stat-val cvc__stat-val--${s.color}`}>
                      {s.value}
                    </span>
                    <span className="cvc__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              textAlign: 'center',
              margin: '0',
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              animation: 'heroFadeUp 0.3s ease-out both',
              animationDelay: '0.4s'
            }}>
              * Note: No live AI or backend is connected yet. This is a simulated frontend demonstration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
