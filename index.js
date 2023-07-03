const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({msg: "Not to day!"});
});


// http://localhost:8080/hello?name=Mirek
app.get("/hello", (req, res) => {
    res.json({msg: `Hello ${req.query.name} :)`})
});

// http://localhost:8080/math?x=5&y=2
app.get("/math", (req, res) => {
    res.json({result: parseInt(req.query.x) + parseInt(req.query.y)})
});

app.listen(8080);
