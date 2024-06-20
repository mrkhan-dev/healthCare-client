import {Link, NavLink} from "react-router-dom";
import logo from "../assets/supplementary-food_7850889.png";
import {LuUserCircle} from "react-icons/lu";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const {user, logOut} = useAuth();

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Log Out Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#00F515] underline"
              : "text-lg font-semibold px-5 py-3"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-lg font-semibold px-5 py-3 text-[#00F515] underline"
              : "text-lg font-semibold px-5 py-3"
          }
          to="/allTests"
        >
          All Tests
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-10 h-20 lg:px-52">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex md:gap-6 gap-2">
          <img className="md:h-10 md:w-10 h-6 w-6" src={logo} alt="" />
          <Link to="/">
            <p className="md:text-3xl text-xl font-Lora font-medium">
              <span className="text-[#00F515]">Health</span>
              <span>Hub</span>{" "}
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex items-center font-Lora">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div>
        {user ? (
          <div className="dropdown dropdown-end ml-24 lg:ml-0">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img
                    className="h-12 w-12 rounded-full flex justify-center items-center"
                    src={user.photoURL}
                  />
                ) : (
                  <LuUserCircle className="h-full w-full" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard">
                  <p className="text-base">Dashboard</p>
                </Link>
                <hr />
              </li>
              <li>
                <p onClick={handleLogout} className="text-base">
                  Log Out
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="signIn">
            <button className="btn text-lg ml-20 lg:ml-0 font-semibold px-5 bg-[#00F515] text-[#112A46] font-Lora hover:bg-emerald-500">
              login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
