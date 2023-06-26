import users from "../models/usermodel.js";

export const getUsers = async(req,res)=>{
    try {
        const users = await users.findall();
        res.json(users);

    } catch (error) {
        console.log(error);
    }
}