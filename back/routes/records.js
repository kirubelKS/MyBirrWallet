const { addIncome } = require('../controllers/income');
const router = require('express').Router();


router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncomes)
module.exports = router
