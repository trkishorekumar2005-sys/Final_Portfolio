import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa'

function About() {
  return (
    <section id="about" className="section">
      <div className="container reveal">
        <h2 className="section-title">About <span className="accent">Me</span></h2>
        <div className="about-content">
          <p className="about-text">
            I am a Computer Science student at SASTRA Deemed University with an interest in
            full-stack development and AI-powered applications. I enjoy building practical
            applications using modern web technologies and solving real-world problems
            through software.
          </p>
          <ul className="about-facts">
            <li><FaGraduationCap aria-hidden="true" /> B.Tech CSE, SASTRA Deemed University</li>
            <li><FaCode aria-hidden="true" /> Full-Stack Developer</li>
            <li><FaMapMarkerAlt aria-hidden="true" /> Kumbakonam, Tamil Nadu</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
