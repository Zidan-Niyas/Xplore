import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    id: { type: Number, required: true},
    name: { type: String, required: true },
    eventName: { type: String},
    description: { type: String },
    date: { type: String, required: true },
    time: { type: String, default: "TBD" },
    location: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true },
    imageDetails: { type: String },
    fee: { type: String, default: "TBD" },
    registerLink: { type: String},
    contacts: [
        {
            name: { type: String, required: true },
            phone: { type: String, required: true }
        }
    ],
    rules: { type: String },
    prizePool: { type: String},
}, {timestamps: true});

const Event = mongoose.model("Event", eventSchema);

export default Event;
