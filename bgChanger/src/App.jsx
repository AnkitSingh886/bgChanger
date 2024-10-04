import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [color,setColor]=useState("olive")
  const changeColor=(color)=>{
    setColor(color)
  }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className="fixed flex flexwrap m-2 p-6 bottom-48 inset-x-0 bg-white">
      <div className='flex m-5 p-5'>
          <button onClick={()=>{changeColor("red")}} className="h-20 w-20 rounded m-4 p-4" style={{backgroundColor:"red"}}color='red'>Red</button>
          <button onClick={()=>{changeColor("blue")}} className="h-20 w-20  m-4 p-4 rounded" style={{backgroundColor:"blue"}}color='Blue'>Blue</button>
          <button onClick={()=>{changeColor("green")}} className="h-20 w-20 m-4 p-4 rounded" style={{backgroundColor:"green"}}color='Green'>Green</button>
          <button onClick={()=>{changeColor("yellow")}}className="h-20 w-20 rounded m-4 p-4" style={{backgroundColor:"yellow"}}color='Yellow'>Yellow</button>
          
          </div>
        </div>
        </div>
    </>
  )
}
export default App
