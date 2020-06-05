var express = require("express");
var cors = require("cors");
// const path = require("path");
var router = express();

router.use(cors());

router.get("/time", function (req, res) {
  //var IST = new Date();
  /*IST.getTime() + 330 * 60000*/

  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var payload = {
    date: date,
    time: time,
  };
  res.send(payload);
});

const port = process.env.PORT || 5000;

/*
router.use(express.static("build"));
router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
*/
router.listen(port, function () {
  console.log("Server listening to port" + port);
});
