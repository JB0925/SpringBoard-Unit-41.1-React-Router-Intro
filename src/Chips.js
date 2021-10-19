import React, { useEffect, useState } from "react";
import { useCounter, useChipAdder } from "./Hooks/hooks";
import { BrowserRouter, Link } from "react-router-dom";
import "./Chips.css";
import ChipsPic from "./img/lays.png";

const Chips = () => {
    const [count, updateCount] = useCounter();
    const [chipArray, addChips] = useChipAdder();

    const handleClick = () => {
        updateCount();
        addChips();
    };

    const allChips = chipArray.map(({ img, top, left }) => {
        return <img src={img} alt="chips" style={{top, left}} />
    });

    return (
        <div className="Chips">
            {allChips}
            <div className="Chips-faded">
                <p>Bags Eaten: {count}</p>
                <button onClick={handleClick}>NOM NOM NOM</button>
                <Link to="/">GO BACK</Link>
            </div>
        </div>
    );
};

export default Chips;
