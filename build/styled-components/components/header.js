"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  min-height: 100px;\n  background-color: #fff;\n  border-bottom: 1px solid #8d8d8d;\n  color: #000;\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

exports.Header = Header;