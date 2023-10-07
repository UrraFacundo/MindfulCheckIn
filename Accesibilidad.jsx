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
         width: "100%",
         height: "100%",
         backgroundColor: "rgba(128, 0, 128, 0.5)",
         ZIndex: 1000,
         }}
         onClick={() => setIsOpen(false)}
        />

        <div
        style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        
  
  
       