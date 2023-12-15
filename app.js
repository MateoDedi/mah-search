const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// const dbURI = process.env.MONGODB_URI || process.env.DB_URI
const dbURI = process.env.DB_URI
const authRoutes = require('./routes/authRoutes');
const jobsRouter = require('./routes/jobsRoutes');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
// app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// database connection
mongoose.connect(dbURI)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/jobs', requireAuth, (req, res) => res.render('viewJobs'));
app.use(authRoutes);
app.use(checkUser, jobsRouter);
app.use(checkUser, userRouter);

module.exports = app