import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const JobCategory = () => {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },700)
  },[])


    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('https://b8a11-server-side.vercel.app/category')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
      <div>    {
        loading?
        
        (
          <div className="flex items-center justify-center">
            <ClipLoader color="#3498db" loading={loading} size={120} />
          </div>
        ) :
        
        
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
         .map((job) => (
           <div key={job._id} className="bg-white rounded shadow-lg p-6">
             <h2 className="text-xl font-bold mb-2">{job.title}</h2>
             <p className="text-gray-600 mb-2">{job.deadline}</p>
             <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
             <p className="text-gray-700 mb-2">{job.shortDescription}</p>
             <Link to={`/jobDetails/${job._id}`}><button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
               Bid Now
             </button></Link>
           </div>
         ))}
     </div>
   </TabPanel>

   <TabPanel>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
       {jobs
         .filter((job) => job.category === "digital marketing")
         .map((job) => (
           <div key={job._id} className="bg-white rounded shadow-lg p-6">
             <h2 className="text-xl font-bold mb-2">{job.title}</h2>
             <p className="text-gray-600 mb-2">{job.deadline}</p>
             <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
             <p className="text-gray-700 mb-2">{job.shortDescription}</p>
             <Link to={`/jobDetails/${job._id}`}><button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
               Bid Now
             </button></Link>
           </div>
         ))}
     </div>
   </TabPanel>

   <TabPanel>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
       {jobs
         .filter((job) => job.category === "graphics design")
         .map((job) => (
           <div key={job._id} className="bg-white rounded shadow-lg p-6">
             <h2 className="text-xl font-bold mb-2">{job.title}</h2>
             <p className="text-gray-600 mb-2">{job.deadline}</p>
             <p className="text-gray-700 mb-2">{`Price Range: $${job.minPrice} - $${job.maxPrice}`}</p>
             <p className="text-gray-700 mb-2">{job.shortDescription}</p>
             <Link to={`/jobDetails/${job._id}`}><button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
               Bid Now
             </button></Link>
           </div>
         ))}
     </div>
   </TabPanel>
 </Tabs>
</div>
      }
       
    </div>
    );
};

export default JobCategory;