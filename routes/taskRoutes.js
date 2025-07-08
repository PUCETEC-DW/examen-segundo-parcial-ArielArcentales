import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getSummary
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/summary', getSummary);

export default router;