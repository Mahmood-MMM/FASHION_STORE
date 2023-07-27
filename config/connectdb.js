require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) => {
    console.log(`mongod connected with server: ${data.connection.host}`);
  });
}

module.exports = connectDB