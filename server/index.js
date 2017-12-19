var express = require('express');
var bodyParser = require('body-parser');
const keys = require('./config/keys');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.SENDGRID_API_KEY);

var mailgun = require("mailgun-js")({apiKey: keys.MAILGUN_API_KEY, domain: keys.MAILGUN_DOMAIN});

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json() );
app.use(express.static(__dirname + '/../client/'));


app.post('/sendemail', function(req, res){
  // console.log('this is the req', req.body);
  res.send('POST REQUEST');

  // SENDGRID

  // const msg = {
  //   to: req.body.to,
  //   from: req.body.from,
  //   subject: req.body.subject,
  //   text: req.body.message
  // }
  // // console.log('this is msg: ', msg);
  // sgMail.send(msg)
  // .then(() => {
  //   console.log('sgMail sent message successfully')
  // })
  // .catch(error => {
  //   console.error(error.toString());
  //   const {message, code, response} = error;
  //   const {headers, body} = response;
  // })

  // MAILGUN
  var data = {
    to: req.body.to,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.message
  }
  mailgun.messages().send(data, function (error, body) {
    console.log('message has been sent');
    console.log(body);
  });
})



app.listen(port, function () {
  console.log('listening on port 3000');
})
