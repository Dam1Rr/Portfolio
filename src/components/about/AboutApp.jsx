import "./AboutApp.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const AboutApp = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} alt="theme_pattern_r" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_img_r" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur veniam vero debitis deleniti laborum quas commodi
              necessitatibus at? In dignissimos quos expedita suscipit. Eum
              repellendus sunt accusantium, doloribus non facere?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              non saepe quibusdam similique nobis eveniet necessitatibus sequi
              qui molestias, esse reiciendis debitis amet incidunt veniam animi
              optio iure placeat architecto.,
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>VueJs</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERSIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
