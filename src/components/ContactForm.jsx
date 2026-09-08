import { useState } from 'react'
import { siteContent } from '../data/siteContent'

const HONEY = 'vo_company'

export default function ContactForm() {
  const { form } = siteContent.contact
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  function setField(name) {
    return (e) => setValues((v) => ({ ...v, [name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (values[HONEY]) return
    if (status === 'sending') return

    if (form.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(form.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        })
        if (!res.ok) throw new Error('send failed')
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
      } catch (err) {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent('Message from portfolio')
      const body = encodeURIComponent(
        `Hi Valerie,\n\n${values.message}\n\n— ${values.name}\n(${values.email})`,
      )
      window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-form-row">
        <div className="field">
          <label htmlFor="cf-name">{form.nameLabel}</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={setField('name')}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{form.emailLabel}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={setField('email')}
          />
        </div>
      </div>

      <div className="field contact-form-message">
        <label htmlFor="cf-message">{form.messageLabel}</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={setField('message')}
        />
      </div>

      <div className="field contact-form-hp" aria-hidden="true">
        <label htmlFor="cf-company">Please leave this empty</label>
        <input
          id="cf-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values[HONEY]}
          onChange={setField(HONEY)}
        />
      </div>

      {status === 'sending' && (
        <p className="contact-form-status" role="status">
          Sending…
        </p>
      )}
      {status === 'success' && (
        <p className="contact-form-status is-success" role="status">
          {form.successMessage}
        </p>
      )}
      {status === 'error' && (
        <p className="contact-form-status is-error" role="alert">
          {form.errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary contact-form-submit"
        disabled={status === 'sending'}
      >
        {form.submitLabel}
      </button>
    </form>
  )
}