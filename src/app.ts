import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// TODO: Ajouter routes ici
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API fonctionnelle 🎉');
});

export default app;
