import React,{useState, useEffect } from 'react'
import postService from '../services/postService';
import UpdateModCompo from './UpdateModCompo';
//import '../../node_modules/dist/css/bootstrap.min.css';
function ShowCompo() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async()=> {
        setPosts(await postService.getPosts());
    }
    

    useEffect(()=> {
        fetchPosts();
    },[]);

    const deletePost = async(id, e) => {
        var response = await postService.deletePost(id);
        if(response.data.success == true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
            
        }
        else{
            alert(response.data.msg);
        }
    }
    

  return (
    <div className='App'>
        <h1 style= {{color:'slateblue'}}>Posts Data</h1>
        {posts.data != undefined && posts.data.data.length > 0 && (
            <table style={{width:'100%'}} border='1'>
                <thead>
                    <th style={{color:'blue'}}>Title</th>
                    <th>Date</th>
                    <th style={{color:'green'}}>Image</th>
                    <th style={{color:'red'}}>Delete</th>
                    <th style={{color:'dark'}}>Edit</th>
                </thead>
                <tbody>
                    {posts.data.data.map(post=>(
                        <tr>
                            <td>{post.title}</td>
                            <td>{post.date}</td>
                            <td>{post.image}</td>
                            <td>
                                <button id={post._id} onClick={(e) => deletePost(post._id,e)}>Delete</button>
                            </td>
                            <td><UpdateModCompo/></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        )}
    </div>
  );
}

export default ShowCompo