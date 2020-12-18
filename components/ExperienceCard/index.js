import React,{Component} from 'react'

const ExperienceCard = React.forwardRef(({ onClick, href,title,city, state, country,description, imgUrl}, ref) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg" onClick={onClick} ref={ref}>
        <img className="object-cover w-full h-48" src={imgUrl} alt="Flower and sky"/>
      <div className="px-6 ">
        <h4 className="my-3 text-xl font-semibold tracking-tight text-gray-800">{title}</h4>
        <p className="text-sm text-gray-700 text-justify font-bold">{city}, {state}, {country}</p>
      </div>
      <div className="grid grid-cols-12 px-6 py-4">
        {/* <div className="col-span-10">
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 cat</span>
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
        </div> */}
        {/* <div className="col-span-2 flex items-end justify-end">
          <span className=" inline-flex items-center justify-center px-2 py-1 text-xl font-bold leading-none text-white bg-purple-600 rounded-full">9</span>
        </div> */}
      </div>
      </div>
    </>
  )
})
export default ExperienceCard
