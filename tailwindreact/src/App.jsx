
import ContactForm from "./components/ContactForm";


const App = () => {
  // const [count, setCount]=useState(0);
  // const [count2, setCount2]=useState(0);
  
  // useEffect(()=>{
  //   console.log('useEffect called and count :' , count, count2)
  // },[count])

  return(
    <>
      {/* <button onClick={()=> setCount(count + 1)}>Increment</button>
      <p>Count : {count}</p>
      <button onClick={()=> setCount2(count + 1)}>Decrement</button>
      <p>Count2 : {count2}</p> */}

      <ContactForm />
    </>

  )
  


}

export default App
// return (
    
  //     <div className="bg-amber-100  rounded-3xl p-6">
  //       <div className=" flex grid-cols-3 py-10 items-center justify-center  space-x-40  mt-8  bg-amber-300 rounded-3xl">
  //         <div className=" bg-amber-500 p-10 rounded-2xl text-white  text-3xl ">Heading1</div>
  //         <div  className=" bg-amber-500 p-10 rounded-2xl  text-white text-3xl ">Heading2</div>
  //         <div  className=" bg-amber-500 p-10 rounded-2xl   text-white text-3xl ">Heading3</div>
  //       </div>
  //       <div className="bg-emerald-200 flex rounded-2xl  items-center mt-16 space-x-60 py-10">
  //         <div className="bg-emerald-200  text-black w-2/3 p-10 rounded-2xl text-3xl ">
  //           The space utilities are really just a shortcut for adding margin to all-but-the-last-item
  //            in a group, and aren't designed to handle complex cases like grids, layouts that wrap, or
  //             situations where the children are rendered in a complex custom order rather than their 
  //             natural DOM order.
  //         </div>
  //         <div  className="w-1/3 p-0 ">
  //            <img src={eye}
  //                 alt="image"
  //                 className="w-full h-96 object-cover rounded-lg"></img>

  //         </div>
  //       </div>
  //     </div>
   
  // )