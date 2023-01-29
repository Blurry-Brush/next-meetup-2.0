import dbConnect from "../../dbConnect";
import MeetupModel from "../../models/Meetup";
// import { unstable_getServerSession } from "next-auth/next"
// import {authOptions} from "./auth/[...nextauth]"

export default async function handler(req, res) {

  await dbConnect();
  // res.status(200).send(req.body)
  // const session = await unstable_getServerSession(req, res, authOptions)

  if (req.method === "POST") {
    const { title, description, address, image, creator,date} = req.body;
    console.log("req is ",req.body);
    const meetup = new MeetupModel({
      title,
      description,
      address,
      image,
      creator,
      date,
    });
    meetup.save(function (err) {
      if (err) {
        res.status(500).json({ message: "Error saving meetup to database." });
      } else {
        res.status(200).json({ message: "Meetup saved to database." });
      }
    });
  } else {
    res.status(400).json({ message: "Invalid request." });
  }
}
