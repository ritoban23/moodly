import express,{Request, Response} from 'express';
import { User } from '../models/user';
import { z } from 'zod';
import { CreateUserRequestBody } from '../types/requestTypes'

const router = express.Router();

// Zod schema
const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

router.post('/user',async (req: Request<{},{},CreateUserRequestBody>,res: Response) => {
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




