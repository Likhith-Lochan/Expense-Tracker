import Expense from "../models/expense.model.js"

const addExpense=async(req,res)=>{
    try {
        const {title,amount,category,description,date}=req.body
    
        if(!title || !amount || !category || !description || !date){
           return res.status(403).json({message:"all fields are required"})
        }
    
        if(amount <=0 || !amount ==="number"){
            return res.status(402).json({message:" amount must positive and number"})
        }
    
        const expense =await Expense({
            title,
            amount,
            category,
            description,
            date
        })
        
    
        if(!expense){
           return res.status(501).json({message:"internal sever error"})
        }
    
        await expense.save()
    
        return res.status(200).json({message:"expense saved successfully"})
    } catch (error) {
        console.log(error)
        return res.status(503).json({message: "internal server error"})
    }


}

const getExpenses=async (req,res)=>{
    try {
        const expenses= await Expense.find().sort({createdAt:-1})

        return res.status(200).json(expenses)
        
    } catch (error) {
        return res.status(503).json({message: "internal server error"})
    }
}

const deleteExpense=async(req,res)=>{
    try {

        const {id}=req.params
         await Expense.findByIdAndDelete(id).then((income)=>{
            res.status(200).json({message: "expense deleted"})
         }).catch((err)=>{
            res.status(500).json({message: "internal server error"})
         })
        
    } catch (error) {
        return res.status(503).json({message: "internal server error"})
    }
}


export {
    addExpense,
    getExpenses,
    deleteExpense,
}