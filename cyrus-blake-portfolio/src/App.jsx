
import './App.css'

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
          <item source="/images/image-1.jpg"></item>
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
