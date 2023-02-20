import CustomizedSwitches from "../CustomizedSwitches";
import { Link } from "react-scroll";
import "./navbar.css";

const NavBar = ({ setDark }) => {
  const onDark = () => {
    setDark((prev) => !prev);
  };

  return (
    <nav className="topbar" >
      <h2 className="logo">MedLife</h2>
      <div className="btnGroup">
        <Link
          to="contactForm"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Consulte
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          Sobre
        </Link>
        <Link to="partnes" spy={true} smooth={true} offset={50} duration={500}>
          Parceiros
        </Link>
      </div>
      <div className="switch">
        <button className="btnSwitch" onClick={() => onDark()}>
          <CustomizedSwitches />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
