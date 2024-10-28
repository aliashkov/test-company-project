import './aboutus.css';
import man from '..//..//images/man.png';
import aiIntegration from '..//..//icons/ai-integration.png';
import modernTechnology from '..//..//icons/modern-techonology.png';
import audioInnovation from '..//..//icons/audio-innovation.png';
import futureReady from '..//..//icons/future-ready.png';

const AboutUs = () => {
  return (
    <div className='about-container' id="about">
      <h1 className='about-us'>About Us</h1>
      <div className='about-content-one'>
        <div className='about-text-box'>
          <p className='text'>
            We are a dynamic software development community driven by innovation and technology,
            specializing in AI-powered music solutions and digital audio processing.
          </p>
          <p className='text'> 
            Our focus lies in creating intelligent solutions that bridge the gap between
            artificial intelligence and music production, making professional-grade tools
            accessible to everyone.
          </p>
          <p className='text'>
            With a passionate team of developers and music enthusiasts, we're building
            the future of digital audio production and streaming services.
          </p>
        </div>
      </div>

      <div className='about-content-two'>
        <h2 className='projects-title'>Our Projects</h2>
        <div className='projects-container'>
          <div className='project-card'>
            <h3 className='link-project'><a href="https://hitz.me/" target="_blank" rel="noopener noreferrer">Hitz.me</a></h3>
            <p className='project-description'>
              A next-generation streaming platform powered by AI, providing personalized
              music experiences. Built with modern technologies including React, Next.js,
              and Nest.js.
            </p>
            <div className='tech-stack'>
              <span>React</span>
              <span>Next.js</span>
              <span>Nest.js</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className='project-card'>
            <h3 className='link-project'><a href="https://ampedstudio.com/" target="_blank" rel="noopener noreferrer">Amped Studio</a></h3>
            <p className='project-description'>
              Advanced music creation suite with AI-powered features including audio splitting,
              voice transformation, and MIDI conversion capabilities.
            </p>
            <div className='tech-stack'>
              
              <span>Audio Engineering</span>
              <span>Machine Learning</span>
              <span>TypeScript</span>
              <span>Vue.js</span>
              <span>AI Processing</span>
            </div>
          </div>
        </div>

        <div className='icon-boxes'>
          <div className='icon-boxes-row1'>
            <div className='icon-box'>
              <div className='icon'>
                <img src={modernTechnology} alt="Web Development" width='48px'/>
              </div>
              <div className='icon-text'>
                <p className='t-big'>Modern Tech Stack</p>
                <p className='t-small'>Latest web technologies and frameworks</p>
              </div>
            </div>

            <div className='icon-box'>
              <div className='icon'>
                <img src={aiIntegration} alt="AI Technology" width='48px' />
              </div>
              <div className='icon-text'>
                <p className='t-big'>AI Integration</p>
                <p className='t-small'>Advanced machine learning solutions</p>
              </div>
            </div>
          </div>

          <div className='icon-boxes-row2'>
            <div className='icon-box'>
              <div className='icon'>
                <img src={audioInnovation} alt="Music Technology" width='48px'/>
              </div>
              <div className='icon-text'>
                <p className='t-big'>Audio Innovation</p>
                <p className='t-small'>Cutting-edge audio processing</p>
              </div>
            </div>

            <div className='icon-box'>
              <div className='icon'>
                <img src={futureReady} alt="Innovation" width='48px'/>
              </div>
              <div className='icon-text'>
                <p className='t-big'>Future-Ready</p>
                <p className='t-small'>Constantly evolving with technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default AboutUs;