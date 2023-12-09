import { Router } from "express";
import { messagesManager } from "../daos/models/mongodb.js";

export const messagesRouter = Router()


messagesRouter.post('/', async(req, res) =>{
    try {
        const { user, message, timestamp } = req.body;
        
        const newMessage = await messagesManager.create({
            user,
            message,
            timestamp
        });

        res.status(201).json(newMessage.toObject());
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})



