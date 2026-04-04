import { use } from "react";

const ShowHideDetails = ({usersPromise}) => {
    const {username, email, website} = use(usersPromise);
    
    return ( 
        <div>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
     );
}
 
export default ShowHideDetails;