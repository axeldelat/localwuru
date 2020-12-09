import React,{Component} from 'react'

const ExperienceCard = React.forwardRef(({ onClick, href,nameExperience,city}, ref) => {
  return (
    <>
      <div className="max-w-xs overflow-hidden rounded-lg shadow-lg" onClick={onClick} ref={ref}>
        <img className="object-cover w-full h-48" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky"/>
      <div className="px-6 ">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{nameExperience}</h4>
        <p className="leading-normal text-gray-700 text-justify">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
      </div>
      <div className="grid grid-cols-12 px-6 py-4">
        <div className="col-span-10">
          <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
          <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 cat</span>
          <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
          <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-600 bg-gray-100 rounded-full">🥶 Category</span>
        </div>
        <div className="col-span-2 flex items-end justify-end">
          <span className=" inline-flex items-center justify-center px-2 py-1 text-xl font-bold leading-none text-white bg-purple-600 rounded-full">9</span>
        </div>
      </div>
      </div>
    </>
  )
})
export default ExperienceCard
