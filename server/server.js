/// <reference types="express"/>

const app = require("express")();
const parser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(parser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//local DB
const users = [{ name: "You!", email: "your@gmail.com" }];

app.post("/login", (req, res) => {
  const email = req.body["email"];
  const user = users.find((user) => user.email === email);
  if (!user) {
    res.status(404).json({ message: "user not found" });
  } else {
    res.status(200).json({ name: user.name });
  }
});

app.listen(port, () => {
  console.log(`Login server listening on port ${port}`);
});
