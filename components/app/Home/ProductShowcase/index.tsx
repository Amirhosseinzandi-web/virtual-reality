"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import { motion } from "framer-motion"
import Image from "next/image";


const ProductShowcase = () => {



    const { home } = pageLevelLocalization
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: "some", once: true }}
            className="mt-[46px] flex flex-col gap-[20px] relative">
            <p className="orbitron font-black text-[17px]">{home.mixedRealityHeadsets.title}</p>
            <div className="grid grid-cols-2 gap-3">
                {
                    home.mixedRealityHeadsets.picturesData.map((item, ind) => (
                        <div key={ind} className="relative rounded-[5px] overflow-hidden">
                            <figure className="w-full h-full">
                                <Image src={item.src} alt={item.alt} width={1300} height={1300} className="object-cover w-full h-full" />
                            </figure>
                            <div className="absolute left-0 bottom-0 py-[6px] px-[12px] flex justify-center items-center blur-content">
                                <div className="flex flex-col gap-[6px]">
                                    <p className="orbitron font-semibold text-[7px]">{item.title}</p>
                                    <p className="text-[7px] max-w-[105px]">{item.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="gradientBubble absolute z-[-1] left-0 translate-x-[-54%] bottom-[-189px]"></div>
        </motion.section>
    );
}

export default ProductShowcase;