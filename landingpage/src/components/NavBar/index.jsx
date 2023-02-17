import CustomizedSwitches from "../CustomizedSwitches";
import "./navbar.css";

const NavBar = ({ setDark }) => {

    const onDark = () => {
        setDark((prev) => !prev )
      }

  return (
    <nav className="topbar">
      <h2 className="logo">Logo</h2>
      <div className="btnGroup">
        <span>Serviços</span>
        <span>Sobre</span>
        <span>Assine</span>
      </div>
      <div className="switch">
        <button 
            className="btnDarkMode"
            onClick={() => onDark()}
        >
          <CustomizedSwitches />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
