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

var ChoiceField = (function (_React$Component) {
  _inherits(ChoiceField, _React$Component);

  _createClass(ChoiceField, null, [{
    key: 'displayName',
    value: 'ChoiceField',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
      label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
      onChange: _react.PropTypes.func,
      checked: _react.PropTypes.bool,
      name: _react.PropTypes.string,
      value: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      type: 'checkbox'
    },
    enumerable: true
  }]);

  function ChoiceField(props) {
    _classCallCheck(this, ChoiceField);

    _get(Object.getPrototypeOf(ChoiceField.prototype), 'constructor', this).call(this);

    this.state = {
      id: props.id || 'ChoiceField-' + this.constructor.instanceCount
    };

    this.constructor.instanceCount++;
  }

  _createClass(ChoiceField, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var type = _props.type;
      var label = _props.label;
      var onChange = _props.onChange;
      var checked = _props.checked;
      var name = _props.name;
      var value = _props.value;

      var inputId = this.state.id + '_input';

      return _react2['default'].createElement(
        'div',
        { id: this.state.id, className: (0, _classnames2['default'])('ms-ChoiceField') },
        _react2['default'].createElement('input', { className: 'ms-ChoiceField-input',
          id: inputId,
          type: type,
          onChange: onChange,
          checked: checked,
          name: name,
          value: value }),
        _react2['default'].createElement(
          'label',
          { className: 'ms-ChoiceField-field', htmlFor: inputId },
          _react2['default'].createElement(
            'span',
            { className: 'ms-Label' },
            label
          )
        )
      );
    }
  }], [{
    key: 'instanceCount',
    value: 0,
    enumerable: true
  }]);

  return ChoiceField;
})(_react2['default'].Component);

exports['default'] = ChoiceField;
module.exports = exports['default'];