import { NextFunction, Request, Response } from "express"

import CharacterModel from "../models/CharacterModel"

export default class CharacterController {
    public static async getCharacters(req: Request, res: Response, next: NextFunction) {
        try {
            const characters = await CharacterModel.find()
            res.status(200).json({characters})
        } catch (error) {
            next(error)
        }
    }

    public static async createCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const character = await CharacterModel.create(req.body)
            res.status(201).json(character)
        } catch (error) {
            next(error)
        }
    }

    public static async getCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const character = await CharacterModel.findById(id)
            if (character) {
                res.status(200).json({character})
            } else {
                res.status(404).json({message: "Character not found"})
            }
        } catch (error) {
            next(error)
        }
    }

    public static async updateCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const character = await CharacterModel.findByIdAndUpdate(id, req.body)
            if (character) {
                res.status(200).json({character})
            } else {
                res.status(404).json({message: "Character not found"})
            }
        } catch (error) {
            next(error)
        }
    }

    public static async deleteCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const character = await CharacterModel.findByIdAndDelete(id)
            if (character) {
                res.status(200).json({character})
            } else {
                res.status(404).json({message: "Character not found"})
            }
        } catch (error) {
            next(error)
        }
    }
}