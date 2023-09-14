/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';


class Post{

    create(formData){
        const url = "http://localhost:8000/api/create-post";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };
       return axios.post(url,formData, config)
    }
    getPosts(){
        const url = "http://localhost:8000/api/get-posts";
        return axios.get(url);
    }
    deletePost(id){
        const url = "http://localhost:8000/api/delete-post/"+id;
        return axios.get(url);
    }
}

export default new Post();