import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);
import config from './config';
import passportConfig from './config/passport';

import userCtrl from './controllers/userCtrl';
import contestsCtrl from './controllers/contestsCtrl';
import submissionsCtrl from './controllers/submissionsCtrl';

import { LoginRoot, ContestRoot, ContestListRoot, SubmissionRoot, JudgmentRoot, MyaccountRoot, StandingsRoot } from './roots';

var PORT = process.env.PORT || 3003;
passportConfig(passport);

const app = express();
app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var dataObj = {},
loginBundle = "",
contestBundle = "",
contestlistBundle = "",
submissionBundle = "",
judgmentBundle = "",
myaccountBundle = "",
standingsBundle = "";
fs.readFile('./dist/js/login.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  loginBundle = data || "";
})
fs.readFile('./dist/js/contest.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contestBundle = data || "";
})
fs.readFile('./dist/js/contestlist.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contestlistBundle = data || "";
})
fs.readFile('./dist/js/submission.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  submissionBundle = data || "";
})
fs.readFile('./dist/js/judgment.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  judgmentBundle = data || "";
})
fs.readFile('./dist/js/myaccount.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  myaccountBundle = data || "";
})
fs.readFile('./dist/js/standings.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  standingsBundle = data || "";
})
app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/contestlist/:category', (req, res) => {
  let data = {
    category: req.params.category
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contestlistBundle, ContestListRoot, "contestlist"));
});
app.get('/contest/:contest', (req, res) => {
  let data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contestBundle, ContestRoot, "submission"));
});
app.get('/submission/:contest', (req, res) => {
  let data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, submissionBundle, SubmissionRoot, "submission"));
});
app.get('/judgment/:contest', (req, res) => {
  let data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, judgmentBundle, JudgmentRoot, "judgment"));
});
app.get('/myaccount', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, MyaccountRoot, "myaccount"));
});
app.get('/standings', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, standingsBundle, StandingsRoot, "standings"));
});;



app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});
app.post('/auth', passport.authenticate('local-signup'), userCtrl.login);
app.get('/getMe', userCtrl.getMe);
app.get('/logout', userCtrl.logout);
app.get('/users', userCtrl.read);
app.put('/users/:id', userCtrl.update);

app.get('/contestss', contestsCtrl.read);
  app.get('/contestss/:id', contestsCtrl.readOne);
  app.post('/contestss', contestsCtrl.create);
  app.put('/contestss/:id', contestsCtrl.update);
  app.delete('/contestss/:id', contestsCtrl.destroy);

app.get('/submissionss', submissionsCtrl.read);
  app.get('/submissionss/:id', submissionsCtrl.readOne);
  app.post('/submissionss', submissionsCtrl.create);
  app.put('/submissionss/:id', submissionsCtrl.update);
  app.delete('/submissionss/:id', submissionsCtrl.destroy);


app.get('/health', (req, res) => res.send('OK'));

var mongoUri = 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@talentwarz.zvqdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
 console.log("Connected to mongoDB");
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: 0; font-family: Helvetica; }
                  a { text-decoration: none; color: #000; }
                </style>
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
