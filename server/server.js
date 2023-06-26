import Express  from "express";
import db from "./config/database.js";
import router from "./routes/index.js";

const app = Express();

try {
    await db.authenticate();
    console.log('Database Connected')
} catch (error) {
    console.error(error);
}

app.use(Express.json);
app.use(router);

app.listen(5000, ()=> console.log('Server running at'));