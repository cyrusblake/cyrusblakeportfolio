
import './App.css'
import img1 from './assets/Screenshot 2023-12-06 004630.png'
import img2 from './assets/Screenshot 2023-11-01 085753.png'

function App() {
  

  return (
    <>
     
      <h1>Projects</h1>
      <div className="card">
        <div>
          <img src={img1} className="images" alt=''></img>
          
          <img src={img2} className="images" alt=''></img>
        </div>
        <div>
          <img src={img1} className="images" alt=''></img>

          <img src={img1} className="images" alt=''></img>
        </div>
        <div>
          <img src={img1} className="images" alt=''></img>
          <img src={img1} className="images" alt=''></img>
        </div>

        <p className="">
        Click Here To View All Projects On GitHub
        </p>
      </div>
      
    </>
  )
}

export default App
