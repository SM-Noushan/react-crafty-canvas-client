import PropType from "prop-types";
import { Link } from "react-router-dom";
const SubCategoryInfo = ({ item }) => {
  const { url, name, collection } = item || {};
  return (
    <Link
      to={`/item/category/${name}`}
      className="card h-80 bg-base-100 image-full"
    >
      <figure>
        <img
          src={
            url ||
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="sub-category-image"
          className="object-cover object-center w-full"
        />
      </figure>
      <div className="card-body justify-end">
        <h2 className="card-title capitalize">{name || "Others"}</h2>
        <div className="card-actions">
          <button className="btn btn-success text-lg cursor-default">
            {collection || 0} Collection
          </button>
        </div>
      </div>
    </Link>
  );
};

SubCategoryInfo.propTypes = {
  item: PropType.object.isRequired,
};

export default SubCategoryInfo;
