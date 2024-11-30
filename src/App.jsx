import React from 'react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-5'>
      <h1 className="text-3xl font-bold text-red-500">
      Hello world!
    </h1>
    <Button>Subscribe</Button>
    </div>
  )
}

export default App