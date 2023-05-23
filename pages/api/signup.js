import connectDb from "../../middleware/mongoose"
import User from "../../models/User";
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {

    if (req.method == 'POST') {

        let success = true;

        try {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                success = false
                return res.status(400).json({ success, error: "Sorry User with this email already exists" })
            }
            const userId = ("" + (Math.random() + 1)).substring(2, 13)
            const salt = await bcrypt.genSalt(10);
            const SecurePass = await bcrypt.hash(req.body.password, salt)//Generate hash value of a password

            let createUser = new User({
                userId: userId,
                userName: req.body.userName,
                email: req.body.email,
                password: SecurePass
            })

            const data = {
                userId: userId,
                email : req.body.email
            }
            const authToken = jwt.sign(data, "Secret@123");
            //   console.log(jwtData);

            //   res.json(user)

            if(createUser.save()){
                res.status(200).json({success,authToken, userId: userId})
            }else{
                res.status(400).json({ success: false,authToken })
            }

        } catch (error) {
            success = false
            return res.status(500).json({ success, errors: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler)