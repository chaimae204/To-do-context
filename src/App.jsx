import{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstcontextProvider from './Mycontexts/Firstcontext'
import Tache from './compenent/Tache'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <FirstcontextProvider>
        <Tache></Tache>
      </FirstcontextProvider>
      
    </div>
  )
}

export default App
