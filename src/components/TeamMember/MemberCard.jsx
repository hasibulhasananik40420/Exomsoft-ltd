import { useState } from 'react';
import './TeamCard.css'

const MemberCard = ({ m }) => {
    const [tf, setTf] = useState(false)
    const { name, img, position } = m
    return (
        <div onMouseEnter={()=>setTf(true)} onMouseLeave={()=>setTf(false)} className="relative">
            <img src={img} className="w-full rounded-lg" alt="" />
            <div style={{ borderRadius: '0 140px 0px 0' }} className={`${tf? 'after' : 'before'} bg-opacity-90 bg-slate-800 text-white p-12`}>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p>{position}</p>
            </div>
            <div style={{ borderRadius: '0 140px 0px 0', padding: `${tf? '65px 102px' : '0px 102px' }` }} className={`${tf? 'delay-300 duration-700' : 'delay-0 duration-0'} left-0  border-r-4 bg-opacity-90 bottom-0 absolute   text-white `}>

            </div>
        </div>
    );
};

export default MemberCard;