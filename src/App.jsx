import AboutApp from "./components/about/AboutApp";
import ContactApp from "./components/contact/ContactApp";
import FooterApp from "./components/footer/FooterApp";
import HeroApp from "./components/hero/HeroApp";
import MyWorkApp from "./components/my work/MyWorkApp";
import NavbarApp from "./components/navbar/NavbarApp";
import ServicesApp from "./components/services/ServicesApp";

const App = () => {
  return (
    <div>
      <NavbarApp />
      <HeroApp />
      <AboutApp />
      <ServicesApp />
      <MyWorkApp />
      <ContactApp />
      <FooterApp />
    </div>
  );
};

export default App;
