import dbConnect from "../../../dbConnect";
import MeetupModel from "../../../models/Meetup";   


export default async function handler(req, res) {
  await dbConnect();
  

  const { id } = req.query;
  if (req.method === "GET") {

    const meetup = await MeetupModel.findById(id);
    res.status(200).json(meetup);



    // res
    //   .status(200)
    //   .json({ message: `You are editing the meetup with the id of ${id}` });
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
