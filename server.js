const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

mongoose
 	.connect(process.env.MONGO_URL, {
    	useNewUrlParser: true,
    	useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify:true
  	})
  	.then(console.log("Connected to DataBase sucessfully!"))
  	.catch((err) => console.log(err));

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(5000, () => console.log('Server is running on port 5000.'));