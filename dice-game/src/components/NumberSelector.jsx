import styled from "styled-components";

function NumberSelector() {
    const numberArr = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {
                numberArr.map((value, i) => (
                    <Box key={i} >{value}</Box> 
                ))
            } 
        </div>
    );

};

export default NumberSelector;

const Box = styled.div`
    height:80px;
    width:80px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size:25px;
    font-weight:600px;
`;