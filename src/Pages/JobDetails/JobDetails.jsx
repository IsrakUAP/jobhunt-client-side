import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";


const JobDetails = () => {
    const job = useLoaderData();
    const { minPrice, maxPrice, deadline, title, shortDescription } = job;
    const { user } = useContext(AuthContext);

    const [bidAmount, setBidAmount] = useState(minPrice);

    const handleBidAmountChange = (event) => {
        const value = parseFloat(event.target.value);
        if (value >= minPrice && value <= maxPrice) {
            setBidAmount(value);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
            <p className="text-gray-700 mb-4 text-center">{shortDescription}</p>
            <form className="bg-white border rounded-lg p-8 shadow-lg w-80">
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Price Range (your bidding amount):</label>
                    <input type="number" className="form-input mt-1 block w-full"
                        value={bidAmount}
                        onChange={handleBidAmountChange}
                        min={minPrice} max={maxPrice} />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Deadline:</label>
                    <input type="text" className="form-input mt-1 block w-full" value={deadline} readOnly />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Your Email:</label>
                    <input type="email" className="form-input mt-1 block w-full" value={user.email} readOnly />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">The job owner Email:</label>
                    <input type="email" className="form-input mt-1 block w-full" value={job.buyerEmail} readOnly />
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded disabled:opacity-50 w-full"
                    disabled={user.email === job.buyerEmail}>
                    Bid on the project
                </button>
            </form>
        </div>
    );
};

export default JobDetails;