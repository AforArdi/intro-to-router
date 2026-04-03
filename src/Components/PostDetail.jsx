import { useLoaderData } from "react-router";

const PostDetail = () => {
    const posts = useLoaderData();
    return ( 
        <div>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
        </div>
     );
}
 
export default PostDetail;