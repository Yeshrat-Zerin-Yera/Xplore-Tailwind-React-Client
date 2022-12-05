import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, signInProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // Handle Submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
                console.error(error);
            })
    };

    // Handle Google Login
    const handleGoogleLogin = () => {
        signInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    // Handle Github Login
    const handleGithubLogin = () => {
        signInProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        console.log(profile);
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold">Please Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login.</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className=" text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-circle btn-primary mr-2">
                                <FaGoogle className="h-6 w-6" />
                            </button>
                            <button onClick={handleGithubLogin} className="btn btn-circle ml-2">
                                <FaGithub className="h-6 w-6" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;