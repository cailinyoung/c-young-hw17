// dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


// local host 
const PORT = process.env.PORT || 3005;

// express semantics
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/api.js"));

// mongoose connection
const configDB="mongodb://localhost/workout"; 

mongoose.connect(
    process.env.MONGODB_URI || configDB, 
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,

    // connect or throw
}).then(() => console.log('connected to db'))
.catch(err=> console.error('an error has occured', err));

// app listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
