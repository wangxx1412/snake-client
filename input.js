const handleUserInput = function(stdin, conn) {
  stdin.on("data", data => {
    if (data === "\u0003") {
      conn.end();
      process.exit();
    }
  });
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  handleUserInput(stdin, conn);
  return stdin;
};
