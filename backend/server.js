const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your_jwt_secret'; // Change this in production

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MySQL
const sequelize = new Sequelize('auth_example', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test connection
sequelize.authenticate()
    .then(() => console.log('MySQL Connected!'))
    .catch(err => console.error('Unable to connect to MySQL:', err));

// Define User model
const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
});

// Sync the database (creates tables if they don't exist)
sequelize.sync()
    .then(() => console.log('Database synced!'))
    .catch(err => console.error('Error syncing database:', err));

// Sign up route
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).send({ message: "User created", user: newUser });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(400).send({ message: "Email already in use" });
        } else {
            res.status(500).send({ message: "Internal server error", error: err });
        }
    }
});

// Sign in route
app.post('/api/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).send({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).send({ message: "Invalid password" });

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
