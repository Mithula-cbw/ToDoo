
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

//helper function
const checkIfEmailExists = async (email) => {
    const user = await userModel.checkEmailExists(email);
    return user.length > 0;
  };

//check if a user already registered with this email
const checkEmail =  async (req, res)=>{
    const { email} = req.body;

try {
    const userExist = await checkIfEmailExists(email);

    if(userExist){
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
        const userExist = await checkIfEmailExists(email);

        if(userExist){
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

//user log in
const logIn = async(req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await userModel.getUserByEmail(email);
        if (user) {
          // Compare password with hashed password in the database
          const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) {
                console.log('Login successful', user);
                return res.status(200).json({ message: 'Login successful', user });
            } else {
                console.log('Incorrect password');
                return res.status(400).json({ message: 'Incorrect password' });
            }
        } else {
          return res.status(404).json({ message: 'User not found' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in', error: err });
      }
    }

module.exports = {checkEmail, registerUser,logIn};