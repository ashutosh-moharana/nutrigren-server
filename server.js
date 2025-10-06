const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express();

app.use(cors( 
  {
    origin:"http://localhost:5173", 
    credentials:true
  }
));
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Server is Running ....");
});

app.use("/api/auth", require("./routes/auth.route"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
