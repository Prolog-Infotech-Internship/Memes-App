import connectDb from "../../middleware/mongoose"
import Meme from "../../models/Meme";

const handler = async (req, res) => {

    if (req.method == 'POST') {

        try {
            const { userid, description, memeUrl, name } = req.body;
            const postId = ("" + (Math.random() + 1)).substring(2, 25)

            const newMeme = new Meme({ userId: userid, name,  postId, description, memeUrl });
            await newMeme.save();
            res.json(newMeme);
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