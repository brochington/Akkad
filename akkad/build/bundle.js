(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("babylonjs"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactMultiChild", "react/lib/ReactUpdates", "babylonjs", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["akkad"] = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("babylonjs"), require("immutable"));
	else
		root["akkad"] = factory(root["react"], root["react/lib/ReactMultiChild"], root["react/lib/ReactUpdates"], root["babylonjs"], root["immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_94__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_137__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Particles = exports.BasicAnimation = exports.Akkad = exports.EntityLoaded = exports.Entity = exports.Material = exports.Scene = exports.Engine = exports.shapes = exports.meshes = exports.cameras = exports.lights = exports.systems = undefined;

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _components = __webpack_require__(40);

	var _components2 = _interopRequireDefault(_components);

	var _systems = __webpack_require__(97);

	var _systems2 = _interopRequireDefault(_systems);

	var _lights = __webpack_require__(172);

	var _lights2 = _interopRequireDefault(_lights);

	var _cameras = __webpack_require__(177);

	var _cameras2 = _interopRequireDefault(_cameras);

	var _meshes = __webpack_require__(180);

	var _meshes2 = _interopRequireDefault(_meshes);

	var _shapes = __webpack_require__(181);

	var _shapes2 = _interopRequireDefault(_shapes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _extends3.default)({}, _components2.default, {
	    systems: _systems2.default,
	    lights: _lights2.default,
	    cameras: _cameras2.default,
	    meshes: _meshes2.default,
	    shapes: _shapes2.default
	});
	var systems = exports.systems = _systems2.default;
	var lights = exports.lights = _lights2.default;
	var cameras = exports.cameras = _cameras2.default;
	var meshes = exports.meshes = _meshes2.default;
	var shapes = exports.shapes = _shapes2.default;

	var Engine = exports.Engine = _components2.default.Engine;
	var Scene = exports.Scene = _components2.default.Scene;
	var Material = exports.Material = _components2.default.Material;
	var Entity = exports.Entity = _components2.default.Entity;
	var EntityLoaded = exports.EntityLoaded = _components2.default.EntityLoaded;
	var Akkad = exports.Akkad = _components2.default.Akkad;
	var BasicAnimation = exports.BasicAnimation = _components2.default.BasicAnimation;
	var Particles = exports.Particles = _components2.default.Particles;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(3);

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , hide      = __webpack_require__(11)
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
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
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
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(16) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , toPrimitive    = __webpack_require__(19)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function(){
	  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(37)
	  , pIE      = __webpack_require__(38)
	  , toObject = __webpack_require__(39)
	  , IObject  = __webpack_require__(26)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function(){
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(36);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(24)
	  , toIObject    = __webpack_require__(25)
	  , arrayIndexOf = __webpack_require__(29)(false)
	  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

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
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(28);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(27);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(30)
	  , toIndex   = __webpack_require__(32);
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
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 38 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Engine = __webpack_require__(41);

	var _Engine2 = _interopRequireDefault(_Engine);

	var _Scene = __webpack_require__(134);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Material = __webpack_require__(135);

	var _Material2 = _interopRequireDefault(_Material);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _Akkad = __webpack_require__(136);

	var _Akkad2 = _interopRequireDefault(_Akkad);

	var _BasicAnimation = __webpack_require__(170);

	var _BasicAnimation2 = _interopRequireDefault(_BasicAnimation);

	var _Particles = __webpack_require__(171);

	var _Particles2 = _interopRequireDefault(_Particles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    Engine: _Engine2.default,
	    Scene: _Scene2.default,
	    Material: _Material2.default,
	    Entity: _Entity2.default,
	    EntityLoaded: _EntityLoaded2.default,
	    Akkad: _Akkad2.default,
	    BasicAnimation: _BasicAnimation2.default,
	    Particles: _Particles2.default
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(42);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _ReactMultiChild = __webpack_require__(95);

	var _ReactMultiChild2 = _interopRequireDefault(_ReactMultiChild);

	var _ReactUpdates = __webpack_require__(96);

	var _systems = __webpack_require__(97);

	var _systems2 = _interopRequireDefault(_systems);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Engine = function (_React$Component) {
	    (0, _inherits3.default)(Engine, _React$Component);

	    function Engine(props) {
	        (0, _classCallCheck3.default)(this, Engine);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Engine).call(this, props));

	        var reactid = props.reactid;


	        _this._rootNodeID = reactid;

	        _this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);

	        /* Poor man's way to do a mixin with a class */
	        (0, _keys2.default)(_ReactMultiChild2.default.Mixin).map(function (method) {
	            return _this[method] = _ReactMultiChild2.default.Mixin[method];
	        });
	        return _this;
	    }

	    (0, _createClass3.default)(Engine, [{
	        key: "_performTransaction",
	        value: function _performTransaction(func, scope, children, context) {
	            var transaction = _ReactUpdates.ReactReconcileTransaction.getPooled();
	            transaction.perform(func, scope, children, transaction, context);

	            _ReactUpdates.ReactReconcileTransaction.release(transaction);
	        }
	    }, {
	        key: "mountAppChildren",
	        value: function mountAppChildren() {
	            var context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            this._performTransaction(this._mountAppChildren, this, this.props.children, context);
	        }
	    }, {
	        key: "_mountAppChildren",
	        value: function _mountAppChildren() {
	            this.mountChildren.apply(this, arguments);
	        }
	    }, {
	        key: "updateAppChildren",
	        value: function updateAppChildren() {
	            var context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            this._performTransaction(this.updateChildren, this, this.props.children, context);
	        }
	    }, {
	        key: "_updateAppChildren",
	        value: function _updateAppChildren() {
	            this.updateChildren.apply(this, arguments);
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState) {
	            this.updateAppChildren(nextState);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var actions = _props.actions;
	            var appState = _props.appState;
	            var setEngine = actions._internal.setEngine;

	            var canvasID = appState.get("canvasID");

	            setEngine(canvasID, this.id);

	            this.mountAppChildren({
	                actions: actions,
	                appState: appState,
	                systems: _systems2.default
	            });
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.unmountChildren();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log("render engine");
	            return _react2.default.createElement("div", null);
	        }
	    }]);
	    return Engine;
	}(_react2.default.Component);

	Engine.propTypes = {
	    actions: _react.PropTypes.object,
	    appState: _react.PropTypes.object,
	    reactid: _react.PropTypes.string
	};
	exports.default = Engine;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(39)
	  , $keys    = __webpack_require__(22);

	__webpack_require__(45)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(8).Object.getPrototypeOf;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(39)
	  , $getPrototypeOf = __webpack_require__(49);

	__webpack_require__(45)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(24)
	  , toObject    = __webpack_require__(39)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(52);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var $Object = __webpack_require__(8).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(16), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(57);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(75);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(71);
	module.exports = __webpack_require__(70)('iterator');

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(60)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(61)(String, 'String', function(iterated){
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(28);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(62)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(63)
	  , hide           = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(64)
	  , $iterCreate    = __webpack_require__(65)
	  , setToStringTag = __webpack_require__(69)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(70)('iterator')
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
/* 62 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(66)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(69)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(70)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(67)
	  , enumBugKeys = __webpack_require__(36)
	  , IE_PROTO    = __webpack_require__(33)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(18)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(68).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(22);

	module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(70)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(7).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	var global        = __webpack_require__(7)
	  , hide          = __webpack_require__(11)
	  , Iterators     = __webpack_require__(64)
	  , TO_STRING_TAG = __webpack_require__(70)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(73)
	  , step             = __webpack_require__(74)
	  , Iterators        = __webpack_require__(64)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(61)(Array, 'Array', function(iterated, kind){
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
/* 73 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(85);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(7)
	  , core           = __webpack_require__(8)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(16)
	  , $export        = __webpack_require__(6)
	  , redefine       = __webpack_require__(63)
	  , META           = __webpack_require__(78).KEY
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(69)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(70)
	  , keyOf          = __webpack_require__(79)
	  , enumKeys       = __webpack_require__(80)
	  , isArray        = __webpack_require__(81)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(66)
	  , gOPNExt        = __webpack_require__(82)
	  , $GOPD          = __webpack_require__(84)
	  , $DP            = __webpack_require__(12)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

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
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
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
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
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
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(83).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(38).f  = $propertyIsEnumerable
	  __webpack_require__(37).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(62)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(14)
	  , has      = __webpack_require__(24)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function(){
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(37)
	  , pIE     = __webpack_require__(38);
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(27);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , gOPN      = __webpack_require__(83).f
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(23)
	  , hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(38)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(19)
	  , has            = __webpack_require__(24)
	  , IE8_DOM_DEFINE = __webpack_require__(15)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(87);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(91);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(56);

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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(90).set});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(84).f(Object.prototype, '__proto__').set, 2);
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(66)});

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CallMethodOnEntity = exports.SetEntityAsProperty = exports.GenericProperty = exports.CollisionsEnable = exports.CheckCollisions = exports.ApplyGravity = exports.Gravity = exports.Texture = exports.Color = exports.Wireframe = exports.Rotate = exports.Position = exports.AnimateMesh = exports.Mesh = exports.Trigger = exports.RenderParticles = exports.RenderMesh = exports.RenderAnimation = exports.RenderMaterial = exports.RenderCamera = exports.RenderLight = exports.RenderShape = undefined;

	var _RenderShape = __webpack_require__(98);

	var _RenderShape2 = _interopRequireDefault(_RenderShape);

	var _RenderLight = __webpack_require__(100);

	var _RenderLight2 = _interopRequireDefault(_RenderLight);

	var _RenderCamera = __webpack_require__(101);

	var _RenderCamera2 = _interopRequireDefault(_RenderCamera);

	var _RenderMaterial = __webpack_require__(102);

	var _RenderMaterial2 = _interopRequireDefault(_RenderMaterial);

	var _RenderAnimation = __webpack_require__(103);

	var _RenderAnimation2 = _interopRequireDefault(_RenderAnimation);

	var _RenderMesh = __webpack_require__(104);

	var _RenderMesh2 = _interopRequireDefault(_RenderMesh);

	var _RenderParticles = __webpack_require__(105);

	var _RenderParticles2 = _interopRequireDefault(_RenderParticles);

	var _Trigger = __webpack_require__(106);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Mesh = __webpack_require__(110);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	var _AnimateMesh = __webpack_require__(111);

	var _AnimateMesh2 = _interopRequireDefault(_AnimateMesh);

	var _Position = __webpack_require__(112);

	var _Position2 = _interopRequireDefault(_Position);

	var _Rotate = __webpack_require__(123);

	var _Rotate2 = _interopRequireDefault(_Rotate);

	var _Wireframe = __webpack_require__(124);

	var _Wireframe2 = _interopRequireDefault(_Wireframe);

	var _Texture = __webpack_require__(125);

	var _Texture2 = _interopRequireDefault(_Texture);

	var _Color = __webpack_require__(126);

	var _Color2 = _interopRequireDefault(_Color);

	var _Gravity = __webpack_require__(127);

	var _Gravity2 = _interopRequireDefault(_Gravity);

	var _ApplyGravity = __webpack_require__(128);

	var _ApplyGravity2 = _interopRequireDefault(_ApplyGravity);

	var _CheckCollisions = __webpack_require__(129);

	var _CheckCollisions2 = _interopRequireDefault(_CheckCollisions);

	var _CollisionsEnabled = __webpack_require__(130);

	var _CollisionsEnabled2 = _interopRequireDefault(_CollisionsEnabled);

	var _GenericProperty = __webpack_require__(131);

	var _GenericProperty2 = _interopRequireDefault(_GenericProperty);

	var _SetEntityAsProperty = __webpack_require__(132);

	var _SetEntityAsProperty2 = _interopRequireDefault(_SetEntityAsProperty);

	var _CallMethodOnEntity = __webpack_require__(133);

	var _CallMethodOnEntity2 = _interopRequireDefault(_CallMethodOnEntity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    RenderShape: _RenderShape2.default,
	    RenderLight: _RenderLight2.default,
	    RenderCamera: _RenderCamera2.default,
	    RenderMaterial: _RenderMaterial2.default,
	    RenderAnimation: _RenderAnimation2.default,
	    RenderMesh: _RenderMesh2.default,
	    RenderParticles: _RenderParticles2.default,
	    Trigger: _Trigger2.default,
	    Mesh: _Mesh2.default,
	    AnimateMesh: _AnimateMesh2.default,
	    Position: _Position2.default,
	    Rotate: _Rotate2.default,
	    Wireframe: _Wireframe2.default,
	    Color: _Color2.default,
	    Texture: _Texture2.default,
	    Gravity: _Gravity2.default,
	    ApplyGravity: _ApplyGravity2.default,
	    CheckCollisions: _CheckCollisions2.default,
	    CollisionsEnabled: _CollisionsEnabled2.default,
	    GenericProperty: _GenericProperty2.default,
	    SetEntityAsProperty: _SetEntityAsProperty2.default,
	    CallMethodOnEntity: _CallMethodOnEntity2.default
	};

	// Components mostly used internally

	var RenderShape = exports.RenderShape = _RenderShape2.default;
	var RenderLight = exports.RenderLight = _RenderLight2.default;
	var RenderCamera = exports.RenderCamera = _RenderCamera2.default;
	var RenderMaterial = exports.RenderMaterial = _RenderMaterial2.default;
	var RenderAnimation = exports.RenderAnimation = _RenderAnimation2.default;
	var RenderMesh = exports.RenderMesh = _RenderMesh2.default;
	var RenderParticles = exports.RenderParticles = _RenderParticles2.default;
	var Trigger = exports.Trigger = _Trigger2.default;
	var Mesh = exports.Mesh = _Mesh2.default;
	var AnimateMesh = exports.AnimateMesh = _AnimateMesh2.default;
	var Position = exports.Position = _Position2.default;
	var Rotate = exports.Rotate = _Rotate2.default;
	var Wireframe = exports.Wireframe = _Wireframe2.default;
	var Color = exports.Color = _Color2.default;
	var Texture = exports.Texture = _Texture2.default;
	var Gravity = exports.Gravity = _Gravity2.default;
	var ApplyGravity = exports.ApplyGravity = _ApplyGravity2.default;
	var CheckCollisions = exports.CheckCollisions = _CheckCollisions2.default;
	var CollisionsEnable = exports.CollisionsEnable = _CollisionsEnabled2.default;
	var GenericProperty = exports.GenericProperty = _GenericProperty2.default;
	var SetEntityAsProperty = exports.SetEntityAsProperty = _SetEntityAsProperty2.default;
	var CallMethodOnEntity = exports.CallMethodOnEntity = _CallMethodOnEntity2.default;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderShape = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderShape, _AkkadAbstractCompone);

	    function RenderShape() {
	        (0, _classCallCheck3.default)(this, RenderShape);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderShape).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderShape, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            for (var prop in nextProps) {
	                if (nextProps[prop] !== this.props[prop]) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var sceneID = _context.sceneID;
	            var entityID = _context.entityID;
	            var actions = _context.actions;
	            var createShape = actions._internal.createShape;


	            createShape(sceneID, entityID, this.props);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var actions = _context2.actions;
	            var entityID = _context2.entityID;
	            var disposeEntity = actions._internal.disposeEntity;


	            disposeEntity(entityID);
	        }
	    }]);
	    return RenderShape;
	}(_AkkadAbstractComponent2.default);

	RenderShape.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    actions: _react.PropTypes.object.isRequired,
	    appState: _react.PropTypes.object.isRequired
	};
	exports.default = RenderShape;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AkkadAbstractComponent = function (_React$Component) {
	    (0, _inherits3.default)(AkkadAbstractComponent, _React$Component);

	    function AkkadAbstractComponent() {
	        (0, _classCallCheck3.default)(this, AkkadAbstractComponent);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AkkadAbstractComponent).call(this));

	        _this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
	        return _this;
	    }

	    (0, _createClass3.default)(AkkadAbstractComponent, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                this.props.children
	            );
	        }
	    }]);
	    return AkkadAbstractComponent;
	}(_react2.default.Component);

	AkkadAbstractComponent.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = AkkadAbstractComponent;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderLight = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderLight, _AkkadAbstractCompone);

	    function RenderLight() {
	        (0, _classCallCheck3.default)(this, RenderLight);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderLight).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderLight, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var sceneID = _context.sceneID;
	            var entityID = _context.entityID;
	            var createLight = actions._internal.createLight;


	            createLight(sceneID, entityID, this.props);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var actions = _context2.actions;
	            var entityID = _context2.entityID;
	            var disposeEntity = actions._internal.disposeEntity;


	            disposeEntity(entityID);
	        }
	    }]);
	    return RenderLight;
	}(_AkkadAbstractComponent2.default);

	RenderLight.propTypes = {
	    type: _react.PropTypes.string
	};
	RenderLight.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    actions: _react.PropTypes.object.isRequired,
	    appState: _react.PropTypes.object.isRequired
	};
	exports.default = RenderLight;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderCamera = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderCamera, _AkkadAbstractCompone);

	    function RenderCamera() {
	        (0, _classCallCheck3.default)(this, RenderCamera);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderCamera).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderCamera, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var sceneID = _context.sceneID;
	            var setCamera = actions._internal.setCamera;

	            setCamera(sceneID, entityID, this.props);
	        }

	        //TODO: Add a componentWillUnmount() to detach camera.

	    }]);
	    return RenderCamera;
	}(_AkkadAbstractComponent2.default);

	RenderCamera.propTypes = {
	    target: _react.PropTypes.array,
	    type: _react.PropTypes.string.isRequired
	};
	RenderCamera.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = RenderCamera;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderMaterial = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderMaterial, _AkkadAbstractCompone);

	    function RenderMaterial() {
	        (0, _classCallCheck3.default)(this, RenderMaterial);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderMaterial).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderMaterial, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var sceneID = _context.sceneID;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createMaterial = actions._internal.createMaterial;


	            createMaterial(sceneID, entityID);
	        }
	    }]);
	    return RenderMaterial;
	}(_AkkadAbstractComponent2.default);

	RenderMaterial.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = RenderMaterial;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderAnimation = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderAnimation, _AkkadAbstractCompone);

	    function RenderAnimation() {
	        (0, _classCallCheck3.default)(this, RenderAnimation);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderAnimation).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderAnimation, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createAnimation = actions._internal.createAnimation;


	            var config = (0, _extends3.default)({}, this.props, {
	                entityID: entityID
	            });

	            createAnimation(config);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var actions = _context2.actions;
	            var entityID = _context2.entityID;
	            var disposeEntity = actions._internal.disposeEntity;


	            disposeEntity(entityID);
	        }
	    }]);
	    return RenderAnimation;
	}(_AkkadAbstractComponent2.default);

	RenderAnimation.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	RenderAnimation.propTypes = {
	    meshProperty: _react.PropTypes.string.isRequired,
	    valueType: _react.PropTypes.string.isRequired,
	    loopMode: _react.PropTypes.string.isRequired,
	    keyFrames: _react.PropTypes.array
	};
	exports.default = RenderAnimation;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderMesh = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderMesh, _AkkadAbstractCompone);

	    function RenderMesh() {
	        (0, _classCallCheck3.default)(this, RenderMesh);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderMesh).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderMesh, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var path = _props.path;
	            var fileName = _props.fileName;
	            var _context = this.context;
	            var actions = _context.actions;
	            var sceneID = _context.sceneID;
	            var entityID = _context.entityID;
	            var importMesh = actions._internal.importMesh;


	            importMesh(path, fileName, sceneID, entityID);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var actions = _context2.actions;
	            var entityID = _context2.entityID;
	            var disposeEntity = actions._internal.disposeEntity;


	            disposeEntity(entityID);
	        }
	    }]);
	    return RenderMesh;
	}(_AkkadAbstractComponent2.default);

	RenderMesh.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	RenderMesh.propTypes = {
	    targetEntityID: _react.PropTypes.string.isRequired,
	    path: _react.PropTypes.string.isRequired,
	    fileName: _react.PropTypes.string.isRequired
	};
	exports.default = RenderMesh;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderParticles = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderParticles, _AkkadAbstractCompone);

	    function RenderParticles() {
	        (0, _classCallCheck3.default)(this, RenderParticles);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderParticles).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderParticles, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var sceneID = _context.sceneID;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var img = _props.img;
	            var createParticles = actions._internal.createParticles;


	            createParticles(sceneID, entityID, targetEntityID, img);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var actions = _context2.actions;
	            var entityID = _context2.entityID;
	            var disposeEntity = actions._internal.disposeEntity;


	            disposeEntity(entityID);
	        }
	    }]);
	    return RenderParticles;
	}(_AkkadAbstractComponent2.default);

	RenderParticles.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	RenderParticles.propTypes = {
	    targetEntityID: _react.PropTypes.string.isRequired,
	    img: _react.PropTypes.string.isRequired
	};
	exports.default = RenderParticles;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _RenderTrigger = __webpack_require__(109);

	var _RenderTrigger2 = _interopRequireDefault(_RenderTrigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Trigger = function (_React$Component) {
	    (0, _inherits3.default)(Trigger, _React$Component);

	    function Trigger() {
	        (0, _classCallCheck3.default)(this, Trigger);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Trigger).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Trigger, [{
	        key: "render",
	        value: function render() {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var sceneID = _context.sceneID;
	            var children = this.props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_RenderTrigger2.default, {
	                    targetEntityID: entityID,
	                    sceneID: sceneID,
	                    triggers: this.props
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Trigger;
	}(_react2.default.Component);

	Trigger.contextTypes = {
	    entityID: _react.PropTypes.string,
	    sceneID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Trigger.propTypes = {
	    onClick: _react.PropTypes.func,
	    onKeyUp: _react.PropTypes.func,
	    onKeyDown: _react.PropTypes.func,
	    onEveryFrame: _react.PropTypes.func,
	    onMouseOver: _react.PropTypes.func,
	    onMouseOut: _react.PropTypes.func
	};
	exports.default = Trigger;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Entity = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Entity, _AkkadAbstractCompone);

	    function Entity() {
	        (0, _classCallCheck3.default)(this, Entity);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Entity).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Entity, [{
	        key: "getChildContext",
	        value: function getChildContext() {
	            return {
	                entityID: this.id
	            };
	        }
	    }]);
	    return Entity;
	}(_AkkadAbstractComponent2.default);

	Entity.childContextTypes = {
	    entityID: _react.PropTypes.string
	};
	exports.default = Entity;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EntityLoaded = function (_React$Component) {
	    (0, _inherits3.default)(EntityLoaded, _React$Component);

	    function EntityLoaded() {
	        (0, _classCallCheck3.default)(this, EntityLoaded);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EntityLoaded).apply(this, arguments));
	    }

	    (0, _createClass3.default)(EntityLoaded, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID || nextProps.entityID;
	            var appState = nextContext.appState || nextProps.appState;

	            return appState.hasIn(["entities", entityID]);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var context = this.context;
	            var props = this.props;
	            var children = props.children;

	            var entityID = context.entityID || props.entityID;
	            var appState = context.appState || props.appState;

	            return appState && appState.hasIn(["entities", entityID]) && _react2.default.createElement(
	                "div",
	                null,
	                children
	            );
	        }
	    }]);
	    return EntityLoaded;
	}(_react2.default.Component);

	EntityLoaded.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object
	};
	EntityLoaded.propTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object
	};
	exports.default = EntityLoaded;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderTrigger = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(RenderTrigger, _AkkadAbstractCompone);

	    function RenderTrigger() {
	        (0, _classCallCheck3.default)(this, RenderTrigger);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderTrigger).apply(this, arguments));
	    }

	    (0, _createClass3.default)(RenderTrigger, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var triggers = _props.triggers;
	            var _context = this.context;
	            var sceneID = _context.sceneID;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createTriggers = actions._internal.createTriggers;


	            createTriggers(sceneID, targetEntityID, entityID, triggers);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var targetEntityID = this.props.targetEntityID;
	            var actions = this.context.actions;
	            var disposeTriggers = actions._internal.disposeTriggers;


	            disposeTriggers(targetEntityID);
	        }
	    }]);
	    return RenderTrigger;
	}(_AkkadAbstractComponent2.default);

	RenderTrigger.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	RenderTrigger.propTypes = {
	    targetEntityID: _react.PropTypes.string.isRequired,
	    triggers: _react.PropTypes.object
	};
	exports.default = RenderTrigger;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _RenderMesh = __webpack_require__(104);

	var _RenderMesh2 = _interopRequireDefault(_RenderMesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Mesh = function (_React$Component) {
	    (0, _inherits3.default)(Mesh, _React$Component);

	    function Mesh() {
	        (0, _classCallCheck3.default)(this, Mesh);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Mesh).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Mesh, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var _props = this.props;
	            var path = _props.path;
	            var fileName = _props.fileName;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_RenderMesh2.default, {
	                    targetEntityID: entityID,
	                    path: path,
	                    fileName: fileName
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Mesh;
	}(_react2.default.Component);

	Mesh.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Mesh.propTypes = {
	    path: _react.PropTypes.string,
	    fileName: _react.PropTypes.string
	};
	exports.default = Mesh;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AnimateMesh = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(AnimateMesh, _AkkadAbstractCompone);

	    function AnimateMesh() {
	        (0, _classCallCheck3.default)(this, AnimateMesh);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AnimateMesh).apply(this, arguments));
	    }

	    (0, _createClass3.default)(AnimateMesh, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var sceneID = _context.sceneID;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var keyFrames = _props.keyFrames;
	            var startFrame = _props.startFrame;
	            var endFrame = _props.endFrame;


	            var targetMesh = appState.getIn(["entities", targetEntityID, "entity"]);
	            var scene = appState.getIn(["entities", sceneID, "entity"]);
	            var animation = appState.getIn(["entities", entityID, "entity"]);

	            animation.setKeys(keyFrames);

	            targetMesh.animations.push(animation);

	            scene.beginAnimation(targetMesh, startFrame, endFrame, true);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            // TODO: remove and dispose of animation when component is unmounted.
	        }
	    }]);
	    return AnimateMesh;
	}(_AkkadAbstractComponent2.default);

	AnimateMesh.contextTypes = {
	    sceneID: _react.PropTypes.string.isRequired,
	    entityID: _react.PropTypes.string.isRequired,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	AnimateMesh.propTypes = {
	    targetEntityID: _react.PropTypes.string,
	    propertyName: _react.PropTypes.string,
	    keyFrames: _react.PropTypes.array,
	    startFrame: _react.PropTypes.number,
	    endFrame: _react.PropTypes.number
	};
	AnimateMesh.defaultProps = {
	    startFrame: 0,
	    endFrame: 100
	};
	exports.default = AnimateMesh;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Position = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Position, _AkkadAbstractCompone);

	    function Position() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Position);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Position)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updatePosition = function (props, context) {
	            var appState = context.appState;
	            var entityID = context.entityID;
	            var vector = props.vector;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.position = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Position, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            var newVector = nextProps.vector;
	            var oldVector = this.props.vector;

	            for (var axis in newVector) {
	                if (newVector[axis] !== oldVector[axis]) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            this.updatePosition(nextProps, nextContext);
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.updatePosition(this.props, this.context);
	        }
	    }]);
	    return Position;
	}(_AkkadAbstractComponent2.default);

	Position.propTypes = {
	    vector: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	Position.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = Position;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(114);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(116);
	module.exports = __webpack_require__(8).Array.from;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(9)
	  , $export     = __webpack_require__(6)
	  , toObject    = __webpack_require__(39)
	  , call        = __webpack_require__(117)
	  , isArrayIter = __webpack_require__(118)
	  , toLength    = __webpack_require__(30)
	  , getIterFn   = __webpack_require__(119);
	$export($export.S + $export.F * !__webpack_require__(121)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(64)
	  , ITERATOR   = __webpack_require__(70)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(120)
	  , ITERATOR  = __webpack_require__(70)('iterator')
	  , Iterators = __webpack_require__(64);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(27)
	  , TAG = __webpack_require__(70)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(70)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Rotate = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Rotate, _AkkadAbstractCompone);

	    function Rotate() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Rotate);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Rotate)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateRotation = function (props, context) {
	            var entityID = context.entityID;
	            var appState = context.appState;
	            var amount = props.amount;

	            var axis = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(props.axis))))();
	            var space = _babylonjs2.default.Space[props.space];

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.rotate(axis, amount, space);
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Rotate, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            var axis = nextProps.axis;
	            var amount = nextProps.amount;
	            var space = nextProps.space;


	            for (var i in axis) {
	                if (axis[i] !== this.props.axis[i]) {
	                    return true;
	                }
	            }

	            if (amount !== this.props.amount || space !== this.props.space) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            this.updateRotation(nextProps, nextContext);
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.updateRotation(this.props, this.context);
	        }
	    }]);
	    return Rotate;
	}(_AkkadAbstractComponent2.default);

	Rotate.propTypes = {
	    axis: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	    amount: _react.PropTypes.number.isRequired,
	    space: _react.PropTypes.string.isRequired
	};
	Rotate.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = Rotate;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wireframe = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Wireframe, _AkkadAbstractCompone);

	    function Wireframe() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Wireframe);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Wireframe)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.entityHasWireframe = function (val) {
	            var _this$context = _this.context;
	            var appState = _this$context.appState;
	            var entityID = _this$context.entityID;


	            var material = appState.getIn(["entities", entityID, "entity"]);
	            material.wireframe = val;
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Wireframe, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate() {
	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.entityHasWireframe(true);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.entityHasWireframe(false);
	        }
	    }]);
	    return Wireframe;
	}(_AkkadAbstractComponent2.default);

	Wireframe.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = Wireframe;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Texture = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Texture, _AkkadAbstractCompone);

	    function Texture() {
	        (0, _classCallCheck3.default)(this, Texture);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Texture).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Texture, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            return nextProps.image !== this.props.image;
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var sceneID = _context.sceneID;
	            var entityID = _context.entityID;
	            var image = this.props.image;

	            var scene = appState.getIn(["entities", sceneID, "entity"]);

	            var entityObj = appState.getIn(["entities", entityID]);
	            var type = entityObj.get("type");
	            var entity = entityObj.get("entity");

	            var texture = new _babylonjs2.default.Texture(image, scene);

	            if (type === "material") {
	                entity.diffuseTexture = texture;
	            } else if (type === "particles") {
	                entity.particleTexture = texture;
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;


	            var entity = appState.getIn(["entities", entityID, "entity"]);
	            entity.diffuseTexture = null;
	        }
	    }]);
	    return Texture;
	}(_AkkadAbstractComponent2.default);

	Texture.contextTypes = {
	    entityID: _react.PropTypes.string,
	    sceneID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Texture.propTypes = {
	    image: _react.PropTypes.string.isRequired
	};
	exports.default = Texture;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Color = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Color, _AkkadAbstractCompone);

	    function Color() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Color);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Color)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateColor = function (props, context) {
	            var appState = context.appState;
	            var entityID = context.entityID;
	            var color = props.color;
	            var type = props.type;


	            var entityObj = appState.getIn(["entities", entityID]);
	            var entity = entityObj.get("entity");

	            var color3 = new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(color))))();

	            switch (type) {
	                case "ambient":
	                    entity.ambientColor = color3;
	                    break;
	                case "specular":
	                    entity.specularColor = color3;
	                    break;
	                default:
	                    // diffuse by default
	                    entity.diffuseColor = color3;
	                    break;
	            }
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(Color, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            for (var i = 0, l = 2; i <= l; i++) {
	                if (nextProps.color[i] !== this.props.color[i]) {
	                    return true;
	                }
	            }

	            if (nextProps.type !== this.props.type) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            this.updateColor(nextProps, nextContext);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.updateColor(this.props, this.context);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;


	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            // For now, set all colors to null.
	            entity.ambientColor = null;
	            entity.specularColor = null;
	            entity.diffuseColor = null;
	        }
	    }]);
	    return Color;
	}(_AkkadAbstractComponent2.default);

	Color.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Color.propTypes = {
	    color: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    type: _react.PropTypes.string
	};
	exports.default = Color;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Gravity = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(Gravity, _AkkadAbstractCompone);

	    function Gravity() {
	        (0, _classCallCheck3.default)(this, Gravity);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Gravity).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Gravity, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            var newVector = nextProps.vector;
	            var oldVector = this.props.vector;

	            for (var axis in newVector) {
	                if (newVector[axis] !== oldVector[axis]) {
	                    return true;
	                }
	            }

	            return false;
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);
	            var vector = this.props.vector;


	            entity.gravity = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.gravity = null;
	        }
	    }]);
	    return Gravity;
	}(_AkkadAbstractComponent2.default);

	Gravity.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Gravity.propTypes = {
	    vector: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired
	};
	exports.default = Gravity;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ApplyGravity = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(ApplyGravity, _AkkadAbstractCompone);

	    function ApplyGravity() {
	        (0, _classCallCheck3.default)(this, ApplyGravity);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ApplyGravity).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ApplyGravity, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate() {
	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.applyGravity = true;
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.applyGravity = false;
	        }
	    }]);
	    return ApplyGravity;
	}(_AkkadAbstractComponent2.default);

	ApplyGravity.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = ApplyGravity;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckCollisions = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(CheckCollisions, _AkkadAbstractCompone);

	    function CheckCollisions() {
	        (0, _classCallCheck3.default)(this, CheckCollisions);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckCollisions).apply(this, arguments));
	    }

	    (0, _createClass3.default)(CheckCollisions, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate() {
	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.checkCollisions = true;
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.checkCollisions = false;
	        }
	    }]);
	    return CheckCollisions;
	}(_AkkadAbstractComponent2.default);

	CheckCollisions.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = CheckCollisions;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CollisionsEnabled = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(CollisionsEnabled, _AkkadAbstractCompone);

	    function CollisionsEnabled() {
	        (0, _classCallCheck3.default)(this, CollisionsEnabled);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CollisionsEnabled).apply(this, arguments));
	    }

	    (0, _createClass3.default)(CollisionsEnabled, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate() {
	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.collisionsEnabled = true;
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.collisionsEnabled = false;
	        }
	    }]);
	    return CollisionsEnabled;
	}(_AkkadAbstractComponent2.default);

	CollisionsEnabled.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = CollisionsEnabled;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GenericProperty = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(GenericProperty, _AkkadAbstractCompone);

	    function GenericProperty() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, GenericProperty);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(GenericProperty)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updatePropertyValue = function (val) {
	            var _this$context = _this.context;
	            var appState = _this$context.appState;
	            var entityID = _this$context.entityID;
	            var propertyName = _this.props.propertyName;


	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity[propertyName] = val;
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(GenericProperty, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (nextProps.onVal !== this.props.onVal || nextProps.offVal !== this.props.offVal) {
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var onVal = this.props.onVal;


	            this.updatePropertyValue(onVal);
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate() {
	            var onVal = this.props.onVal;


	            this.updatePropertyValue(onVal);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var offVal = this.props.offVal;


	            this.updatePropertyValue(offVal);
	        }
	    }]);
	    return GenericProperty;
	}(_AkkadAbstractComponent2.default);

	GenericProperty.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	GenericProperty.propTypes = {
	    propertyName: _react.PropTypes.string.isRequired,
	    onVal: _react.PropTypes.any.isRequired,
	    offVal: _react.PropTypes.any
	};
	exports.default = GenericProperty;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Sets an Entity as the property on another entity */

	var SetEntityAsProperty = function (_React$Component) {
	    (0, _inherits3.default)(SetEntityAsProperty, _React$Component);

	    function SetEntityAsProperty() {
	        (0, _classCallCheck3.default)(this, SetEntityAsProperty);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SetEntityAsProperty).apply(this, arguments));
	    }

	    (0, _createClass3.default)(SetEntityAsProperty, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var propertyName = _props.propertyName;
	            var reverse = _props.reverse;

	            var targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);
	            var entityToSet = appState.getIn(["entities", entityID, "entity"]);

	            if (reverse) {
	                entityToSet[propertyName] = targetEntity;
	            } else {
	                targetEntity[propertyName] = entityToSet;
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var entityID = _context2.entityID;
	            var appState = _context2.appState;
	            var _props2 = this.props;
	            var propertyName = _props2.propertyName;
	            var targetEntityID = _props2.targetEntityID;
	            var reverse = _props2.reverse;

	            var targetEntity = appState.getIn(["entities", targetEntityID, "entity"]);
	            var entityToSet = appState.getIn(["entities", entityID, "entity"]);

	            if (reverse) {
	                entityToSet[propertyName] = null;
	            } else {
	                targetEntity[propertyName] = null;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                this.props.children
	            );
	        }
	    }]);
	    return SetEntityAsProperty;
	}(_react2.default.Component);

	SetEntityAsProperty.contextTypes = {
	    entityID: _react.PropTypes.string.isRequired,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	SetEntityAsProperty.propTypes = {
	    targetEntityID: _react.PropTypes.string,
	    propertyName: _react.PropTypes.string,
	    reverse: _react.PropTypes.bool
	};
	exports.default = SetEntityAsProperty;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CallMethodOnEntity = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(CallMethodOnEntity, _AkkadAbstractCompone);

	    function CallMethodOnEntity() {
	        (0, _classCallCheck3.default)(this, CallMethodOnEntity);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CallMethodOnEntity).apply(this, arguments));
	    }

	    (0, _createClass3.default)(CallMethodOnEntity, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var methodName = _props.methodName;
	            var args = _props.args;


	            var entity = appState.getIn(["entities", targetEntityID || entityID, "entity"]);

	            if (args) {
	                entity[methodName].apply(entity, (0, _toConsumableArray3.default)(args));
	            } else {
	                entity[methodName]();
	            }
	        }
	    }]);
	    return CallMethodOnEntity;
	}(_AkkadAbstractComponent2.default);

	CallMethodOnEntity.contextTypes = {
	    entityID: _react.PropTypes.string.isRequired,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	CallMethodOnEntity.propTypes = {
	    targetEntityID: _react.PropTypes.string,
	    methodName: _react.PropTypes.string.isRequired,
	    args: _react.PropTypes.arrayOf(_react.PropTypes.any)
	};
	exports.default = CallMethodOnEntity;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Scene = function (_React$Component) {
	    (0, _inherits3.default)(Scene, _React$Component);

	    function Scene() {
	        (0, _classCallCheck3.default)(this, Scene);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scene).call(this));

	        _this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
	        return _this;
	    }

	    (0, _createClass3.default)(Scene, [{
	        key: "getChildContext",
	        // still setting id on entity for immediate child systems.
	        value: function getChildContext() {
	            return {
	                sceneID: this.id,
	                entityID: this.id
	            };
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var setScene = this.context.actions._internal.setScene;

	            var canvas = this.refs["akkadCanvas" + this.id];

	            setScene(this.id, canvas);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var disposeScene = this.context.actions._internal.disposeScene;


	            disposeScene(this.id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var appState = this.context.appState;
	            var _props = this.props;
	            var styles = _props.styles;
	            var children = _props.children;

	            var hasScene = appState.hasIn(["entities", this.id]);

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("canvas", {
	                    ref: "akkadCanvas" + this.id,
	                    className: "akkad-canvas",
	                    id: this.id,
	                    style: styles
	                }),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    hasScene && children
	                )
	            );
	        }
	    }]);
	    return Scene;
	}(_react2.default.Component);

	Scene.propTypes = {
	    styles: _react.PropTypes.object
	};
	Scene.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Scene.childContextTypes = {
	    sceneID: _react.PropTypes.string,
	    entityID: _react.PropTypes.string };
	exports.default = Scene;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Material = function (_React$Component) {
	    (0, _inherits3.default)(Material, _React$Component);

	    function Material() {
	        (0, _classCallCheck3.default)(this, Material);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Material).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Material, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var children = this.props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderMaterial, null),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    _react2.default.createElement(_systems.SetEntityAsProperty, {
	                        targetEntityID: entityID,
	                        propertyName: "material"
	                    }),
	                    children
	                )
	            );
	        }
	    }]);
	    return Material;
	}(_react2.default.Component);

	Material.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = Material;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actions2 = __webpack_require__(138);

	var _actions3 = _interopRequireDefault(_actions2);

	var _classes = __webpack_require__(160);

	var _PropsToContext = __webpack_require__(169);

	var _PropsToContext2 = _interopRequireDefault(_PropsToContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Akkad = function (_React$Component) {
	    (0, _inherits3.default)(Akkad, _React$Component);

	    function Akkad() {
	        (0, _classCallCheck3.default)(this, Akkad);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Akkad).call(this));

	        _this.stateManager = new _classes.StateManager();
	        return _this;
	    }

	    (0, _createClass3.default)(Akkad, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this2 = this;

	            var actions = (0, _extends3.default)({}, this.props.actions, {
	                _internal: _actions3.default
	            });

	            this.stateManager.init(actions, // actions object
	            function () {
	                return _immutable2.default.fromJS(_this2.props.initState || {});
	            }, // init function
	            function (appState, actions) {
	                return _this2.setState({ appState: appState, actions: actions });
	            } // called after action is returned.
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var stateManager = this.stateManager;
	            var children = this.props.children;


	            return stateManager.actions && stateManager.appState && _react2.default.createElement(
	                _PropsToContext2.default,
	                {
	                    actions: stateManager.actions,
	                    appState: stateManager.appState
	                },
	                children
	            );
	        }
	    }]);
	    return Akkad;
	}(_react2.default.Component);

	Akkad.propTypes = {
	    canvasNode: _react.PropTypes.object,
	    actions: _react.PropTypes.object,
	    styles: _react.PropTypes.object,
	    initState: _react.PropTypes.object
	};
	exports.default = Akkad;

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_137__;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _appActions = __webpack_require__(139);

	var _appActions2 = _interopRequireDefault(_appActions);

	var _CameraActions = __webpack_require__(140);

	var _CameraActions2 = _interopRequireDefault(_CameraActions);

	var _LightActions = __webpack_require__(141);

	var _LightActions2 = _interopRequireDefault(_LightActions);

	var _SceneActions = __webpack_require__(142);

	var _SceneActions2 = _interopRequireDefault(_SceneActions);

	var _ShapeActions = __webpack_require__(143);

	var _ShapeActions2 = _interopRequireDefault(_ShapeActions);

	var _MaterialActions = __webpack_require__(164);

	var _MaterialActions2 = _interopRequireDefault(_MaterialActions);

	var _AnimationActions = __webpack_require__(165);

	var _AnimationActions2 = _interopRequireDefault(_AnimationActions);

	var _TriggerActions = __webpack_require__(166);

	var _TriggerActions2 = _interopRequireDefault(_TriggerActions);

	var _MeshActions = __webpack_require__(167);

	var _MeshActions2 = _interopRequireDefault(_MeshActions);

	var _ParticlesActions = __webpack_require__(168);

	var _ParticlesActions2 = _interopRequireDefault(_ParticlesActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _extends3.default)({}, _appActions2.default, _CameraActions2.default, _LightActions2.default, _SceneActions2.default, _ShapeActions2.default, _MaterialActions2.default, _AnimationActions2.default, _TriggerActions2.default, _MeshActions2.default, _ParticlesActions2.default);

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    disposeEntity: function disposeEntity(state, actions, entityID) {
	        return state.deleteIn(["entities", entityID]);
	    }
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cameraCreators = {
	    free: function free(entityID, config, scene) {
	        var initialPosition = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(config.initialPosition))))();

	        var camera = new _babylonjs2.default.FreeCamera(entityID, initialPosition, scene);

	        if (config.target) {
	            var target = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(config.target))))();
	            camera.setTarget(target);
	        }

	        return camera;
	    },
	    arcRotate: function arcRotate(entityID, config, scene) {
	        var _config$alpha = config.alpha;
	        var alpha = _config$alpha === undefined ? 0 : _config$alpha;
	        var _config$beta = config.beta;
	        var beta = _config$beta === undefined ? 0 : _config$beta;
	        var _config$radius = config.radius;
	        var radius = _config$radius === undefined ? 0 : _config$radius;
	        var initialPosition = config.initialPosition;


	        var target = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(config.target))))();

	        var camera = new _babylonjs2.default.ArcRotateCamera(entityID, alpha, beta, radius, target, scene);

	        if (initialPosition) {
	            camera.setPosition(new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(initialPosition))))());
	        }

	        return camera;
	    }
	};

	exports.default = {
	    setCamera: function setCamera(state, actions, sceneID, entityID, config) {
	        var canvas = state.getIn(["entities", "canvas-" + sceneID, "entity"]);
	        var scene = state.getIn(["entities", sceneID, "entity"]);

	        var camera = cameraCreators[config.type](entityID, config, scene);

	        camera.attachControl(canvas, false);

	        var cameraObj = _immutable2.default.Map({
	            id: entityID,
	            entity: camera,
	            type: "camera"
	        });

	        return state.setIn(["entities", entityID], cameraObj);
	    }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lightCreators = {
	    hemispheric: function hemispheric(scene, entityID, props) {
	        var _props$direction = props.direction;
	        var direction = _props$direction === undefined ? [0, 1, 0] : _props$direction;


	        return new _babylonjs2.default.HemisphericLight(entityID, new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(direction))))(), scene);
	    },
	    point: function point(scene, entityID, props) {
	        var _props$source = props.source;
	        var source = _props$source === undefined ? [1, 10, 1] : _props$source;


	        return new _babylonjs2.default.PointLight(entityID, new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(source))))(), scene);
	    },
	    spot: function spot(scene, entityID, props) {
	        var _props$position = props.position;
	        var position = _props$position === undefined ? [0, 30, -10] : _props$position;
	        var _props$direction2 = props.direction;
	        var direction = _props$direction2 === undefined ? [0, -1, 0] : _props$direction2;
	        var _props$angle = props.angle;
	        var angle = _props$angle === undefined ? 0.8 : _props$angle;
	        var _props$exponent = props.exponent;
	        var exponent = _props$exponent === undefined ? 2 : _props$exponent;


	        var spotLight = new _babylonjs2.default.SpotLight(entityID, new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(position))))(), new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(direction))))(), angle, exponent, scene);

	        return spotLight;
	    },
	    directional: function directional(scene, entityID, props) {
	        var _props$direction3 = props.direction;
	        var direction = _props$direction3 === undefined ? [0, -1, 0] : _props$direction3;


	        return new _babylonjs2.default.DirectionalLight(entityID, new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(direction))))(), scene);
	    }
	};

	exports.default = {
	    createLight: function createLight(state, actions, sceneID, entityID, props) {
	        var type = props.type;

	        var scene = state.getIn(["entities", sceneID, "entity"]);
	        var light = lightCreators[type](scene, entityID, props);

	        var lightObj = _immutable2.default.Map({
	            id: entityID,
	            entity: light,
	            type: "light"
	        });

	        return state.setIn(["entities", entityID], lightObj);
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    setScene: function setScene(state, actions, sceneID, canvas) {
	        var canvasID = "canvas-" + sceneID;
	        var engineID = "engine-" + sceneID;

	        var engine = new _babylonjs2.default.Engine(canvas, true);
	        var scene = new _babylonjs2.default.Scene(engine);

	        state = state.setIn(["entities", canvasID], _immutable2.default.Map({
	            id: canvasID,
	            entity: canvas,
	            type: "canvas"
	        }));

	        state = state.setIn(["entities", engineID], _immutable2.default.Map({
	            id: engineID,
	            entity: engine,
	            type: "engine"
	        }));

	        state = state.setIn(["entities", sceneID], _immutable2.default.Map({
	            id: sceneID,
	            entity: scene,
	            type: "scene"
	        }));

	        engine.runRenderLoop(function () {
	            scene.render();
	        });

	        return state;
	    },
	    disposeScene: function disposeScene(state, actions, sceneID) {
	        var scene = state.getIn(["entities", sceneID, "entity"]);
	        var engine = state.getIn(["entities", "engine-" + sceneID, "entity"]);

	        scene.dispose();

	        engine.stopRenderLoop();

	        state.deleteIn(["entities", sceneID]);
	        state.deleteIn(["entities", "canvas-" + sceneID]);
	        state.deleteIn(["entities", "engine-" + sceneID]);

	        return state;
	    }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(144);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(159);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(148);

	var _promise2 = _interopRequireDefault(_promise);

	var _babylonjs = __webpack_require__(122);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _classes = __webpack_require__(160);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	TODO: In Babylon 2.3 all shape contructors will take an options object.
	      Will need to convert some of these shape methods.
	*/
	var shapeCreators = {
	    box: function box(scene, entityID, options) {
	        var size = options.size;

	        return new _babylonjs.Mesh.CreateBox(entityID, size, scene);
	    },
	    sphere: function sphere(scene, entityID, options) {
	        var segments = options.segments;
	        var diameter = options.diameter;

	        return new _babylonjs.Mesh.CreateSphere(entityID, segments, diameter, scene);
	    },
	    ground: function ground(scene, entityID, options) {
	        var width = options.width;
	        var height = options.height;
	        var subdivisions = options.subdivisions;

	        return new _babylonjs.Mesh.CreateGround(entityID, width, height, subdivisions, scene);
	    },
	    groundFromHeightMap: function groundFromHeightMap(scene, entityID, options) {
	        var heightMap = options.heightMap;
	        var meshWidth = options.meshWidth;
	        var meshHeight = options.meshHeight;
	        var _options$subdivisions = options.subdivisions;
	        var subdivisions = _options$subdivisions === undefined ? 250 : _options$subdivisions;
	        var minHeight = options.minHeight;
	        var maxHeight = options.maxHeight;


	        return new _promise2.default(function (resolve) {
	            return new _babylonjs.Mesh.CreateGroundFromHeightMap(entityID, heightMap, meshWidth, meshHeight, subdivisions, minHeight, maxHeight, scene, true, // updatable
	            resolve);
	        });
	    },
	    disc: function disc(scene, entityID, options) {
	        var radius = options.radius;
	        var tessellation = options.tessellation;
	        var _options$updatable = options.updatable;
	        var updatable = _options$updatable === undefined ? true : _options$updatable;
	        var _options$sideOrientat = options.sideOrientation;
	        var sideOrientation = _options$sideOrientat === undefined ? null : _options$sideOrientat;


	        var disc = new _babylonjs.Mesh.CreateDisc(entityID, radius, tessellation, scene, updatable, sideOrientation);
	        return disc;
	    },
	    cylinder: function cylinder(scene, entityID, options) {
	        var _options$height = options.height;
	        var height = _options$height === undefined ? 1 : _options$height;
	        var _options$diameterTop = options.diameterTop;
	        var diameterTop = _options$diameterTop === undefined ? 1 : _options$diameterTop;
	        var _options$diameterBott = options.diameterBottom;
	        var diameterBottom = _options$diameterBott === undefined ? 1 : _options$diameterBott;
	        var _options$tessellation = options.tessellation;
	        var tessellation = _options$tessellation === undefined ? 30 : _options$tessellation;
	        var _options$subdivisions2 = options.subdivisions;
	        var subdivisions = _options$subdivisions2 === undefined ? 6 : _options$subdivisions2;
	        var _options$updatable2 = options.updatable;
	        var updatable = _options$updatable2 === undefined ? true : _options$updatable2;


	        return new _babylonjs.Mesh.CreateCylinder(entityID, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable);
	    },
	    torus: function torus(scene, entityID, options) {
	        var _options$diameter = options.diameter;
	        var diameter = _options$diameter === undefined ? 1 : _options$diameter;
	        var _options$thickness = options.thickness;
	        var thickness = _options$thickness === undefined ? 1 : _options$thickness;
	        var _options$tessellation2 = options.tessellation;
	        var tessellation = _options$tessellation2 === undefined ? 10 : _options$tessellation2;
	        var _options$updatable3 = options.updatable;
	        var updatable = _options$updatable3 === undefined ? true : _options$updatable3;
	        var _options$sideOrientat2 = options.sideOrientation;
	        var sideOrientation = _options$sideOrientat2 === undefined ? 0 : _options$sideOrientat2;


	        return new _babylonjs.Mesh.CreateTorus(entityID, diameter, thickness, tessellation, scene, updatable, sideOrientation);
	    },
	    lines: function lines(scene, entityID, options) {
	        var vectors = options.vectors;


	        return new _babylonjs.Mesh.CreateLines(entityID, vectors, scene);
	    },
	    dashedLines: function dashedLines(scene, entityID, options) {
	        var vectors = options.vectors;
	        var dashSize = options.dashSize;
	        var gapSize = options.gapSize;
	        var dashNumber = options.dashNumber;


	        return new _babylonjs.Mesh.CreateDashedLines(entityID, vectors, dashSize, gapSize, dashNumber, scene);
	    }
	};

	var ShapeActions = {
	    createShape: function createShape(state, actions, sceneID, entityID, props) {
	        var _this = this;

	        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	            var type, scene, options, shape, meshObj;
	            return _regenerator2.default.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            type = props.type;

	                            if (!(type && shapeCreators[type])) {
	                                _context.next = 11;
	                                break;
	                            }

	                            scene = state.getIn(["entities", sceneID, "entity"]);
	                            options = _classes.Helpers.convertShapeProps(props);
	                            shape = shapeCreators[type](scene, entityID, options);

	                            if (!(shape instanceof _promise2.default)) {
	                                _context.next = 9;
	                                break;
	                            }

	                            _context.next = 8;
	                            return shape;

	                        case 8:
	                            shape = _context.sent;

	                        case 9:
	                            meshObj = _immutable2.default.Map({
	                                id: entityID,
	                                entity: shape,
	                                type: "mesh"
	                            });


	                            state = state.setIn(["entities", entityID], meshObj);

	                        case 11:
	                            return _context.abrupt("return", state);

	                        case 12:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, _this);
	        }))();
	    }
	};

	exports.default = ShapeActions;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(145);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";

	var _promise = __webpack_require__(148);

	var _promise2 = _interopRequireDefault(_promise);

	var _setPrototypeOf = __webpack_require__(87);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(91);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(56);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _iterator = __webpack_require__(57);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(75);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

	  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = (0, _create2.default)((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_setPrototypeOf2.default) {
	      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = (0, _create2.default)(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
	        resolve(callInvokeWithMethodAndArg());
	      });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(146)(module), __webpack_require__(147)))

