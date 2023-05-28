import connectDb from "../../../middleware/mongoose"
import Meme from "../../../models/Meme";

const handler = async (req, res) => {

  if (req.method == 'POST') {

    try {
      const { id } = req.query;
      const meme = await Meme.findById(id);
      let liked;
      
      if (meme.likes.includes(req.body.userid)) {
        liked = false;
        const index = meme.likes.indexOf(req.body.userid);
        meme.likes.splice(index, 1);
      }else{
        liked = true;
        meme.likes.push(req.body.userid)
      }
      await meme.save();
      res.status(200).json({liked,meme});
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