import axios from "axios";


type Post = { 
    id: number
    name: string;
    price: number;
    description: string;
};


export default async function PostsPage() { 
	const res = await axios.get<Post[]>("http://localhost:3000/products");
	const posts = res.data; 
	
	return (

		<div> <h1>Posts (Axios)</h1> 
      <ul> 
		    {posts.slice(0, 5).map((p) => ( 
		      <li key={p.id}>{p.name}{p.price}</li> ))} 
		    </ul> 
		</div>

 ); }