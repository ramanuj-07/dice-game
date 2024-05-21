import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import Totalscore from './Totalscore';
import RollDice from './RollDice';
import { useState } from 'react';

function Playgame() {

    const [score, setScore] = useState(0);
    const [currentDice, rollDice] = useState(1);
    const [selectNumber, setSelectNumber] = useState();


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
   }

function rollDice() {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }

};
    
    return (
        <MainContainer>
            <div className='top'>
                <Totalscore score={score} />
                <NumberSelector selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber} />
            </div>
            <RollDice currentDice={currentDice}
                rollDice={rollDice} />
        </MainContainer>
    )
}

export default Playgame;

const MainContainer = styled.main`
padding-top:60px;
    .top{
        display:flex;
        justify-content: space-around;
align-items:end;
    }
`
