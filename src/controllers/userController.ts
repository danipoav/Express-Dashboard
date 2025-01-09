import { Request, Response } from "express";
import { fetchAllUsers, fetchUserById, editUser, addUser, removeUser } from "../services/userService";

export const getAllUsers = (req: Request, res: Response) => {
    const users = fetchAllUsers();
    res.status(200).json(users);
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = fetchUserById(id);
    if (!user) {
        res.status(404).json({ message: 'User not found' })
        return;
    }
    res.status(200).json(user);
}

export const createUser = (req: Request, res: Response) => {
    const newUser = req.body;
    const users = addUser(newUser);
    res.status(201).json(users)
}

export const updateUser = (req: Request, res: Response) => {
    const updateBooking = req.body;
    const { id } = req.params;
    const users = editUser(id, updateBooking);
    res.status(200).json(users);
}

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const users = removeUser(id);
    res.status(200).json(users)
}