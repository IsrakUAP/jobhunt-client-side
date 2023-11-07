import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const userJob = data.filter(job => job.email === user.email);
        setJobs(userJob);
      });
  }, [user.email]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">My Posted Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
            <p className="text-gray-600 mb-2">
              Category: {job.category}
            </p>
            <p className="text-gray-700 mb-4">{job.shortDescription}</p>   
            <div className="flex justify-between items-center">
              <p className="text-green-500 font-semibold">
                ${job.minPrice} - ${job.maxPrice}
              </p>
              <div className="flex space-x-4">
                <button
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
