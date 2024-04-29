import React from "react";
import useAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../layouts/Root";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import client from "../../utils/axios";
import PropTypes from "prop-types";

const AddCraft = ({ update = false }) => {
  const { user } = useAuth();
  const { theme } = React.useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleOnSubmit = (data) => {
    data.userName = user.displayName || "Unknown";
    data.userEmail = user.email || "Not Found";
    data.userUID = user.uid || "Not Found";

    // send data to server
    client(
      update ? "put" : "post",
      update ? `/painting-and-drawing/${"id"}` : "/painting-and-drawing",
      data
    ).then((res) => {
      if (res?.data?.insertedId || res?.data?.modifiedCount) {
        if (!update) reset();
        toast.success(`Coffee ${update ? "updated" : "added"} successfully`);
      } else toast.error("Something went wrong");
    });
  };
  return (
    <section className="">
      <div className="-z-10 relative">
        <Helmet>
          <title>Add Art And Craft</title>
        </Helmet>
        <img
          src="https://images.unsplash.com/photo-1471666875520-c75081f42081?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background-image"
          className="w-full h-96 object-cover object-center brightness-90"
        />
      </div>
      <div className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz min-h-96 bg-base-300 -mt-16 py-20">
        <h1 className="text-center font-medium text-3xl">
          Item Information: New+
        </h1>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="card-body px-12 md:px-36 lg:px-52"
        >
          {/* image url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Image</span>
            </label>
            <input
              autoComplete="image-url"
              name="imageURL"
              id="imageURL"
              type="url"
              placeholder="Image URL"
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("imageURL", {
                required: true,
                pattern:
                  /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?%_+,]*)*$/i,
              })}
            />
            {errors?.imageURL && (
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

          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Name</span>
            </label>
            <input
              autoComplete="item-name"
              name="itemName"
              id="itemName"
              type="text"
              placeholder="Item name"
              className={
                theme === "light"
                  ? "input input-bordered text-lg text-gray-950"
                  : "input input-bordered text-lg text-white"
              }
              {...register("itemName", {
                required: true,
              })}
            />
            {errors?.itemName && (
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
                Required | Enter item name
              </p>
            )}
          </div>

          {/* sub-category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Sub Category</span>
            </label>
            <select
              autoComplete="item-name"
              name="itemName"
              id="itemName"
              type="text"
              placeholder="Item name"
              defaultValue={"default"}
              className={
                theme === "light"
                  ? "select select-bordered text-lg text-gray-950"
                  : "select select-bordered text-lg text-white"
              }
              {...register("subCategoryName", {
                required: true,
                pattern: {
                  value: /^(?!default$).*$/i,
                },
              })}
            >
              <option value="default" disabled>
                Pick One
              </option>
              {/* <option disabled defaultValue={"Pick One"} selected>
                Pick one
              </option> */}
              <option>Landscape Painting</option>
              <option> Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
            {errors?.subCategoryName && (
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
                Required | Pick one subcategory
              </p>
            )}
          </div>

          {/* short description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text lg:text-xl">Short Description</span>
            </label>
            <textarea
              autoComplete="short-description"
              name="shortDescription"
              id="shortDescription"
              placeholder="Item description"
              className={
                theme === "light"
                  ? "textarea textarea-bordered textarea-lg text-lg text-gray-950"
                  : "textarea textarea-bordered textarea-lg text-lg text-white"
              }
              {...register("shortDescription", {
                required: true,
                minLength: 20,
              })}
            />
            {errors?.shortDescription && (
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
                Enter item description | Minimum 20 character
              </p>
            )}
          </div>

          <div className="flex flex-row items-center gap-x-8">
            {/* customization */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text lg:text-xl">Customization</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="label cursor-pointer">
                  <span className="label-text">Yes</span>
                  <input
                    name="itemCustomization"
                    id="itemCustomization"
                    type="radio"
                    className={
                      theme === "light"
                        ? "radio text-lg text-gray-950"
                        : "radio text-lg text-white"
                    }
                    value={"Yes"}
                    {...register("itemCustomization", {
                      required: true,
                    })}
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text">No</span>
                  <input
                    name="itemCustomization"
                    id="itemCustomization"
                    type="radio"
                    className={
                      theme === "light"
                        ? "radio text-lg text-gray-950"
                        : "radio text-lg text-white"
                    }
                    value={"No"}
                    {...register("itemCustomization", {
                      required: true,
                    })}
                  />
                </label>
              </div>
              {errors?.itemCustomization && (
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
                  Required | Choose one
                </p>
              )}
            </div>

            {/* item stock */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text lg:text-xl">Stock</span>
              </label>
              <select
                autoComplete="item-stock"
                name="itemStock"
                id="itemStock"
                placeholder="Item stock"
                defaultValue={"default"}
                className={
                  theme === "light"
                    ? "select select-bordered text-lg text-gray-950"
                    : "select select-bordered text-lg text-white"
                }
                {...register("itemStock", {
                  required: true,
                  pattern: {
                    value: /^(?!default$).*$/i,
                  },
                })}
              >
                <option value="default" disabled>
                  Pick One
                </option>
                <option>In Stock</option>
                <option>Made to Order</option>
                <option>Out of Stock</option>
              </select>
              {errors?.itemStock && (
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
                  Required | Choose Item Stock
                </p>
              )}
            </div>
          </div>

          {/* processing time */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text lg:text-xl">Processing Time</span>
            </label>
            <select
              autoComplete="processing-time"
              name="processingTime"
              id="processingTime"
              placeholder="Item processing time"
              defaultValue={"default"}
              className={
                theme === "light"
                  ? "select select-bordered text-lg text-gray-950"
                  : "select select-bordered text-lg text-white"
              }
              {...register("processingTime", {
                required: true,
                pattern: {
                  value: /^(?!default$).*$/i,
                },
              })}
            >
              <option value="default" disabled>
                ---Select---
              </option>
              <option>1-2 weeks</option>
              <option>2-3 weeks</option>
              <option>3-4 weeks</option>
              <option>4-8 weeks</option>
              <option>8 weeks++</option>
            </select>
            {errors?.processingTime && (
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
                Required | Select Processing Time
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-x-8">
            {/* rating */}
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Rating</span>
              </label>
              <input
                autoComplete="item-rating"
                name="itemRating"
                id="itemRating"
                type="text"
                placeholder="Rating"
                className={
                  theme === "light"
                    ? "input input-bordered text-lg text-gray-950"
                    : "input input-bordered text-lg text-white"
                }
                {...register("itemRating", {
                  required: true,
                  pattern: /^(10(\.0{1,2})?|[0-9](\.\d{1,2})?)$/i,
                })}
              />
              {errors?.itemRating && (
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
                  Required | Enter item rating (1-10 e.g. 4.58)
                </p>
              )}
            </div>

            {/* price */}
            <div className="flex-1 form-control">
              <label className="label">
                <span className="label-text lg:text-xl">Price</span>
              </label>
              <input
                autoComplete="item-price"
                name="itemPrice"
                id="itemPrice"
                type="text"
                placeholder="Price"
                className={
                  theme === "light"
                    ? "input input-bordered text-lg text-gray-950"
                    : "input input-bordered text-lg text-white"
                }
                {...register("itemPrice", {
                  required: true,
                  pattern: /^\d+(\.\d+)?$/i,
                })}
              />
              {errors?.itemPrice && (
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
                  Required | Enter item price
                </p>
              )}
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral lg:text-xl">Add Item</button>
          </div>
        </form>
      </div>
    </section>
  );
};

AddCraft.propTypes = {
  update: PropTypes.bool,
};

export default AddCraft;
