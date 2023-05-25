const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller')

const router = Router();

router.post('/comments', commentsController.createComments);
// - добавление комментария к определенной новости
router.delete('/comments', commentsController.deleteComments);
// - удалени комментария
router.get('/comments', commentsController.deleteComments);
// - вывод всех комментариев определенной новости

module.exports = router;
