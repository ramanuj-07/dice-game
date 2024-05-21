import styled from "styled-components";
import { useState } from 'react';

export default function RollDice() {
    const [currentDice, setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
         return Math.floor(Math.random() * (max - min) + min);
    }

    function rollDice() {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

    };
    return (
        <RollDiceInterface>
            <img onClick={rollDice}
                src={`/images/dice_${currentDice}.png`} alt="Dice Image" /> 
            <p>Click on Dice to roll</p>
            <div className="result">
                <button>Reset Score</button>
                <button>Show Rules</button>
            </div>
           
        </RollDiceInterface>
    )
}

const RollDiceInterface = styled.div`

    display:flex;
    align-items:center;
    flex-direction:column;

    img{
    height:200px;
    width:200px;
    margin-top: 50px;
    cursor: pointer;
    }
    p{
    font-weight:500;
    }
    .result{
        flex-direction: column;
        display:flex;
        padding:20px;
        gap:20px;
    }
    button{
        background-color:black;
        color:white;
        border-radius: 5px;
        padding:10px 10px;
        min-width:150px;
        cursor: pointer;
        border:none;
        &:hover{
            background-color: #4c4c4c;

        }
    }

`;