import connectDb from "../../../middleware/mongoose"
import Meme from "../../../models/Meme";

const handler = async (req, res) => {

    if (req.method == 'GET') {
        
        try {
            const { id } = req.query
        
            let usermeme = await Meme.find({userId: id})

            res.status(200).json({success:true,usermeme})
            
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