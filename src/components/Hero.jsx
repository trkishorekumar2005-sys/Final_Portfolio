import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiMysql, SiGooglegemini } from 'react-icons/si'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        {/* Left side: introduction text */}
        <div className="hero-text">
          <p className="hero-greeting">Hello,</p>
          <h1 className="hero-name">
            I'm <span className="accent">Kishore Kumar T.R</span>
          </h1>
          <p className="hero-role">Full-Stack Developer</p>
          <p className="hero-description">
            Full-stack developer who builds complete web applications from start to finish,
            with a focus on solving real-world problems and creating practical solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side: code window with floating tech icons (animated with CSS only) */}
        <div className="hero-visual" aria-hidden="true">
          <div className="glow"></div>

          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">developer.js</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-key">const</span> developer = {'{\n'}
                {'  '}name: <span className="c-str">'Kishore Kumar T.R'</span>,{'\n'}
                {'  '}role: <span className="c-str">'Full-Stack Developer'</span>,{'\n'}
                {'  '}frontend: [<span className="c-str">'React'</span>, <span className="c-str">'HTML'</span>, <span className="c-str">'CSS'</span>],{'\n'}
                {'  '}backend: [<span className="c-str">'Node.js'</span>, <span className="c-str">'Express'</span>],{'\n'}
                {'  '}database: <span className="c-str">'MySQL'</span>,{'\n'}
                {'  '}ai: <span className="c-str">'Gemini API'</span>{'\n'}
                {'};'}<span className="cursor">|</span>
              </code>
            </pre>
          </div>

          <span className="float-icon icon-1"><SiReact /></span>
          <span className="float-icon icon-2"><SiNodedotjs /></span>
          <span className="float-icon icon-3"><SiPython /></span>
          <span className="float-icon icon-4"><SiJavascript /></span>
          <span className="float-icon icon-5"><SiMysql /></span>
          <span className="float-icon icon-6"><SiGooglegemini /></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
