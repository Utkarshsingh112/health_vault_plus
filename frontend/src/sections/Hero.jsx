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
              <span>NHCX & ABDM Compliant</span>
            </div>

            <h1 className="hero__headline hero-anim-2">
              <span className="accent">PMJAY</span> Integrated Hospital Software
            </h1>

            <p className="hero__subtext hero-anim-3">
              Automate your insurance workflows with our ABDM-certified platform. Connect directly to NHCX and seamlessly process PMJAY claims without manual entry.
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
          <div className="hero__right">
            <div className="mockup-card hero-anim-card cvc">
              {/* Header */}
              <div className="mockup-card__header">
                <span className="mockup-card__claim-id">
                  <span className="cvc__badge-dot" />
                  NHCX · FHIR · ABDM
                </span>
                <Badge label="Live Scan" variant="success" />
              </div>

              <div className="mockup-card__divider" />

              {/* Steps */}
              <ol className="cvc__steps">
                {[
                  {
                    num: "✓",
                    state: "done",
                    title: "Patient data fetched",
                    detail: "ABHA ID pulls records & policy instantly.",
                    tag: null,
                  },
                  {
                    num: "✓",
                    state: "done",
                    title: "Claim auto-filled & coded",
                    detail: "ICD-10, SNOMED — suggested automatically.",
                    tag: { label: "FHIR-compliant", variant: "default" },
                  },
                  {
                    num: "3",
                    state: "active",
                    title: "Errors detected & corrected",
                    detail:
                      "Missing modifiers, wrong codes — fixed before send.",
                    tag: null,
                  },
                  {
                    num: "4",
                    state: "idle",
                    title: "One click to NHCX",
                    detail:
                      "Reviewer confirms. Submitted straight to exchange.",
                    tag: { label: "Straight to NHCX ✓", variant: "success" },
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
          </div>
        </div>
      </div>
    </section>
  );
}
