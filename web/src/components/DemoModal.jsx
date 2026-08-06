import React, { useEffect, useRef, useState } from 'react';

const DemoModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    firstInputRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', role: '' });
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email';
    }
    if (!form.company.trim()) next.company = 'Company is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          ×
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h2 id="demo-modal-title">Request received</h2>
            <p>
              Thanks, {form.name.split(' ')[0]}! Our team will reach out within one business day
              to schedule your Auxo demo.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="demo-modal-title">Request a Demo</h2>
            <p>See how Auxo handles renewals, FNOL intake, and quoting for your team.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="demo-name">Full name</label>
                <input
                  ref={firstInputRef}
                  id="demo-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'error-field' : ''}
                  autoComplete="name"
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="demo-email">Work email</label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'error-field' : ''}
                  autoComplete="email"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="demo-company">Company</label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className={errors.company ? 'error-field' : ''}
                  autoComplete="organization"
                />
                {errors.company && <div className="error">{errors.company}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="demo-role">Role</label>
                <select id="demo-role" name="role" value={form.role} onChange={handleChange}>
                  <option value="">Select a role</option>
                  <option value="broker">Broker / Producer</option>
                  <option value="underwriter">Underwriter</option>
                  <option value="ops">Operations</option>
                  <option value="executive">Executive</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Request a Demo
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
