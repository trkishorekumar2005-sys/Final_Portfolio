import { FaCertificate } from 'react-icons/fa'

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    topics: [
      'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
      'Express.js', 'REST APIs', 'Database Integration', 'Deployment',
    ],
  },
  {
    title: 'Diploma in Computer Application (DCA)',
    issuer: 'Tamilnadu Computer College (TNCC)',
    topics: [],
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title reveal"><span className="accent">Certifications</span></h2>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card reveal" key={cert.title}>
              <FaCertificate className="cert-icon" aria-hidden="true" />
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.topics.length > 0 && (
                <ul className="tech-badges" aria-label="Topics covered">
                  {cert.topics.map((topic) => (
                    <li key={topic} className="badge">{topic}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
