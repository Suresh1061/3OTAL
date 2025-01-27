'use client'

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BottleCap, BottleBody } from './SVGIcon';

type Props = {};

const BotttleAnimation = (props: Props) => {
     const { scrollY } = useScroll();
     const [viewportHeight, setViewportHeight] = useState(0);

     useEffect(() => {
          // Set viewport height on the client side
          setViewportHeight(window.innerHeight);

          const handleResize = () => setViewportHeight(window.innerHeight);
          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     // Only calculate transforms if viewportHeight is available
     const capY = useTransform(scrollY, [0, viewportHeight], [-150, 600]);
     const bodyY = useTransform(scrollY, [0, viewportHeight], [220, 600]);

     if (!viewportHeight) return null; // Render nothing until client-side hydration is complete

     return (
          <motion.div className="hidden sm:flex absolute top-[20%] left-[44%] transform -translate-x-1/2 -translate-y-1/2">
               <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -150 }}
                    exit={{ y: -150 }}
                    transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
                    style={{ y: capY }}
               >
                    <BottleCap className="absolute z-30 w-[5rem] sm:w-[7rem] lg:w-[10rem]" />
               </motion.div>

               <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 220 }}
                    exit={{ y: 220 }}
                    transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
                    style={{ y: bodyY }}
               >
                    <BottleBody className="absolute z-30 w-[5rem] sm:w-[7rem] lg:w-[10rem]" />
               </motion.div>
          </motion.div>
     );
};

export default BotttleAnimation;
