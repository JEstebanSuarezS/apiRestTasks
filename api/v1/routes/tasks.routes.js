const { Router } = require('express')
const tasksController = require('../../../controllers/tasksController')

const router = Router();

router.get('/', tasksController.getAll)
router.get('/:id', tasksController.get)
router.post('/', tasksController.create)
router.put('/:id', tasksController.update)
router.delete('/:id', tasksController.destroy)

module.exports = router;