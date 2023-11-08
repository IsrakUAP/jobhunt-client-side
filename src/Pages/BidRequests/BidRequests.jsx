import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const BidRequests = () => {
  const [bidRequests, setBidRequests] = useState([]);

  useEffect(() => {
    fetch("https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/bidList")
      .then((response) => response.json())
      .then((data) => setBidRequests(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAcceptBid = (bidId) => {
    fetch(`https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/bidList/${bidId}`, {
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
    fetch(`https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/bidList/${bidId}`, {
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
    <h2 className="text-3xl font-bold mb-4">Bid Requests</h2>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Job title</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Deadline</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bidRequests.map((bid) => (
          <tr key={bid._id}>
            <td className="border p-2">{bid.title}</td>
            <td className="border p-2">{bid.email}</td>
            <td className="border p-2">{bid.deadline}</td>
            <td className="border p-2">${bid.price}</td>
            <td className="border p-2 text-center">{bid.status}</td>
            <td className="border p-2">
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
              {bid.status === "in progress" && <div className=" text-center"><ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      > 
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      
      
      </ProgressBar>
      
      
      </div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default BidRequests;
