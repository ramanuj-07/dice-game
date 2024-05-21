import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import Totalscore from './Totalscore';
import RollDice from './RollDice';
import { useState } from 'react';
import Rules from './Rules';
function Playgame() {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectNumber, setSelectNumber] = useState();
    const [showRules, setShowRules] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    function rollDice() {

        if (!selectNumber) return (alert('You have to select the number first'));

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);


        if (selectNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }

    };

    function resetScore() {
        setScore(0);
    }
    return (
        <MainContainer>
            <div className='top'>
                <Totalscore score={score} />
                <NumberSelector selectNumber={selectNumber}
                    setSelectNumber={setSelectNumber} />
            </div>
            <RollDice currentDice={currentDice}
                rollDice={rollDice} />
            <div className="btns">
                <button onClick={resetScore} >Reset Score</button>
                <button onClick={()=> setShowRules((prev)=>!prev)} > {showRules?"Hide":"Show"} Rules</button>
            </div>

            {showRules&& <Rules /> } 
        </MainContainer>

    )
}

export default Playgame;

const MainContainer = styled.main`
padding-top:40px;
    .top{
        display:flex;
        justify-content: space-around;
        align-items:end;
    }
    .btns{
        flex-direction: column;
        display:flex;
        padding:20px;
        gap:20px;
        align-items:center;
    }
    button{
        background-color:black;
        color:white;
        border-radius: 5px;
        padding:10px 10px;
        width:150px;
        cursor: pointer;
        border:none;
        &:hover{
            background-color: #4c4c4c;

        }
    }
`;
