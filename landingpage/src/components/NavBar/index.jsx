import CustomizedSwitches from "../CustomizedSwitches";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="topbar">
      <h2 className="logo">MedLife</h2>
      <div className="btnGroup">
        <span>Serviços</span>
        <span>Sobre</span>
        <span>Contatos</span>
        <span>Assine</span>
      </div>
      <div className="switch">
        <CustomizedSwitches/>
      </div>
    </nav>
  );
};

export default NavBar;
