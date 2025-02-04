import express from 'express';
import Event from '../models/event.model.js';

const router =home express.Router();

router.get('/get/:category', async (req, res) => {
    console.log('getting events...');
    
    const category = req.params.category;
    try {
        let events;
        if (category === "all") {
            events = await Event.find(); 
        } else {
            events = await Event.find({ category });  
        }

     
        res.json(events); 
    }
    catch (err) {
        res.status(400).send(err); 
    }
});

export default router;
