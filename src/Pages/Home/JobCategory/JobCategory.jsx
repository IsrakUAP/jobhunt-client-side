import { useEffect } from "react";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div className="container mx-auto my-8 p-8">
             <h1 className="text-3xl font-bold mb-6 text-center">Job Categories</h1>
        <Tabs>
          <TabList className="flex space-x-4">
            <Tab className="text-blue-500 hover:text-blue-700 hover:cursor-pointer">Web Development</Tab>
            <Tab className="text-blue-500 hover:text-blue-700 hover:cursor-pointer">Digital Marketing</Tab>
            <Tab className="text-blue-500 hover:text-blue-700 hover:cursor-pointer">Graphics Design</Tab>
          </TabList>
  
          <div className="border-t border-gray-300 mt-4"></div>
  
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {jobs
              .filter((job) => job.category === "web development")
              .slice(0, 4)
              .map((job) => (
                <div key={job.id} className="bg-white rounded shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-2">{job.deadline}</p>
                  <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
                  <p className="text-gray-700 mb-2">{job.shortDescription}</p>
                  <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                    Bid Now
                  </button>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {jobs
              .filter((job) => job.category === "digital marketing")
              .slice(0, 4)
              .map((job) => (
                <div key={job.id} className="bg-white rounded shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-2">{job.deadline}</p>
                  <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
                  <p className="text-gray-700 mb-2">{job.shortDescription}</p>
                  <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                    Bid Now
                  </button>
                </div>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {jobs
              .filter((job) => job.category === "graphics design")
              .slice(0, 4)
              .map((job) => (
                <div key={job.id} className="bg-white rounded shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-2">{job.deadline}</p>
                  <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
                  <p className="text-gray-700 mb-2">{job.shortDescription}</p>
                  <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
                    Bid Now
                  </button>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default JobCategory;