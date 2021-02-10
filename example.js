const myVar = require("fs"); // importer le module file system
const todo = require("./ressource");
try {
  myVar.appendFileSync("test.txt", "Bonjour");
} catch (error) {
  console.log(error);
}
