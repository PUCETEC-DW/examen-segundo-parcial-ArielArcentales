import * as model from '../models/taskModel.js';
import { validateTask } from '../utils/validator.js';

export const getTasks = (req, res) => {
  res.status(200).json(model.getAllTasks());
};

export const createTask = (req, res) => {
  try {
    const task = req.body;
    validateTask(task);
    task.completed = false;
    model.addTask(task);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updated = model.updateTaskStatus(id, completed);
    res.status(200).json(updated);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const deleteTask = (req, res) => {
  try {
    model.deleteTask(req.params.id);
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const getSummary = (req, res) => {
  const summary = model.getSummary();
  res.status(200).json(summary);
};