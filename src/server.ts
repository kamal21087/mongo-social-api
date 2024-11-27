import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', true); // Suppresses the strictQuery warning

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetworkdb')
  .then(() => console.log('🌍 Connected to MongoDB'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
