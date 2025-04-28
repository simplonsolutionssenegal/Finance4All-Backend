import express, { Request, Response, NextFunction } from 'express';
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(express.json());
app.use('/api/auth', authRoutes);

// Middleware pour la gestion des erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Erreur serveur' });
});

module.exports = app;
