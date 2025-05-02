const fs = require("fs");
const path = require("path");

const template = fs.readFileSync("./dist/client/index.html", "utf-8");
const { render } = require("./dist/server/server-entry");

const reoutersToRender = path
  .readdirSync("src/pages")
  .map((j) => j.replace(".jsx", "").toLowerCase());
