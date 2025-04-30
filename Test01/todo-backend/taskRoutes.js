const express = require('express');
const router = express.Router();
const db = require('./db');


router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


router.post('/', (req, res) => {
  const { assigned_to, status, due_date, priority, comments } = req.body;
  db.query('INSERT INTO tasks SET ?', { assigned_to, status, due_date, priority, comments }, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...req.body });
  });
});


router.put('/:id', (req, res) => {
  const { assigned_to, status, due_date, priority, comments } = req.body;
  db.query('UPDATE tasks SET ? WHERE id = ?', [{ assigned_to, status, due_date, priority, comments }, req.params.id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});


router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

module.exports = router;
