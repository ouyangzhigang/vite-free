const express = require("express");
const app = express();

const manifest = require("./dist/manifest.json");

app.set("view engine", "pug");
app.use(express.static("./dist"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "服务端集成",
    message: "hello, 服务端集成！",
    index: manifest["index.html"].file,
    verdor: manifest["index.html"].imports.vendor,
    css: manifest["index.html"].css[0],
  });
});

app.listen(3000);
