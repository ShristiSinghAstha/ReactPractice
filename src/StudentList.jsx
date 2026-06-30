function StudentList({ students }) {
    return (
        <div>
            <h2>Student List</h2>
            {
                students.map((student, index) => (
                    <p key={index}>{student}</p>
                ))
            }
        </div>
    );
}
export default StudentList;
