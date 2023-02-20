import { useState } from 'react';
import About from './components/About';
import ImgTitle from './components/ImgTitle';
import NavBar from './components/NavBar';
import Partnes from './components/Partnes';
import './App.css';
import "./dark.css";
import Depositions from './components/Depositions';
import ContactForm from './components/ContactForm';

const App = () => {

  const [dark, setDark] = useState(false);
  const darkMode = dark ? "dark" : "";

  return (
   <div className={darkMode}>
     <NavBar setDark = {setDark}/>
     <ImgTitle/>
     <About/>
     <Partnes/>
     <Depositions/>
     <ContactForm/>
   </div>
  );
}

export default App;
