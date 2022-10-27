const express = require('express')
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/courses.json');
const courseCategories = require('./data/courseCategories.json');

app.get('/', (req, res) =>{
    res.send('Courses API running')

});

app.get('/course-categories', (req, res)=>{
    res.send(courseCategories)
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})
app.get('/courses/:id',(req,res) =>{
   const id = req.params.id;
   const selectCourses = courses.find(n=> n.id ===id);
   res.send(selectCourses);
})
app.get('/courseCategories/:id',(req,res) =>{
    const id= req.params.id;
    const category_courses =courseCategories.find( n=>n.id ===id)
    res.send(category_courses)
})


app.listen(port, ()=>{
    console.log('tech academy server running on port', port)
})