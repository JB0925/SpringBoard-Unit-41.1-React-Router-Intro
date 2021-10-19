import React from "react"
import { BrowserRouter, Link } from "react-router-dom";
import "./Coke.css";
import CokePic from "./img/coke.png";

const Coke = () => {
    return (
        <div className="Coke">
            <img src={CokePic} alt="Coke" />
            <div className="Coke-return">
                <p>OMG. SUUUGGGGGARRRRRR!!!!</p>
                <Link to="/">GO BACK</Link>
            </div>
            <img src={CokePic} alt="Coke" />
        </div>
    );
};

export default Coke;