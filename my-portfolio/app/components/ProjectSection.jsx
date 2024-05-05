import React from 'react'
import ProjectCard from './ProjectCard'
const ProjectsData=[
  {
   id:1,
   title:"React Portfolio Website",
   description:"Project 1 description",
   image:"/images/projects/1.png",
   tag:["All","Web"],
  },

];
const ProjectSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My projects</h2>
    <div>
      {ProjectsData.map((project)=>(
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image}
      tags={project}
    />
    ))}
      </div>
      </>
  )
}

export default ProjectSection