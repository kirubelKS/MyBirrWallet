const ExpenseSchema = require("../types/income.js")


exports.addExpense = async (req, res) => {
   const {title, amount, category, description, date} = req.body
   const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
   })

   try {
        //Validate
        if (!tittle || !category || !description || !date){
            return res.status(400).json({error: 'all the boxes need to be filled.'})
        }
        if (amount <= 0 || !amount == 'number'){
            return res.status(400).json({error: 'Amount must be a positive number and greater than 0.'})
        }
        await income.save()
        res.status(200).json({message: 'expense registered' })
   } catch (error) {
    res.status(500).json({message: 'loading error' })
   }
   console.log(income)
}


exports.getExpense = async (req, res) => {
try {
    const incomes = await IncomeSchema.find().sort({createdAt: -1})
    res.status(200).json(incomes)
} catch (error) {
    res.status(500).json({message: 'Loading error'})
}
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findbyIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Record deleted'})
        })
        .catch((error) =>{
            res.status(500).json({message:'loading error'})
        })
}
