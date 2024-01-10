import React from 'react'
import { keyframes } from 'styled-components';

function area(){
    const moveArea = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(800px,900px);
        }
        100%{
            transform: translate(0,0);
        }
    `

    }

    const AreaStyled = styled.div`
        width: 70vh;
        height: 70;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-right: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(400.5px);
    `;


    return (
        <AreaStyled></AreaStyled>
    )
}

export default area