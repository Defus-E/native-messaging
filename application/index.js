const App = require("./src/App.js");
const app = new App({ show: true });

process.stdin.on("readable", () => {
  let chunk = null;

  while ((chunk = process.stdin.read()) !== null) {
    app.chunks.push(chunk);
  }

  app.readMessage();
});
