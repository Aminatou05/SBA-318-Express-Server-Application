console.log("Nakamu");
const express = require("express");
//creating an express application
const app = express();
//PORT CONSTANT
const PORT = 8080;

app.use(express.static("public"));
const fs = require("fs");

//===================// Middleware===========
app.use(express.urlencoded({ extended: true }));
// for json code
app.use(express.json());

// midleware function
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.use(logger);

app.engine("ejs", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`)
      .replace("#href#", `${options.href}`)
      .replace("#text#", `${options.text}`);
    return callback(null, rendered);
  });
});
//views template and template engine set up
app.set("views", "./views");
app.set("view engine", "ejs");

//=========Routes====
const users = require("./routes/users");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const travelsRouter = require("./routes/travels");

app.get("/", (req, res) => {
  const options = {
    title: "Rendering Views with Express",
    content: "Welcome to my Expess App!",
  };
  res.render("index", options);
  // res.send("hello")
});

//This page navigate to a  real state website
app.get("/newPage", (req, res) => {
  const options = {
    title: "Lenco Realty",
    content:
      "At Lenco Realty our most critical task is finding what is most important to you and turning it into a reality.",
    text: "Go to Lenco Realty",
    href: "https://lencorealty.com/",
  };

  res.render("newPage", options);
});

app.use("/posts", postsRouter);
app.use("/travels", travelsRouter);
app.use("/users", usersRouter);
app.use("/api/users", users);

app.post("/users", (req, res) => {
  res.send("received a POST request for user!");
});

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
