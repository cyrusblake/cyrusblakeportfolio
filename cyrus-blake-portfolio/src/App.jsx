
import './App.css'
import auth from './assets/Screenshot 2023-12-06 004630.png'

function App() {
  

  return (
    <>
     
      <h1>Projects</h1>
      <div className="card">
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
        <awesome-slider height="x60%" bullets="true" color="grey" arrows="true">
          <item src={auth}></item>
          <item source="/images/image-1.jpg"></item>
          <item source="/images/image-1.jpg"></item>
        </awesome-slider>
        

        
      </div>
      <p className="read-the-docs">
        Click Here To View All Projects On GitHub
      </p>
    </>
  )
}

export default App
