let Hire = require("../model/hireSchema");

const addHire = (req, res, next) => {
    let hire = new Hire({
        userName: req.body.userName,
        mobile: req.body.mobile,
        email: req.body.email,
        companyName: req.body.companyName,
    })
    hire.save()
        .then(() => {
            if (req.body.emailer && req.body.emailer === true) {
                next();
            }
            else {
                res.status(200).json({
                    message: "user added"
                })
            }
        }).catch((err) => {
            console.log(err)
        });
}

const listHire = (req,res)=>{
    Hire.find().sort({createdAt:-1})
    .then((data)=>{
        res.status(200).json({
            hireList: data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.addHire = addHire;
module.exports.listHire = listHire;
