const News = (require("../models/News.model"))

module.exports.newsController = { 
    createNews: (req, res) => { //создание новости
        News.create({
            name: req.body.name,
            text: req.body.text,
            categoriesId: req.body.categoriesId
        }).then(() => {
            res.json("Новость добавлнеа")
        })
    },
    deleteNews: async (req, res) => { //удалить новость
        const data = await News.findByIdAndRemove(req.params.id)
        res.json("Новость удалена")
    },
    patchNews: async (req, res) => { //изменять по id
        const data = await News.findByAndUpdate(req.params.id,
            {

            })
            res.json(data)
    },
    getNews: async (req, res) => {
        const data = await News.find(req.params.id)//чтобы выводило по id
        res.json(data)
    },
    getNews: async (req, res) => { //вывод всех новостей
        const data = await News.find({})
        res.json(data)
    },
// - вывод всех новостей из определенной категории
    getNews: async (req, res) => {
        const data = await News.find({categories: req.params.id})
        res.json(data)
    }
};