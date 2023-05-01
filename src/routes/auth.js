const express = require('express');
const router = express.Router();

// 登录页面路由
router.get('/login', (req, res) => {
    res.render('login');
});

// 注册页面路由
router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;