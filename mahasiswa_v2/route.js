const route = require("express").Router();
const Mahasiswa = require("./model");


route.get('/mahasiswaV2', async (req, res) => {
  try {
    const results = await Mahasiswa.findAll();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send("Error pak: " + error.message);
  }
});

route.post("/mahasiswaV2", async (req, res) => {
  const { nim, nama_lengkap, kelas, alamat } = req.body;

  try {
    await Mahasiswa.sync();
    const result = await Mahasiswa.create({
      nim,
      nama_lengkap,
      kelas,
      alamat,
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send("Error pak: " + error.message);
  }
});



module.exports = route;
