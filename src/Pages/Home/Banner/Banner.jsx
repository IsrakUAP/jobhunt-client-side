

const Banner = () => {
    return (
        <div
            className="relative h-[100%] w-auto text-black flex justify-center items-center"
            style={{
                backgroundImage: "url('https://static.wixstatic.com/media/fdc839_256581ce11b541b39691e7981edb1f7b~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fdc839_256581ce11b541b39691e7981edb1f7b~mv2.jpg')",
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-75"></div>
            <div className="space-y-3 text-center relative z-10">
                <h1 className="text-3xl font-bold my-4">The Easiest Way to Get Your New Job</h1>
                <p className="text-lg my-4">Find Jobs, Employment & Career Opportunities</p>
                <div className="flex items-center space-x-4 py-10">
                    <input
                        type="text"
                        placeholder="Job title, keywords or company name"
                        className="border rounded-lg border-gray-300 p-4 w-[450px]"
                    />
                    <select className="border border-gray-300 p-4 w-[200px]">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Rajshahi">Rajshahi</option>
                    </select>
                    <button className="bg-white p-2 rounded-full">
                        <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-zik280t3.png" alt="Search" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;