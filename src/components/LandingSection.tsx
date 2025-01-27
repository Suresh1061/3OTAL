'use client';

import React, { useState, useEffect } from 'react';
import ItemContainer from './ItemContainer';
import bottle2 from '@/assets/bottle2.png';
import bottle3 from '@/assets/bottle3.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import BotttleAnimation from './BotttleAnimation';
import MobileBottleAnimation from './MobileBottleAnimation';

const LandingSection: React.FC = () => {
     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
          const handleResize = () => {
               setIsMobile(window.innerWidth <= 768);
          };

          handleResize();
          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     return (
          <section className="max-w-screen-xl mx-auto min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
               <div className="h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem] mx-auto p-2 bg-color-gradient rounded-full absolute -z-50">
                    <div className="h-full w-full bg-white rounded-full"></div>
               </div>
               <AnimatePresence mode="wait" key="bottle-animation">
                    {isMobile ? <MobileBottleAnimation /> : <BotttleAnimation />}
                    <motion.div
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                         className="w-full flex flex-col justify-center items-center space-y-2 text-center"
                    >
                         <h1 className="text-3xl sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-semibold w-full lg:max-w-[68rem] mx-auto leading-none">
                              The Ultimate Companion for Hydration
                         </h1>
                         <div className="max-w-[20rem] sm:max-w-[30rem] text-sm sm:text-2xl md:text-3xl font-normal">
                              <p>We believe in the power of hydration.</p>
                              <p>Our mission is simple yet vital.</p>
                         </div>
                         <Button>Inquiry Now</Button>
                    </motion.div>
               </AnimatePresence>
               <div className="w-full flex justify-between items-center absolute bottom-4 sm:bottom-10 px-4">
                    <ItemContainer ImgSrc={bottle2.src} />
                    <ItemContainer ImgSrc={bottle3.src} />
               </div>
          </section>
     );
};

export default LandingSection;
