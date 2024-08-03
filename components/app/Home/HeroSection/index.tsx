"use client"
import { pageLevelLocalization } from "@/constant/localizatyion";
import { hiddenToVisibleDelay, rightToLeftDelay, rightToLeftNormal } from "@/utilities/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import heroLogo from "../../../../public/pictures/hero-logo.png";
import picOne from "../../../../public/pictures/pic1.png";
import picTwo from "../../../../public/pictures/pic2.png";
import picThree from "../../../../public/pictures/pic3.png";
import picFour from "../../../../public/pictures/pic4.png";
import experiencePicOne from "../../../../public/pictures/experience-pic-one.png"
import experiencePicTwo from "../../../../public/pictures/experience-pic-two.png"
import startsLogo from "../../../../public/pictures/stars.svg"
import awesomeExperienceLogo from "../../../../public/pictures/awesome-experience-logo.png"


const HeroSection = () => {

    const allPic = [picOne, picTwo, picThree, picFour]



    const { home } = pageLevelLocalization
    return (
        <>
            <section className="hero-section-top mt-[83px] flex flex-col md:flex-row">

                <div className="w-full md:w-[50%] flex flex-col gap-6">
                    <motion.h1
                        variants={hiddenToVisibleDelay(0, 2)}
                        initial="hidden"
                        animate="visible"
                        className="text-[32px] font-black orbitron leading-[43px] max-w-[350px]"
                    >
                        {home.letsExplore}
                    </motion.h1>
                    <motion.p
                        variants={hiddenToVisibleDelay(1, 2)}
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

                <motion.div
                    variants={rightToLeftDelay(0, 1)}
                    initial="hidden"
                    animate="visible"
                    className="w-full md:w-[50%] flex justify-center items-center  select-none"
                >
                    <div className="w-[309px] h-[325px] bg-[#534686] rounded-b-full rounded-tl-[120rem] rounded-tr-[480rem] mt-[110px] relative lg:right-16 flex flex-col">
                        <Image src={heroLogo} width={1200} priority={true} height={1200} alt="logo" className=" w-[320px] h-[238.5px] absolute top-[-65px] left-0 object-cover" />
                        <Image src={startsLogo} width={52} height={52} alt="logo" className="absolute top-[-109px] left-[271px]" />
                        <div className="gradient-border"></div>
                        <div className="mt-[170px] mx-auto flex flex-col items-center">
                            <p className="orbitron font-extrabold text-[19px] text-white [text-shadow:2px_2px_2px_black]">
                                {home.cinematicVirtual}
                            </p>
                            <span className="block my-[20px] w-[152px] h-[1px] bg-white"></span>
                            <p className="text-[11px] text-center max-w-[170px] leading-[13px]">{home.letsBeTheBest}</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="hero-section-bottom mt-24 lg:mt-0 flex flex-wrap min-h-[402px]">
                <div className="w-full lg:w-[70%] flex flex-wrap gap-[19px]">
                    <div className="w-full lg:w-auto relative">
                        <div className="gradientBubble absolute z-[-1] top-0 left-[-340px] translate-y-[-50%]"></div>
                        <div className=" w-[205px] h-[302px] shape-polygon relative overflow-hidden shape-polygon-item-pic bg-[#EBA9FFCC] flex justify-center items-center">
                            <figure className="w-[90%] h-[90%] relative shape-polygon">
                                <Image src={experiencePicOne} alt="logo" width={1300} height={1300} className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex justify-end lg:justify-start items-end relative">
                        <div className="gradientBubble absolute z-[-1] lg:top-[-45px] lg:right-[-640px] translate-y-[-50%]"></div>
                        <div className="w-[207px] h-[277px] shape-polygon relative overflow-hidden shape-polygon-item-pic bg-[#EBA9FFCC] flex justify-center items-center">
                            <figure className="w-[90%] h-[90%] relative shape-polygon">
                                <Image src={experiencePicTwo} alt="logo" width={1300} height={1300} className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[30%] flex flex-col justify-end gap-[20px] mt-11 lg:mt-0 lg:mb-[27px]">
                    <h2 className="orbitron font-black text-[21px] max-w-[250px] leading-[33px]">{home.newExperience}</h2>
                    <p className="text-xs max-w-[200px]">{home.youCanTry}</p>
                    <button className="gradient-btn rounded w-fit text-[11px] font-bold">{home.getItNowBtn}</button>

                </div>
            </section>

            <section className=" w-[calc(100vw-16px)] lg:w-[482px] left-[50%] lg:left-[unset] translate-x-[-53%] lg:translate-x-[unset] p-[23px] h-[89px] relative overflow-hidden shape-polygon-div shape-polygon-item-div mt-[99px] flex justify-center items-center">
                <div className="flex items-center gap-[46px] relative">
                    <p className="orbitron font-semibold leading-[23px] text-lg max-w-[280px]">{home.awesomeExperience}</p>
                    <figure className="w-[97px] h-[62px] rounded-b-md rounded-tl-md rounded-tr-[19px] overflow-hidden">
                        <Image src={awesomeExperienceLogo} alt="logo" width={1300} height={1300} className="object-cover w-full h-full" />
                    </figure>
                </div>
            </section>
        </>
    );
}

export default HeroSection;