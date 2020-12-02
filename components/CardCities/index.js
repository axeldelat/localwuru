import React from 'react'

function CardCities ({faq,index,toggleFAQ}){
  return (
      <div className="col-span-2 bg-white py-32 rounded-lg text-black  my-3 shadow-md rounded-xl m-3 box-content "
      style={{
        backgroundImage: "url(" + "/images/cdmx.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h3 className="text-white font-bold text-5xl text-center">City Name</h3>
      </div>
  )
}

export default CardCities
