

const AboutUs = () => {
    return (
        <div className="container mx-auto flex p-8">
        <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
            
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-700 transition duration-300 ease-in-out"
                >
                    Submit
                </button>
            </form>
        </div>

        <div className="w-1/2 pl-8 border-l border-gray-300">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
                JobHunt is your trusted partner in finding the perfect job opportunity. We connect top talents with
                leading companies, ensuring a seamless and efficient job search experience. Our dedicated team works
                tirelessly to match your skills and aspirations with the right career path. Choose JobHunt and embark
                on your journey to a successful and fulfilling career.
            </p>
        </div>
    </div>
    );
};

export default AboutUs;