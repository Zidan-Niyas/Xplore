import mongoose, { mongo } from "mongoose";

const blogSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, {timestamps: true});

const News = mongoose.model("News", blogSchema)

export default News;