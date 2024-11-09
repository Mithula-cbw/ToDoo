
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

const checkEmail =  async (req, res)=>{
    const { email} = req.body;

try {
    const user = await userModel.checkEmailExists(email);

    if(user.length > 0){
        console.log('Email already exists. Please login.');
        return res.status(200).json({ message: 'Email already exists. Please login.' });
    }else{
        console.log('Email not found, proceed with registration');
        return res.status(200).json({ message: 'Email not found, proceed with registration' });
    }

} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
}
    console.log(email, password);
}

//register new user
const registerUser = async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await userModel.checkEmailExists(email);

        if(user.length > 0){
            console.log('Email already exists. Please login.');
            return res.status(200).json({ message: 'Email already exists. Please login.' });
        }else{
            const passwordHash = await bcrypt.hash(password, 10);

            const newUser = userModel.registerNewUser( email, passwordHash);

            if(newUser){
                res.status(200).send(`new user created from ${email}`);
                console.log(`new user created from ${email}`)
            }else{
                res.status(400).send("couldn't register the user");
            }
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {checkEmail, registerUser};