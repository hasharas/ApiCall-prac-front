
import './App.css'
import Home from './component/Home.jsx'
import ThreeScene from './component/ThreeScene.jsx'


function App() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full h-full">
        <ThreeScene>

          <Home />
        </ThreeScene>

      </div>
    </div>
  )
}

export default App
