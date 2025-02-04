import express from 'express';  
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authenticationRoutes from './routes/authentication.js';
import registrationRoutes from './routes/preEventRegistration.js';
import eventRouter from './routes/events.route.js';
import newsRouter from './routes/blog.route.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); 
app.use(cors({ origin: '*' }));
app.use('/', authenticationRoutes);
app.use('/', registrationRoutes);
app.use('/api/events', eventRouter);
app.use('/api/blog', newsRouter);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
