import React from 'react'
import { MdOutlineComputer, MdOutlineSupportAgent, MdPerson } from 'react-icons/md';
import GreenBtn from './GreenBtn';

const Support = () => {
  const supportLinks = [
    {
      id: 1,
      title: "Technicals",
      subtitle: "Nevermore shadow of muttered upon him the, yet nevermore name nepenthe at Now thereat fact but have when, tempter echo friends over you for there.",
      icon: <MdOutlineComputer size={25} />
    },
    {
      id: 2,
      title: "Sales",
      subtitle: "Nevermore shadow of muttered upon him the, yet nevermore name nepenthe at Now thereat fact but have when, tempter echo friends over you for there.",
      icon: <MdOutlineSupportAgent size={25} />
    },
    {
      id: 3,
      title: "General",
      subtitle: "Nevermore shadow of muttered upon him the, yet nevermore name nepenthe at Now thereat fact but have when, tempter echo friends over you for there.",
      icon: <MdPerson size={25} />
    },
  ];

  return (
    <div name='support' className='w-full h-fit bg-slate-300'>
      <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
        <div className='px-4 py-12'>
          <h2 className='text-5xl font-bold text-center'>Support</h2>
          <p className='text-xl py-8 text-gray-600 text-center'>Lies rare him your followed raven and, yore discourse utters whispered 
            if my cried lamplight sat sent, all bends purple.</p>
        </div>

        {/* support cards */}
        <div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {supportLinks.map((link) => (
            <div key={link.id} className='bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor'>
              <div className='p-8'>
                <div className='flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem]'>
                  {link.icon}
                </div>
                <h3 className='font-bold text-2xl my-6'>{link.title}</h3>
                <p className='text-gray-300 text-base pb-12'>{link.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex w-full items-center justify-center'>
          <GreenBtn title="contact us" className='capitalize py-3 px-6 w-1/2 my-8'/>
        </div>
      </div>
    </div>
  );
};

export default Support;
