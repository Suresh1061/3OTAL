import React from 'react'
import { WhiteLogo } from './SVGIcon'
import { footerItems, navItems } from '../constant'
import { Facebook, Instagram, X } from 'lucide-react'

const FooterSection = () => {
     return (
          <section>
               <div className='w-full h-auto md:h-52 bg-[#201F1F] px-4 sm:px-6'>
                    <div className='max-w-screen-xl mx-auto h-full flex flex-row md:flex-col justify-between py-10'>
                         <div className='flex md:justify-between items-center max-md:flex-col gap-10'>
                              <WhiteLogo className=' w-44 md:w-52' />
                              <div className='flex flex-col md:flex-row justify-between gap-5 lg:gap-14'>
                                   {navItems.map(item => (
                                        <li className='list-none cursor-pointer text-lg lg:text-xl font-normal text-white' key={item}>{item}</li>
                                   ))}
                              </div>
                         </div>
                         <div className='w-full flex flex-col md:flex-row justify-between items-end gap-10'>
                              <div className='w-32 flex justify-between'>
                                   {[Facebook, Instagram, X].map((Icon, i) => (
                                        <div key={i} className='h-9 w-9 rounded-full bg-[#535353] flex justify-center items-center cursor-pointer'>
                                             <Icon size={20} color='white' className='hover:scale-105'/>
                                        </div>
                                   ))}
                              </div>
                              <div className='flex justify-between max-md:flex-col gap-5 lg:gap-10'>
                                   {footerItems.map(item => (
                                        <li className='list-none cursor-pointer text-lg lg:text-xl font-normal text-white' key={item}>{item}</li>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
               <div className='w-full h-10 bg-[#323232] flex justify-center items-center'>
                    <p className='text-sm sm:text-base text-[#858585]'>Copyright © 2023  BOTOL. All Rights Reserved.</p>
               </div>
          </section>
     )
}

export default FooterSection