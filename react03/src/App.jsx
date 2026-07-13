import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [rollNo, setRollNo]=useState(0)
  const [name, setName]=useState("")
  const [course, setCourse]=useState("")

  const HandleSubmit =(e)=>{
    e.preventDefault()
    alert(`Name: ${name} Roll no.- ${rollNo} Course: ${course}`)
  }

 
 

  return (
    <>
      {/* <div>{count}</div>
      <p>You Clicked {count} times</p> */}
      {/* <button onClick={handleAdd} style={{margin:"10px"}}>Increment</button>
      <button onClick={handleSub}>Decrement</button> */}
      <div>
        <p>Rollno.-{rollNo}</p>
        <p>Name-{name}</p>
        <p>Course-{course}</p>
      </div>

      <form>
        <input type='number' id='rollNo' placeholder='enter ur Roll no'
        onChange={(e)=> setRollNo(e.target.value)}></input>
        <br />
        <input type="text" id="Name" placeholder='enter ur Name'
        onChange={(e)=> setName(e.target.value)}></input>
        <br />
        <input type="text" id="Course" placeholder='enter ur Course'
        onChange={(e)=> setCourse(e.target.value)}></input>
        <br />

        <button onClick={HandleSubmit}>Submit</button>
      </form>
      
    </>
  )
}

export default App
