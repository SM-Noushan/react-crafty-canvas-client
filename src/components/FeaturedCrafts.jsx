import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const FeaturedCrafts = ({ item = {}, featured = true }) => {
  const {
    _id,
    imageURL,
    itemName,
    userName,
    subCategoryName,
    shortDescription,
    processingTime,
    itemPrice,
    itemRating,
  } = item;
  return (
    <div className="max-w-xs w-full mx-auto p-6 rounded-md shadow-md">
      <div className="overflow-clip">
        <img
          src={imageURL || "https://source.unsplash.com/random/300x300/?1"}
          alt="featured-craft-image"
          className="object-cover object-center w-full rounded-md h-72 hover:scale-125 duration-500 hover:brightness-75"
        />
      </div>
      <div className="mt-6 mb-2">
        <span className="text-xs font-medium tracking-widest uppercase flex justify-between items-center">
          {featured ? (
            <p>Uploaded By: {userName || "Unknown"}</p>
          ) : (
            <p> {subCategoryName || "Unknown"}</p>
          )}
          <p className="flex items-center">
            {itemRating || "0"} <FaStar />
          </p>
        </span>
        <h2 className="text-xl font-semibold tracking-wide capitalize h-14">
          {itemName || "Unknown"}
        </h2>
        <p className="text-justify h-20">{shortDescription.slice(0, 125)}...</p>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-medium">Processing Time: </span>
            {processingTime}
          </p>
          <p>
            <span className="font-medium">BDT: </span>
            {itemPrice}
          </p>
        </div>
        <div className="flex"></div>
      </div>
      <Link
        to={`/item/${_id}`}
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-outline"
      >
        View Details
      </Link>
    </div>
  );
};

FeaturedCrafts.propTypes = {
  item: PropTypes.object.isRequired,
  featured: PropTypes.bool,
};

export default FeaturedCrafts;
