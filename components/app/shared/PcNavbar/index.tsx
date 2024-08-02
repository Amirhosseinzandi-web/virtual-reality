import { localization } from "@/constant/localizatyion";





const PcNavbar = () => {
    const { navbar } = localization
    return (
        <nav className="hidden md:flex justify-between">
            <ul className="flex font-bold gap-[35px] items-center text-xs">
                <li className="cursor-pointer">{navbar.home}</li>
                <li className="cursor-pointer">{navbar.company}</li>
                <li className="cursor-pointer">{navbar.features}</li>
                <li className="gradient-btn rounded cursor-pointer">{navbar.signUp}</li>
            </ul>
        </nav>
    );
}

export default PcNavbar;