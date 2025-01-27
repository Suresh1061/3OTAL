import Image from 'next/image';
import React from 'react';

type Props = {
     ImgSrc: string;
};

const ItemContainer: React.FC<Props> = ({ ImgSrc }) => {
     return (
          <div className={`h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center bg-color-gradient`}>
               <Image src={ImgSrc} alt='item' width={90} height={100} className='p-5' />
          </div>
     );
};

export default ItemContainer;
