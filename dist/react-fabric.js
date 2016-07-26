(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("ReactFabric", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactFabric"] = factory(require("react"), require("react-dom"));
	else
		root["ReactFabric"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_265__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fabricComponent = exports.Toggle = exports.TextField = exports.Table = exports.SearchBox = exports.Overlay = exports.NavBar = exports.ListItem = exports.List = exports.Link = exports.Label = exports.Icon = exports.Grid = exports.Dropdown = exports.Dialog = exports.ChoiceFieldGroup = exports.ChoiceField = exports.Button = undefined;
	
	var _Button2 = __webpack_require__(1);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _ChoiceField2 = __webpack_require__(193);
	
	var _ChoiceField3 = _interopRequireDefault(_ChoiceField2);
	
	var _ChoiceFieldGroup2 = __webpack_require__(201);
	
	var _ChoiceFieldGroup3 = _interopRequireDefault(_ChoiceFieldGroup2);
	
	var _Dialog2 = __webpack_require__(203);
	
	var _Dialog3 = _interopRequireDefault(_Dialog2);
	
	var _Dropdown2 = __webpack_require__(213);
	
	var _Dropdown3 = _interopRequireDefault(_Dropdown2);
	
	var _Grid2 = __webpack_require__(271);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _Icon2 = __webpack_require__(51);
	
	var _Icon3 = _interopRequireDefault(_Icon2);
	
	var _Label2 = __webpack_require__(195);
	
	var _Label3 = _interopRequireDefault(_Label2);
	
	var _Link2 = __webpack_require__(278);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _List2 = __webpack_require__(281);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(284);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _NavBar2 = __webpack_require__(288);
	
	var _NavBar3 = _interopRequireDefault(_NavBar2);
	
	var _Overlay2 = __webpack_require__(210);
	
	var _Overlay3 = _interopRequireDefault(_Overlay2);
	
	var _SearchBox2 = __webpack_require__(294);
	
	var _SearchBox3 = _interopRequireDefault(_SearchBox2);
	
	var _Table2 = __webpack_require__(297);
	
	var _Table3 = _interopRequireDefault(_Table2);
	
	var _TextField2 = __webpack_require__(300);
	
	var _TextField3 = _interopRequireDefault(_TextField2);
	
	var _Toggle2 = __webpack_require__(303);
	
	var _Toggle3 = _interopRequireDefault(_Toggle2);
	
	var _fabricComponent2 = __webpack_require__(56);
	
	var _fabricComponent3 = _interopRequireDefault(_fabricComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button3.default;
	exports.ChoiceField = _ChoiceField3.default;
	exports.ChoiceFieldGroup = _ChoiceFieldGroup3.default;
	exports.Dialog = _Dialog3.default;
	exports.Dropdown = _Dropdown3.default;
	exports.Grid = _Grid3.default;
	exports.Icon = _Icon3.default;
	exports.Label = _Label3.default;
	exports.Link = _Link3.default;
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.NavBar = _NavBar3.default;
	exports.Overlay = _Overlay3.default;
	exports.SearchBox = _SearchBox3.default;
	exports.Table = _Table3.default;
	exports.TextField = _TextField3.default;
	exports.Toggle = _Toggle3.default;
	exports.fabricComponent = _fabricComponent3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Button2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(41);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _onlyWhen = __webpack_require__(48);
	
	var _onlyWhen2 = _interopRequireDefault(_onlyWhen);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _propTypes = __webpack_require__(53);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _invokeWhenNotDisabled = __webpack_require__(191);
	
	var _invokeWhenNotDisabled2 = _interopRequireDefault(_invokeWhenNotDisabled);
	
	var _Button = __webpack_require__(192);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BUTTON_TYPES = ['command', 'compound', 'hero', 'primary'];
	
	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var description = _ref.description;
	  var disabled = _ref.disabled;
	  var glyph = _ref.glyph;
	  var onClick = _ref.onClick;
	  var submit = _ref.submit;
	  var type = _ref.type;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'description', 'disabled', 'glyph', 'onClick', 'submit', 'type']);
	  return _react2.default.createElement(
	    'button',
	    (0, _extends3.default)({ 'data-fabric': 'Button'
	    }, props, {
	      styleName: (0, _classnames2.default)('ms-Button', (0, _defineProperty3.default)({
	        'is-disabled': disabled
	      }, 'ms-Button--' + type, type)),
	      type: submit ? 'submit' : 'button',
	      onClick: (0, _invokeWhenNotDisabled2.default)(disabled, onClick) }),
	    _react2.default.createElement(
	      'span',
	      { styleName: 'ms-Button-icon' },
	      glyph && _react2.default.createElement(_Icon2.default, { styleName: 'ms-Icon', glyph: glyph })
	    ),
	    _react2.default.createElement(
	      'span',
	      { styleName: 'ms-Button-label' },
	      children
	    ),
	    _react2.default.createElement(
	      'span',
	      { styleName: 'ms-Button-description' },
	      description
	    )
	  );
	};
	Button.displayName = 'Button';
	Button.propTypes = {
	  children: _react2.default.PropTypes.node,
	  description: (0, _onlyWhen2.default)(function (_ref2) {
	    var type = _ref2.type;
	    return type === 'compound';
	  }, 'type is compound', _react2.default.PropTypes.node),
	  disabled: _react2.default.PropTypes.bool,
	  glyph: _propTypes.glyphType,
	  onClick: _react2.default.PropTypes.func,
	  submit: _react2.default.PropTypes.bool,
	  type: _react2.default.PropTypes.oneOf(BUTTON_TYPES)
	};
	
	exports.default = (0, _fabricComponent2.default)(Button, _Button2.default);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(4);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(22)});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(23)
	  , gOPS     = __webpack_require__(38)
	  , pIE      = __webpack_require__(39)
	  , toObject = __webpack_require__(40)
	  , IObject  = __webpack_require__(27)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(24)
	  , enumBugKeys = __webpack_require__(37);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(25)
	  , toIObject    = __webpack_require__(26)
	  , arrayIndexOf = __webpack_require__(30)(false)
	  , IE_PROTO     = __webpack_require__(34)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(29);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(28);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(26)
	  , toLength  = __webpack_require__(31)
	  , toIndex   = __webpack_require__(33);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(35)('keys')
	  , uid    = __webpack_require__(36);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 39 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(29);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(42);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = onlyWhen;
	
	var _lodash = __webpack_require__(49);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _isDefined = __webpack_require__(50);
	
	var _isDefined2 = _interopRequireDefault(_isDefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function onlyWhen(predicate) {
	  if (!(0, _lodash2.default)(predicate)) {
	    throw new Error('predicate must be a function.');
	  }
	
	  var message = (0, _lodash2.default)(arguments.length <= 1 ? undefined : arguments[1]) ? predicate.toString() : arguments.length <= 1 ? undefined : arguments[1];
	  var propType = (0, _lodash2.default)(arguments.length <= 1 ? undefined : arguments[1]) ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
	
	  if (!(0, _lodash2.default)(propType)) {
	    throw new Error('Invalid propType passed to \'onlyWhen\': ' + propType + '.');
	  }
	
	  return function (propValue, key, componentName, location, propFullName) {
	    if (predicate(propValue)) {
	      return propType(propValue, key, componentName, location, propFullName);
	    }
	
	    if ((0, _isDefined2.default)(propValue[key])) {
	      return new Error('Prop \'' + key + '\' is only used by \'' + componentName + '\' when ' + message + '.');
	    }
	    return null;
	  };
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isFunction;


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isDefined;
	function isDefined(value) {
	  return typeof value !== 'undefined' && value !== null;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Icon = __webpack_require__(52);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Icon2.default;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(53);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Icon = __webpack_require__(190);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(_ref) {
	  var glyph = _ref.glyph;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['glyph']);
	  return _react2.default.createElement('i', (0, _extends3.default)({ 'data-fabric': 'Icon'
	  }, props, {
	    styleName: (0, _classnames2.default)('ms-Icon', 'ms-Icon--' + glyph) }));
	};
	Icon.displayName = 'Icon';
	Icon.propTypes = {
	  glyph: _propTypes.glyphType.isRequired
	};
	
	exports.default = (0, _fabricComponent2.default)(Icon, _Icon2.default);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onlyWhen = exports.glyphType = exports.colSizeType = undefined;
	
	var _colSizeType2 = __webpack_require__(54);
	
	var _colSizeType3 = _interopRequireDefault(_colSizeType2);
	
	var _glyphType2 = __webpack_require__(55);
	
	var _glyphType3 = _interopRequireDefault(_glyphType2);
	
	var _onlyWhen2 = __webpack_require__(48);
	
	var _onlyWhen3 = _interopRequireDefault(_onlyWhen2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.colSizeType = _colSizeType3.default;
	exports.glyphType = _glyphType3.default;
	exports.onlyWhen = _onlyWhen3.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.COL_SIZES = undefined;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var COL_SIZES = exports.COL_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	
	exports.default = _react2.default.PropTypes.oneOf(COL_SIZES);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GLYPH_TYPES = undefined;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GLYPH_TYPES = exports.GLYPH_TYPES = ['alert', 'alert2', 'alertOutline', 'arrowDown', 'arrowDown2', 'arrowDownLeft', 'arrowDownRight', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrowUp2', 'arrowUpLeft', 'arrowUpRight', 'ascending', 'at', 'attachment', 'bag', 'bell', 'boards', 'bold', 'bookmark', 'books', 'briefcase', 'bundle', 'cake', 'calendar', 'calendarDay', 'calendarPublic', 'calendarWeek', 'calendarWorkWeek', 'camera', 'car', 'caretDown', 'caretDownLeft', 'caretDownOutline', 'caretDownRight', 'caretLeft', 'caretLeftOutline', 'caretRight', 'caretRightOutline', 'caretUp', 'caretUpLeft', 'caretUpOutline', 'caretUpRight', 'cart', 'cat', 'chart', 'chat', 'chatAdd', 'check', 'checkPeople', 'checkbox', 'checkboxCheck', 'checkboxEmpty', 'checkboxMixed', 'chevronDown', 'chevronLeft', 'chevronRight', 'chevronThickDown', 'chevronThickLeft', 'chevronThickRight', 'chevronThickUp', 'chevronThinDown', 'chevronThinLeft', 'chevronThinRight', 'chevronThinUp', 'chevronUp', 'chevronsDown', 'chevronsLeft', 'chevronsRight', 'chevronsUp', 'circleBall', 'circleBalloons', 'circleCar', 'circleCat', 'circleCoffee', 'circleDog', 'circleEmpty', 'circleFill', 'circleFilled', 'circleHalfFilled', 'circleInfo', 'circleLightning', 'circlePill', 'circlePlane', 'circlePlus', 'circlePoodle', 'circleUnfilled', 'classNotebook', 'classroom', 'clock', 'clutter', 'coffee', 'collapse', 'conflict', 'contact', 'contactForm', 'contactPublic', 'copy', 'creditCard', 'creditCardOutline', 'dashboard', 'descending', 'desktop', 'deviceWipe', 'dialpad', 'directions', 'document', 'documentAdd', 'documentForward', 'documentLandscape', 'documentPDF', 'documentReply', 'documentSearch', 'documents', 'dog', 'dogAlt', 'dot', 'download', 'drm', 'drop', 'dropdown', 'editBox', 'ellipsis', 'embed', 'event', 'eventCancel', 'eventInfo', 'eventRecurring', 'eventShare', 'exclamation', 'expand', 'eye', 'favorites', 'fax', 'fieldMail', 'fieldNumber', 'fieldText', 'fieldTextBox', 'fileDocument', 'fileImage', 'filePDF', 'filter', 'filterClear', 'firstAid', 'flag', 'folder', 'folderMove', 'folderPublic', 'folderSearch', 'fontColor', 'fontDecrease', 'fontIncrease', 'frowny', 'fullscreen', 'gear', 'glasses', 'globe', 'graph', 'group', 'header', 'heart', 'heartEmpty', 'hide', 'home', 'inboxCheck', 'info', 'infoCircle', 'italic', 'key', 'late', 'lifesaver', 'lifesaverLock', 'lightBulb', 'lightning', 'link', 'linkRemove', 'listBullets', 'listCheck', 'listCheckbox', 'listGroup', 'listGroup2', 'listNumbered', 'lock', 'mail', 'mailCheck', 'mailDown', 'mailEdit', 'mailEmpty', 'mailError', 'mailOpen', 'mailPause', 'mailPublic', 'mailRead', 'mailSend', 'mailSync', 'mailUnread', 'mapMarker', 'meal', 'menu', 'menu2', 'merge', 'metadata', 'microphone', 'miniatures', 'minus', 'mobile', 'money', 'move', 'multiChoice', 'music', 'navigate', 'new', 'newsfeed', 'notRecurring', 'note', 'noteEdit', 'noteForward', 'noteReply', 'notebook', 'onedrive', 'onlineAdd', 'onlineJoin', 'oofReply', 'org', 'page', 'paint', 'panel', 'partner', 'pause', 'pencil', 'people', 'peopleAdd', 'peopleCheck', 'peopleError', 'peoplePause', 'peopleRemove', 'peopleSecurity', 'peopleSync', 'person', 'personAdd', 'personRemove', 'phone', 'phoneAdd', 'phoneTransfer', 'picture', 'pictureAdd', 'pictureEdit', 'pictureRemove', 'pill', 'pinDown', 'pinLeft', 'placeholder', 'plane', 'play', 'plus', 'plus2', 'pointItem', 'popout', 'post', 'print', 'protectionCenter', 'question', 'questionReverse', 'quote', 'radioButton', 'reactivate', 'receiptCheck', 'receiptForward', 'receiptReply', 'refresh', 'reload', 'reply', 'replyAll', 'replyAllAlt', 'replyAlt', 'ribbon', 'room', 'save', 'scheduling', 'search', 'section', 'sections', 'settings', 'share', 'shield', 'sites', 'smiley', 'soccer', 'socialListening', 'sort', 'sortLines', 'split', 'star', 'starEmpty', 'stopwatch', 'story', 'styleRemove', 'subscribe', 'sun', 'sunAdd', 'sunQuestion', 'support', 'table', 'tablet', 'tag', 'taskRecurring', 'tasks', 'teamwork', 'text', 'textBox', 'tile', 'timeline', 'today', 'toggle', 'toggleMiddle', 'touch', 'trash', 'triangleDown', 'triangleEmptyDown', 'triangleEmptyLeft', 'triangleEmptyRight', 'triangleEmptyUp', 'triangleLeft', 'triangleRight', 'triangleUp', 'trophy', 'underline', 'unsubscribe', 'upload', 'video', 'voicemail', 'voicemailForward', 'voicemailReply', 'waffle', 'work', 'wrench', 'x', 'xCircle'];
	
	exports.default = _react2.default.PropTypes.oneOf(GLYPH_TYPES);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isFabricComponent = undefined;
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.configure = configure;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(57);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _lodash = __webpack_require__(49);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _lodash3 = __webpack_require__(189);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	var _hoistNonReactStatics = __webpack_require__(89);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_CONFIGURATION = {
	  preprocessStyles: _lodash4.default
	};
	
	var configuration = (0, _extends3.default)({}, DEFAULT_CONFIGURATION);
	
	// TODO: move to readme / docs
	// const prependGlobalClassNames = styles => (
	//   Object.keys(styles).reduce((newStyles, style) => {
	//     newStyles[style] = `${style} ${styles[style]}` // eslint-disable-line no-param-reassign
	//
	//     return newStyles
	//   }, {})
	// )
	
	var higherOrderFunction = function higherOrderFunction(Component) {
	  var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var fabricStyles = configuration.preprocessStyles(styles);
	  var fabricOptions = (0, _extends3.default)({}, options, {
	    allowMultiple: true
	  });
	
	  var WrappedComponent = (0, _reactCssModules2.default)(Component, fabricStyles, fabricOptions);
	  var FabricComponent = function FabricComponent(_ref) {
	    var ignoreStyles = _ref.styles;
	    var props = (0, _objectWithoutProperties3.default)(_ref, ['styles']);
	    return _react2.default.createElement(WrappedComponent, props);
	  };
	
	  var componentDisplayName = Component.displayName || Component.name;
	
	  FabricComponent.displayName = 'FabricComponent(' + componentDisplayName + ')';
	  FabricComponent.WrappedComponent = Component;
	
	  (0, _hoistNonReactStatics2.default)(FabricComponent, Component);
	
	  return FabricComponent;
	};
	
	var decorator = function decorator() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return function (Component) {
	    return higherOrderFunction.apply(undefined, [Component].concat(args));
	  };
	};
	
	exports.default = function () {
	  return (0, _lodash2.default)(arguments.length <= 0 ? undefined : arguments[0]) ? higherOrderFunction.apply(undefined, arguments) : decorator.apply(undefined, arguments);
	};
	
	var isFabricComponent = exports.isFabricComponent = function isFabricComponent() {
	  for (var _len2 = arguments.length, componentTypes = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    componentTypes[_key2 - 1] = arguments[_key2];
	  }
	
	  var component = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var type = component.type || {};
	
	  return componentTypes.indexOf(type) !== -1;
	};
	
	function configure(options) {
	  configuration = (0, _extends3.default)({}, DEFAULT_CONFIGURATION, {
	    options: options
	  });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isFunction2 = __webpack_require__(58);
	
	var _isFunction3 = _interopRequireDefault(_isFunction2);
	
	var _extendReactClass = __webpack_require__(60);
	
	var _extendReactClass2 = _interopRequireDefault(_extendReactClass);
	
	var _wrapStatelessFunction = __webpack_require__(183);
	
	var _wrapStatelessFunction2 = _interopRequireDefault(_wrapStatelessFunction);
	
	var _makeConfiguration = __webpack_require__(184);
	
	var _makeConfiguration2 = _interopRequireDefault(_makeConfiguration);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Determines if the given object has the signature of a class that inherits React.Component.
	 */
	
	
	/**
	 * @see https://github.com/gajus/react-css-modules#options
	 */
	var isReactComponent = function isReactComponent(maybeReactComponent) {
	    return 'prototype' in maybeReactComponent && (0, _isFunction3.default)(maybeReactComponent.prototype.render);
	};
	
	/**
	 * When used as a function.
	 */
	var functionConstructor = function functionConstructor(Component, defaultStyles, options) {
	    var decoratedClass = void 0;
	
	    var configuration = (0, _makeConfiguration2.default)(options);
	
	    if (isReactComponent(Component)) {
	        decoratedClass = (0, _extendReactClass2.default)(Component, defaultStyles, configuration);
	    } else {
	        decoratedClass = (0, _wrapStatelessFunction2.default)(Component, defaultStyles, configuration);
	    }
	
	    if (Component.displayName) {
	        decoratedClass.displayName = Component.displayName;
	    } else {
	        decoratedClass.displayName = Component.name;
	    }
	
	    return decoratedClass;
	};
	
	/**
	 * When used as a ES7 decorator.
	 */
	var decoratorConstructor = function decoratorConstructor(defaultStyles, options) {
	    return function (Component) {
	        return functionConstructor(Component, defaultStyles, options);
	    };
	};
	
	exports.default = function () {
	    if ((0, _isFunction3.default)(arguments.length <= 0 ? undefined : arguments[0])) {
	        return functionConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
	    } else {
	        return decoratorConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(59);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign2 = __webpack_require__(61);
	
	var _assign3 = _interopRequireDefault(_assign2);
	
	var _isObject2 = __webpack_require__(59);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hoistNonReactStatics = __webpack_require__(89);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _linkClass = __webpack_require__(90);
	
	var _linkClass2 = _interopRequireDefault(_linkClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */
	
	/**
	 * @param {ReactClass} Component
	 * @param {Object} defaultStyles
	 * @param {Object} options
	 * @returns {ReactClass}
	 */
	exports.default = function (Component, defaultStyles, options) {
	    var WrappedComponent = function (_Component) {
	        _inherits(WrappedComponent, _Component);
	
	        function WrappedComponent() {
	            _classCallCheck(this, WrappedComponent);
	
	            return _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedComponent).apply(this, arguments));
	        }
	
	        _createClass(WrappedComponent, [{
	            key: 'render',
	            value: function render() {
	                var propsChanged = void 0,
	                    styles = void 0;
	
	                propsChanged = false;
	
	                if (this.props.styles) {
	                    styles = this.props.styles;
	                } else if ((0, _isObject3.default)(defaultStyles)) {
	                    this.props = (0, _assign3.default)({}, this.props, {
	                        styles: defaultStyles
	                    });
	
	                    propsChanged = true;
	                    styles = defaultStyles;
	                } else {
	                    styles = {};
	                }
	
	                var renderResult = _get(Object.getPrototypeOf(WrappedComponent.prototype), 'render', this).call(this);
	
	                if (propsChanged) {
	                    delete this.props.styles;
	                }
	
	                if (renderResult) {
	                    return (0, _linkClass2.default)(renderResult, styles, options);
	                }
	
	                return _react2.default.createElement('noscript');
	            }
	        }]);
	
	        return WrappedComponent;
	    }(Component);
	
	    return (0, _hoistNonReactStatics2.default)(WrappedComponent, Component);
	};
	
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(62),
	    copyObject = __webpack_require__(64),
	    createAssigner = __webpack_require__(65),
	    isArrayLike = __webpack_require__(67),
	    isPrototype = __webpack_require__(78),
	    keys = __webpack_require__(79);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(63);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(62);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];
	
	    assignValue(object, key, newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(66),
	    rest = __webpack_require__(72);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = typeof customizer == 'function'
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(63),
	    isArrayLike = __webpack_require__(67),
	    isIndex = __webpack_require__(71),
	    isObject = __webpack_require__(59);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(68),
	    isFunction = __webpack_require__(58),
	    isLength = __webpack_require__(70);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(69);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(73),
	    toInteger = __webpack_require__(74);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = rest;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(75);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(58),
	    isObject = __webpack_require__(59),
	    isSymbol = __webpack_require__(76);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(77);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(80),
	    baseKeys = __webpack_require__(82),
	    indexKeys = __webpack_require__(83),
	    isArrayLike = __webpack_require__(67),
	    isIndex = __webpack_require__(71),
	    isPrototype = __webpack_require__(78);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(81);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}
	
	module.exports = baseHas;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	module.exports = baseKeys;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(84),
	    isArguments = __webpack_require__(85),
	    isArray = __webpack_require__(87),
	    isLength = __webpack_require__(70),
	    isString = __webpack_require__(88);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(86);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(67),
	    isObjectLike = __webpack_require__(77);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(87),
	    isObjectLike = __webpack_require__(77);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            try {
	                targetComponent[keys[i]] = sourceComponent[keys[i]];
	            } catch (error) {
	
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isObject2 = __webpack_require__(59);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _isArray2 = __webpack_require__(87);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectUnfreeze = __webpack_require__(91);
	
	var _objectUnfreeze2 = _interopRequireDefault(_objectUnfreeze);
	
	var _isIterable = __webpack_require__(92);
	
	var _isIterable2 = _interopRequireDefault(_isIterable);
	
	var _parseStyleName = __webpack_require__(93);
	
	var _parseStyleName2 = _interopRequireDefault(_parseStyleName);
	
	var _generateAppendClassName = __webpack_require__(181);
	
	var _generateAppendClassName2 = _interopRequireDefault(_generateAppendClassName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var linkElement = function linkElement(element, styles, configuration) {
	    var appendClassName = void 0,
	        elementIsFrozen = void 0,
	        elementShallowCopy = void 0;
	
	    elementShallowCopy = element;
	
	    if (Object.isFrozen && Object.isFrozen(elementShallowCopy)) {
	        elementIsFrozen = true;
	
	        // https://github.com/facebook/react/blob/v0.13.3/src/classic/element/ReactElement.js#L131
	        elementShallowCopy = (0, _objectUnfreeze2.default)(elementShallowCopy);
	        elementShallowCopy.props = (0, _objectUnfreeze2.default)(elementShallowCopy.props);
	    }
	
	    var styleNames = (0, _parseStyleName2.default)(elementShallowCopy.props.styleName || '', configuration.allowMultiple);
	
	    if (_react2.default.isValidElement(elementShallowCopy.props.children)) {
	        elementShallowCopy.props.children = linkElement(_react2.default.Children.only(elementShallowCopy.props.children), styles, configuration);
	    } else if ((0, _isArray3.default)(elementShallowCopy.props.children) || (0, _isIterable2.default)(elementShallowCopy.props.children)) {
	        elementShallowCopy.props.children = _react2.default.Children.map(elementShallowCopy.props.children, function (node) {
	            if (_react2.default.isValidElement(node)) {
	                return linkElement(node, styles, configuration);
	            } else {
	                return node;
	            }
	        });
	    }
	
	    if (styleNames.length) {
	        appendClassName = (0, _generateAppendClassName2.default)(styles, styleNames, configuration.errorWhenNotFound);
	
	        if (appendClassName) {
	            if (elementShallowCopy.props.className) {
	                appendClassName = elementShallowCopy.props.className + ' ' + appendClassName;
	            }
	
	            elementShallowCopy.props.className = appendClassName;
	        }
	    }
	
	    delete elementShallowCopy.props.styleName;
	
	    if (elementIsFrozen) {
	        Object.freeze(elementShallowCopy.props);
	        Object.freeze(elementShallowCopy);
	    }
	
	    return elementShallowCopy;
	};
	
	/**
	 * @param {ReactElement} element
	 * @param {Object} styles CSS modules class map.
	 * @param {CSSModules~Options} configuration
	 */
	
	exports.default = function (element) {
	    var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var configuration = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    // @see https://github.com/gajus/react-css-modules/pull/30
	    if (!(0, _isObject3.default)(element)) {
	        return element;
	    }
	
	    return linkElement(element, styles, configuration);
	};
	
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	/**
	 * Make a shallow copy of the object maintaining the prototype.
	 */
	
	exports.default = function (source) {
	    var target = void 0;
	
	    if (source.constructor === Array) {
	        target = source.map(function (element) {
	            return element;
	        });
	    } else {
	        target = {};
	        for (var property in source) {
	            if (source.hasOwnProperty(property)) {
	                target[property] = source[property];
	            }
	        }
	    }
	
	    _defaults(target, Object.getPrototypeOf(source));
	
	    return target;
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=objectUnfreeze.js.map


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isObject2 = __webpack_require__(59);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _isFunction2 = __webpack_require__(58);
	
	var _isFunction3 = _interopRequireDefault(_isFunction2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ITERATOR_SYMBOL = typeof Symbol !== 'undefined' && (0, _isFunction3.default)(Symbol) && Symbol.iterator;
	var OLD_ITERATOR_SYMBOL = '@@iterator';
	
	/**
	 * @see https://github.com/lodash/lodash/issues/1668
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
	 */
	
	exports.default = function (maybeIterable) {
	    var iterator = void 0;
	
	    if (!(0, _isObject3.default)(maybeIterable)) {
	        return false;
	    }
	
	    if (ITERATOR_SYMBOL) {
	        iterator = maybeIterable[ITERATOR_SYMBOL];
	    } else {
	        iterator = maybeIterable[OLD_ITERATOR_SYMBOL];
	    }
	
	    return (0, _isFunction3.default)(iterator);
	};
	
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _filter2 = __webpack_require__(94);
	
	var _filter3 = _interopRequireDefault(_filter2);
	
	var _trim2 = __webpack_require__(173);
	
	var _trim3 = _interopRequireDefault(_trim2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleNameIndex = {};
	
	exports.default = function (styleNamePropertyValue, allowMultiple) {
	    var styleNames = void 0;
	
	    if (styleNameIndex[styleNamePropertyValue]) {
	        styleNames = styleNameIndex[styleNamePropertyValue];
	    } else {
	        styleNames = (0, _trim3.default)(styleNamePropertyValue).split(' ');
	        styleNames = (0, _filter3.default)(styleNames);
	
	        styleNameIndex[styleNamePropertyValue] = styleNames;
	    }
	
	    if (allowMultiple === false && styleNames.length > 1) {
	        throw new Error('ReactElement styleName property defines multiple module names ("' + styleNamePropertyValue + '").');
	    }
	
	    return styleNames;
	};
	
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(95),
	    baseFilter = __webpack_require__(96),
	    baseIteratee = __webpack_require__(102),
	    isArray = __webpack_require__(87);
	
	/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array|Function|Object|string} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */
	function filter(collection, predicate) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = filter;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(97);
	
	/**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}
	
	module.exports = baseFilter;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(98),
	    createBaseEach = __webpack_require__(101);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(99),
	    keys = __webpack_require__(79);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(100);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(67);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(103),
	    baseMatchesProperty = __webpack_require__(159),
	    identity = __webpack_require__(170),
	    isArray = __webpack_require__(87),
	    property = __webpack_require__(171);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(104),
	    getMatchData = __webpack_require__(153),
	    matchesStrictComparable = __webpack_require__(158);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(105),
	    baseIsEqual = __webpack_require__(137);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(106),
	    stackDelete = __webpack_require__(107),
	    stackGet = __webpack_require__(110),
	    stackHas = __webpack_require__(112),
	    stackSet = __webpack_require__(114);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}
	
	module.exports = stackClear;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(108);
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}
	
	module.exports = stackDelete;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}
	
	module.exports = assocDelete;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(63);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(111);
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocGet(array, key) : data.map.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);
	
	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}
	
	module.exports = assocGet;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(113);
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;
	
	  return array ? assocHas(array, key) : data.map.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);
	
	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}
	
	module.exports = assocHas;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(115),
	    assocSet = __webpack_require__(135);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;
	
	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(116),
	    mapDelete = __webpack_require__(127),
	    mapGet = __webpack_require__(131),
	    mapHas = __webpack_require__(133),
	    mapSet = __webpack_require__(134);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;
	
	module.exports = MapCache;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(117),
	    Map = __webpack_require__(123);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}
	
	module.exports = mapClear;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(118);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}
	
	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
	
	module.exports = Hash;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(120);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(58),
	    isHostObject = __webpack_require__(121),
	    isObject = __webpack_require__(59),
	    toSource = __webpack_require__(122);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = isNative;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119),
	    root = __webpack_require__(124);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(126);
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(125)(module), (function() { return this; }())))

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	module.exports = checkGlobal;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(123),
	    assocDelete = __webpack_require__(108),
	    hashDelete = __webpack_require__(128),
	    isKeyable = __webpack_require__(130);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}
	
	module.exports = mapDelete;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(129);
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(118);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}
	
	module.exports = isKeyable;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(123),
	    assocGet = __webpack_require__(111),
	    hashGet = __webpack_require__(132),
	    isKeyable = __webpack_require__(130);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}
	
	module.exports = mapGet;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(118);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(123),
	    assocHas = __webpack_require__(113),
	    hashHas = __webpack_require__(129),
	    isKeyable = __webpack_require__(130);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}
	
	module.exports = mapHas;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(123),
	    assocSet = __webpack_require__(135),
	    hashSet = __webpack_require__(136),
	    isKeyable = __webpack_require__(130);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}
	
	module.exports = mapSet;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(109);
	
	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}
	
	module.exports = assocSet;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(118);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}
	
	module.exports = hashSet;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(138),
	    isObject = __webpack_require__(59),
	    isObjectLike = __webpack_require__(77);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(105),
	    equalArrays = __webpack_require__(139),
	    equalByTag = __webpack_require__(141),
	    equalObjects = __webpack_require__(146),
	    getTag = __webpack_require__(147),
	    isArray = __webpack_require__(87),
	    isHostObject = __webpack_require__(121),
	    isTypedArray = __webpack_require__(152);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(140);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue ||
	              equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(142),
	    Uint8Array = __webpack_require__(143),
	    equalArrays = __webpack_require__(139),
	    mapToArray = __webpack_require__(144),
	    setToArray = __webpack_require__(145);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);
	
	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(124);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(124);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 144 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(80),
	    keys = __webpack_require__(79);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(148),
	    Map = __webpack_require__(123),
	    Promise = __webpack_require__(149),
	    Set = __webpack_require__(150),
	    WeakMap = __webpack_require__(151),
	    toSource = __webpack_require__(122);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119),
	    root = __webpack_require__(124);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119),
	    root = __webpack_require__(124);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119),
	    root = __webpack_require__(124);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(119),
	    root = __webpack_require__(124);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(70),
	    isObjectLike = __webpack_require__(77);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(154),
	    toPairs = __webpack_require__(155);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(59);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(156),
	    keys = __webpack_require__(79);
	
	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}
	
	module.exports = toPairs;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(157);
	
	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}
	
	module.exports = baseToPairs;


/***/ },
/* 157 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(137),
	    get = __webpack_require__(160),
	    hasIn = __webpack_require__(167),
	    isKey = __webpack_require__(166),
	    isStrictComparable = __webpack_require__(154),
	    matchesStrictComparable = __webpack_require__(158);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(path, srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(161);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(162),
	    isKey = __webpack_require__(166);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(87),
	    stringToPath = __webpack_require__(163);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(164),
	    toString = __webpack_require__(165);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(115);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(142),
	    isSymbol = __webpack_require__(76);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toString;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(87),
	    isSymbol = __webpack_require__(76);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol') {
	    return true;
	  }
	  return !isArray(value) &&
	    (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}
	
	module.exports = isKey;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(168),
	    hasPath = __webpack_require__(169);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(162),
	    isArguments = __webpack_require__(85),
	    isArray = __webpack_require__(87),
	    isIndex = __webpack_require__(71),
	    isKey = __webpack_require__(166),
	    isLength = __webpack_require__(70),
	    isString = __webpack_require__(88);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = path[index];
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 170 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(69),
	    basePropertyDeep = __webpack_require__(172),
	    isKey = __webpack_require__(166);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(161);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(174),
	    charsEndIndex = __webpack_require__(176),
	    charsStartIndex = __webpack_require__(179),
	    stringToArray = __webpack_require__(180),
	    toString = __webpack_require__(165);
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (!string) {
	    return string;
	  }
	  if (guard || chars === undefined) {
	    return string.replace(reTrim, '');
	  }
	  if (!(chars += '')) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	  return castSlice(strSymbols, start, end).join('');
	}
	
	module.exports = trim;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(175);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(177);
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;
	
	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsEndIndex;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(178);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(177);
	
	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;
	
	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsStartIndex;


/***/ },
/* 180 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}
	
	module.exports = stringToArray;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _simpleMap = __webpack_require__(182);
	
	var _simpleMap2 = _interopRequireDefault(_simpleMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stylesIndex = new _simpleMap2.default();
	
	exports.default = function (styles, styleNames, errorWhenNotFound) {
	    var appendClassName = void 0,
	        stylesIndexMap = void 0;
	
	    stylesIndexMap = stylesIndex.get(styles);
	
	    if (stylesIndexMap) {
	        var styleNameIndex = stylesIndexMap.get(styleNames);
	
	        if (styleNameIndex) {
	            return styleNameIndex;
	        }
	    } else {
	        stylesIndexMap = stylesIndex.set(styles, new _simpleMap2.default());
	    }
	
	    appendClassName = '';
	
	    for (var styleName in styleNames) {
	        if (styleNames.hasOwnProperty(styleName)) {
	            var className = styles[styleNames[styleName]];
	
	            if (className) {
	                appendClassName += ' ' + className;
	            } else if (errorWhenNotFound === true) {
	                throw new Error('"' + styleNames[styleName] + '" CSS module is undefined.');
	            }
	        }
	    }
	
	    appendClassName = appendClassName.trim();
	
	    stylesIndexMap.set(styleNames, appendClassName);
	
	    return appendClassName;
	};
	
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SimpleMap = exports.SimpleMap = function () {
	    function SimpleMap() {
	        _classCallCheck(this, SimpleMap);
	
	        this.keys = [];
	        this.values = [];
	    }
	
	    _createClass(SimpleMap, [{
	        key: 'get',
	        value: function get(key) {
	            var index = this.keys.indexOf(key);
	
	            return this.values[index];
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.keys.push(key);
	            this.values.push(value);
	
	            return value;
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.keys.length;
	        }
	    }]);
	
	    return SimpleMap;
	}();
	
	var exportedMap = typeof Map === 'undefined' ? SimpleMap : Map;
	
	exports.default = exportedMap;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _assign2 = __webpack_require__(61);
	
	var _assign3 = _interopRequireDefault(_assign2);
	
	var _isObject2 = __webpack_require__(59);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _linkClass = __webpack_require__(90);
	
	var _linkClass2 = _interopRequireDefault(_linkClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
	 */
	/* eslint-disable react/prop-types */
	
	exports.default = function (Component, defaultStyles, options) {
	    var WrappedComponent = function WrappedComponent() {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }
	
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var styles = void 0,
	            useProps = void 0;
	
	        if (props.styles) {
	            useProps = props;
	            styles = props.styles;
	        } else if ((0, _isObject3.default)(defaultStyles)) {
	            useProps = (0, _assign3.default)({}, props, {
	                styles: defaultStyles
	            });
	
	            styles = defaultStyles;
	        } else {
	            useProps = props;
	            styles = {};
	        }
	
	        var renderResult = Component.apply(undefined, [useProps].concat(args));
	
	        if (renderResult) {
	            return (0, _linkClass2.default)(renderResult, styles, options);
	        }
	
	        return _react2.default.createElement('noscript');
	    };
	
	    (0, _assign3.default)(WrappedComponent, Component);
	
	    return WrappedComponent;
	};
	
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isBoolean2 = __webpack_require__(185);
	
	var _isBoolean3 = _interopRequireDefault(_isBoolean2);
	
	var _isUndefined2 = __webpack_require__(186);
	
	var _isUndefined3 = _interopRequireDefault(_isUndefined2);
	
	var _forEach2 = __webpack_require__(187);
	
	var _forEach3 = _interopRequireDefault(_forEach2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @typedef CSSModules~Options
	 * @see {@link https://github.com/gajus/react-css-modules#options}
	 * @property {boolean} allowMultiple
	 * @property {boolean} errorWhenNotFound
	 */
	
	/**
	 * @param {CSSModules~Options} userConfiguration
	 * @returns {CSSModules~Options}
	 */
	exports.default = function () {
	    var userConfiguration = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var configuration = {
	        allowMultiple: false,
	        errorWhenNotFound: true
	    };
	
	    (0, _forEach3.default)(userConfiguration, function (value, name) {
	        if ((0, _isUndefined3.default)(configuration[name])) {
	            throw new Error('Unknown configuration property "' + name + '".');
	        }
	
	        if (!(0, _isBoolean3.default)(value)) {
	            throw new Error('"' + name + '" property value must be a boolean.');
	        }
	
	        configuration[name] = value;
	    });
	
	    return configuration;
	};
	
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(77);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike(value) && objectToString.call(value) == boolTag);
	}
	
	module.exports = isBoolean;


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(188),
	    baseEach = __webpack_require__(97),
	    baseIteratee = __webpack_require__(102),
	    isArray = __webpack_require__(87);
	
	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  return (typeof iteratee == 'function' && isArray(collection))
	    ? arrayEach(collection, iteratee)
	    : baseEach(collection, baseIteratee(iteratee));
	}
	
	module.exports = forEach;


/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 190 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Icon":"ms-Icon","ms-Icon--circleEmpty":"ms-Icon--circleEmpty","ms-Icon--circleFill":"ms-Icon--circleFill","ms-Icon--placeholder":"ms-Icon--placeholder","ms-Icon--star":"ms-Icon--star","ms-Icon--plus":"ms-Icon--plus","ms-Icon--minus":"ms-Icon--minus","ms-Icon--question":"ms-Icon--question","ms-Icon--exclamation":"ms-Icon--exclamation","ms-Icon--person":"ms-Icon--person","ms-Icon--mail":"ms-Icon--mail","ms-Icon--infoCircle":"ms-Icon--infoCircle","ms-Icon--alert":"ms-Icon--alert","ms-Icon--xCircle":"ms-Icon--xCircle","ms-Icon--mailOpen":"ms-Icon--mailOpen","ms-Icon--people":"ms-Icon--people","ms-Icon--bell":"ms-Icon--bell","ms-Icon--calendar":"ms-Icon--calendar","ms-Icon--scheduling":"ms-Icon--scheduling","ms-Icon--event":"ms-Icon--event","ms-Icon--folder":"ms-Icon--folder","ms-Icon--documents":"ms-Icon--documents","ms-Icon--onedrive":"ms-Icon--onedrive","ms-Icon--chat":"ms-Icon--chat","ms-Icon--sites":"ms-Icon--sites","ms-Icon--listBullets":"ms-Icon--listBullets","ms-Icon--calendarWeek":"ms-Icon--calendarWeek","ms-Icon--calendarWorkWeek":"ms-Icon--calendarWorkWeek","ms-Icon--calendarDay":"ms-Icon--calendarDay","ms-Icon--folderMove":"ms-Icon--folderMove","ms-Icon--panel":"ms-Icon--panel","ms-Icon--popout":"ms-Icon--popout","ms-Icon--menu":"ms-Icon--menu","ms-Icon--home":"ms-Icon--home","ms-Icon--favorites":"ms-Icon--favorites","ms-Icon--phone":"ms-Icon--phone","ms-Icon--mailSend":"ms-Icon--mailSend","ms-Icon--save":"ms-Icon--save","ms-Icon--trash":"ms-Icon--trash","ms-Icon--pencil":"ms-Icon--pencil","ms-Icon--flag":"ms-Icon--flag","ms-Icon--reply":"ms-Icon--reply","ms-Icon--miniatures":"ms-Icon--miniatures","ms-Icon--voicemail":"ms-Icon--voicemail","ms-Icon--play":"ms-Icon--play","ms-Icon--pause":"ms-Icon--pause","ms-Icon--onlineAdd":"ms-Icon--onlineAdd","ms-Icon--onlineJoin":"ms-Icon--onlineJoin","ms-Icon--replyAll":"ms-Icon--replyAll","ms-Icon--attachment":"ms-Icon--attachment","ms-Icon--drm":"ms-Icon--drm","ms-Icon--pinDown":"ms-Icon--pinDown","ms-Icon--refresh":"ms-Icon--refresh","ms-Icon--gear":"ms-Icon--gear","ms-Icon--smiley":"ms-Icon--smiley","ms-Icon--info":"ms-Icon--info","ms-Icon--lock":"ms-Icon--lock","ms-Icon--search":"ms-Icon--search","ms-Icon--questionReverse":"ms-Icon--questionReverse","ms-Icon--notRecurring":"ms-Icon--notRecurring","ms-Icon--tasks":"ms-Icon--tasks","ms-Icon--check":"ms-Icon--check","ms-Icon--x":"ms-Icon--x","ms-Icon--ellipsis":"ms-Icon--ellipsis","ms-Icon--dot":"ms-Icon--dot","ms-Icon--arrowUp":"ms-Icon--arrowUp","ms-Icon--arrowDown":"ms-Icon--arrowDown","ms-Icon--arrowLeft":"ms-Icon--arrowLeft","ms-Icon--arrowRight":"ms-Icon--arrowRight","ms-Icon--download":"ms-Icon--download","ms-Icon--directions":"ms-Icon--directions","ms-Icon--microphone":"ms-Icon--microphone","ms-Icon--caretUp":"ms-Icon--caretUp","ms-Icon--caretDown":"ms-Icon--caretDown","ms-Icon--caretLeft":"ms-Icon--caretLeft","ms-Icon--caretRight":"ms-Icon--caretRight","ms-Icon--caretUpLeft":"ms-Icon--caretUpLeft","ms-Icon--caretUpRight":"ms-Icon--caretUpRight","ms-Icon--caretDownRight":"ms-Icon--caretDownRight","ms-Icon--caretDownLeft":"ms-Icon--caretDownLeft","ms-Icon--note":"ms-Icon--note","ms-Icon--noteReply":"ms-Icon--noteReply","ms-Icon--noteForward":"ms-Icon--noteForward","ms-Icon--key":"ms-Icon--key","ms-Icon--tile":"ms-Icon--tile","ms-Icon--taskRecurring":"ms-Icon--taskRecurring","ms-Icon--starEmpty":"ms-Icon--starEmpty","ms-Icon--upload":"ms-Icon--upload","ms-Icon--wrench":"ms-Icon--wrench","ms-Icon--share":"ms-Icon--share","ms-Icon--documentReply":"ms-Icon--documentReply","ms-Icon--documentForward":"ms-Icon--documentForward","ms-Icon--partner":"ms-Icon--partner","ms-Icon--reactivate":"ms-Icon--reactivate","ms-Icon--sort":"ms-Icon--sort","ms-Icon--personAdd":"ms-Icon--personAdd","ms-Icon--chevronUp":"ms-Icon--chevronUp","ms-Icon--chevronDown":"ms-Icon--chevronDown","ms-Icon--chevronLeft":"ms-Icon--chevronLeft","ms-Icon--chevronRight":"ms-Icon--chevronRight","ms-Icon--peopleAdd":"ms-Icon--peopleAdd","ms-Icon--newsfeed":"ms-Icon--newsfeed","ms-Icon--notebook":"ms-Icon--notebook","ms-Icon--link":"ms-Icon--link","ms-Icon--chevronsUp":"ms-Icon--chevronsUp","ms-Icon--chevronsDown":"ms-Icon--chevronsDown","ms-Icon--chevronsLeft":"ms-Icon--chevronsLeft","ms-Icon--chevronsRight":"ms-Icon--chevronsRight","ms-Icon--clutter":"ms-Icon--clutter","ms-Icon--subscribe":"ms-Icon--subscribe","ms-Icon--unsubscribe":"ms-Icon--unsubscribe","ms-Icon--personRemove":"ms-Icon--personRemove","ms-Icon--receiptForward":"ms-Icon--receiptForward","ms-Icon--receiptReply":"ms-Icon--receiptReply","ms-Icon--receiptCheck":"ms-Icon--receiptCheck","ms-Icon--peopleRemove":"ms-Icon--peopleRemove","ms-Icon--merge":"ms-Icon--merge","ms-Icon--split":"ms-Icon--split","ms-Icon--eventCancel":"ms-Icon--eventCancel","ms-Icon--eventShare":"ms-Icon--eventShare","ms-Icon--today":"ms-Icon--today","ms-Icon--oofReply":"ms-Icon--oofReply","ms-Icon--voicemailReply":"ms-Icon--voicemailReply","ms-Icon--voicemailForward":"ms-Icon--voicemailForward","ms-Icon--ribbon":"ms-Icon--ribbon","ms-Icon--contact":"ms-Icon--contact","ms-Icon--eye":"ms-Icon--eye","ms-Icon--glasses":"ms-Icon--glasses","ms-Icon--print":"ms-Icon--print","ms-Icon--room":"ms-Icon--room","ms-Icon--post":"ms-Icon--post","ms-Icon--toggle":"ms-Icon--toggle","ms-Icon--touch":"ms-Icon--touch","ms-Icon--clock":"ms-Icon--clock","ms-Icon--fax":"ms-Icon--fax","ms-Icon--lightning":"ms-Icon--lightning","ms-Icon--dialpad":"ms-Icon--dialpad","ms-Icon--phoneTransfer":"ms-Icon--phoneTransfer","ms-Icon--phoneAdd":"ms-Icon--phoneAdd","ms-Icon--late":"ms-Icon--late","ms-Icon--chatAdd":"ms-Icon--chatAdd","ms-Icon--conflict":"ms-Icon--conflict","ms-Icon--navigate":"ms-Icon--navigate","ms-Icon--camera":"ms-Icon--camera","ms-Icon--filter":"ms-Icon--filter","ms-Icon--fullscreen":"ms-Icon--fullscreen","ms-Icon--new":"ms-Icon--new","ms-Icon--mailEmpty":"ms-Icon--mailEmpty","ms-Icon--editBox":"ms-Icon--editBox","ms-Icon--waffle":"ms-Icon--waffle","ms-Icon--work":"ms-Icon--work","ms-Icon--eventRecurring":"ms-Icon--eventRecurring","ms-Icon--cart":"ms-Icon--cart","ms-Icon--socialListening":"ms-Icon--socialListening","ms-Icon--mapMarker":"ms-Icon--mapMarker","ms-Icon--org":"ms-Icon--org","ms-Icon--replyAlt":"ms-Icon--replyAlt","ms-Icon--replyAllAlt":"ms-Icon--replyAllAlt","ms-Icon--eventInfo":"ms-Icon--eventInfo","ms-Icon--group":"ms-Icon--group","ms-Icon--money":"ms-Icon--money","ms-Icon--graph":"ms-Icon--graph","ms-Icon--noteEdit":"ms-Icon--noteEdit","ms-Icon--dashboard":"ms-Icon--dashboard","ms-Icon--mailEdit":"ms-Icon--mailEdit","ms-Icon--pinLeft":"ms-Icon--pinLeft","ms-Icon--heart":"ms-Icon--heart","ms-Icon--heartEmpty":"ms-Icon--heartEmpty","ms-Icon--picture":"ms-Icon--picture","ms-Icon--cake":"ms-Icon--cake","ms-Icon--books":"ms-Icon--books","ms-Icon--chart":"ms-Icon--chart","ms-Icon--video":"ms-Icon--video","ms-Icon--soccer":"ms-Icon--soccer","ms-Icon--meal":"ms-Icon--meal","ms-Icon--balloon":"ms-Icon--balloon","ms-Icon--cat":"ms-Icon--cat","ms-Icon--dog":"ms-Icon--dog","ms-Icon--bag":"ms-Icon--bag","ms-Icon--music":"ms-Icon--music","ms-Icon--stopwatch":"ms-Icon--stopwatch","ms-Icon--coffee":"ms-Icon--coffee","ms-Icon--briefcase":"ms-Icon--briefcase","ms-Icon--pill":"ms-Icon--pill","ms-Icon--trophy":"ms-Icon--trophy","ms-Icon--firstAid":"ms-Icon--firstAid","ms-Icon--plane":"ms-Icon--plane","ms-Icon--page":"ms-Icon--page","ms-Icon--car":"ms-Icon--car","ms-Icon--dogAlt":"ms-Icon--dogAlt","ms-Icon--document":"ms-Icon--document","ms-Icon--metadata":"ms-Icon--metadata","ms-Icon--pointItem":"ms-Icon--pointItem","ms-Icon--text":"ms-Icon--text","ms-Icon--fieldText":"ms-Icon--fieldText","ms-Icon--fieldNumber":"ms-Icon--fieldNumber","ms-Icon--dropdown":"ms-Icon--dropdown","ms-Icon--radioButton":"ms-Icon--radioButton","ms-Icon--checkbox":"ms-Icon--checkbox","ms-Icon--story":"ms-Icon--story","ms-Icon--bold":"ms-Icon--bold","ms-Icon--italic":"ms-Icon--italic","ms-Icon--underline":"ms-Icon--underline","ms-Icon--quote":"ms-Icon--quote","ms-Icon--styleRemove":"ms-Icon--styleRemove","ms-Icon--pictureAdd":"ms-Icon--pictureAdd","ms-Icon--pictureRemove":"ms-Icon--pictureRemove","ms-Icon--desktop":"ms-Icon--desktop","ms-Icon--tablet":"ms-Icon--tablet","ms-Icon--mobile":"ms-Icon--mobile","ms-Icon--table":"ms-Icon--table","ms-Icon--hide":"ms-Icon--hide","ms-Icon--shield":"ms-Icon--shield","ms-Icon--header":"ms-Icon--header","ms-Icon--paint":"ms-Icon--paint","ms-Icon--support":"ms-Icon--support","ms-Icon--settings":"ms-Icon--settings","ms-Icon--creditCard":"ms-Icon--creditCard","ms-Icon--reload":"ms-Icon--reload","ms-Icon--peopleSecurity":"ms-Icon--peopleSecurity","ms-Icon--fieldTextBox":"ms-Icon--fieldTextBox","ms-Icon--multiChoice":"ms-Icon--multiChoice","ms-Icon--fieldMail":"ms-Icon--fieldMail","ms-Icon--contactForm":"ms-Icon--contactForm","ms-Icon--circleHalfFilled":"ms-Icon--circleHalfFilled","ms-Icon--documentPDF":"ms-Icon--documentPDF","ms-Icon--bookmark":"ms-Icon--bookmark","ms-Icon--circleUnfilled":"ms-Icon--circleUnfilled","ms-Icon--circleFilled":"ms-Icon--circleFilled","ms-Icon--textBox":"ms-Icon--textBox","ms-Icon--drop":"ms-Icon--drop","ms-Icon--sun":"ms-Icon--sun","ms-Icon--lifesaver":"ms-Icon--lifesaver","ms-Icon--lifesaverLock":"ms-Icon--lifesaverLock","ms-Icon--mailUnread":"ms-Icon--mailUnread","ms-Icon--mailRead":"ms-Icon--mailRead","ms-Icon--inboxCheck":"ms-Icon--inboxCheck","ms-Icon--folderSearch":"ms-Icon--folderSearch","ms-Icon--collapse":"ms-Icon--collapse","ms-Icon--expand":"ms-Icon--expand","ms-Icon--ascending":"ms-Icon--ascending","ms-Icon--descending":"ms-Icon--descending","ms-Icon--filterClear":"ms-Icon--filterClear","ms-Icon--checkboxEmpty":"ms-Icon--checkboxEmpty","ms-Icon--checkboxMixed":"ms-Icon--checkboxMixed","ms-Icon--boards":"ms-Icon--boards","ms-Icon--checkboxCheck":"ms-Icon--checkboxCheck","ms-Icon--frowny":"ms-Icon--frowny","ms-Icon--lightBulb":"ms-Icon--lightBulb","ms-Icon--globe":"ms-Icon--globe","ms-Icon--deviceWipe":"ms-Icon--deviceWipe","ms-Icon--listCheck":"ms-Icon--listCheck","ms-Icon--listGroup":"ms-Icon--listGroup","ms-Icon--timeline":"ms-Icon--timeline","ms-Icon--fontIncrease":"ms-Icon--fontIncrease","ms-Icon--fontDecrease":"ms-Icon--fontDecrease","ms-Icon--fontColor":"ms-Icon--fontColor","ms-Icon--mailCheck":"ms-Icon--mailCheck","ms-Icon--mailDown":"ms-Icon--mailDown","ms-Icon--listCheckbox":"ms-Icon--listCheckbox","ms-Icon--sunAdd":"ms-Icon--sunAdd","ms-Icon--sunQuestion":"ms-Icon--sunQuestion","ms-Icon--chevronThinUp":"ms-Icon--chevronThinUp","ms-Icon--chevronThinDown":"ms-Icon--chevronThinDown","ms-Icon--chevronThinLeft":"ms-Icon--chevronThinLeft","ms-Icon--chevronThinRight":"ms-Icon--chevronThinRight","ms-Icon--chevronThickUp":"ms-Icon--chevronThickUp","ms-Icon--chevronThickDown":"ms-Icon--chevronThickDown","ms-Icon--chevronThickLeft":"ms-Icon--chevronThickLeft","ms-Icon--chevronThickRight":"ms-Icon--chevronThickRight","ms-Icon--linkRemove":"ms-Icon--linkRemove","ms-Icon--alertOutline":"ms-Icon--alertOutline","ms-Icon--documentLandscape":"ms-Icon--documentLandscape","ms-Icon--documentAdd":"ms-Icon--documentAdd","ms-Icon--toggleMiddle":"ms-Icon--toggleMiddle","ms-Icon--embed":"ms-Icon--embed","ms-Icon--listNumbered":"ms-Icon--listNumbered","ms-Icon--peopleCheck":"ms-Icon--peopleCheck","ms-Icon--caretUpOutline":"ms-Icon--caretUpOutline","ms-Icon--caretDownOutline":"ms-Icon--caretDownOutline","ms-Icon--caretLeftOutline":"ms-Icon--caretLeftOutline","ms-Icon--caretRightOutline":"ms-Icon--caretRightOutline","ms-Icon--mailSync":"ms-Icon--mailSync","ms-Icon--mailError":"ms-Icon--mailError","ms-Icon--mailPause":"ms-Icon--mailPause","ms-Icon--peopleSync":"ms-Icon--peopleSync","ms-Icon--peopleError":"ms-Icon--peopleError","ms-Icon--peoplePause":"ms-Icon--peoplePause","ms-Icon--circleBall":"ms-Icon--circleBall","ms-Icon--circleBalloons":"ms-Icon--circleBalloons","ms-Icon--circleCar":"ms-Icon--circleCar","ms-Icon--circleCat":"ms-Icon--circleCat","ms-Icon--circleCoffee":"ms-Icon--circleCoffee","ms-Icon--circleDog":"ms-Icon--circleDog","ms-Icon--circleLightning":"ms-Icon--circleLightning","ms-Icon--circlePill":"ms-Icon--circlePill","ms-Icon--circlePlane":"ms-Icon--circlePlane","ms-Icon--circlePoodle":"ms-Icon--circlePoodle","ms-Icon--checkPeople":"ms-Icon--checkPeople","ms-Icon--documentSearch":"ms-Icon--documentSearch","ms-Icon--sortLines":"ms-Icon--sortLines","ms-Icon--calendarPublic":"ms-Icon--calendarPublic","ms-Icon--contactPublic":"ms-Icon--contactPublic","ms-Icon--classNotebook":"ms-Icon--classNotebook","ms-Icon--triangleUp":"ms-Icon--triangleUp","ms-Icon--triangleRight":"ms-Icon--triangleRight","ms-Icon--triangleDown":"ms-Icon--triangleDown","ms-Icon--triangleLeft":"ms-Icon--triangleLeft","ms-Icon--triangleEmptyUp":"ms-Icon--triangleEmptyUp","ms-Icon--triangleEmptyRight":"ms-Icon--triangleEmptyRight","ms-Icon--triangleEmptyDown":"ms-Icon--triangleEmptyDown","ms-Icon--triangleEmptyLeft":"ms-Icon--triangleEmptyLeft","ms-Icon--filePDF":"ms-Icon--filePDF","ms-Icon--fileImage":"ms-Icon--fileImage","ms-Icon--fileDocument":"ms-Icon--fileDocument","ms-Icon--listGroup2":"ms-Icon--listGroup2","ms-Icon--copy":"ms-Icon--copy","ms-Icon--creditCardOutline":"ms-Icon--creditCardOutline","ms-Icon--mailPublic":"ms-Icon--mailPublic","ms-Icon--folderPublic":"ms-Icon--folderPublic","ms-Icon--teamwork":"ms-Icon--teamwork","ms-Icon--move":"ms-Icon--move","ms-Icon--classroom":"ms-Icon--classroom","ms-Icon--menu2":"ms-Icon--menu2","ms-Icon--plus2":"ms-Icon--plus2","ms-Icon--tag":"ms-Icon--tag","ms-Icon--arrowUp2":"ms-Icon--arrowUp2","ms-Icon--arrowDown2":"ms-Icon--arrowDown2","ms-Icon--circlePlus":"ms-Icon--circlePlus","ms-Icon--circleInfo":"ms-Icon--circleInfo","ms-Icon--section":"ms-Icon--section","ms-Icon--sections":"ms-Icon--sections","ms-Icon--at":"ms-Icon--at","ms-Icon--arrowUpRight":"ms-Icon--arrowUpRight","ms-Icon--arrowDownRight":"ms-Icon--arrowDownRight","ms-Icon--arrowDownLeft":"ms-Icon--arrowDownLeft","ms-Icon--arrowUpLeft":"ms-Icon--arrowUpLeft","ms-Icon--bundle":"ms-Icon--bundle","ms-Icon--pictureEdit":"ms-Icon--pictureEdit","ms-Icon--protectionCenter":"ms-Icon--protectionCenter","ms-Icon--alert2":"ms-Icon--alert2","ms-Icon--circle":"ms-Icon--circle","ms-Icon--msn":"ms-Icon--msn","ms-Icon--sway":"ms-Icon--sway","ms-Icon--dynamicsMarketing":"ms-Icon--dynamicsMarketing"};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = invokeWhenNotDisabled;
	
	var _lodash = __webpack_require__(49);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function invokeWhenNotDisabled(disabled, fn) {
	  return function () {
	    if (!disabled && (0, _lodash2.default)(fn)) {
	      fn.apply(undefined, arguments);
	    }
	  };
	}

/***/ },
/* 192 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Button":"ms-Button","ms-Button-label":"ms-Button-label","is-disabled":"is-disabled","ms-Button-icon":"ms-Button-icon","ms-Button-description":"ms-Button-description","ms-Button--primary":"ms-Button--primary","ms-Button--hero":"ms-Button--hero","ms-Icon":"ms-Icon","ms-Button--compound":"ms-Button--compound","ms-Button--command":"ms-Button--command"};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _ChoiceField = __webpack_require__(194);
	
	var _ChoiceField2 = _interopRequireDefault(_ChoiceField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ChoiceField2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Label = __webpack_require__(195);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _isDefined = __webpack_require__(50);
	
	var _isDefined2 = _interopRequireDefault(_isDefined);
	
	var _ChoiceField = __webpack_require__(200);
	
	var _ChoiceField2 = _interopRequireDefault(_ChoiceField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChoiceField = function ChoiceField(_ref) {
	  var className = _ref.className;
	  var disabled = _ref.disabled;
	  var id = _ref.id;
	  var label = _ref.label;
	  var name = _ref.name;
	  var required = _ref.required;
	  var type = _ref.type;
	  var checked = _ref.checked;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'disabled', 'id', 'label', 'name', 'required', 'type', 'checked']);
	
	  var inputId = 'ChoiceField_' + (id || name || Date.now()) + '_input';
	
	  return _react2.default.createElement(
	    'div',
	    { 'data-fabric': 'ChoiceField',
	      id: id,
	      className: className,
	      styleName: 'ms-ChoiceField' },
	    _react2.default.createElement('input', (0, _extends3.default)({}, props, {
	      children: null,
	      id: inputId,
	      name: name,
	      type: type,
	      disabled: disabled,
	      checked: (0, _isDefined2.default)(checked) ? checked : false,
	      styleName: 'ms-ChoiceField-input' })),
	    _react2.default.createElement(
	      'label',
	      { styleName: 'ms-ChoiceField-field',
	        htmlFor: inputId },
	      _react2.default.createElement(
	        _Label2.default,
	        { componentClass: 'span', styleName: 'ms-Label', required: required },
	        label
	      )
	    )
	  );
	};
	ChoiceField.displayName = 'ChoiceField';
	ChoiceField.propTypes = {
	  checked: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  id: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.node,
	  name: _react2.default.PropTypes.string.isRequired,
	  required: _react2.default.PropTypes.bool,
	  type: _react2.default.PropTypes.oneOf(['radio', 'checkbox']).isRequired
	};
	ChoiceField.defaultProps = {
	  disabled: false,
	  require: false,
	  type: 'checkbox'
	};
	
	exports.default = (0, _fabricComponent2.default)(ChoiceField, _ChoiceField2.default);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Label = __webpack_require__(196);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Label2.default;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _elementType = __webpack_require__(197);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _invokeWhenNotDisabled = __webpack_require__(191);
	
	var _invokeWhenNotDisabled2 = _interopRequireDefault(_invokeWhenNotDisabled);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Label = __webpack_require__(199);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Label = function Label(_ref) {
	  var children = _ref.children;
	  var ComponentClass = _ref.componentClass;
	  var disabled = _ref.disabled;
	  var htmlFor = _ref.htmlFor;
	  var onClick = _ref.onClick;
	  var required = _ref.required;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'componentClass', 'disabled', 'htmlFor', 'onClick', 'required']);
	  return _react2.default.createElement(
	    ComponentClass,
	    (0, _extends3.default)({ 'data-fabric': 'Label'
	    }, props, {
	      htmlFor: htmlFor,
	      onClick: (0, _invokeWhenNotDisabled2.default)(disabled, onClick),
	      styleName: (0, _classnames2.default)('ms-Label', {
	        'is-required': required,
	        'is-disabled': disabled
	      }) }),
	    children
	  );
	};
	Label.displayName = 'Label';
	Label.propTypes = {
	  children: _react2.default.PropTypes.node,
	  componentClass: _elementType2.default,
	  disabled: _react2.default.PropTypes.bool,
	  htmlFor: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  required: _react2.default.PropTypes.bool
	};
	Label.defaultProps = {
	  componentClass: 'label',
	  disabled: false,
	  required: false
	};
	
	exports.default = (0, _fabricComponent2.default)(Label, _Label2.default);

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _common = __webpack_require__(198);
	
	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	
	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');
	
	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }
	
	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}
	
	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;
	
	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}
	
	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ },
/* 199 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Label":"ms-Label","is-required":"is-required","is-disabled":"is-disabled"};

/***/ },
/* 200 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-ChoiceField":"ms-ChoiceField","ms-Label":"ms-Label","ms-ChoiceField-input":"ms-ChoiceField-input","ms-ChoiceField-field":"ms-ChoiceField-field","ms-ChoiceFieldGroup":"ms-ChoiceFieldGroup"};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _ChoiceFieldGroup = __webpack_require__(202);
	
	var _ChoiceFieldGroup2 = _interopRequireDefault(_ChoiceFieldGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ChoiceFieldGroup2.default;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Label = __webpack_require__(195);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _ChoiceField = __webpack_require__(200);
	
	var _ChoiceField2 = _interopRequireDefault(_ChoiceField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var handleChildChanged = function handleChildChanged(onChange) {
	  return function (e) {
	    if (onChange && e.target.checked) {
	      onChange(e);
	    }
	  };
	};
	
	var createChoices = function createChoices(_ref) {
	  var children = _ref.children;
	  var name = _ref.name;
	  var value = _ref.value;
	  var onChange = _ref.onChange;
	  return _react2.default.Children.map(children, function (child, i) {
	    if (child === null) {
	      return child;
	    }
	
	    return _react2.default.cloneElement(child, {
	      type: 'radio',
	      name: name,
	      id: 'ChoiceFieldGroup_' + name + '[' + i + ']',
	      checked: value === child.props.value,
	      onChange: handleChildChanged(onChange)
	    });
	  });
	};
	
	var ChoiceFieldGroup = function ChoiceFieldGroup(_ref2) {
	  var children = _ref2.children;
	  var name = _ref2.name;
	  var required = _ref2.required;
	  var title = _ref2.title;
	  var value = _ref2.value;
	  var onChange = _ref2.onChange;
	  var props = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'name', 'required', 'title', 'value', 'onChange']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({ 'data-fabric': 'ChoiceFieldGroup'
	    }, props, {
	      styleName: 'ms-ChoiceFieldGroup' }),
	    _react2.default.createElement(
	      'div',
	      null,
	      title && _react2.default.createElement(
	        _Label2.default,
	        { required: required },
	        title
	      )
	    ),
	    createChoices({ children: children, name: name, value: value, onChange: onChange })
	  );
	};
	ChoiceFieldGroup.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  required: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func
	};
	ChoiceFieldGroup.defaultProps = {
	  required: false
	};
	
	exports.default = (0, _fabricComponent2.default)(ChoiceFieldGroup, _ChoiceField2.default);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DialogSubtext = exports.DialogTitle = exports.DialogButton = exports.DialogAction = exports.default = undefined;
	
	var _Dialog = __webpack_require__(204);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _DialogAction2 = __webpack_require__(209);
	
	var _DialogAction3 = _interopRequireDefault(_DialogAction2);
	
	var _DialogButton2 = __webpack_require__(205);
	
	var _DialogButton3 = _interopRequireDefault(_DialogButton2);
	
	var _DialogTitle2 = __webpack_require__(207);
	
	var _DialogTitle3 = _interopRequireDefault(_DialogTitle2);
	
	var _DialogSubtext2 = __webpack_require__(208);
	
	var _DialogSubtext3 = _interopRequireDefault(_DialogSubtext2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dialog2.default;
	exports.DialogAction = _DialogAction3.default;
	exports.DialogButton = _DialogButton3.default;
	exports.DialogTitle = _DialogTitle3.default;
	exports.DialogSubtext = _DialogSubtext3.default;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DialogButton = __webpack_require__(205);
	
	var _DialogButton2 = _interopRequireDefault(_DialogButton);
	
	var _DialogTitle = __webpack_require__(207);
	
	var _DialogTitle2 = _interopRequireDefault(_DialogTitle);
	
	var _DialogSubtext = __webpack_require__(208);
	
	var _DialogSubtext2 = _interopRequireDefault(_DialogSubtext);
	
	var _DialogAction = __webpack_require__(209);
	
	var _DialogAction2 = _interopRequireDefault(_DialogAction);
	
	var _Overlay = __webpack_require__(210);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dialog = __webpack_require__(206);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_TITLE = _react2.default.createElement(
	  _DialogTitle2.default,
	  null,
	  'Dialog'
	);
	
	var scanChildren = function scanChildren(children) {
	  return _react2.default.Children.toArray(children).reduce(function (r, child) {
	    if ((0, _fabricComponent.isFabricComponent)(child, _DialogTitle2.default)) {
	      r.title = r.title === DEFAULT_TITLE ? child : r.title; // eslint-disable-line no-param-reassign
	    } else if ((0, _fabricComponent.isFabricComponent)(child, _DialogAction2.default)) {
	        r.actions.push(child);
	      } else {
	        r.content.push(child);
	      }
	    return r;
	  }, { title: DEFAULT_TITLE, content: [], actions: [] });
	};
	
	var Dialog = function Dialog(_ref) {
	  var children = _ref.children;
	  var closeable = _ref.closeable;
	  var darkOverlay = _ref.darkOverlay;
	  var hidden = _ref.hidden;
	  var onClose = _ref.onClose;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'closeable', 'darkOverlay', 'hidden', 'onClose']);
	
	  var _scanChildren = scanChildren(children);
	
	  var title = _scanChildren.title;
	  var content = _scanChildren.content;
	  var actions = _scanChildren.actions;
	
	
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({ 'data-fabric': 'Dialog'
	    }, props, {
	      styleName: (0, _classnames2.default)('ms-Dialog', {
	        'ms-Dialog--close': closeable,
	        'ms-Dialog--hidden': hidden
	      }) }),
	    _react2.default.createElement(_Overlay2.default, { styleName: 'ms-Overlay', dark: darkOverlay, onClick: closeable ? onClose : null }),
	    _react2.default.createElement(
	      'div',
	      { styleName: 'ms-Dialog-main' },
	      closeable && _react2.default.createElement(_DialogButton2.default, { close: true, onClick: onClose }),
	      title,
	      _react2.default.createElement(
	        'div',
	        { styleName: 'ms-Dialog-inner' },
	        _react2.default.createElement(
	          'div',
	          { styleName: 'ms-Dialog-content' },
	          content
	        ),
	        actions.length > 0 && _react2.default.createElement(
	          'div',
	          { styleName: 'ms-Dialog-actions' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'ms-Dialog-actionsRight' },
	            actions
	          )
	        )
	      )
	    )
	  );
	};
	Dialog.displayName = 'Dialog';
	Dialog.propTypes = {
	  children: _react2.default.PropTypes.node,
	  closeable: _react2.default.PropTypes.bool,
	  darkOverlay: _react2.default.PropTypes.bool,
	  hidden: _react2.default.PropTypes.bool,
	  onClose: _react2.default.PropTypes.func
	};
	Dialog.defaultProps = {
	  closeable: false,
	  darkOverlay: false,
	  hidden: true
	};
	Dialog.Subtext = _DialogSubtext2.default;
	Dialog.Action = _DialogAction2.default;
	Dialog.Title = _DialogTitle2.default;
	
	exports.default = (0, _fabricComponent2.default)(Dialog, _Dialog2.default);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dialog = __webpack_require__(206);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DialogButton = function DialogButton(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var close = _ref.close;
	  var onClick = _ref.onClick;
	  return _react2.default.createElement(
	    'button',
	    { onClick: onClick,
	      styleName: (0, _classnames2.default)('ms-Dialog-button', {
	        'ms-Dialog-button--close': close
	      }),
	      className: className },
	    close && _react2.default.createElement(_Icon2.default, { styleName: 'ms-Icon ms-Icon--x', glyph: 'x' }),
	    children
	  );
	};
	DialogButton.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string,
	  close: _react2.default.PropTypes.bool,
	  onClick: _react2.default.PropTypes.func
	};
	
	exports.default = (0, _fabricComponent2.default)(DialogButton, _Dialog2.default);

/***/ },
/* 206 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Dialog":"ms-Dialog","ms-Button":"ms-Button","ms-Button--compound":"ms-Button--compound","ms-Overlay":"ms-Overlay","ms-Dialog-main":"ms-Dialog-main","ms-Dialog-button":"ms-Dialog-button","ms-Dialog-button--close":"ms-Dialog-button--close","ms-Icon":"ms-Icon","ms-Icon--x":"ms-Icon--x","ms-Dialog-inner":"ms-Dialog-inner","ms-Dialog-header":"ms-Dialog-header","ms-Dialog-title":"ms-Dialog-title","ms-Dialog-content":"ms-Dialog-content","ms-Dialog-subText":"ms-Dialog-subText","ms-Dialog-actions":"ms-Dialog-actions","ms-Dialog-actionsRight":"ms-Dialog-actionsRight","ms-Dialog-action":"ms-Dialog-action","ms-Dialog--close":"ms-Dialog--close","ms-Dialog--lgHeader":"ms-Dialog--lgHeader","ms-Dialog--multiline":"ms-Dialog--multiline","ms-Dialog--hidden":"ms-Dialog--hidden"};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dialog = __webpack_require__(206);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DialogTitle = function DialogTitle(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, props, {
	      styleName: 'ms-Dialog-header',
	      className: className }),
	    _react2.default.createElement(
	      'p',
	      { styleName: 'ms-Dialog-title' },
	      children
	    )
	  );
	};
	DialogTitle.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string
	};
	
	exports.default = (0, _fabricComponent2.default)(DialogTitle, _Dialog2.default);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dialog = __webpack_require__(206);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DialogSubtext = function DialogSubtext(_ref) {
	  var className = _ref.className;
	  var children = _ref.children;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);
	  return _react2.default.createElement(
	    'p',
	    (0, _extends3.default)({}, props, {
	      styleName: 'ms-Dialog-subText',
	      className: className }),
	    children
	  );
	};
	DialogSubtext.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string
	};
	
	exports.default = (0, _fabricComponent2.default)(DialogSubtext, _Dialog2.default);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(1);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dialog = __webpack_require__(206);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DialogAction = function DialogAction(_ref) {
	  var children = _ref.children;
	  var className = _ref.className;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
	  return _react2.default.createElement(
	    _Button2.default,
	    (0, _extends3.default)({}, props, {
	      styleName: 'ms-Button ms-Dialog-action',
	      className: className }),
	    children
	  );
	};
	DialogAction.propTypes = {
	  children: _react2.default.PropTypes.node,
	  className: _react2.default.PropTypes.string
	};
	
	exports.default = (0, _fabricComponent2.default)(DialogAction, _Dialog2.default);

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Overlay = __webpack_require__(211);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Overlay2.default;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Overlay = __webpack_require__(212);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Overlay = function Overlay(_ref) {
	  var dark = _ref.dark;
	  var hidden = _ref.hidden;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['dark', 'hidden']);
	  return _react2.default.createElement('div', (0, _extends3.default)({ 'data-fabric': 'Overlay'
	  }, props, {
	    styleName: (0, _classnames2.default)('ms-Overlay', {
	      'ms-Overlay--dark': dark,
	      'ms-Overlay--none': hidden
	    }) }));
	};
	Overlay.displayName = 'Overlay';
	Overlay.propTypes = {
	  dark: _react2.default.PropTypes.bool,
	  hidden: _react2.default.PropTypes.bool
	};
	
	exports.default = (0, _fabricComponent2.default)(Overlay, _Overlay2.default);

/***/ },
/* 212 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Overlay":"ms-Overlay","ms-Overlay--dark":"ms-Overlay--dark","ms-Overlay--none":"ms-Overlay--none"};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dropdown = __webpack_require__(214);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dropdown2.default;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(215);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(220);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(221);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(222);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class, _class2, _temp2;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(265);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Label = __webpack_require__(195);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _events = __webpack_require__(266);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Dropdown = __webpack_require__(270);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuePropType = _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]);
	
	var Dropdown = (_dec = (0, _fabricComponent2.default)(_Dropdown2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(Dropdown, _React$Component);
	
	  function Dropdown() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Dropdown);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Dropdown)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getSelectedOption = function () {
	      var _this$props = _this.props;
	      var options = _this$props.options;
	      var value = _this$props.value;
	
	
	      return options.filter(function (option) {
	        return option.value === value;
	      })[0];
	    }, _this.handleMouseDown = function (e) {
	      var _this$props2 = _this.props;
	      var onFocus = _this$props2.onFocus;
	      var disabled = _this$props2.disabled;
	
	
	      _events2.default.pauseEvent(e);
	
	      if (!disabled) {
	        if (onFocus) {
	          onFocus(e);
	        }
	      }
	    }, _this.handleSelect = function (option, e) {
	      var _this$props3 = _this.props;
	      var onBlur = _this$props3.onBlur;
	      var onChange = _this$props3.onChange;
	      var disabled = _this$props3.disabled;
	
	
	      e.target.value = option.value; // eslint-disable-line no-param-reassign
	
	      if (!disabled) {
	        if (onChange) {
	          onChange(e, option);
	        }
	      }
	
	      if (onBlur) {
	        onBlur(e, option);
	      }
	    }, _this.handleDocumentClick = function (e) {
	      var _this$props4 = _this.props;
	      var active = _this$props4.active;
	      var onBlur = _this$props4.onBlur;
	      var value = _this$props4.value;
	
	
	      if (active && !_events2.default.targetIsDescendant(e, _reactDom2.default.findDOMNode(_this))) {
	        e.target.value = value; // eslint-disable-line no-param-reassign
	
	        if (onBlur) {
	          onBlur(e);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Dropdown, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      if (!this.props.active && nextProps.active) {
	        _events2.default.addEventsToDocument({ click: this.handleDocumentClick });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.active && !this.props.active) {
	        _events2.default.removeEventsFromDocument({ click: this.handleDocumentClick });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.active) {
	        _events2.default.removeEventsFromDocument({ click: this.handleDocumentClick });
	      }
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(option, i) {
	      var styleName = (0, _classnames2.default)('ms-Dropdown-item', {
	        'is-selected': option.value === this.props.value
	      });
	      var handleSelect = this.handleSelect.bind(this, option);
	
	      return _react2.default.createElement(
	        'li',
	        { key: i,
	          styleName: styleName },
	        _react2.default.createElement(
	          'div',
	          { onMouseDown: handleSelect },
	          option.label
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var label = _props.label;
	      var name = _props.name;
	      var onFocus = _props.onFocus;
	      var options = _props.options;
	      var placeholder = _props.placeholder;
	      var required = _props.required;
	      var value = _props.value;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'disabled', 'label', 'name', 'onFocus', 'options', 'placeholder', 'required', 'value']);
	
	
	      var selected = this.getSelectedOption();
	      var styleName = (0, _classnames2.default)('ms-Dropdown', {
	        'ms-Dropdown--textLeft': this.props.textLeft,
	        'is-open': this.props.active,
	        'is-disabled': this.props.disabled
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { 'data-fabric': 'Dropdown',
	          styleName: styleName,
	          className: className },
	        label && _react2.default.createElement(
	          _Label2.default,
	          { styleName: 'ms-Label',
	            htmlFor: '',
	            onClick: onFocus,
	            required: required,
	            disabled: disabled },
	          label
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'ms-Dropdown-inner' },
	          _react2.default.createElement(_Icon2.default, { styleName: 'ms-Dropdown-caretDown', glyph: 'caretDown' }),
	          _react2.default.createElement(
	            'select',
	            (0, _extends3.default)({}, props, {
	              styleName: 'ms-Dropdown-select',
	              name: name,
	              value: value || '' }),
	            options.map(function (option, i) {
	              return _react2.default.createElement(
	                'option',
	                { key: i, value: option.value },
	                option.label
	              );
	            })
	          ),
	          _react2.default.createElement(
	            'span',
	            { styleName: 'ms-Dropdown-title', onMouseDown: this.handleMouseDown },
	            selected ? selected.label : placeholder
	          ),
	          _react2.default.createElement(
	            'ul',
	            { styleName: 'ms-Dropdown-items' },
	            options.map(this.renderItem.bind(this))
	          )
	        )
	      );
	    }
	  }]);
	  return Dropdown;
	}(_react2.default.Component), _class2.displayName = 'Dropdown', _class2.propTypes = {
	  active: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  id: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.node,
	  name: _react2.default.PropTypes.string,
	  onBlur: _react2.default.PropTypes.func,
	  onChange: _react2.default.PropTypes.func,
	  onFocus: _react2.default.PropTypes.func,
	  options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    label: _react2.default.PropTypes.string,
	    value: valuePropType
	  })).isRequired,
	  placeholder: _react2.default.PropTypes.string,
	  required: _react2.default.PropTypes.bool,
	  textLeft: _react2.default.PropTypes.bool,
	  value: valuePropType
	}, _class2.defaultProps = {
	  active: false,
	  disabled: false,
	  required: false,
	  textLeft: false,
	  options: []
	}, _temp2)) || _class);
	exports.default = Dropdown;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(216), __esModule: true };

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(217);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(40)
	  , $getPrototypeOf = __webpack_require__(218);
	
	__webpack_require__(219)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(25)
	  , toObject    = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(34)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(42);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(223);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(224);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(243);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(225), __esModule: true };

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(226);
	__webpack_require__(238);
	module.exports = __webpack_require__(242).f('iterator');

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(227)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(228)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(29);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(229)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(230)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(25)
	  , Iterators      = __webpack_require__(231)
	  , $iterCreate    = __webpack_require__(232)
	  , setToStringTag = __webpack_require__(236)
	  , getPrototypeOf = __webpack_require__(218)
	  , ITERATOR       = __webpack_require__(237)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(233)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(236)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(237)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(234)
	  , enumBugKeys = __webpack_require__(37)
	  , IE_PROTO    = __webpack_require__(34)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(235).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(23);
	
	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(25)
	  , TAG = __webpack_require__(237)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(35)('wks')
	  , uid        = __webpack_require__(36)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(239);
	var global        = __webpack_require__(8)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(231)
	  , TO_STRING_TAG = __webpack_require__(237)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(240)
	  , step             = __webpack_require__(241)
	  , Iterators        = __webpack_require__(231)
	  , toIObject        = __webpack_require__(26);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(228)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(237);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(8)
	  , has            = __webpack_require__(25)
	  , DESCRIPTORS    = __webpack_require__(17)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(230)
	  , META           = __webpack_require__(246).KEY
	  , $fails         = __webpack_require__(18)
	  , shared         = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(236)
	  , uid            = __webpack_require__(36)
	  , wks            = __webpack_require__(237)
	  , wksExt         = __webpack_require__(242)
	  , wksDefine      = __webpack_require__(247)
	  , keyOf          = __webpack_require__(248)
	  , enumKeys       = __webpack_require__(249)
	  , isArray        = __webpack_require__(250)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(20)
	  , createDesc     = __webpack_require__(21)
	  , _create        = __webpack_require__(233)
	  , gOPNExt        = __webpack_require__(251)
	  , $GOPD          = __webpack_require__(253)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(23)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(252).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(39).f  = $propertyIsEnumerable;
	  __webpack_require__(38).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(229)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(36)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(25)
	  , setDesc  = __webpack_require__(13).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(18)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(8)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(229)
	  , wksExt         = __webpack_require__(242)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(23)
	  , toIObject = __webpack_require__(26);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(23)
	  , gOPS    = __webpack_require__(38)
	  , pIE     = __webpack_require__(39);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(28);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(26)
	  , gOPN      = __webpack_require__(252).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(24)
	  , hiddenKeys = __webpack_require__(37).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(39)
	  , createDesc     = __webpack_require__(21)
	  , toIObject      = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(20)
	  , has            = __webpack_require__(25)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 254 */
