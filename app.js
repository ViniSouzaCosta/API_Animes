import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import mongoose from "./config/db-connection.js";

const app = express();

import Anime from "./models/Animes.js"
import User from "./models/User.js"

import animeRoutes from "./routes/animeRouter.js"
import userRoutes from "./routes/userRouter.js"



app.use(express.json());


app.get('/', (req, res) => {

    res.redirect('/api-docs');
});

import swaggerOptions from "./config/swagger-config.js";

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use("/", animeRoutes);
app.use("/", userRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// mongoose.connect("mongodb://127.0.0.1:27017/API_ANIMES")

const port = process.env.PORT || 4000;
app.listen(port, (error) =>{
    if(error){
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
});