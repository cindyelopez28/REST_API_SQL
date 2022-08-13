var {sequelize} = require("sequelize");
const db = require("../models");
async function getCourses(res) {
    let result = await db.Courses.findAll({
        attributes:[
            "userId",
            "title",
            "description",
            "estimatedTime",
            "materialsNeeded",
    ]
})
    res.json(result)
}



module.exports = getCourses;