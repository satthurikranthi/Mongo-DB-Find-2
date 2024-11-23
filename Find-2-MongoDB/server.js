// const { profile } = require("console");
const mongoose = require("mongoose");
let express = require("express")
let cors =require("cors");


let app = express();
app.use(cors());




let employeeSchema = new mongoose.Schema({

    id:Number,
    firstName:String,
    lastName:String,
    email:String,
    gender:String,
    country:String,
    age:Number,
    department:String,
   profilePic:String

});

let Employee = new mongoose.model("employee",employeeSchema,);




let connectToMDB = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://satthurikranthi:anvira@cluster0.q79l2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
   

       console.log("connected to successfully MDB");


    }catch(err){
        
        console.log(" unable to connected to MDB");
        console.log(err)

    }
};

app.get("/getEmployees",async(req,res)=>{
    let employeesData = await Employee.find();
    res.json(employeesData);
    console.log(employeesData)
  
  });

app.listen(1516,()=>{
    console.log("Listening to port 1516");
})

connectToMDB();