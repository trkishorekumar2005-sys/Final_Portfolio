import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'
import {
  RESUME_SCREENER_GITHUB, RESUME_SCREENER_DEMO,
  SPLITEXPENSE_GITHUB, SPLITEXPENSE_DEMO,
} from '../links.js'

// Projects data: the cards below are generated from this array using .map()
const projects = [
  {
    title: 'AI Resume Screening & Job Match Analyzer',
    description:
      'Built an AI-powered application to compare resumes with job descriptions using the Gemini LLM.',
    explanation:
      'The application extracts text from uploaded PDF resumes and uses Gemini to analyze the resume against a job description. It identifies matching skills, missing skills, and provides a match score and improvement suggestions.',
    tech: ['Python', 'Streamlit', 'Gemini API', 'PyPDF2', 'Git', 'GitHub'],
    features: [
      'PDF resume text extraction',
      'Resume and job description comparison',
      'AI-based match score',
      'Matched skills',
      'Missing skills',
      'Resume improvement suggestions',
    ],
    github: RESUME_SCREENER_GITHUB, // PLACEHOLDER (set in src/links.js)
    demo: RESUME_SCREENER_DEMO, // PLACEHOLDER (set in src/links.js)
  },
  {
    title: 'SplitExpense – AI-Based Group Expense & Bill Splitting Application',
    description:
      'Developed a full-stack expense management application for splitting group bills based on individual consumption.',
    explanation:
      'The application allows users to divide group expenses based on individual items. Gemini Vision extracts bill items, quantities, and prices from uploaded bills, while the application calculates tax, balances, and settlement amounts.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Gemini API'],
    features: [
      'Person-wise bill splitting',
      'Bill item extraction using Gemini Vision',
      'Tax calculation',
      'Balance calculation',
      'Settlement calculation',
      'Monthly spending reports',
      'UPI-based settlement support',
      'JWT authentication',
    ],
    github: SPLITEXPENSE_GITHUB, // PLACEHOLDER (set in src/links.js)
    demo: SPLITEXPENSE_DEMO, // PLACEHOLDER (set in src/links.js)
  },
]

// Shows a real link, or a disabled "coming soon" button while the URL is still a placeholder
function ProjectLink({ url, label, icon, projectTitle, primary }) {
  const className = primary ? 'btn btn-primary btn-small' : 'btn btn-outline btn-small'

  if (url === '#') {
    return (
      <span className={`${className} btn-disabled`} aria-disabled="true" title="Link coming soon">
        {icon} {label} (soon)
      </span>
    )
  }

  return (
    <a
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${projectTitle} (opens in a new tab)`}
    >
      {icon} {label}
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">My <span className="accent">Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-explanation">{project.explanation}</p>

              <ul className="tech-badges" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li key={t} className="badge">{t}</li>
                ))}
              </ul>

              <h4 className="features-heading">Key Features</h4>
              <ul className="feature-list">
                {project.features.map((f) => (
                  <li key={f}>
                    <FaCheckCircle className="feature-icon" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>

              <div className="project-buttons">
                <ProjectLink
                  url={project.github}
                  label="GitHub"
                  icon={<FaGithub aria-hidden="true" />}
                  projectTitle={project.title}
                />
                <ProjectLink
                  url={project.demo}
                  label="Live Demo"
                  icon={<FaExternalLinkAlt aria-hidden="true" />}
                  projectTitle={project.title}
                  primary
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
