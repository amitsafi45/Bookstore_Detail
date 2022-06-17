import express from "express";
import "dotenv/config";
import auth from "./src/route/router.js";
import bookstore from './src/bookstore_service/bookstoreService.js'
import fileUpload from 'express-fileupload'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
app.use("/api", auth);
app.use('/api/book',bookstore)
app.listen(process.env.PORT,() => {
  
  console.log("listening");
});
