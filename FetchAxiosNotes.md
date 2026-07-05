(1)Fetch API - GET Request
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Fetch GET Request</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;

2: Fetch API - POST Request
function App(){
    const [post, setPost] = useState();

    const createPost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "React",
                body: "Learning Fetch API",
            }),
        })
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.log(error));
    };
    return (
        <div>
            <button onClick={createPost}>Create Post</button>
            { post && (

            <div>
                    <h2>Post Created Successfully!</h2>
                    <p><strong>ID:</strong> {post.id}</p>
                    <p><strong>Title:</strong> {post.title}</p>
                    <p><strong>Body:</strong> {post.body}</p>
                </div>
            )}
        </div>
    );
}
export default App;

3: Fetch API - PUT Request
function App(){
    const [post, setPost] = useState(null);

    const updatePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated title",
                body: "Updated Body",
            }),
        })
        .then((response) => response.json())
        .then((data) => {console.log(data);setPost(data)})
        .catch((error) => console.log(error));
    };
    return (
        <div>
            <button onClick={updatePost}>Update Post</button>
            {post && (

            <div>
                    <h2>Post Updated Successfully!</h2>
                    <p><strong>ID:</strong> {post.id}</p>
                    <p><strong>Title:</strong> {post.title}</p>
                    <p><strong>Body:</strong> {post.body}</p>
                </div>
            )}
        </div>
    );
}
export default App;

4: Fetch API - DELETE Request
function App(){
    const [post, setPost] = useState(null);

    const deletePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method: "DELETE", 
            })
        
        .then(() => {setPost("Post deleted successfully!");})
        .catch((error) => console.log(error));
    };
    return (
        <div>
            <button onClick={deletePost}>Delete Post</button>
            <div>
                    <h2>Post deleted Successfully!</h2>
                    {post && <h2>{post}</h2>}
                </div>
        </div>
    );
}
export default App;

5: Axios - GET Request
import axios from "axios";

function App(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>setPosts(response.data))
        .catch((error)=>console.log(error));
    },[]);
    return (
        <div>
        <h1>Axios GET</h1>
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>
        ))}
        </div>
    );
}
export default App;

6: Axios - POST Request
function App(){
    const [posts, setPosts] = useState([]);

    const createPost=()=>{
        axios
        .post("https://jsonplaceholder.typicode.com/posts",{
            title: "React",
            body: "Axios Post",
        })
        .then((response)=>{
    setPosts([...posts, response.data]);
})
        .catch((error)=>console.log(error));
    };
    return (
        <div>
        <button onClick={createPost}>Create Post</button>
        
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>
        ))}
        </div>
    
    )
}
export default App;


7: Axios - PUT Request
function App(){
    const [posts, setPosts] = useState([]);

    const updatePost=()=>{
        axios
        .put("https://jsonplaceholder.typicode.com/posts/1",{
            title: "update",
            body: "Axios Put",
        })
        .then((response)=>{
    setPosts([...posts, response.data]);
})
        .catch((error)=>console.log(error));
    };
    return (
        <div>
        <button onClick={updatePost}>update Post</button>
        
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>
        ))}
        </div>
    
    )
}
export default App;

8: Axios - DELETE Request
function App(){
    const [posts, setPosts] = useState([]);

    const deletePost=()=>{
        axios
        .put("https://jsonplaceholder.typicode.com/posts/1",{
            title: "delete",
            body: "Axios delete",
        })
        .then((response)=>{
    setPosts([...posts, response.data]);
})
        .catch((error)=>console.log(error));
    };
    return (
        <div>
        <button onClick={deletePost}>delete Post</button>
        
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>
        ))}
        </div>
    
    )
}
export default App;

9: Axios using async/await
function App(){
    const [posts, setPosts] = useState([]);

    const fetchPosts = async() => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        }catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchPosts();
    },[]);
    return(
        <div>
            <h1>Axios Async Await</h1>
            {posts.map((post)=>(
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
export default App;


