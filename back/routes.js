module.exports = app => {
  app.get("/", (req, res) => {
    res.json("Hello World from my API!");
  });
};
