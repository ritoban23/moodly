import express,{ Request, Response } from 'express';
import { MoodEntry } from '../models/moodentry';

const router = express.Router();

router.post('/mood', async (req: Request,res: Response) => {
    const {userId, mood, note} = req.body;
    const today = new Date(); //because ofc we are not going to take the date from the user
    today.setHours(0, 0, 0, 0);//We normalize today to midnight (i.e., same day always means same date object regardless of time).

    try{
        const existing = await MoodEntry.findOne({ userId, date: today });
         if (existing) return res.status(400).send({ message: 'Mood already logged for today' });

        const moodEntry = new MoodEntry({ userId, mood, note, date: today});
        const saved = await moodEntry.save();
        res.status(201).send(saved);
    }catch(err){
        res.status(500).send({ error: err });
    }
});

router.get('/mood/:userId', async (req: Request,res: Response) => {
    try{
        const entries = await MoodEntry.find({ userId: req.params.userId }).sort({ date: 1 });
        res.status(200).send(entries);
    }catch(err){
        res.status(500).send({ error: err });
    }
})

export default router;