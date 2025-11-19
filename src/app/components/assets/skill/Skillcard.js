import React from 'react'
import skills from "../../../../db/info/skills.json";

function Skillcard() {
  return (
    <>
    <div className='py-3'>
      <div className="skill-container">
        {skills.skill.name.map((skill, i) => (
            <div key={i}>
                <p className='skill-card font-s-12 font-w-600 m-0'>{skill}</p>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Skillcard
