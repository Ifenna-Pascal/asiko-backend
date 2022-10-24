import { PostModel as Post } from "../models/Post";
import { IPost } from "../../interface/post.interface";

class PostRepo {
    public async createPost (new_post: IPost): Promise<IPost>{
        try {
            const newPost = await Post.create(new_post);
            return newPost;
        }catch (e) {
            throw new Error(e.message);
        }
    }   

    public async findPostById(id: string): Promise<IPost | null> {
        try {
            const foundPost = await Post.findById(id);
            return foundPost;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new PostRepo();