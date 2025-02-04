import express from "express";
import News from "../models/blogSchema.js";
import { BLog } from "../models/blogSchema.js";
const router = express.Router();

router.get('/get/news', async (req, res) => {
    try {
        const response = await News.find();
        return res.json(response)
    }catch(err) {

        return res.json(err);
        
    }
});

router.get('/get/blog', async (req, res) => {
    try {
        const response = await BLog.find();
        return res.json(response);
    }catch(err) {
        res.json({error: error});
    }
    
})
export default router;