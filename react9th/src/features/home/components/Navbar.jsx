

const Navbar = () => {
  return (
   
        <div style={{ border: "1px solid black", padding: "16px", display: "flex",
        justifyContent: "space-between" ,backgroundColor:"lightcyan"}}>
            <h2 style={{color:"black"}}>MyBrand</h2>
            <div style={{justifyContent:"space-between", marginInline:"20px"}}>
                <span style={{justifyContent:"space-between", marginInline:"20px", color:"black"}}>Home</span>
                <span style={{justifyContent:"space-between", marginInline:"20px", color:"black"}}>About</span>
                <span style={{justifyContent:"space-between", marginInline:"20px", color:"black"}}>Contact</span>
            </div>
        </div>
   
  )
}

export default Navbar;