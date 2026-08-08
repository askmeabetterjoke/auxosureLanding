import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.email.trim()) {
      next.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid work email';
    }
    if (!form.company.trim()) next.company = 'Company is required';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow">Auxosure</p>
          <h2 className="contact-title">
            The agency workflow exists. Making it work inside your operation is the hard part.
          </h2>
          <p className="contact-body">
            Voice, intake, renewals, and routing only stick when they match your playbooks and
            systems. We co-build it and co-own the result.{' '}
            <strong>Your team runs it on day one.</strong>
          </p>
        </div>

        <div className="contact-panel">
          {submitted ? (
            <div className="contact-success" role="status">
              <h3>Thanks. We got it.</h3>
              <p>Someone from Auxosure will reach out shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label className="contact-field">
                <span>Work email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@agency.com"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
                {errors.email ? <em className="contact-error">{errors.email}</em> : null}
              </label>
              <label className="contact-field">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Agency or MGA name"
                  value={form.company}
                  onChange={onChange}
                  autoComplete="organization"
                />
                {errors.company ? <em className="contact-error">{errors.company}</em> : null}
              </label>
              <button type="submit" className="btn contact-submit">
                Talk to the team
              </button>
              <p className="contact-note">We read every submission.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
