import { Link, useNavigate } from "react-router";

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate('/');
    }

    return ( 
        <div className="border border-r-amber-600 rounded-2xl p-4 mb-4">
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button className="btn btn-primary btn-soft">Show Details</button>
            </Link>
            <button onClick={handleNavigate} className="btn btn-primary btn-soft">Go to Home Tab</button>
        </div>
     );
}
 
export default Post;
<div>

</div>