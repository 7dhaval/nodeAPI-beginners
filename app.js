const express = require("express");
const app = express();
const dotenv = require('dotenv');
// const port = process.env.PORT;
dotenv.config();
const bodyParser = require("body-parser");
const port = 4012;
const mongoose = require('mongoose');


//db connection 
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,  useUnifiedTopology: true, 
})
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${error}`);
})

app.use(bodyParser.json());


//bringing routes
const PostRoute = require("./routes/route");
const { error } = require("console");
// app.use("/", getPosts);

app.use("/", PostRoute);

app.listen(port, () => {
    console.log(`A NodeJS API is listening on Port: ${port}`);
});

