import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import path from "path";
dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 1000;
//const URI = process.env.MONGO_URI;

//console.log('MongoDB URI:', URI);

// Connect to MongoDB

const URI = "mongodb+srv://tanvigupta836:GXIF7Ni2pP7bJZHn@cluster0.iieny2z.mongodb.net/";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection error:', err));



// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
