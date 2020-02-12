// Stores the active TCP connection object.
let connection;
const handleUserInput = function(stdin, conn) {
  stdin.on("data", data => {
    if (data === "\u0003") {
      conn.end();
      process.exit();
    }
    if (data === "w") {
      conn.write("Move: up");
    }
    if (data === "a") {
      conn.write("Move: left");
    }
    if (data === "s") {
      conn.write("Move: down");
    }
    if (data === "d") {
      conn.write("Move: right");
    }
  });
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  handleUserInput(stdin, connection);
  return stdin;
};

module.exports = { setupInput };
