import React,{Component} from 'react'

const ExperienceCard = React.forwardRef(({ onClick, href,experience}, ref) => {
  console.log(experience)
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg" onClick={onClick} ref={ref}>
        <img className="object-cover w-full h-48" src={experience.imgUrl} alt={experience.title}/>
      <div className="px-6 ">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{experience.title}</h4>
        <p className="leading-normal text-gray-700 text-justify">{experience.description.substr(0,100)}</p>
      </div>
      <div className="grid grid-cols-12 px-6 py-4">
      </div>
      </div>
    </>
  )
})
export default ExperienceCard
