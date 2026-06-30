function User({user}){

    //console.log(props);
    return(
        <div>
        
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        </div>
    );
}
export default User;
