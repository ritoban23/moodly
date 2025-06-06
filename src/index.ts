import express, { Express, Request, Response } from 'express';
import './db';
import userRoutes from './routes/user.routes';
import moodRoutes from './routes/mood.routes';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.use(userRoutes);
app.use(moodRoutes);

// Endpoint to create a user
app.post('/user', async (req: Request, res: Response) => {
 
});

// Endpoint to fetch all users
app.get('/users', async (req: Request, res: Response) => {

});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
