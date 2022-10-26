const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const port = process.env.PORT || 5000;
const category = require("./data/category.json")
const courses = require("./data/cours.json")


app.get("/", (req, res) => {
    res.send("Courses API Running")
})

app.get("/course-category", (req, res) => {
    res.send(category);
})
app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses)
    } else {
        const categoryCourses = courses.filter(cours => cours.category_id === id)
        res.send(categoryCourses)
    }


})
app.get("/courses", (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log("Dragon surver running", port);
})