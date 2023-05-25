const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
    nameUsers: String,
    text: String,
    newsId: String,
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;