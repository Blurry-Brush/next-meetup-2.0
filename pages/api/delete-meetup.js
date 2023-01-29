import dbConnect from "../../dbConnect";
import MeetupModel from "../../models/Meetup";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "DELETE") {
    const { id } = req.body;
    const meetup = await MeetupModel.findByIdAndDelete(id);
    res.status(200).json(meetup);
  } else {
    res.status(400).json({ message: "Invalid request." });
  }
}
