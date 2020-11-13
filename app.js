const http = require("http");
const fileSystem = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("  <head><title>Enter Message</title> </head>");
    res.write(
      "<body><form action='/message' method ='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fileSystem.writeFileSync("message.txt", "DUMMY");
    res.writeHead(302, { Location: "/" });
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("  <head><title>My first Page</title> </head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
