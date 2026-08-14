import React, { useState } from 'react';
import copy from '../copy.json';

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
          <p className="contact-eyebrow">{copy.contact.eyebrow}</p>
          <h2 className="contact-title">{copy.contact.headline}</h2>
          <p className="contact-body">{copy.contact.body}</p>
        </div>

        <div className="contact-panel">
          {submitted ? (
            <div className="contact-success" role="status">
              <h3>{copy.contact.successTitle}</h3>
              <p>{copy.contact.successBody}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label className="contact-field">
                <span>{copy.contact.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={copy.contact.emailPlaceholder}
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
                {errors.email ? <em className="contact-error">{errors.email}</em> : null}
              </label>
              <label className="contact-field">
                <span>{copy.contact.companyLabel}</span>
                <input
                  type="text"
                  name="company"
                  placeholder={copy.contact.companyPlaceholder}
                  value={form.company}
                  onChange={onChange}
                  autoComplete="organization"
                />
                {errors.company ? <em className="contact-error">{errors.company}</em> : null}
              </label>
              <button type="submit" className="btn contact-submit">
                {copy.contact.cta}
              </button>
              <p className="contact-note">{copy.contact.note}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
