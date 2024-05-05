import "./FooterApp.css";
import footer_logo from "../../assets/footer_logo.svg";

import user_icon from "../../assets/user_icon.svg";

const FooterApp = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer_logo.r" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            animi ut porro officiis expedita! {" "}
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon.svg" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subcribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Dam1R. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
