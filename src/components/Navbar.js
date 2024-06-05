import React, { useContext } from "react";
import { auth } from "../firebase-config";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">ATT Chat</span>
      <div className="user">
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
