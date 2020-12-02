import React from 'react'


function FAQ ({faq,index,toggleFAQ}){
    return (
        <div className={" bg-white p-5 rounded-lg text-black  my-3 shadow rounded-sm m-3 faq "+(faq.open ? 'open':'')} key={index} onClick={()=>toggleFAQ(index)}>
            <div className="faq-question">
            <img src="/images/Opener.svg" className="transition duration-500 ease-in-out inline float-left h-5"></img>
                {faq.question}
            </div>
            <div className="faq-answer opacity-0 max-h-0 overflow-y-hidden">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ
