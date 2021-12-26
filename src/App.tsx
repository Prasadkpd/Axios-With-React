import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface post {
  title: string,
  body: string
}

export default function App() {
  const [post, setPost] = useState<post | null>(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response: AxiosResponse) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
        .put(`${baseURL}/1`, {
          title: "Hello World",
          body: "This is a updated post"
        })
        .then((response:AxiosResponse)=> {
          setPost(response.data);
        })
  }

  if (!post) return <h1>No Post</h1>;

  return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={updatePost}>Update Post</button>
      </div>
  );
}