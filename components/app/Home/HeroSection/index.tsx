"use client"
import { pageLevelLocalization } from "@/styles/constant/localizatyion";
import Image from "next/image";
import picOne from "../../../../public/pictures/pic1.png"
import picTwo from "../../../../public/pictures/pic2.png"
import picThree from "../../../../public/pictures/pic3.png"
import picFour from "../../../../public/pictures/pic4.png"
import heroLogo from "../../../../public/pictures/hero-logo.png"
import { motion } from "framer-motion"



const HeroSection = () => {

    const allPic = [picOne, picTwo, picThree, picFour]


    const h1Variant = () => {
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration: 2,

                }
            }
        }
    }
    const pVariant = () => {
        return {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: 2
                }
            }
        }
    }



    const { home } = pageLevelLocalization
    return (
        <section className="hero-section-top mt-[83px] flex">

            <div className="w-[50%] flex flex-col gap-6">
                <motion.h1
                    variants={h1Variant()}
                    initial="hidden"
                    animate="visible"
                    className="text-[32px] font-black orbitron leading-[43px] max-w-[350px]"
                >
                    {home.letsExplore}
                </motion.h1>
                <motion.p
                    variants={pVariant()}
                    initial="hidden"
                    animate="visible"
                    className="text-xs text-white/85 max-w-[290px]"
                >
                    {home.virtualTechnology}
                </motion.p>
                <div className="flex gap-[23px]">
                    <button className="gradient-btn rounded text-[11px] font-bold">{home.getItNowBtn}</button>
                    <button className="text-[11px] font-bold">{home.exploreDevice}</button>
                </div>
                <div className="flex items-center gap-[14px]">
                    <div className="flex">
                        {
                            allPic.map((item, ind) => (
                                <div key={ind} className="w-8 h-8 rounded-full overflow-hidden mx-[-2px]">
                                    <figure className="w-full h-full">
                                        <Image src={item} width={2000} height={2000} alt="logo" className="w-full h-full object-cover" />
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                    <span className="block w-2 h-2 bg-white rounded-full"></span>
                    <p className="font-semibold text-[10px]">{home.peopleOnline}</p>
                </div>
            </div>

            <div className="w-[50%] flex justify-end items-center overflow-hidden">
                <div className="w-[309px] h-[325px] bg-[#534686] rounded-b-full rounded-tl-[120rem] rounded-tr-[480rem] mt-[110px] relative right-16">
                    <Image src={heroLogo} width={1200} priority={true} height={1200} alt="logo" className=" w-[320px] h-[238.5px] absolute top-[-65px] left-0 object-cover" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;