(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("babylonjs"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactMultiChild", "react/lib/ReactUpdates", "babylonjs", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["akkad"] = factory(require("react"), require("react/lib/ReactMultiChild"), require("react/lib/ReactUpdates"), require("babylonjs"), require("immutable"));
	else
		root["akkad"] = factory(root["react"], root["react/lib/ReactMultiChild"], root["react/lib/ReactUpdates"], root["babylonjs"], root["immutable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_106__) {
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

	var _componentsSystems = __webpack_require__(48);

	var _componentsSystems2 = _interopRequireDefault(_componentsSystems);

	var _componentsLights = __webpack_require__(156);

	var _componentsLights2 = _interopRequireDefault(_componentsLights);

	var _componentsCameras = __webpack_require__(161);

	var _componentsCameras2 = _interopRequireDefault(_componentsCameras);

	var _componentsMeshes = __webpack_require__(164);

	var _componentsMeshes2 = _interopRequireDefault(_componentsMeshes);

	var _componentsShapes = __webpack_require__(165);

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

	var _Scene = __webpack_require__(103);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Material = __webpack_require__(104);

	var _Material2 = _interopRequireDefault(_Material);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _Akkad = __webpack_require__(105);

	var _Akkad2 = _interopRequireDefault(_Akkad);

	var _BasicAnimation = __webpack_require__(154);

	var _BasicAnimation2 = _interopRequireDefault(_BasicAnimation);

	var _Particles = __webpack_require__(155);

	var _Particles2 = _interopRequireDefault(_Particles);

	exports["default"] = {
	    Engine: _Engine2["default"],
	    Scene: _Scene2["default"],
	    Material: _Material2["default"],
	    Entity: _Entity2["default"],
	    EntityLoaded: _EntityLoaded2["default"],
	    Akkad: _Akkad2["default"],
	    BasicAnimation: _BasicAnimation2["default"],
	    Particles: _Particles2["default"]
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

	var _systems = __webpack_require__(48);

	var _systems2 = _interopRequireDefault(_systems);

	var Engine = (function (_React$Component) {
	    _inherits(Engine, _React$Component);

	    function Engine(props) {
	        var _this = this;

	        _classCallCheck(this, Engine);

	        _get(Object.getPrototypeOf(Engine.prototype), "constructor", this).call(this, props);

	        var reactid = props.reactid;

	        this._rootNodeID = reactid;

	        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);

	        /* Poor man's way to do a mixin with a class */
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

	            setEngine(canvasID, this.id, this.setState.bind(this));

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
	            appState: _react.PropTypes.object,
	            reactid: _react.PropTypes.string
	        },
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _RenderAkkadCanvas = __webpack_require__(49);

	var _RenderAkkadCanvas2 = _interopRequireDefault(_RenderAkkadCanvas);

	var _RenderShape = __webpack_require__(50);

	var _RenderShape2 = _interopRequireDefault(_RenderShape);

	var _RenderLight = __webpack_require__(52);

	var _RenderLight2 = _interopRequireDefault(_RenderLight);

	var _RenderCamera = __webpack_require__(53);

	var _RenderCamera2 = _interopRequireDefault(_RenderCamera);

	var _RenderMaterial = __webpack_require__(54);

	var _RenderMaterial2 = _interopRequireDefault(_RenderMaterial);

	var _RenderAnimation = __webpack_require__(55);

	var _RenderAnimation2 = _interopRequireDefault(_RenderAnimation);

	var _RenderMesh = __webpack_require__(56);

	var _RenderMesh2 = _interopRequireDefault(_RenderMesh);

	var _RenderParticles = __webpack_require__(57);

	var _RenderParticles2 = _interopRequireDefault(_RenderParticles);

	var _Trigger = __webpack_require__(58);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Mesh = __webpack_require__(62);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	var _AnimateMesh = __webpack_require__(63);

	var _AnimateMesh2 = _interopRequireDefault(_AnimateMesh);

	var _Position = __webpack_require__(64);

	var _Position2 = _interopRequireDefault(_Position);

	var _Rotate = __webpack_require__(92);

	var _Rotate2 = _interopRequireDefault(_Rotate);

	var _Wireframe = __webpack_require__(93);

	var _Wireframe2 = _interopRequireDefault(_Wireframe);

	var _Texture = __webpack_require__(94);

	var _Texture2 = _interopRequireDefault(_Texture);

	var _Color = __webpack_require__(95);

	var _Color2 = _interopRequireDefault(_Color);

	var _Gravity = __webpack_require__(96);

	var _Gravity2 = _interopRequireDefault(_Gravity);

	var _ApplyGravity = __webpack_require__(97);

	var _ApplyGravity2 = _interopRequireDefault(_ApplyGravity);

	var _CheckCollisions = __webpack_require__(98);

	var _CheckCollisions2 = _interopRequireDefault(_CheckCollisions);

	var _CollisionsEnabled = __webpack_require__(99);

	var _CollisionsEnabled2 = _interopRequireDefault(_CollisionsEnabled);

	// Components mostly used internally

	var _GenericProperty = __webpack_require__(100);

	var _GenericProperty2 = _interopRequireDefault(_GenericProperty);

	var _SetEntityAsProperty = __webpack_require__(101);

	var _SetEntityAsProperty2 = _interopRequireDefault(_SetEntityAsProperty);

	var _CallMethodOnEntity = __webpack_require__(102);

	var _CallMethodOnEntity2 = _interopRequireDefault(_CallMethodOnEntity);

	exports["default"] = {
	    RenderAkkadCanvas: _RenderAkkadCanvas2["default"],
	    RenderShape: _RenderShape2["default"],
	    RenderLight: _RenderLight2["default"],
	    RenderCamera: _RenderCamera2["default"],
	    RenderMaterial: _RenderMaterial2["default"],
	    RenderAnimation: _RenderAnimation2["default"],
	    RenderMesh: _RenderMesh2["default"],
	    RenderParticles: _RenderParticles2["default"],
	    Trigger: _Trigger2["default"],
	    Color: _Color2["default"],
	    Mesh: _Mesh2["default"],
	    AnimateMesh: _AnimateMesh2["default"],
	    Position: _Position2["default"],
	    Rotate: _Rotate2["default"],
	    Wireframe: _Wireframe2["default"],
	    Texture: _Texture2["default"],
	    Gravity: _Gravity2["default"],
	    ApplyGravity: _ApplyGravity2["default"],
	    CheckCollisions: _CheckCollisions2["default"],
	    CollisionsEnabled: _CollisionsEnabled2["default"],
	    GenericProperty: _GenericProperty2["default"],
	    SetEntityAsProperty: _SetEntityAsProperty2["default"],
	    CallMethodOnEntity: _CallMethodOnEntity2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 49 */
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

	var RenderAkkadCanvas = (function (_React$Component) {
	    _inherits(RenderAkkadCanvas, _React$Component);

	    function RenderAkkadCanvas() {
	        _classCallCheck(this, RenderAkkadCanvas);

	        _get(Object.getPrototypeOf(RenderAkkadCanvas.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderAkkadCanvas, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var entityID = this.context.entityID;
	            var actions = this.props.actions;
	            var setCanvas = actions._internal.setCanvas;

	            var canvas = this.refs["akkadCanvas" + entityID];

	            setCanvas(entityID, canvas);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var entityID = this.context.entityID;
	            var actions = this.props.actions;
	            var disposeCanvas = actions._internal.disposeCanvas;

	            disposeCanvas(entityID);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var styles = this.props.styles;

	            return _react2["default"].createElement("canvas", {
	                ref: "akkadCanvas" + entityID,
	                className: "akkad-canvas",
	                id: entityID,
	                style: styles
	            });
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            actions: _react.PropTypes.object,
	            appState: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object,
	            styles: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return RenderAkkadCanvas;
	})(_react2["default"].Component);

	exports["default"] = RenderAkkadCanvas;
	module.exports = exports["default"];

/***/ },
/* 50 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

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
	            var actions = _context.actions;
	            var createShape = actions._internal.createShape;

	            createShape(entityID, this.props);
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
/* 51 */
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
/* 52 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderLight = (function (_AkkadAbstractComponent) {
	    _inherits(RenderLight, _AkkadAbstractComponent);

	    function RenderLight() {
	        _classCallCheck(this, RenderLight);

	        _get(Object.getPrototypeOf(RenderLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderLight, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createLight = actions._internal.createLight;

	            createLight(entityID, this.props);
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
/* 53 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

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
/* 54 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

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
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createMaterial = actions._internal.createMaterial;

	            createMaterial(entityID);
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

	    return RenderMaterial;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderMaterial;
	module.exports = exports["default"];

/***/ },
/* 55 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderAnimation = (function (_AkkadAbstractComponent) {
	    _inherits(RenderAnimation, _AkkadAbstractComponent);

	    function RenderAnimation() {
	        _classCallCheck(this, RenderAnimation);

	        _get(Object.getPrototypeOf(RenderAnimation.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderAnimation, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createAnimation = actions._internal.createAnimation;

	            var config = _extends({}, this.props, {
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            meshProperty: _react.PropTypes.string.isRequired,
	            valueType: _react.PropTypes.string.isRequired,
	            loopMode: _react.PropTypes.string.isRequired,
	            keyFrames: _react.PropTypes.array
	        },
	        enumerable: true
	    }]);

	    return RenderAnimation;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderAnimation;
	module.exports = exports["default"];

/***/ },
/* 56 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderMesh = (function (_AkkadAbstractComponent) {
	    _inherits(RenderMesh, _AkkadAbstractComponent);

	    function RenderMesh() {
	        _classCallCheck(this, RenderMesh);

	        _get(Object.getPrototypeOf(RenderMesh.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderMesh, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var path = _props.path;
	            var fileName = _props.fileName;
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var importMesh = actions._internal.importMesh;

	            importMesh(path, fileName, entityID);
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string.isRequired,
	            path: _react.PropTypes.string.isRequired,
	            fileName: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    return RenderMesh;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderMesh;
	module.exports = exports["default"];

/***/ },
/* 57 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderParticles = (function (_AkkadAbstractComponent) {
	    _inherits(RenderParticles, _AkkadAbstractComponent);

	    function RenderParticles() {
	        _classCallCheck(this, RenderParticles);

	        _get(Object.getPrototypeOf(RenderParticles.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderParticles, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var img = _props.img;
	            var createParticles = actions._internal.createParticles;

	            createParticles(entityID, targetEntityID, img);
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
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string.isRequired,
	            img: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    return RenderParticles;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderParticles;
	module.exports = exports["default"];

/***/ },
/* 58 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _RenderTrigger = __webpack_require__(61);

	var _RenderTrigger2 = _interopRequireDefault(_RenderTrigger);

	var Trigger = (function (_React$Component) {
	    _inherits(Trigger, _React$Component);

	    function Trigger() {
	        _classCallCheck(this, Trigger);

	        _get(Object.getPrototypeOf(Trigger.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Trigger, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var children = this.props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_RenderTrigger2["default"], {
	                    targetEntityID: entityID,
	                    triggers: this.props
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
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
	        key: "propTypes",
	        value: {
	            onClick: _react.PropTypes.func
	        },
	        enumerable: true
	    }]);

	    return Trigger;
	})(_react2["default"].Component);

	exports["default"] = Trigger;
	module.exports = exports["default"];

/***/ },
/* 59 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

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
/* 60 */
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

	var EntityLoaded = (function (_React$Component) {
	    _inherits(EntityLoaded, _React$Component);

	    function EntityLoaded() {
	        _classCallCheck(this, EntityLoaded);

	        _get(Object.getPrototypeOf(EntityLoaded.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(EntityLoaded, [{
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

	            return appState && appState.hasIn(["entities", entityID]) && _react2["default"].createElement(
	                "div",
	                null,
	                children
	            );
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return EntityLoaded;
	})(_react2["default"].Component);

	exports["default"] = EntityLoaded;
	module.exports = exports["default"];

/***/ },
/* 61 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var RenderTrigger = (function (_AkkadAbstractComponent) {
	    _inherits(RenderTrigger, _AkkadAbstractComponent);

	    function RenderTrigger() {
	        _classCallCheck(this, RenderTrigger);

	        _get(Object.getPrototypeOf(RenderTrigger.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(RenderTrigger, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var triggers = _props.triggers;
	            var _context = this.context;
	            var actions = _context.actions;
	            var entityID = _context.entityID;
	            var createTriggers = actions._internal.createTriggers;

	            createTriggers(targetEntityID, entityID, triggers);
	        }

	        //TODO: remove triggers that were added on componentWillUnmount()

	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string.isRequired,
	            triggers: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return RenderTrigger;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = RenderTrigger;
	module.exports = exports["default"];

/***/ },
/* 62 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _RenderMesh = __webpack_require__(56);

	var _RenderMesh2 = _interopRequireDefault(_RenderMesh);

	var Mesh = (function (_React$Component) {
	    _inherits(Mesh, _React$Component);

	    function Mesh() {
	        _classCallCheck(this, Mesh);

	        _get(Object.getPrototypeOf(Mesh.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Mesh, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var _props = this.props;
	            var path = _props.path;
	            var fileName = _props.fileName;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_RenderMesh2["default"], {
	                    targetEntityID: entityID,
	                    path: path,
	                    fileName: fileName
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
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
	        key: "propTypes",
	        value: {
	            path: _react.PropTypes.string,
	            fileName: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Mesh;
	})(_react2["default"].Component);

	exports["default"] = Mesh;
	module.exports = exports["default"];

/***/ },
/* 63 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var AnimateMesh = (function (_AkkadAbstractComponent) {
	    _inherits(AnimateMesh, _AkkadAbstractComponent);

	    function AnimateMesh() {
	        _classCallCheck(this, AnimateMesh);

	        _get(Object.getPrototypeOf(AnimateMesh.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(AnimateMesh, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var entityID = _context.entityID;
	            var appState = _context.appState;
	            var _props = this.props;
	            var targetEntityID = _props.targetEntityID;
	            var keyFrames = _props.keyFrames;
	            var startFrame = _props.startFrame;
	            var endFrame = _props.endFrame;

	            var targetMesh = appState.getIn(["entities", targetEntityID, "entity"]);
	            var scene = appState.getIn(["entities", appState.get("sceneID"), "entity"]);
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string.isRequired,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string,
	            propertyName: _react.PropTypes.string,
	            keyFrames: _react.PropTypes.array,
	            startFrame: _react.PropTypes.number,
	            endFrame: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: "defaultProps",
	        value: {
	            startFrame: 0,
	            endFrame: 100
	        },
	        enumerable: true
	    }]);

	    return AnimateMesh;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = AnimateMesh;
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Position = (function (_AkkadAbstractComponent) {
	    _inherits(Position, _AkkadAbstractComponent);

	    function Position() {
	        _classCallCheck(this, Position);

	        _get(Object.getPrototypeOf(Position.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Position, [{
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
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);
	            var vector = this.props.vector;

	            entity.position = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            vector: _react.PropTypes.arrayOf(_react.PropTypes.number)
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

	    return Position;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Position;
	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(66)["default"];

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(83);
	module.exports = __webpack_require__(8).Array.from;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(69)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(71)(String, 'String', function(iterated){
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(70)
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
/* 70 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(72)
	  , $def            = __webpack_require__(6)
	  , $redef          = __webpack_require__(73)
	  , hide            = __webpack_require__(74)
	  , has             = __webpack_require__(16)
	  , SYMBOL_ITERATOR = __webpack_require__(77)('iterator')
	  , Iterators       = __webpack_require__(80)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(81)(Constructor, NAME, next);
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
	    __webpack_require__(82)(IteratorPrototype, TAG, true);
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
/* 72 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(74);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , createDesc = __webpack_require__(75);
	module.exports = __webpack_require__(76) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 75 */
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(78)('wks')
	  , Symbol = __webpack_require__(7).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(79))('Symbol.' + name));
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(15)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(74)(IteratorPrototype, __webpack_require__(77)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(75)(1,next)});
	  __webpack_require__(82)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(16)
	  , hide = __webpack_require__(74)
	  , TAG  = __webpack_require__(77)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(36)
	  , $def        = __webpack_require__(6)
	  , toObject    = __webpack_require__(10)
	  , call        = __webpack_require__(84)
	  , isArrayIter = __webpack_require__(85)
	  , toLength    = __webpack_require__(86)
	  , getIterFn   = __webpack_require__(87);
	$def($def.S + $def.F * !__webpack_require__(89)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(80)
	  , ITERATOR  = __webpack_require__(77)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(70)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(88)
	  , ITERATOR  = __webpack_require__(77)('iterator')
	  , Iterators = __webpack_require__(80);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(13)
	  , TAG = __webpack_require__(77)('toStringTag')
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(77)('iterator')
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
/* 90 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = Function.prototype.bind;
	exports.__esModule = true;

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var Rotate = (function (_AkkadAbstractComponent) {
	    _inherits(Rotate, _AkkadAbstractComponent);

	    function Rotate() {
	        _classCallCheck(this, Rotate);

	        _get(Object.getPrototypeOf(Rotate.prototype), "constructor", this).apply(this, arguments);

	        this.updateRotation = function (props, context) {
	            var entityID = context.entityID;
	            var appState = context.appState;
	            var amount = props.amount;

	            var axis = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(props.axis))))();
	            var space = _babylonjs2["default"].Space[props.space];

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity.rotate(axis, amount, space);
	        };
	    }

	    _createClass(Rotate, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            var axis = nextProps.axis;
	            var amount = nextProps.amount;
	            var space = nextProps.space;

	            if (axis !== this.props.axis || amount !== this.props.amount || space !== this.props.space) {
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
	    }], [{
	        key: "propTypes",
	        value: {
	            axis: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
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

	    return Rotate;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Rotate;
	module.exports = exports["default"];

/***/ },
/* 93 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var Wireframe = (function (_AkkadAbstractComponent) {
	    _inherits(Wireframe, _AkkadAbstractComponent);

	    function Wireframe() {
	        var _this = this;

	        _classCallCheck(this, Wireframe);

	        _get(Object.getPrototypeOf(Wireframe.prototype), "constructor", this).apply(this, arguments);

	        this.entityHasWireframe = function (val) {
	            var _context = _this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;

	            var material = appState.getIn(["entities", entityID, "entity"]);
	            material.wireframe = val;
	        };
	    }

	    _createClass(Wireframe, [{
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return Wireframe;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Wireframe;
	module.exports = exports["default"];

/***/ },
/* 94 */
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

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var Texture = (function (_AkkadAbstractComponent) {
	    _inherits(Texture, _AkkadAbstractComponent);

	    function Texture() {
	        _classCallCheck(this, Texture);

	        _get(Object.getPrototypeOf(Texture.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Texture, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            return nextProps.image !== this.props.image;
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;
	            var image = this.props.image;

	            var scene = appState.getIn(["entities", appState.get("sceneID"), "entity"]);

	            var entityObj = appState.getIn(["entities", entityID]);
	            var type = entityObj.get("type");
	            var entity = entityObj.get("entity");

	            var texture = new _babylonjs2["default"].Texture(image, scene);

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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            image: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    return Texture;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Texture;
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var Color = (function (_AkkadAbstractComponent) {
	    _inherits(Color, _AkkadAbstractComponent);

	    function Color() {
	        _classCallCheck(this, Color);

	        _get(Object.getPrototypeOf(Color.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Color, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context = this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;
	            var _props = this.props;
	            var color = _props.color;
	            var type = _props.type;

	            var entityObj = appState.getIn(["entities", entityID]);
	            var entity = entityObj.get("entity");

	            var color3 = new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(color))))();

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
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context2 = this.context;
	            var appState = _context2.appState;
	            var entityID = _context2.entityID;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            // For now, set all colors to null.
	            entity.ambientColor = null;
	            entity.specularColor = null;
	            entity.diffuseColor = null;
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
	        key: "propTypes",
	        value: {
	            color: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            type: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Color;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Color;
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var Gravity = (function (_AkkadAbstractComponent) {
	    _inherits(Gravity, _AkkadAbstractComponent);

	    function Gravity() {
	        _classCallCheck(this, Gravity);

	        _get(Object.getPrototypeOf(Gravity.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Gravity, [{
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

	            entity.gravity = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            vector: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired
	        },
	        enumerable: true
	    }]);

	    return Gravity;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = Gravity;
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var ApplyGravity = (function (_AkkadAbstractComponent) {
	    _inherits(ApplyGravity, _AkkadAbstractComponent);

	    function ApplyGravity() {
	        _classCallCheck(this, ApplyGravity);

	        _get(Object.getPrototypeOf(ApplyGravity.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(ApplyGravity, [{
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return ApplyGravity;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = ApplyGravity;
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var CheckCollisions = (function (_AkkadAbstractComponent) {
	    _inherits(CheckCollisions, _AkkadAbstractComponent);

	    function CheckCollisions() {
	        _classCallCheck(this, CheckCollisions);

	        _get(Object.getPrototypeOf(CheckCollisions.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(CheckCollisions, [{
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return CheckCollisions;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = CheckCollisions;
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var CollisionsEnabled = (function (_AkkadAbstractComponent) {
	    _inherits(CollisionsEnabled, _AkkadAbstractComponent);

	    function CollisionsEnabled() {
	        _classCallCheck(this, CollisionsEnabled);

	        _get(Object.getPrototypeOf(CollisionsEnabled.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(CollisionsEnabled, [{
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return CollisionsEnabled;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = CollisionsEnabled;
	module.exports = exports["default"];

/***/ },
/* 100 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var GenericProperty = (function (_AkkadAbstractComponent) {
	    _inherits(GenericProperty, _AkkadAbstractComponent);

	    function GenericProperty() {
	        var _this = this;

	        _classCallCheck(this, GenericProperty);

	        _get(Object.getPrototypeOf(GenericProperty.prototype), "constructor", this).apply(this, arguments);

	        this.updatePropertyValue = function (val) {
	            var _context = _this.context;
	            var appState = _context.appState;
	            var entityID = _context.entityID;
	            var propertyName = _this.props.propertyName;

	            var entity = appState.getIn(["entities", entityID, "entity"]);

	            entity[propertyName] = val;
	        };
	    }

	    _createClass(GenericProperty, [{
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
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            propertyName: _react.PropTypes.string.isRequired,
	            onVal: _react.PropTypes.any.isRequired,
	            offVal: _react.PropTypes.any
	        },
	        enumerable: true
	    }]);

	    return GenericProperty;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = GenericProperty;
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

	/* Sets an Entity as the property on another entity */

	var SetEntityAsProperty = (function (_React$Component) {
	    _inherits(SetEntityAsProperty, _React$Component);

	    function SetEntityAsProperty() {
	        _classCallCheck(this, SetEntityAsProperty);

	        _get(Object.getPrototypeOf(SetEntityAsProperty.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(SetEntityAsProperty, [{
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
	            return _react2["default"].createElement(
	                "div",
	                null,
	                this.props.children
	            );
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string.isRequired,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string,
	            propertyName: _react.PropTypes.string,
	            reverse: _react.PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return SetEntityAsProperty;
	})(_react2["default"].Component);

	exports["default"] = SetEntityAsProperty;
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var CallMethodOnEntity = (function (_AkkadAbstractComponent) {
	    _inherits(CallMethodOnEntity, _AkkadAbstractComponent);

	    function CallMethodOnEntity() {
	        _classCallCheck(this, CallMethodOnEntity);

	        _get(Object.getPrototypeOf(CallMethodOnEntity.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(CallMethodOnEntity, [{
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
	                entity[methodName].apply(entity, _toConsumableArray(args));
	            } else {
	                entity[methodName]();
	            }
	        }
	    }], [{
	        key: "contextTypes",
	        value: {
	            entityID: _react.PropTypes.string.isRequired,
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: "propTypes",
	        value: {
	            targetEntityID: _react.PropTypes.string,
	            methodName: _react.PropTypes.string.isRequired,
	            args: _react.PropTypes.arrayOf(_react.PropTypes.any)
	        },
	        enumerable: true
	    }]);

	    return CallMethodOnEntity;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = CallMethodOnEntity;
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

	var Scene = (function (_React$Component) {
	    _inherits(Scene, _React$Component);

	    function Scene() {
	        _classCallCheck(this, Scene);

	        _get(Object.getPrototypeOf(Scene.prototype), "constructor", this).call(this);

	        this.id = Math.floor((1 + Math.random()) * 10000000000).toString(16);
	    }

	    _createClass(Scene, [{
	        key: "getChildContext",
	        value: function getChildContext() {
	            return {
	                entityID: this.id
	            };
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _context$actions$_internal = this.context.actions._internal;
	            var setScene = _context$actions$_internal.setScene;
	            var startRenderLoop = _context$actions$_internal.startRenderLoop;

	            setScene(this.id);
	            startRenderLoop(this.id);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var _context$actions$_internal2 = this.context.actions._internal;
	            var disposeScene = _context$actions$_internal2.disposeScene;
	            var stopRenderLoop = _context$actions$_internal2.stopRenderLoop;

	            stopRenderLoop();
	            disposeScene(this.id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var appState = this.context.appState;

	            return appState.has("sceneID") ? _react2["default"].createElement(
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
	        key: "childContextTypes",
	        value: {
	            entityID: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Scene;
	})(_react2["default"].Component);

	exports["default"] = Scene;
	module.exports = exports["default"];

/***/ },
/* 104 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var Material = (function (_React$Component) {
	    _inherits(Material, _React$Component);

	    function Material() {
	        _classCallCheck(this, Material);

	        _get(Object.getPrototypeOf(Material.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Material, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var children = this.props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderMaterial, null),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    _react2["default"].createElement(_systems.SetEntityAsProperty, {
	                        targetEntityID: entityID,
	                        propertyName: "material"
	                    }),
	                    children
	                )
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
	    }]);

	    return Material;
	})(_react2["default"].Component);

	exports["default"] = Material;
	module.exports = exports["default"];

/***/ },
/* 105 */
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

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actions2 = __webpack_require__(107);

	var _actions3 = _interopRequireDefault(_actions2);

	var _classes = __webpack_require__(113);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _DOMInjector = __webpack_require__(152);

	var _DOMInjector2 = _interopRequireDefault(_DOMInjector);

	var _systems = __webpack_require__(48);

	var initState = {
	    lights: {}
	};

	var Akkad = (function (_React$Component) {
	    _inherits(Akkad, _React$Component);

	    function Akkad() {
	        _classCallCheck(this, Akkad);

	        _get(Object.getPrototypeOf(Akkad.prototype), "constructor", this).call(this);

	        this.stateManager = new _classes.StateManager();
	    }

	    _createClass(Akkad, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _this = this;

	            var actions = _extends({}, this.props.actions, {
	                _internal: _actions3["default"]
	            });

	            this.stateManager.init(actions, // actions object
	            function () {
	                return _immutable2["default"].fromJS(initState);
	            }, // init function
	            function (appState, actions) {
	                return _this.setState({ appState: appState, actions: actions });
	            } // called after action is returned.
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var stateManager = this.stateManager;
	            var _props = this.props;
	            var children = _props.children;
	            var styles = _props.styles;

	            return stateManager.actions && stateManager.appState && _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderAkkadCanvas, {
	                    appState: stateManager.appState,
	                    actions: stateManager.actions,
	                    styles: styles
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    { appState: stateManager.appState },
	                    _react2["default"].createElement(
	                        _DOMInjector2["default"],
	                        {
	                            appState: stateManager.appState,
	                            actions: stateManager.actions
	                        },
	                        children
	                    )
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            canvasNode: _react.PropTypes.object,
	            actions: _react.PropTypes.object,
	            styles: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return Akkad;
	})(_react2["default"].Component);

	exports["default"] = Akkad;
	module.exports = exports["default"];

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _appActions = __webpack_require__(108);

	var _appActions2 = _interopRequireDefault(_appActions);

	var _CameraActions = __webpack_require__(109);

	var _CameraActions2 = _interopRequireDefault(_CameraActions);

	var _LightActions = __webpack_require__(110);

	var _LightActions2 = _interopRequireDefault(_LightActions);

	var _SceneActions = __webpack_require__(111);

	var _SceneActions2 = _interopRequireDefault(_SceneActions);

	var _ShapeActions = __webpack_require__(112);

	var _ShapeActions2 = _interopRequireDefault(_ShapeActions);

	var _MeshTriggerActions = __webpack_require__(141);

	var _MeshTriggerActions2 = _interopRequireDefault(_MeshTriggerActions);

	var _MaterialActions = __webpack_require__(142);

	var _MaterialActions2 = _interopRequireDefault(_MaterialActions);

	var _AnimationActions = __webpack_require__(143);

	var _AnimationActions2 = _interopRequireDefault(_AnimationActions);

	var _TriggerActions = __webpack_require__(144);

	var _TriggerActions2 = _interopRequireDefault(_TriggerActions);

	var _MeshActions = __webpack_require__(145);

	var _MeshActions2 = _interopRequireDefault(_MeshActions);

	var _ParticlesActions = __webpack_require__(151);

	var _ParticlesActions2 = _interopRequireDefault(_ParticlesActions);

	exports["default"] = _extends({}, _appActions2["default"], _CameraActions2["default"], _LightActions2["default"], _SceneActions2["default"], _ShapeActions2["default"], _MeshTriggerActions2["default"], _MaterialActions2["default"], _AnimationActions2["default"], _TriggerActions2["default"], _MeshActions2["default"], _ParticlesActions2["default"]);
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	exports["default"] = {
	    setCanvas: function setCanvas(state, actions, entityID, canvas) {
	        var canvasObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: canvas,
	            type: "canvas"
	        });

	        state = state.set("canvasID", entityID);
	        state = state.setIn(["entities", entityID], canvasObj);

	        return state;
	    },

	    disposeCanvas: function disposeCanvas(state, actions, canvasID) {
	        state = state["delete"]("canvasID", canvasID);
	        state = state.deleteIn(["entities", canvasID]);

	        return state;
	    },

	    setEngine: function setEngine(state, actions, canvasID, engineID, setState) {
	        var canvas = state.getIn(["entities", canvasID, "entity"]);

	        var engineObj = _immutable2["default"].Map({
	            id: engineID,
	            entity: new _babylonjs2["default"].Engine(canvas, true),
	            type: "engine"
	        });

	        state = state.set("engineID", engineID);
	        state = state.setIn(["entities", engineID], engineObj);
	        state = state.set("akkadTreeSetState", setState);

	        return state;
	    },

	    disposeEntity: function disposeEntity(state, actions, entityID) {
	        return state.deleteIn(["entities", entityID]);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

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
	        var _config$alpha = config.alpha;
	        var alpha = _config$alpha === undefined ? 0 : _config$alpha;
	        var _config$beta = config.beta;
	        var beta = _config$beta === undefined ? 0 : _config$beta;
	        var _config$radius = config.radius;
	        var radius = _config$radius === undefined ? 0 : _config$radius;
	        var initialPosition = config.initialPosition;

	        var target = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(config.target))))();

	        var camera = new _babylonjs2["default"].ArcRotateCamera(entityID, alpha, beta, radius, target, scene);

	        if (initialPosition) {
	            camera.setPosition(new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(initialPosition))))());
	        }

	        return camera;
	    }
	};

	exports["default"] = {
	    setCamera: function setCamera(state, actions, entityID, config) {
	        var canvas = state.getIn(["entities", state.get("canvasID"), "entity"]);
	        var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);

	        var camera = cameraCreators[config.type](entityID, config, scene);

	        camera.attachControl(canvas, false);

	        var cameraObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: camera,
	            type: "camera"
	        });

	        return state.setIn(["entities", entityID], cameraObj);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var lightCreators = {
	    hemispheric: function hemispheric(scene, entityID, props) {
	        var _props$direction = props.direction;
	        var direction = _props$direction === undefined ? [0, 1, 0] : _props$direction;

	        return new _babylonjs2["default"].HemisphericLight(entityID, new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(direction))))(), scene);
	    },

	    point: function point(scene, entityID, props) {
	        var _props$source = props.source;
	        var source = _props$source === undefined ? [1, 10, 1] : _props$source;

	        return new _babylonjs2["default"].PointLight(entityID, new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(source))))(), scene);
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

	        var spotLight = new _babylonjs2["default"].SpotLight(entityID, new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(position))))(), new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(direction))))(), angle, exponent, scene);

	        return spotLight;
	    },

	    directional: function directional(scene, entityID, props) {
	        var _props$direction3 = props.direction;
	        var direction = _props$direction3 === undefined ? [0, -1, 0] : _props$direction3;

	        return new _babylonjs2["default"].DirectionalLight(entityID, new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(direction))))(), scene);
	    }
	};

	exports["default"] = {
	    createLight: function createLight(state, actions, entityID, props) {
	        var type = props.type;

	        var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
	        var light = lightCreators[type](scene, entityID, props);

	        var lightObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: light,
	            type: "light"
	        });

	        return state.setIn(["entities", entityID], lightObj);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	exports["default"] = {
	    setScene: function setScene(state, actions, sceneID) {
	        var engine = state.getIn(["entities", state.get("engineID"), "entity"]);
	        var scene = new _babylonjs2["default"].Scene(engine);

	        var sceneObj = _immutable2["default"].Map({
	            id: sceneID,
	            entity: scene,
	            type: "scene"
	        });

	        state = state.setIn(["entities", sceneID], sceneObj);
	        state = state.set("sceneID", sceneID);

	        return state;
	    },

	    disposeScene: function disposeScene(state, actions, sceneID) {
	        var scene = state.getIn(["entities", sceneID, "entity"]);

	        scene.dispose();

	        state["delete"]("sceneID");
	        state.deleteIn(["entities", sceneID]);

	        return state;
	    },

	    startRenderLoop: function startRenderLoop(state, actions, sceneID) {
	        var engine = state.getIn(["entities", state.get("engineID"), "entity"]);
	        var scene = state.getIn(["entities", sceneID, "entity"]);

	        engine.runRenderLoop(function () {
	            scene.render();
	        });

	        return state;
	    },

	    stopRenderLoop: function stopRenderLoop(state) {
	        var engine = state.getIn(["entities", state.get("engineID"), "entity"]);

	        engine.stopRenderLoop();

	        return state;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _classes = __webpack_require__(113);

	var shapeCreators = {
	    box: function box(scene, entityID, options) {
	        return new _babylonjs.Mesh.CreateBox(entityID, options, scene);
	    },

	    sphere: function sphere(scene, entityID, options) {
	        return new _babylonjs.Mesh.CreateSphere(entityID, options, scene);
	    },

	    ground: function ground(scene, entityID, options) {
	        return new _babylonjs.Mesh.CreateGround(entityID, options, scene);
	    },

	    disc: function disc(scene, entityID, options) {
	        var radius = options.radius;
	        var tessellation = options.tessellation;
	        var _options$updatable = options.updatable;
	        var updatable = _options$updatable === undefined ? true : _options$updatable;
	        var _options$sideOrientation = options.sideOrientation;
	        var sideOrientation = _options$sideOrientation === undefined ? null : _options$sideOrientation;

	        var disc = new _babylonjs.Mesh.CreateDisc(entityID, radius, tessellation, scene, updatable, sideOrientation);
	        console.log(disc);
	        return disc;
	    },

	    cylinder: function cylinder(scene, entityID, options) {
	        var _options$height = options.height;
	        var height = _options$height === undefined ? 1 : _options$height;
	        var _options$diameterTop = options.diameterTop;
	        var diameterTop = _options$diameterTop === undefined ? 1 : _options$diameterTop;
	        var _options$diameterBottom = options.diameterBottom;
	        var diameterBottom = _options$diameterBottom === undefined ? 1 : _options$diameterBottom;
	        var _options$tessellation = options.tessellation;
	        var tessellation = _options$tessellation === undefined ? 30 : _options$tessellation;
	        var _options$subdivisions = options.subdivisions;
	        var subdivisions = _options$subdivisions === undefined ? 6 : _options$subdivisions;
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
	        var _options$sideOrientation2 = options.sideOrientation;
	        var sideOrientation = _options$sideOrientation2 === undefined ? 0 : _options$sideOrientation2;

	        return new _babylonjs.Mesh.CreateTorus(entityID, diameter, thickness, tessellation, scene, updatable, sideOrientation);
	    }
	};

	var ShapeActions = {
	    createShape: function createShape(state, actions, entityID, props) {
	        var type = props.type;

	        if (type && shapeCreators[type]) {
	            var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
	            var options = _classes.Helpers.convertShapeProps(props);
	            var shape = shapeCreators[type](scene, entityID, options);

	            var meshObj = _immutable2["default"].Map({
	                id: entityID,
	                entity: shape,
	                type: "mesh"
	            });

	            state = state.setIn(["entities", entityID], meshObj);
	        }
	        return state;
	    }
	};

	exports["default"] = ShapeActions;
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _MeshManager = __webpack_require__(114);

	var _MeshManager2 = _interopRequireDefault(_MeshManager);

	var _StateManager = __webpack_require__(115);

	var _StateManager2 = _interopRequireDefault(_StateManager);

	var _Helpers = __webpack_require__(140);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	exports["default"] = {
	    MeshManager: _MeshManager2["default"],
	    StateManager: _StateManager2["default"],
	    Helpers: _Helpers2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var propHandlers = {
	    position: function position(mesh, vector) {
	        mesh.position = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	    },

	    rotation: function rotation(mesh, vector) {
	        mesh.rotation = new (_bind.apply(_babylonjs2["default"].Vector3, [null].concat(_toConsumableArray(vector))))();
	    },

	    rotationQuaternion: function rotationQuaternion(mesh, quaternion) {
	        mesh.rotationQuaternion = new (_bind.apply(_babylonjs2["default"].Quaternion, [null].concat(_toConsumableArray(quaternion))))();
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _Symbol = __webpack_require__(116)["default"];

	var _Promise = __webpack_require__(122)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(106);

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

	            if (newState instanceof _Promise) {
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
	            if (_immutable2["default"].Map.isMap(newState)) {
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
	})();

	exports["default"] = StateManager;
	module.exports = exports["default"];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(118);
	module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(15)
	  , global         = __webpack_require__(7)
	  , has            = __webpack_require__(16)
	  , SUPPORT_DESC   = __webpack_require__(76)
	  , $def           = __webpack_require__(6)
	  , $redef         = __webpack_require__(73)
	  , $fails         = __webpack_require__(17)
	  , shared         = __webpack_require__(78)
	  , setTag         = __webpack_require__(82)
	  , uid            = __webpack_require__(79)
	  , wks            = __webpack_require__(77)
	  , keyOf          = __webpack_require__(119)
	  , $names         = __webpack_require__(120)
	  , enumKeys       = __webpack_require__(14)
	  , isArray        = __webpack_require__(121)
	  , isObject       = __webpack_require__(34)
	  , anObject       = __webpack_require__(35)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(75)
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

	  if(SUPPORT_DESC && !__webpack_require__(72)){
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
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(13);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(124);
	__webpack_require__(68);
	__webpack_require__(125);
	__webpack_require__(129);
	module.exports = __webpack_require__(8).Promise;

/***/ },
/* 124 */
/***/ function(module, exports) {

	

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(126);
	var Iterators = __webpack_require__(80);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(127)
	  , step       = __webpack_require__(128)
	  , Iterators  = __webpack_require__(80)
	  , toIObject  = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(71)(Array, 'Array', function(iterated, kind){
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

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(15)
	  , LIBRARY    = __webpack_require__(72)
	  , global     = __webpack_require__(7)
	  , ctx        = __webpack_require__(36)
	  , classof    = __webpack_require__(88)
	  , $def       = __webpack_require__(6)
	  , isObject   = __webpack_require__(34)
	  , anObject   = __webpack_require__(35)
	  , aFunction  = __webpack_require__(37)
	  , strictNew  = __webpack_require__(130)
	  , forOf      = __webpack_require__(131)
	  , setProto   = __webpack_require__(33).set
	  , same       = __webpack_require__(132)
	  , species    = __webpack_require__(133)
	  , SPECIES    = __webpack_require__(77)('species')
	  , RECORD     = __webpack_require__(79)('record')
	  , asap       = __webpack_require__(134)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(76)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(139)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(82)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(8)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(89)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(36)
	  , call        = __webpack_require__(84)
	  , isArrayIter = __webpack_require__(85)
	  , anObject    = __webpack_require__(35)
	  , toLength    = __webpack_require__(86)
	  , getIterFn   = __webpack_require__(87);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
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
/* 132 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(15)
	  , SPECIES = __webpack_require__(77)('species');
	module.exports = function(C){
	  if(__webpack_require__(76) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , macrotask = __webpack_require__(135).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(13)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	}

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
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

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(36)
	  , invoke             = __webpack_require__(136)
	  , html               = __webpack_require__(137)
	  , cel                = __webpack_require__(138)
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
	var listner = function(event){
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
	  if(__webpack_require__(13)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
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
/* 136 */
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(73);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var MeshTriggerActions = {
	    createMeshTriggers: function createMeshTriggers(state, actions, entityID, triggers) {
	        var mesh = state.getIn(["entities", entityID, "entity"]);

	        if (!mesh.actionManager) {
	            var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var MaterialActions = {
	    createMaterial: function createMaterial(state, actions, entityID) {
	        var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);

	        var material = new _babylonjs2["default"].StandardMaterial(entityID, scene);

	        var materialObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: material,
	            type: "material"
	        });

	        return state.setIn(["entities", entityID], materialObj);
	    }
	};

	exports["default"] = MaterialActions;
	module.exports = exports["default"];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var valueTypeMap = {
	    float: _babylonjs2["default"].Animation.ANIMATIONTYPE_FLOAT,
	    vector2: _babylonjs2["default"].Animation.ANIMATIONTYPE_VECTOR2,
	    vector3: _babylonjs2["default"].Animation.ANIMATIONTYPE_VECTOR3,
	    quaternion: _babylonjs2["default"].Animation.ANIMATIONTYPE_QUATERNION,
	    matrix: _babylonjs2["default"].Animation.ANIMATIONTYPE_MATRIX,
	    color: _babylonjs2["default"].Animation.ANIMATIONTYPE_COLOR3
	};

	var loopModeMap = {
	    relative: _babylonjs2["default"].Animation.ANIMATIONLOOPMODE_RELATIVE,
	    cycle: _babylonjs2["default"].Animation.ANIMATIONLOOPMODE_CYCLE,
	    constant: _babylonjs2["default"].Animation.ANIMATIONLOOPMODE_CONSTANT
	};

	var AnimationActions = {
	    createAnimation: function createAnimation(state, actions, config) {
	        var entityID = config.entityID;
	        var meshProperty = config.meshProperty;
	        var valueType = config.valueType;
	        var loopMode = config.loopMode;
	        var _config$fps = config.fps;
	        var fps = _config$fps === undefined ? 30 : _config$fps;

	        var animation = new _babylonjs2["default"].Animation(entityID, // name
	        meshProperty, // property type to animate
	        fps, // fps
	        valueTypeMap[valueType], // value type of animation
	        loopModeMap[loopMode] // loop mode
	        );

	        var animationObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: animation,
	            type: "animation"
	        });

	        return state.setIn(["entities", entityID], animationObj);
	    }
	};

	exports["default"] = AnimationActions;
	module.exports = exports["default"];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

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

	var TriggerActions = {
	    createTriggers: function createTriggers(state, actions, targetEntityID, entityID, triggers) {
	        var mesh = state.getIn(["entities", targetEntityID, "entity"]);

	        if (!mesh.actionManager) {
	            var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
	            mesh.actionManager = new _babylonjs.ActionManager(scene);
	        }

	        _immutable2["default"].Map(triggers).filter(function (func, triggerName) {
	            return triggerHandlers[triggerName];
	        }).map(function (func, triggerName) {
	            var trigger = triggerHandlers[triggerName]();
	            var injectedFunc = function injectedFunc(evt) {
	                return func(evt, targetEntityID, entityID);
	            };

	            return _immutable2["default"].Map({
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
	    }
	};

	exports["default"] = TriggerActions;
	module.exports = exports["default"];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Promise = __webpack_require__(122)["default"];

	var _regeneratorRuntime = __webpack_require__(146)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _importMesh = function _importMesh(path, fileName, scene) {
	    var progressCallback = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

	    return new _Promise(function (resolve, reject) {
	        _babylonjs.SceneLoader.ImportMesh("", path, fileName, scene, resolve, progressCallback, reject);
	    });
	};

	var MeshActions = {
	    importMesh: function importMesh(state, actions, path, fileName, entityID) {
	        var scene, meshes;
	        return _regeneratorRuntime.async(function importMesh$(context$1$0) {
	            while (1) switch (context$1$0.prev = context$1$0.next) {
	                case 0:
	                    scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
	                    context$1$0.next = 3;
	                    return _regeneratorRuntime.awrap(_importMesh(path, fileName, scene));

	                case 3:
	                    meshes = context$1$0.sent;

	                    meshes.forEach(function (mesh) {
	                        var meshObj = _immutable2["default"].Map({
	                            id: entityID,
	                            entity: mesh,
	                            type: "mesh"
	                        });

	                        state = state.setIn(["entities", entityID], meshObj);
	                    });

	                    return context$1$0.abrupt("return", state);

	                case 6:
	                case "end":
	                    return context$1$0.stop();
	            }
	        }, null, this);
	    }
	};

	exports["default"] = MeshActions;
	module.exports = exports["default"];

/***/ },
/* 146 */
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

	module.exports = __webpack_require__(147);

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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(116)["default"];

	var _Symbol$iterator = __webpack_require__(149)["default"];

	var _Object$create = __webpack_require__(28)["default"];

	var _Promise = __webpack_require__(122)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
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
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

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
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
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
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
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

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
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
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator.
	      previousPromise = enqueueResult["catch"](function (ignored) {});

	      return enqueueResult;
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
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(148)))

/***/ },
/* 148 */
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68);
	__webpack_require__(125);
	module.exports = __webpack_require__(77)('iterator');

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _immutable = __webpack_require__(106);

	var _immutable2 = _interopRequireDefault(_immutable);

	var ParticlesActions = {
	    createParticles: function createParticles(state, actions, entityID, targetEntityID, img) {
	        var scene = state.getIn(["entities", state.get("sceneID"), "entity"]);
	        var targetEntity = state.getIn(["entities", targetEntityID, "entity"]);

	        var particles = new _babylonjs2["default"].ParticleSystem(entityID, 2000, scene);

	        particles.particleTexture = new _babylonjs2["default"].Texture(img, scene);
	        particles.emitter = targetEntity;

	        var particlesObj = _immutable2["default"].Map({
	            id: entityID,
	            entity: particles,
	            type: "particles"
	        });

	        return state.setIn(["entities", entityID], particlesObj);
	    }
	};

	exports["default"] = ParticlesActions;
	module.exports = exports["default"];

/***/ },
/* 152 */
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

	var _EngineWrapper = __webpack_require__(153);

	var _EngineWrapper2 = _interopRequireDefault(_EngineWrapper);

	var DOMInjector = (function (_React$Component) {
	    _inherits(DOMInjector, _React$Component);

	    function DOMInjector() {
	        _classCallCheck(this, DOMInjector);

	        _get(Object.getPrototypeOf(DOMInjector.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(DOMInjector, [{
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps) {
	            var appState = nextProps.appState;

	            var setState = appState.get("akkadTreeSetState", function () {});
	            setState(nextProps);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var appState = _props.appState;
	            var actions = _props.actions;

	            return _react2["default"].createElement(
	                _EngineWrapper2["default"],
	                {
	                    appState: appState,
	                    actions: actions
	                },
	                children
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return DOMInjector;
	})(_react2["default"].Component);

	exports["default"] = DOMInjector;
	module.exports = exports["default"];

/***/ },
/* 153 */
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

	var _Engine = __webpack_require__(20);

	var _Engine2 = _interopRequireDefault(_Engine);

	var EngineWrapper = (function (_React$Component) {
	    _inherits(EngineWrapper, _React$Component);

	    function EngineWrapper() {
	        _classCallCheck(this, EngineWrapper);

	        _get(Object.getPrototypeOf(EngineWrapper.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(EngineWrapper, [{
	        key: "getinitialState",
	        value: function getinitialState() {
	            return {
	                reactid: null
	            };
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var engineWrapper = this.refs.engineWrapper;
	            var reactid = engineWrapper.dataset.reactid;

	            this.setState({ reactid: reactid });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var appState = _props.appState;
	            var actions = _props.actions;

	            return _react2["default"].createElement(
	                "div",
	                { className: "engine-wrapper", ref: "engineWrapper" },
	                this.state && this.state.reactid && _react2["default"].createElement(
	                    _Engine2["default"],
	                    {
	                        appState: appState,
	                        actions: actions,
	                        reactid: this.state.reactid
	                    },
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            appState: _react.PropTypes.object,
	            actions: _react.PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return EngineWrapper;
	})(_react2["default"].Component);

	exports["default"] = EngineWrapper;
	module.exports = exports["default"];

/***/ },
/* 154 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var BasicAnimation = (function (_React$Component) {
	    _inherits(BasicAnimation, _React$Component);

	    function BasicAnimation() {
	        _classCallCheck(this, BasicAnimation);

	        _get(Object.getPrototypeOf(BasicAnimation.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(BasicAnimation, [{
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

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderAnimation, this.props),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    _react2["default"].createElement(_systems.AnimateMesh, {
	                        targetEntityID: entityID,
	                        keyFrames: keyFrames,
	                        startFrame: startFrame,
	                        endFrame: endFrame
	                    }),
	                    children
	                )
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
	        key: "propTypes",
	        value: {
	            meshProperty: _react.PropTypes.string.isRequired,
	            valueType: _react.PropTypes.string.isRequired,
	            loopMode: _react.PropTypes.string.isRequired,
	            keyFrames: _react.PropTypes.array,
	            startFrame: _react.PropTypes.number,
	            endFrame: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return BasicAnimation;
	})(_react2["default"].Component);

	exports["default"] = BasicAnimation;
	module.exports = exports["default"];

/***/ },
/* 155 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var Particles = (function (_React$Component) {
	    _inherits(Particles, _React$Component);

	    function Particles() {
	        _classCallCheck(this, Particles);

	        _get(Object.getPrototypeOf(Particles.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Particles, [{
	        key: "render",
	        value: function render() {
	            var entityID = this.context.entityID;
	            var _props = this.props;
	            var img = _props.img;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderParticles, {
	                    targetEntityID: entityID,
	                    img: img
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    _react2["default"].createElement(_systems.CallMethodOnEntity, {
	                        methodName: "start"
	                    }),
	                    children
	                )
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
	        key: "propTypes",
	        value: {
	            img: _react.PropTypes.string
	        },
	        enumerable: true
	    }]);

	    return Particles;
	})(_react2["default"].Component);

	exports["default"] = Particles;
	module.exports = exports["default"];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HemisphericLight = __webpack_require__(157);

	var _HemisphericLight2 = _interopRequireDefault(_HemisphericLight);

	var _PointLight = __webpack_require__(158);

	var _PointLight2 = _interopRequireDefault(_PointLight);

	var _SpotLight = __webpack_require__(159);

	var _SpotLight2 = _interopRequireDefault(_SpotLight);

	var _DirectionalLight = __webpack_require__(160);

	var _DirectionalLight2 = _interopRequireDefault(_DirectionalLight);

	exports["default"] = {
	    HemisphericLight: _HemisphericLight2["default"],
	    PointLight: _PointLight2["default"],
	    SpotLight: _SpotLight2["default"],
	    DirectionalLight: _DirectionalLight2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var DirectionalLight = (function (_React$Component) {
	    _inherits(DirectionalLight, _React$Component);

	    function DirectionalLight() {
	        _classCallCheck(this, DirectionalLight);

	        _get(Object.getPrototypeOf(DirectionalLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(DirectionalLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;

	            var renderDiffuse = diffuse && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(diffuse))))()
	            });

	            var renderSpecular = specular && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(specular))))()
	            });

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderLight, _extends({
	                    type: "hemispheric"
	                }, this.props)),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            source: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	        },
	        enumerable: true
	    }]);

	    return DirectionalLight;
	})(_react2["default"].Component);

	exports["default"] = DirectionalLight;
	module.exports = exports["default"];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var PointLight = (function (_React$Component) {
	    _inherits(PointLight, _React$Component);

	    function PointLight() {
	        _classCallCheck(this, PointLight);

	        _get(Object.getPrototypeOf(PointLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(PointLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;

	            var renderDiffuse = diffuse && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(diffuse))))()
	            });

	            var renderSpecular = specular && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(specular))))()
	            });

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderLight, {
	                    type: "point"
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	        },
	        enumerable: true
	    }]);

	    return PointLight;
	})(_react2["default"].Component);

	exports["default"] = PointLight;
	module.exports = exports["default"];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var SpotLight = (function (_React$Component) {
	    _inherits(SpotLight, _React$Component);

	    function SpotLight() {
	        _classCallCheck(this, SpotLight);

	        _get(Object.getPrototypeOf(SpotLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(SpotLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;

	            var renderDiffuse = diffuse && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(diffuse))))()
	            });

	            var renderSpecular = specular && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(specular))))()
	            });

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderLight, _extends({
	                    type: "spot"
	                }, this.props)),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            position: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            direction: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            angle: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            exponent: _react.PropTypes.number,
	            diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	        },
	        enumerable: true
	    }]);

	    return SpotLight;
	})(_react2["default"].Component);

	exports["default"] = SpotLight;
	module.exports = exports["default"];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(21)["default"];

	var _inherits = __webpack_require__(27)["default"];

	var _createClass = __webpack_require__(38)["default"];

	var _classCallCheck = __webpack_require__(41)["default"];

	var _toConsumableArray = __webpack_require__(65)["default"];

	var _bind = __webpack_require__(90)["default"];

	var _extends = __webpack_require__(2)["default"];

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(45);

	var _react2 = _interopRequireDefault(_react);

	var _babylonjs = __webpack_require__(91);

	var _babylonjs2 = _interopRequireDefault(_babylonjs);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var DirectionalLight = (function (_React$Component) {
	    _inherits(DirectionalLight, _React$Component);

	    function DirectionalLight() {
	        _classCallCheck(this, DirectionalLight);

	        _get(Object.getPrototypeOf(DirectionalLight.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(DirectionalLight, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diffuse = _props.diffuse;
	            var specular = _props.specular;
	            var children = _props.children;

	            var renderDiffuse = diffuse && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "diffuse",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(diffuse))))()
	            });

	            var renderSpecular = specular && _react2["default"].createElement(_systems.GenericProperty, {
	                propertyName: "specular",
	                onVal: new (_bind.apply(_babylonjs2["default"].Color3, [null].concat(_toConsumableArray(specular))))()
	            });

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderLight, _extends({
	                    type: "directional"
	                }, this.props)),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    renderDiffuse,
	                    renderSpecular,
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            direction: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            diffuse: _react.PropTypes.arrayOf(_react.PropTypes.number),
	            specular: _react.PropTypes.arrayOf(_react.PropTypes.number)
	        },
	        enumerable: true
	    }]);

	    return DirectionalLight;
	})(_react2["default"].Component);

	exports["default"] = DirectionalLight;
	module.exports = exports["default"];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FreeCamera = __webpack_require__(162);

	var _FreeCamera2 = _interopRequireDefault(_FreeCamera);

	var _ArcRotateCamera = __webpack_require__(163);

	var _ArcRotateCamera2 = _interopRequireDefault(_ArcRotateCamera);

	exports["default"] = {
	    FreeCamera: _FreeCamera2["default"],
	    ArcRotateCamera: _ArcRotateCamera2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 162 */
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

	var _AkkadAbstractComponent2 = __webpack_require__(51);

	var _AkkadAbstractComponent3 = _interopRequireDefault(_AkkadAbstractComponent2);

	var _systems = __webpack_require__(48);

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var PropTypes = _react2["default"].PropTypes;

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
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderCamera, {
	                    type: "free",
	                    target: target,
	                    initialPosition: initialPosition
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
	            target: PropTypes.arrayOf(PropTypes.number).isRequired
	        },
	        enumerable: true
	    }, {
	        key: "contextTypes",
	        value: {
	            appState: PropTypes.object,
	            actions: PropTypes.object
	        },
	        enumerable: true
	    }]);

	    return FreeCamera;
	})(_AkkadAbstractComponent3["default"]);

	exports["default"] = FreeCamera;
	module.exports = exports["default"];

/***/ },
/* 163 */
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

	var _systems = __webpack_require__(48);

	var _Entity = __webpack_require__(59);

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
	            var _props = this.props;
	            var target = _props.target;
	            var initialPosition = _props.initialPosition;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderCamera, {
	                    type: "arcRotate",
	                    target: target,
	                    initialPosition: initialPosition
	                })
	            );
	        }
	    }], [{
	        key: "propTypes",
	        value: {
	            target: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
	            initialPosition: _react.PropTypes.arrayOf(_react.PropTypes.number)
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
/* 164 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(18)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Sphere = __webpack_require__(166);

	var _Sphere2 = _interopRequireDefault(_Sphere);

	var _Box = __webpack_require__(167);

	var _Box2 = _interopRequireDefault(_Box);

	var _Disc = __webpack_require__(168);

	var _Disc2 = _interopRequireDefault(_Disc);

	var _Ground = __webpack_require__(169);

	var _Ground2 = _interopRequireDefault(_Ground);

	var _Cylinder = __webpack_require__(170);

	var _Cylinder2 = _interopRequireDefault(_Cylinder);

	var _Torus = __webpack_require__(171);

	var _Torus2 = _interopRequireDefault(_Torus);

	exports["default"] = {
	    Sphere: _Sphere2["default"],
	    Box: _Box2["default"],
	    Disc: _Disc2["default"],
	    Ground: _Ground2["default"],
	    Cylinder: _Cylinder2["default"],
	    Torus: _Torus2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 166 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

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
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
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
/* 167 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

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
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "box",
	                    height: height,
	                    width: width
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
	            );
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
	            height: _react.PropTypes.number,
	            width: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Box;
	})(_react2["default"].Component);

	exports["default"] = Box;
	module.exports = exports["default"];

/***/ },
/* 168 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var Disc = (function (_React$Component) {
	    _inherits(Disc, _React$Component);

	    function Disc() {
	        _classCallCheck(this, Disc);

	        _get(Object.getPrototypeOf(Disc.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Disc, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$radius = _props.radius;
	            var radius = _props$radius === undefined ? 10 : _props$radius;
	            var _props$tessellation = _props.tessellation;
	            var tessellation = _props$tessellation === undefined ? 0 : _props$tessellation;
	            var _props$sideOrientation = _props.sideOrientation;
	            var sideOrientation = _props$sideOrientation === undefined ? null : _props$sideOrientation;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "disc",
	                    radius: radius,
	                    tessellation: tessellation,
	                    sideOrientation: sideOrientation
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
	            );
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
	            radius: _react.PropTypes.number,
	            tessellation: _react.PropTypes.number,
	            sideOrientation: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Disc;
	})(_react2["default"].Component);

	exports["default"] = Disc;
	module.exports = exports["default"];

/***/ },
/* 169 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

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
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "ground",
	                    width: width,
	                    height: height

	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
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
/* 170 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var Cylinder = (function (_React$Component) {
	    _inherits(Cylinder, _React$Component);

	    function Cylinder() {
	        _classCallCheck(this, Cylinder);

	        _get(Object.getPrototypeOf(Cylinder.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Cylinder, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var height = _props.height;
	            var diameterTop = _props.diameterTop;
	            var diameterBottom = _props.diameterBottom;
	            var tessellation = _props.tessellation;
	            var subdivisions = _props.subdivisions;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "cylinder",
	                    heigh: height,
	                    diameterTop: diameterTop,
	                    diameterBottom: diameterBottom,
	                    tessellation: tessellation,
	                    subdivisions: subdivisions
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
	            );
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
	            height: _react.PropTypes.number,
	            diameterTop: _react.PropTypes.number,
	            diameterBottom: _react.PropTypes.number,
	            tessellation: _react.PropTypes.number,
	            subdivisions: _react.PropTypes.any
	        },
	        enumerable: true
	    }]);

	    return Cylinder;
	})(_react2["default"].Component);

	exports["default"] = Cylinder;
	module.exports = exports["default"];

/***/ },
/* 171 */
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

	var _Entity = __webpack_require__(59);

	var _Entity2 = _interopRequireDefault(_Entity);

	var _EntityLoaded = __webpack_require__(60);

	var _EntityLoaded2 = _interopRequireDefault(_EntityLoaded);

	var _systems = __webpack_require__(48);

	var Torus = (function (_React$Component) {
	    _inherits(Torus, _React$Component);

	    function Torus() {
	        _classCallCheck(this, Torus);

	        _get(Object.getPrototypeOf(Torus.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Torus, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var diameter = _props.diameter;
	            var thickness = _props.thickness;
	            var tessellation = _props.tessellation;
	            var updatable = _props.updatable;
	            var sideOrientation = _props.sideOrientation;
	            var children = _props.children;

	            return _react2["default"].createElement(
	                _Entity2["default"],
	                null,
	                _react2["default"].createElement(_systems.RenderShape, {
	                    type: "torus",
	                    diameter: diameter,
	                    thickness: thickness,
	                    tessellation: tessellation,
	                    updatable: updatable,
	                    sideOrientation: sideOrientation
	                }),
	                _react2["default"].createElement(
	                    _EntityLoaded2["default"],
	                    null,
	                    children
	                )
	            );
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
	            diameter: _react.PropTypes.number,
	            thickness: _react.PropTypes.number,
	            tessellation: _react.PropTypes.number,
	            updatable: _react.PropTypes.bool,
	            sideOrientation: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);

	    return Torus;
	})(_react2["default"].Component);

	exports["default"] = Torus;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;