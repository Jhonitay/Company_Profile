const express =  require("express");
const { router } =  require("./routes/index.js");
const cors = require("cors");
const port = 5000;
const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Connected')
// } catch (error) {
//     console.error(error);
// }
app.use(cors({
  origin : "http://localhost:3000",
  credentials : true
}));
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(port);
});
// app.get("/", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });
// app.get("/about", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });


