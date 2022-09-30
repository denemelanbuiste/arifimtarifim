const axios = require("axios");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

async function copy() {
  const { data } = await axios.get("https://metin2pserver.net/");

  fs.writeFileSync("index.html", data);

  console.log(data);
}

// copy();

app.listen(3000);
