import React, { useState } from "react";

const FeaturedJobsComponent = () => {
    const featuredJobs = [
        { id: 1, title: "Frontend Developer", company: "TechCo", location: "Dhaka", category: "Web Development", details: "We are looking for a skilled Frontend Developer with experience in React.js and CSS to join our team.", },
        { id: 2, title: "UX Designer", company: "DesignHub", location: "Chittagong", category: "UI/UX Design", details: "Design intuitive and engaging user experiences for our web and mobile applications.", },
        { id: 3, title: "Digital Marketing Specialist", company: "Sylhet", location: "Chicago", category: "Digital Marketing", details: "Create and execute digital marketing campaigns to increase brand awareness and drive conversions.", },
        { id: 4, title: "Graphic Designer", company: "CreativeMinds", location: "Barishal", category: "Graphic Design", details: "Develop creative and visually appealing designs for print and digital media.", },
        { id: 5, title: "Software Engineer", company: "CodeCrafters", location: "Rajshahi", category: "Software Development", details: "Collaborate with cross-functional teams to develop high-quality software solutions.", },
        { id: 6, title: "Data Analyst", company: "DataDive", location: "Dhaka", category: "Data Science", details: "Analyze large datasets to extract valuable insights and support data-driven decision-making.", },
        { id: 7, title: "UX Researcher", company: "UserInsight", location: "Chittagong", category: "UI/UX Design", details: "Conduct user research studies to understand user behavior and preferences.", },
        { id: 8, title: "Content Writer", company: "ContentCraft", location: "Rajshahi", category: "Content Creation", details: "Create compelling and engaging content for websites, blogs, and social media platforms.", },
    ];

    const [currentJobIndex, setCurrentJobIndex] = useState(0);

    const handlePaginationClick = (index) => {
        setCurrentJobIndex(index);
    };

    return (
        <div className="featured-jobs-container bg-white p-6 rounded-lg shadow-md my-4 relative text-center">
            <h3 className="text-2xl font-bold mb-4">Featured Jobs</h3>
            {featuredJobs.map((job, index) => (
                <div
                    key={job.id}
                    className={`mb-4 p-4 border border-gray-200 rounded-lg shadow-sm ${index === currentJobIndex ? '' : 'hidden'}`}
                >
                    <h4 className="text-xl font-semibold mb-2 text-blue-600">{job.title}</h4>
                    <p className="text-gray-600 mb-2">{job.company} - {job.location}</p>
                    <p className="text-blue-500 mb-2">Category: {job.category}</p>
                    <p className="text-gray-800">{job.details}</p>
                </div>
            ))}

            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-2">
                {featuredJobs.map((job, index) => (
                    <button
                        key={job.id}
                        className={`btn btn-xs ${index === currentJobIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'}`}
                        onClick={() => handlePaginationClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobsComponent;
