import React, { useState } from "react"; 
import Logo from "../assets/logo.png"; 
import { motion } from "framer-motion"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navbar = {
    open: {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0 ) ',
      transition: {
        type: "spring",
        stiffness: 200,
        restDelta: 1,
      },
    },
    closed: {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100% ) ',
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 48,
      },
    },
  };

  const navLinks = [
    { label: "Escuela", icon: "bx bx-home" },
    { label: "Cursos", icon: "bx bx-briefcase" },
    { label: "Pagina web", icon: "bx bx-edit" },
    { label: "Información de nuestra institución", icon: "bx bx-info-circle" },
    { label: "Contacto", icon: "bx bx-envelope" },
  ];

  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={Logo} alt="Logo" />
        <h1>Epet n° 20</h1>
      </div>

      <div className="Header-Icono">
        
        <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`} onClick={() => setIsOpen(!isOpen)}></i>
      </div>

      <motion.ul
        className={`Header-nav ${isOpen ? "open" : "closed"}`}
        variants={navbar}
        animate={isOpen ? "open" : "closed"}
      >
        {navLinks.map((link) => (
          <li className="nav-item" key={link.label} onClick={() => setIsOpen(!isOpen)}>
            <i className={link.icon}></i>
            {link.label}
          </li>
        ))}
      </motion.ul>
      </div>
  );
};

export default Header;



