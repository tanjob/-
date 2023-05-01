const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');

// 登录控制器
exports.login = (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

    db.get(sql, (err, row) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else if (!row) {
            res.status(401).send('Invalid email or password');
        } else {
            res.send(`Welcome, ${row.name}`);
        }
    });
};

// 注册控制器
exports.register = (req, res) => {
    const { name, email, password } = req.body;
    const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

    db.run(sql, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.send('User created');
        }
    });
};
