import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../layouts/Root";
import { Tooltip } from "react-tooltip";

const nestedNavlinks = () => (
  <>
    <NavLink
      to="/item"
      className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    >
      View All
    </NavLink>
    <NavLink
      to="/item/add"
      className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    >
      Add Item
    </NavLink>
  </>
);

const navlinks = () => (
  <div className="menu lg:menu-horizontal gap-2 lg:gap-4 text-xl">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    >
      Home
    </NavLink>
    <details className="w-full list-none lg:hidden">
      <summary className="list-none flex gap-1 items-center">
        Art & Craft
        <FaCaretDown className="mb-1" />
      </summary>
      <div className="pt-6 ml-4 -mt-4 flex flex-col">{nestedNavlinks()}</div>
    </details>
    <div className="hidden lg:block dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="flex gap-1 items-center">
        Art & Craft
        <FaCaretDown className="mb-1" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-32 text-xl space-y-1.5"
      >
        {nestedNavlinks()}
      </ul>
    </div>
    <NavLink
      to="/about-us"
      className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    >
      About
    </NavLink>
    <NavLink
      to="/contact-us"
      className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    >
      Contact
    </NavLink>
  </div>
);

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, authLoading, logOut } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme", theme);
    if (localTheme) {
      if (localTheme === "dark") setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Something went wrong, please try again");
      });
  };
  return (
    <section className="drawer container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link
            to="/"
            className="px-2 mx-2 font-rajdhani text-xl lg:text-4xl font-semibold"
          >
            Crafty Canvas
          </Link>
          <div className="hidden lg:block flex-1 text-center">
            {/* Navbar menu content here */}
            {navlinks()}
          </div>
          <div className="flex-1 lg:flex-none px-2 mx-2 justify-end lg:justify-normal">
            <div className="flex gap-4 items-center">
              <label className="cursor-pointer grid place-items-center">
                <input
                  onChange={handleThemeToggle}
                  checked={theme === "light" ? false : true}
                  type="checkbox"
                  value=""
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              {authLoading ? (
                <div className="skeleton size-12 rounded-full" />
              ) : user ? (
                <div
                  data-tooltip-id="user-tooltip"
                  data-tooltip-place="right"
                  data-tooltip-variant="info"
                  className="dropdown dropdown-end lg:dropdown-hover mt-0"
                >
                  <Tooltip id="user-tooltip">
                    <h3 className="text-base font-medium">
                      Greeting,{" "}
                      <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
                        {user?.displayName || "Artisan"}
                      </span>
                    </h3>
                  </Tooltip>
                  <div tabIndex={0} role="button" className="avatar">
                    <div className="size-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                      <img
                        src={
                          user?.photoURL ||
                          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        }
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 cursor-pointer text-base lg:text-xl space-y-1.5"
                  >
                    <Link to="/profile">Profile</Link>
                    <Link to="/my-art-and-craft">My Art & Craft List</Link>
                    <button className="text-left" onClick={handleLogout}>
                      Logout
                    </button>
                  </ul>
                </div>
              ) : (
                <div className="space-x-2 text-base lg:text-xl hover:*:underline">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
              {/* <div className="skeleton size-12 rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {navlinks()}
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-xl"
            }
          >
            Home
          </NavLink>
          <NavLink>Home</NavLink> */}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
