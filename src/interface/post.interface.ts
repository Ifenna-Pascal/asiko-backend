import { Document, Types } from 'mongoose';

export interface IPost extends Document {
    imageUrl: string,
    content: string;
    user: Types.ObjectId;
    likes: number;
    new: boolean;
} 

export interface PostRequest extends Request {
    property: string;
}