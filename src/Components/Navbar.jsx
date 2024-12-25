import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext, useState, useEffect } from "react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // changed the theme inside the tailwind.config.js
    localStorage.setItem("theme", theme); 
  }, [theme]);

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3 text-red-700" to={"/"}>
          <span className="sr-only">Home</span>
          <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG Path here */}
          </svg>
          <h1 className="font-semibold text-md">Historical Artifacts</h1>
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink className="text-gray-500 transition hover:text-gray-500/75" to={"/"}> Home </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-500 transition hover:text-gray-500/75" to={"/artifacts"}> All Artifacts </NavLink>
              </li>
              {
                user?(
                  <li>
                  <NavLink className="text-gray-500 transition hover:text-gray-500/75" to={"/artifacts/add"}> Add Artifacts </NavLink>
                </li>
                ) : ""
              }
             
            </ul>
          </nav>

          {/* Avatar / User section */}
          {user ? (
            <div className="dropdown dropdown-end space-x-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user.photoURL || "https://th.bing.com/th/id/OIP.d32V8vlXqR6_0zkyyJJBbQHaHa?rs=1&pid=ImgDetMain"}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-full bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                  to={"/auth"}
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:text-red-700/75 sm:block"
                  to={"/reg"}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
