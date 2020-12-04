import React from 'react'

function Experience ({nameExperience,city}){
  return (
     <div className="w-full shadow">
  <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
  <div className="font-bold text-xl mb-2">{nameExperience}</div>
    <p className="text-grey-darker text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 py-4 ">
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
    <p className="float-right mb-5 border rounded-full p-2">5</p>
  </div>
</div>
  )
}

export default Experience
