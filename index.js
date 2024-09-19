const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serviceRoutes = require('./routes/services_route');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json());
app.use('/api', serviceRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
