import connectDb from "../../middleware/mongoose"
import Meme from "../../models/Meme";

const handler = async (req, res) => {

    if (req.method == 'GET') {

        try {
            const memes = await Meme.find();
            res.json(memes);


        } catch (error) {
            success = false
            console.error(error.message);
            res.status(500).json({ success, error: "Internal Server Error" });
        }
    }
 else {
    res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler)