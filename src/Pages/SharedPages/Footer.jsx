
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 md:py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
                <img src="https://i.ibb.co/V24V2tB/314948-removebg-preview.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 mr-2" />
                <h1 className="text-xl font-bold">JobHunt</h1>
            </div>
            <div className="flex flex-wrap space-x-4 md:space-x-12 mb-4 md:mb-0">
                <a href="#contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                    Contact Us
                </a>
                <a href="#about" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                    About Us
                </a>
                <a href="#services" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                    Services
                </a>
                <a href="#why-choose-us" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                    Why Choose Us
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="mailto:info@jobhunt.com" className="text-gray-300 hover:text-white">
                    info@jobhunt.com
                </a>
                <div className="flex space-x-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                        alt="Facebook Icon"
                        className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-300 hover:text-white transition duration-300 ease-in-out"
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                        alt="Twitter Icon"
                        className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-300 hover:text-white transition duration-300 ease-in-out"
                    />
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                        alt="LinkedIn Icon"
                        className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-300 hover:text-white transition duration-300 ease-in-out"
                    />
                </div>
            </div>
        </div>
        <div className="text-center mt-6">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} JobHunt. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;
