const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req, res) =>{
    res.render('users/signup');
});

router.post('/users/signup', (req, res) =>{
    const{ name, email, password, confirm_password} = req.body;
    const errors = [];
    if(name.length <= 0){
        errors.push({text: 'Por favor inserte un nombre'});
    }
    if(email.length <= 0){
        errors.push({text: 'Por favor inserte un email'});
    }
    if(password != confirm_password){
        errors.push({text: 'Contrasenas no coinciden'});
    }
    if(password.length <=0){
        errors.push({text: 'Por favor inserte contrasena'})
    }
    if(password.length < 4){
        errors.push({ text: 'Contrasena menos a 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('users/signup', {errors, name, email, password, confirm_password});
    }else{
        res.send('ok')
    }
    

});

router.get('/users/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
});

module.exports = router;