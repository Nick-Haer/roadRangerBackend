const express = require('express');

const app = express();

const mongoose = require('mongoose');

const routing = require('./routes');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routing);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/roadRangerdb',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// ('mongodb://<dbuser>:<dbpassword>@ds259079.mlab.com:59079/heroku_x64n8r5l');

app.get('/', (req, res) => {
  res.status(200).json('connected');
});

app.listen(PORT, function() {
  console.log(`Backend server now listening on PORT ${PORT}!`);
});
