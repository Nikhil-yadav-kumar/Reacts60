

function SkillCard({ title, level }) {
  return (
    <div style={{ border: '1px solid white', padding: '15px', margin: '10px', borderRadius: '5px', textAlign: 'center', width: '150px' , backgroundColor:"#282c34", color:"white" }}>
      <h3>{title}</h3>
      <p>{level}</p>
    </div>
  )
}

export default SkillCard