import Banner from '@/components/components/home/Banner';
import Benefits from '@/components/components/home/Benefits';
import Categories from '@/components/components/home/Categories';
import FeaturedProducts from '@/components/components/home/FeaturedProducts';
import Showcases from '@/components/components/home/MosaicViewImage';
 

const Home = () => {
    return (
        <>
            <Banner/>
            <Categories/>
            <FeaturedProducts/>
            <Benefits/>
            <Showcases/>
        </>
    );
};

export default Home;