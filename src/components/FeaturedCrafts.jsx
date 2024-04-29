import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedCrafts = ({ item = {} }) => {
  const { _id, imageURL, itemName, userName } = item;
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
        <span className="block text-xs font-medium tracking-widest uppercase">
          Uploaded By: {userName || "Unknown"}
        </span>
        <h2 className="text-xl font-semibold tracking-wide capitalize h-14">
          {itemName || "Unknown"}
        </h2>
      </div>
      <Link className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-outline">
        View Details
      </Link>
    </div>
  );
};

FeaturedCrafts.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeaturedCrafts;
