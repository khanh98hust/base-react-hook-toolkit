const express = require("express"),
      CORS = require("cors"),
      bodyParser = require("body-parser"),
      app = express()

app.use(CORS());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const list = ["hiahi", "cucu", "dumeadf", "bfdsa"];

app.get("/", (req, res) => {
  res.json(list);
});

app.post("/", (req, res) => {
  return res.json(list.push(req.body.work))
});

app.put('/', (req, res)=>{
  return list.splice(req.body.i, 1)
})

app.listen(9000, () => console.log("server start"));
