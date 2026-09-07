import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>
        NOVA
      </h1>
      <button className="btn btn-secondary">
        Learn More
      </button>
    </main>
  )
}

export default App
