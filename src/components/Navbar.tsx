'use client';

import React from 'react';
import { Button } from './ui/button';
import { navItems } from '../constant';
import { BlackLogo } from './SVGIcon';
import { Menu, X } from 'lucide-react';
import {
     Drawer,
     DrawerClose,
     DrawerContent,
     DrawerFooter,
     DrawerHeader,
     DrawerTrigger,
} from '@/components/ui/drawer';

const Navbar: React.FC = () => {
     return (
          <nav className="w-full bg-white shadow-md">
               <div className="max-w-screen-xl h-20 mx-auto flex justify-between items-center px-4 sm:px-6">
                    <BlackLogo className="w-32 sm:w-44" />

                    <div className="hidden md:flex justify-between items-center gap-5 lg:gap-12">
                         <ul className="flex justify-between items-center gap-10">
                              {navItems.map((item) => (
                                   <li
                                        className="list-none cursor-pointer text-base font-normal hover:text-gray-600"
                                        key={item}
                                   >
                                        {item}
                                   </li>
                              ))}
                         </ul>
                         <Button>Inquiry Now</Button>
                    </div>

                    <div className="md:hidden">
                         <Drawer direction='left'>
                              <DrawerTrigger asChild>
                                   <button aria-label="Toggle menu">
                                        <Menu className="w-6 h-6" />
                                   </button>
                              </DrawerTrigger>
                              <DrawerContent className='h-screen w-2/3'>
                                   <DrawerHeader className="flex justify-between items-center px-4 py-2 border-b">
                                        <BlackLogo className="w-28 mb-2" />
                                        <DrawerClose asChild>
                                             <button aria-label="Close menu">
                                                  <X className="w-6 h-6" />
                                             </button>
                                        </DrawerClose>
                                   </DrawerHeader>
                                   <div className="px-6 py-4">
                                        <ul className="flex flex-col gap-5 mt-4">
                                             {navItems.map((item) => (
                                                  <li
                                                       className="list-none cursor-pointer text-lg font-medium hover:text-gray-600"
                                                       key={item}
                                                  >
                                                       {item}
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                                   <DrawerFooter className="px-6 py-4 border-t flex flex-col gap-4">
                                        <Button className="w-full">Inquiry Now</Button>
                                        <DrawerClose asChild>
                                             <Button variant="outline" className="w-full">
                                                  Close
                                             </Button>
                                        </DrawerClose>
                                   </DrawerFooter>
                              </DrawerContent>
                         </Drawer>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
