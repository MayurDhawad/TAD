let Contact = require("../model/contactSchema");

const addContact = (req, res, next) => {
    let contact = new Contact({
        userName: req.body.userName,
        mobile: req.body.mobile,
        email: req.body.email,
        lookingFor: req.body.lookingFor,
        query:req.body.query,
    })
    contact.save()
        .then(() => {
            if (req.body.emailer && req.body.emailer === true) {
                next();
            }
            else {
                res.status(200).json({
                    message: "contact added"
                })
            }
        }).catch((err) => {
            console.log(err)
        });
}

const listContact = (req,res)=>{
    Contact.find().sort({createdAt:-1})
    .then((data)=>{
        res.status(200).json({
            usersList: data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.addContact = addContact;
module.exports.listContact = listContact; 
