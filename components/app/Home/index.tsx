import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";





const HomePage = () => {
    return (
        <>
            <main className="md:max-w-[900px] md:mx-auto px-4 md:px-[68px]">
                <HeroSection />
                <ProductShowcase/>
            </main>
            
        </>
    );
}

export default HomePage;