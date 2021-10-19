import React, { useState } from "react";
import ChipsPic from "../img/lays.png";

const useCounter = (start = 0) => {
    const [count, setCount] = useState(start);
    const updateCount = () => setCount(count => count + 1);
    return [count, updateCount];
};

const useChipAdder = (initialState = []) => {
    const [chipArray, setChipArray] = useState(initialState);
    const genRandom = () => {
        return Math.floor(Math.random() * 100) + 1;
    }
    const addChips = () => {
        setChipArray(chipArray => [...chipArray, {img: ChipsPic, top: `${genRandom()}%`, left: `${genRandom()}%`}]);
    };
    return [chipArray, addChips];
};

export {
    useCounter,
    useChipAdder
};