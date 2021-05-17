"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JudgmentContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var JudgmentContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    text-align: center;\n    img {\n      height: 50vw;\n      max-height: 200px;\n    }\n  "])));

exports.JudgmentContent = JudgmentContent;