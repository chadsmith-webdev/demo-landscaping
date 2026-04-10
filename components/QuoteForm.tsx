"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Send } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SERVICE_TYPES = [
  { value: "lawn-care", label: "Lawn Care & Maintenance" },
  { value: "hardscaping", label: "Hardscaping & Patios" },
  { value: "irrigation", label: "Irrigation Systems" },
  { value: "garden-design", label: "Garden & Planting Design" },
  { value: "spring-cleanup", label: "Spring Cleanup" },
  { value: "fall-prep", label: "Fall Prep & Aeration" },
  { value: "winterization", label: "Irrigation Winterization" },
  { value: "full-landscape", label: "Full Landscape Transformation" },
  { value: "other", label: "Other / Not Sure" },
];

const VALID_ZIPS = [
  "72761",
  "72734",
  "72722",
  "72736",
  "72718",
  "72712",
  "72404",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  serviceType: string;
  projectSize: string;
  description: string;
  timeline: string;
  howHeard: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  serviceType: "",
  projectSize: "",
  description: "",
  timeline: "",
  howHeard: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.zip.trim() || !/^\d{5}$/.test(form.zip))
      newErrors.zip = "Valid 5-digit ZIP code required";
    if (!form.serviceType) newErrors.serviceType = "Please select a service";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // In production this would POST to an API route
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          borderRadius: "20px",
          backgroundColor: "var(--color-slate-surface)",
          border: "1px solid oklch(32% 0.11 148)",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "oklch(22% 0.07 148)",
            border: "2px solid oklch(52% 0.17 148)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <CheckCircle size={32} style={{ color: "oklch(52% 0.17 148)" }} />
        </motion.div>
        <h2 style={{ marginBottom: "0.75rem" }}>Request Received!</h2>
        <p style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
          Thank you, {form.name.split(" ")[0]}. We&apos;ll review your project
          details and reach out within one business day with your free estimate.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href={BUSINESS.phoneHref} className='btn-primary'>
            <Phone size={15} />
            Call Us Now
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(INITIAL_STATE);
            }}
            className='btn-secondary'
          >
            Submit Another Request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Name + Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
          className='sm:grid-cols-2'
        >
          <Field
            label='Full Name *'
            name='name'
            type='text'
            placeholder='Jane Smith'
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete='name'
          />
          <Field
            label='Email Address *'
            name='email'
            type='email'
            placeholder='jane@example.com'
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete='email'
          />
        </div>

        {/* Phone + ZIP */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <Field
            label='Phone Number *'
            name='phone'
            type='tel'
            placeholder='(479) 555-0100'
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete='tel'
          />
          <div className='form-field'>
            <label className='form-label' htmlFor='zip'>
              ZIP Code *{" "}
              <span
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.7rem",
                  textTransform: "none",
                  letterSpacing: 0,
                }}
              >
                (we&apos;ll verify service availability)
              </span>
            </label>
            <input
              id='zip'
              name='zip'
              type='text'
              inputMode='numeric'
              maxLength={5}
              placeholder='72761'
              value={form.zip}
              onChange={handleChange}
              className='form-input'
              autoComplete='postal-code'
              aria-invalid={!!errors.zip}
              aria-describedby={errors.zip ? "zip-error" : undefined}
            />
            <AnimatePresence>
              {errors.zip && (
                <motion.p
                  id='zip-error'
                  role='alert'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    color: "oklch(65% 0.18 27)",
                    fontSize: "0.78rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {errors.zip}
                </motion.p>
              )}
              {form.zip.length === 5 && !errors.zip && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    color: "oklch(55% 0.17 148)",
                    fontSize: "0.78rem",
                    marginTop: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <CheckCircle size={12} />
                  Service area confirmed
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Service Type */}
        <div className='form-field'>
          <label className='form-label' htmlFor='serviceType'>
            Service Type *
          </label>
          <select
            id='serviceType'
            name='serviceType'
            value={form.serviceType}
            onChange={handleChange}
            className='form-input'
            aria-invalid={!!errors.serviceType}
          >
            <option value='' disabled>
              Select the service you need...
            </option>
            {SERVICE_TYPES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.serviceType && (
              <motion.p
                role='alert'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  color: "oklch(65% 0.18 27)",
                  fontSize: "0.78rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.serviceType}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Project Size */}
        <div className='form-field'>
          <label className='form-label' htmlFor='projectSize'>
            Approximate Project Size
          </label>
          <select
            id='projectSize'
            name='projectSize'
            value={form.projectSize}
            onChange={handleChange}
            className='form-input'
          >
            <option value=''>Select a range (optional)...</option>
            <option value='small'>Small — Under $500</option>
            <option value='medium'>Medium — $500 to $2,500</option>
            <option value='large'>Large — $2,500 to $10,000</option>
            <option value='major'>Major — $10,000+</option>
            <option value='unknown'>Not sure / Need assessment</option>
          </select>
        </div>

        {/* Description */}
        <div className='form-field'>
          <label className='form-label' htmlFor='description'>
            Describe Your Project
          </label>
          <textarea
            id='description'
            name='description'
            value={form.description}
            onChange={handleChange}
            className='form-input'
            placeholder="Tell us what you're envisioning — what's the current state of your yard? What would you like it to look like? Any specific challenges (slope, drainage, shade)?"
            rows={5}
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Timeline + How Heard */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div className='form-field'>
            <label className='form-label' htmlFor='timeline'>
              Desired Start Date
            </label>
            <select
              id='timeline'
              name='timeline'
              value={form.timeline}
              onChange={handleChange}
              className='form-input'
            >
              <option value=''>Select a timeline...</option>
              <option value='asap'>As Soon As Possible</option>
              <option value='1month'>Within 1 Month</option>
              <option value='3months'>Within 3 Months</option>
              <option value='season'>This Season</option>
              <option value='planning'>Just Planning / Getting Quotes</option>
            </select>
          </div>
          <div className='form-field'>
            <label className='form-label' htmlFor='howHeard'>
              How Did You Hear About Us?
            </label>
            <select
              id='howHeard'
              name='howHeard'
              value={form.howHeard}
              onChange={handleChange}
              className='form-input'
            >
              <option value=''>Select one...</option>
              <option value='google'>Google Search</option>
              <option value='referral'>Friend / Neighbor Referral</option>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>Instagram</option>
              <option value='nextdoor'>Nextdoor</option>
              <option value='sign'>Yard Sign</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <motion.button
          type='submit'
          className='btn-primary'
          style={{
            justifyContent: "center",
            fontSize: "1rem",
            padding: "1.1rem",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send size={17} />
          Send My Quote Request — It&apos;s Free
        </motion.button>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
          }}
        >
          No obligation. No spam. We&apos;ll respond within one business day.
          <br />
          {BUSINESS.hours.display}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}: {
  label: string;
  name: keyof FormState;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className='form-field'>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='form-input'
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${name}-error`}
            role='alert'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              color: "oklch(65% 0.18 27)",
              fontSize: "0.78rem",
              marginTop: "0.25rem",
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
