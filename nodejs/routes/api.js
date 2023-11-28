let express = require('express');
let router = express.Router();
let user = require('../controller/userController');
let emailer = require('../controller/emailerController');
let contact = require('../controller/contactController');
let hire = require('../controller/hireController');
let exam = require('../controller/examController');

router.post('/add',user.addUser,emailer.addEmailer);
router.post('/add-exam',exam.addExam,emailer.addEmailer);
router.post('/add-hire',hire.addHire,emailer.addEmailer);
router.post('/add-contact',contact.addContact);
router.post('/add-emailer',emailer.addEmailer);
router.post('/send-email',emailer.sendEmail);
router.post('/send-thankyou-email',emailer.sendThankYouEmail);

// list details apis

router.get('/user-list',user.listUsers);
router.get('/exam-list',exam.listExams);
router.get('/hire-list',hire.listHire);
router.get('/contact-list',contact.listContact);
router.get('/emailer-list',emailer.listEmailer);


module.exports = router;
