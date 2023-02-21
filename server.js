const express = require('express');
const app = express();
const port = 4000;
const studentsRoutes = require('./src/student/routes')


app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json({
        message:'Database Server',
        success: true
    })
});

app.use('/api/v1/students', studentsRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));


