const express =  require("express");
// const newRoute =  require("./routes/newRoute.js");
const { router } =  require("./routes/withlogin.js");
const cors = require("cors");
const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Connected')
// } catch (error) {
//     console.error(error);
// }
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:4173","http://localhost:3000"],
//     credentials: true,
//   })
// );

app.use(express.json());

app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
});
 app.use(router);


app.get("/about", (req, res) => {
  res.send("Hello World! Hello");
  console.log("tes")
});

app.listen(5000, () => {
  console.log("Server sedang berjalan di port 5000");
});
// app.get("/", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });
// app.get("/about", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });



