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
    ]

}