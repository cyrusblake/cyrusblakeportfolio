
import './App.css'
import img1 from './assets/Screenshot 2023-12-06 004630.png'
import img2 from './assets/Screenshot 2023-12-07 015130.png'
import img3 from './assets/Screenshot 2023-12-07 002518.png'
import img4 from './assets/Screenshot 2023-gchcgchkc-30 024604.png'
import img5 from './assets/Screenshot 2023-12-07 011605.png'
import img6 from  './assets/Screenshot 2023-12-07 022959.png'
import img7 from './assets/Screenshot 2023-12-09 040430.png'

function App() {
  

  return (
     
      <div className="card">
        <h1 className="header">Cyrus Blake Portfolio</h1>

        <div className="about-div">
          <h2>About Me</h2>
          <p className="about-content">
          My name is Cyrus Blake and I'm actively seeking a 
          full-time entry-level role in software engineering. 
          As a former Wells Fargo intern, I honed my skills in TypeScript, Angular, Java, 
          and SpringBoot for full-stack development. I'm a graduate student from
          Year Up's Software Development Bootcamp, well-versed in software 
          and application development, full-stack web development, data analytics, 
          and computer hardware. My goal is to apply my diverse skill set to real-world challenges in 
          software engineering. I'm eager to collaborate with professionals and 
          organizations that share my passion for technology.
          <br/>
          <p>
            <a href="https://www.linkedin.com/in/cyrus-blake-10b8001a9/">Linkin</a> 
            &nbsp;&nbsp;&nbsp;&nbsp;  
            <a href="https://github.com/cyrusblake?tab=repositories">GitHub</a>    
          </p>
          </p>
        </div>

        <h2 className="projects">Projects</h2>

            
        <section className='section'>
          <div>
            <h4>View Project Description</h4>
            <a href="https://github.com/cyrusblake/Authentication-System-Java-Full-Stack">
            <img src={img1} className="images" alt=''></img>
            </a>
          </div>
          <div>
            <h4>View Project Description</h4>
            <a href="https://github.com/cyrusblake/Tenant">
            <img src={img6} className="images" alt=''></img>
            </a>
          </div>
        </section>

        <section className="section"> 
          <div>
            <h4>View Project Description</h4>
            <a href="https://github.com/cyrusblake/Year-Up-Login-and-Signup-Page"> 
            <img src={img3} className="images" alt=''></img>
            </a>
          </div>
          <div>
            <h4>View Project Description</h4>
            <a href="https://github.com/cyrusblake/WorkWord"> 
            <img src={img2} className="images" alt=''></img> 
            </a>
          </div>
        </section>

        <section className="section"> 
          <div>
              <h4>View Project Description</h4>
              <a href="https://github.com/cyrusblake/Contor-Web">
              <img src={img4} className="images" alt=''></img>
              </a>
            </div>
            <div>
              <h4>View Project Description</h4>
              <a href="https://github.com/cyrusblake/Kick-Clone">
              <img src={img5} className="images" alt=''></img>
              </a>
            </div>
        </section>

        <section className="section"> 
          <div>
              <h4>View Project Description</h4>
              <a href="https://github.com/cyrusblake/Weather-App">
              <img src={img7} className="images" alt=''></img>
              </a>
            </div>
            <div>
              <h4>View Project Description</h4>
              <a href="https://github.com/cyrusblake/Kick-Clone">
              <img src={img5} className="images" alt=''></img>
              </a>
            </div>
        </section>
        <a className="" href="https://github.com/cyrusblake?tab=repositories">
        Click Here To View All Projects On GitHub
        </a>
      </div>
  )
}

export default App
