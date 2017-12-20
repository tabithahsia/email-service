var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
// const keys = require('./config/keys.js');

const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(keys.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var mailgun = require("mailgun-js")({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json() );
app.use(express.static(__dirname + '/../client/'));


app.post('/sendemail', function(req, res){
  res.send('POST REQUEST');
  // SENDGRID
  const msg = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.message
  }
  // const msg1 = {} // used to test errors
  // console.log('this is msg: ', msg);
  sgMail
  .send(msg)
  .then(() => {
    console.log('sgMail sent message successfully')
  })
  .catch(error => {
    console.error(error.toString());
    const {message, code, response} = error;
    // const {headers, body} = response;

    // MAILGUN
    mailgun.messages().send(msg, function (error, body) {
      console.log('mailgun message has been sent');
      console.log(body);
    })
  })
})



app.listen(port, function () {
  console.log('listening on port 3000');
})
