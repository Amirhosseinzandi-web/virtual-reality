"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import Image from "next/image";



const CompanyValuesComponent = () => {
    const { home } = pageLevelLocalization
    return (
        <section className="mt-[86px] flex flex-col md:flex-row gap-[50px] relative">
            <div className="flex flex-col gap-[22px] pt-[7px]">
                <h3 className="orbitron font-bold text-[19px] leading-6 max-w-[224px] relative">{home.companyValue.title}
                    <figure className="w-[18px] h-[18px] overflow-hidden absolute right-[125px] bottom-[2px]">
                        <Image src={home.companyValue.heartLogo} alt="heart-logo" className="w-full h-full" />
                    </figure>
                </h3>
                <p className="text-xs leading-[14px] text-white/85 md:max-w-[231px]">{home.companyValue.caption}</p>
            </div>

            <div className="grid grid-cols-2 gap-[17px] w-full max-w-[400px] mx-auto md:w-auto md:max-w-[unset] md:mx-0">
                {
                    home.companyValue.logos.map((item, ind) => (
                        <div key={ind} className="flex flex-col items-center gap-[5px]">
                            <figure className="w-fit h-fit overflow-hidden">
                                <Image src={item.src} alt={item.alt} className="w-full h-full" />
                            </figure>
                            <figcaption className="font-semibold text-[7px]">{item.title}</figcaption>
                        </div>
                    ))
                }
            </div>
            <div className="gradientBubble absolute z-[-1] bottom-[-217px] left-[-330px]"></div>
            <div className="gradientBubble absolute z-[-1] bottom-[-180px] right-[-350px]"></div>
        </section>
    );
}

export default CompanyValuesComponent;