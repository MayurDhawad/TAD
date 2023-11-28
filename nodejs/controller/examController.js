let Exams = require("../model/examSchema");

const addExam = (req, res, next) => {
    let exam = new Exams({
        userName: req.body.userName,
        mobile: req.body.mobile,
        email: req.body.email,
        course: req.body.course,
    })
    exam.save()
        .then(() => {
            if (req.body.emailer && req.body.emailer === true) {
                next();
            }
            else {
                res.status(200).json({
                    message: "exam added"
                })
            }
        }).catch((err) => {
            console.log(err)
        });
}

const listExams = (req,res)=>{
    Exams.find().sort({createdAt:-1})
    .then((data)=>{
        res.status(200).json({
            examsList: data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.addExam = addExam;
module.exports.listExams = listExams;
