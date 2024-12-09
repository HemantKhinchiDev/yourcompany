'use client';
import ArrowRight from'@/assets/arrow-right.svg';
import StarImage from'@/assets/star.webp';
import SpringImage from'@/assets/spring.webp';
import Image from 'next/image';
import {motion,useScroll, useTransform} from"framer-motion";
import { useRef } from 'react';
export const CallToAction = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start end','end start' ]
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return <>
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className='secton-heading relative'>
          <h2 className="section-title">
            Signup for free today
          </h2>
          <p className="section-discirption mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts. 
          </p>
        <motion.img src={StarImage.src} alt='star Image' width={360} className='absolute -left-[350px] -top-[137px]' style={{translateY}}/>
        <motion.img src={SpringImage.src} alt='Spring Image' width={360} className='absolute -right-[331px] -top-[19px]' style={{translateY}}/>

        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1"><span>Learn more</span><ArrowRight className="h-5 w-5"/> </button>
        </div>
      </div>
    </section>
  </>;
};
