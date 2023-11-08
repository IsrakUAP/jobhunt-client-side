import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import { getAuth } from "firebase/auth";


const Navbar = () => {
    const {user,logOut,createUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setDisplayName(currentUser.displayName);
            setPhotoURL(currentUser.photoURL);
        }
    }, [user,createUser]);


    const handleSignOut = () =>{
        logOut()

    }
    return (
        <div>
        <nav className="p-4 flex flex-wrap items-center justify-between">
            <div className="nav-start flex items-center space-x-2 mb-2 w-full md:w-auto">
                <NavLink to="/" className="text-black font-bold text-lg flex items-center space-x-2" activeClassName="font-extrabold">
                    <img src="https://i.ibb.co/V24V2tB/314948-removebg-preview.png" alt="Logo" className="w-10 h-10" />
                    <span>JobHunt</span>
                </NavLink>
            </div>

            <div className="nav-middle space-x-4 flex flex-wrap justify-center w-full md:w-auto">
            <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-gray-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>Home</NavLink>
                    <NavLink to="/addJob" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-gray-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>Add Job</NavLink>
                    <NavLink to="/myPostedJobs" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-gray-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>My Posted Jobs</NavLink>
                    <NavLink to="/myBids" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-gray-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>My Bids</NavLink>
                    <NavLink to="/bidRequests" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-gray-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>Bid Requests</NavLink>
            </div>

            <div className="nav-end space-x-4 flex items-center w-full md:w-auto">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <img className="rounded-full h-8 w-8" src={photoURL} alt="User" />
                        <p className="text-gray-700">{displayName}</p>
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </div>
                ) : (
                    <Link to="/login" className="text-black hover:text-gray-300" activeClassName="font-bold">
                        <button className="btn">Login</button>
                    </Link>
                )}
            </div>
        </nav>
    </div>
    );
};

export default Navbar;