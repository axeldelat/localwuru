import React from 'react';

function CallToAction() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <section className="h-auto p-20 flex flex-col space-y-10 bg-gradient-to-b from-red-100 from-purple-100">
      <img
        src="/images/thegroup.svg"
        alt="Viajeros"
        className="object-center"
        />
      <p className="font-extrabold text-4xl text-center">Comparte tu Experiencia Local</p>
      <button class="text-2xl bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
        Publicar
      </button>
    </section>
  )
}

export default CallToAction;