/***/ function(module, exports) {



/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(258);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(262);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(223);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(260);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(261).set});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(10)(Function.call, __webpack_require__(253).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(263), __esModule: true };

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(264);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(233)});

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_265__;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(267);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _isDefined = __webpack_require__(50);
	
	var _isDefined2 = _interopRequireDefault(_isDefined);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  /* eslint-disable guard-for-in */
	
	  addEventsToDocument: function addEventsToDocument(eventMap) {
	    (0, _keys2.default)(eventMap).forEach(function (key) {
	      document.addEventListener(key, eventMap[key], false);
	    });
	  },
	  removeEventsFromDocument: function removeEventsFromDocument(eventMap) {
	    (0, _keys2.default)(eventMap).forEach(function (key) {
	      document.removeEventListener(key, eventMap[key], false);
	    });
	  },
	
	  /* eslint-enable guard-for-in */
	
	  pauseEvent: function pauseEvent(event) {
	    /* eslint-disable no-param-reassign */
	    event.persist();
	    event.stopPropagation();
	    event.preventDefault();
	
	    event.returnValue = false;
	    event.cancelBubble = true;
	    /* eslint-enable no-param-reassign */
	  },
	  targetIsDescendant: function targetIsDescendant(event, parent) {
	    var node = event.target;
	    while ((0, _isDefined2.default)(node)) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	    return false;
	  }
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(269);
	module.exports = __webpack_require__(9).Object.keys;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(40)
	  , $keys    = __webpack_require__(23);
	
	__webpack_require__(219)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 270 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Dropdown":"ms-Dropdown","ms-Dropdown-title":"ms-Dropdown-title","ms-Dropdown-caretDown":"ms-Dropdown-caretDown","ms-Label":"ms-Label","is-disabled":"is-disabled","ms-Dropdown--open":"ms-Dropdown--open","ms-Dropdown-items":"ms-Dropdown-items","is-open":"is-open","ms-Dropdown-select":"ms-Dropdown-select","ms-Dropdown-item":"ms-Dropdown-item","is-selected":"is-selected","ms-Dropdown-item--selected":"ms-Dropdown-item--selected","ms-Dropdown-inner":"ms-Dropdown-inner","ms-Dropdown--textLeft":"ms-Dropdown--textLeft"};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Row = exports.Col = exports.default = undefined;
	
	var _Grid = __webpack_require__(272);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Col2 = __webpack_require__(275);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(273);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Grid2.default;
	exports.Col = _Col3.default;
	exports.Row = _Row3.default;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Row = __webpack_require__(273);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(275);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Grid = __webpack_require__(274);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Grid = function Grid(_ref) {
	  var children = _ref.children;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({ 'data-fabric': 'Grid'
	    }, props, {
	      styleName: 'ms-Grid' }),
	    children
	  );
	};
	Grid.displayName = 'Grid';
	Grid.propTypes = {
	  children: _react2.default.PropTypes.node
	};
	Grid.Row = _Row2.default;
	Grid.Col = _Col2.default;
	
	exports.default = (0, _fabricComponent2.default)(Grid, _Grid2.default);

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Grid = __webpack_require__(274);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Row = function Row(_ref) {
	  var children = _ref.children;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, props, { styleName: 'ms-Grid-row' }),
	    children
	  );
	};
	Row.propTypes = {
	  children: _react2.default.PropTypes.node
	};
	
	exports.default = (0, _fabricComponent2.default)(Row, _Grid2.default);

