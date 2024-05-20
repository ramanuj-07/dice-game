import React from 'react'
import styled from 'styled-components'

function Startgame({ toggle }) {
    return (
        <Container>
            <img src="/images/dices.png" alt="Dice Image" />
            <div className='main-text'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>

    )
};
export default Startgame;

const Container = styled.div`
    max-width: 1200;
    display: flex;
    align-items: center;
    margin: 0 auto;

    .main-text{
        h1{
            font-size: 96px;
            /* white-space: nowrap; */
        }
        
    }

`;
const Button = styled.button`
background-color: black;
color: white;
padding:10px 10px;
min-width:200px;
border-radius: 5px;
border:none;
&:hover{
    background-color: #4c4c4c;
}
cursor: pointer;
`;