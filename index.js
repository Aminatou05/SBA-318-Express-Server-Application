console.log("Nakamu");
const express = require("express");
//creating an express application
const app = express(); 
//PORT CONSTANT
const PORT = 8080;



  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  }) 