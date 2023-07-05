const express =  require("express");
const { router } =  require("./routes/index.js");

const port = 5000;

const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Connected')
// } catch (error) {
//     console.error(error);
// }

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World! Hello");
  console.log("tes")
});
app.use(router);
app.get("/about", (req, res) => {
  res.send("Hello World! Hello");
  console.log("tes")
});

app.listen(port, () => {
  console.log(port);
});
