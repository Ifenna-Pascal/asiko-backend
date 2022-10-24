import postRepo from "../database/repository/post.repo";
import { IPost } from "../interface/post.interface";

class PostService {
    public async createPost(postData: IPost): Promise<IPost | null> {
        try {
            const post = await postRepo.createPost(postData)
            return post;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // public async deletePost(id:string): Promise<IPost | null> {
    //     try {
    //         const deletePost = postRepo.
    //     } catch (error) {
            
    //     }
    // }
}

export default new PostService();