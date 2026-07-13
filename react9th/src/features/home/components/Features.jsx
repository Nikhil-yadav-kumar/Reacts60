import Card from './Card'
 
const Features = () => {
  return (
   
        <div style={{ border: "1px solid black", padding: "24px",backgroundColor:"white", textAlign:"center" }}>
            <h2 style={{color:"black"}}>Our Features</h2>
            <div style={{ display: "flex", gap: "16px", justifyContent:"space-evenly" }}>

            <Card title="fast" description="Everything loads quickly." />
            <Card title="Simple" description="Easy to use for everyone." />
            <Card title="Reliable" description="Works the same, every time." />
            <Card title="Affordable" description="Everyone can buy" />


                {/* <div style={{ border: "1px solid black", padding: "16px", width:
                "200px" }}>
                    <h3>Fast</h3>
                    <p>Everything loads quickly.</p>
                </div>
                <div style={{ border: "1px solid black", padding: "16px", width:
                "200px" }}>
                    <h3>Simple</h3>
                    <p>Easy to use for everyone.</p>
                </div>
                <div style={{ border: "1px solid black", padding: "16px", width:
                "200px" }}>
                    <h3>Reliable</h3>
                    <p>Works the same, every time.</p>
                </div> */}
            </div>
        </div>
    
  )
}

export default Features