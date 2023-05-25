const Categories = (require("../models/Categories.model"))

module.exports.categoriesController = {
    createCategories: (req, res) => { 
        Categories.create({
            name: req.body.name,
        }).then(() => {
            res.json("Категория добавлнеа")
        })
        // - добавление категории
    },
    deleteCategories: async (req, res) => {
        const data = await Categories.findByIdAndRemove(req.params.id)
        res.json("Категория удалена")
        // - удаление категории
    },
    getCategories: async (req, res) =>{
        const data = await Categories.find({})
        res.json(data)
        // - вывод всех категорий
    }
}
