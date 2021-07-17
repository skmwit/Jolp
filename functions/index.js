const express = require("express");
const app = express();
const cors = require("cors");


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user1:sm0000@cluster0.jg6ur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000);
