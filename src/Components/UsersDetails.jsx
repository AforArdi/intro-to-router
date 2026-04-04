import { useLoaderData } from "react-router";

const UsersDetails = () => {
    const user = useLoaderData();
    
    return ( 
        <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
     );
}
 
export default UsersDetails;