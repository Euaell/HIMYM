import { Schema, Document, model } from "mongoose"
import validator from "validator"

export interface IUnverifiedUser extends Document {
    email: string
}

function validateEmail(email: string) {
    return validator.isEmail(email)
}

const UnverifiedUserSchema: Schema<IUnverifiedUser> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validateEmail,
            message: (props: any) => (`${props.value} is not a valid email address`)
        }
    }
})

export default model<IUnverifiedUser>('UnverifiedUser', UnverifiedUserSchema)