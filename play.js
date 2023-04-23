const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
  });

  conn.on("data", () => {
    console.log("data");
  });

  return conn;
};

console.log("Connecting ...");
connect();