/***/ },
/* 274 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Grid":"ms-Grid","ms-Grid-row":"ms-Grid-row","ms-Grid-col":"ms-Grid-col","ms-u-hiddenSm":"ms-u-hiddenSm","ms-u-hiddenMdDown":"ms-u-hiddenMdDown","ms-u-hiddenLgDown":"ms-u-hiddenLgDown","ms-u-hiddenXlDown":"ms-u-hiddenXlDown","ms-u-hiddenXxlDown":"ms-u-hiddenXxlDown","ms-u-hiddenMd":"ms-u-hiddenMd","ms-u-hiddenMdUp":"ms-u-hiddenMdUp","ms-u-hiddenLg":"ms-u-hiddenLg","ms-u-hiddenLgUp":"ms-u-hiddenLgUp","ms-u-hiddenXl":"ms-u-hiddenXl","ms-u-hiddenXlUp":"ms-u-hiddenXlUp","ms-u-hiddenXxl":"ms-u-hiddenXxl","ms-u-hiddenXxlUp":"ms-u-hiddenXxlUp","ms-u-hiddenXxxl":"ms-u-hiddenXxxl","ms-u-sm12":"ms-u-sm12","ms-u-sm11":"ms-u-sm11","ms-u-sm10":"ms-u-sm10","ms-u-sm9":"ms-u-sm9","ms-u-sm8":"ms-u-sm8","ms-u-sm7":"ms-u-sm7","ms-u-sm6":"ms-u-sm6","ms-u-sm5":"ms-u-sm5","ms-u-sm4":"ms-u-sm4","ms-u-sm3":"ms-u-sm3","ms-u-sm2":"ms-u-sm2","ms-u-sm1":"ms-u-sm1","ms-u-smPull12":"ms-u-smPull12","ms-u-smPull11":"ms-u-smPull11","ms-u-smPull10":"ms-u-smPull10","ms-u-smPull9":"ms-u-smPull9","ms-u-smPull8":"ms-u-smPull8","ms-u-smPull7":"ms-u-smPull7","ms-u-smPull6":"ms-u-smPull6","ms-u-smPull5":"ms-u-smPull5","ms-u-smPull4":"ms-u-smPull4","ms-u-smPull3":"ms-u-smPull3","ms-u-smPull2":"ms-u-smPull2","ms-u-smPull1":"ms-u-smPull1","ms-u-smPull0":"ms-u-smPull0","ms-u-smPush12":"ms-u-smPush12","ms-u-smPush11":"ms-u-smPush11","ms-u-smPush10":"ms-u-smPush10","ms-u-smPush9":"ms-u-smPush9","ms-u-smPush8":"ms-u-smPush8","ms-u-smPush7":"ms-u-smPush7","ms-u-smPush6":"ms-u-smPush6","ms-u-smPush5":"ms-u-smPush5","ms-u-smPush4":"ms-u-smPush4","ms-u-smPush3":"ms-u-smPush3","ms-u-smPush2":"ms-u-smPush2","ms-u-smPush1":"ms-u-smPush1","ms-u-smPush0":"ms-u-smPush0","ms-u-smOffset11":"ms-u-smOffset11","ms-u-smOffset10":"ms-u-smOffset10","ms-u-smOffset9":"ms-u-smOffset9","ms-u-smOffset8":"ms-u-smOffset8","ms-u-smOffset7":"ms-u-smOffset7","ms-u-smOffset6":"ms-u-smOffset6","ms-u-smOffset5":"ms-u-smOffset5","ms-u-smOffset4":"ms-u-smOffset4","ms-u-smOffset3":"ms-u-smOffset3","ms-u-smOffset2":"ms-u-smOffset2","ms-u-smOffset1":"ms-u-smOffset1","ms-u-smOffset0":"ms-u-smOffset0","ms-u-md12":"ms-u-md12","ms-u-md11":"ms-u-md11","ms-u-md10":"ms-u-md10","ms-u-md9":"ms-u-md9","ms-u-md8":"ms-u-md8","ms-u-md7":"ms-u-md7","ms-u-md6":"ms-u-md6","ms-u-md5":"ms-u-md5","ms-u-md4":"ms-u-md4","ms-u-md3":"ms-u-md3","ms-u-md2":"ms-u-md2","ms-u-md1":"ms-u-md1","ms-u-mdPull12":"ms-u-mdPull12","ms-u-mdPull11":"ms-u-mdPull11","ms-u-mdPull10":"ms-u-mdPull10","ms-u-mdPull9":"ms-u-mdPull9","ms-u-mdPull8":"ms-u-mdPull8","ms-u-mdPull7":"ms-u-mdPull7","ms-u-mdPull6":"ms-u-mdPull6","ms-u-mdPull5":"ms-u-mdPull5","ms-u-mdPull4":"ms-u-mdPull4","ms-u-mdPull3":"ms-u-mdPull3","ms-u-mdPull2":"ms-u-mdPull2","ms-u-mdPull1":"ms-u-mdPull1","ms-u-mdPull0":"ms-u-mdPull0","ms-u-mdPush12":"ms-u-mdPush12","ms-u-mdPush11":"ms-u-mdPush11","ms-u-mdPush10":"ms-u-mdPush10","ms-u-mdPush9":"ms-u-mdPush9","ms-u-mdPush8":"ms-u-mdPush8","ms-u-mdPush7":"ms-u-mdPush7","ms-u-mdPush6":"ms-u-mdPush6","ms-u-mdPush5":"ms-u-mdPush5","ms-u-mdPush4":"ms-u-mdPush4","ms-u-mdPush3":"ms-u-mdPush3","ms-u-mdPush2":"ms-u-mdPush2","ms-u-mdPush1":"ms-u-mdPush1","ms-u-mdPush0":"ms-u-mdPush0","ms-u-mdOffset11":"ms-u-mdOffset11","ms-u-mdOffset10":"ms-u-mdOffset10","ms-u-mdOffset9":"ms-u-mdOffset9","ms-u-mdOffset8":"ms-u-mdOffset8","ms-u-mdOffset7":"ms-u-mdOffset7","ms-u-mdOffset6":"ms-u-mdOffset6","ms-u-mdOffset5":"ms-u-mdOffset5","ms-u-mdOffset4":"ms-u-mdOffset4","ms-u-mdOffset3":"ms-u-mdOffset3","ms-u-mdOffset2":"ms-u-mdOffset2","ms-u-mdOffset1":"ms-u-mdOffset1","ms-u-mdOffset0":"ms-u-mdOffset0","ms-u-lg12":"ms-u-lg12","ms-u-lg11":"ms-u-lg11","ms-u-lg10":"ms-u-lg10","ms-u-lg9":"ms-u-lg9","ms-u-lg8":"ms-u-lg8","ms-u-lg7":"ms-u-lg7","ms-u-lg6":"ms-u-lg6","ms-u-lg5":"ms-u-lg5","ms-u-lg4":"ms-u-lg4","ms-u-lg3":"ms-u-lg3","ms-u-lg2":"ms-u-lg2","ms-u-lg1":"ms-u-lg1","ms-u-lgPull12":"ms-u-lgPull12","ms-u-lgPull11":"ms-u-lgPull11","ms-u-lgPull10":"ms-u-lgPull10","ms-u-lgPull9":"ms-u-lgPull9","ms-u-lgPull8":"ms-u-lgPull8","ms-u-lgPull7":"ms-u-lgPull7","ms-u-lgPull6":"ms-u-lgPull6","ms-u-lgPull5":"ms-u-lgPull5","ms-u-lgPull4":"ms-u-lgPull4","ms-u-lgPull3":"ms-u-lgPull3","ms-u-lgPull2":"ms-u-lgPull2","ms-u-lgPull1":"ms-u-lgPull1","ms-u-lgPull0":"ms-u-lgPull0","ms-u-lgPush12":"ms-u-lgPush12","ms-u-lgPush11":"ms-u-lgPush11","ms-u-lgPush10":"ms-u-lgPush10","ms-u-lgPush9":"ms-u-lgPush9","ms-u-lgPush8":"ms-u-lgPush8","ms-u-lgPush7":"ms-u-lgPush7","ms-u-lgPush6":"ms-u-lgPush6","ms-u-lgPush5":"ms-u-lgPush5","ms-u-lgPush4":"ms-u-lgPush4","ms-u-lgPush3":"ms-u-lgPush3","ms-u-lgPush2":"ms-u-lgPush2","ms-u-lgPush1":"ms-u-lgPush1","ms-u-lgPush0":"ms-u-lgPush0","ms-u-lgOffset11":"ms-u-lgOffset11","ms-u-lgOffset10":"ms-u-lgOffset10","ms-u-lgOffset9":"ms-u-lgOffset9","ms-u-lgOffset8":"ms-u-lgOffset8","ms-u-lgOffset7":"ms-u-lgOffset7","ms-u-lgOffset6":"ms-u-lgOffset6","ms-u-lgOffset5":"ms-u-lgOffset5","ms-u-lgOffset4":"ms-u-lgOffset4","ms-u-lgOffset3":"ms-u-lgOffset3","ms-u-lgOffset2":"ms-u-lgOffset2","ms-u-lgOffset1":"ms-u-lgOffset1","ms-u-lgOffset0":"ms-u-lgOffset0","ms-u-xl12":"ms-u-xl12","ms-u-xl11":"ms-u-xl11","ms-u-xl10":"ms-u-xl10","ms-u-xl9":"ms-u-xl9","ms-u-xl8":"ms-u-xl8","ms-u-xl7":"ms-u-xl7","ms-u-xl6":"ms-u-xl6","ms-u-xl5":"ms-u-xl5","ms-u-xl4":"ms-u-xl4","ms-u-xl3":"ms-u-xl3","ms-u-xl2":"ms-u-xl2","ms-u-xl1":"ms-u-xl1","ms-u-xlPull12":"ms-u-xlPull12","ms-u-xlPull11":"ms-u-xlPull11","ms-u-xlPull10":"ms-u-xlPull10","ms-u-xlPull9":"ms-u-xlPull9","ms-u-xlPull8":"ms-u-xlPull8","ms-u-xlPull7":"ms-u-xlPull7","ms-u-xlPull6":"ms-u-xlPull6","ms-u-xlPull5":"ms-u-xlPull5","ms-u-xlPull4":"ms-u-xlPull4","ms-u-xlPull3":"ms-u-xlPull3","ms-u-xlPull2":"ms-u-xlPull2","ms-u-xlPull1":"ms-u-xlPull1","ms-u-xlPull0":"ms-u-xlPull0","ms-u-xlPush12":"ms-u-xlPush12","ms-u-xlPush11":"ms-u-xlPush11","ms-u-xlPush10":"ms-u-xlPush10","ms-u-xlPush9":"ms-u-xlPush9","ms-u-xlPush8":"ms-u-xlPush8","ms-u-xlPush7":"ms-u-xlPush7","ms-u-xlPush6":"ms-u-xlPush6","ms-u-xlPush5":"ms-u-xlPush5","ms-u-xlPush4":"ms-u-xlPush4","ms-u-xlPush3":"ms-u-xlPush3","ms-u-xlPush2":"ms-u-xlPush2","ms-u-xlPush1":"ms-u-xlPush1","ms-u-xlPush0":"ms-u-xlPush0","ms-u-xlOffset11":"ms-u-xlOffset11","ms-u-xlOffset10":"ms-u-xlOffset10","ms-u-xlOffset9":"ms-u-xlOffset9","ms-u-xlOffset8":"ms-u-xlOffset8","ms-u-xlOffset7":"ms-u-xlOffset7","ms-u-xlOffset6":"ms-u-xlOffset6","ms-u-xlOffset5":"ms-u-xlOffset5","ms-u-xlOffset4":"ms-u-xlOffset4","ms-u-xlOffset3":"ms-u-xlOffset3","ms-u-xlOffset2":"ms-u-xlOffset2","ms-u-xlOffset1":"ms-u-xlOffset1","ms-u-xlOffset0":"ms-u-xlOffset0","ms-u-xxl12":"ms-u-xxl12","ms-u-xxl11":"ms-u-xxl11","ms-u-xxl10":"ms-u-xxl10","ms-u-xxl9":"ms-u-xxl9","ms-u-xxl8":"ms-u-xxl8","ms-u-xxl7":"ms-u-xxl7","ms-u-xxl6":"ms-u-xxl6","ms-u-xxl5":"ms-u-xxl5","ms-u-xxl4":"ms-u-xxl4","ms-u-xxl3":"ms-u-xxl3","ms-u-xxl2":"ms-u-xxl2","ms-u-xxl1":"ms-u-xxl1","ms-u-xxlPull12":"ms-u-xxlPull12","ms-u-xxlPull11":"ms-u-xxlPull11","ms-u-xxlPull10":"ms-u-xxlPull10","ms-u-xxlPull9":"ms-u-xxlPull9","ms-u-xxlPull8":"ms-u-xxlPull8","ms-u-xxlPull7":"ms-u-xxlPull7","ms-u-xxlPull6":"ms-u-xxlPull6","ms-u-xxlPull5":"ms-u-xxlPull5","ms-u-xxlPull4":"ms-u-xxlPull4","ms-u-xxlPull3":"ms-u-xxlPull3","ms-u-xxlPull2":"ms-u-xxlPull2","ms-u-xxlPull1":"ms-u-xxlPull1","ms-u-xxlPull0":"ms-u-xxlPull0","ms-u-xxlPush12":"ms-u-xxlPush12","ms-u-xxlPush11":"ms-u-xxlPush11","ms-u-xxlPush10":"ms-u-xxlPush10","ms-u-xxlPush9":"ms-u-xxlPush9","ms-u-xxlPush8":"ms-u-xxlPush8","ms-u-xxlPush7":"ms-u-xxlPush7","ms-u-xxlPush6":"ms-u-xxlPush6","ms-u-xxlPush5":"ms-u-xxlPush5","ms-u-xxlPush4":"ms-u-xxlPush4","ms-u-xxlPush3":"ms-u-xxlPush3","ms-u-xxlPush2":"ms-u-xxlPush2","ms-u-xxlPush1":"ms-u-xxlPush1","ms-u-xxlPush0":"ms-u-xxlPush0","ms-u-xxlOffset11":"ms-u-xxlOffset11","ms-u-xxlOffset10":"ms-u-xxlOffset10","ms-u-xxlOffset9":"ms-u-xxlOffset9","ms-u-xxlOffset8":"ms-u-xxlOffset8","ms-u-xxlOffset7":"ms-u-xxlOffset7","ms-u-xxlOffset6":"ms-u-xxlOffset6","ms-u-xxlOffset5":"ms-u-xxlOffset5","ms-u-xxlOffset4":"ms-u-xxlOffset4","ms-u-xxlOffset3":"ms-u-xxlOffset3","ms-u-xxlOffset2":"ms-u-xxlOffset2","ms-u-xxlOffset1":"ms-u-xxlOffset1","ms-u-xxlOffset0":"ms-u-xxlOffset0","ms-u-xxxl12":"ms-u-xxxl12","ms-u-xxxl11":"ms-u-xxxl11","ms-u-xxxl10":"ms-u-xxxl10","ms-u-xxxl9":"ms-u-xxxl9","ms-u-xxxl8":"ms-u-xxxl8","ms-u-xxxl7":"ms-u-xxxl7","ms-u-xxxl6":"ms-u-xxxl6","ms-u-xxxl5":"ms-u-xxxl5","ms-u-xxxl4":"ms-u-xxxl4","ms-u-xxxl3":"ms-u-xxxl3","ms-u-xxxl2":"ms-u-xxxl2","ms-u-xxxl1":"ms-u-xxxl1","ms-u-xxxlPull12":"ms-u-xxxlPull12","ms-u-xxxlPull11":"ms-u-xxxlPull11","ms-u-xxxlPull10":"ms-u-xxxlPull10","ms-u-xxxlPull9":"ms-u-xxxlPull9","ms-u-xxxlPull8":"ms-u-xxxlPull8","ms-u-xxxlPull7":"ms-u-xxxlPull7","ms-u-xxxlPull6":"ms-u-xxxlPull6","ms-u-xxxlPull5":"ms-u-xxxlPull5","ms-u-xxxlPull4":"ms-u-xxxlPull4","ms-u-xxxlPull3":"ms-u-xxxlPull3","ms-u-xxxlPull2":"ms-u-xxxlPull2","ms-u-xxxlPull1":"ms-u-xxxlPull1","ms-u-xxxlPull0":"ms-u-xxxlPull0","ms-u-xxxlPush12":"ms-u-xxxlPush12","ms-u-xxxlPush11":"ms-u-xxxlPush11","ms-u-xxxlPush10":"ms-u-xxxlPush10","ms-u-xxxlPush9":"ms-u-xxxlPush9","ms-u-xxxlPush8":"ms-u-xxxlPush8","ms-u-xxxlPush7":"ms-u-xxxlPush7","ms-u-xxxlPush6":"ms-u-xxxlPush6","ms-u-xxxlPush5":"ms-u-xxxlPush5","ms-u-xxxlPush4":"ms-u-xxxlPush4","ms-u-xxxlPush3":"ms-u-xxxlPush3","ms-u-xxxlPush2":"ms-u-xxxlPush2","ms-u-xxxlPush1":"ms-u-xxxlPush1","ms-u-xxxlPush0":"ms-u-xxxlPush0","ms-u-xxxlOffset11":"ms-u-xxxlOffset11","ms-u-xxxlOffset10":"ms-u-xxxlOffset10","ms-u-xxxlOffset9":"ms-u-xxxlOffset9","ms-u-xxxlOffset8":"ms-u-xxxlOffset8","ms-u-xxxlOffset7":"ms-u-xxxlOffset7","ms-u-xxxlOffset6":"ms-u-xxxlOffset6","ms-u-xxxlOffset5":"ms-u-xxxlOffset5","ms-u-xxxlOffset4":"ms-u-xxxlOffset4","ms-u-xxxlOffset3":"ms-u-xxxlOffset3","ms-u-xxxlOffset2":"ms-u-xxxlOffset2","ms-u-xxxlOffset1":"ms-u-xxxlOffset1","ms-u-xxxlOffset0":"ms-u-xxxlOffset0"};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(276);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _propTypes = __webpack_require__(53);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Grid = __webpack_require__(274);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
	var breakpointPropKeys = (0, _lodash2.default)(breakpoints.map(function (breakpoint) {
	  return [breakpoint, breakpoint + 'Push', breakpoint + 'Pull'];
	}));
	
	var Col = function Col(_ref) {
	  var children = _ref.children;
	  var other = (0, _objectWithoutProperties3.default)(_ref, ['children']);
	
	  var props = (0, _extends3.default)({}, other);
	  var breakpointStyles = {};
	
	  breakpointPropKeys.forEach(function (key) {
	    breakpointStyles['ms-u-' + key + props[key]] = !!props[key];
	
	    delete props[key];
	  });
	
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, props, { styleName: (0, _classnames2.default)('ms-Grid-col', breakpointStyles) }),
	    children
	  );
	};
	Col.propTypes = breakpointPropKeys.reduce(function (propTypes, key) {
	  propTypes[key] = _propTypes.colSizeType; // eslint-disable-line no-param-reassign
	  return propTypes;
	}, {
	  children: _react2.default.PropTypes.node
	});
	
	exports.default = (0, _fabricComponent2.default)(Col, _Grid2.default);

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseFlatten = __webpack_require__(277);
	
	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}
	
	module.exports = flatten;


/***/ },
/* 277 */
/***/ function(module, exports) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = baseFlatten;


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Link = __webpack_require__(279);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Link2.default;

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elementType = __webpack_require__(197);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Link = __webpack_require__(280);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Link = function Link(_ref) {
	  var children = _ref.children;
	  var Component = _ref.componentClass;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'componentClass']);
	  return _react2.default.createElement(
	    Component,
	    (0, _extends3.default)({ 'data-fabric': 'Link'
	    }, props, {
	      styleName: 'ms-Link' }),
	    children
	  );
	};
	Link.displayName = 'Link';
	Link.propTypes = {
	  children: _react2.default.PropTypes.node,
	  componentClass: _elementType2.default
	};
	Link.defaultProps = {
	  componentClass: 'a'
	};
	
	exports.default = (0, _fabricComponent2.default)(Link, _Link2.default);

