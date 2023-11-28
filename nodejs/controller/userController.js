let Users = require("../model/userSchema");

const addUser = (req, res, next) => {
    let user = new Users({
        userName: req.body.userName,
        mobile: req.body.mobile,
        email: req.body.email,
        language: req.body.language,
    })
    user.save()
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

const listUsers = (req,res)=>{
    Users.find().sort({createdAt:-1})
    .then((data)=>{
        res.status(200).json({
            usersList: data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.addUser = addUser;
module.exports.listUsers = listUsers;
