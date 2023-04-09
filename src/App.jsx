import './App.css'
import Topsec from "./components/topsec.jsx"
import Botsec from "./components/botsec.jsx"
function App() {

  return (
    <div className="h-screen w-screen">
      <div className=' grid place-items-center'>
        <Topsec/>
        <Botsec/>
      </div>
    </div>
  )
}

export default App
