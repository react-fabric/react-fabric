'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var disabled = _props.disabled;
      var primary = _props.primary;
      var hero = _props.hero;
      var compound = _props.compound;
      var command = _props.command;
      var description = _props.description;
      var iconName = _props.iconName;

      var props = _objectWithoutProperties(_props, ['children', 'disabled', 'primary', 'hero', 'compound', 'command', 'description', 'iconName']);

      return _react2['default'].createElement(
        'button',
        _extends({}, props, { className: (0, _classnames2['default'])('ms-Button', {
            'is-disabled': disabled,
            'ms-Button--primary': primary,
            'ms-Button--hero': hero,
            'ms-Button--compound': compound,
            'ms-Button--command': command
          }) }),
        iconName ? _react2['default'].createElement(
          'span',
          { className: 'ms-Button-icon' },
          _react2['default'].createElement(_FontIcon2['default'], { name: iconName })
        ) : null,
        children ? _react2['default'].createElement(
          'span',
          { className: 'ms-Button-label' },
          children
        ) : null,
        description ? _react2['default'].createElement(
          'span',
          { className: 'ms-Button-description' },
          description
        ) : null
      );
    }
  }], [{
    key: 'displayName',
    value: 'Button',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      disabled: _react.PropTypes.bool,
      primary: _react.PropTypes.bool,
      hero: _react.PropTypes.bool,
      compound: _react.PropTypes.bool,
      command: _react.PropTypes.bool,
      description: _react.PropTypes.node,
      iconName: _react.PropTypes.string
    },
    enumerable: true
  }]);

  return Button;
})(_react2['default'].Component);

exports['default'] = Button;
module.exports = exports['default'];