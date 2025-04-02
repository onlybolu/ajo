import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {    
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    nationality: { // Add nationality field
        type: String,
        required: true, // Make it required
    },
    reason: { // Add nationality field
        type: String,
        required: true, // Make it required
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;