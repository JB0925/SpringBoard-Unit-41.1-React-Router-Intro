import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Sushi.css";
import SushiPic from "./img/sushi.png";

const Sushi = () => {
    return (
        <div className="Sushi">
            <p>You don't eat the sushi. The sushi, they eat you.</p>
            <img src={SushiPic} alt="Sushi" />
            <div className="faded">
                <Link to="/">GO BACK</Link>
            </div>
        </div>
    );
};

export default Sushi;