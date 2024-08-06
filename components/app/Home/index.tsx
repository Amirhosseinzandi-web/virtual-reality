import CompanyValuesComponent from "./CompanyValues";
import ExploreProductsComponent from "./ExpolreProducts";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import Testimonials from "./Testimonials";





const HomePage = () => {
    return (
        <>
            <main className="md:max-w-[900px] md:mx-auto px-4 md:px-[68px] overflow-y-clip">
                <HeroSection />
                <ProductShowcase/>
                <Testimonials/>
                <CompanyValuesComponent/>
                <ExploreProductsComponent/>
            </main>
            
        </>
    );
}

export default HomePage;