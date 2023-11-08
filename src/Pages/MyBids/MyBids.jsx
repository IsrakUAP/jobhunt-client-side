
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";

const MyBids = () => {
    const [bids, setBids] = useState([]);
    const [completedBids, setCompletedBids] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://b8a11-server-side.vercel.app/bidList') 
            .then(res => res.json())
            .then(data => {
                setBids(data);
                const userBids = data.filter(bid => bid.email === user.email);
                setBids(userBids);
            });
    }, [user.email]);

    const handleCompleteBid = (bidId) => {
      

        fetch(`https://b8a11-server-side.vercel.app/bidList/${bidId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'complete' }),
        })
            .then(res => res.json())
            .then(updatedBid => {
                const updatedBids = bids.map(bid => (bid._id === bidId ? updatedBid : bid));
                setBids(updatedBids);
                window.location.href = "/myBids";
            })
            .catch(error => {
                console.error('Error updating bid status:', error);
            });

        setCompletedBids(prevCompletedBids => [...prevCompletedBids, bidId]);
    };


    const handleSortByStatus = () => {
        const sortedBids = [...bids].sort((a, b) => {
            if (sortAscending) {
                return a.status.localeCompare(b.status);
            } else {
                return b.status.localeCompare(a.status);
            }
        });
        setBids(sortedBids);
        setSortAscending(!sortAscending);
    };


    return (
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">My Bids</h2>
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full md:w-auto"
            onClick={handleSortByStatus}
        >
            Sort by Status
        </button>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">Job title</th>
                        <th className="border p-2 hidden md:table-cell">Email</th>
                        <th className="border p-2 hidden md:table-cell">Deadline</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2 text-center">Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => (
                        <tr key={bid._id}>
                            <td className="border p-2">{bid.title}</td>
                            <td className="border p-2 hidden md:table-cell">{bid.email}</td>
                            <td className="border p-2 hidden md:table-cell">{bid.deadline}</td>
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
    </div>
    );
};

export default MyBids;
