const { createServer } = require("node:http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
// Bind to every network interface. cPanel/Passenger supplies the port.
const hostname = "0.0.0.0";
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((request, response) => handle(request, response)).listen(port, hostname, () => {
      console.log(`Lucid Global Invest is running on http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
