let express = require('express');
let app = express();

app.listen(8899, () => {
    console.log("Server start at port 8899");
})

app.get("/api/welcome", (req, res, next) => {
    console.log("/api/welcome");
    res.json({msg: "Welcome eiei"});
});