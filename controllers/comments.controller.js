const Comments = (require("../models/Comments.model"))

module.exports.commentsController = {
    createComments: (req, res) =>{
        Comments.create({
            nameUsers: req.body.name,
            text: req.body.text,
            newsId: req.body.newsId
        }).then(() => {
            res.json("Новость добавлнеа")
        })
        // - добавление комментария к определенной новости
    },
    deleteComments: async (req, res) => {
        const data = await Comments.findByIdAndRemove(req.params.id)
        res.json("Комментарий удален")
        // - удалени комментария
    },
    getComments: async (req, res) => {
        const data = await Comments.find({news: req.params.id})
        res.json(data)
        // - вывод всех комментариев определенной новости
    }
};


