// function Student(){
//     return (
//         <h1>I am Student Component</h1>
//     );
// }
// export default Student;

function Student({name,age}){
    return (
        <>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        </>
    );
}
export default Student;