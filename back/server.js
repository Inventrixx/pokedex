const express = require("express");

const app = express();

const routes = require("./routes");

app.use(function(req, res, next) {
  //allow CROS Origin from my localhost domain to my API.
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);
app.listen(8080, function() {
  console.log("Listening at localhost:8080");
});
