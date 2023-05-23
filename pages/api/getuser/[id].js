import connectDb from "../../../middleware/mongoose"
import User from "../../../models/User";

const handler = async (req, res) => {

    if (req.method == 'GET') {

        let success = true;
        
        try {
            const { id } = req.query
        
            let user = await User.findOne({userId: id})

            if(!user){
                success = false
                res.status(401).json({ success, error: "User Not Exist" });
            }
            console.log(user.name)
            res.status(200).json({success,useremail: user.email, username: user.userName, userpic: user.profilePic})
            
        }
        catch (error) {
            success = false
            res.status(500).json({ success, error: "Internal Server Error" });
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler)