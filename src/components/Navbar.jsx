import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  // Controls whether the mobile (hamburger) menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  // Smoothly scroll to the section with the given id
  const handleNavClick = (event, id) => {
    event.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="nav-container container" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          Kishore<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul id="nav-links" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
