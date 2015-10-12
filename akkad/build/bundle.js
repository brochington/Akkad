(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("react-dom"), require("immutable"), require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactMultiChild", "react/lib/ReactUpdates", "react-dom", "immutable", "babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["akkad"] = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("react-dom"), require("immutable"), require("babylonjs"));
	else
		root["akkad"] = factory(root["react"], root["react/lib/ReactMultiChild"], root["react/lib/ReactUpdates"], root["react-dom"], root["immutable"], root["babylonjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_50__) {
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

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _components = __webpack_require__(19);

	var _components2 = _interopRequireDefault(_components);

	var _componentsSystems = __webpack_require__(95);

	var _componentsSystems2 = _interopRequireDefault(_componentsSystems);

	var _componentsLights = __webpack_require__(106);

	var _componentsLights2 = _interopRequireDefault(_componentsLights);

	var _componentsCameras = __webpack_require__(108);

	var _componentsCameras2 = _interopRequireDefault(_componentsCameras);

	var _componentsMeshes = __webpack_require__(110);

	var _componentsMeshes2 = _interopRequireDefault(_componentsMeshes);

	var _componentsShapes = __webpack_require__(111);

	var _componentsShapes2 = _interopRequireDefault(_componentsShapes);

	exports["default"] = _extends({}, _components2["default"], {
		systems: _componentsSystems2["default"],
		lights: _componentsLights2["default"],
		cameras: _componentsCameras2["default"],
		meshes: _componentsMeshes2["default"],
		shapes: _componentsShapes2["default"]
	});
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(3)["default"];

	exports["default"] = _Object$assign || function (target) {
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

	exports.__esModule = true;

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
	var $def = __webpack_require__(6);

	$def($def.S + $def.F, 'Object', {assign: __webpack_require__(9)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(10)
	  , IObject  = __webpack_require__(12)
	  , enumKeys = __webpack_require__(14)
	  , has      = __webpack_require__(16);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){   // eslint-disable-line no-unused-vars
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(has(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(13);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(15);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

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
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Engine = __webpack_require__(20);

	var _Engine2 = _interopRequireDefault(_Engine);

	var _Scene = __webpack_require__(102);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Material = __webpack_require__(117);

	var _Material2 = _interopRequireDefault(_Material);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _Akkad = __webpack_require__(104);

	var _Akkad2 = _interopRequireDefault(_Akkad);

	exports["default"] = {
	    Engine: _Engine2["default"],
	    Scene: _Scene2["default"],
	    Material: _Material2["default"],
	    Entity: _Entity2["default"],
	    Akkad: _Akkad2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _Object$keys = __webpack_require__(42)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibReactMultiChild = __webpack_require__(46);

	var _reactLibReactMultiChild2 = _interopRequireDefault(_reactLibReactMultiChild);

	var _reactLibReactUpdates = __webpack_require__(47);

	var _reactDom = __webpack_require__(48);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _actions2 = __webpack_require__(51);

	var _actions3 = _interopRequireDefault(_actions2);

	var _systems = __webpack_require__(95);

	var _systems2 = _interopRequireDefault(_systems);

	var Engine = (function (_React$Component) {
	    _inherits(Engine, _React$Component);

	    function Engine() {
	        var _this = this;

	        _classCallCheck(this, Engine);

	        _get(Object.getPrototypeOf(Engine.prototype), "constructor", this).call(this);

	        /* Poor man's way to do a mixin with a class */
	        this._rootNodeID = "";
	        _Object$keys(_reactLibReactMultiChild2["default"].Mixin).map(function (method) {
	            return _this[method] = _reactLibReactMultiChild2["default"].Mixin[method];
	        });
	    }

	    _createClass(Engine, [{
	        key: "_performTransaction",
	        value: function _performTransaction(func, scope, children, context) {
	            var transaction = _reactLibReactUpdates.ReactReconcileTransaction.getPooled();
	            transaction.perform(func, scope, children, transaction, context);
	            _reactLibReactUpdates.ReactReconcileTransaction.release(transaction);
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
	            var mountedImages = this.mountChildren.apply(this, arguments);
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
	        value: function componentWillUpdate(nextProps) {
	            this.updateAppChildren(nextProps);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var actions = _props.actions;
	            var appState = _props.appState;
	            var setEngine = actions._internal.setEngine;

	            setEngine();

	            this.mountAppChildren({
	                actions: actions,
	                appState: appState,
	                systems: _systems2["default"]
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
	            return _react2["default"].createElement("div", null);
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            actions: _react.PropTypes.object,
	            appState: _react.PropTypes.object
	        },

	        /* Need to define the root node so that you don't get undefined.0 */
	        enumerable: true
	    }]);

	    return Engine;
	})(_react2["default"].Component);

	exports["default"] = Engine;
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(22)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	__webpack_require__(24);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);

	__webpack_require__(26)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(12)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(6)
	    , fn   = (__webpack_require__(8).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(17)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(28)["default"];

	var _Object$setPrototypeOf = __webpack_require__(30)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(6);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(33).set});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(15).getDesc
	  , isObject = __webpack_require__(34)
	  , anObject = __webpack_require__(35);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(36)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(37);
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
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(39)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

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
	var toObject = __webpack_require__(10);

	__webpack_require__(26)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _appActions = __webpack_require__(52);

	var _appActions2 = _interopRequireDefault(_appActions);

	var _CameraActions = __webpack_require__(53);

	var _CameraActions2 = _interopRequireDefault(_CameraActions);

	var _LightActions = __webpack_require__(54);

	var _LightActions2 = _interopRequireDefault(_LightActions);

	var _MeshActions = __webpack_require__(91);

	var _MeshActions2 = _interopRequireDefault(_MeshActions);

	var _SceneActions = __webpack_require__(92);

	var _SceneActions2 = _interopRequireDefault(_SceneActions);

	var _ShapeActions = __webpack_require__(93);

	var _ShapeActions2 = _interopRequireDefault(_ShapeActions);

	var _MeshTriggerActions = __webpack_require__(94);

	var _MeshTriggerActions2 = _interopRequireDefault(_MeshTriggerActions);

	var _MaterialActions = __webpack_require__(119);

	var _MaterialActions2 = _interopRequireDefault(_MaterialActions);

	exports["default"] = _extends({}, _appActions2["default"], _CameraActions2["default"], _LightActions2["default"], _MeshActions2["default"], _SceneActions2["default"], _ShapeActions2["default"], _MeshTriggerActions2["default"], _MaterialActions2["default"]);
	module.exports = exports["default"];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	exports["default"] = {
	    setCanvas: function setCanvas(state, actions, canvas) {
	        return state.set("canvas", canvas);
	    },

	    setEngine: function setEngine(state, actions) {
	        var canvas = state.get("canvas");

	        return state.set("engine", new _babylonjs2["default"].Engine(canvas, true));
	    },

	    setCamera: function setCamera(state, actions, config) {
	        var name = config.name;

	        var scene = state.get("scene");

	        var camera = new _babylonjs2["default"].FreeCamera(name, new _babylonjs2["default"].Vector3(0, 5, -10), scene);

	        return state.set("camera", camera);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(57)["default"];

	var _bind = __webpack_require__(82)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var cameraCreators = {
	    free: function free(entityID, config, scene) {
	        var initialPosition = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(config.initialPosition))))();

	        var camera = new _babylonjs2["default"].FreeCamera(entityID, initialPosition, scene);

	        if (config.target) {
	            var target = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(config.target))))();
	            camera.setTarget(target);
	        }

	        return camera;
	    },
	    arcRotate: function arcRotate(entityID, config, scene) {
	        var type = config.type;
	        var _config$alpha = config.alpha;
	        var alpha = _config$alpha === undefined ? 1 : _config$alpha;
	        var _config$beta = config.beta;
	        var beta = _config$beta === undefined ? 1 : _config$beta;
	        var _config$radius = config.radius;
	        var radius = _config$radius === undefined ? 10 : _config$radius;

	        var target = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(config.target))))();

	        return new _babylonjs2["default"].ArcRotateCamera(entityID, alpha, beta, radius, target, scene);
	    }
	};

	exports["default"] = {
	    setCamera: function setCamera(state, actions, entityID, config) {
	        var canvas = state.get("canvas");
	        var scene = state.get("scene");

	        var camera = cameraCreators[config.type](entityID, config, scene);

	        camera.attachControl(canvas, false);

	        return state.set("camera", camera);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _classes = __webpack_require__(55);

	var lightCreators = {
	    hemispheric: function hemispheric(scene, entityID, props) {
	        return new _babylonjs2["default"].HemisphericLight(entityID, new _babylonjs2["default"].Vector3(0, 1, 0), scene);
	    }
	};

	exports["default"] = {
	    createLight: function createLight(state, actions, entityID, props) {
	        var type = props.type;

	        if (type && lightCreators[type] && !state.hasIn(["lights", entityID])) {
	            var scene = state.get("scene");
	            var light = lightCreators[type](scene, entityID, props);
	            var updateLight = actions._internal.updateLight;

	            state = updateLight({
	                id: entityID,
	                light: light
	            });
	        }

	        return state;
	    },

	    updateLight: function updateLight(state, actions, lightObj) {
	        return state.updateIn(["lights", lightObj.id], function (light) {
	            return lightObj;
	        });
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _MeshManager = __webpack_require__(56);

	var _MeshManager2 = _interopRequireDefault(_MeshManager);

	var _StateManager = __webpack_require__(83);

	var _StateManager2 = _interopRequireDefault(_StateManager);

	var _Helpers = __webpack_require__(90);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	exports["default"] = {
		MeshManager: _MeshManager2["default"],
		StateManager: _StateManager2["default"],
		Helpers: _Helpers2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(57)["default"];

	var _bind = __webpack_require__(82)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var propHandlers = {
	    position: function position(mesh, vector) {
	        mesh.position = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	    },

	    rotation: function rotation(mesh, vector) {
	        mesh.rotation = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	    },

	    rotationQuaternion: function rotationQuaternion(mesh, quaternion) {
	        var _newBabylon;

	        mesh.rotationQuaternion = (_newBabylon = newBabylon).Quaternion.apply(_newBabylon, _toConsumableArray(quaternion));
	    },

	    scaling: function scaling(mesh, vector) {
	        mesh.scaling = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	    },

	    visibility: function visibility(mesh, _visibility) {
	        mesh.visibility = _visibility;
	    },

	    isVisible: function isVisible(mesh, _isVisible) {
	        mesh.isVisible = _isVisible;
	    },

	    outlineColor: function outlineColor(mesh, color) {
	        mesh.outlineColor = new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(color))))();
	    }
	};

	var MeshManager = (function () {
	    function MeshManager() {
	        _classCallCheck(this, MeshManager);
	    }

	    _createClass(MeshManager, [{
	        key: "updateMeshFromProps",
	        value: function updateMeshFromProps(mesh, props) {
	            _immutable2["default"].Map(props).filter(function (val, name) {
	                return !!propHandlers[name];
	            }).forEach(function (val, name) {
	                return propHandlers[name](mesh, val);
	            });
	        }
	    }]);

	    return MeshManager;
	})();

	exports["default"] = MeshManager;
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(58)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(75);
	module.exports = __webpack_require__(8).Array.from;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(61)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(63)(String, 'String', function(iterated){
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(62)
	  , defined   = __webpack_require__(11);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(64)
	  , $def            = __webpack_require__(6)
	  , $redef          = __webpack_require__(65)
	  , hide            = __webpack_require__(66)
	  , has             = __webpack_require__(16)
	  , SYMBOL_ITERATOR = __webpack_require__(69)('iterator')
	  , Iterators       = __webpack_require__(72)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(73)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(15).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(74)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(66);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , createDesc = __webpack_require__(67);
	module.exports = __webpack_require__(68) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(70)('wks')
	  , Symbol = __webpack_require__(7).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(71))('Symbol.' + name));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(15)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(66)(IteratorPrototype, __webpack_require__(69)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(67)(1,next)});
	  __webpack_require__(74)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(16)
	  , hide = __webpack_require__(66)
	  , TAG  = __webpack_require__(69)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(36)
	  , $def        = __webpack_require__(6)
	  , toObject    = __webpack_require__(10)
	  , call        = __webpack_require__(76)
	  , isArrayIter = __webpack_require__(77)
	  , toLength    = __webpack_require__(78)
	  , getIterFn   = __webpack_require__(79);
	$def($def.S + $def.F * !__webpack_require__(81)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(35);
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(72)
	  , ITERATOR  = __webpack_require__(69)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(62)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(80)
	  , ITERATOR  = __webpack_require__(69)('iterator')
	  , Iterators = __webpack_require__(72);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(13)
	  , TAG = __webpack_require__(69)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(69)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = Function.prototype.bind;
	exports.__esModule = true;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _Symbol = __webpack_require__(84)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _state = _Symbol("state");
	var _actions = _Symbol("actions");
	var _wrappedActions = _Symbol("wrappedActions");
	var _stateSetCallback = _Symbol("stateSetCallback");
	var _hasBeenInitialized = _Symbol("hasBeenInitialized");

	var StateManager = (function () {
	    function StateManager() {
	        _classCallCheck(this, StateManager);
	    }

	    _createClass(StateManager, [{
	        key: "init",
	        value: function init(actions, initFunc, stateSetCallback) {
	            try {
	                if (!this[_hasBeenInitialized]) {
	                    this[_hasBeenInitialized] = true;

	                    /* wrap actions */
	                    var wrappedActions = _immutable2["default"].Map(actions).reduce(this.wrapActions.bind(this), {});
	                    /* wrap internal actions */
	                    var wrappedInternalActions = _immutable2["default"].Map(actions._internal).reduce(this.wrapActions.bind(this), {});

	                    this[_wrappedActions] = _extends({}, wrappedActions, {
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

	            if (newState) {
	                if (newState !== this[_state]) {
	                    this[_state] = newState;
	                }
	                // call the callback specified in the init method.
	                this[_stateSetCallback](this[_state], this[_wrappedActions]);
	            }

	            return this[_state];
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
	})();

	exports["default"] = StateManager;
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(15)
	  , global         = __webpack_require__(7)
	  , has            = __webpack_require__(16)
	  , SUPPORT_DESC   = __webpack_require__(68)
	  , $def           = __webpack_require__(6)
	  , $redef         = __webpack_require__(65)
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(70)
	  , setTag         = __webpack_require__(74)
	  , uid            = __webpack_require__(71)
	  , wks            = __webpack_require__(69)
	  , keyOf          = __webpack_require__(87)
	  , $names         = __webpack_require__(88)
	  , enumKeys       = __webpack_require__(14)
	  , isArray        = __webpack_require__(89)
	  , isObject       = __webpack_require__(34)
	  , anObject       = __webpack_require__(35)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(67)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = SUPPORT_DESC && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
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
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
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
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(SUPPORT_DESC && !__webpack_require__(64)){
	    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
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
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
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
	$JSON && $def($def.S + $def.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(15)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(15).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(13);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(57)["default"];

	var _bind = __webpack_require__(82)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var shapePropTransforms = {
	    faceColors: function faceColors(color4Array) {
	        return new (_bind.apply(_babylonjs2["default"].Color4, [null].concat(_toConsumableArray(color4Array))))();
	    },
	    faceUV: function faceUV(vector4Array) {
	        return new (_bind.apply(_babylonjs2["default"].Vector4, [null].concat(_toConsumableArray(vector4Array))))();
	    },
	    axis: function axis(vector3Array) {
	        return new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector3Array))))();
	    },
	    space: function space(spaceType) {
	        return _babylonjs2["default"].Space[spaceType];
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

	exports["default"] = {
	    convertShapeProps: convertShapeProps
	};
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	exports["default"] = {
	    setScene: function setScene(state, actions) {
	        var engine = state.get("engine");

	        return state.set("scene", new _babylonjs2["default"].Scene(engine));
	    },

	    disposeScene: function disposeScene(state, actions) {
	        var scene = state.get("scene");

	        scene.dispose();

	        state = state["delete"]("scene");

	        return state;
	    },

	    startRenderLoop: function startRenderLoop(state, actions) {
	        var engine = state.get("engine");
	        var scene = state.get("scene");

	        engine.runRenderLoop(function () {
	            scene.render();
	        });

	        return state;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _classes = __webpack_require__(55);

	var shapeCreators = {
	    box: function box(scene, entityID, props) {
	        var options = _classes.Helpers.convertShapeProps(props);

	        return new _babylonjs2["default"].Mesh.CreateBox(entityID, options, scene);
	    },
	    sphere: function sphere(scene, entityID, props) {
	        var options = _classes.Helpers.convertShapeProps(props);

	        return new _babylonjs2["default"].Mesh.CreateSphere(entityID, options, scene);
	    },
	    ground: function ground(scene, entityID, props) {
	        var options = _classes.Helpers.convertShapeProps(props);

	        return new _babylonjs2["default"].Mesh.CreateGround(entityID, options, scene);
	    }
	};

	var ShapeActions = {
	    createShape: function createShape(state, actions, entityID, props) {
	        var type = props.type;

	        if (type && shapeCreators[type]) {
	            var scene = state.get("scene");
	            var shape = shapeCreators[type](scene, entityID, props);

	            var meshObj = _immutable2["default"].Map({
	                id: entityID,
	                mesh: shape
	            });

	            state = state.setIn(["meshes", entityID], meshObj);
	        }
	        return state;
	    }
	};

	exports["default"] = ShapeActions;
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var MeshTriggerActions = {
	    createMeshTriggers: function createMeshTriggers(state, actions, entityID, triggers) {
	        var mesh = state.getIn(["meshes", entityID, "mesh"]);

	        if (!mesh.actionManager) {
	            var scene = state.get("scene");
	            mesh.actionManager = new _babylonjs.ActionManager(scene);
	        }

	        state = state.updateIn(["meshes", entityID], function (meshObj) {
	            return meshObj.set("triggers", triggers);
	        });

	        return state;
	    },
	    updateMeshTriggers: function updateMeshTriggers(state, actions, entityID, updatedTriggers) {
	        return state.setIn(["meshes", entityID, "triggers"], updatedTriggers);
	    }
	};

	exports["default"] = MeshTriggerActions;
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _PositionMesh = __webpack_require__(96);

	var _PositionMesh2 = _interopRequireDefault(_PositionMesh);

	var _RotateMesh = __webpack_require__(98);

	var _RotateMesh2 = _interopRequireDefault(_RotateMesh);

	var _RenderShape = __webpack_require__(99);

	var _RenderShape2 = _interopRequireDefault(_RenderShape);

	var _RenderLight = __webpack_require__(100);

	var _RenderLight2 = _interopRequireDefault(_RenderLight);

	var _MeshTrigger = __webpack_require__(101);

	var _MeshTrigger2 = _interopRequireDefault(_MeshTrigger);

	var _RenderCamera = __webpack_require__(116);

	var _RenderCamera2 = _interopRequireDefault(_RenderCamera);

	var _RenderMaterial = __webpack_require__(118);

	var _RenderMaterial2 = _interopRequireDefault(_RenderMaterial);

	exports["default"] = {
		MeshTrigger: _MeshTrigger2["default"],
		PositionMesh: _PositionMesh2["default"],
		RotateMesh: _RotateMesh2["default"],
		RenderShape: _RenderShape2["default"],
		RenderLight: _RenderLight2["default"],
		RenderCamera: _RenderCamera2["default"],
		RenderMaterial: _RenderMaterial2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _classes = __webpack_require__(55);

	var PositionMesh = (function (_AkkadAbstractComponent) {
	    _inherits(PositionMesh, _AkkadAbstractComponent);

	    function PositionMesh() {
	        _classCallCheck(this, PositionMesh);

	        _get(Object.getPrototypeOf(PositionMesh.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(PositionMesh, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;

	            return appState.hasIn(["meshes", entityID]);
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;

	            var mesh = appState.getIn(["meshes", entityID, "mesh"]);

	            var options = _classes.Helpers.convertShapeProps(nextProps);

	            for (var option in options) {
	                if (mesh.position.hasOwnProperty(option) && mesh.position[option] !== options[option]) {
	                    mesh.position[option] = options[option];
	                }
	            }
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            x: _react.PropTypes.number,
	            y: _react.PropTypes.number,
	            z: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return PositionMesh;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = PositionMesh;
	module.exports = exports["default"];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var AkkadAbstractComponent = (function (_React$Component) {
	    _inherits(AkkadAbstractComponent, _React$Component);

	    function AkkadAbstractComponent() {
	        _classCallCheck(this, AkkadAbstractComponent);

	        _get(Object.getPrototypeOf(AkkadAbstractComponent.prototype), "constructor", this).call(this);

	        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
	    }

	    _createClass(AkkadAbstractComponent, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                null,
	                this.props.children
	            );
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return AkkadAbstractComponent;
	})(_react2["default"].Component);

	exports["default"] = AkkadAbstractComponent;
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _classes = __webpack_require__(55);

	var RotateMesh = (function (_AkkadAbstractComponent) {
	    _inherits(RotateMesh, _AkkadAbstractComponent);

	    function RotateMesh() {
	        _classCallCheck(this, RotateMesh);

	        _get(Object.getPrototypeOf(RotateMesh.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RotateMesh, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;

	            return appState.hasIn(["meshes", entityID]);
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;

	            var mesh = appState.getIn(["meshes", entityID, "mesh"]);

	            var options = _classes.Helpers.convertShapeProps(nextProps);
	            var axis = options.axis;
	            var amount = options.amount;
	            var space = options.space;

	            if (axis !== this.props.axis || amount !== this.props.amount || space !== this.props.space) {
	                mesh.rotate(axis, amount, space);
	            }
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            axis: _react.PropTypes.array.isRequired,
	            amount: _react.PropTypes.number.isRequired,
	            space: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return RotateMesh;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RotateMesh;
	module.exports = exports["default"];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderShape = (function (_AkkadAbstractComponent) {
	    _inherits(RenderShape, _AkkadAbstractComponent);

	    function RenderShape() {
	        _classCallCheck(this, RenderShape);

	        _get(Object.getPrototypeOf(RenderShape.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderShape, [{
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
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var actions = _context.actions;
	            var createShape = actions._internal.createShape;

	            createShape(entityID, this.props);
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            actions: _react.PropTypes.object.isRequired,
	            appState: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	    }]);

	    return RenderShape;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderShape;
	module.exports = exports["default"];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderLight = (function (_AkkadAbstractComponent) {
	    _inherits(RenderLight, _AkkadAbstractComponent);

	    function RenderLight() {
	        _classCallCheck(this, RenderLight);

	        _get(Object.getPrototypeOf(RenderLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderLight, [{
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextState, nextProps, nextContext) {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var actions = _context.actions;
	            var createLight = actions._internal.createLight;

	            var props = _extends({}, this.props, nextProps);

	            if (!appState.hasIn(["lights", entityID])) {
	                createLight(entityID, props);
	            }
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            type: _react.PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            actions: _react.PropTypes.object.isRequired,
	            appState: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	    }]);

	    return RenderLight;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderLight;
	module.exports = exports["default"];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _classes = __webpack_require__(55);

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
	        return _babylonjs.ActionManager.OnKeyDown;
	    },
	    onKeyUp: function onKeyUp() {
	        return _babylonjs.ActionManager.OnKeyUp;
	    }
	};

	var MeshTrigger = (function (_AkkadAbstractComponent) {
	    _inherits(MeshTrigger, _AkkadAbstractComponent);

	    function MeshTrigger() {
	        _classCallCheck(this, MeshTrigger);

	        _get(Object.getPrototypeOf(MeshTrigger.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(MeshTrigger, [{
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
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;
	            var actions = nextContext.actions;
	            var _actions$_internal = actions._internal;
	            var createMeshTriggers = _actions$_internal.createMeshTriggers;
	            var updateMeshTriggers = _actions$_internal.updateMeshTriggers;

	            var props = _immutable2["default"].Map(nextProps);

	            if (appState && appState.has("scene") && appState.hasIn(["meshes", entityID])) {
	                var mesh = appState.getIn(["meshes", entityID, "mesh"]);
	                var scene = appState.get("scene");

	                if (appState.hasIn(["meshes", entityID, "triggers"])) {
	                    updateMeshTriggers(entityID, nextProps);
	                } else {
	                    createMeshTriggers(entityID, nextProps);
	                }

	                // const actions = props
	                //                     .filter((func, prop) => triggerHandlers[prop])
	                //                     .reduce((acc, func, prop) => {
	                //                         const trigger = triggerHandlers[prop](appState);
	                //                         return acc.push(new ExecuteCodeAction(trigger, func));
	                //                     }, Immutable.List())
	                //                     .forEach(action => mesh.actionManager.registerAction(action));
	            }
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return MeshTrigger;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = MeshTrigger;
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Scene = (function (_React$Component) {
	    _inherits(Scene, _React$Component);

	    function Scene() {
	        _classCallCheck(this, Scene);

	        _get(Object.getPrototypeOf(Scene.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Scene, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context$actions$_internal = this.context.actions._internal;
	            var setScene = _context$actions$_internal.setScene;
	            var startRenderLoop = _context$actions$_internal.startRenderLoop;

	            setScene();
	            startRenderLoop();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var disposeScene = this.context.actions._internal.disposeScene;

	            disposeScene();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var appState = this.context.appState;

	            return appState.has("scene") ? _react2["default"].createElement(
	                "div",
	                null,
	                this.props.children
	            ) : null;
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            beforeRender: _react.PropTypes.func,
	            backgroundColor: _react.PropTypes.array
	        },
	        enumerable: true
	    }]);

	    return Scene;
	})(_react2["default"].Component);

	exports["default"] = Scene;
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var Entity = (function (_AkkadAbstractComponent) {
	    _inherits(Entity, _AkkadAbstractComponent);

	    function Entity() {
	        _classCallCheck(this, Entity);

	        _get(Object.getPrototypeOf(Entity.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Entity, [{
	        key: "getChildContext",
	        value: function getChildContext() {
	            return {
	                entityID: this.id
	            };
	        }
	    }], [{
	        key: "childContextTypes",
	        value: {
	            entityID: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Entity;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Entity;
	module.exports = exports["default"];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _actions2 = __webpack_require__(51);

	var _actions3 = _interopRequireDefault(_actions2);

	var _systems = __webpack_require__(95);

	var _systems2 = _interopRequireDefault(_systems);

	var _classes = __webpack_require__(55);

	var _Engine = __webpack_require__(20);

	var _Engine2 = _interopRequireDefault(_Engine);

	var stateManager = new _classes.StateManager();

	var initState = {
	    meshes: {},
	    lights: {}
	};

	var Akkad = (function (_React$Component) {
	    _inherits(Akkad, _React$Component);

	    function Akkad() {
	        _classCallCheck(this, Akkad);

	        _get(Object.getPrototypeOf(Akkad.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Akkad, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this = this;

	            var actions = _extends({}, this.props.actions, {
	                _internal: _actions3["default"]
	            });

	            stateManager.init(actions, // actions object
	            function (actions) {
	                return _immutable2["default"].fromJS(initState);
	            }, // init function
	            function (appState, actions) {
	                return _this.setState({ appState: appState, actions: actions });
	            } // called after action is returned.
	            );

	            stateManager.actions._internal.setCanvas(this.props.canvasNode);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var canvasStyles = _props.canvasStyles;
	            var children = _props.children;

	            var canvas = stateManager.appState.get("canvas");

	            var engine = canvas && _react2["default"].createElement(
	                _Engine2["default"],
	                {
	                    appState: stateManager.appState,
	                    actions: stateManager.actions
	                },
	                children
	            );

	            return stateManager.actions && stateManager.appState && _react2["default"].createElement(
	                "div",
	                null,
	                engine
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            canvasStyles: _react.PropTypes.object,
	            canvasNode: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return Akkad;
	})(_react2["default"].Component);

	exports["default"] = Akkad;
	module.exports = exports["default"];

/***/ },
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HemisphericLight = __webpack_require__(107);

	var _HemisphericLight2 = _interopRequireDefault(_HemisphericLight);

	exports["default"] = {
	    HemisphericLight: _HemisphericLight2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _systems = __webpack_require__(95);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var HemisphericLight = (function (_React$Component) {
	    _inherits(HemisphericLight, _React$Component);

	    function HemisphericLight() {
	        _classCallCheck(this, HemisphericLight);

	        _get(Object.getPrototypeOf(HemisphericLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(HemisphericLight, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderLight, {
	                    type: "hemispheric"
	                }),
	                this.props.children
	            );
	        }
	    }]);

	    return HemisphericLight;
	})(_react2["default"].Component);

	exports["default"] = HemisphericLight;
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FreeCamera = __webpack_require__(109);

	var _FreeCamera2 = _interopRequireDefault(_FreeCamera);

	var _ArcRotateCamera = __webpack_require__(115);

	var _ArcRotateCamera2 = _interopRequireDefault(_ArcRotateCamera);

	exports["default"] = {
	    FreeCamera: _FreeCamera2["default"],
	    ArcRotateCamera: _ArcRotateCamera2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _systems = __webpack_require__(95);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var FreeCamera = (function (_AkkadAbstractComponent) {
	    _inherits(FreeCamera, _AkkadAbstractComponent);

	    function FreeCamera() {
	        _classCallCheck(this, FreeCamera);

	        _get(Object.getPrototypeOf(FreeCamera.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(FreeCamera, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var target = _props.target;
	            var initialPosition = _props.initialPosition;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderCamera, {
	                    type: "free",
	                    target: target,
	                    initialPosition: initialPosition
	                })
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            initialPosition: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	            target: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return FreeCamera;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = FreeCamera;
	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Sphere = __webpack_require__(112);

	var _Sphere2 = _interopRequireDefault(_Sphere);

	var _Box = __webpack_require__(113);

	var _Box2 = _interopRequireDefault(_Box);

	var _Ground = __webpack_require__(114);

	var _Ground2 = _interopRequireDefault(_Ground);

	exports["default"] = {
	    Sphere: _Sphere2["default"],
	    Box: _Box2["default"],
	    Ground: _Ground2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _systems = __webpack_require__(95);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Sphere = (function (_React$Component) {
	    _inherits(Sphere, _React$Component);

	    function Sphere() {
	        _classCallCheck(this, Sphere);

	        _get(Object.getPrototypeOf(Sphere.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Sphere, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var segments = _props.segments;
	            var diameterX = _props.diameterX;
	            var diameterY = _props.diameterY;
	            var diameterZ = _props.diameterZ;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "sphere",
	                    segments: segments,
	                    diameterX: diameterX,
	                    diameterY: diameterY,
	                    diameterZ: diameterZ
	                }),
	                this.props.children
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            segments: _react.PropTypes.number,
	            diameterX: _react.PropTypes.number,
	            diameterY: _react.PropTypes.number,
	            diameterZ: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Sphere;
	})(_react2["default"].Component);

	exports["default"] = Sphere;
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _systems = __webpack_require__(95);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Box = (function (_React$Component) {
	    _inherits(Box, _React$Component);

	    function Box() {
	        _classCallCheck(this, Box);

	        _get(Object.getPrototypeOf(Box.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Box, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$height = _props.height;
	            var height = _props$height === undefined ? 1 : _props$height;
	            var _props$width = _props.width;
	            var width = _props$width === undefined ? 1 : _props$width;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "box",
	                    height: height,
	                    width: width
	                }),
	                this.props.children
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            height: _react.PropTypes.number,
	            width: _react.PropTypes.number,
	            onClick: _react.PropTypes.func
	        },
	        enumerable: true
	    }]);

	    return Box;
	})(_react2["default"].Component);

	exports["default"] = Box;
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _systems = __webpack_require__(95);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Sphere = (function (_React$Component) {
	    _inherits(Sphere, _React$Component);

	    function Sphere() {
	        _classCallCheck(this, Sphere);

	        _get(Object.getPrototypeOf(Sphere.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Sphere, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var height = _props.height;
	            var width = _props.width;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "ground",
	                    width: width,
	                    height: height

	                }),
	                this.props.children
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            height: _react.PropTypes.number,
	            width: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Sphere;
	})(_react2["default"].Component);

	exports["default"] = Sphere;
	module.exports = exports["default"];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent = __webpack_require__(97);

	var _AkkadAbstractComponent2 = _interopRequireDefault(_AkkadAbstractComponent);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _systems = __webpack_require__(95);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var ArcRotateCamera = (function (_React$Component) {
	    _inherits(ArcRotateCamera, _React$Component);

	    function ArcRotateCamera() {
	        _classCallCheck(this, ArcRotateCamera);

	        _get(Object.getPrototypeOf(ArcRotateCamera.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(ArcRotateCamera, [{
	        key: "render",
	        value: function render() {
	            var target = this.props.target;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderCamera, {
	                    type: "arcRotate",
	                    target: target
	                })
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            target: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return ArcRotateCamera;
	})(_react2["default"].Component);

	exports["default"] = ArcRotateCamera;
	module.exports = exports["default"];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderCamera = (function (_AkkadAbstractComponent) {
	    _inherits(RenderCamera, _AkkadAbstractComponent);

	    function RenderCamera() {
	        _classCallCheck(this, RenderCamera);

	        _get(Object.getPrototypeOf(RenderCamera.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderCamera, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var appState = _context.appState;
	            var entityID = _context.entityID;
	            var setCamera = actions._internal.setCamera;

	            setCamera(entityID, this.props);
	        }

	        //TODO: Add a componentWillUnmount() to detach camera.
	    }], [{
	        key: "propTypes",
	        value: {
	            target: _react.PropTypes.array,
	            type: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return RenderCamera;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderCamera;
	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _Entity = __webpack_require__(103);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _systems = __webpack_require__(95);

	var Material = (function (_React$Component) {
	    _inherits(Material, _React$Component);

	    function Material() {
	        _classCallCheck(this, Material);

	        _get(Object.getPrototypeOf(Material.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Material, [{
	        key: "getChildContext",
	        value: function getChildContext() {
	            return {
	                meshID: this.context.entityID
	            };
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	            var entityID = nextContext.entityID;
	            var appState = nextContext.appState;

	            return appState.hasIn(["meshes", entityID]);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var children = this.props.children;

	            console.log("Material Render", entityID);
	            // const meshHasMaterial = appState.hasIn(["meshes", entityID, "material"]);
	            var material = appState.getIn(["meshes", entityID, "material"]);
	            console.log("mesh", material);

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderMaterial, null),
	                material && children
	            );
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "childContextTypes",
	        value: {
	            meshID: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Material;
	})(_react2["default"].Component);

	exports["default"] = Material;
	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _AkkadAbstractComponent2 = __webpack_require__(97);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderMaterial = (function (_AkkadAbstractComponent) {
		_inherits(RenderMaterial, _AkkadAbstractComponent);

		function RenderMaterial() {
			_classCallCheck(this, RenderMaterial);

			_get(Object.getPrototypeOf(RenderMaterial.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(RenderMaterial, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _context = this.context;
				var appState = _context.appState;
				var actions = _context.actions;
				var meshID = _context.meshID;
				var entityID = _context.entityID;
				var createMaterial = actions._internal.createMaterial;

				createMaterial(meshID, entityID);
				// const {entityID, appState, actions} = this.context;
				// const {createShape} = actions._internal;

				// createShape(entityID, this.props)
			}
		}], [{
			key: "contextTypes",
			value: {
				meshID: _react.PropTypes.string,
				entityID: _react.PropTypes.string,
				appState: _react.PropTypes.object,
				actions: _react.PropTypes.object
			},
			enumerable: true
		}]);

		return RenderMaterial;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderMaterial;
	module.exports = exports["default"];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _babylonjs = __webpack_require__(50);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(49);

	var _immutable2 = _interopRequireDefault(_immutable);

	var MaterialActions = {
		createMaterial: function createMaterial(state, actions, meshID, entityID) {
			console.log("createMaterial");
			var mesh = state.getIn(["meshes", meshID, "mesh"]);
			var scene = state.get("scene");

			var material = new _babylonjs2["default"].StandardMaterial(entityID, scene);

			mesh.material = material;

			material.wireframe = true;

			return state.setIn(["meshes", meshID, "material"], material);
		}
	};

	exports["default"] = MaterialActions;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;