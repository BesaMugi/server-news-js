const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    name: String,
    text: String,
    categoriesId: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
