import {
  SiJavascript, SiPython, SiReact, SiHtml5, SiCss, SiStreamlit,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiMysql, SiGooglegemini,
  SiGit, SiGithub, SiVercel,
} from 'react-icons/si'
import { TbApi, TbLock, TbFileTypePdf } from 'react-icons/tb'

// Skills data: each category has a title and a list of skills (name + icon).
// To add a skill, just add a new { name, icon } object to the right category.
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'Streamlit', icon: SiStreamlit },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: TbApi },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'bcrypt', icon: TbLock },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MySQL', icon: SiMysql }],
  },
  {
    title: 'AI & Libraries',
    skills: [
      { name: 'Gemini API', icon: SiGooglegemini },
      { name: 'PyPDF2', icon: TbFileTypePdf },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">My <span className="accent">Skills</span></h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category reveal" key={category.title}>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <li className="skill-card" key={skill.name}>
                      <Icon className="skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
