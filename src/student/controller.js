const pool = require('../../db')
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudentsAll, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getStudentById = (req, res) => {
    let id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

// const addStudent = (req, res) => {
//     let {name, email, age, dob } = req.body;

//     //verificar si existe el email

//     pool.query(queries.checkEmailExist, [email], (error, results)=>{
//         if( results.rows.length){
//             res.send("email already exists")
//         }
//         pool.query(queries.addStudent, [name, email, age, dob], (errror, results)=>{
//             if(error) throw error;
//             res.status(201).send("Student Create succesfully!")
//         })
//     })

    
// }
const deleteStudent = (req, res)=>{
    let id = req.params.id

    pool.query(queries.deleteStudent, [id], (error, results)=>{

        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does no exist in the database")
        }

        pool.query(queries.deleteStudent, [id], (error, results)=>{
            if (error) throw error;
            res.status(200).send('Student has been deleted')
        })
        
    })
}


const updateStudent = (req, res) =>{
    let id = req.params.id;
    let {name} = req.body;

    pool.query(queries.getStudentById, [id], (error, results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does no exist in the database")
        }

        pool.query(queries.updateStudent, [name, id], (error, results)=>{
            if (error) throw error;

            res.status(200).send("Student update name succesfully")
        })
    })

}


// supabase
const addNewStudent = (req, res) => {
    let {name, email, age, dob } = req.body;

    //verificar si existe el email
    pool.query(queries.checkEmailExist, [email], (error, results)=>{
        if(results.rows.length){
            res.send("email already exists")
        }
        
        pool.query(queries.addNewStudent, [name, email, age, dob], (errror, results)=>{
            if(error) throw error;
            res.status(201).send("Student Create succesfully!")
        })
    })

    
}

module.exports = {
    getStudents,
    getStudentById,
    // addStudent,
    deleteStudent,
    updateStudent,
    addNewStudent

};

