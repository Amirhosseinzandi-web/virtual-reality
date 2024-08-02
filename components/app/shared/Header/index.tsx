import { localization } from "@/styles/constant/localizatyion";
import PcNavbar from "../PcNavbar";
import MobileNavbar from "../MobileNavbar";




const HeaderComponent = () => {
    const { navbar, logo } = localization
    return (
        <header className="lg:max-w-[1536px] lg:mx-auto flex justify-between items-center px-4 lg:px-[68px] pt-[30px] relative">
            <div className="gradientBubble absolute z-[-1] top-0 left-[7%] translate-y-[-50%]"></div>
            <div>
                <p className="im-fell-great-primer-sc-regular text-lg lg:text-[23px]">{logo}</p>
            </div>
            <PcNavbar />
            <MobileNavbar />
        </header>
    );
}

export default HeaderComponent;