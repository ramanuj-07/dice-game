import styled from "styled-components";

function Totalscore() {
    return (
        <ScoreContainer>
            <h1>0</h1>
              <p>Total Score</p>
      </ScoreContainer>
    
    );
};
export default Totalscore;

const ScoreContainer = styled.div`
text-align: center;
max-width: 200px;

    h1{
        font-size: 100px;

    }
    p{
        font-size: 25px;
        font-weight:500px;
    }
`;
