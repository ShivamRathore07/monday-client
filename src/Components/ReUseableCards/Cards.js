import React from "react";
import "../Css_Files/card.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { stripePaymentCheckout } from "../../Redux/Actions/stripeAction"
import { Cookies } from "react-cookie"; 
import jwt from "jwt-decode";

const Cards = ({ color, fontColor, heading, price, priceMonth, SubHeading, features, text }) => {
  const cookies = new Cookies();
  const token =  cookies.get('_user_')
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div style={{backgroundColor:color,height: "2vh",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} ></div>
      <div className="main">
        <h2>{heading}</h2>
        {text ?<> <p  style={{color:fontColor ? fontColor : color, fontSize: "25px"}}>{text}</p> <img className='enterprise' src={process.env.PUBLIC_URL + '/enterprise.png'} alt="banner image"/> </>: <div className="amount">
          <p style={{color:fontColor ? fontColor : color, fontSize: "45px"}}>{`$${price}`}</p>
          <p>
            seat/
            <br /> month
          </p>
        </div>
          }
        <h4>{priceMonth}</h4>
       <p>Billed annually</p>
        <button onClick={()=>price>0? dispatch(stripePaymentCheckout({ user: jwt(token).user, heading,price,priceMonth})):""} className="tryFreebtn">Try for free</button>
        <p>Manage all your teams work in one place</p>
        <hr />
        <p className="subHeading">{SubHeading}</p>
        {features?.map((e,i)=>(
        <div key={i} className="subData">
          <p>{e}</p>
          <div>
            <AiOutlineInfoCircle color="rgb(100, 96, 96)" />
          </div>
        </div>
        ))}        
      </div>
    </div>
  );
};

export default Cards;
