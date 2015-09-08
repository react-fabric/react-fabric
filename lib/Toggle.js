'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Toggle = (function (_React$Component) {
  _inherits(Toggle, _React$Component);

  _createClass(Toggle, null, [{
    key: 'displayName',
    value: 'Toggle',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      labelOn: _react.PropTypes.string,
      labelOff: _react.PropTypes.string,
      description: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
      id: _react.PropTypes.string,
      onChange: _react.PropTypes.func,
      textLeft: _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    _get(Object.getPrototypeOf(Toggle.prototype), 'constructor', this).call(this);

    this.state = {
      id: props.id || 'Toggle-' + this.constructor.instanceCount
    };

    this.constructor.instanceCount++;
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var labelOn = _props.labelOn;
      var labelOff = _props.labelOff;
      var description = _props.description;
      var onChange = _props.onChange;
      var textLeft = _props.textLeft;

      var inputId = this.state.id + '_input';

      return _react2['default'].createElement(
        'div',
        { id: this.state.id, className: (0, _classnames2['default'])('ms-Toggle', {
            'ms-Toggle--textLeft': textLeft
          }) },
        _react2['default'].createElement(
          'span',
          { className: 'ms-Toggle-description' },
          description
        ),
        _react2['default'].createElement('input', { className: 'ms-Toggle-input', id: inputId, onChange: onChange, type: 'checkbox' }),
        _react2['default'].createElement(
          'label',
          { className: 'ms-Toggle-field', htmlFor: inputId },
          _react2['default'].createElement(
            'span',
            { className: 'ms-Label ms-Label--on' },
            labelOn
          ),
          _react2['default'].createElement(
            'span',
            { className: 'ms-Label ms-Label--off' },
            labelOff
          )
        )
      );
    }
  }], [{
    key: 'instanceCount',
    value: 0,
    enumerable: true
  }]);

  return Toggle;
})(_react2['default'].Component);

exports['default'] = Toggle;
module.exports = exports['default'];