import React from 'react'
import styled, { keyframes } from 'styled-components';
import { sizing } from '../../../utils/useWindowSize';


function area(){

    const {width, height} = sizing()
    
    console.log(width, height);

    const moveArea = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width}px,${height}px);
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
        animation: ${moveArea} 10s alternante linear inifinite;
    `;


    return (
        <AreaStyled></AreaStyled>
    )

export default area