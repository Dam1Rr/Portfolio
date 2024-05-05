import "./NavbarApp.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import { useState } from "react";

const NavbarApp = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="logo.r" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About me</p>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default NavbarApp;
