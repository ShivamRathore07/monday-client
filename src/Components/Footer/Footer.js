import React from "react";
import "../Css_Files/footer.scss";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <p className="monday">ambaram</p>
          <h4>indian Address-</h4>
          <p>
            B1/22, ShriAgrasen Apts sec-7, plot no-10, Dwarka, New Delhi -
            110075
          </p>
          <h4>Us Address-</h4>
          <p>
            B1/22, ShriAgrasen Apts sec-7, plot no-10, Dwarka, New Delhi -
            110075
          </p>
        </div>
        <div>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Blog</h3>
        </div>
        <div>
          <div>
            <div>
              <div>
                <BsFacebook />
              </div>
              <h4>FaceBook</h4>
            </div>
            <div>
              <div>
                <BsInstagram />
              </div>
              <h4>Instagram</h4>
            </div>
            <div>
              <div>
                <AiOutlineTwitter />
              </div>
              <h4>Twitter</h4>
            </div>
            <div>
              <div>
                <AiOutlineLinkedin />
              </div>
              <h4>Linkdin</h4>
            </div>
            <div>
              <div>
                <BsYoutube />
              </div>
              <h4>Youtube</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright © 2023 Ambaram | Powered by Ambaram</p>
      </div>
    </>
  );
};

export default Footer;
