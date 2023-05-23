import connectDb from "../../middleware/mongoose"
import User from "../../models/User";
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const handler = async (req, res) => {

    if (req.method == 'POST') {

        let success = true;

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email })
            if (!user) {
                success = false
                return res.status(400).json({ success, error: "Please enter correct credentials" })
            }

            const passCompare = await bcrypt.compare(password, user.password)

            if (!passCompare) {
                success = false
                return res.status(400).json({ success, error: "Please enter correct credentials" })
            }

            const data = {
                userId: user.userId,
                email: user.email
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET);

            res.json({ success, authToken, userId: user.userId })

        } catch (error) {
            success = false
            console.error(error.message);
            res.status(500).json({ success, error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler)