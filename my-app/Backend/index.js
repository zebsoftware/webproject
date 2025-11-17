
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// const app = express();

// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>console.log("Database is connected"));
// app.listen(5001)
// app.use(cors());
// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}));
// index.js
import express from "express";
import cors from "cors";

// Import routes
import loginRoute from "./routes/login.js";
import registerRoute from "./routes/register.js";
import contactRoute from "./routes/contact.js";
import productRoutes from "./routes/product.js";

const app = express();


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);
app.use("/api/contact", contactRoute);
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.send("Backend server is running!");
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
