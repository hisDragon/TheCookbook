import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipe.route';
import SwaggerJSDoc from 'swagger-jsdoc';
import SwaggerUI from 'swagger-ui-express';
import m2s from 'mongoose-to-swagger';
import Recipe from './models/recipe.model';

dotenv.config();
const app = express();

// cors
app.use((_req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Private-Network", "true");
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);

    next();
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MANGO_URI!)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// swagger setup
const RecipeSchema = m2s(Recipe);
RecipeSchema.example = {
    recipeId: 1,
    title: "Brownie",
    description: "delectus aut autem",
    ingredients: [
        {
            name: "Sugar",
            quantity: 1000,
            quantityType: "g"
        }
    ],
    steps: [
        "Step 1 : Hi",
        "Step 2 : Bye."
    ],
    category: "CategoryB",
    servings: 10,
    cookingTime: 100,
    cuisine: "CONTINENTAL",
    tags: "my-tag",
    images: [
        "image1.png",
        "image2.png"
    ],
    addedBy: {
        $oid: "6885175aff44591e3dc926f0"
    }
}

const options: SwaggerJSDoc.OAS3Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'The Cookbook API',
            version: '1.0.1',
            description: 'The Cookbook API with Swagger documentation',
        },
        components: {
            schemas: {
                Recipe: RecipeSchema
            }
        }
    },
    apis: ['src/routes/*.ts'], // Path to your API routes
};

const specs = SwaggerJSDoc(options);
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(specs));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
