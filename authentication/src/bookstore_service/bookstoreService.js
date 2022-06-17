import db from "../db.config/db.config.js";
import verifys from "../middleware/verify.js";
import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/list", await db, await verifys, async (req, res) => {
  try {
    //console.log(await axios.get("http://localhost:8000/book"))
    axios
      .get("http://localhost:8000/book")
      .then((response) => {
        const orderObject = response.data;
        res.send(orderObject);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});
router.post("/add", await db, await verifys, async (req, res) => {
  try {
    axios
      .post("http://localhost:8000/book/add", req.body)
      .then((response) => {
        res.send(response.data);
        // console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
    // res.send('book added done')
  } catch (error) {
    res.send(error);
  }
});
router.get("/list/:id", await db, await verifys, async (req, res) => {
  // console.log(req.params.id)
  try {
    axios
      .get("http://localhost:8000/book/" + req.params.id)
      .then((response) => {
        // console.log(response.data)
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // res.send('book added done')
  } catch (error) {
    res.send(error);
  }
});
router.put("/update/:id", await db, await verifys, async (req, res) => {
  // console.log(req.params.id)
  try {
    axios
      .put("http://localhost:8000/book/update/" + req.params.id, req.body)
      .then((response) => {
        // console.log(response.data)
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // res.send('book added done')
  } catch (error) {
    res.send(error);
  }
});
router.delete("/delete/:id", await db, await verifys, async (req, res) => {
  // console.log(req.params.id)
  try {
    axios
      .delete("http://localhost:8000/book/delete/" + req.params.id)
      .then((response) => {
        // console.log(response.data)
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // res.send('book added done')
  } catch (error) {
    res.send(error);
  }
});
router.get("/search/all", await db, await verifys, async (req, res) => {
  try {
    console.log(req.query);
    axios
      .get("http://localhost:8000/book/search/all" + "?q=" + req.query.q)
      .then((response) => {
        // console.log(response.data)
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.send(error);
  }
});

export default router;
