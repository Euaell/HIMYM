import { Schema, Document, model } from "mongoose"

export interface ICharacter extends Document {
    name: string
    characterName: string
    description: string
    image: string
    user: Schema.Types.ObjectId
}

const CharacterSchema: Schema<ICharacter> = new Schema({
    name: {
        type: String,
        required: true
    },
    characterName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export default model<ICharacter>('Character', CharacterSchema)