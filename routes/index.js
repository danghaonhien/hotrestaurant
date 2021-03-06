const router = require("express").Router();

// const path = require("path");
// Getting / prepended to everything
// Hey I declared routes here.
const apiRoutes = require("./apiRoutes");

// /something was prepended to every route inside of here
// Prepend /api to all of the routes declared inside of apiRoutes
//  /api

// This will prepend /api to anyroute declared within apiRoutes
router.use("/api", apiRoutes);
// router.get("*", (req, res) => {
//   if (process.env.NODE_ENV === "production") {
//     res.sendFile(path.join(__dirname, "index.html"));
//   }
// });
// console.log(path.join(__dirname, "build", "index.html"));
// console.log(path.join(__dirname, "client", "build", "index.html"));
// console.log(__dirname);
module.exports = router;
