import express from 'express';
import { MoodEntry } from '../models/moodentry';

const app = express.Router();

app.post('/mood', async (req,res) => {
    const {userId, mood, note} = req.body;
    const today = new Date(); //because ofc we are not going to take the date from the user
    today.setHours(0, 0, 0, 0);

    try{
        const moodEntry = new MoodEntry({ userId, mood, note, date: today});
        const saved = await moodEntry.save();
        res.status(201).send(saved);
    }catch(err){
        res.status(500).send({ error: err });
    }
});

app.get('/mood/mood/:userId', async (req,res) => {
    try{

    }catch(err){
        res.status(500).send({ error: err });
    }
})

export default app;