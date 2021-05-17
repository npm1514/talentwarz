"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContestBlock = exports.ContestListContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContestListContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    text-align: center;\n  "])));

exports.ContestListContent = ContestListContent;

var ContestBlock = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 500px;\n    margin: auto;\n    border: 1px solid #000;\n    border-radius: 2px;\n    background: #8d8d8d;\n    color: #fff;\n    text-align: center;\n    transition: background 0.5s;\n    &:hover {\n      background: #8d8d8d80;\n    }\n  "])));

exports.ContestBlock = ContestBlock;