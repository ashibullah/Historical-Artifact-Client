import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";



const LoginForm = () => {

    const { emailLogin, googleSignIn, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignInGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                navigate("/")


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                // eslint-disable-next-line no-undef
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(error, errorCode, errorMessage, email, credential)
            })

    }

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        emailLogin(email, password)
            .then(result => {
                console.log(result);
                navigate("/");
            }).catch(err => {
                alert(err);
            })

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-6">
            <div className="w-full max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Apple ID
                        </label>
                        <input
                            type="email"
                            id="email" name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                            placeholder="example@apple.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password" name="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 text-white bg-black rounded-md shadow-sm hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 hover:text-gray-900">
                        Do not have an account? <span className="text-blue-600" ><Link to={"/signup"}>Register</Link></span>
                    </p>
                </div>
            </div>
            <div>
                <div className="lg:flex-row sm:flex-col justify-center  items-center gap-9">
                    <p className="text-2xl text-center">OR</p>
                    <div>
                        <button className="mt-6 w-full flex items-center justify-center py-2 px-4 text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" onClick={handleSignInGoogle}
                        >
                            <FcGoogle className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LoginForm;