

function Card( {title,description}) {
  return (
    <div style={{border:"1px solid black", padding:"16px",width:"200px", justifyContent:"space-around",gap:"20px",borderRadius:"10px",color:"black"}}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card;