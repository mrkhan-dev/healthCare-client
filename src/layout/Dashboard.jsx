import {NavLink, Outlet} from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();

  return (
    <div className="flex">
      <div className="w-80 px-5 shadow-xl min-h-screen ">
        {isAdmin ? (
          <>
            <ul className="menu font-Lora text-lg">
              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addTest">Add a Test</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeAllTest">All Test</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu font-Lora text-lg">
              <li>
                <NavLink to="/dashboard/userProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/upcomingAppoinment">
                  My Upcoming Appointments
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userTestResult">Test Result</NavLink>
              </li>
            </ul>
          </>
        )}
        <br />
        <div className="divider"></div>
        <ul className="menu text-lg font-Lora mt-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTests">All Test</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex1 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
