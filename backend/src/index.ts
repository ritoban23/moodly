import express, { Express, Request, Response } from 'express';
import { connectDB } from './db';
import userRoutes from './routes/user.routes';//it is not defined as userRoutes but whatever gets exported get imported as userRoutes here
import moodRoutes from './routes/mood.routes';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

// API health check
app.get('/', (_req: Request, res: Response) => {
  res.send({ message: 'Mood Tracker API is running!' });
});

app.use(userRoutes);
app.use(moodRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
