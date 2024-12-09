'use client';
import productImage from'@/assets/product-image.webp';
import pyramidImage from'@/assets/pyramid.webp';
import tubeImage from'@/assets/tube.webp';
import Image from 'next/image';
import {motion,useScroll, useTransform} from"framer-motion";
import { useRef } from 'react';
export const ProductShowcase = () => {
  const sectionRef= useRef(null);
  const{scrollYProgress}= useScroll({
    target:sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress,[0,1], [150,-150]);
  return <section ref={sectionRef} className='bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className='section-heading'>
        <div className='flex justify-center'>
          <div className='tag'>
            Boos your Productivity
          </div>

        </div>
        <h2 className='section-title mt-5'>A more effective way to track progress</h2>
        <p className='section-discirption mt-5'>
          Effortlessly turn your ideas into a fully functional, responsive, website in just minutes with this template.
        </p>
      </div>
      <div className='relative'>
        <Image src={productImage} alt='Product Image' className='mt-10'/>
        <motion.img src={pyramidImage.src} alt='Pyramid Image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'   
        style={{
          translateY:translateY,

        }}/>
        <motion.img src={tubeImage.src} alt='Tube Image' height={248} width={248} className='hidden md:block absolute bottom-24 -left-36'  
         style={{
          translateY:translateY,

        }}/>
      </div>
    </div>
  </section>;
};
