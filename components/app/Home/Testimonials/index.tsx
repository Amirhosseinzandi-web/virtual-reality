"use client"

import { pageLevelLocalization } from "@/constant/localizatyion";
import Image from "next/image";




const Testimonials = () => {
    const { home } = pageLevelLocalization
    return (
        <section className="p-[27px] bg-gradient-purple mt-[53px] rounded-[7px] min-h-[161px] relative">
            <div className="flex flex-col items-center gap-[18px] mx-auto text-center mb-4">
                <p className="orbitron text-base md:text-[19px] tracking-[-2%] font-bold">{home.whatOurClients.title}</p>
                <p className="text-[9px] tracking-[-2%] leading-[11px] text-white/85 max-w-[318px]">{home.whatOurClients.caption}</p>
            </div>
            <div className="grid justify-center items-center grid-cols-3 w-full gap-[8px] absolute left-[50%] translate-x-[-50%] px-[13px]">
                {
                    home.whatOurClients.smallBoxes.map((item, ind) => (
                        <div key={ind} className="rounded-[7px] min-h-[90px] md:min-h-[81px] py-[5px] px-[10px] flex flex-col gap-2 small-boxes-bg">
                            <h3 className="text-[5px] text-[#F7B603] font-bold">{item.title.slice(0, 8)}<span className="text-white">{item.title.slice(8)}</span></h3>
                            <p className="text-[5px] leading-[9px] tracking-[-2%]">{item.caption}</p>
                            <div className="flex items-center gap-[6px] w-fit">
                                <div className="overflow-hidden">
                                    <figure className="w-[19px] h-[19px] rounded-full overflow-hidden">
                                        <Image src={item.src} alt={item.alt} className="object-cover w-full h-full" />
                                    </figure>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-medium text-[5px] tracking-[-2%]">{item.name}</p>
                                    <p className="font-medium text-[5px] tracking-[-2%] text-[#EB4468]">{item.username}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Testimonials;