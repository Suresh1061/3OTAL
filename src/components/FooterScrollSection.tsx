'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Urbanist } from 'next/font/google';
import { AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import TimeLineSvg, { TimeLineMobileVersion } from './TimeLineSvg';
import { easeInOut } from 'framer-motion';

const urbanist = Urbanist({ subsets: ['latin'] });

const FooterScrollSection = () => {
     const [width, setWidth] = useState(100);
     const [left, setLeft] = useState(50);
     const [inView, setInView] = useState(false);
     const sectionRef = useRef<HTMLDivElement>(null);
     const targetRef = useRef<HTMLDivElement>(null);
     const { scrollYProgress } = useScroll({ target: targetRef });

     useEffect(() => {
          const observer = new IntersectionObserver(
               async ([entry]) => {
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    setInView(entry.isIntersecting);
               },
               { threshold: 0.9 }
          );

          const secRef = sectionRef.current;

          if (secRef) {
               observer.observe(secRef);
          }

          return () => {
               if (secRef) {
                    observer.unobserve(secRef);
               }
          };
     }, []);

     const widthValue = useTransform(scrollYProgress, [0, 1], [0, 100], { ease: easeInOut });

     useEffect(() => {
          return widthValue.onChange((value) => {
               setWidth((prevWidth) => {
                    if (window.innerWidth < 768) {
                         const newWidth = 1500 * (value / 100);
                         return Math.min(prevWidth + (newWidth - prevWidth) * 0.1, newWidth);
                    } else {
                         const newWidth = 3300 * (value / 100);
                         return Math.min(prevWidth + (newWidth - prevWidth) * 0.1, newWidth);
                    }
               });

               if (window.innerWidth < 768) setLeft(-1200 * (value / 100) + 50);
               else setLeft(-2000 * (value / 100) + 100);
          });
     }, [widthValue]);

     const Yval = useTransform(scrollYProgress, [0, 1], ['0%', '5%'], { ease: easeInOut });

     return (
          <section ref={targetRef} className="relative h-[130vh] sm:h-[300vh]">
               <motion.div ref={sectionRef} className="w-full h-screen overflow-hidden bg_timeline sticky top-0 left-0">
                    <AnimatePresence mode="wait" key="footer-scroll">
                         {!inView ? (
                              <motion.div
                                   initial={{ opacity: 1, display: 'flex' }}
                                   animate={{ opacity: 1, display: 'flex' }}
                                   exit={{ opacity: 0, display: 'none' }}
                                   transition={{ duration: 0.5, ease: 'easeInOut' }}
                                   className="w-full h-full flex justify-center items-center"
                              >
                                   <div className={`${urbanist.className} max-w-[37rem] mx-auto text-center px-4`}>
                                        <p className="text-sm font-semibold mb-4 uppercase text-neutral-950">Your Transformation, One Step at a Time</p>
                                        <h1 className="text-2xl sm:3xl md:text-4xl text-neutral-950 font-normal">
                                             Fitness is a journey—every day brings you closer to the life you want
                                        </h1>
                                   </div>
                              </motion.div>
                         ) : window.innerWidth > 768 ? (
                              <motion.section
                                   initial={{ opacity: 0, display: 'none' }}
                                   animate={{ opacity: 1, display: 'flex' }}
                                   exit={{ opacity: 1, display: 'flex' }}
                                   transition={{ duration: 0.5, ease: 'easeInOut' }}
                                   className="relative w-full h-full"
                              >
                                   <motion.div className="sticky top-0 h-screen bg_timeline flex justify-center items-center overflow-hidden">
                                        <div className="w-full h-screen bg-white/50 absolute top-0 left-0"></div>
                                        <motion.div style={{ x: left, y: Yval }} className="w-full h-full relative">
                                             <TimeLineSvg width={width} className="absolute top-1/2 -translate-y-1/2" />
                                        </motion.div>
                                   </motion.div>
                              </motion.section>
                         ) : (
                              <motion.section
                                   initial={{ opacity: 0, display: 'none' }}
                                   animate={{ opacity: 1, display: 'flex' }}
                                   exit={{ opacity: 1, display: 'flex' }}
                                   transition={{ duration: 0.5, ease: 'easeInOut' }}
                                   className="relative w-full h-full"
                              >
                                   <motion.div className="sticky top-0 h-screen bg_timeline flex justify-center items-center overflow-hidden">
                                        <div className="w-full h-screen bg-white/50 absolute top-0 left-0"></div>
                                        <motion.div style={{ x: left, y: Yval }} className="w-full h-full relative">
                                             <TimeLineMobileVersion width={width} className="absolute top-1/2 -translate-y-1/2" />
                                        </motion.div>
                                   </motion.div>
                              </motion.section>
                         )}
                    </AnimatePresence>
               </motion.div>
          </section>
     );
};

export default FooterScrollSection;
