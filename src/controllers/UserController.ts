import { NextFunction, Request, Response } from 'express'

import UserModel from '../models/Usermodel'

export default class UserController {
    public static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserModel.find()
            res.status(200).json({users})
        } catch (error) {
            next(error)
        }
    }

    public static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await UserModel.create(req.body)
            res.status(201).json(user)
        } catch (error) {
            next(error)
        }
    }

    public static async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const user = await UserModel.findById(id)
            if (user) {
                res.status(200).json({user})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        } catch (error) {
            next(error)
        }
    }

    public static async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const user = await UserModel.findByIdAndUpdate(id, req.body)
            if (user) {
                res.status(200).json({user})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        } catch (error) {
            next(error)
        }
    }

    public static async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const user = await UserModel.findByIdAndDelete(id)
            if (user) {
                res.status(200).json({user})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        } catch (error) {
            next(error)
        }
    }
}