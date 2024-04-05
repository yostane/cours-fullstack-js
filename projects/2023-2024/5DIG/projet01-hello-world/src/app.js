// require est le système d'import commonJS utilisé par nodejs
const fs = require("fs");

const files = fs.readdirSync(".");

console.log(files);
