import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";
import swal from "sweetalert";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import axios from "axios";
const auth = getAuth(app);


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                const user = {};

                swal("Good job!", "successful login By Google", "success");
                axios.post('https://b8a11-server-side.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state? location.state : '/')
                        }
                    })

            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!emailCheck.test(email)) {
            setLoginError("Invalid email format");
            return;
        }
        if (!passwordCheck.test(password)) {
            setLoginError("Invalid password format");
            return;
        }
        setLoginError("");
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                const user = { email };
                swal("Good job!", "successful login", "success");

                axios.post('https://b8a11-server-side.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state? location.state : '/')
                        }
                    })

            })
            .catch(error => {
                console.log(error);

                setLoginError("The email or password you entered is incorrect.");

            });
    }
    return (
        <div className="flex items-center justify-center bg-gradient-to-b py-3 from-white to-gray-100">
            <div className="bg-white p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Please Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input type="email" placeholder="Enter your email" name="email"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <input type="password" placeholder="Enter your password" name="password"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300" required />
                    </div>
                    {loginError && (
                            <p className="text-red-500 mt-2">{loginError}</p>
                        )}
                    <div className="text-center">
                        <button type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring focus:ring-purple-300">
                            Login
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handGoogleLogin} className="btn  bg-purple-500"><img className="h-[30px]" src="https://i.ibb.co/zSC5sQX/7611770-1.png" alt="" /> Google login</button>
                    </div>
                </form>
                <p className="text-center lg:text-center">Create new accout  <Link className=" text-xl font-semibold text-teal-500" to='/registration'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;