import dbConnect from "../../dbConnect";
import MeetupModel from "../../models/Meetup";

export default async function handler(req, res) {
  await dbConnect();
  // res.status(200).send(req.body)
  if (req.method === "GET") {
    const meetups = await MeetupModel.find({});
    res.status(200).json(meetups);
  } else {
    res.status(400).json({ message: "Invalid request." });
  }
}
