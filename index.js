console.log("Nakamu");
const express = require("express");
//creating an express application
const app = express();
//PORT CONSTANT
const PORT = 8080;
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// // for json code
// app.use(express.json());

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index")
  

});

// app.use(logger)

//linking up my user routes
// const userRouter = require("./routes/users");

// app.use("/users", userRouter);

//midleware function
// function logger(req , res, next) {
//     console.log(req.originalUrl)
//     next()
// }


// app.post("/region", (req, res) => {
//   res.render("users");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
