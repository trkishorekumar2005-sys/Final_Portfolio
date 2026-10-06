import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'SASTRA Deemed University',
    years: '2023 - 2027',
    score: 'CGPA: 7.00',
    icon: FaGraduationCap,
  },
  {
    degree: 'HSC',
    school: 'Sowdambikaa Matric Boys Hr Sec School, Thuraiyur',
    years: '2021 - 2023',
    score: '87%',
    icon: FaSchool,
  },
  {
    degree: 'SSLC',
    school: 'A.R.R. Matric Hr Sec School, Kumbakonam',
    years: '2020 - 2021',
    score: '90%',
    icon: FaSchool,
  },
]

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal"><span className="accent">Education</span></h2>

        {/* Vertical timeline: a line on the left with one dot per entry */}
        <ol className="timeline">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <li className="timeline-item reveal" key={item.degree}>
                <span className="timeline-dot"><Icon aria-hidden="true" /></span>
                <div className="timeline-card">
                  <span className="timeline-years">{item.years}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <span className="timeline-score">{item.score}</span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Education
