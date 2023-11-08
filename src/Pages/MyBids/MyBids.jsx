
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";

const MyBids = () => {
    const [bids, setBids] = useState([]);
    const [completedBids, setCompletedBids] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/bidList') 
            .then(res => res.json())
            .then(data => {
                setBids(data);
                const userBids = data.filter(bid => bid.email === user.email);
                setBids(userBids);
            });
    }, [user.email]);

    const handleCompleteBid = (bidId) => {
      console.log(bidId);
      setCompletedBids(prevCompletedBids => [...prevCompletedBids, bidId]);
    };


    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center">My Bids</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">Job title</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Deadline</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => (
                        <tr key={bid._id}>
                            <td className="border p-2">{bid.title}</td>
                            <td className="border p-2">{bid.email}</td>
                            <td className="border p-2">{bid.deadline}</td>
                            <td className="border p-2 text-center">{bid.status}</td>
                            <td className="border p-2 text-center">
                            {bid.status === "in progress" && !completedBids.includes(bid._id) && (
                                    <button
                                        className="bg-green-500 text-white py-1 px-4 rounded"
                                        onClick={() => handleCompleteBid(bid._id)}
                                    >
                                        Complete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyBids;
