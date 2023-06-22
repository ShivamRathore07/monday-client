import React from "react";
import "../Css_Files/header.scss";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { signOut } from "../../Redux/Actions/userAction";
import jwt from "jwt-decode";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("_user_");

  return (
    <div className="childContainer">
      <div>
        <p onClick={() => navigate("/")} className="logoImage">
          ambaram
        </p>
      </div>
      <div className="navigator">
        <div>
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>BLOGS</p>
          <p>PLANS</p>
        </div>
        <div>
          {token ? (
            jwt(token).user.role === "ADMIN" ? (
              <button
                className="getStartedBtn"
                onClick={() => navigate("/editPrice")}
              >
                EDIT PRICING
              </button>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {cookies.get("_user_") ? (
            <button
              className="getStartedBtn"
              onClick={() => dispatch(signOut(navigate))}
            >
              LOGOUT
            </button>
          ) : (
            <>
              <button
                className="getStartedBtn"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </button>
              <button
                className="getStartedBtn"
                onClick={() => navigate("/login")}
              >
                SIGNUP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
