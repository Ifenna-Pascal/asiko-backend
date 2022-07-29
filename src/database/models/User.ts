import { model, Schema } from 'mongoose';
import { IUser } from '../../interface/auth.interface';

const userSchema = new Schema({
    firstName: {
        type: Schema.Types.String,
        trim: true,
        required: [true, ' Name is required'],
    },
    lastName: {
        type: Schema.Types.String,
        trim: true,
        required: [true, ' Name is required'],
    },

    email: {
        type: Schema.Types.String,
        required: [true, 'please add an email'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value: string) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
            },
            message: 'please enter a valid email',
        },
    },
    profileUrl: {
        type: Schema.Types.String,
        required: [true, 'Image url is needed'],
    },
});

export const UserModel = model<IUser>('User', userSchema);