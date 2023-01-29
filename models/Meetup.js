import mongoose, { Schema } from "mongoose";

const MeetupSchema = new mongoose.Schema({
    title: String,
    description: String,
    address: String,
    image: String,
    creator: String,
    date: Date,
});

// MeetupSchema.add({ date: Date });

// export default mongoose.model("MeetupModel", MeetupSchema) || mongoose.models.MeetupModel ;
export default mongoose.models.MeetupModel || mongoose.model("MeetupModel", MeetupSchema);
// module.exports = mongoose.model("MeetupModel", MeetupSchema);
// mongoose.models = {};
// export default mongoose.model("MeetupModel", MeetupSchema);