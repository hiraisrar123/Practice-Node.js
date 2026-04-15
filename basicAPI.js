const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const data = {
        name: "Hello, Hira!",
        dep: "CS"
    };

    res.end(JSON.stringify(data));
}).listen(1000, () => {
    console.log("Server running on http://localhost:1000");
});