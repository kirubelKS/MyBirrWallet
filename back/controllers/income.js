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
            return res.status(400).json({error: 'all the fields are required.'})
        }
        if (!amount <= 0 || !amount == 'number'){
            return res.status(400).json({error: 'all the fields are required.'})
        }
   } catch (error) {
    
   }
   console.log(income)
}