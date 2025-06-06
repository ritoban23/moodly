import express from 'express';
import { User } from '../models/user';

const app = express.Router();

app.post('/user',async (req,res) => {
    const {name,email} = req.body;
    try{
        const user = new User({ name, email });
        const saved = await user.save();
        res.status(201).send(saved);
    }catch(err){
        res.status(500).send({ error: err });
    }
});

app.get('/users', async (req,res) => {
    const users = await User.find();
    res.status(200).send(users);
});

export default app;




