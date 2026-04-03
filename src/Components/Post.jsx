import { Link } from "react-router";

const Post = ({post}) => {
    const {id, title, body} = post;
    return ( 
        <div className="border border-r-amber-600 rounded-2xl p-4 mb-4">
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
     );
}
 
export default Post;
<div>

</div>