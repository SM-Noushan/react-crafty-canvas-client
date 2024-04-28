import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Spinner from "../../components/shared/Spinner";
import { ThemeContext } from "../../layouts/Root";
const catchError = (error) => {
  const errorCode = error.code;
  if (errorCode == "auth/email-already-in-use")
    return toast.error("Account already exists.");
  return toast.error("Something unexpected happened, please try again.");
};

const Register = () => {
  const { user, authLoading, setAuthLoading, createUser, updateProfileInfo } =
    useAuth();
  const { theme } = useContext(ThemeContext);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleOnSubmit = (data) => {
    const { name, email, photoURL, password } = data;
    createUser(email, password)
      .then(() => {
        reset();
        toast.success("Registered successfully.");
        updateProfileInfo(name, photoURL)
          .then(() => {
            setAuthLoading(false);
            navigate("/profile");
          })
          .catch(() => {
            setAuthLoading(false);
            toast.warn("Failed to create profile, please try again.");
          });
      })
      .catch((error) => {
        setAuthLoading(false);
        catchError(error);
      });
  };
  if (authLoading) return <Spinner />;
  if (user) return <Navigate to="/" />;
  return (
    <div className="hero-content flex-col lg:flex-row w-full text-neutral-content gap-12 py-16">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6 max-w-52">
          Welcome to our community! 🌟Join us today and unlock exclusive
          features:
        </p>
      </div>
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 opacity-75">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Name</span>
            </label>
            <input
              autoComplete="name"
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("name", {
                required: true,
                pattern: /(^[a-zA-Z]{2,20}[a-zA-Z\s]{0,20}[a-zA-Z]{0,20}$)/,
              })}
            />
            {errors?.name && (
              <p className="mt-2 flex items-center gap-1 font-normal text-error">
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
                Required | Enter a valid name
              </p>
            )}
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Email</span>
            </label>
            <input
              autoComplete="email"
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors?.email && (
              <p className="mt-2 flex items-center gap-1 font-normal text-error">
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
                Required | Enter a valid email
              </p>
            )}
          </div>

          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Photo URL</span>
            </label>
            <input
              autoComplete="photo-url"
              name="photoURL"
              id="photoURL"
              type="text"
              placeholder="Enter your photoURL"
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
              {...register("photoURL", {
                required: true,
                pattern:
                  /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?%_+,]*)*$/i,
              })}
            />
            {errors?.photoURL && (
              <p className="mt-2 flex items-center gap-1 font-normal text-error">
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
                Required | Enter a valid URL
              </p>
            )}
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
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 6,
                  message: "Minimum password length is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum password length is 20",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message: "Requires at least one lowercase and uppercase",
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
            {errors?.password?.message && (
              <p className="mt-2 flex items-center gap-1 font-normal text-error">
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
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral lg:text-xl">Register</button>
          </div>
          <div className="flex justify-center">
            <p className="label-text lg:text-xl">
              Already have an account?{" "}
              <Link to="/login" className="font-medium link link-hover">
                Login now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
