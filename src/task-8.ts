import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
    if(posts.length > 0) {
  console.log(posts[0].title);
  // console.log(posts[0].id); // ok number
  // console.log(posts[0].username); // error vs. property does not exist on Post => invalid property access 
    };
});


// logic chain of code processing:
// axios.get<Post[]>() => response.data (→ Post[]) => fetchPosts() (→ Promise<Post[]>) => posts (→ Post[]) => posts[0].title (→ string)