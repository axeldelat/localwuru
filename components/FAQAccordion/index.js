import React, { Component,useState } from 'react'

import FAQ from '../FAQ'

function Accordion(){
    const [faqs,setFaqs] = useState([
            {
            question:"¿Tiene algún costo?",
            answer:"This is the answer1",
            open:true
            },
            {
            question:"¿Es seguro?",
            answer:"This is the answer2",
            open:false
            },
            {
            question:"¿Cómo puedo hacer donaciones?",
            answer:"This is the answer3",
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
            <div className="faqs grid grid-cols-6 gap-4">
              {faqs.map((faq,i)=>(
                  <div className="col-start-2 col-span-4">
                  <FAQ faq={faq} index={i}toggleFAQ={toggleFAQ}/>
                  </div>
              ))}
            </div>
        );
}

export default Accordion
