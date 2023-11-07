import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../components/AuthProvider";

const UpdateJob = () => {   
    const job = useLoaderData();
    const {_id} = job;
    const {user} = useContext(AuthContext);
    const [jobData, setJobData] = useState({
        email: job.email,
        title: job.title,
        deadline: job.deadline,
        shortDescription: job.shortDescription,
        category: job.category,
        minPrice: job.minPrice,
        maxPrice: job.maxPrice
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const shortDescription = form.shortDescription.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const jobData = { email, title, deadline, shortDescription, category, minPrice, maxPrice };
        console.log(jobData);
        fetch(`http://localhost:5000/category/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount> 0) {
                swal("Good job!", "Job successfully updated", "success")
            } 
        });
    };

    return (
        <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Update Job</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email of the employer:</label>
                    <input
                        type="email"
                        className="form-input w-full rounded border py-2 px-3"
                        name="email"
                        value={user.email}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Job title:</label>
                    <input
                        type="text"
                        className="form-input w-full rounded border py-2 px-3"
                        name="title"
                        value={jobData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Deadline:</label>
                    <input
                        type="date"
                        className="form-input w-full rounded border py-2 px-3"
                        name="deadline"
                        value={jobData.deadline}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description:</label>
                    <textarea
                        className="form-textarea w-full rounded border py-2 px-3"
                        rows="4"
                        name="shortDescription"
                        value={jobData.shortDescription}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category:</label>
                    <select
                        className="form-select w-full rounded border py-2 px-3"
                        name="category"
                        value={jobData.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="web development">Web Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="graphics design">Graphics Design</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Minimum price:</label>
                    <input
                        type="number"
                        className="form-input w-full rounded border py-2 px-3"
                        name="minPrice"
                        value={jobData.minPrice}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Maximum price:</label>
                    <input
                        type="number"
                        className="form-input w-full rounded border py-2 px-3"
                        name="maxPrice"
                        value={jobData.maxPrice}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Update Job
                </button>
            </form>
        </div>
    );
};

export default UpdateJob;
