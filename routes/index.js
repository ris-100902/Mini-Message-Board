const express = require('express');
const router = express.Router();

const messages = [
  {
    id : "1",
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id : "2",
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req,res) => {
    res.render('index', { title: "Mini Messageboard", message: messages});
});

router.get('/new', (req,res) => {
    res.render('form');
});

router.get('/messages/:messageId',(req,res) => {
    const id = parseInt(req.params.messageId);
    const message = messages.find((msg) => msg.id == id);
    res.render('message', {title : "Message Details", message});
});

router.post('/new', (req,res) => {
    console.log("Message sent");
    const newMessage = {
        id : (messages.length + 1).toString(),
        text : req.body.msg,
        user : req.body.user,
        added : new Date()
    };
    messages.push(newMessage);
    res.redirect('/');
});

module.exports = router;