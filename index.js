const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const products = require("./mongodb/schema");
const app = express();
const port = 4000;

mongoose.connect("mongodb://localhost:27017/latihan");
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  products
    .find({})
    .then((product) => {
      res.json(product);
    })
    .catch((e) => {
      console.error("Gagal mengambil data", e);
      res.status(500).json({ error: "Gagal" });
    });
});

app.listen(port, () => {
  console.log(`Aplikasi berhasil berjalan di port ${port}`);
});
