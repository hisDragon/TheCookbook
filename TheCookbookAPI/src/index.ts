import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipe.route';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MANGO_URI!)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
