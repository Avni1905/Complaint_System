const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const complaintRoutes = require('./routes/complaints');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);

//const PORT = process.env.PORT || 5000;

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
