
import image from '../../assets/architect.png'
import MemberCard from './MemberCard';
import './TeamCard.css'

const TeamMember = () => {
  const members = [
    {
      id: 1,
      name: "Hasibul Hasan",
      img: 'https://i.ibb.co/MfcTrsB/Whats-App-Image-2022-11-19-at-9-14-35-PM.jpg',
      position: "Ceo and founder"
    },
    {
      id: 2,
      name: "name",
      img: image,
      position: "team position"
    },
    {
      id: 3,
      name: "name",
      img: image,
      position: "team position"
    },
    {
      id: 4,
      name: "name",
      img: image,
      position: "team position"
    }
  ];

  return (
    <div className='max-w-[1440px] mx-auto mb-12'>
      <h3 className="text-center mt-14 text-3xl font-semibold text-cyan-600">Our Strong Team</h3>
      <p className="text-center mt-1 mb-3 text-lg ">It is a strong pillar</p>
      <div className='max-w-[1440px] px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='md:col-span-2 flex items-center'>
          <div className=''>
            <p className='mb-3  inline  bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500'>Team Member</p>
            <h3 className='text-2xl md:text-4xl'>Our proffessional </h3>
            <h3 className='text-2xl md:text-4xl'>expert team members </h3>
          </div>
        </div>
        <div  className="relative">
            <img src={image} className="w-[400px] h-[400px] rounded-lg" alt="" />
            <div style={{ borderRadius: '0 140px 0px 0' }} className={` left-0 bg-opacity-90 bottom-0 absolute bg-slate-800 text-white p-12`}>
                <h2 className="text-xl font-semibold mb-2">sohan</h2>
                <p>team position</p>
            </div>
            <div style={{ borderRadius: '0 140px 0px 0', padding: '65px 102px' }} className={` left-0  border-r-4 bg-opacity-90 bottom-0 absolute  text-white `}>

            </div>
        </div>
        {members.map(m => <MemberCard key={m.id} m={m}></MemberCard>)}
      </div>

    </div>
  )
}

export default TeamMember