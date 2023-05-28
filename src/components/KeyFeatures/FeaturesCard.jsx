import React, { useState } from 'react';

const FeaturesCard = ({ feature }) => {
    const [tf, setTf] = useState(true)
    const { serviceName, serviceDetails, img } = feature
    console.log(tf);
    return (
        <div onMouseEnter={() => setTf(false)} onMouseLeave={() => setTf(true)} className='bg-indigo-100 cursor-pointer p-8 rounded-xl relative'>
            <div className={`absolute ${tf ? 'left-10 duration-150 scale-90' : 'left-40 duration-700 scale-110'}`}>
                {img}
            </div>
            <h3 className='font-bold text-xl mb-5 mt-9'>{serviceName}</h3>
            <p><small>{serviceDetails}</small></p>
        </div>
    );
};

export default FeaturesCard;