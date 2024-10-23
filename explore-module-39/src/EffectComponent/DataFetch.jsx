import { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    // console.log(posts);
  }, []);
  return (
    <div>
      {posts.map((post, index) => (
        <DataDisplay key={index} post={post}></DataDisplay>
      ))}
    </div>
  );
}