/***/ },
/* 146 */
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
/* 147 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	__webpack_require__(59);
	__webpack_require__(71);
	__webpack_require__(150);
	module.exports = __webpack_require__(8).Promise;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(62)
	  , global             = __webpack_require__(7)
	  , ctx                = __webpack_require__(9)
	  , classof            = __webpack_require__(120)
	  , $export            = __webpack_require__(6)
	  , isObject           = __webpack_require__(14)
	  , anObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(10)
	  , anInstance         = __webpack_require__(151)
	  , forOf              = __webpack_require__(152)
	  , setProto           = __webpack_require__(90).set
	  , speciesConstructor = __webpack_require__(153)
	  , task               = __webpack_require__(154).set
	  , microtask          = __webpack_require__(156)
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(70)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(157)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(69)($Promise, PROMISE);
	__webpack_require__(158)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(121)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(9)
	  , call        = __webpack_require__(117)
	  , isArrayIter = __webpack_require__(118)
	  , anObject    = __webpack_require__(13)
	  , toLength    = __webpack_require__(30)
	  , getIterFn   = __webpack_require__(119);
	module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(13)
	  , aFunction = __webpack_require__(10)
	  , SPECIES   = __webpack_require__(70)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(9)
	  , invoke             = __webpack_require__(155)
	  , html               = __webpack_require__(68)
	  , cel                = __webpack_require__(18)
	  , global             = __webpack_require__(7)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(27)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , macrotask = __webpack_require__(154).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(27)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, fn;
	  if(isNode && (parent = process.domain))parent.exit();
	  while(head){
	    fn = head.fn;
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = true
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = !toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(11);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(7)
	  , core        = __webpack_require__(8)
	  , dP          = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(16)
	  , SPECIES     = __webpack_require__(70)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(148);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Helpers = exports.StateManager = exports.MeshManager = undefined;

	var _MeshManager = __webpack_require__(161);

	var _MeshManager2 = _interopRequireDefault(_MeshManager);

	var _StateManager = __webpack_require__(162);

	var _StateManager2 = _interopRequireDefault(_StateManager);

	var _Helpers = __webpack_require__(163);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    MeshManager: _MeshManager2.default,
	    StateManager: _StateManager2.default,
	    Helpers: _Helpers2.default
	};
	var MeshManager = exports.MeshManager = _MeshManager2.default;
	var StateManager = exports.StateManager = _StateManager2.default;
	var Helpers = exports.Helpers = _Helpers2.default;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propHandlers = {
	    position: function position(mesh, vector) {
	        mesh.position = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	    },
	    rotation: function rotation(mesh, vector) {
	        mesh.rotation = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	    },
	    rotationQuaternion: function rotationQuaternion(mesh, quaternion) {
	        mesh.rotationQuaternion = new (Function.prototype.bind.apply(_babylonjs2.default.Quaternion, [null].concat((0, _toConsumableArray3.default)(quaternion))))();
	    },
	    scaling: function scaling(mesh, vector) {
	        mesh.scaling = new (Function.prototype.bind.apply(_babylonjs2.default.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	    },
	    visibility: function visibility(mesh, _visibility) {
	        mesh.visibility = _visibility;
	    },
	    isVisible: function isVisible(mesh, _isVisible) {
	        mesh.isVisible = _isVisible;
	    },
	    outlineColor: function outlineColor(mesh, color) {
	        mesh.outlineColor = new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(color))))();
	    }
	};

	var MeshManager = function () {
	    function MeshManager() {
	        (0, _classCallCheck3.default)(this, MeshManager);
	    }

	    (0, _createClass3.default)(MeshManager, [{
	        key: "updateMeshFromProps",
	        value: function updateMeshFromProps(mesh, props) {
	            _immutable2.default.Map(props).filter(function (val, name) {
	                return !!propHandlers[name];
	            }).forEach(function (val, name) {
	                return propHandlers[name](mesh, val);
	            });
	        }
	    }]);
	    return MeshManager;
	}();

	exports.default = MeshManager;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _promise = __webpack_require__(148);

	var _promise2 = _interopRequireDefault(_promise);

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _symbol = __webpack_require__(75);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _state = (0, _symbol2.default)("state");
	var _actions = (0, _symbol2.default)("actions");
	var _wrappedActions = (0, _symbol2.default)("wrappedActions");
	var _stateSetCallback = (0, _symbol2.default)("stateSetCallback");
	var _hasBeenInitialized = (0, _symbol2.default)("hasBeenInitialized");

	var StateManager = function () {
	    function StateManager() {
	        (0, _classCallCheck3.default)(this, StateManager);
	    }

	    (0, _createClass3.default)(StateManager, [{
	        key: "init",
	        value: function init(actions, initFunc, stateSetCallback) {
	            try {
	                if (!this[_hasBeenInitialized]) {
	                    this[_hasBeenInitialized] = true;

	                    /* wrap actions */
	                    var wrappedActions = _immutable2.default.Map(actions).reduce(this.wrapActions.bind(this), {});
	                    /* wrap internal actions */
	                    var wrappedInternalActions = _immutable2.default.Map(actions._internal).reduce(this.wrapActions.bind(this), {});

	                    this[_wrappedActions] = (0, _extends3.default)({}, wrappedActions, {
	                        _internal: wrappedInternalActions
	                    });

	                    this[_actions] = actions;

	                    /* Set initial state from init function */
	                    this[_state] = initFunc(this[_wrappedActions]);

	                    /* set state callback, most likely a setState React method */
	                    this[_stateSetCallback] = stateSetCallback;
	                } else {
	                    throw new Error("StateManager has already been initialized");
	                }
	            } catch (e) {
	                console.error(e);
	            }
	        }
	    }, {
	        key: "wrapActions",


	        /* wraps actions with... the actionWrapper */
	        value: function wrapActions(acc, val, name) {
	            var _this = this;

	            if (typeof val === "function") {
	                acc[name] = function () {
	                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                        args[_key] = arguments[_key];
	                    }

	                    return _this.actionWrapper.apply(_this, [val].concat(args));
	                };
	            }
	            return acc;
	        }

	        /* injects state and actions as args into actions that are called. */

	    }, {
	        key: "actionWrapper",
	        value: function actionWrapper(func) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }

	            // call the action function with correct args.
	            var newState = func.apply(undefined, [this[_state], this[_wrappedActions]].concat(args));

	            if (newState instanceof _promise2.default) {
	                newState.then(this.callSetStateCallback.bind(this));
	            } else {
	                this.callSetStateCallback(newState);
	            }

	            return this[_state];
	        }

	        /* Checks to make sure object is an immutable map, then calls the setState callback */

	    }, {
	        key: "callSetStateCallback",
	        value: function callSetStateCallback(newState) {
	            if (_immutable2.default.Map.isMap(newState)) {
	                if (newState !== this[_state]) {
	                    this[_state] = newState;
	                }
	                // call the callback specified in the init method.
	                this[_stateSetCallback](this[_state], this[_wrappedActions]);
	            } else {
	                console.error("recieved state that was not an immutable map.");
	                console.log(newState);
	            }
	        }
	    }, {
	        key: "actions",
	        get: function get() {
	            return this[_wrappedActions];
	        }
	    }, {
	        key: "appState",
	        get: function get() {
	            return this[_state];
	        }
	    }]);
	    return StateManager;
	}();

	exports.default = StateManager;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _babylonjs = __webpack_require__(122);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var shapePropTransforms = {
	    faceColors: function faceColors(color4Array) {
	        return new (Function.prototype.bind.apply(_babylonjs.Color4, [null].concat((0, _toConsumableArray3.default)(color4Array))))();
	    },
	    faceUV: function faceUV(vector4Array) {
	        return new (Function.prototype.bind.apply(_babylonjs.Vector4, [null].concat((0, _toConsumableArray3.default)(vector4Array))))();
	    },
	    axis: function axis(vector3Array) {
	        return new (Function.prototype.bind.apply(_babylonjs.Vector3, [null].concat((0, _toConsumableArray3.default)(vector3Array))))();
	    },
	    space: function space(spaceType) {
	        return _babylonjs.Space[spaceType];
	    },
	    vectors: function vectors(_vectors) {
	        return _vectors.map(function (vector) {
	            return new (Function.prototype.bind.apply(_babylonjs.Vector3, [null].concat((0, _toConsumableArray3.default)(vector))))();
	        });
	    }
	};

	/* converts prop values to Babylon accepted values */
	var convertShapeProps = function convertShapeProps(props) {
	    var newProps = {};

	    for (var prop in props) {
	        var val = props[prop];
	        newProps[prop] = shapePropTransforms[prop] ? shapePropTransforms[prop](val) : val;
	    }

	    return newProps;
	};

	exports.default = {
	    convertShapeProps: convertShapeProps
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MaterialActions = {
	    createMaterial: function createMaterial(state, actions, sceneID, entityID) {
	        var scene = state.getIn(["entities", sceneID, "entity"]);

	        var material = new _babylonjs2.default.StandardMaterial(entityID, scene);

	        var materialObj = _immutable2.default.Map({
	            id: entityID,
	            entity: material,
	            type: "material"
	        });

	        return state.setIn(["entities", entityID], materialObj);
	    }
	};

	exports.default = MaterialActions;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var valueTypeMap = {
	    float: _babylonjs2.default.Animation.ANIMATIONTYPE_FLOAT,
	    vector2: _babylonjs2.default.Animation.ANIMATIONTYPE_VECTOR2,
	    vector3: _babylonjs2.default.Animation.ANIMATIONTYPE_VECTOR3,
	    quaternion: _babylonjs2.default.Animation.ANIMATIONTYPE_QUATERNION,
	    matrix: _babylonjs2.default.Animation.ANIMATIONTYPE_MATRIX,
	    color: _babylonjs2.default.Animation.ANIMATIONTYPE_COLOR3
	};

	var loopModeMap = {
	    relative: _babylonjs2.default.Animation.ANIMATIONLOOPMODE_RELATIVE,
	    cycle: _babylonjs2.default.Animation.ANIMATIONLOOPMODE_CYCLE,
	    constant: _babylonjs2.default.Animation.ANIMATIONLOOPMODE_CONSTANT
	};

	var AnimationActions = {
	    createAnimation: function createAnimation(state, actions, config) {
	        var entityID = config.entityID;
	        var meshProperty = config.meshProperty;
	        var valueType = config.valueType;
	        var loopMode = config.loopMode;
	        var _config$fps = config.fps;
	        var fps = _config$fps === undefined ? 30 : _config$fps;


	        var animation = new _babylonjs2.default.Animation(entityID, // name
	        meshProperty, // property type to animate
	        fps, // fps
	        valueTypeMap[valueType], // value type of animation
	        loopModeMap[loopMode] // loop mode
	        );

	        var animationObj = _immutable2.default.Map({
	            id: entityID,
	            entity: animation,
	            type: "animation"
	        });

	        return state.setIn(["entities", entityID], animationObj);
	    }
	};

	exports.default = AnimationActions;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(122);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var triggerHandlers = {
	    onClick: function onClick() {
	        return _babylonjs.ActionManager.OnPickTrigger;
	    },
	    onLeftClick: function onLeftClick() {
	        return _babylonjs.ActionManager.OnLeftPickTrigger;
	    },
	    onRightClick: function onRightClick() {
	        return _babylonjs.ActionManager.OnRightPickTrigger;
	    }, // need to disable menu pop up...
	    onMouseOver: function onMouseOver() {
	        return _babylonjs.ActionManager.OnPointerOverTrigger;
	    },
	    onMouseOut: function onMouseOut() {
	        return _babylonjs.ActionManager.OnPointerOutTrigger;
	    },
	    onKeyDown: function onKeyDown() {
	        return _babylonjs.ActionManager.OnKeyDownTrigger;
	    },
	    onKeyUp: function onKeyUp() {
	        return _babylonjs.ActionManager.OnKeyUpTrigger;
	    }
	};

	var TriggerActions = {
	    createTriggers: function createTriggers(state, actions, sceneID, targetEntityID, entityID, triggers) {
	        var mesh = state.getIn(["entities", targetEntityID, "entity"]);

	        /* Create an Action Manager on Mesh if it doesn't already exist */
	        if (!mesh.actionManager) {
	            var scene = state.getIn(["entities", sceneID, "entity"]);
	            mesh.actionManager = new _babylonjs.ActionManager(scene);
	        }

	        console.log("actionManager", mesh.actionManager);

	        _immutable2.default.Map(triggers).filter(function (func, triggerName) {
	            return triggerHandlers[triggerName];
	        }).map(function (func, triggerName) {
	            var trigger = triggerHandlers[triggerName]();
	            var injectedFunc = function injectedFunc(evt) {
	                return func(evt, targetEntityID, entityID);
	            };

	            return _immutable2.default.Map({
	                targetEntityID: targetEntityID,
	                triggerName: triggerName,
	                id: entityID,
	                entity: new _babylonjs.ExecuteCodeAction(trigger, injectedFunc),
	                type: "trigger"
	            });
	        }).forEach(function (triggerObj) {
	            mesh.actionManager.registerAction(triggerObj.get("entity"));
	        });

	        return state;
	    },

	    /**
	    * For now this is just deleting the action manager. In the future this might need
	    * to remove individual triggers from a mesh/scene.
	    */
	    disposeTriggers: function disposeTriggers(state, actions, targetEntityID) {
	        var mesh = state.getIn(["entities", targetEntityID, "entity"]);

	        if (mesh && mesh.actionManager) {
	            mesh.actionManager.dispose();
	        }

	        return state;
	    }
	};

	exports.default = TriggerActions;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(144);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(159);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _promise = __webpack_require__(148);

	var _promise2 = _interopRequireDefault(_promise);

	var _babylonjs = __webpack_require__(122);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _importMesh = function _importMesh(path, fileName, scene) {
	    var progressCallback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];


	    return new _promise2.default(function (resolve, reject) {
	        _babylonjs.SceneLoader.ImportMesh("", path, fileName, scene, resolve, progressCallback, reject);
	    });
	};

	var MeshActions = {
	    importMesh: function importMesh(state, actions, path, fileName, sceneID, entityID) {
	        var _this = this;

	        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	            var scene, meshes;
	            return _regenerator2.default.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            scene = state.getIn(["entities", sceneID, "entity"]);
	                            _context.next = 3;
	                            return _importMesh(path, fileName, scene);

	                        case 3:
	                            meshes = _context.sent;


	                            meshes.forEach(function (mesh) {
	                                var meshObj = _immutable2.default.Map({
	                                    id: entityID,
	                                    entity: mesh,
	                                    type: "mesh"
	                                });

	                                state = state.setIn(["entities", entityID], meshObj);
	                            });

	                            return _context.abrupt("return", state);

	                        case 6:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, _this);
	        }))();
	    }
	};

	exports.default = MeshActions;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(137);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ParticlesActions = {
	    createParticles: function createParticles(state, actions, sceneID, entityID, targetEntityID, img) {
	        var scene = state.getIn(["entities", sceneID, "entity"]);
	        var targetEntity = state.getIn(["entities", targetEntityID, "entity"]);

	        var particles = new _babylonjs2.default.ParticleSystem(entityID, 2000, scene);

	        particles.particleTexture = new _babylonjs2.default.Texture(img, scene);
	        particles.emitter = targetEntity;

	        var particlesObj = _immutable2.default.Map({
	            id: entityID,
	            entity: particles,
	            type: "particles"
	        });

	        return state.setIn(["entities", entityID], particlesObj);
	    }
	};

	exports.default = ParticlesActions;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* A basic class to add actions and appState to the app's context.
	* Might want to make this more generic if the need arises.
	*/

	var PropsToContext = function (_React$Component) {
	    (0, _inherits3.default)(PropsToContext, _React$Component);

	    function PropsToContext() {
	        (0, _classCallCheck3.default)(this, PropsToContext);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PropsToContext).apply(this, arguments));
	    }

	    (0, _createClass3.default)(PropsToContext, [{
	        key: "getChildContext",
	        value: function getChildContext() {
	            var _props = this.props;
	            var actions = _props.actions;
	            var appState = _props.appState;

	            return {
	                actions: actions,
	                appState: appState
	            };
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                this.props.children
	            );
	        }
	    }]);
	    return PropsToContext;
	}(_react2.default.Component);

	PropsToContext.propTypes = {
	    actions: _react.PropTypes.object,
	    appState: _react.PropTypes.object
	};
	PropsToContext.childContextTypes = {
	    actions: _react.PropTypes.object,
	    appState: _react.PropTypes.object
	};
	exports.default = PropsToContext;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BasicAnimation = function (_React$Component) {
	    (0, _inherits3.default)(BasicAnimation, _React$Component);

	    function BasicAnimation() {
	        (0, _classCallCheck3.default)(this, BasicAnimation);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BasicAnimation).apply(this, arguments));
	    }

	    (0, _createClass3.default)(BasicAnimation, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var _props = this.props;
	            var keyFrames = _props.keyFrames;
	            var children = _props.children;
	            var _props$startFrame = _props.startFrame;
	            var startFrame = _props$startFrame === undefined ? 0 : _props$startFrame;
	            var _props$endFrame = _props.endFrame;
	            var endFrame = _props$endFrame === undefined ? 100 : _props$endFrame;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderAnimation, this.props),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    _react2.default.createElement(_systems.AnimateMesh, {
	                        targetEntityID: entityID,
	                        keyFrames: keyFrames,
	                        startFrame: startFrame,
	                        endFrame: endFrame
	                    }),
	                    children
	                )
	            );
	        }
	    }]);
	    return BasicAnimation;
	}(_react2.default.Component);

	BasicAnimation.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	BasicAnimation.propTypes = {
	    meshProperty: _react.PropTypes.string.isRequired,
	    valueType: _react.PropTypes.string.isRequired,
	    loopMode: _react.PropTypes.string.isRequired,
	    keyFrames: _react.PropTypes.array,
	    startFrame: _react.PropTypes.number,
	    endFrame: _react.PropTypes.number
	};
	exports.default = BasicAnimation;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Particles = function (_React$Component) {
	    (0, _inherits3.default)(Particles, _React$Component);

	    function Particles() {
	        (0, _classCallCheck3.default)(this, Particles);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Particles).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Particles, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var _props = this.props;
	            var img = _props.img;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderParticles, {
	                    targetEntityID: entityID,
	                    img: img
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    _react2.default.createElement(_systems.CallMethodOnEntity, {
	                        methodName: "start"
	                    }),
	                    children
	                )
	            );
	        }
	    }]);
	    return Particles;
	}(_react2.default.Component);

	Particles.contextTypes = {
	    entityID: _react.PropTypes.string,
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Particles.propTypes = {
	    img: _react.PropTypes.string
	};
	exports.default = Particles;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HemisphericLight = __webpack_require__(173);

	var _HemisphericLight2 = _interopRequireDefault(_HemisphericLight);

	var _PointLight = __webpack_require__(174);

	var _PointLight2 = _interopRequireDefault(_PointLight);

	var _SpotLight = __webpack_require__(175);

	var _SpotLight2 = _interopRequireDefault(_SpotLight);

	var _DirectionalLight = __webpack_require__(176);

	var _DirectionalLight2 = _interopRequireDefault(_DirectionalLight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    HemisphericLight: _HemisphericLight2.default,
	    PointLight: _PointLight2.default,
	    SpotLight: _SpotLight2.default,
	    DirectionalLight: _DirectionalLight2.default
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DirectionalLight = function (_React$Component) {
	    (0, _inherits3.default)(DirectionalLight, _React$Component);

	    function DirectionalLight() {
	        (0, _classCallCheck3.default)(this, DirectionalLight);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DirectionalLight).apply(this, arguments));
	    }

	    (0, _createClass3.default)(DirectionalLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;


	            var renderDiffuse = diffuse && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(diffuse))))()
	            });

	            var renderSpecular = specular && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(specular))))()
	            });

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderLight, (0, _extends3.default)({
	                    type: "hemispheric"
	                }, this.props)),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }]);
	    return DirectionalLight;
	}(_react2.default.Component);

	DirectionalLight.propTypes = {
	    source: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	exports.default = DirectionalLight;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PointLight = function (_React$Component) {
	    (0, _inherits3.default)(PointLight, _React$Component);

	    function PointLight() {
	        (0, _classCallCheck3.default)(this, PointLight);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PointLight).apply(this, arguments));
	    }

	    (0, _createClass3.default)(PointLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;


	            var renderDiffuse = diffuse && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(diffuse))))()
	            });

	            var renderSpecular = specular && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(specular))))()
	            });

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderLight, {
	                    type: "point"
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }]);
	    return PointLight;
	}(_react2.default.Component);

	PointLight.propTypes = {
	    diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	exports.default = PointLight;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SpotLight = function (_React$Component) {
	    (0, _inherits3.default)(SpotLight, _React$Component);

	    function SpotLight() {
	        (0, _classCallCheck3.default)(this, SpotLight);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SpotLight).apply(this, arguments));
	    }

	    (0, _createClass3.default)(SpotLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;


	            var renderDiffuse = diffuse && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(diffuse))))()
	            });

	            var renderSpecular = specular && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(specular))))()
	            });

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderLight, (0, _extends3.default)({
	                    type: "spot"
	                }, this.props)),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }]);
	    return SpotLight;
	}(_react2.default.Component);

	SpotLight.propTypes = {
	    position: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    direction: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    angle: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    exponent: _react.PropTypes.number,
	    diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	exports.default = SpotLight;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(2);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(113);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(122);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DirectionalLight = function (_React$Component) {
	    (0, _inherits3.default)(DirectionalLight, _React$Component);

	    function DirectionalLight() {
	        (0, _classCallCheck3.default)(this, DirectionalLight);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DirectionalLight).apply(this, arguments));
	    }

	    (0, _createClass3.default)(DirectionalLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;


	            var renderDiffuse = diffuse && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(diffuse))))()
	            });

	            var renderSpecular = specular && _react2.default.createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (Function.prototype.bind.apply(_babylonjs2.default.Color3, [null].concat((0, _toConsumableArray3.default)(specular))))()
	            });

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderLight, (0, _extends3.default)({
	                    type: "directional"
	                }, this.props)),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }]);
	    return DirectionalLight;
	}(_react2.default.Component);

	DirectionalLight.propTypes = {
	    direction: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	    specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	exports.default = DirectionalLight;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FreeCamera = __webpack_require__(178);

	var _FreeCamera2 = _interopRequireDefault(_FreeCamera);

	var _ArcRotateCamera = __webpack_require__(179);

	var _ArcRotateCamera2 = _interopRequireDefault(_ArcRotateCamera);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    FreeCamera: _FreeCamera2.default,
	    ArcRotateCamera: _ArcRotateCamera2.default
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent = __webpack_require__(99);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	var _systems = __webpack_require__(97);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PropTypes = _react2.default.PropTypes;

	var FreeCamera = function (_AkkadAbstractCompone) {
	    (0, _inherits3.default)(FreeCamera, _AkkadAbstractCompone);

	    function FreeCamera() {
	        (0, _classCallCheck3.default)(this, FreeCamera);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FreeCamera).apply(this, arguments));
	    }

	    (0, _createClass3.default)(FreeCamera, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var target = _props.target;
	            var initialPosition = _props.initialPosition;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderCamera, {
	                    type: "free",
	                    target: target,
	                    initialPosition: initialPosition
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return FreeCamera;
	}(_AkkadAbstractComponent2.default);

	FreeCamera.propTypes = {
	    initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
	    target: PropTypes.arrayOf(PropTypes.number).isRequired
	};
	FreeCamera.contextTypes = {
	    appState: PropTypes.object,
	    actions: PropTypes.object
	};
	exports.default = FreeCamera;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _systems = __webpack_require__(97);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArcRotateCamera = function (_React$Component) {
	    (0, _inherits3.default)(ArcRotateCamera, _React$Component);

	    function ArcRotateCamera() {
	        (0, _classCallCheck3.default)(this, ArcRotateCamera);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ArcRotateCamera).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ArcRotateCamera, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var target = _props.target;
	            var initialPosition = _props.initialPosition;

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderCamera, {
	                    type: "arcRotate",
	                    target: target,
	                    initialPosition: initialPosition
	                })
	            );
	        }
	    }]);
	    return ArcRotateCamera;
	}(_react2.default.Component);

	ArcRotateCamera.propTypes = {
	    target: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	    initialPosition: _react.PropTypes.arrayOf(_react.PropTypes.number)
	};
	ArcRotateCamera.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	exports.default = ArcRotateCamera;

