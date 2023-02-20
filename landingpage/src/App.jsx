import { useState } from "react";
import About from "./components/About";
import ImgTitle from "./components/ImgTitle";
import NavBar from "./components/NavBar";
import Partnes from "./components/Partnes";
import { MdWatchLater } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-scroll";
import "./App.css";
import "./dark.css";
import Depositions from "./components/Depositions";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [dark, setDark] = useState(false);
  const darkMode = dark ? "dark" : "";

  return (
    <div className={darkMode}>
      <NavBar setDark={setDark} />
      <ImgTitle />
      <About />
      <Partnes />
      <Depositions />
      <ContactForm />
      <footer>
        <div className="social">
          <p className="socialIcon">
            <AiFillInstagram size={20} />
          </p>
          <p className="socialIcon">
            <AiFillFacebook size={20} />
          </p>
          <p className="socialIcon">
            <RiWhatsappFill size={20} />
          </p>
        </div>
        <div className="info">
          <p className="copy">
            direitos reservados <AiOutlineCopyrightCircle size={10} /> medlife -
            2023
          </p>
          <p className="address">Rua saúde, 555, Nova Iguaçu, Centro - RJ</p>
          <p className="mail">medlife@mail.com</p>
          <p className="hour">
            <MdWatchLater /> 08:00hrs - 19:00hrs
          </p>
        </div>
        <Link
          className="toTop"
          to="initial"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Voltar ao início
        </Link>
      </footer>
    </div>
  );
};

export default App;
