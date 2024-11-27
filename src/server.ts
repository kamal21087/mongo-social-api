import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import routes
import userRoutes from './routes/api/userRoutes';
import thoughtRoutes from './routes/api/thoughtRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Suppress strictQuery warning in Mongoose
mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetworkdb')
  .then(() => console.log('🌍 Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/thoughts', thoughtRoutes); // Thought routes

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).send('404: Endpoint not found');
});

// Start the server
app.listen(PORT, () => console.log(`🌍 Server is running on http://localhost:${PORT}`));
