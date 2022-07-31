import { model, Schema} from 'mongoose';
import { IPost } from '../../interface/post.interface';

const postSchema = new Schema({ 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Post user is required"]
    },

    imageUrl: {
        type: Schema.Types.String,
        required: [true, "Post image is required"]
    },

    content: {
        type: Schema.Types.String,
        required: [true, "Post content is required"]
    },

    likes: {
        type: Number,
        required: [true, "Post likes is required"]
    }
},{ timestamps: true});

export const PostModel = model<IPost>('Post', postSchema)
