'use strict';

const express = require('express');
let ArticleController = require('../controllers/article');

let router = express.Router();

// rutas de prueba

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.prueba);

// rutas para articulos
router.post('/save', ArticleController.save);
router.get('/articles/:dataUrl?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id/', ArticleController.delete);

module.exports = router;