console.log("Nakamu");
const express = require("express");
//creating an express application
const app = express();
//PORT CONSTANT
const PORT = 8080;
app.use(express.static('public'));
const userRouter = require("./routes/users");
app.use("/users", userRouter);


//===================// Middleware===========
app.use(express.urlencoded({extended: true}))
// for json code
app.use(express.json())

// midleware function
function logger(req , res, next) {
  console.log(req.originalUrl)
  next()
}
app.use(logger)


app.engine("ejs", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
    .toString()
    return callback(null , rendered)
  });
})

//views template and template engine set up
app.set('views', './views');
app.set('view engine', 'ejs');

//=========Routes====

app.get("/", (req, res) => {
  const options = {
  content: "this is my page",
};
res.render("users", options);
// res.send("testing")
});

// app.use('/posts', postsRouter);
// app.use('/travels', travelsRouter);
// app.use('/users', usersRouter);
// app.use("/api/users", users);


app.post("/users", (req, res) => {
  res.send("received a POST request for user!")
  })
 
  app.use((req, res, next) => {
      next(error(404, "Resource Not Found"));
    });
  
  app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({ error: err.message });
    });











app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
