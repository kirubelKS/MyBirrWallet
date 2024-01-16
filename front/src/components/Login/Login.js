import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../form/LoginForm';
// import IncomeItem from '../IncomeItem/IncomeItem';
import BgImage from "../../img/6197033.jpg";

function Login() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <LoginStyled>
            <InnerLayout>
                <div className='split-section'>
                    <div className='split-login-bg' style={{ backgroundImage: `url(${BgImage})` }}>
                        <h1>"Attention is the new currency"</h1>
                        <p>The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                    </div>
                    <div className='split-login-content'>
                        <h1>Login</h1>
                        <div className="income-content">
                            <div className="form-container">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

    
    .split-login-bg {
        background-size: cover;
        background-position: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

    .split-section {
        display: flex;
        height: calc(100vh - 70px);
        width: 100%
    }
    
    .split-section > * {
        flex: 0 0 50%;
    }

    .split-login-bg h1 {
        color: inherit;
    }
    
    .split-login-content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;

export default Login
