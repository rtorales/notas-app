const { request } = require('express');
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-note', async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({text: 'no cargó título'})
    }
    if (!description) {
        errors.push({ text: 'no cargó description' })
    }
    if (errors.length > 0) {
        res.render('notes/new-notes' , {
            errors, title, description
        });
    } else {
        const newNote = new Note({ title, description });
        await newNote.save();
        req.flash('success_msg', 'Nota Agregada correctamente');
        res.redirect('/notes')
    };
});

router.get('/notes', async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes });
});


router.get('/notes/edit/:id', async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    console.log(note);
    res.render('notes/edit-note', {note})
});

router.put('/notes/edit-note/:id', async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Nota Editada correctamente');
    res.redirect('/notes')
});

router.delete('/notes/delete/:id', async (req, res) => {
    await Note.findOneAndDelete(req.params.id);
    req.flash('success_msg', 'Nota Eliminada correctamente');
    res.redirect('/notes')
});

module.exports = router;
