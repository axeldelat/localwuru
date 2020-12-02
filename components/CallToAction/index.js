import React from 'react';

function CallToAction() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="flex items-center justify-center flex-col ">
      <img
        src="/images/thegroup.svg"
        alt="Viajeros"
        className="object-center my-10"
        />
      <p className="font-extrabold text-4xl text-center mb-10">Comparte tu Experiencia Local</p>
      <button class="text-2xl bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mb-10">
        Publicar
      </button>
    </div>
  )
}

export default CallToAction;
