import { useState } from "react";
import styled from "styled-components";

function NumberSelector({ selectNumber, setSelectNumber }) {
    const numberArr = [1, 2, 3, 4, 5, 6];

    console.log(selectNumber);
    return (
        <NumberSelectorContainer>
            <div className="flex">
                {
                    numberArr.map((value, i) => (
                        <Box key={i}
                            isSelected={(value === selectNumber)}
                            onClick={() => setSelectNumber(value)} >{value}</Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>


    );

};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
align-items:end;
flex-direction:column;
display:flex;

.flex{
     display:flex;
     align-items:center;
     gap:25px;
}
p{
    font-size: 24px;
    font-weight:500;

}
   
`;
const Box = styled.div`
    height:80px;
    width:80px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size:25px;
    font-weight:500;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color:${(props) => (!props.isSelected ? "black" : "white")};
    cursor: pointer;
`;
