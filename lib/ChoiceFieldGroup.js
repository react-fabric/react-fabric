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

var _ChoiceField = require('./ChoiceField');

var _ChoiceField2 = _interopRequireDefault(_ChoiceField);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var ChoiceFieldGroup = (function (_React$Component) {
  _inherits(ChoiceFieldGroup, _React$Component);

  _createClass(ChoiceFieldGroup, null, [{
    key: 'displayName',
    value: 'ChoiceFieldGroup',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.instanceOf(_Label2['default'])]),
      children: _react.PropTypes.arrayOf(_react.PropTypes.any),
      required: _react.PropTypes.bool,
      name: _react.PropTypes.string,
      onChange: _react.PropTypes.func,
      defaultValue: _react.PropTypes.string
    },
    enumerable: true
  }]);

  function ChoiceFieldGroup(props) {
    _classCallCheck(this, ChoiceFieldGroup);

    _get(Object.getPrototypeOf(ChoiceFieldGroup.prototype), 'constructor', this).call(this);

    this.state = {
      selectedValue: props.defaultValue || ''
    };

    this._onChoiceChanged = this._onChoiceChanged.bind(this);
  }

  _createClass(ChoiceFieldGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var checked = [];

      _react2['default'].Children.forEach(this.props.children, function (choice) {
        if (choice.props.hasOwnProperty('checked') && choice.props.checked) {
          checked.push(choice.props.value);
        }
      });

      // this.setState throws error when shallow rendering
      // https://github.com/facebook/react/issues/4461
      if (process.env.NODE_ENV === 'test') {
        this.state.selectedValue = this.state.selectedValue || checked[0] || '';
      } else {
        this.setState(_extends({}, this.state, {
          selectedValue: this.state.selectedValue || checked[0] || ''
        }));
      }

      if (process.env.NODE_ENV !== 'production') {
        if (checked.length > 0 && this.props.defaultValue) {
          var warning = 'Both a default value and an initially checked children is passed. ' + 'Using the passed default value as the default value.';
          console.warn(warning); // eslint-disable-line no-console
        }
        if (checked.length > 1) {
          var warning = 'Two or more initally checked children are passed. ' + 'Using the first one as the default value.';
          console.warn(warning); // eslint-disable-line no-console
        }
      }
    }
  }, {
    key: '_createLabel',
    value: function _createLabel(_ref) {
      var title = _ref.title;
      var required = _ref.required;

      if (!title) {
        return null;
      }

      if (title._isReactElement && title.type === _Label2['default']) {
        return _react2['default'].cloneElement(title, { required: required });
      }

      return _react2['default'].createElement(
        _Label2['default'],
        { required: required },
        title
      );
    }
  }, {
    key: '_createChoiceField',
    value: function _createChoiceField(choice, _ref2) {
      var name = _ref2.name;
      var _choice$props = choice.props;
      var label = _choice$props.label;
      var value = _choice$props.value;

      var other = _objectWithoutProperties(_choice$props, ['label', 'value']);

      return _react2['default'].createElement(_ChoiceField2['default'], _extends({}, other, {
        key: value,
        name: name,
        label: label,
        value: value,
        onChange: this._onChoiceChanged,
        checked: this.state.selectedValue === value,
        type: 'radio' }));
    }
  }, {
    key: '_onChoiceChanged',
    value: function _onChoiceChanged(e) {
      this.setState({
        selectedValue: e.target.value
      });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: 'foo',
    value: function foo() {
      return this.state.selectedValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var children = _props.children;
      var title = _props.title;
      var required = _props.required;
      var name = _props.name;

      var label = this._createLabel({ title: title, required: required });

      return _react2['default'].createElement(
        'div',
        { className: 'ms-ChoiceFieldGroup' },
        label ? _react2['default'].createElement(
          'div',
          { className: 'ms-ChoiceFieldGroup-title' },
          label
        ) : null,
        _react2['default'].Children.map(children, function (choice) {
          return _this._createChoiceField(choice, { name: name });
        }, this)
      );
    }
  }]);

  return ChoiceFieldGroup;
})(_react2['default'].Component);

exports['default'] = ChoiceFieldGroup;
module.exports = exports['default'];