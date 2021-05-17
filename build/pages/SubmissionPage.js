"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _submission = require("../styled-components/pages/submission");

var _global = require("../styled-components/global");

var _contests = _interopRequireDefault(require("../data/contests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Submission = /*#__PURE__*/function (_Component) {
  _inherits(Submission, _Component);

  var _super = _createSuper(Submission);

  function Submission(props) {
    var _this;

    _classCallCheck(this, Submission);

    _this = _super.call(this, props);
    _this.state = {
      contest: ""
    };
    return _this;
  }

  _createClass(Submission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contest = _contests["default"].find(function (a) {
        return a.title.toLowerCase().split(" ").join("-") == _this2.props.data.contest;
      });

      this.setState({
        contest: contest
      });
    }
  }, {
    key: "render",
    value: function render() {
      var contest = this.state.contest;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_submission.SubmissionContent, null, contest && contest.title && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Make Your Best Submission Here"), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/judgment/".concat(contest.title.toLowerCase().split(" ").join("-"))
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "text"
      }, "Or Make a Judgment Instead")), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: function onSubmit() {
          alert("Your entry has been submitted.");
        }
      }, /*#__PURE__*/_react["default"].createElement("h2", null, contest.title), /*#__PURE__*/_react["default"].createElement("h3", null, "Description: ", contest.description), /*#__PURE__*/_react["default"].createElement("h3", null, "Judgment Criteria: ", contest.judgmentrules), /*#__PURE__*/_react["default"].createElement("input", {
        type: "file"
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit"
      }, "Enter Submission"))))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Submission;
}(_react.Component);

var _default = Submission;
exports["default"] = _default;