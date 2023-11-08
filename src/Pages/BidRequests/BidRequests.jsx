import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
  const [bidRequests, setBidRequests] = useState([]);

  useEffect(() => {
    fetch("https://b8a11-server-side.vercel.app/bidList")
      .then((response) => response.json())
      .then((data) => setBidRequests(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAcceptBid = (bidId) => {
    fetch(`https://b8a11-server-side.vercel.app/bidList/${bidId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "in progress" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/bidRequests";
      })
      .catch((error) => {

        console.error("Error accepting bid:", error);
      });
  };

  const handleRejectBid = (bidId) => {
    fetch(`https://b8a11-server-side.vercel.app/bidList/${bidId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "canceled" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/bidRequests";
      })
      .catch((error) => {
        console.error("Error rejecting bid:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <Helmet>
        <title>JobHunt | BidRequests</title>
      </Helmet>
    <h2 className="text-3xl font-bold mb-4 text-center">Bid Requests</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="border p-2 hidden md:table-cell">Job title</th>
                    <th className="border p-2 hidden md:table-cell">Email</th>
                    <th className="border p-2 hidden md:table-cell">Deadline</th>
                    <th className="border p-2 hidden lg:table-cell">Price</th>
                    <th className="border p-2 text-center">Status</th>
                    <th className="border p-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {bidRequests.map((bid) => (
                    <tr key={bid._id}>
                        <td className="border p-2">{bid.title}</td>
                        <td className="border p-2 hidden md:table-cell">{bid.email}</td>
                        <td className="border p-2 hidden md:table-cell">{bid.deadline}</td>
                        <td className="border p-2 hidden md:table-cell">${bid.price}</td>
                        <td className="border p-2 text-center">{bid.status}</td>
                        <td className="border p-2 text-center">
                            {bid.status === "pending" && (
                                <>
                                    <button
                                        type="button"
                                        className="bg-green-500 text-white py-1 px-4 rounded mr-2 text-center"
                                        onClick={() => handleAcceptBid(bid._id)}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white py-1 px-4 rounded text-center"
                                        onClick={() => handleRejectBid(bid._id)}
                                    >
                                        Reject
                                    </button>
                                </>
                            )}
                            {bid.status === "in progress" && (
                                <div className="text-center">
                                    <progress className="progress w-56"></progress>
                                </div>
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

export default BidRequests;
