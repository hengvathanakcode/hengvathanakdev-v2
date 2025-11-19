import React from 'react'
import Projectcard from '../components/assets/project/Projectcard'

function Project() {
  return (
    <>
      <div>
        <div className='text-center mb-3'>
            <span className='font-w-600 font-s-12 project-title-header'>My Projects</span>
        </div>
        <h5 className='font-w-600 text-start'>Things I've made trying to improve my skills both front-end and back-end.</h5>
        <p className='font-s-14 font-w-700 text-secondary space-font'>I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.</p>
      </div>
      <Projectcard/>
    </>
  )
}

export default Project
