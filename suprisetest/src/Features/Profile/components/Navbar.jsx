

function Navbar() {
  return (
    <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between", backgroundColor:"#282c34", color:"white",
    padding:"15px 30px"}}>
    
        <h1 >Nikhil Yadav</h1>
        <nav >
          <a href="#" style={{ marginRight:"20px", textDecoration:"none", color:"white"}}>Home</a>
          <a href="#" style={{marginRight:"20px", textDecoration:"none", color:"white"}}>Skills</a>
          <a href="#" style={{marginRight:"20px", textDecoration:"none", color:"white"}}>Contact</a>
        </nav>
      

    </div>
  )
}

export default Navbar