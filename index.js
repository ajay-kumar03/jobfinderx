const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute.js");

const cors = require("cors")

const app = express();

// Connect to Mongodb Database
mongoose.connect(" ",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

mongoose.connection.once("open", () => console.log('Now connected in the cloud.'))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);