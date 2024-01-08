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
        if (!amount <= 0 || !amount == 'number'){
            return res.status(400).json({error: 'Amount must be a posetive number and greater than 0.'})
        }
        await income.save()
        res.status.(200).json({message: 'Income Recorded'})
   } catch (error) {
    
   }
   console.log(income)
}