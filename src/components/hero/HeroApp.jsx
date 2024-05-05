import "./HeroApp.css";
import profile_img from "../../assets/profile_img.svg";

const HeroApp = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_img.r" />
      <h1><span>I`m Damir </span>, Frontend developer based in Kyrgyzstan</h1>
      <p>i am a Frontend developer from Kyrgyzstan, with 1 yeaes experiense</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">
            My resume
        </div>
      </div>
    </div>
  );
};

export default HeroApp;
