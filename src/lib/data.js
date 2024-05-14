import {Post, User} from "./model"
import {connectToDb} from "./connectToDb"
async function getUserPosts(id) {
    //code
}
export async function getPosts() {
    try {
        connectToDb();
        const posts =await Post.find();
        return posts
    } catch (error) {
        console.log(error);
    }
}
export async function getPost(slug) {
    try {
        connectToDb();
        const post =await Post.findOne(slug);
        return post
    } catch (error) {
        console.log(error);
    }
}
export async function getUsers() {
    try {
        connectToDb();
        const users =await User.find();
        return users
    } catch (error) {
        console.log(error);
    }
}
export async function getUser(id) {
    try {
        connectToDb();
        const user =await User.findById(id);
        return user
    } catch (error) {
        console.log(error);
    }
}

