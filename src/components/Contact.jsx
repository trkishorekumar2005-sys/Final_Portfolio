import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '../links.js'

// Shows a real link, or a disabled "coming soon" button while the URL is still a placeholder
function SocialLink({ url, label, icon }) {
  if (url === '#') {
    return (
      <span className="btn btn-outline btn-disabled" aria-disabled="true" title="Link coming soon">
        {icon} {label} (soon)
      </span>
    )
  }
  return (
    <a
      href={url}
      className="btn btn-outline"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} profile (opens in a new tab)`}
    >
      {icon} {label}
    </a>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container reveal">
        <h2 className="section-title">Get In <span className="accent">Touch</span></h2>

        <div className="contact-card">
          <p className="contact-intro">
            I'm open to placement opportunities and collaborations. Feel free to reach out!
          </p>
          <h3 className="contact-name">Kishore Kumar T.R</h3>
          <ul className="contact-info">
            <li>
              <FaEnvelope aria-hidden="true" />
              <span className="sr-only">Email:</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span className="sr-only">Location:</span>
              Kumbakonam, Tamil Nadu
            </li>
          </ul>

          <div className="contact-buttons">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary" aria-label={`Send an email to ${EMAIL}`}>
              <FaEnvelope aria-hidden="true" /> Email Me
            </a>
            {/* PLACEHOLDER: set LINKEDIN_URL and GITHUB_URL in src/links.js */}
            <SocialLink url={LINKEDIN_URL} label="LinkedIn" icon={<FaLinkedin aria-hidden="true" />} />
            <SocialLink url={GITHUB_URL} label="GitHub" icon={<FaGithub aria-hidden="true" />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
