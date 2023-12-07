
import './App.css'
import img1 from './assets/Screenshot 2023-12-06 004630.png'

function App() {
  

  return (
    <>
     
      <h1>Projects</h1>
      <div className="card">
        <div>
          <img src={img1} className="images" alt=''></img>
          
          <img src={img1} className="images" alt=''></img>
        </div>
        <div>
          <img src={img1} className="images" alt=''></img>

          <img src={img1} className="images" alt=''></img>
        </div>
        <div>
          <img src={img1} className="images" alt=''></img>
          <img src={img1} className="images" alt=''></img>
        </div>

        <p className="read-the-docs">
        Click Here To View All Projects On GitHub
        </p>
      </div>
      
    </>
  )
}

export default App
