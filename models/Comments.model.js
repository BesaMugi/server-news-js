const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
    nameUsers: String,
    text: String,
    newsId: {
        ref:"news",
        type: mongoose.SchemaTypes.ObjectId
    },
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;