import connectDb from "../../../middleware/mongoose"
import Meme from "../../../models/Meme";

const handler = async (req, res) => {

  if (req.method == 'POST') {

    try {
      const { id } = req.query;
      const meme = await Meme.findById(id);
      let reported;
      
      if (meme.reports.includes(req.body.userid)) {
        reported = false;
        const index = meme.reports.indexOf(req.body.userid);
        meme.reports.splice(index, 1);
      }else{
        reported = true;
        meme.reports.push(req.body.userid)
      }
      await meme.save();
      res.status(200).json({reported,meme});
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