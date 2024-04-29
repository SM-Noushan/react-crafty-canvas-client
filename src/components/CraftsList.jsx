import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import PropTypes from "prop-types";

const CraftsList = ({ crafts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Craft & Art</th>
            <th>Uploaded By</th>
            <th className="hidden min-[425px]:block">Category</th>
            <th className="hidden md:block">Description</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {crafts.map((item, idx) => (
            <tr key={item._id} className="hover">
              <th>{idx + 1}</th>
              <td>
                <div className="flex flex-col gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle size-16">
                      <img
                        src={
                          item.imageURL ||
                          "https://images.unsplash.com/photo-1488274319148-051ed60a9404?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt="art-and-craft-avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold capitalize">
                      {item.itemName || "Unknown"}
                    </div>
                  </div>
                </div>
              </td>
              <td className="capitalize">{item.userName || "Unknown"}</td>
              <td className="capitalize hidden min-[425px]:block">{item.subCategoryName || "Others"}</td>
              <td className="hidden md:block max-w-md xl:max-w-lg text-justify">
                {item.shortDescription}
              </td>
              <th>
                <Link className="btn btn-square  btn-outline btn-accent">
                  <FaEye />
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

CraftsList.propTypes = {
  crafts: PropTypes.array.isRequired,
};

export default CraftsList;
