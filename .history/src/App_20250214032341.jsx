import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, PostSlider } from './Components/Components'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <PostSlider/>
   </>

  )
}

export default App
