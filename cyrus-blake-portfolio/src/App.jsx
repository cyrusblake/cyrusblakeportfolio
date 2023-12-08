
import './App.css'
import img1 from './assets/Screenshot 2023-12-06 004630.png'
import img2 from './assets/Screenshot 2023-12-07 015130.png'
import img3 from './assets/Screenshot 2023-12-07 002518.png'
import img4 from './assets/Screenshot 2023-gchcgchkc-30 024604.png'
import img5 from './assets/Screenshot 2023-12-07 011605.png'
import img6 from  './assets/Screenshot 2023-12-07 022959.png'

function App() {
  

  return (
    <>
     
      
      <div className="card">
        <h1>Projects</h1>
        <div>
          <a href="https://github.com/cyrusblake/Authentication-System-Java-Full-Stack">
            <img src={img1} className="images" alt=''></img>
          </a>
          <a href="https://github.com/cyrusblake/Tenant">
             <img src={img6} className="images" alt=''></img>
          </a>
        </div>
        <div>
          <a href="https://github.com/cyrusblake/Year-Up-Login-and-Signup-Page"> 
            <img src={img3} className="images" alt=''></img>
          </a>
          <a href="https://github.com/cyrusblake/WorkWord"> 
            <img src={img2} className="images" alt=''></img> 
          </a>
          
          
        </div>
        <div>
          <a href="https://github.com/cyrusblake/Contor-Web">
            <img src={img4} className="images" alt=''></img>
          </a>
          <a href="https://github.com/cyrusblake/Kick-Clone">
            <img src={img5} className="images" alt=''></img>
          </a>
          
        </div>
        <a className="" href="https://github.com/cyrusblake?tab=repositories">
        Click Here To View All Projects On GitHub
        </a>
      </div>
      
    </>
  )
}

export default App
