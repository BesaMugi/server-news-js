const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    name: String,
    text: String,
    categoriesId: {
        ref:"categories",
        type: mongoose.SchemaTypes.ObjectId
    }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
