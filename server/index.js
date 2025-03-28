import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserModel from '../server/newuser/user.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
}
)

app.post("/signup", (req,res) => {
    // const User = req.body;
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => (err))
    
    // if(!User.fullname || User.email || User.password){
    //     return res.status(400).json({success:false, message: "Please fill all fields"})
    // }
})

app.post("/login", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    UserModel.findOne({email, password})
   .then(user => {
        if(user){
            return res.status(200).json({success:true, message: "Login successful"})
        }
        else{
            return res.status(400).json({success:false, message: "Invalid credentials"})
        }
    }
    )
    .catch(err => (err))

})
console.log(process.env.MONGO_URL);
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
   
})