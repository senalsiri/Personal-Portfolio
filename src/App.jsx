import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="card-container">
      <div className="business-card">
        {/* Front of card - Professional information */}
        <div className="card-front">
          <div className="professional-info">
            <h1>Senal Siriwardana</h1>
            <p className="title">Computer Science Student & Software Developer</p>
            <p className="subtitle">Cardiff University | Projected First Class Honours</p>
            
            <div className="contact-info">
              <p>📧 senal2003@gmail.com</p>
              <p>📱 +44 7484688088</p>
              <p>📍 Broadstairs, Kent</p>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/senalsiriwardana/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <p className="brief-intro">
              Passionate software developer with expertise in web development and design thinking.
              Currently focusing on innovative solutions in alcohol awareness and game development.
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <nav className="card-nav">
            {['about', 'projects', 'skills', 'experience'].map((section) => (
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
                <h2>About Me</h2>
                <p>Final year Computer Science student at Cardiff University, combining technical expertise with strong leadership abilities. Experienced in web development, project coordination, and user experience design.</p>
                <div className="achievements">
                  <h3>Key Achievements</h3>
                  <p>• First-year web application project: 79% grade</p>
                  <p>• Led 7-person game development team</p>
                  <p>• Multilingual: Fluent in English and Sinhalese, learning Spanish</p>
                  <p>• Grade 6 LCM Keyboard Certification</p>
                </div>
              </section>
            )}

            {activeSection === 'projects' && (
              <section>
                <h2>Projects</h2>
                <div className="projects-list">
                  <div className="project">
                    <h3>Alcohol Usage Tracking App</h3>
                    <p>Developed 3 design prototypes with over 50 key screens using design thinking principles</p>
                    <p className="project-tech">Design thinking • UX Prototyping • Wireframing</p>
                  </div>
                  <div className="project">
                    <h3>Game Development Project</h3>
                    <p>Coordinated 9-month development lifecycle with team of 7 using agile methodologies</p>
                    <p className="project-tech">Django • Spotify API • WebSocket • Agile</p>
                  </div>
                  <div className="project">
                    <h3>BSc Dissertation</h3>
                    <p>"Under the Influence: An Exploration on the Perceptions of Alcohol and Substance Usage in the Youth"</p>
                    <p className="project-tech">Design Thinking • User Testing • Prototyping</p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'skills' && (
              <section>
                <h2>Technical Skills</h2>
                <div className="skills-list">
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Flask</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Django</span>
                  <span>WebSocket</span>
                  <span>Design Thinking</span>
                  <span>Prototyping</span>
                  <span>Agile</span>
                  <span>UX Design</span>
                </div>
                
                <h3 className="mt-6">Tools & Software</h3>
                <div className="skills-list">
                  <span>Microsoft Office</span>
                  <span>Git</span>
                  <span>Miro</span>
                  <span>VS Code</span>
                </div>
              </section>
            )}

            {activeSection === 'experience' && (
              <section>
                <h2>Professional Experience</h2>
                <div className="experience-list">
                  <div className="experience-item">
                    <h3>The Granville Theatre</h3>
                    <p className="experience-title">Bar, Barista, Usher, Supervisor</p>
                    <p className="experience-date">July 2024 - December 2024</p>
                    <p>Key holder position with responsibility for revenue verification and reconciliation</p>
                  </div>
                  
                  <div className="experience-item">
                    <h3>The Royal Victoria Pavillion</h3>
                    <p className="experience-title">Bar Associate</p>
                    <p className="experience-date">June 2023 - December 2023</p>
                    <p>Employee of the Month within first month of employment</p>
                  </div>
                  
                  <div className="experience-item">
                    <h3>Kaspas Desserts LTD</h3>
                    <p className="experience-title">Front of House Staff, Supervisor</p>
                    <p className="experience-date">June 2021 - September 2022</p>
                    <p>Youngest staff supervisor, managing operations across multiple departments</p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
