import dbConnect from "../../dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  await dbConnect();
//   res.status(200).send(req.body);
  if (req.method === "POST") {
    const { name, email, image } = req.body;
    console.log(req.body);
    const user = new User({
      name,
      email,
      image,
    });
    user.save(function (err) {
      if (err) {
        res.status(500).json({ message: "Error saving user to database." });
      } else {
        res.status(200).json({ message: "User saved to database." });
      }
    });
  } else {
    res.status(400).json({ message: "Invalid request." });
  }
}
