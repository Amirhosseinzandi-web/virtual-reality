"use client"

import { CloseCircle, HambergerMenu } from "iconsax-react";
import { motion } from "framer-motion"
import { useState } from "react";
import { localization } from "@/styles/constant/localizatyion";




const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { navbar } = localization

    const mobileMenuVariant = () => {
        return {
            hidden: {
                opacity: 0,
                x: "100vw"
            },
            visible: {
                opacity: 1,
                x: 0
            }
        }
    }


    return (
        <nav className="block lg:hidden">
            {
                isOpen ?
                    <CloseCircle onClick={() => setIsOpen(false)} size="25" color="#ffff" className="cursor-pointer relative z-20" /> :
                    <HambergerMenu onClick={() => setIsOpen(true)} size="25" color="#ffff" className="cursor-pointer" />
            }
            <motion.div
                variants={mobileMenuVariant()}
                initial="hidden"
                animate={isOpen ? "visible" : ""}
                className="mobile-menu w-full h-[100dvh] fixed z-10 top-0 left-0 flex justify-center items-center backdrop-blur-[9px] select-none"
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