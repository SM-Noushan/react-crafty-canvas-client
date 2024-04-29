import { FaRegStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const item = useLoaderData() || {};
  const {
    imageURL,
    itemName,
    userName,
    subCategoryName,
    shortDescription,
    itemCustomization,
    itemStock,
    processingTime,
    itemRating,
    itemPrice,
  } = item;
  return (
    <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz rounded-md my-12 bg-base-300 py-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={
            imageURL ||
            "https://images.unsplash.com/photo-1579762714453-51d9913984e2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="art-and-craft-image"
          className="w-full h-60 sm:h-96 object-cover rounded-md"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50 rounded-md">
          <div className="space-y-2">
            <p className="p-1 hover:underline">
              #{subCategoryName || "Others"}
            </p>
            <p className="inline-block text-2xl font-semibold sm:text-3xl">
              {itemName || "Unknown Art"}
            </p>
            <p>
              Uploaded By &nbsp;
              <span className="hover:underline">{userName || "Unknown"}</span>
            </p>
            <br />
            <p className="text-justify">
              {shortDescription || "Nothing to say"}
            </p>
          </div>
          <div>
            <div className="w-36 *:w-full *:flex *:justify-between">
              <h3 className="text-lg font-medium text-center !justify-center">
                ---Info---
              </h3>
              <div>
                <p className="font-medium">Processing Time: </p>
                <p>{processingTime || "0"} </p>
              </div>
              <div>
                <p className="font-medium">Customization: </p>
                <p>{itemCustomization || "-"}</p>
              </div>
              <div>
                <p className="font-medium">Rating: </p>
                <div className="flex items-center gap-1.5">
                  <FaRegStar />
                  <p>{itemRating || "0"} </p>
                </div>
              </div>
              <div>
                <p className="font-medium">Stock: </p>
                <p>{itemStock || "-"} </p>
              </div>
              <div>
                <p className="font-medium">Price: </p>
                <p>{itemPrice || "00"} BDT </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
