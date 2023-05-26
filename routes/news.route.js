const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();

router.post('/news', newsController.createNews);
// - добавление новости
router.delete('/news/:id', newsController.deleteNews);
// - удаление новости
router.patch('/news/:id', newsController.patchNews);
// - изменени новости
router.get('/news/:id', newsController.getNewsById);
// - вывод определенной новости 
router.get('/news', newsController.getNews);
// - вывод всех новостей
router.get('/news/categories/:id', newsController.getNewsByCategories);
// - вывод всех новостей из определенной категории

module.exports = router;
