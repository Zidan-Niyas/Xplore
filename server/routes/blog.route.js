import express from "express";
import News from "../models/blogSchema";
const router = express.Router();

router.get('/get', async (req, res) => {
    try {
        const response = await News.find();
        const data =  await response.json();
        return res.send(JSON.stringify(data));
    }catch(err) {

        res.send(err);
        
    }
});

export default router;