const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/news.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/categories.route"));

(async () => {
    try {
        mongoose.connect('mongodb+srv://besausk:token95@cluster0.lm3pfxi.mongodb.net/') 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
    }
})()

app.listen(3000, () => {
    console.log('Сервер запущен успешно')
});