/***/ },
/* 280 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Link":"ms-Link"};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _List = __webpack_require__(282);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _List2.default;

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elementType = __webpack_require__(197);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _List = __webpack_require__(283);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import ListItem from '../ListItem'
	
	
	var List = function List(_ref) {
	  var children = _ref.children;
	  var Component = _ref.componentClass;
	  var selectable = _ref.selectable;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'componentClass', 'selectable']);
	  return _react2.default.createElement(
	    Component,
	    (0, _extends3.default)({ 'data-fabric': 'List'
	    }, props, {
	      styleName: 'ms-List' }),
	    selectable ? _react2.default.Children.map(children, function (child) {
	      return _react2.default.cloneElement(child, { selectable: selectable });
	    }) : children
	  );
	};
	List.displayName = 'List';
	List.propTypes = {
	  children: _react2.default.PropTypes.node,
	  // TODO Array of ListItems
	  // children: React.PropTypes.oneOfType([
	  //   React.PropTypes.instanceOf(ListItem),
	  //   React.PropTypes.arrayOf(React.PropTypes.instanceOf(ListItem))
	  // ]),
	  componentClass: _elementType2.default,
	  selectable: _react2.default.PropTypes.bool
	};
	List.defaultProps = {
	  componentClass: 'ul',
	  selectable: false
	};
	
	exports.default = (0, _fabricComponent2.default)(List, _List2.default);

/***/ },
/* 283 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-List":"ms-List","ms-List--grid":"ms-List--grid","ms-ListItem":"ms-ListItem"};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItemAction = exports.default = undefined;
	
	var _ListItem = __webpack_require__(285);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _ListItemAction2 = __webpack_require__(286);
	
	var _ListItemAction3 = _interopRequireDefault(_ListItemAction2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ListItem2.default;
	exports.ListItemAction = _ListItemAction3.default;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(41);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elementType = __webpack_require__(197);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(49);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ListItemAction = __webpack_require__(286);
	
	var _ListItemAction2 = _interopRequireDefault(_ListItemAction);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _ListItem = __webpack_require__(287);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var handleSelectionTargetClick = function handleSelectionTargetClick(onChange, checked) {
	  return (0, _lodash2.default)(onChange) ? onChange.bind(null, !checked) : undefined;
	};
	
	var ListItem = function ListItem(_ref) {
	  var _cx;
	
	  var checked = _ref.checked;
	  var children = _ref.children;
	  var Component = _ref.componentClass;
	  var image = _ref.image;
	  var itemIcon = _ref.itemIcon;
	  var metaText = _ref.metaText;
	  var onChange = _ref.onChange;
	  var primaryText = _ref.primaryText;
	  var secondaryText = _ref.secondaryText;
	  var selectable = _ref.selectable;
	  var tertiaryText = _ref.tertiaryText;
	  var type = _ref.type;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['checked', 'children', 'componentClass', 'image', 'itemIcon', 'metaText', 'onChange', 'primaryText', 'secondaryText', 'selectable', 'tertiaryText', 'type']);
	  return _react2.default.createElement(
	    Component,
	    (0, _extends3.default)({ 'data-fabric': 'ListItem'
	    }, props, {
	      styleName: (0, _classnames2.default)('ms-ListItem', (_cx = {}, (0, _defineProperty3.default)(_cx, 'ms-ListItem--' + type, !!type), (0, _defineProperty3.default)(_cx, 'is-selectable', selectable), (0, _defineProperty3.default)(_cx, 'is-selected', !!checked), _cx)) }),
	    image && _react2.default.createElement(
	      'div',
	      { styleName: 'ms-ListItem-image' },
	      image
	    ),
	    primaryText && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-ListItem-primaryText' },
	      primaryText
	    ),
	    secondaryText && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-ListItem-secondaryText' },
	      secondaryText
	    ),
	    tertiaryText && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-ListItem-tertiaryText' },
	      tertiaryText
	    ),
	    metaText && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-ListItem-metaText' },
	      metaText
	    ),
	    itemIcon && _react2.default.createElement(
	      'div',
	      { styleName: 'ms-ListItem-itemIcon' },
	      itemIcon
	    ),
	    selectable && _react2.default.createElement('div', { styleName: 'ms-ListItem-selectionTarget',
	      onClick: handleSelectionTargetClick(onChange, checked) }),
	    children && _react2.default.Children.count(children) > 0 && _react2.default.createElement(
	      'div',
	      { styleName: 'ms-ListItem-actions' },
	      children
	    )
	  );
	};
	ListItem.displayName = 'ListItem';
	ListItem.propTypes = {
	  children: _react2.default.PropTypes.node,
	  // TODO Array of ListItemActions
	  // children: React.PropTypes.oneOfType([
	  //   React.PropTypes.instanceOf(ListItemAction),
	  //   React.PropTypes.arrayOf(React.PropTypes.instanceOf(ListItemAction))
	  // ]),
	  componentClass: _elementType2.default,
	  image: _react2.default.PropTypes.node,
	  itemIcon: _react2.default.PropTypes.node,
	  metaText: _react2.default.PropTypes.node,
	  onChange: _react2.default.PropTypes.func,
	  primaryText: _react2.default.PropTypes.node,
	  secondaryText: _react2.default.PropTypes.node,
	  selectable: _react2.default.PropTypes.bool,
	  checked: _react2.default.PropTypes.bool,
	  tertiaryText: _react2.default.PropTypes.node,
	  type: _react2.default.PropTypes.oneOf(['document'])
	};
	ListItem.defaultProps = {
	  componentClass: 'li'
	};
	
	ListItem.Action = _ListItemAction2.default;
	
	exports.default = (0, _fabricComponent2.default)(ListItem, _ListItem2.default);

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _propTypes = __webpack_require__(53);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _ListItem = __webpack_require__(287);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ListItemAction = function ListItemAction(_ref) {
	  var children = _ref.children;
	  var glyph = _ref.glyph;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'glyph']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, props, {
	      styleName: 'ms-ListItem-action' }),
	    glyph && _react2.default.createElement(_Icon2.default, { glyph: glyph }),
	    children
	  );
	};
	ListItemAction.propTypes = {
	  children: _react2.default.PropTypes.node,
	  glyph: _propTypes.glyphType
	};
	
	exports.default = (0, _fabricComponent2.default)(ListItemAction, _ListItem2.default);

/***/ },
/* 287 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-ListItem":"ms-ListItem","ms-ListItem-primaryText":"ms-ListItem-primaryText","ms-ListItem-secondaryText":"ms-ListItem-secondaryText","ms-ListItem-tertiaryText":"ms-ListItem-tertiaryText","ms-ListItem-metaText":"ms-ListItem-metaText","ms-ListItem-image":"ms-ListItem-image","ms-ListItem-selectionTarget":"ms-ListItem-selectionTarget","ms-ListItem-actions":"ms-ListItem-actions","ms-ListItem-action":"ms-ListItem-action","ms-Icon":"ms-Icon","is-unread":"is-unread","is-unseen":"is-unseen","is-selectable":"is-selectable","is-selected":"is-selected","ms-ListItem--document":"ms-ListItem--document","ms-ListItem-itemIcon":"ms-ListItem-itemIcon"};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavBarTitle = exports.NavBarLink = exports.NavBarItem = exports.NavBar = exports.default = undefined;
	
	var _NavBar2 = __webpack_require__(289);
	
	var _NavBar3 = _interopRequireDefault(_NavBar2);
	
	var _NavBarItem2 = __webpack_require__(290);
	
	var _NavBarItem3 = _interopRequireDefault(_NavBarItem2);
	
	var _NavBarLink2 = __webpack_require__(292);
	
	var _NavBarLink3 = _interopRequireDefault(_NavBarLink2);
	
	var _NavBarTitle2 = __webpack_require__(293);
	
	var _NavBarTitle3 = _interopRequireDefault(_NavBarTitle2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _NavBar3.default;
	exports.NavBar = _NavBar3.default;
	exports.NavBarItem = _NavBarItem3.default;
	exports.NavBarLink = _NavBarLink3.default;
	exports.NavBarTitle = _NavBarTitle3.default;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(215);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(220);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(221);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(222);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class, _class2, _temp;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _NavBarItem = __webpack_require__(290);
	
	var _NavBarItem2 = _interopRequireDefault(_NavBarItem);
	
	var _NavBarLink = __webpack_require__(292);
	
	var _NavBarLink2 = _interopRequireDefault(_NavBarLink);
	
	var _NavBarTitle = __webpack_require__(293);
	
	var _NavBarTitle2 = _interopRequireDefault(_NavBarTitle);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _NavBar = __webpack_require__(291);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scanChildren = function scanChildren(children) {
	  return _react2.default.Children.toArray(children).reduce(function (r, child) {
	    if ((0, _fabricComponent.isFabricComponent)(child, _NavBarTitle2.default)) {
	      r.title = child; // eslint-disable-line no-param-reassign
	    } else if ((0, _fabricComponent.isFabricComponent)(child, _NavBarItem2.default, _NavBarLink2.default)) {
	        r.items.push(child);
	      } else {
	        r.items.push(_react2.default.createElement(
	          _NavBarItem2.default,
	          { key: child.key },
	          child
	        ));
	      }
	
	    return r;
	  }, { title: null, items: [] });
	};
	
	var NavBar = (_dec = (0, _fabricComponent2.default)(_NavBar2.default), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  (0, _inherits3.default)(NavBar, _React$Component);
	
	  function NavBar() {
	    (0, _classCallCheck3.default)(this, NavBar);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NavBar).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(NavBar, [{
	    key: '_closeMenu',
	    value: function _closeMenu() {
	      var _props = this.props;
	      var closeMenu = _props.closeMenu;
	      var isMenuOpen = _props.isMenuOpen;
	
	
	      if (isMenuOpen) {
	        if (closeMenu) {
	          closeMenu();
	        }
	      }
	    }
	  }, {
	    key: '_openMenu',
	    value: function _openMenu() {
	      var openMenu = this.props.openMenu;
	
	
	      if (openMenu) {
	        openMenu();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var isMenuOpen = _props2.isMenuOpen;
	      var props = (0, _objectWithoutProperties3.default)(_props2, ['children', 'isMenuOpen']);
	
	      var _scanChildren = scanChildren(children);
	
	      var title = _scanChildren.title;
	      var items = _scanChildren.items;
	
	      var styleName = (0, _classnames2.default)('ms-NavBar', {
	        'is-open': isMenuOpen
	      });
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({ 'data-fabric': 'NavBar'
	        }, props, {
	          onClick: this._closeMenu.bind(this),
	          styleName: styleName }),
	        items.length > 0 && _react2.default.createElement(
	          'div',
	          { onClick: this._openMenu.bind(this),
	            styleName: (0, _classnames2.default)('ms-NavBar-openMenu', {
	              'is-open': isMenuOpen
	            }) },
	          _react2.default.createElement(_Icon2.default, { glyph: 'menu' })
	        ),
	        title,
	        _react2.default.createElement(
	          'ul',
	          { styleName: 'ms-NavBar-items' },
	          items
	        )
	      );
	    }
	  }]);
	  return NavBar;
	}(_react2.default.Component), _class2.propTypes = {
	  title: _react2.default.PropTypes.node,
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.arrayOf(function (propValue, key, componentName /* , location, propFullName */) {
	    // if (!isFabricComponent(propValue[key], NavBarItem, NavBarLink, NavBarTitle)) {
	    //   return new Error(
	    //     `Invalid prop '${propFullName}' supplied to '${componentName}'. Must be one of
	    //     NavBar.Item, NavBar.Link or NavBar.Title`
	    //   )
	    // }
	    if (propValue.filter(function (value) {
	      return (0, _fabricComponent.isFabricComponent)(value, _NavBarTitle2.default);
	    }).length > 1) {
	      return new Error('Multiple NavBar.Title props supplied to \'' + componentName + '\'. Maximal one is allowed.');
	    }
	    return null;
	  })]),
	  openMenu: _react2.default.PropTypes.func,
	  closeMenu: _react2.default.PropTypes.func,
	  isMenuOpen: _react2.default.PropTypes.bool,
	  styles: _react2.default.PropTypes.object
	}, _class2.defaultProps = {
	  isMenuOpen: false
	}, _temp)) || _class);
	
	NavBar.Item = _NavBarItem2.default;
	NavBar.Link = _NavBarLink2.default;
	NavBar.Title = _NavBarTitle2.default;
	
	exports.default = NavBar;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _NavBar = __webpack_require__(291);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavBarItem = function NavBarItem(_ref) {
	  var children = _ref.children;
	  var right = _ref.right;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'right']);
	  return _react2.default.createElement(
	    'li',
	    (0, _extends3.default)({}, props, {
	      styleName: (0, _classnames2.default)('ms-NavBar-item', {
	        'ms-NavBar-item--right': right
	      }) }),
	    children
	  );
	};
	NavBarItem.propTypes = {
	  children: _react2.default.PropTypes.node,
	  right: _react2.default.PropTypes.bool
	};
	
	exports.default = (0, _fabricComponent2.default)(NavBarItem, _NavBar2.default);

