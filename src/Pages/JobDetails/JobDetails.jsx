import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import swal from "sweetalert";


const JobDetails = () => {
    const job = useLoaderData();
    const { minPrice, maxPrice, deadline, title, shortDescription,email } = job;
    const { user } = useContext(AuthContext);

    const [bidAmount, setBidAmount] = useState(minPrice);

    const handleBidAmountChange = (event) => {
        const value = parseFloat(event.target.value);
        if (value >= minPrice && value <= maxPrice) {
            setBidAmount(value);
        }
    }
    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const ownerEmail = form.ownerEmail.value;
        const newBid = {title,price,deadline,email,ownerEmail}
        console.log(newBid);
        fetch('http://localhost:5000/bidList',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "successful added your bid on this project", "success");
            }
        })

    }

    return (
        <div className="flex flex-col items-center">

            <p className="text-gray-700 mb-4 text-center">{shortDescription}</p>
            <form onSubmit={handleBid} className="bg-white border rounded-lg p-8 shadow-lg w-80">
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1"></label>
                    <input type="text" name="title" className="form-input mt-1 text-xl font-bold block w-full text-center"
                        value={title}
                        readOnly />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Price Range (your bidding amount):</label>
                    <input type="number" className="form-input hover:cursor-pointer pl-2 hover:bg-slate-100 mt-1 block w-full" name="price"
                        value={bidAmount}
                        onChange={handleBidAmountChange}
                        min={minPrice} max={maxPrice} />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Deadline:</label>
                    <input type="text" name="deadline" className="form-input mt-1 block w-full" value={deadline} readOnly />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">Your Email:</label>
                    <input type="email" name="email" className="form-input mt-1 block w-full" value={user.email} readOnly />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-1">The job owner Email:</label>
                    <input type="email" name="ownerEmail" className="form-input mt-1 block w-full" value={email} readOnly />
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded disabled:opacity-50 w-full"
                    disabled={user.email === email}>
                    Bid on the project
                </button>
            </form>
        </div>
    );
};

export default JobDetails;