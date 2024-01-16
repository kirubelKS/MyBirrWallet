import React, { useContext, useState } from "react"
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'


// const BASE_URL = "http://localhost:5000/api/v1/";
const BASE_URL = "http://localhost:33333/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    // const navigate = useNavigate();

    const [loggedInUser, setLogin] = useState(null)
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const userInfo = () => {
        if (localStorage?.getItem('user')) {
            return JSON.parse(localStorage?.getItem('user'))
        }
        return null;
    }

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }
    
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        
        return totalIncome;
    }

    const loginUser = async (data) => {
        const res  = await axios.post(`${BASE_URL}login`, data)
        console.log(res);
        // navigate('/dashboard');
        localStorage.setItem('user', JSON.stringify(res.data.data))
        setLogin(res.data);
        return res.data
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            loginUser,
            loggedInUser,
            userInfo,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
