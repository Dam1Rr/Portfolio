import "./ContactApp.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const ContactApp = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "96f2a480-1d09-406b-9fa9-bf5c109a0374");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(response.message);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme_pattern.r" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non
            voluptates harum fugit consectetur perferendis velit culpa tempore
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon.r" />{" "}
              <p>jasonvorobey20@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon.r" /> <p>+996701364236</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon.r" />{" "}
              <p>Bishkek, Kyrgyzstan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactApp;
