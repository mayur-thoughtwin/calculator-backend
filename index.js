const express = require("express");
const { router } = require("./routes/route");
var cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json()); 
app.use("/", router);

app.listen(3001, () => {
    console.log("Server started on port: 3001");
});
