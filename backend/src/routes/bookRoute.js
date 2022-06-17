import { Router } from "express";
import BookController from "../controllers/bookController.js";
const router = Router();
const bookController = new BookController();

// /book/add
router.post("/add",bookController.addBook);

router.get("/:id", bookController.getBookByID);

// ?limit = 20
router.get("/", bookController.getBooks);

router.put("/update/:id", bookController.updateBook);

router.delete("/delete/:id", bookController.deleteBook);

// /search/all?q=
router.get("/search/all", bookController.searchBook);

export default router;
