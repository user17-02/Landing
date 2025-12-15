// src/AuditWizard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { FiTarget } from "react-icons/fi";
import "./AuditWizard.css";

function AuditWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    brandStage: "",
    primaryGoal: "",
    mainChallenge: "",
    channels: [],
    budgetRange: "",
    timeline: "",
    revenueRange: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: "" }));
  };

  const toggleChannel = (ch) => {
    setFormData((p) => ({
      ...p,
      channels: p.channels.includes(ch)
        ? p.channels.filter((c) => c !== ch)
        : [...p.channels, ch],
    }));
  };

  // LIVE validation for enabling Next button
  const isCurrentStepValid = () => {
    if (step === 1) {
      return (
        formData.name.trim() &&
        formData.email.trim() &&
        formData.company.trim() &&
        formData.website.trim() &&
        formData.brandStage
      );
    }
    if (step === 2) {
      return formData.primaryGoal.trim() && formData.mainChallenge.trim();
    }
    if (step === 3) {
      return (
        formData.budgetRange &&
        formData.timeline &&
        formData.revenueRange
      );
    }
    return true;
  };

  const isStepValid = isCurrentStepValid();

  // Validation for showing errors
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Required";
      if (!formData.email.trim()) newErrors.email = "Required";
      if (!formData.company.trim()) newErrors.company = "Required";
      if (!formData.website.trim()) newErrors.website = "Required";
      if (!formData.brandStage) newErrors.brandStage = "Required";
    }

    if (step === 2) {
      if (!formData.primaryGoal.trim()) newErrors.primaryGoal = "Required";
      if (!formData.mainChallenge.trim())
        newErrors.mainChallenge = "Required";
    }

    if (step === 3) {
      if (!formData.budgetRange) newErrors.budgetRange = "Required";
      if (!formData.timeline) newErrors.timeline = "Required";
      if (!formData.revenueRange) newErrors.revenueRange = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((s) => s + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  // FINAL submit — now triggered ONLY by button (never auto)
  const handleSubmitAudit = () => {
    toast.success("Your audit request has been submitted 🎉", {
      transition: Bounce,
      autoClose: 2500,
      theme: "dark",
      icon: "📊",
    });
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <section className="contact-wrapper" style={{ minHeight: "100vh" }}>
      <div className="contact-container">
        
        {/* LEFT PANEL */}
        <div className="contact-left">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="back-btn"
          >
            ← Back
          </button>

          <h2 className="contact-title">Free Growth Audit</h2>
          <p className="contact-sub">
            A focused, no-fluff teardown of your growth engine.
          </p>

          {/* Progress */}
          <p className="step-label">Step {step} of 5</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* RIGHT PANEL - NO FORM HERE (Fixes auto-submit forever) */}
        <div className="contact-form-card">
          
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3>Brand Basics</h3>
              <p className="step-sub">Tell us who you are.</p>

              <div className="audit-two-col">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className={`audit-input ${errors.name ? "error-field" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    className={`audit-input ${errors.email ? "error-field" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
              </div>

              <div className="audit-two-col">
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company *"
                    className={`audit-input ${errors.company ? "error-field" : ""}`}
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && (
                    <p className="error-text">{errors.company}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website / URL *"
                    className={`audit-input ${errors.website ? "error-field" : ""}`}
                    value={formData.website}
                    onChange={handleChange}
                  />
                  {errors.website && (
                    <p className="error-text">{errors.website}</p>
                  )}
                </div>
              </div>

              <div>
                <select
                  name="brandStage"
                  className={`audit-select ${errors.brandStage ? "error-field" : ""}`}
                  value={formData.brandStage}
                  onChange={handleChange}
                >
                  <option value="">Select brand stage *</option>
                  <option value="prelaunch">Pre-launch</option>
                  <option value="early">Early traction</option>
                  <option value="scaling">Scaling</option>
                  <option value="mature">Mature</option>
                </select>
                {errors.brandStage && (
                  <p className="error-text">{errors.brandStage}</p>
                )}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h3>Goals & Challenges</h3>

              <textarea
                name="primaryGoal"
                placeholder="Your primary growth goal *"
                className={`audit-textarea ${errors.primaryGoal ? "error-field" : ""}`}
                value={formData.primaryGoal}
                onChange={handleChange}
              />
              {errors.primaryGoal && (
                <p className="error-text">{errors.primaryGoal}</p>
              )}

              <textarea
                name="mainChallenge"
                placeholder="Your biggest challenges *"
                className={`audit-textarea ${errors.mainChallenge ? "error-field" : ""}`}
                value={formData.mainChallenge}
                onChange={handleChange}
              />
              {errors.mainChallenge && (
                <p className="error-text">{errors.mainChallenge}</p>
              )}
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h3>Budget, Timeline & Channels</h3>

              <label className="label-small">Active channels (optional):</label>

              <div className="channel-list">
                {[
                  "Google Ads",
                  "Meta / Instagram",
                  "YouTube",
                  "SEO / Organic",
                  "Email / CRM",
                  "Offline / Other",
                ].map((ch) => (
                  <button
                    type="button"
                    key={ch}
                    onClick={() => toggleChannel(ch)}
                    className={`channel-btn ${
                      formData.channels.includes(ch) ? "active" : ""
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>

              <div className="audit-two-col">
                <div>
                  <select
                    name="budgetRange"
                    className={`audit-select ${errors.budgetRange ? "error-field" : ""}`}
                    value={formData.budgetRange}
                    onChange={handleChange}
                  >
                    <option value="">Monthly budget *</option>
                    <option value="<2k">&lt; $2k</option>
                    <option value="2k-10k">$2k – $10k</option>
                    <option value="10k-50k">$10k – $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                  {errors.budgetRange && (
                    <p className="error-text">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <select
                    name="timeline"
                    className={`audit-select ${errors.timeline ? "error-field" : ""}`}
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Timeline *</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3">1–3 months</option>
                    <option value="3-6">3–6 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {errors.timeline && (
                    <p className="error-text">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <select
                name="revenueRange"
                className={`audit-select ${errors.revenueRange ? "error-field" : ""}`}
                value={formData.revenueRange}
                onChange={handleChange}
              >
                <option value="">Annual revenue *</option>
                <option value="<100k">&lt; $100k</option>
                <option value="100k-500k">$100k – $500k</option>
                <option value="500k-1m">$500k – $1M</option>
                <option value="1m-5m">$1M – $5M</option>
                <option value="5m+">$5M+</option>
              </select>
              {errors.revenueRange && (
                <p className="error-text">{errors.revenueRange}</p>
              )}
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h3>Extra Notes (optional)</h3>
              <textarea
                name="notes"
                className="audit-textarea"
                placeholder="Anything else?"
                value={formData.notes}
                onChange={handleChange}
              />
            </>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <>
              <h3>Review Your Submission</h3>

              <div className="review-box">
                {Object.entries(formData).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(value) ? value.join(", ") : value || "—"}
                  </p>
                ))}
              </div>
            </>
          )}

          {/* CONTROLS */}
          <div className="wizard-controls">
            {step > 1 ? (
              <button type="button" className="ghost-btn" onClick={prevStep}>
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 5 ? (
              <button
                type="button"
                className="send-btn"
                onClick={nextStep}
                disabled={!isStepValid}
                style={{
                  opacity: isStepValid ? 1 : 0.5,
                  cursor: isStepValid ? "pointer" : "not-allowed",
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="send-btn"
                onClick={handleSubmitAudit}
              >
                <FiTarget className="btn-icon" /> Submit Audit Request
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AuditWizard;
