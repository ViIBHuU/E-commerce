import express from "express";
import Connection from "./database/db.js";
import DefData from "./database/default.js";
import router from "./database/routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app=express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);
const PORT=8000;


Connection();

app.listen(PORT,()=> console.log(`Server is runnig succesfully on port ${PORT}`));

DefData();