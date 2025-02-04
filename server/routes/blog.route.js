import express from "express";
import News from "../models/blogSchema.js";
const router = express.Router();

router.get('/get', async (req, res) => {
    try {
        const response = await News.find();
        return res.json(response)
    }catch(err) {

        return res.json(err);
        
    }
});
export default router;