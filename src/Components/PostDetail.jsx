import { useLoaderData, useNavigate } from "react-router";

const PostDetail = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();
    return ( 
        <div>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            <button onClick={()=>{navigate(-1)}} className="btn btn-secondary btn-soft">Go Back</button>
        </div>
     );
}
 
export default PostDetail;