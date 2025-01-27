import React from 'react';
import { Button } from './ui/button';
import { products } from '../constant';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
     return (
          <section className="max-w-screen-xl mx-auto my-12 px-4 sm:px-6">
               <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
                    <div className="text-center sm:text-left">
                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                              Hydration Essentials
                         </h1>
                         <p className="text-sm sm:text-lg md:text-xl text-gray-600">
                              Discover Our Range of Premium Water Bottles
                         </p>
                    </div>
                    <Button className="px-6 py-3 text-sm sm:text-base">View More</Button>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {products.map((product) => (
                         <ProductCard
                              key={product.id}
                              productImg={product.productImg}
                              productName={product.productName}
                         />
                    ))}
               </div>
          </section>
     );
};

export default ProductSection;
