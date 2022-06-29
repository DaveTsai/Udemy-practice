const fs = require("fs");
const fileName = process.argv[2] || "Project"
/* synchronous
fs.mkdir('NewFile', { recursive: true }, (err) => {
    console.log("In the callback")
    if (err) throw err;
});
*/
try {
    fs.mkdirSync(fileName)
    fs.writeFileSync(`${fileName}/index.html`, "")
    fs.writeFileSync(`${fileName}/style.css`, "")
    fs.writeFileSync(`${fileName}/script.js`, "")
} catch (e) {
    console.log("Error!")
    console.log(e)
}