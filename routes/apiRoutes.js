const notes = require('express').Router()
const {readFromFile, readAndAppend, deleteNote} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { title, text} = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
  
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.json('Error in adding note');
  }
});

notes.delete('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  deleteNote(req.params.id, './db/db.json');
  res.json('success')
})

module.exports = notes;