import './Cards.css';
import Card from './Card';
import { useEffect, useState } from 'react';

function Cards({}) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    (() => fetchPosts(setPosts))();
  }, []);

  return (
    <div className="Cards">
      {posts && posts.map((post) => <Card {...post} key={post.id}></Card>)}
    </div>
  );
}

async function fetchPosts(setPosts) {
  const url = 'https://jsonplaceholder.typicode.com/';
  const [users, posts] = await Promise.all([
    fetch(url + 'users').then((response) => response.json()),
    fetch(url + 'posts').then((response) => response.json()),
  ]);
  setPosts(
    posts.map((post) => ({
      ...post,
      username: users[post.userId - 1].username,
    }))
  );
}

export default Cards;
