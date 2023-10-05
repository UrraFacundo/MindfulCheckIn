import { useState } from "react";
import logo from "../assets";
import { motion } from "framer-motion";

const Header  = () => {
    const [isOpen, setiOpen] = useState(false);
    