const express = require("express");
const app = express();

app.get("/test", (req, res) => {
res.json("Hello test")
});
app.listen(4000);
