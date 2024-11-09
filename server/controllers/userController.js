
const userModel = require('../models/userModel')


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

module.exports = {checkEmail};