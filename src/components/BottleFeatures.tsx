import React from 'react';
import bottleInHand from '@/assets/bottle-in-hand.png';
import Image from 'next/image';
import { bottleItems } from '../constant';

const BottleFeatures = () => {
     return (
          <section className="w-full h-auto lg:h-[52rem] flex flex-row relative -z-20">
               <div className="w-1/2 h-auto lg:h-full">
                    <Image
                         src={bottleInHand}
                         alt="Person holding a water bottle"
                         className="w-full h-full object-cover"
                         priority
                         placeholder="blur"
                         blurDataURL="/placeholder.png"
                    />
               </div>
               <div className="w-1/2 h-auto lg:h-full bg-[#20292C] flex justify-end md:justify-center items-center p-6 lg:p-12">
                    <div className="w-full max-w-md mx-auto flex flex-col space-y-8 lg:space-y-12">
                         {bottleItems.map((item) => (
                              <div key={item.id} className="flex items-center gap-4 md:gap-6">
                                   <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                                        <Image
                                             src={item.icon}
                                             alt={`${item.name} icon`}
                                             width={70}
                                             height={70}
                                             className="w-full h-full object-cover rounded-md"
                                        />
                                   </div>
                                   <h3 className="text-white text-lg sm:text-xl lg:text-3xl xl:text-[40px]">
                                        {item.name}
                                   </h3>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default BottleFeatures;
