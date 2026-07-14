
import SkillCard from './SkillCard'

function Skills() {

    const skills=[{
        id:"1",
        title:"React",
        level:"beginner",
    },
    {
        id:"2",
        title:"Java",
        level:"beginner",
    },
    {
        id:"3",
        title:"Javascipt",
        level:'intermediate'
    },
    {
        id:"4",
        title:"HTML CSS",
        level:"Advanced"
    }
]
  return (
    <div style={{padding:"40px",textAlign:"center", backgroundColor:"#282c34", color:"white"}}>
        <h2>My skills</h2>
        <p>Total skills: {skills.length}</p>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
        {skills.map((skill)=>(
            <SkillCard 
            key={skill.id}
            title={skill.title}
            level={skill.level} />
        ))}

        </div>
    </div>
  )
}

export default Skills