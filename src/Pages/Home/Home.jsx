import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import FeaturedJobsComponent from "./FeaturedJobsComponent/FeaturedJobsComponent";
import JobCategory from "./JobCategory/JobCategory";
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{delay: 0.6}}
        >
            <Helmet>
                <title>JobHunt | Home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobsComponent></FeaturedJobsComponent>
            <AboutUs></AboutUs>

        </motion.div>
    );
};

export default Home;