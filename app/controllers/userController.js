const bcrypt = require('bcrypt');
const User = require('../models/User');

async function registerUser(req, res){
    const reqUser = req.body;
    const hashedPassword = await bcrypt.hash(reqUser.password, 10);

    const user = {
        username: reqUser.username,
        email: reqUser.email,
        password: hashedPassword
    }

    try {
        const newUser = new User(user)
        const saveUser = await newUser.save();
        res.status(201).json({ message: 'User register successfully' });
    } catch (err) {
        console.error('Error register user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function loginUser(req, res){
    const reqUser = req.body;
    const user = {
        email: reqUser.email,
        password: reqUser.password
    }

    try {
        const users = await User.find({ email: user.email }, 'email password');

        const isPasswordValid = await bcrypt.compare(user.password, users[0].password);

        if(!isPasswordValid) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json({ message: 'User login successfully'});
        }
    } catch (err) {
        console.error('Error login user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function logoutUser(req, res){
    res.status(200).json({ messsage: 'User logout successful' });
}

module.exports = { registerUser, loginUser, logoutUser }