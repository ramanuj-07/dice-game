
import styled from 'styled-components';

function Rules() {
  return (
      <RuleContainer>
          <h3>How to play dice game</h3>
          <p className='text'>Select any number <br />Click on dice image <br />after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you get wrong guess then  2 point will be dedcuted </p>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
max-width: 800px;
margin:0 auto;
    background-color:pink;
    padding:10px;
    h3{
        font-size: 20px;
    }
    .text{
        margin-top:20px;
    }

`