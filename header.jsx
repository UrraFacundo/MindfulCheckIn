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
             stiffness: 200%,
             
            }
        })
    }
}