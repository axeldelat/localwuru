import React from 'react'


function FAQ ({faq,index,toggleFAQ}){
    return (
        <div className={"text-black w-3/5 m-auto my-3 shadow rounded-sm m-3 faq "+(faq.open ? 'open':'')} key={index} onClick={()=>toggleFAQ(index)}>
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