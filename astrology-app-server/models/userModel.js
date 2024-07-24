import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    address: {
        village: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true }
    },
    phoneNumber: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;
