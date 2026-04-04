import { Suspense, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import UsersDetails from "./UsersDetails";
import ShowHideDetails from "./ShowHideDetails";

const User = ({user}) => {
    const {id, name, email, username} = user;
    const navigate = useNavigate();
    const [showInfo, setShowInfo] = useState(false);
    const [goHome, setGoHome] = useState(false);

    if(goHome){
        return <Navigate to='/'></Navigate>
    }


    const usersPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=> res.json());

    return ( 
        <div className="border border-amber-300 rounded-2xl p-4 mb-4">
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <button onClick={()=> navigate('/users/:userId')} className="btn btn-soft">About</button>
            <button onClick={()=>{setShowInfo(!showInfo)}} className="btn btn-soft">
                {showInfo ? 'Hide' : 'Show'} Info
            </button>
            {
                showInfo && <Suspense fallback={<span>loading...</span>}>
                    <ShowHideDetails
                    usersPromise={usersPromise}
                    ></ShowHideDetails>
                </Suspense>
            }
            <button onClick={()=> setGoHome(true)} className="btn btn-soft">Go Home</button>
        </div>
     );
}
 
export default User;