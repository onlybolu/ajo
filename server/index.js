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
}).then(() => {
    console.log("MongoDB connected");
}
)

app.post("/signup", (req,res) => {
    // const User = req.body;
    
    
    
    try {
        // Check if the user already exists
        const existingUser = UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        UserModel.create(req.body)
    .then(users => res.json(users))
    // .catch(err => (err))
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred" });
    }
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