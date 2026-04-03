const User = ({user}) => {
    const {id, name, email, username} = user;

    return ( 
        <div className="border border-amber-300 rounded-2xl p-4 mb-4">
            <h2>Name: {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
     );
}
 
export default User;