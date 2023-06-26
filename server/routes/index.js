import  Express  from "express";
import { getUsers } from "../controller/Users.js";

const router = Express.Router();

router.get('/users', getUsers);

export default router;