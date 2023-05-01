const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const authController = require('./controllers/authController');
const port = 3000;
const path = require('path');

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 处理POST请求的中间件
app.use(express.urlencoded({ extended: true }));
app.use('/', authRoutes);
// 注册页面路由
app.get('/register', (req, res) => {
    res.render('register');
});

// 处理注册请求
app.post('/register', (req, res) => {
    // 处理注册逻辑，将数据保存到数据库等
    const { username, password } = req.body;
    console.log(`Received registration request for ${username} with password ${password}`);
    res.send('Registration successful!');
});

// 登录页面路由
app.get('/login', (req, res) => {
    res.render('login');
});

// 处理登录请求
app.post('/login', (req, res) => {
    // 处理登录逻辑，验证用户名和密码等
    const { username, password } = req.body;
    console.log(`Received login request for ${username} with password ${password}`);
    res.send('Login successful!');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});