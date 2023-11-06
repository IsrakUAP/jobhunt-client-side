import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import swal from "sweetalert";


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const passwordCheck = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!passwordCheck.test(password)) {
            setPasswordError(
                "The password should be at least 6 letters long and must contain one capital letter and one special character."
            );
        } else {
            setPasswordError("");
        }
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(name, photo, email, password)
        .then(result => {
            console.log(result.user);
            swal("Good job!", "Registration Done!", "success");
        })
        .catch(error =>{
            console.log(error);
            swal("Good job!", "Registration Done!", "success");
        })
    }
    return (
        <div className="flex items-center justify-center bg-gradient-to-b py-3 from-white to-gray-100">
            <div className="bg-white p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Please Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                        <input type="text" placeholder="Enter your name" name="name"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Photo URL</label>
                        <input type="text" placeholder="Photo URL" name="photo"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input type="email" placeholder="Enter your email" name="email"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <input onChange={handlePasswordChange} type="password" placeholder="Enter your password" name="password"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                        {passwordError && (
                            <p className="text-red-500 mt-2">{passwordError}</p>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring focus:ring-purple-300">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center lg:text-center">Have an accout?  <Link className=" text-xl font-semibold text-teal-500" to='/login'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Registration;