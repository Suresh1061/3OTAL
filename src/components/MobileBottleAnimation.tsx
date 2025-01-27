import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BottleCap, BottleBody } from './SVGIcon';

type Props = {};

const MobileBottleAnimation = (props: Props) => {
     const { scrollY } = useScroll();
     const [viewportHeight, setViewportHeight] = useState(0);

     useEffect(() => {
          setViewportHeight(window.innerHeight);

          const handleResize = () => setViewportHeight(window.innerHeight);
          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     const capY = useTransform(scrollY, [0, viewportHeight], [-viewportHeight*0.35, viewportHeight*0.43]);
     const bodyY = useTransform(scrollY, [0, viewportHeight], [-viewportHeight*0.02, viewportHeight*0.43]);

     if (!viewportHeight) return null;

     return (
          <div className='flex sm:hidden'>
               <motion.div className="flex absolute top-[25%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                         initial={{ y: -viewportHeight*0.15 }}
                         animate={{ y: -viewportHeight*0.35 }}
                         exit={{ y: -viewportHeight*0.35 }}
                         transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
                         style={{ y: capY }}
                    >
                         <BottleCap className="absolute z-30 w-[5rem] sm:w-[5rem]" />
                    </motion.div>

                    <motion.div
                         initial={{ y: -viewportHeight*0.15 }}
                         animate={{ y: -viewportHeight*0.02}}
                         exit={{ y: -viewportHeight*0.02 }}
                         transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
                         style={{ y: bodyY }}
                    >
                         <BottleBody className="absolute z-30 w-[5rem] sm:w-[5rem]" />
                    </motion.div>
               </motion.div>
          </div>
     );
};

export default MobileBottleAnimation;
