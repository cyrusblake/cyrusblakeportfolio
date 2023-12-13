
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
import img11 from './/assets/Screenshot 2022-10-14 162524.png'
import img12 from './assets/Screenshot 2023-12-12 184048.png'


function App() {

  
    document.addEventListener('DOMContentLoaded', function () {
      const links = document.querySelectorAll('a');

      links.forEach(function (link) {
          link.addEventListener('click', function (e) {
              e.preventDefault();

              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);

              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          });
      });
  });


  return (
     
      <div className="card">
        <div className="nav-bar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </div>
        <h1 className="header">Cyrus Blake Portfolio</h1>
        {/* <img className="fp" src={('../public/IMG_5202.jpg')} alt="cyrus image" /> */}

        <h2 id="about">About Me</h2>
        <div className="about-div">
          <p className="about-content">
            My name is Cyrus Blake and I'm actively seeking a full-time entry-level role in software engineering. As a former Wells Fargo intern, I honed my skills in TypeScript, Angular, Java, and SpringBoot for full-stack development. I'm a graduate student from Year Up's Software Development Bootcamp, well-versed in software and application development, full-stack web development, data analytics, and computer hardware. My goal is to apply my diverse skill set to real-world challenges in software engineering. I'm eager to collaborate with professionals and organizations that share my passion for technology.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/cyrus-blake-10b8001a9/">LinkedIn</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/cyrusblake?tab=repositories">GitHub</a>
          </p>
        </div>

        <h2 id="projects" className="projects">Projects</h2>

            
        <section className='section'>
          <div>
            <h4>Authentication System</h4>
            <a href="https://github.com/cyrusblake/Authentication-System-Java-Full-Stack">
            <img src={img1} className="images" alt=''></img>
            </a>
            <div>
              <a href="https://authentication-system-java-full-stack.vercel.app/">Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/cyrusblake/Authentication-System-Java-Full-Stack">GitHub</a>
            </div>
          </div>
          <div>
            <h4>LinkTree Clone</h4>
            <a href="https://github.com/cyrusblake/LinkTree-Clone">
            <img src={img12} className="images" alt=''></img>
            </a>
            <div>
              <a href="https://link-tree-clone-olive.vercel.app/">Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/cyrusblake/LinkTree-Clone">GitHub</a>
            </div>
          </div>
          
        </section>

        <section className="section"> 
          <div>
            <h4>Tenant System</h4>
            <a href="https://github.com/cyrusblake/Tenant">
            <img src={img6} className="images" alt=''></img>
            </a>
            <div>
              <a href="https://github.com/cyrusblake/Tenant">GitHub</a>
            </div>
          </div>
          <div>
            <h4>Year Up Signup & Login Page</h4>
            <a href="https://github.com/cyrusblake/Year-Up-Login-and-Signup-Page"> 
            <img src={img3} className="images" alt=''></img>
            </a>
            <div>
              <a href="https://year-up-login-and-signup-page.vercel.app/">Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/cyrusblake/Year-Up-Login-and-Signup-Page">GitHub</a>
            </div>
          </div>
          
        </section>

        <section className="section"> 
          <div>
              <h4>Work Word</h4>
              <a href="https://github.com/cyrusblake/WorkWord"> 
              <img src={img2} className="images" alt=''></img> 
              </a>
              <div>
                <a href="https://work-word.vercel.app/">Live</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/cyrusblake/WorkWord">GitHub</a>
              </div>
            </div>
          <div>
            <h4>Contor</h4>
            <a href="https://github.com/cyrusblake/Contor-Web">
            <img src={img4} className="images" alt=''></img>
            </a>
            <div>
              <a href="https://contor-web.vercel.app/">Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/cyrusblake/Contor-Web">GitHub</a>
            </div>
          </div>
          
        </section>

        <section className="section">

            <div>
              <h4>Weather App</h4>
              <a href="https://github.com/cyrusblake/Weather-App">
              <img src={img7} className="images" alt=''></img>
              </a>
              <div>
                <a href="https://cyrusblake.github.io/Weather-App/">Live</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/cyrusblake/Weather-App">GitHub</a>
              </div>
            </div>
            <div>
              <h4>Web Scraper</h4>
              <a href="https://github.com/cyrusblake/Web-Scraper">
              <img src={img8} className="images" alt=''></img>
              </a>
              <div>
              <a href="https://github.com/cyrusblake/Web-Scraper">GitHub</a>
            </div>
            </div>
            
        </section>

        <section className="section"> 
            <div>
              <h4>Player Accounts</h4>
              <a href="https://github.com/cyrusblake/Player-Accounts">
              <img src={img9} className="images" alt=''></img>
              </a>
              <div>
              <a href="https://github.com/cyrusblake/Player-Accounts">GitHub</a>
              </div>
            </div>
            <div>
              <h4>Kick Clone</h4>
              <a href="https://github.com/cyrusblake/Kick-Clone">
              <img src={img5} className="images" alt=''></img>
              </a>
              <div>
              <a href="https://kick-clone.vercel.app/">Live</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/cyrusblake/Kick-Clone">GitHub</a>
            </div>
            </div>
           
        </section>
        
        <section className="section"> 
            <div>
              <h4>Python Database Connector</h4>
              <a href="https://github.com/cyrusblake/Menagerie-Database">
              <img src={img10} className="images" alt=''></img>
              </a>
              <div>
             <a href="https://github.com/cyrusblake/Menagerie-Database">GitHub</a>
            </div>
            </div>
            <div>
              <h4>Virtual Machine</h4>
              <a href="https://docs.google.com/presentation/d/1Hc5a97gQl1EdbgG2qeNBLieavhJaeTcePZIeGAZ_e8s/edit?usp=sharing">
              <img src={img11} className="images" alt=''></img>
              </a>
              <div>
              <a href="https://docs.google.com/presentation/d/1Hc5a97gQl1EdbgG2qeNBLieavhJaeTcePZIeGAZ_e8s/edit#slide=id.p1">Presentation</a>
            </div>
            </div>
            {/* <div>
              <h4>Python Database Connector</h4>
              <a href="https://github.com/cyrusblake/Menagerie-Database">
              <img src={img10} className="images" alt=''></img>
              </a>
              <div>
              <a>Live</a>&nbsp;&nbsp;&nbsp;&nbsp;<a>GitHub</a>
            </div>
            </div> */}
        </section>
        <a className="" href="https://github.com/cyrusblake?tab=repositories">
        Click Here To View All Projects On GitHub
        </a>
        <h2 id="skills">Skills</h2>
        <div className='skills-div'>
          <p className="pskills">Java</p>
          <p className="pskills">Python</p>
          <p className="pskills">JavaScript</p>
          <p className="pskills">TypeScript</p>
          <p className="pskills" >HTML</p>
          <p className="pskills">CSS</p>
          <p className="pskills">React</p>
          <p className="pskills">Spring Boot</p>
          <p className="pskills">Express.js</p>
          <p className="pskills">Node.js</p>
          <p className="pskills">Next.js</p>
          <p className="pskills">Angular</p>
          <p className="pskills">MySQL</p>
          <p className="pskills">SQL</p>
          <p className="pskills">MongoDB</p>
          <p className="pskills">Bootstrap</p>
          <p className="pskills">Vue.js</p>
          <p className="pskills">JUnit</p>
          <p className="pskills">JSON</p>
          <p className="pskills">XML</p>
          <p className="pskills">Netlify</p>
          <p className="pskills">Git</p>
          <p className="pskills">GitHub</p>
          <p className="pskills">Jira</p>
          <p className="pskills">Agile</p>
          <p className="pskills">Scrum</p>
          <p className="pskills">Vercel</p>
          <p className="pskills">REST</p>
          <p className="pskills">RESTful Api</p>
          <p className="pskills">Api</p>
          <p className="pskills">Unit Test</p>
          <p className="pskills">Unit Testing</p>
          <p className="pskills">Postman</p>
        </div>

        <h2 id="experience">Experience</h2>
        <div>
          <div className="experience-div">
            <h3> Wells Fargo
            <br/>
            Software Engineer Intern
           
            </h3>
            <p>February 2023 - July 2023</p>
          </div>
          <div className="experience-div">
            <h3>Kings County Supreme Court
            <br/>
            Network System Technician Intern
            </h3>
            <p>July 2022 - August 2022</p>
          </div>
          <div className="experience-div">
            <h3>Medgar Evers College
            <br/>
            Web Developer & Business Trainee
            </h3>
            <p>July 2021 - August 2021</p>
          </div>
          <div className="experience-div">
            <h3>Departmnet for the Aging
            <br/>
            Information Technology Intern
            </h3>
            <p>July 2019 - August 2019</p>
          </div>
        </div>
      </div>
  )
}

export default App
