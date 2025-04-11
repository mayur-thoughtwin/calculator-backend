const express = require("express");
const { router } = require("./routes/route");

const app = express();

app.use(express.json()); 
app.use("/", router);

app.listen(3001, () => {
    console.log("Server started on port: 3001");
});
