import { Schema, Document, model } from "mongoose"
import validator from "validator"

export interface IUser extends Document {
    name: string
    email: string
    password: string
}

function validateEmail(email: string) {
    return validator.isEmail(email)
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validateEmail,
            message: (props: any) => (`${props.value} is not a valid email address`)
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    }
})

export default model<IUser>('User', UserSchema)