const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');
const SlideRoute =require('./Routes/SlideRoutes');

const PORT = 3000;
//  object for express
const app = express();
// Middleware
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send(`CBK Technologies Server Is Running On => http://localhost:${PORT}`);
});



app.use('/api/get',SlideRoute)

  // Start the server
  app.listen(PORT, () => {
    console.log(`CBK Technologies Server Is Running On => http://localhost:${PORT}`);
  });

