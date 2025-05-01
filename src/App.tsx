import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button/Button'
import { Icon } from './components/icon/Icon';

function App() {

  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter app</h1>
<Icon name="RightArrow" hidden4Sr={false} accessible_name='right arrow'/>
      <div className="card">
      <Button onClick={() => setCount((count) => count + 1)} label={"Add"}>
        </Button>
        <p aria-live='polite' aria-atomic='true'>Count is {count}</p>
        <Button onClick={() => setCount((count) => count>0?count-1:0)} label={"Remove"}>
        </Button>
      </div>
    </>
  )
}

export default App
