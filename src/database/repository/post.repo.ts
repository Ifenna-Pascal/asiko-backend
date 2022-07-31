import { PostModel as Posts } from "../models/Post";
import { IPost } from "../../interface/post.interface";

class PostRepo {
    public async createPost (new_post: IPost): Promise<IPost>{
        try {
            const newPost = await Posts.create(new_post);
            return newPost;
        }catch (e) {
            throw new Error(e.message);
        }
    }   
}

export default new PostRepo();