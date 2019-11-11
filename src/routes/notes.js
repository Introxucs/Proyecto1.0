const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');
});

router.post('/notes/new-note', (req, res) =>{
    const {nombre, description, electrodomestico, comuna, number, direction} = req.body;
    res.send('ok')
});

router.get('/notes', (req, res) =>{
    res.render('notes/all-notes');
});

router.get('/notes/edit/:id', async (req, res)=>{
    await Note.findById(req.params.id);
    res.render('note/edit-note', {note});
});

router.put('/notes/edit-note/:id', (req, res) =>{

});

router.delete('/notes/delete/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
});

module.exports = router;