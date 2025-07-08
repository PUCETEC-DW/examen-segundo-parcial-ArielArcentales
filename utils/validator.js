export const validateTask = (task) => {
  const { id, title, description, priority } = task;
  if (!id || !title || !description || typeof priority !== 'number') {
    throw new Error('Campos requeridos inválidos');
  }
  if (priority < 1 || priority > 5) {
    throw new Error('La prioridad debe estar entre 1 y 5');
  }
};