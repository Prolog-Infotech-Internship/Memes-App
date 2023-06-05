import connectDb from "../../../middleware/mongoose"
import User from "../../../models/User";

const handler = async (req, res) => {

    if (req.method == 'PUT') {

        let success = true;
        
        try {
            const { id } = req.query
            
            let user = await User.findOneAndUpdate({userId: id},{profilePic: req.body.userprofile})
            
            let updateduser = await User.findOne({userId: id})

            res.status(200).json({success: true,updateduser})
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