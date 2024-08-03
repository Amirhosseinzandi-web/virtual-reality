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

            <p className="my-36">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolores reiciendis! Maiores animi distinctio quo dignissimos suscipit sunt molestiae nam dolores magni? Fuga doloremque officia laboriosam dolorum mollitia quis! Quod magnam quo repellat quaerat vitae doloremque aspernatur officia cum eos dignissimos repellendus impedit minima sed, corporis minus tempora reiciendis provident pariatur! Itaque sunt, ratione fuga, consequatur dignissimos, quidem dolor commodi vero praesentium blanditiis neque. Ad mollitia eveniet iure unde enim, placeat consectetur totam nihil laudantium iste tenetur eos eligendi natus exercitationem doloremque quasi soluta repellendus aliquid eaque. Nisi unde quis dolores id exercitationem, fugit dolore earum ullam corporis non minima nam aperiam quos explicabo? Ipsam inventore quam odit fugiat eaque quo nihil nisi possimus laboriosam minus, natus autem reiciendis nostrum laudantium, molestias asperiores. Sit repellendus incidunt aut! Obcaecati blanditiis, doloribus perferendis reiciendis aut minima voluptas enim corporis, maiores natus deleniti eveniet tempore dignissimos, reprehenderit consequatur atque quo veniam? Ipsam laudantium assumenda repellat, quidem ut temporibus tenetur! Voluptas, labore. Alias, modi at. Itaque ipsum neque earum beatae at asperiores excepturi consequuntur? Cum rerum culpa ullam nam omnis corrupti saepe ipsam odit voluptates impedit similique aspernatur blanditiis quas dignissimos atque repellat quod recusandae, sit deserunt accusamus, delectus eum. Possimus consequuntur delectus rem dolores cupiditate nam natus nesciunt aliquam enim maxime deserunt suscipit distinctio, voluptates iure magnam hic dignissimos. Non omnis, impedit veritatis illum quis rem nam esse rerum atque praesentium itaque? Similique quam, itaque ea doloribus reiciendis at praesentium quaerat totam? Ratione totam similique voluptates quas ea dolores eum dignissimos harum error! Incidunt repudiandae, esse nostrum asperiores atque ullam eum! Tempora officia eligendi incidunt possimus odio facilis. Doloremque labore porro eum quae, doloribus suscipit facere odit corporis ullam velit aliquid odio quo assumenda, sapiente rem asperiores animi nam beatae expedita error, ad dolorum accusamus! Iusto quisquam beatae et numquam voluptate suscipit aspernatur perspiciatis adipisci! Facere ipsa provident illo sit sed deleniti consectetur! Quam repellat ab temporibus numquam quia? Recusandae, consectetur tempora officiis reprehenderit doloremque optio laborum. Hic laboriosam iste consectetur amet, reprehenderit est dolorum adipisci exercitationem perspiciatis. Aut eaque, quo repudiandae quisquam amet assumenda optio alias consectetur? Nostrum odio accusamus dolorem eaque rerum? Reiciendis, vero commodi optio obcaecati voluptas fugit alias vel maxime, eveniet minima facilis dolores ab corrupti? Quaerat assumenda natus optio facilis molestiae debitis enim beatae, ea molestias aliquid eligendi iure voluptatibus atque voluptatum, sunt cumque ipsa commodi incidunt, rerum deleniti. Aliquam eveniet quis rem temporibus? Provident est ad consequatur consectetur ducimus ab ea deleniti, soluta rerum vero consequuntur nostrum ipsum aliquid dolorem quas delectus dignissimos natus. Eum quo rerum quidem dolor sint, voluptatum eos! Perspiciatis facilis esse possimus explicabo autem, doloribus nulla sapiente pariatur modi error magni, quam maiores odit eum alias nemo. Voluptatibus recusandae neque corporis consectetur nemo quos amet. Molestias rem magnam magni maiores illum quis blanditiis eum? Accusantium eveniet at quasi fugiat facere placeat nam praesentium labore ullam reiciendis! Saepe, eos in sequi ullam nostrum repudiandae quidem molestiae enim iusto velit veniam reprehenderit voluptates eligendi distinctio optio? Autem sint velit facere itaque eaque debitis aliquam perspiciatis voluptatem sunt! Quasi blanditiis deserunt ipsa cumque voluptas qui assumenda repellat id iusto? Culpa repellendus reiciendis nemo quos quae et neque, tempora dignissimos, blanditiis dolor praesentium possimus dolorem impedit veniam voluptatum esse assumenda sit ducimus? Vel rerum unde, voluptatum accusamus nesciunt ex dolorem quis quod, doloribus asperiores eveniet libero nemo, laudantium impedit suscipit magnam blanditiis tempore dicta voluptates enim possimus beatae quaerat! Veritatis dolor fuga natus fugiat praesentium culpa numquam rerum voluptatum molestiae eveniet consequuntur eaque explicabo ipsa vel assumenda facilis, possimus fugit reiciendis veniam. Ratione quaerat, porro, ducimus perferendis provident ipsum perspiciatis unde expedita tempore eum facilis sit aliquid accusamus fugiat nam. Fugiat facilis illum blanditiis porro est tenetur odio quam voluptatem provident quo iste ea fugit similique delectus, tempora at corporis assumenda a asperiores vel exercitationem aut vero. Esse asperiores deserunt sit minima quo dolores tempora mollitia beatae error at non, neque inventore repellat quae laudantium reprehenderit autem molestiae maiores vel, necessitatibus blanditiis consequuntur corrupti magnam. Reiciendis voluptatum dolorum, soluta nobis laudantium porro expedita quis qui, fugiat accusamus molestiae earum eum ipsa voluptas nisi numquam aut nihil est itaque sunt corrupti? Delectus culpa sed quasi distinctio suscipit voluptas facere voluptatem! Iusto itaque architecto cum non aut nemo minus dignissimos ea quisquam fugit at, eveniet officiis voluptatem enim possimus voluptas placeat inventore officia natus ex aliquam saepe est. At excepturi eveniet quos ipsam praesentium modi neque, nesciunt iure fuga dolorum beatae nemo, cupiditate facilis placeat consectetur consequuntur nulla qui culpa pariatur velit, voluptatum perferendis amet enim? Quasi sint quae rerum non voluptatem eius delectus consectetur facilis natus fugiat dolore fuga molestiae rem facere aliquid nobis, atque similique obcaecati! Facere cumque ab magni, obcaecati aspernatur officiis tenetur, ex corrupti, iusto quo aut! Quia numquam labore amet quasi ad aut tempora molestias officia soluta quis, aperiam repellat laboriosam voluptas expedita nihil nam reiciendis delectus voluptatum aspernatur at libero. Animi aspernatur odio debitis iste culpa necessitatibus illum dicta quisquam impedit tenetur magnam a modi inventore voluptatem excepturi expedita dignissimos quaerat eligendi corporis maiores neque, temporibus porro maxime et. Enim tempora sint sit corporis. Adipisci, commodi? Doloremque ducimus, dignissimos praesentium, esse reprehenderit, sint repellendus tenetur ex dolores natus eius consectetur? Debitis, mollitia. Corrupti, quisquam. Modi corporis veniam perferendis fugit. At saepe tenetur fugit quam earum sint dolorum omnis odio laborum facilis? Ipsam, reprehenderit! Sequi temporibus commodi incidunt accusantium vel dolore adipisci, aperiam molestias minus porro quisquam, minima iusto. Quas itaque id delectus quo aliquid consequatur atque, est illo perferendis non voluptates! Nulla aspernatur minima harum expedita. Accusamus, quos? Laudantium fugit, ut, repellendus amet assumenda iusto facere explicabo perferendis blanditiis officiis corrupti qui ab nihil adipisci, aliquid aut. Ducimus, aliquid vero? Rerum, ex dignissimos! Recusandae culpa iste expedita ipsam ipsum sequi, fugit ea natus mollitia at? Rem praesentium quod modi quam exercitationem perspiciatis asperiores maxime minus laboriosam porro ut natus inventore consequatur distinctio aut saepe atque veritatis, quis excepturi, sint dolore, consectetur quidem commodi. Delectus doloribus expedita perspiciatis, soluta praesentium blanditiis fugit voluptas similique dicta neque necessitatibus omnis voluptatibus quaerat magni corrupti aut excepturi.
            </p>
        </>
    );
}

export default HeroSection;