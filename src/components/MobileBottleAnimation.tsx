'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BottleCap, BottleBody } from './SVGIcon';

const MobileBottleAnimation = () => {
     // const { scrollY } = useScroll();
     // const [viewportHeight, setViewportHeight] = useState<number | null>(null);

     // useEffect(() => {
     //      const updateViewportHeight = () => {
     //           setViewportHeight(window.innerHeight || document.documentElement.clientHeight);
     //      };

     //      updateViewportHeight();
     //      window.addEventListener('resize', updateViewportHeight);

     //      return () => window.removeEventListener('resize', updateViewportHeight);
     // }, []);

     // if (viewportHeight === null) {
     //      return null;
     // }

     // const capY = useTransform(scrollY, [0, viewportHeight], [-0.2 * viewportHeight, 0.5 * viewportHeight]);
     // const bodyY = useTransform(scrollY, [0, viewportHeight], [0.1 * viewportHeight, 0.5 * viewportHeight]);

     // return (
     //      <motion.div className="relative h-screen overflow-hidden">
     //           <motion.div
     //                initial={{ y: 0 }}
     //                animate={{ y: -0.2 * viewportHeight }}
     //                exit={{ y: -0.2 * viewportHeight }}
     //                transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
     //                style={{ y: capY }}
     //           >
     //                <BottleCap className="absolute left-1/2 transform -translate-x-1/2 z-30 w-[5rem] sm:w-[7rem] lg:w-[10rem]" />
     //           </motion.div>

     //           <motion.div
     //                initial={{ y: 0 }}
     //                animate={{ y: 0.1 * viewportHeight }}
     //                exit={{ y: 0.1 * viewportHeight }}
     //                transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
     //                style={{ y: bodyY }}
     //           >
     //                <BottleBody className="absolute left-1/2 transform -translate-x-1/2 z-30 w-[5rem] sm:w-[7rem] lg:w-[10rem]" />
     //           </motion.div>
     //      </motion.div>
     // );
};

export default MobileBottleAnimation;
