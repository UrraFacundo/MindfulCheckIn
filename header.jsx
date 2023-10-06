import { useState } from "react";
import logo from "../assets";
import { motion } from "framer-motion";

const Header  = () => {
    const [isOpen, setiOpen] = useState(false);
   
    const navbar = {
        open: () => ({
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0 ) ',
            transition: {
             type: "spring ",
             stiffness: '200%',
             restDelta: 1, 
            }
        }),
        closed: () => ({
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100% ) ',
            transition: {
            delay: 0.5,
            type: "spring ",
            stiffness: '200%',
            damping: 48,

            }
        }),
    }
    const navLinks = [
        {label: "Escuela", icon: "bx bx-home"},
        {label: "Cursos ", icon: "bx bx-briefcase"},
        {label: "Pagina web", icon: "bx bx-edit"},
        {label: "Informacion de nuestra institucion ", icon: "bx bx-info-circle"},
        {label: "Contacto ", icon: "bx bx-envelope"},
    ]
    return (
        <div className="Header">
            <div className="HeaderLogo">
            <img src={Logo} alt=""/>
            <h1>Epet n° 20</h1>
            </div>

            <div className="Header-Icono">
            <i class='bx bx-menu' onClick={() => setisOpen(isOpen => !isOpen)}></i>,
            <div/>

            <motion.ul 
            className="Header-nav"
            animation={isOpen ? "open": "closed"}
            variants={navbar}
            />
            {navLinks.map((links) = (
             <li
             className="nav-item"
             key={links.label}
             onClick={() => setisOpen(isOpen => !isOpen)}
        
             <i className={link.icon}></i>
             

            
    )

}