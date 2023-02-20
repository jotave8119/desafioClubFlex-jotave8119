import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {MdWatchLater} from "react-icons/md";
import "./footer.css";

const Footer = () => {
  return (
    <Footer className="footer">
      <div className="social">
        <p className="inst">
          <AiFillInstagram />
        </p>
        <p className="wpp">
          <RiWhatsappFill />
        </p>
        <p className="facebook">
          <BsFacebook />
        </p>
      </div>
      <div className="info">
        <p className="infoTxt">Rua da saúde, nº 145, Nova Iguaçu - RJ</p>
        <p className="infoTxtCopy">
          Todos os direitos reservados a <AiOutlineCopyrightCircle /> MedLife -
          2023
        </p>
        <p className="infoTxt">medlife@mail.com</p>
      </div>
      <div className="hour">
        <p className="hourTxt"><MdWatchLater/> 08:00 - 19:00</p>
      </div>
    </Footer>
  );
};

export default Footer;
