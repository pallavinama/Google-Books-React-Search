require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


app.use(express.static("client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});