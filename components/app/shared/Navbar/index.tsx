import { localization } from "@/styles/constant/localizatyion";




const NavBar = () => {
    const { navbar, logo } = localization
    return (
        <header className="lg:max-w-[1536px] lg:mx-auto flex justify-between px-[68px] pt-[30px]">
            <div>
                <p className="im-fell-great-primer-sc-regular text-[23px]">{logo}</p>
            </div>
            <nav className="flex justify-between">
                <ul className="flex font-bold gap-[35px] items-center text-xs">
                    <li>{navbar.home}</li>
                    <li>{navbar.company}</li>
                    <li>{navbar.features}</li>
                    <li className="gradient-btn rounded">{navbar.signUp}</li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;