import hero from './assets/hero.png'

const App = () => {
  return (
    <div className='p-5 bg-green-400  '>
      <div className="bg-amber-100  rounded-3xl p-6">
        <div className=" flex grid-cols-3 p-15 items-center justify-center  space-x-40  mt-4  bg-amber-300 rounded-3xl">
          <div className=" bg-amber-500 p-15 rounded-2xl text-white  text-3xl ">Heading1</div>
          <div  className=" bg-amber-500 p-15 rounded-2xl  text-white text-3xl ">Heading2</div>
          <div  className=" bg-amber-500 p-15 rounded-2xl   text-white text-3xl ">Heading3</div>
        </div>
        <div className="bg-emerald-200 flex rounded-2xl  items-center mt-8 space-x-60 p-15">
          <div className="bg-amber-50 text-amber-800 w-1/2 p-15 rounded-2xl ">
            The space utilities are really just a shortcut for adding margin to all-but-the-last-item
             in a group, and aren't designed to handle complex cases like grids, layouts that wrap, or
              situations where the children are rendered in a complex custom order rather than their 
              natural DOM order.
          </div>
          <div  className="w-1/2 p-10 ">
             <img src={hero}
                  alt="image"
                  className="w-full h-96 object-cover rounded-lg"></img>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
