import connectDb from "../../middleware/mongoose"
import Meme from "../../models/Meme";

const handler = async (req, res) => {

    if (req.method == 'POST') {

        try {
            const meme = await Meme.findById(req.params.id);
            meme.likes += 1;
            await meme.save();
            res.json(meme);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
          }
    }
 else {
    res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler)