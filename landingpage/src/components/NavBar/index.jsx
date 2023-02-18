import CustomizedSwitches from "../CustomizedSwitches";
import "./navbar.css";

const NavBar = ({setDark}) => {

  const onDark = () =>{
    setDark((prev) => !prev)
  }
      
  return (
    <nav className="topbar">
      <h2 className="logo">MedLife</h2>
      <div className="btnGroup">
        <span>Planos</span>
        <span>Sobre</span>
        <span>Parceiros</span>
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
