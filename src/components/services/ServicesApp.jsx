import "./ServicesApp.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const ServicesApp = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme_pattern.r" />
      </div>
      <div className="services-container">
        {services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More </p>
                <img src={arrow_icon} alt="arrow_icon_r" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesApp;
