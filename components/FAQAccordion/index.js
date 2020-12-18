import React, { Component,useState } from 'react'

import FAQ from '../FAQ'

function Accordion(){
    const [faqs,setFaqs] = useState([
            {
            question:"¿Tiene algún costo?",
            answer:"Localwuru es completamente GRATIS, la intención de la plataforma es ser un espacio para compartir experiencias con otros viajeros",
            open:true
            },
            {
            question:"¿Es seguro?",
            answer:"Claro que es seguro, nuestra comunidad trata en todo momento de compartir experiencias que sean extraordinarias, siempre cuidando la integridad propia y de los otros miembros",
            open:false
            },
            {
            question:"¿Cómo puedo hacer donaciones?",
            answer:"Buena pregunta, en todas las experiencias podrás ver quien es el autor y hacer un donativo directo a la cuenta del mismo. LocalWuru no rebice una comisión por esta transacción, queremos incentivar el apoyo entre viajeros.",
            open:false
            }
        ]);

        const toggleFAQ = index =>{
            setFaqs(faqs.map((faq,i)=>{
                if(i === index){
                    faq.open = !faq.open
                }else{
                    faq.open = false
                }
                return faq
            }))
        }

        return (
            <div className="faqs grid  grid-cols-1 md:grid-cols-6 gap-4">
              {faqs.map((faq,i)=>(
                  <div className="col-span-1 md:col-start-2 md:col-span-4">
                  <FAQ faq={faq} index={i}toggleFAQ={toggleFAQ}/>
                  </div>
              ))}
            </div>
        );
}

export default Accordion
