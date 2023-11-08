import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch("https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const userJob = data.filter(job => job.email === user.email);
        setJobs(userJob);
      });
  }, [user.email]);


  const handleDelete = _id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) { 
        fetch(`https://b8a11-server-side-p4bxe5dpv-israk-ullah-khans-projects.vercel.app/category/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
                    icon: "success"
                  });
                  window.location.href = "/myPostedJobs";
            }
        })
        }
      });
  }

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
                <Link to={`/updateJob/${job._id}`}>
                <button
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Update
                </button>
                </Link>
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={()=> handleDelete(job._id)}
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
