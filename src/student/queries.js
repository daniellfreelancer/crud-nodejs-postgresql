// const getStudentsAll = "SELECT * FROM students";

const getStudentById = "SELECT * FROM newstudents WHERE id = $1"
// const checkEmailExist = "SELECT s FROM students s WHERE S.EMAIL = $1"
const checkEmailExist = "SELECT s FROM newstudents s WHERE S.EMAIL = $1"
// const addStudent = "INSERT INTO students(name, email, age, dob) VALUES ($1, $2, $3, $4)"
const deleteStudent = 'DELETE FROM newstudents WHERE id = $1'
const updateStudent = "UPDATE newstudents SET name = $1 WHERE id = $2 "

// supabaseQueries

const addNewStudent = "INSERT INTO newstudents(name, email, age, dob) VALUES ($1, $2, $3, $4) "
const getStudentsAll = "SELECT * FROM newstudents";

module.exports = {
    getStudentsAll,
    getStudentById,
    checkEmailExist,
    // addStudent,
    deleteStudent,
    updateStudent,
    addNewStudent
}