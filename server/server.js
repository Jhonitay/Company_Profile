const express =  require("express");
const {noLogin, withLogin} =  require("./routes");
const { router } =  require("./routes/index.js");
const cors = require("cors");
const { verifyToken } = require("./controller/verify");
const port = 5000;
const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Connected')
// } catch (error) {
//     console.error(error);
// }
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173","http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
});

//laman tanpa login
app.use("/", noLogin);

//verifikasi token
app.use(verifyToken);

//laman dengan login
app.use("/", withLogin);


app.get("/about", (req, res) => {
  res.send("Hello World! Hello");
  console.log("tes")
});

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


