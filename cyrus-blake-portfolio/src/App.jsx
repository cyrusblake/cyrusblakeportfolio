
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
     
      <h1>Projects</h1>
      <div className="card">
        <div>
          <img src={img1} className="images" alt=''></img>
          <img src={img6} className="images" alt=''></img>
        </div>
        <div>
          <img src={img3} className="images" alt=''></img>
          <img src={img2} className="images" alt=''></img> 
        </div>
        <div>
          <img src={img4} className="images" alt=''></img>
          <img src={img5} className="images" alt=''></img>
        </div>
        <a className="" href="https://github.com/cyrusblake?tab=repositories">
        Click Here To View All Projects On GitHub
        </a>
      </div>
      
    </>
  )
}

export default App
