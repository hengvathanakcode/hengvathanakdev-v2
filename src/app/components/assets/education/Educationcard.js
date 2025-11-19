import React from 'react'
import apie from "../../../../db/education/data.js";
import Educationdb from "./Educationdb.js"

function Educationcard() {
  return (
    <>
      {apie.map((educations, index) => (
        <div key={(index + 1).toString()}>
          <Educationdb
            key={(index + 1).toString()}
            link={educations().link}
            image={educations().image}
            classname={educations().classname}
            title={educations().title}
            description={educations().description}
            date={educations().date}
          />
        </div>
      ))}
    </>
  )
}

export default Educationcard
