import React, { useEffect, useState } from 'react';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

const Faq = () => {
    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('faq.json')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])

    return (
        <div className='bg-gray-50 '>
            <div className='pt-12 mb-24 container mx-auto  p-4'>
                <div className='grid lg:grid-cols-2 py-10'>
                    <div className='pl-2 grid items-center'>
                        <div>
                            <img className='w-[500px] mt-6 rounded-md' src="https://img.freepik.com/free-photo/graphic-question-mark-asking-symbol_53876-121375.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph" alt="" />
                           
                        </div>
                    </div>
                    {/* Accordion */}
                    <div className='overflow-y-scroll max-h-[450px] pl-2 '>
                        {
                            faqs?.map(faq => <FaqAccordion key={faq.id} data={faq} />)
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;