console.log("Nakamu");
const express = require("express");
//creating an express application
const app = express();
//PORT CONSTANT
const PORT = 8080;
// app.use(express.static("./styles"));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
// for json code
app.use(express.json())





app.set("view engine", "ejs");
app.use(logger);

app.get("/" , (req, res) => {
  // console.log("here")
  res.render("index",  {text: " Hello World" })

})




//linking up my user routes
const userRouter = require("./routes/users");
// const postRouter = require("./routes/posts");

app.use("/users", userRouter);
// app.use("/post", postRouter);

// midleware function
function logger(req , res, next) {
  console.log(req.originalUrl)
  next()
}



app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
