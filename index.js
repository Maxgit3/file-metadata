let express = require("express");
let cors = require("cors");
let multer = require("multer");

let app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// app.post("/api/fileanalyse", multer().single("upfile"),)

app.post("/api/fileanalyse", upload.single("upfile"),function (req, res) {
  console.log(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
