import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";


const Accessibility = ({ children }) => {
    useEffect(() => {
        const HandleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
    
        window.addEventListener("keydown", handleEscape);
    
        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);
    
    return isOpen
     createPortal(
        <div
         style={{
         position: "absolute",
         top: 0,
         left: 0,
  
  
       