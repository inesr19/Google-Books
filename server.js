const express = require("express");
const path = require("path");
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

// morgan
app.use(logger('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Check if database is the problem
const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
