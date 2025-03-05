import { useState } from 'react'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)
  function updateCount(){
    setCount(count+1)
  }

  return (
    <>
      <div className='h-[100%] w-[100%] flex justify-center items-center'>
        <Button updateCount={updateCount}>
          <p>You have clicked this button {count} times</p>
        </Button>
      </div>
    </>
  )
}

export default App
