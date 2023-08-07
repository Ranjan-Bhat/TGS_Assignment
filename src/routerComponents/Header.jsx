import "./headerStyle.css";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const handleLogout = () => {
    localStorage.setItem("login", "false");
  };

  return (
    <>
      {/* <h1>Header Page</h1> */}
      <div className="header">
        <NavLink className="page" to={`/login`}>
          Login
        </NavLink>
        <NavLink className="page" to={`/dashboard`}>
          Dashboard
        </NavLink>
        <NavLink onClick={handleLogout} className="page" to={`/login`}>
          Logout
        </NavLink>

        {/* <p>Dashboard</p>
         <p>Logout</p> */}
      </div>
    </>
  );
};
