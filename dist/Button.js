"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var onClick = _a.onClick;
    return (react_1.default.createElement("button", { onClick: onClick, style: { padding: '10px', fontSize: '16px', cursor: 'pointer' } }, "Click Me!"));
};
exports.default = Button;
