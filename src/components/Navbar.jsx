import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //  console.log(location);
  //  if (location.pathname === "/about") {
  //    return <h1>LOH</h1>;
  //  }
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#aaa123",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      {/*<Link to="/">Home</Link>
      <Link to="/about">About us</Link>*/}

      {/*<NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>*/}

      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About us</button>
    </div>
  );
};

export default Navbar;
