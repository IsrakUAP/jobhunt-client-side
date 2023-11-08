import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import FeaturedJobsComponent from "./FeaturedJobsComponent/FeaturedJobsComponent";
import JobCategory from "./JobCategory/JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobsComponent></FeaturedJobsComponent>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;