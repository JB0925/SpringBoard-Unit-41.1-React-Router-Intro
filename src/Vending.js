import React from "react";
import "./Vending.css";
import VendingMachinePic from "./img/vending.png";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div className="VendingMachine-message faded">
                <p>Hello, I am a vending machine! What
                    would you like to eat?
                </p>
            </div>
            <div className="VendingMachine-image">
                <img src={VendingMachinePic} alt="Vending Machine" />
            </div>
            <div className="VendingMachine-choices faded">
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/sushi">Sushi</Link>
            </div>
        </div>
    );
};

export default VendingMachine;