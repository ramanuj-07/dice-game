import styled from "styled-components";
import React from 'react';

export default function RollDice({ currentDice, rollDice }) {
   
    return (
        <RollDiceInterface>
            <img onClick={rollDice}
                src={`/images/dice_${currentDice}.png`} alt="Dice Image" /> 
            <p>Click on Dice to roll</p>
           
           
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

`;