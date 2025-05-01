import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button/Button'
import { RightArrow } from './SVGSprite'

function App(type="RightArrow") {
  const [image,setImage]=useState(null);
  const [count, setCount] = useState(0)
  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`./SVGSprite/${type}`);
      module.default();
      setImage(module);
    };

    importComponent();
  })


  return (
    <>
      <h1>Counter app</h1>
<RightArrow role="img" aria-label="right arrow" aria-hidden={false}/>
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
