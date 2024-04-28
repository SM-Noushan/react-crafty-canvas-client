import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const {
    createUserWithGoogle,
    createUserWithFacebook,
    logIn,
    user,
    authLoading,
    setAuthLoading,
  } = useAuth();
  const [credentialError, setCredentialError] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password)
      .then(() => {
        setCredentialError(false);
        toast.success("Login successful");
        if (location.state) console.log(location?.state);
        navigate(location.state ? location.state : "/profile");
      })
      .catch(() => {
        setAuthLoading(false);
        setCredentialError(true);
        toast.error("Something went wrong!");
      });
  };
  const handleSignUp = (provider) => {
    provider()
      .then(() => {
        toast.success("Login successful");
        setCredentialError(false);
        navigate(location?.state ? location.state : "/profile");
      })
      .catch(() => {
        setAuthLoading(false);
        toast.error("Something went wrong!");
      });
  };
  if (authLoading) return <Spinner />;
  if (user)
    return <Navigate to={location.state ? location.state : "/profile"} />;
  return (
    <div className="hero-content flex-col lg:flex-row w-full text-neutral-content gap-12 py-16">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6 max-w-52">
          Welcome to our community! Login now and unlock exclusive features!
        </p>
      </div>
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 opacity-75">
        <div className="mx-auto w-full max-w-md p-4 rounded-md sm:p-8 border-b-0 !pb-0">
          <div className="my-6 space-y-4">
            <button
              onClick={() => handleSignUp(createUserWithGoogle)}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-accent-content hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button
              onClick={() => handleSignUp(createUserWithFacebook)}
              aria-label="Login with Facebook"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-accent-content hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
              <p>Login with Facebook</p>
            </button>
          </div>
          {/* divider */}
          <div className="flex items-center w-full my-4">
            <hr className="w-full border-neutral" />
            <p className="px-3">OR</p>
            <hr className="w-full border-neutral" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="card-body pt-0"
        >
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Email</span>label-text lg:text-xl
            </label>
            <input
              autoComplete="email"
              name="email"
              id="email"
              type="text"
              placeholder="Enter your email"
              className="input input-bordered text-gray-950 text-lg"
              {...register("email", {
                required: {
                  value: true,
                  message: "required",
                },
                // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
          </div>

          {/* password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text lg:text-xl">Password</span>
            </label>
            <input
              autoComplete="password"
              name="password"
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="******"
              className="input input-bordered text-gray-950 text-lg"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password required",
                },
                maxLength: {
                  value: 20,
                  message: "Max password length 20",
                },
              })}
            />
            <button
              onClick={togglePasswordVisiblity}
              className="absolute right-4 top-12 lg:top-14"
              type="button"
            >
              {passwordShown ? (
                <FaRegEye className="h-5 w-5" />
              ) : (
                <FaRegEyeSlash className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex justify-center">
            {(Object.entries(errors).length > 0 || credentialError) && (
              <p className="flex items-center gap-1 font-normal text-error text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {((errors?.email?.message || errors?.password?.message) &&
                  !credentialError &&
                  "Email and Password Required") ||
                  (credentialError && "Invalid Credentials")}
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral lg:text-xl">Login</button>
          </div>

          <div className="flex justify-center">
            <p className="label-text lg:text-xl">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-medium link link-hover">
                Register now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
