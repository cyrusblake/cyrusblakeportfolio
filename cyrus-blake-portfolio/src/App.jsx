
import './App.css'
import img1 from './assets/Screenshot 2023-12-06 004630.png'
import img2 from './assets/Screenshot 2023-12-07 015130.png'
import img3 from './assets/Screenshot 2023-12-07 002518.png'
import img4 from './assets/Screenshot 2023-gchcgchkc-30 024604.png'
import img5 from './assets/Screenshot 2023-12-07 011605.png'
import img6 from  './assets/Screenshot 2023-12-07 022959.png'
import img7 from './assets/Screenshot 2023-12-09 040430.png'
import img8 from './assets/unnamed.png'
import img9 from './assets/unnamed1.png'
import img10 from './assets/unnameddyhdd.png'

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
            <h4>Authentication System</h4>
            <a href="https://github.com/cyrusblake/Authentication-System-Java-Full-Stack">
            <img src={img1} className="images" alt=''></img>
            </a>
          </div>
          <div>
            <h4>Tenant System</h4>
            <a href="https://github.com/cyrusblake/Tenant">
            <img src={img6} className="images" alt=''></img>
            </a>
          </div>
        </section>

        <section className="section"> 
          <div>
            <h4>Year Up Signup & Login Page</h4>
            <a href="https://github.com/cyrusblake/Year-Up-Login-and-Signup-Page"> 
            <img src={img3} className="images" alt=''></img>
            </a>
          </div>
          <div>
            <h4>Work Word</h4>
            <a href="https://github.com/cyrusblake/WorkWord"> 
            <img src={img2} className="images" alt=''></img> 
            </a>
          </div>
        </section>

        <section className="section"> 
          <div>
            <h4>Contor</h4>
            <a href="https://github.com/cyrusblake/Contor-Web">
            <img src={img4} className="images" alt=''></img>
            </a>
          </div>
          <div>
            <h4>Weather App</h4>
            <a href="https://github.com/cyrusblake/Weather-App">
            <img src={img7} className="images" alt=''></img>
            </a>
          </div>
        </section>

        <section className="section"> 
            <div>
              <h4>Web Scraper</h4>
              <a href="https://github.com/cyrusblake/Web-Scraper">
              <img src={img8} className="images" alt=''></img>
              </a>
            </div>
            <div>
              <h4>Player Accounts</h4>
              <a href="https://github.com/cyrusblake/Player-Accounts">
              <img src={img9} className="images" alt=''></img>
              </a>
            </div>
        </section>
        <section className="section"> 
            <div>
              <h4>Kick Clone</h4>
              <a href="https://kick-clone.vercel.app/">
              <img src={img5} className="images" alt=''></img>
              </a>
            </div>
            <div>
              <h4>Python Database Connector</h4>
              <a href="https://github.com/cyrusblake/Menagerie-Database">
              <img src={img10} className="images" alt=''></img>
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
