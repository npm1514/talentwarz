"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"])));

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 16px;\n  min-height: calc(100vh - 89px - 145px);\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  @media (min-width: 700px){\n    min-height: calc(100vh - 58px - 115px);\n  }\n"])));

exports.ContentWrapper = ContentWrapper;

var Button = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 6px 12px;\n  margin: 12px auto;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  &:hover {\n    cursor: pointer;\n    border: 2px solid #8d8d8d;\n  }\n"])), _colors.pink);

exports.Button = Button;