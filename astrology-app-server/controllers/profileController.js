import User from '../models/userModel.js';

// Get Profile
export const getProfile = async (req, res) => {
    try {
        const email = req.email;

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Profile
export const updateProfile = async (req, res) => {
    const { name, dob, address, phoneNumber, fatherName, motherName } = req.body;
    const email = req.email;

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: 'User not found' });

        user.name = name;
        user.dob = dob;
        user.address = address;
        user.phoneNumber = phoneNumber;
        user.fatherName = fatherName;
        user.motherName = motherName;

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
