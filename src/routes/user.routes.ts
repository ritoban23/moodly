import express,{Request, Response} from 'express';
import { User } from '../models/user';

const router = express.Router();

router.post('/user',async (req: Request,res: Response) => {
    const {name,email} = req.body;
    try{
        const user = new User({ name, email });
        const saved = await user.save();
        res.status(201).send(saved);
    }catch(err){
        res.status(500).send({ error: err });
    }
});

router.get('/users', async (req: Request,res: Response) => {
    const users = await User.find();
    res.status(200).send(users);
});

export default router;




