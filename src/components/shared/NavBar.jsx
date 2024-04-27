import React from "react";

const NavBar = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme", theme);
    if (localTheme) {
      if (localTheme === "dark") setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    } else document.querySelector("html").setAttribute("data-theme", "light");
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
  return (
    <section className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
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
          <div className="flex-1 px-2 mx-2">Crafty Canvas</div>
          <div className="flex-1 px-2 mx-2 justify-end">
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
          </div>
          <div className="flex-none hidden lg:block">
            {/* Navbar menu content here */}
            <ul className="menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
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
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
