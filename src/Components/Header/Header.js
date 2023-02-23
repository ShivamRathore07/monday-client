import React from "react";
import "../Css_Files/header.scss";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Redux/Actions/userAction";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { userData } = useSelector((s) => s.userReducer);

  return (
    <div className="container">
      <div className="childContainer">
        <img
        onClick={()=>navigate("/")}
          className="logoImage"
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
          alt=""
        />
        <p>Products</p>
        <p>Teams</p>
        <p>Platform</p>
        <p>Resources</p>
      </div>
      <div className="childContainer">
      {userData.role==="ADMIN" &&
        <p onClick={()=>navigate("/editPrice")}>Edit Pricing</p>
      }
        <p>Contact sales</p>
        {cookies.get('_user_')?<p onClick={()=>dispatch(signOut(navigate))} >Logout</p>:<p onClick={()=>navigate("/login")} >Login</p>}
        <p className="getStartedBtn">{`Get Started ->`}</p>
      </div>
    </div>
  );
};

export default Header;
