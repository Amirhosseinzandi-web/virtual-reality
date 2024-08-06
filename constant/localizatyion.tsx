import headsetLogoOne from "../public/pictures/headset-logo-one.png"
import headsetLogoTwo from "../public/pictures/headset-logo-two.png"
import headsetLogoThree from "../public/pictures/headset-logo-three.png"
import headsetLogoFour from "../public/pictures/headset-logo-four.png"
import personLogoOne from "../public/pictures/person-one.jpg"
import personLogoTwo from "../public/pictures/person-two.png"
import personLogoThree from "../public/pictures/person-three.png"
import companyvalueLogoOne from "../public/pictures/company-value-logo-one.svg"
import companyvalueLogoTwo from "../public/pictures/company-value-logo-two.svg"
import companyvalueLogoThree from "../public/pictures/company-value-logo-three.svg"
import companyvalueLogoFour from "../public/pictures/company-value-logo-four.svg"
import heartLogo from "../public/pictures/heart-logo.svg"
import exploreProductArrowLogo from "../public/pictures/explore-product-arrow-logo.svg"
import exploreProductStartLogo from "../public/pictures/explore-product-start-logo.svg"
import twoHandLogo from "../public/pictures/two-hand-logo.svg"


export const localization = {
    navbar: {
        home: "Home",
        company: "Company",
        features: "Features",
        signUp: "Sign Up"
    },
    logo: "Light"
}




export const pageLevelLocalization = {
    home: {
        letsExplore: "Let’s Explore Three-Dimensional visual",
        virtualTechnology: "With virtual technology you can see the digital world feel more real and you can play the game with a new style.",
        getItNowBtn: "Get it Now",
        exploreDevice: "Explore Device",
        peopleOnline: "400k people online",
        cinematicVirtual: "Cinematic Virtual Reality",
        letsBeTheBest: "Let’s be the best for more real and effective results and ready to explore the limitless world that we have prepared for you.",
        newExperience: "New Experience In Playing Game",
        youCanTry: "You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.",
        awesomeExperience: "Awesome experiences with virtual reality world",
        mixedRealityHeadsets: {
            title: "Mixed Reality Headsets",
            picturesData: [
                {
                    src: headsetLogoOne,
                    alt: "logo",
                    title: "Metaverse",
                    caption: "A Network of 3D virtual worlds focused on social connection. "
                },
                {
                    src: headsetLogoTwo,
                    alt: "logo",
                    title: "AIoT",
                    caption: "AI and IoT are both emerging innovative technologies with a lot of potentials. "
                },
                {
                    src: headsetLogoThree,
                    alt: "logo",
                    title: "HoloLens",
                    caption: "HoloLens display information, blend with the real world , or even simulate a virtual world."
                },
                {
                    src: headsetLogoFour,
                    alt: "logo",
                    title: "TPCASTT",
                    caption: "Method is great to start students reading and inferring with little assistance from the instructor"
                }
            ]
        },
        whatOurClients: {
            title: "What our clients say",
            caption: "See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.",
            smallBoxes: [
                {
                    title: "starstarstar",
                    caption: "“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”",
                    src: personLogoOne,
                    alt: "Denny Hilguston",
                    name: "Denny Hilguston",
                    username: "@denny.hill"
                },
                {
                    title: "starstarstar",
                    caption: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
                    src: personLogoTwo,
                    alt: "Vani Pandey",
                    name: "Vani Pandey",
                    username: "@vani.pandey"
                },
                {
                    title: "starstarstar",
                    caption: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
                    src: personLogoThree,
                    alt: "milly Singh",
                    name: "milly Singh",
                    username: "@milly.singh"
                }
            ]
        },
        companyValue: {
            title: "Our company values culture",
            caption: "We specialize in creating visual identities for products and branda in your company.",
            heartLogo: heartLogo,
            logos: [
                {
                    src: companyvalueLogoOne,
                    title: "Be Sincere",
                    alt: "logo"
                },
                {
                    src: companyvalueLogoTwo,
                    title: "Stronger together",
                    alt: "logo"
                }, {
                    src: companyvalueLogoThree,
                    title: "Keep it simple",
                    alt: "logo"
                },
                {
                    src: companyvalueLogoFour,
                    title: "Take intelligent risks",
                    alt: "logo"
                }
            ]
        },
        exploreProducts: {
            title: "Explore product in new way",
            caption: "We specialize in creating visual identities for products and branda in your company.",
            startBtn: "Start",
            arrowLogo: exploreProductArrowLogo,
            startLogo: exploreProductStartLogo ,
            twoHandLogo : twoHandLogo
        }
    }
}