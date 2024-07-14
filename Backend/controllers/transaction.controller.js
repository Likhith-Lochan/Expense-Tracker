import Income from "../models/income.model.js"

const addIncome=async(req,res)=>{
    try {
        const {title,amount,category,description,date}=req.body
    
        if(!title || !amount || !category || !description || !date){
           return res.status(403).json({message:"all fields are required"})
        }
    
        if(amount <=0 || !amount ==="number"){
            return res.status(402).json({message:" amount must positive and number"})
        }
    
        const income =await Income({
            title,
            amount,
            category,
            description,
            date
        })
        
    
        if(!income){
           return res.status(501).json({message:"internal sever error"})
        }
    
        await income.save()
    
        return res.status(200).json({message:"income saved successfully"})
    } catch (error) {
        console.log(error)
        return res.status(503).json({message: "internal server error"})
    }


}

const getIncomes=async (req,res)=>{
    try {
        const incomes= await Income.find().sort({createdAt:-1})

        return res.status(200).json(incomes)
        
    } catch (error) {
        return res.status(503).json({message: "internal server error"})
    }
}

const deleteIncome=async(req,res)=>{
    try {

        const {id}=req.params
         await Income.findByIdAndDelete(id).then((income)=>{
            res.status(200).json({message: "income deleted"})
         }).catch((err)=>{
            res.status(500).json({message: "internal server error"})
         })
        
    } catch (error) {
        return res.status(503).json({message: "internal server error"})
    }
}


export {
    addIncome,
    getIncomes,
    deleteIncome,
}