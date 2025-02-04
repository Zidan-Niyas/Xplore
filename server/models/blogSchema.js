import mongoose, { mongo } from "mongoose";

const newsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, {timestamps: true});

const News = mongoose.model("News", newsSchema)

export default News;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    }
}, {timestamps: true});

export const BLog = mongoose.model("Blog", blogSchema);

