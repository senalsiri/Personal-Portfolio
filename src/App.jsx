import { useState } from 'react'
import './App.css'

function App() {
  // State to manage card flip and active section
  const [isFlipped, setIsFlipped] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="card-container">
      <div className={`business-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card - Minimalistic design */}
        <div className="card-front">
          <div className="card-content">
            <h1>Your Name</h1>
            <p className="title">Software Developer</p>
            <button 
              className="flip-button"
              onClick={() => setIsFlipped(true)}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <nav className="card-nav">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button 
                key={section}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <div className="card-content-back">
            {activeSection === 'about' && (
              <section>
                <h2>About</h2>
                <p>A passionate software developer focused on creating elegant solutions.</p>
              </section>
            )}

            {activeSection === 'projects' && (
              <section>
                <h2>Projects</h2>
                <div className="projects-list">
                  <div className="project">
                    <h3>Project Name</h3>
                    <p>Brief project description</p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'skills' && (
              <section>
                <h2>Skills</h2>
                <div className="skills-list">
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </section>
            )}

            {activeSection === 'contact' && (
              <section>
                <h2>Contact</h2>
                <div className="contact-links">
                  <a href="mailto:email@example.com">Email</a>
                  <a href="https://github.com">GitHub</a>
                  <a href="https://linkedin.com">LinkedIn</a>
                </div>
              </section>
            )}
          </div>

          <button 
            className="flip-button"
            onClick={() => setIsFlipped(false)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default App