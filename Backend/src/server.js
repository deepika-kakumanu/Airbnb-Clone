const express=require("express")
const cors=require("cors")
require("dotenv").config();
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("The Backend in the airbnb is working!!..>")
})
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Airbnb API is working successfully"
    })
})
const PORT =process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})