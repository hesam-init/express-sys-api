import si from "systeminformation";
import express from "express";
const app = express();
const port = 8585;

// get all data in one call
app.get("/", async (req, res) => {
  res.send(await si.getAllData());
});

// get cpu info
app.get("/cpu", async (req, res) => {
  res.send(await si.cpu());
});

// get cpu process
app.get("/cpu/process", async (req, res) => {
  res.send(await si.currentLoad());
});

// get gpu info
app.get("/gpu", async (req, res) => {
  res.send(await si.graphics());
});

// get os info
app.get("/os", async (req, res) => {
  res.send(await si.osInfo());
});

// get ram info
app.get("/ram", async (req, res) => {
  res.send(await si.mem());
});

// run app
app.listen(port, () => {
  console.log(`app running on port http://localhost:${port}`);
});
