const {
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY
} = require("./constants");
// Stores the active TCP connection object.
let connection;
const handleUserInput = function(stdin, conn) {
  stdin.on("data", data => {
    if (data === "\u0003") {
      conn.end();
      process.exit();
    }
    if (data === "w") {
      conn.write(MOVE_UP_KEY);
    }
    if (data === "a") {
      conn.write(MOVE_LEFT_KEY);
    }
    if (data === "s") {
      conn.write(MOVE_DOWN_KEY);
    }
    if (data === "d") {
      conn.write(MOVE_RIGHT_KEY);
    }
    if (data === "e") {
      conn.write("Say: EEAATT");
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
