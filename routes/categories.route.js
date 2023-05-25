const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller')

const router = Router();

router.post('/categories', categoriesController.createCategories)
// - добавление категории
router.delete('/categories', categoriesController.deleteCategories)
// - удаление категории
router.get('/categories', categoriesController.getCategories)
// - вывод всех категорий

module.exports = router;
