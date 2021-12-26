import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

interface post {
  title: string,
  body: string
}

export default function App() {
  const [post, setPost] = useState<post | null>(null);

  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
  );
}