import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetail = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();

    // const params = useParams();
    // this line bottom is direct destructuring of the above line
    const {postId} = useParams();
    console.log(postId);

    return ( 
        <div>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            <button onClick={()=>{navigate(-1)}} className="btn btn-secondary btn-soft">Go Back</button>
        </div>
     );
}
 
export default PostDetail;