/***/ },
/* 180 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Sphere = __webpack_require__(182);

	var _Sphere2 = _interopRequireDefault(_Sphere);

	var _Box = __webpack_require__(183);

	var _Box2 = _interopRequireDefault(_Box);

	var _Disc = __webpack_require__(184);

	var _Disc2 = _interopRequireDefault(_Disc);

	var _Ground = __webpack_require__(185);

	var _Ground2 = _interopRequireDefault(_Ground);

	var _GroundFromHeightMap = __webpack_require__(186);

	var _GroundFromHeightMap2 = _interopRequireDefault(_GroundFromHeightMap);

	var _Cylinder = __webpack_require__(187);

	var _Cylinder2 = _interopRequireDefault(_Cylinder);

	var _Torus = __webpack_require__(188);

	var _Torus2 = _interopRequireDefault(_Torus);

	var _Lines = __webpack_require__(189);

	var _Lines2 = _interopRequireDefault(_Lines);

	var _DashedLines = __webpack_require__(190);

	var _DashedLines2 = _interopRequireDefault(_DashedLines);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    Sphere: _Sphere2.default,
	    Box: _Box2.default,
	    Disc: _Disc2.default,
	    Ground: _Ground2.default,
	    GroundFromHeightMap: _GroundFromHeightMap2.default,
	    Cylinder: _Cylinder2.default,
	    Torus: _Torus2.default,
	    Lines: _Lines2.default,
	    DashedLines: _DashedLines2.default
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sphere = function (_React$Component) {
	    (0, _inherits3.default)(Sphere, _React$Component);

	    function Sphere() {
	        (0, _classCallCheck3.default)(this, Sphere);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sphere).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Sphere, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var segments = _props.segments;
	            var _props$diameter = _props.diameter;
	            var diameter = _props$diameter === undefined ? 2 : _props$diameter;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "sphere",
	                    segments: segments,
	                    diameter: diameter
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Sphere;
	}(_react2.default.Component);

	Sphere.propTypes = {
	    segments: _react.PropTypes.number,
	    diameterX: _react.PropTypes.number,
	    diameterY: _react.PropTypes.number,
	    diameterZ: _react.PropTypes.number
	};
	exports.default = Sphere;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Box = function (_React$Component) {
	    (0, _inherits3.default)(Box, _React$Component);

	    function Box() {
	        (0, _classCallCheck3.default)(this, Box);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Box).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Box, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$size = _props.size;
	            var size = _props$size === undefined ? 1 : _props$size;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "box",
	                    size: size
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Box;
	}(_react2.default.Component);

	Box.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Box.propTypes = {
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.number
	};
	exports.default = Box;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Disc = function (_React$Component) {
	    (0, _inherits3.default)(Disc, _React$Component);

	    function Disc() {
	        (0, _classCallCheck3.default)(this, Disc);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Disc).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Disc, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$radius = _props.radius;
	            var radius = _props$radius === undefined ? 10 : _props$radius;
	            var _props$tessellation = _props.tessellation;
	            var tessellation = _props$tessellation === undefined ? 0 : _props$tessellation;
	            var _props$sideOrientatio = _props.sideOrientation;
	            var sideOrientation = _props$sideOrientatio === undefined ? null : _props$sideOrientatio;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "disc",
	                    radius: radius,
	                    tessellation: tessellation,
	                    sideOrientation: sideOrientation
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Disc;
	}(_react2.default.Component);

	Disc.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Disc.propTypes = {
	    radius: _react.PropTypes.number,
	    tessellation: _react.PropTypes.number,
	    sideOrientation: _react.PropTypes.number
	};
	exports.default = Disc;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Ground = function (_React$Component) {
	    (0, _inherits3.default)(Ground, _React$Component);

	    function Ground() {
	        (0, _classCallCheck3.default)(this, Ground);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Ground).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Ground, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$height = _props.height;
	            var height = _props$height === undefined ? 6 : _props$height;
	            var _props$width = _props.width;
	            var width = _props$width === undefined ? 6 : _props$width;
	            var _props$subdivisions = _props.subdivisions;
	            var subdivisions = _props$subdivisions === undefined ? 2 : _props$subdivisions;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "ground",
	                    width: width,
	                    height: height,
	                    subdivisions: subdivisions
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Ground;
	}(_react2.default.Component);

	Ground.propTypes = {
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.number
	};
	exports.default = Ground;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Ground = function (_React$Component) {
	    (0, _inherits3.default)(Ground, _React$Component);

	    function Ground() {
	        (0, _classCallCheck3.default)(this, Ground);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Ground).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Ground, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var meshHeight = _props.meshHeight;
	            var meshWidth = _props.meshWidth;
	            var heightMap = _props.heightMap;
	            var subdivisions = _props.subdivisions;
	            var minHeight = _props.minHeight;
	            var maxHeight = _props.maxHeight;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "groundFromHeightMap",
	                    meshHeight: meshHeight,
	                    meshWidth: meshWidth,
	                    subdivisions: subdivisions,
	                    minHeight: minHeight,
	                    maxHeight: maxHeight,
	                    heightMap: heightMap
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Ground;
	}(_react2.default.Component);

	Ground.propTypes = {
	    meshHeight: _react.PropTypes.number,
	    meshWidth: _react.PropTypes.number,
	    heightMap: _react.PropTypes.string,
	    subdivisions: _react.PropTypes.number,
	    minHeight: _react.PropTypes.number,
	    maxHeight: _react.PropTypes.number
	};
	exports.default = Ground;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cylinder = function (_React$Component) {
	    (0, _inherits3.default)(Cylinder, _React$Component);

	    function Cylinder() {
	        (0, _classCallCheck3.default)(this, Cylinder);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Cylinder).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Cylinder, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var height = _props.height;
	            var diameterTop = _props.diameterTop;
	            var diameterBottom = _props.diameterBottom;
	            var tessellation = _props.tessellation;
	            var subdivisions = _props.subdivisions;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "cylinder",
	                    heigh: height,
	                    diameterTop: diameterTop,
	                    diameterBottom: diameterBottom,
	                    tessellation: tessellation,
	                    subdivisions: subdivisions
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Cylinder;
	}(_react2.default.Component);

	Cylinder.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Cylinder.propTypes = {
	    height: _react.PropTypes.number,
	    diameterTop: _react.PropTypes.number,
	    diameterBottom: _react.PropTypes.number,
	    tessellation: _react.PropTypes.number,
	    subdivisions: _react.PropTypes.any
	};
	exports.default = Cylinder;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Torus = function (_React$Component) {
	    (0, _inherits3.default)(Torus, _React$Component);

	    function Torus() {
	        (0, _classCallCheck3.default)(this, Torus);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Torus).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Torus, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diameter = _props.diameter;
	            var thickness = _props.thickness;
	            var tessellation = _props.tessellation;
	            var updatable = _props.updatable;
	            var sideOrientation = _props.sideOrientation;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "torus",
	                    diameter: diameter,
	                    thickness: thickness,
	                    tessellation: tessellation,
	                    updatable: updatable,
	                    sideOrientation: sideOrientation
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Torus;
	}(_react2.default.Component);

	Torus.contextTypes = {
	    appState: _react.PropTypes.object,
	    actions: _react.PropTypes.object
	};
	Torus.propTypes = {
	    diameter: _react.PropTypes.number,
	    thickness: _react.PropTypes.number,
	    tessellation: _react.PropTypes.number,
	    updatable: _react.PropTypes.bool,
	    sideOrientation: _react.PropTypes.number
	};
	exports.default = Torus;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lines = function (_React$Component) {
	    (0, _inherits3.default)(Lines, _React$Component);

	    function Lines() {
	        (0, _classCallCheck3.default)(this, Lines);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Lines).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Lines, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$vectors = _props.vectors;
	            var vectors = _props$vectors === undefined ? [] : _props$vectors;
	            var children = _props.children;

	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "lines",
	                    vectors: vectors
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return Lines;
	}(_react2.default.Component);

	Lines.propTypes = {
	    vectors: _react.PropTypes.arrayOf(_react.PropTypes.array)
	};
	exports.default = Lines;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(46);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(50);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(51);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(55);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(107);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(108);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DashedLines = function (_React$Component) {
	    (0, _inherits3.default)(DashedLines, _React$Component);

	    function DashedLines() {
	        (0, _classCallCheck3.default)(this, DashedLines);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DashedLines).apply(this, arguments));
	    }

	    (0, _createClass3.default)(DashedLines, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$vectors = _props.vectors;
	            var vectors = _props$vectors === undefined ? [] : _props$vectors;
	            var _props$dashSize = _props.dashSize;
	            var dashSize = _props$dashSize === undefined ? null : _props$dashSize;
	            var _props$gapSize = _props.gapSize;
	            var gapSize = _props$gapSize === undefined ? null : _props$gapSize;
	            var _props$dashNumber = _props.dashNumber;
	            var dashNumber = _props$dashNumber === undefined ? null : _props$dashNumber;
	            var children = _props.children;


	            return _react2.default.createElement(
	                _Entity2.default,
	                null,
	                _react2.default.createElement(_systems.RenderShape, {
	                    type: "dashedLines",
	                    vectors: vectors,
	                    dashSize: dashSize,
	                    gapSize: gapSize,
	                    dashNumber: dashNumber
	                }),
	                _react2.default.createElement(
	                    _EntityLoaded2.default,
	                    null,
	                    children
	                )
	            );
	        }
	    }]);
	    return DashedLines;
	}(_react2.default.Component);

	DashedLines.propTypes = {
	    vectors: _react.PropTypes.arrayOf(_react.PropTypes.array),
	    dashSize: _react.PropTypes.number,
	    gapSize: _react.PropTypes.number,
	    dashNumber: _react.PropTypes.number
	};
	exports.default = DashedLines;

/***/ }
/******/ ])
});
;