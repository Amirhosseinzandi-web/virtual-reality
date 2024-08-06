"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import Image from "next/image";




const ExploreProductsComponent = () => {
    const { home } = pageLevelLocalization
    return (
        <section className="mt-[40px] mb-[17px] bg-gradient-purple flex justify-between items-center gap-[30px] rounded-[7px]">
            <div className="flex flex-col p-[25px] gap-3 max-w-[230px]">
                <h3 className="orbitron font-bold text-base leading-5">{home.exploreProducts.title}
                    <figure className="w-[12px] h-[12px] inline-flex ml-[5px] translate-y-[3px]">
                        <Image src={home.exploreProducts.arrowLogo} alt="logo" className="w-full h-full object-cover" />
                    </figure>
                </h3>
                <p className="oswald font-normal text-[9px] leading-[10px] text-white/85">{home.exploreProducts.caption}</p>
                <div className="flex gap-[11px]">
                    <input type="text" placeholder="Your Email" className="text-[6px] text-[#E0A3C98F] rounded-sm px-[6px] w-[108px] outline-none small-boxes-bg" />
                    <button className="gradient-btn text-[8px] w-[48px] h-[18px] rounded-sm flex justify-center items-center gap-[1px]">
                        <p>{home.exploreProducts.startBtn}</p>
                        <Image src={home.exploreProducts.startLogo} alt="logo" className="mt-[1px]" />
                    </button>
                </div>
            </div>

            <div>
                <figure className="max-h-[163px]">
                    <Image src={home.exploreProducts.twoHandLogo} alt="logo" className="w-full h-full object-cover" />
                </figure>
            </div>
        </section>
    );
}

export default ExploreProductsComponent;