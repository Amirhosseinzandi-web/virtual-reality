"use client"

import { localization } from "@/constant/localizatyion";
import { rightToLeftNormal } from "@/utilities/motion";
import { motion } from "framer-motion";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";




const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { navbar } = localization

    return (
        <nav className="block md:hidden">
            {
                isOpen ?
                    <CloseCircle onClick={() => setIsOpen(false)} size="25" color="#ffff" className="cursor-pointer relative z-20" /> :
                    <HambergerMenu onClick={() => setIsOpen(true)} size="25" color="#ffff" className="cursor-pointer" />
            }
            <motion.div
                variants={rightToLeftNormal()}
                initial="hidden"
                animate={isOpen ? "visible" : ""}
                className="mobile-menu w-[100vw] h-[100dvh] fixed z-10 top-0 left-0 flex justify-center items-center backdrop-blur-[9px] select-none"
            >
                <ul className="text-sm text-white flex flex-col items-center gap-10">
                    <li className="cursor-pointer">{navbar.home}</li>
                    <li className="cursor-pointer">{navbar.company}</li>
                    <li className="cursor-pointer">{navbar.features}</li>
                    <li className="cursor-pointer">{navbar.signUp}</li>
                </ul>
            </motion.div>
        </nav>
    );
}

export default MobileNavbar;