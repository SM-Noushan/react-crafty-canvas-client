import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { ThemeContext } from "../../layouts/Root";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, setAuthLoading, updateProfileInfo } = useAuth();
  const { theme } = React.useContext(ThemeContext);
  const [editProfile, setEditProfile] = React.useState(false);
  const [updated, setUpdated] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const handleOnSubmit = (data) => {
    const { name, photoURL } = data;
    console.log(data);
    updateProfileInfo(name, photoURL)
      .then(() => {
        setUpdated(true);
        toast.success("Successfully updated");
        setAuthLoading(false);
      })
      .catch(() => {
        setAuthLoading(false);
        toast.error("Failed!, please try again.");
      });
  };
  return (
    <section className="my-8 flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-52 font-yanone-kaffeesatz">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="card md:w-96 bg-base-100">
        <figure>
          <img
            src={
              user?.photoURL ||
              "https://th.bing.com/th/id/OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt?rs=1&pid=ImgDetMain"
            }
            alt="profile-picture"
            className="size-64 rounded-full"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            Name: {user?.displayName || "Unknown"}
          </h2>
          <h2 className="font-medium">Email: {user?.email || "Unknown"}</h2>
          {updated && (
            <button
              onClick={() => setUpdated(false)}
              className="mx-auto badge badge-outline badge-info cursor-crosshair"
            >
              Updated
            </button>
          )}
        </div>
      </div>
      <div className="grid text-center items-center p-8">
        <div className="flex items-center gap-2">
          <p className="text-lg mt-1">Edit</p>
          <input
            onChange={(e) => {
              setEditProfile(e.target.checked);
              setValue("name", `${user?.displayName}`);
              setValue("photoURL", `${user?.photoURL}`);
            }}
            type="checkbox"
            className="toggle toggle-info"
          />
        </div>
        {/* update form */}
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="mx-auto w-[24rem] text-left"
        >
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
              defaultValue={user?.displayName || ""}
              disabled={!editProfile}
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
              defaultValue={user?.photoURL || ""}
              disabled={!editProfile}
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
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
          {/* update button */}
          <div className="form-control mt-6">
            <button
              className="btn btn-neutral lg:text-xl"
              disabled={!editProfile}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
