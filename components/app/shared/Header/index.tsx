import { localization } from "@/constant/localizatyion";
import PcNavbar from "../PcNavbar";
import MobileNavbar from "../MobileNavbar";




const HeaderComponent = () => {
    const { navbar, logo } = localization
    return (
        <header className="md:max-w-[900px] md:mx-auto flex justify-between items-center px-4 md:px-[68px] pt-[30px] relative">
            <div className="gradientBubble absolute z-[-1] top-0 left-[7%] translate-y-[-50%]"></div>
            <div>
                <p className="im-fell-great-primer-sc-regular text-lg md:text-[23px]">{logo}</p>
            </div>
            <PcNavbar />
            <MobileNavbar />
        </header>
    );
}

export default HeaderComponent;