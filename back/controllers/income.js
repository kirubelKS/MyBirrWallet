const IncomeSchema = require("../types/income.js")


exports.addIncome = async (req, res) => {
   const {title, amount, category, description, date} = req.body
   const income = IncomeSchema({
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
            return res.status(400).json({error: 'Amount must be a posetive number and greater than 0.'})
        }
        await income.save()
        res.status(200).json({message: 'income registered' })
   } catch (error) {
    res.status(500).json({message: 'loading error' })
   }
   console.log(income)
}


exports.getIncomes = async (req, res) => {
try {
    const incomes = await IncomeSchema.find().sort({createdAt: -1})
    res.status(200).json(incomes)
} catch (error) {
    res.status(500).json({message: 'Loading error'})
}
}

exports.deleteIncomes = async (req, res) => {
    const {id} = req.params;
    IncomeSchema.findbyIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Record deleted'})
        })
        .catch((error) =>{
            res.status(500).json({message:'loading error'})
        })
}
