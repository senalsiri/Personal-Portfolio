import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // State management for card interactions and user guidance
  const [isFlipped, setIsFlipped] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  // Handle clicking outside the card to return to front
  const handleOutsideClick = (e) => {
    if (e.target.className === 'card-container') {
      setIsFlipped(false)
    }
  }

  // Handle card flip interaction
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  // Prevent flip when clicking interactive elements
  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  // Auto-hide initial navigation prompt
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFlipped(true)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])



  return (
<div className="card-container" onClick={handleOutsideClick}>
  <div className={`business-card ${isFlipped ? 'flipped' : ''}`}>
    {/* Single card front */}
    <div className="card-front" onClick={handleFlip}>
      <div className="card-content">
        <div className="card-left">
          <div className="primary-info">
            <h1>Senal Siriwardana</h1>
            <div className="title-container">
              <p className="title">BSc Computer Science</p>
              <p className="subtitle">Cardiff University</p>
            </div>
          </div>
          <div className="contact-info">
            <p>senal2003@gmail.com</p>
            <p>+44 7484688088</p>
            <p>Broadstairs, Kent</p>
          </div>
        </div>
        <div className="card-right">
          <div className="profile-image">
            <img 
              src="/images/self.JPG" 
              alt="Profile" 
              className="profile-photo"
              width="200"
              height="200"
              onError={(e) => {
                console.log('Image failed to load:', e.target.src);
              }}
              onLoad={() => {
                console.log('Image loaded successfully');
              }}
            />
          </div>
        </div>
        <div className="front-flip-prompt">
          <span className="prompt-text">View Full Portfolio</span>
        </div>
      </div>
    </div>

        {/* Back of card - Detailed sections */}
        <div className="card-back">
           {/* Back flip prompt - always visible on back side */}
           <div className="back-flip-area" onClick={(e) => {
            e.stopPropagation() // Prevent event bubbling
            setIsFlipped(false)
          }}>
            <span className="back-prompt-text">Click here to return to front</span>
          </div>
  
          {/* Navigation hint for sections */}
          <div className="section-hint">
            Explore sections below • Click outside card to return
          </div>

          {/* Section Navigation */}
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

          {/* Content Sections */}
          <div className="card-content-back">
            {activeSection === 'about' && (
              <section>
                <h2>About Me</h2>
                <p>Final year Computer Science student at Cardiff University, combining technical expertise with leadership abilities and creative problem-solving skills.</p>
                
                <div className="achievements">
                  <h3>Key Achievements</h3>
                  <p>• Successfully developed web applications using Flask, HTML, JavaScript, and CSS</p>
                  <p>• Led game development team through complete project lifecycle</p>
                  <p>• Created comprehensive prototypes for alcohol awareness application</p>
                  <p>• Multilingual: English, Sinhalese, and learning Spanish</p>
                  <p>• Grade 6 LCM Keyboard Certification with 10 years experience</p>
                </div>
              </section>
            )}

            {activeSection === 'projects' && (
              <section>
                <h2>Projects</h2>
                <div className="projects-list">
                  <div className="project">
                    <h3>Alcohol Usage & Finance App</h3>
                    <p>Designed comprehensive tracking application using design thinking principles</p>
                    <p className="project-tech">UX Design • Prototyping • User Research</p>
                  </div>

                  <div className="project">
                    <h3>Game Development Project</h3>
                    <p>Managed team of 7 using agile methodologies and scrum practices</p>
                    <p className="project-tech">Django • Spotify API • WebSocket • Agile</p>
                  </div>

                  <div className="project">
                    <h3>BSc Dissertation Research</h3>
                    <p>&quot;Designing Digital Interventions: A User-Centred Approach to Alcohol Consumption Tracking and Financial Awareness Among University Students</p>
                    <p className="project-tech">Research • User Testing • Prototyping</p>
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
                  <span>Django</span>
                  <span>HTML/CSS</span>
                  <span>WebSocket</span>
                  <span>Design Thinking</span>
                  <span>Agile</span>
                </div>
                
                <h3>Professional Skills</h3>
                <div className="skills-list">
                  <span>Project Management</span>
                  <span>Team Leadership</span>
                  <span>Problem Solving</span>
                  <span>Communication</span>
                </div>

                <h3>Tools & Software</h3>
                <div className="skills-list">
                  <span>VS Code</span>
                  <span>Git</span>
                  <span>Miro</span>
                  <span>Microsoft Office</span>
                </div>
              </section>
            )}

            {activeSection === 'contact' && (
              <section className="contact-section">
                <h2>Contacts</h2>
                <p className="contact-intro">Please feel free to contact me through any of these socials.</p>
                
                <div className="social-grid">
                  <a 
                    href="https://github.com/senalsiriwardana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-item"
                    onClick={handleLinkClick}
                  >
                    <div className="social-icon">📚</div>
                    <div className="social-text">
                      <h3>GitHub</h3>
                      <p>View my projects</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/senalsiriwardana/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-item"
                    onClick={handleLinkClick}
                  >
                    <div className="social-icon">💼</div>
                    <div className="social-text">
                      <h3>LinkedIn</h3>
                      <p>Connect professionally</p>
                    </div>
                  </a>

                  <a 
                    href="https://instagram.com/senal.siriwardana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-item"
                    onClick={handleLinkClick}
                  >
                    <div className="social-icon">📸</div>
                    <div className="social-text">
                      <h3>Instagram</h3>
                      <p>Follow my journey</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:senal2003@gmail.com" 
                    className="social-item"
                    onClick={handleLinkClick}
                  >
                    <div className="social-icon">📧</div>
                    <div className="social-text">
                      <h3>Email</h3>
                      <p>Direct contact</p>
                    </div>
                  </a>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
