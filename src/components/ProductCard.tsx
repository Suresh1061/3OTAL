'use client'

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { motion } from "framer-motion";

type Props = {
     productImg: string;
     productName: string;
};

const ProductCard: React.FC<Props> = ({ productImg, productName }) => {
     return (
          <div className="max-w-[26rem] flex flex-col space-y-4 max-sm:items-center">
               <motion.div
                    className="w-full h-full overflow-hidden rounded-3xl">
                    <Image
                         src={productImg}
                         alt={productName}
                         width={416}
                         height={416}
                         className="aspect-square hover:scale-105 transition-all duration-500 ease-in-out"
                         priority
                         placeholder="blur"
                         blurDataURL="/placeholder.png"
                    />
               </motion.div>
               <h2 className="text-xl sm:text-2xl font-medium max-sm:text-center">{productName}</h2>
               <Button className="w-36 md:w-44">Learn More</Button>
          </div>
     );
};

export default ProductCard;