/***/ },
/* 291 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-NavBar":"ms-NavBar","ms-Overlay":"ms-Overlay","ms-NavBar-openMenu":"ms-NavBar-openMenu","ms-NavBar-items":"ms-NavBar-items","ms-NavBar-item":"ms-NavBar-item","ms-NavBar-title":"ms-NavBar-title","ms-Icon":"ms-Icon","is-selected":"is-selected","is-disabled":"is-disabled","ms-NavBar-link":"ms-NavBar-link","ms-NavBar-item--hasMenu":"ms-NavBar-item--hasMenu","ms-NavBar-chevronDown":"ms-NavBar-chevronDown","ms-NavBar-item--search":"ms-NavBar-item--search","ms-TextField":"ms-TextField","is-open":"is-open","ms-TextField-field":"ms-TextField-field","ms-ContextualMenu":"ms-ContextualMenu","ms-ContextualMenu-link":"ms-ContextualMenu-link","ms-NavBar-item--right":"ms-NavBar-item--right"};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _NavBarItem = __webpack_require__(290);
	
	var _NavBarItem2 = _interopRequireDefault(_NavBarItem);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _NavBar = __webpack_require__(291);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavBarLink = function NavBarLink(_ref) {
	  var children = _ref.children;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
	  return _react2.default.createElement(
	    _NavBarItem2.default,
	    props,
	    _react2.default.Children.map(children, function (child) {
	      return child ? _react2.default.cloneElement(child, {
	        className: (0, _classnames2.default)(child.props.className, _NavBar2.default['ms-NavBar-link'])
	      }) : null;
	    })
	  );
	};
	NavBarLink.propTypes = (0, _extends3.default)({}, _NavBarItem2.default.propTypes);
	
	exports.default = (0, _fabricComponent2.default)(NavBarLink, _NavBar2.default);

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _NavBar = __webpack_require__(291);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavBarTitle = function NavBarTitle(_ref) {
	  var children = _ref.children;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, props, { styleName: 'ms-NavBar-title' }),
	    children
	  );
	};
	NavBarTitle.propTypes = {
	  children: _react2.default.PropTypes.node
	};
	
	exports.default = (0, _fabricComponent2.default)(NavBarTitle, _NavBar2.default);

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SearchBox = __webpack_require__(295);
	
	var _SearchBox2 = _interopRequireDefault(_SearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SearchBox2.default;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(215);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(220);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(221);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(222);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class, _temp2, _initialiseProps;
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(51);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _SearchBox = __webpack_require__(296);
	
	var _SearchBox2 = _interopRequireDefault(_SearchBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchBox = (_temp2 = _class = function (_React$Component) {
	  (0, _inherits3.default)(SearchBox, _React$Component);
	
	  function SearchBox() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, SearchBox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(SearchBox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(SearchBox, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var active = _props.active;
	      var className = _props.className;
	      var onChange = _props.onChange;
	      var placeholder = _props.placeholder;
	      var value = _props.value;
	      var props = (0, _objectWithoutProperties3.default)(_props, ['active', 'className', 'onChange', 'placeholder', 'value']);
	
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({ 'data-fabric': 'SearchBox'
	        }, props, {
	          onMouseOver: this.handleMouseOver.bind(this),
	          onMouseOut: this.handleMouseOut.bind(this),
	          className: className,
	          styleName: (0, _classnames2.default)('ms-SearchBox', {
	            'is-active': active
	          }) }),
	        _react2.default.createElement('input', (0, _extends3.default)({}, props, {
	          value: value,
	          onChange: onChange,
	          styleName: (0, _classnames2.default)('ms-SearchBox-field', {
	            'hovering': this.state.hover
	          }) })),
	        !value && _react2.default.createElement(
	          'label',
	          { styleName: 'ms-SearchBox-label' },
	          _react2.default.createElement(_Icon2.default, { styleName: 'ms-SearchBox-icon', glyph: 'search' }),
	          placeholder
	        ),
	        _react2.default.createElement(
	          'button',
	          { styleName: 'ms-SearchBox-closeButton', onMouseDown: onChange },
	          _react2.default.createElement(_Icon2.default, { glyph: 'x' })
	        )
	      );
	    }
	  }]);
	  return SearchBox;
	}(_react2.default.Component), _class.displayName = 'SearchBox', _class.propTypes = {
	  active: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func,
	  onMouseOver: _react2.default.PropTypes.func,
	  onMouseOut: _react2.default.PropTypes.func,
	  placeholder: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	  active: false,
	  placeholder: 'Search',
	  value: ''
	}, _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.state = { hover: false };
	
	  this.handleMouseOver = function () {
	    _this2.setState((0, _extends3.default)({}, _this2.state, {
	      hover: true
	    }));
	
	    if (_this2.props.onMouseOver) {
	      var _props2;
	
	      (_props2 = _this2.props).onMouseOver.apply(_props2, arguments);
	    }
	  };
	
	  this.handleMouseOut = function () {
	    _this2.setState((0, _extends3.default)({}, _this2.state, {
	      hover: false
	    }));
	
	    if (_this2.props.onMouseOut) {
	      var _props3;
	
	      (_props3 = _this2.props).onMouseOut.apply(_props3, arguments);
	    }
	  };
	}, _temp2);
	exports.default = (0, _fabricComponent2.default)(SearchBox, _SearchBox2.default);

/***/ },
/* 296 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Label":"ms-Label","is-required":"is-required","is-disabled":"is-disabled","ms-SearchBox":"ms-SearchBox","ms-SearchBox-label":"ms-SearchBox-label","ms-SearchBox-icon":"ms-SearchBox-icon","ms-SearchBox-field":"ms-SearchBox-field","is-active":"is-active","ms-SearchBox-closeButton":"ms-SearchBox-closeButton","hovering":"hovering","ms-Icon":"ms-Icon"};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Table = __webpack_require__(298);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Table2.default;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _Table = __webpack_require__(299);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Table = function Table(_ref) {
	  var children = _ref.children;
	  var fixed = _ref.fixed;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'fixed']);
	  return _react2.default.createElement(
	    'table',
	    (0, _extends3.default)({ 'data-fabric': 'Table'
	    }, props, {
	      styleName: (0, _classnames2.default)('ms-Table', {
	        'ms-Table--fixed': fixed
	      }) }),
	    children
	  );
	};
	Table.displayName = 'Table';
	Table.propTypes = {
	  children: _react2.default.PropTypes.node,
	  fixed: _react2.default.PropTypes.bool
	};
	Table.defaultProps = {
	  fixed: false
	};
	
	exports.default = (0, _fabricComponent2.default)(Table, _Table2.default);

/***/ },
/* 299 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Table":"ms-Table","ms-Table--fixed":"ms-Table--fixed","ms-Table-row":"ms-Table-row","is-selected":"is-selected","ms-Table-rowCheck":"ms-Table-rowCheck","ms-Table-cell":"ms-Table-cell","ms-Table-head":"ms-Table-head"};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextField = __webpack_require__(301);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextField2.default;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Label = __webpack_require__(195);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _isDefined = __webpack_require__(50);
	
	var _isDefined2 = _interopRequireDefault(_isDefined);
	
	var _TextField = __webpack_require__(302);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextField = function TextField(_ref) {
	  var active = _ref.active;
	  var className = _ref.className;
	  var description = _ref.description;
	  var disabled = _ref.disabled;
	  var id = _ref.id;
	  var label = _ref.label;
	  var multiline = _ref.multiline;
	  var name = _ref.name;
	  var placeholder = _ref.placeholder;
	  var required = _ref.required;
	  var underlined = _ref.underlined;
	  var value = _ref.value;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['active', 'className', 'description', 'disabled', 'id', 'label', 'multiline', 'name', 'placeholder', 'required', 'underlined', 'value']);
	
	  var inputId = 'TextField_' + (id || name || Date.now()) + '_input';
	  var input = _react2.default.createElement(multiline ? 'textarea' : 'input', (0, _extends3.default)({}, props, {
	    active: active,
	    disabled: disabled,
	    id: inputId,
	    name: name,
	    styleName: 'ms-TextField-field',
	    value: (0, _isDefined2.default)(value) ? value : ''
	  }));
	  var showLabel = placeholder ? !active && !value : true;
	
	  return _react2.default.createElement(
	    'div',
	    { 'data-fabric': 'TextField',
	      id: id,
	      className: className,
	      styleName: (0, _classnames2.default)('ms-TextField', {
	        'ms-TextField--underlined': underlined,
	        'ms-TextField--multiline': multiline,
	        'ms-TextField--placeholder': placeholder,
	        'is-disabled': disabled,
	        'is-required': required
	      }) },
	    label && showLabel && _react2.default.createElement(
	      _Label2.default,
	      { styleName: 'ms-Label', htmlFor: inputId },
	      label
	    ),
	    input,
	    description && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-TextField-description' },
	      description
	    )
	  );
	};
	TextField.displayName = 'TextField';
	TextField.propTypes = {
	  active: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  description: _react2.default.PropTypes.node,
	  disabled: _react2.default.PropTypes.bool,
	  id: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.node,
	  multiline: _react2.default.PropTypes.bool,
	  name: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.bool,
	  required: _react2.default.PropTypes.bool,
	  underlined: _react2.default.PropTypes.bool,
	  value: _react2.default.PropTypes.string
	};
	TextField.defaultProps = {
	  active: false,
	  disabled: false,
	  multine: false,
	  placeholder: false,
	  required: false,
	  underlined: false
	};
	
	exports.default = (0, _fabricComponent2.default)(TextField, _TextField2.default);

/***/ },
/* 302 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Label":"ms-Label","is-required":"is-required","is-disabled":"is-disabled","ms-TextField":"ms-TextField","ms-TextField-field":"ms-TextField-field","is-active":"is-active","ms-TextField-description":"ms-TextField-description","ms-TextField--placeholder":"ms-TextField--placeholder","ms-TextField--underlined":"ms-TextField--underlined","ms-TextField--multiline":"ms-TextField--multiline"};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Toggle = __webpack_require__(304);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Toggle2.default;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(3);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(45);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _react = __webpack_require__(46);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(47);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Label = __webpack_require__(195);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _fabricComponent = __webpack_require__(56);
	
	var _fabricComponent2 = _interopRequireDefault(_fabricComponent);
	
	var _invokeWhenNotDisabled = __webpack_require__(191);
	
	var _invokeWhenNotDisabled2 = _interopRequireDefault(_invokeWhenNotDisabled);
	
	var _isDefined = __webpack_require__(50);
	
	var _isDefined2 = _interopRequireDefault(_isDefined);
	
	var _Toggle = __webpack_require__(305);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Toggle = function Toggle(_ref) {
	  var checked = _ref.checked;
	  var className = _ref.className;
	  var description = _ref.description;
	  var disabled = _ref.disabled;
	  var id = _ref.id;
	  var labelOff = _ref.labelOff;
	  var labelOn = _ref.labelOn;
	  var name = _ref.name;
	  var onChange = _ref.onChange;
	  var textLeft = _ref.textLeft;
	  var props = (0, _objectWithoutProperties3.default)(_ref, ['checked', 'className', 'description', 'disabled', 'id', 'labelOff', 'labelOn', 'name', 'onChange', 'textLeft']);
	
	  var inputId = 'Toggle_' + (id || name || Date.now()) + '_input';
	  var styleName = (0, _classnames2.default)('ms-Toggle', {
	    'is-disabled': disabled,
	    'ms-Toggle--textLeft': textLeft
	  });
	  return _react2.default.createElement(
	    'div',
	    { 'data-fabric': 'Toggle',
	      id: id,
	      className: className,
	      styleName: styleName },
	    description && _react2.default.createElement(
	      'span',
	      { styleName: 'ms-Toggle-description' },
	      description
	    ),
	    _react2.default.createElement('input', (0, _extends3.default)({}, props, { type: 'checkbox',
	      styleName: 'ms-Toggle-input',
	      name: name,
	      id: inputId,
	      checked: (0, _isDefined2.default)(checked) ? checked : false,
	      onChange: (0, _invokeWhenNotDisabled2.default)(disabled, onChange) })),
	    _react2.default.createElement(
	      'label',
	      { styleName: 'ms-Toggle-field', htmlFor: inputId },
	      _react2.default.createElement(
	        _Label2.default,
	        { styleName: 'ms-Label ms-Label--off',
	          componentClass: 'span' },
	        labelOff
	      ),
	      _react2.default.createElement(
	        _Label2.default,
	        { styleName: 'ms-Label ms-Label--on',
	          componentClass: 'span' },
	        labelOn
	      )
	    )
	  );
	};
	Toggle.displayName = 'Toggle';
	Toggle.propTypes = {
	  checked: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  description: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  id: _react2.default.PropTypes.string,
	  labelOff: _react2.default.PropTypes.string,
	  labelOn: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func,
	  textLeft: _react2.default.PropTypes.bool
	};
	Toggle.defaultProps = {
	  labelOff: 'off',
	  labelOn: 'on',
	  textLeft: false
	};
	
	exports.default = (0, _fabricComponent2.default)(Toggle, _Toggle2.default);

/***/ },
/* 305 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ms-Label":"ms-Label","is-required":"is-required","is-disabled":"is-disabled","ms-Toggle":"ms-Toggle","ms-Toggle-field":"ms-Toggle-field","ms-Toggle-description":"ms-Toggle-description","ms-Toggle-input":"ms-Toggle-input","ms-Label--off":"ms-Label--off","ms-Label--on":"ms-Label--on","ms-Toggle--textLeft":"ms-Toggle--textLeft"};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-fabric.js.map