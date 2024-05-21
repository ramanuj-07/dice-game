import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import Totalscore from './Totalscore';
import RollDice from './RollDice';

function Playgame() {

    return (
        <MainContainer>
            <div className='top'>
                <Totalscore />
                <NumberSelector />
            </div>
<RollDice/>
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
