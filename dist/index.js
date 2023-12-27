'use strict';

var React = require('react');

var Button = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, style: { padding: '10px', fontSize: '16px', cursor: 'pointer' } }, "Click Me!"));
};

exports.Button = Button;
