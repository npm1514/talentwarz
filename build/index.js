"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cryptr = _interopRequireDefault(require("cryptr"));

var _config = _interopRequireDefault(require("./config"));

var _passport2 = _interopRequireDefault(require("./config/passport"));

var _userCtrl = _interopRequireDefault(require("./controllers/userCtrl"));

var _contestsCtrl = _interopRequireDefault(require("./controllers/contestsCtrl"));

var _submissionsCtrl = _interopRequireDefault(require("./controllers/submissionsCtrl"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cryptr = new _cryptr["default"](_config["default"].key);
var PORT = process.env.PORT || 3003;
(0, _passport2["default"])(_passport["default"]);
var app = (0, _express["default"])();
app.use((0, _expressSession["default"])({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    loginBundle = "",
    contestBundle = "",
    contestlistBundle = "",
    submissionBundle = "",
    judgmentBundle = "",
    myaccountBundle = "",
    standingsBundle = "";

_fs["default"].readFile('./dist/js/login.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  loginBundle = data || "";
});

_fs["default"].readFile('./dist/js/contest.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  contestBundle = data || "";
});

_fs["default"].readFile('./dist/js/contestlist.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  contestlistBundle = data || "";
});

_fs["default"].readFile('./dist/js/submission.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  submissionBundle = data || "";
});

_fs["default"].readFile('./dist/js/judgment.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  judgmentBundle = data || "";
});

_fs["default"].readFile('./dist/js/myaccount.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  myaccountBundle = data || "";
});

_fs["default"].readFile('./dist/js/standings.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  standingsBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, _roots.LoginRoot, "login"));
});
app.get('/contestlist/:category', function (req, res) {
  var data = {
    category: req.params.category
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contestlistBundle, _roots.ContestListRoot, "contestlist"));
});
app.get('/contest/:contest', function (req, res) {
  var data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contestBundle, _roots.ContestRoot, "submission"));
});
app.get('/submission/:contest', function (req, res) {
  var data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, submissionBundle, _roots.SubmissionRoot, "submission"));
});
app.get('/judgment/:contest', function (req, res) {
  var data = {
    contest: req.params.contest
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, judgmentBundle, _roots.JudgmentRoot, "judgment"));
});
app.get('/myaccount', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, _roots.MyaccountRoot, "myaccount"));
});
app.get('/standings', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, standingsBundle, _roots.StandingsRoot, "standings"));
});
;
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/auth', _passport["default"].authenticate('local-signup'), _userCtrl["default"].login);
app.get('/getMe', _userCtrl["default"].getMe);
app.get('/logout', _userCtrl["default"].logout);
app.get('/users', _userCtrl["default"].read);
app.put('/users/:id', _userCtrl["default"].update);
app.get('/contestss', _contestsCtrl["default"].read);
app.get('/contestss/:id', _contestsCtrl["default"].readOne);
app.post('/contestss', _contestsCtrl["default"].create);
app.put('/contestss/:id', _contestsCtrl["default"].update);
app["delete"]('/contestss/:id', _contestsCtrl["default"].destroy);
app.get('/submissionss', _submissionsCtrl["default"].read);
app.get('/submissionss/:id', _submissionsCtrl["default"].readOne);
app.post('/submissionss', _submissionsCtrl["default"].create);
app.put('/submissionss/:id', _submissionsCtrl["default"].update);
app["delete"]('/submissionss/:id', _submissionsCtrl["default"].destroy);
app.get('/health', function (req, res) {
  return res.send('OK');
});
var mongoUri = 'mongodb+srv://' + cryptr.decrypt(_config["default"].dbuser) + ':' + cryptr.decrypt(_config["default"].dbpass) + '@talentwarz.zvqdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

_mongoose["default"].connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('error', console.error.bind(console, 'connection error'));

_mongoose["default"].connection.once('open', function () {
  console.log("Connected to mongoDB");
});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <style>\n                  body { margin: 0; font-family: Helvetica; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}