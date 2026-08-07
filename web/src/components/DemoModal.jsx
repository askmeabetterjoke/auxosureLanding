import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from './ServicePortfolio';

const DemoModal = ({ isOpen, onClose, mode = 'demo', initialServiceId = '' }) => {
  const isCall = mode === 'call';
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    service: initialServiceId || '',
    note: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const overlayRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = minimized ? '' : 'hidden';
    if (!minimized) firstInputRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, minimized]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setMinimized(false);
      setForm({
        name: '',
        email: '',
        company: '',
        role: '',
        service: '',
        note: '',
      });
      setErrors({});
    } else {
      setForm((prev) => ({
        ...prev,
        service: initialServiceId || prev.service,
      }));
    }
  }, [isOpen, initialServiceId]);

  if (!isOpen) return null;

  if (minimized) {
    return (
      <button
        type="button"
        className="modal-minimized"
        onClick={() => setMinimized(false)}
        aria-label="Restore Book a call dialog"
      >
        <span className="modal-minimized-label">Book a call</span>
        <span className="modal-minimized-action">Restore</span>
      </button>
    );
  }

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email';
    }
    if (!form.company.trim()) next.company = 'Company is required';
    if (isCall && !form.service) next.service = 'Pick a service to talk about';
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

  const serviceName =
    SERVICES.find((s) => s.id === form.service)?.name || 'your workflow';

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
        <div className="modal-controls">
          <button
            type="button"
            className="modal-control modal-control--minimize"
            onClick={() => setMinimized(true)}
            aria-label="Minimize dialog"
          >
            −
          </button>
          <button
            type="button"
            className="modal-control modal-control--close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h2 id="demo-modal-title">{isCall ? 'Call booked' : 'Request received'}</h2>
            <p>
              {isCall
                ? `Thanks, ${form.name.split(' ')[0]}. We will follow up within one business day to schedule a call on ${serviceName}.`
                : `Thanks, ${form.name.split(' ')[0]}! We will reach out within one business day to schedule your call.`}
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="demo-modal-title">Book a call</h2>
            <p>
              {isCall
                ? 'Tell us which workflow you want live first. We will come prepared with a three-week cut of that service.'
                : 'See Auxo on renewals, FNOL, and the ops work your team still does by hand.'}
            </p>
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
              {isCall && (
                <>
                  <div className="form-group">
                    <label htmlFor="demo-service">Service</label>
                    <select
                      id="demo-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={errors.service ? 'error-field' : ''}
                    >
                      <option value="">Which workflow first?</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {errors.service && <div className="error">{errors.service}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-note">Anything we should know? (optional)</label>
                    <input
                      id="demo-note"
                      name="note"
                      type="text"
                      value={form.note}
                      onChange={handleChange}
                      placeholder="Volume, AMS, carrier pressure…"
                    />
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Book a call
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
