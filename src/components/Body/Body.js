import './body.css'
import About from './About/About'
import Achievements from './Achievements/Achievements'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
function Body() {
    return (
        <div className='body'>
        <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="contact">
        <Contact />
      </section>
            
        </div>
    );
}

export default Body
