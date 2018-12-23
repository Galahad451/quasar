(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"],{

/***/ "0000":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.815694de.woff";

/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "044b":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "0707":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1526");
/* harmony import */ var _mixins_align_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5958");



var sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
  form: 14.777,
  'form-label': 21.777,
  'form-hide-underline': 9.333,
  'form-label-hide-underline': 16.333
};
/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [_mixins_align_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  directives: {
    Ripple: _directives_ripple_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  props: {
    type: String,
    loading: Boolean,
    disable: Boolean,
    label: [Number, String],
    noCaps: Boolean,
    noWrap: Boolean,
    icon: String,
    iconRight: String,
    round: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    dense: Boolean,
    noRipple: Boolean,
    tabindex: Number,
    to: [Object, String],
    replace: Boolean
  },
  computed: {
    style: function style() {
      if (this.size && !this.fab && !this.fabMini) {
        return {
          fontSize: this.size in sizes ? "".concat(sizes[this.size], "px") : this.size
        };
      }
    },
    isRectangle: function isRectangle() {
      return !this.isRound;
    },
    isRound: function isRound() {
      return this.round || this.fab || this.fabMini;
    },
    shape: function shape() {
      return "q-btn-".concat(this.isRound ? 'round' : 'rectangle');
    },
    isDisabled: function isDisabled() {
      return this.disable || this.loading;
    },
    hasRipple: function hasRipple() {
      return "mat" === 'mat' && !this.noRipple && !this.isDisabled;
    },
    computedTabIndex: function computedTabIndex() {
      return this.isDisabled ? -1 : this.tabindex || 0;
    },
    isLink: function isLink() {
      return this.type === 'a' || this.to !== void 0;
    },
    attrs: function attrs() {
      var att = {
        tabindex: this.computedTabIndex
      };

      if (this.type !== 'a') {
        att.type = this.type || 'button';
      }

      if (this.to !== void 0) {
        att.href = this.$router.resolve(this.to).href;
      }

      return att;
    },
    classes: function classes() {
      var cls = [this.shape];

      if (this.fab) {
        cls.push('q-btn-fab');
      } else if (this.fabMini) {
        cls.push('q-btn-fab-mini');
      }

      if (this.flat) {
        cls.push('q-btn-flat');
      } else if (this.outline) {
        cls.push('q-btn-outline');
      } else if (this.push) {
        cls.push('q-btn-push');
      }

      if (this.isDisabled) {
        cls.push('disabled');
      } else {
        cls.push('q-focusable q-hoverable');
        this.active && cls.push('active');
      }

      if (this.color) {
        if (this.flat || this.outline) {
          cls.push("text-".concat(this.textColor || this.color));
        } else {
          cls.push("bg-".concat(this.color));
          cls.push("text-".concat(this.textColor || 'white'));
        }
      } else if (this.textColor) {
        cls.push("text-".concat(this.textColor));
      }

      cls.push({
        'q-btn-no-uppercase': this.noCaps,
        'q-btn-rounded': this.rounded,
        'q-btn-dense': this.dense,
        'glossy': this.glossy
      });
      return cls;
    },
    innerClasses: function innerClasses() {
      var classes = [this.alignClass];
      this.noWrap && classes.push('no-wrap', 'text-no-wrap');
      this.repeating && classes.push('non-selectable');
      return classes;
    }
  }
});

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("2444");
var utils = __webpack_require__("c532");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0a75":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1180":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b54a");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QList',
  props: {
    noBorder: Boolean,
    dark: Boolean,
    dense: Boolean,
    sparse: Boolean,
    striped: Boolean,
    stripedOdd: Boolean,
    separator: Boolean,
    insetSeparator: Boolean,
    multiline: Boolean,
    highlight: Boolean,
    link: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'no-border': this.noBorder,
        'q-list-dark': this.dark,
        'q-list-dense': this.dense,
        'q-list-sparse': this.sparse,
        'q-list-striped': this.striped,
        'q-list-striped-odd': this.stripedOdd,
        'q-list-separator': this.separator,
        'q-list-inset-separator': this.insetSeparator,
        'q-list-multiline': this.multiline,
        'q-list-highlight': this.highlight,
        'q-list-link': this.link
      };
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-list',
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "133b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/btn/QBtn.js
var QBtn = __webpack_require__("482e");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/alert/QAlert.js




/* harmony default export */ var QAlert = ({
  name: 'QAlert',
  props: {
    type: {
      type: String,
      validator: function validator(v) {
        return ['positive', 'negative', 'warning', 'info'].includes(v);
      }
    },
    color: {
      type: String,
      default: 'negative'
    },
    textColor: String,
    message: String,
    detail: String,
    icon: String,
    avatar: String,
    actions: Array
  },
  computed: {
    computedIcon: function computedIcon() {
      return this.icon ? this.icon : this.$q.icon.type[this.type || this.color];
    },
    classes: function classes() {
      return "bg-".concat(this.type || this.color, " text-").concat(this.textColor || 'white');
    }
  },
  render: function render(h) {
    var _this = this;

    var side = [],
        detail = this.$slots.detail || this.detail;

    if (this.avatar) {
      side.push(h('img', {
        staticClass: 'avatar',
        attrs: {
          src: this.avatar
        }
      }));
    } else if (this.icon || this.type) {
      side.push(h(QIcon["a" /* default */], {
        props: {
          name: this.computedIcon
        }
      }));
    }

    return h('div', [h('div', {
      staticClass: 'q-alert row no-wrap shadow-2',
      'class': this.classes
    }, [side.length ? h('div', {
      staticClass: 'q-alert-side col-auto row flex-center'
    }, side) : null, h('div', {
      staticClass: 'q-alert-content col self-center'
    }, [h('div', this.$slots.default || this.message), detail ? h('div', {
      staticClass: 'q-alert-detail'
    }, [detail]) : null]), this.actions && this.actions.length ? h('div', {
      staticClass: 'q-alert-actions col-auto gutter-xs column flex-center'
    }, this.actions.map(function (action) {
      return h('div', {
        staticClass: 'full-width'
      }, [h(QBtn["a" /* default */], {
        staticClass: 'full-width',
        props: {
          flat: true,
          dense: true,
          align: 'left',
          icon: action.icon,
          label: action.closeBtn === true ? typeof action.label === 'string' ? action.label : _this.$q.i18n.label.close : action.label
        },
        on: {
          click: function click() {
            return action.handler();
          }
        }
      })]);
    })) : null])]);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/uid.js
var uid = __webpack_require__("68c2");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/clone.js
/* harmony default export */ var clone = (function (data) {
  var s = JSON.stringify(data);

  if (s) {
    return JSON.parse(s);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/plugins/notify.js







var defaults = {};
var positionList = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'bottom', 'left', 'right', 'center'];

function init(_ref) {
  var Vue = _ref.Vue;
  var node = document.createElement('div');
  document.body.appendChild(node);
  this.__vm = new Vue({
    name: 'QNotifications',
    data: {
      notifs: {
        center: [],
        left: [],
        right: [],
        top: [],
        'top-left': [],
        'top-right': [],
        bottom: [],
        'bottom-left': [],
        'bottom-right': []
      }
    },
    methods: {
      add: function add(config) {
        var _this = this;

        if (!config) {
          console.error('Notify: parameter required');
          return false;
        }

        var notif = Object.assign({}, defaults, typeof config === 'string' ? {
          message: config
        } : clone(config));

        if (notif.position) {
          if (!positionList.includes(notif.position)) {
            console.error("Notify: wrong position: ".concat(notif.position));
            return false;
          }
        } else {
          notif.position = 'bottom';
        }

        notif.__uid = Object(uid["a" /* default */])();

        if (notif.timeout === void 0) {
          notif.timeout = 5000;
        }

        var close = function close() {
          _this.remove(notif);
        };

        if (config.actions) {
          notif.actions = config.actions.map(function (item) {
            var handler = item.handler,
                action = clone(item);
            action.handler = typeof handler === 'function' ? function () {
              handler();
              !item.noDismiss && close();
            } : function () {
              return close();
            };
            return action;
          });
        }

        if (typeof config.onDismiss === 'function') {
          notif.onDismiss = config.onDismiss;
        }

        if (notif.closeBtn) {
          var btn = [{
            closeBtn: true,
            label: notif.closeBtn,
            handler: close
          }];
          notif.actions = notif.actions ? notif.actions.concat(btn) : btn;
        }

        if (notif.timeout) {
          notif.__timeout = setTimeout(function () {
            close();
          }, notif.timeout + 1000);
        }

        var action = notif.position.indexOf('top') > -1 ? 'unshift' : 'push';
        this.notifs[notif.position][action](notif);
        return close;
      },
      remove: function remove(notif) {
        if (notif.__timeout) {
          clearTimeout(notif.__timeout);
        }

        var index = this.notifs[notif.position].indexOf(notif);

        if (index !== -1) {
          var ref = this.$refs["notif_".concat(notif.__uid)];

          if (ref && ref.$el) {
            var el = ref.$el;
            el.style.left = "".concat(el.offsetLeft, "px");
            el.style.width = getComputedStyle(el).width;
          }

          this.notifs[notif.position].splice(index, 1);

          if (typeof notif.onDismiss === 'function') {
            notif.onDismiss();
          }
        }
      }
    },
    render: function render(h) {
      var _this2 = this;

      return h('div', {
        staticClass: 'q-notifications'
      }, positionList.map(function (pos) {
        var vert = ['left', 'center', 'right'].includes(pos) ? 'center' : pos.indexOf('top') > -1 ? 'top' : 'bottom',
            align = pos.indexOf('left') > -1 ? 'start' : pos.indexOf('right') > -1 ? 'end' : 'center',
            classes = ['left', 'right'].includes(pos) ? "items-".concat(pos === 'left' ? 'start' : 'end', " justify-center") : pos === 'center' ? 'flex-center' : "items-".concat(align);
        return h('transition-group', {
          key: pos,
          staticClass: "q-notification-list q-notification-list-".concat(vert, " fixed column ").concat(classes),
          tag: 'div',
          props: {
            name: "q-notification-".concat(pos),
            mode: 'out-in'
          }
        }, _this2.notifs[pos].map(function (notif) {
          return h(QAlert, {
            ref: "notif_".concat(notif.__uid),
            key: notif.__uid,
            staticClass: 'q-notification',
            props: notif
          }, [notif.message]);
        }));
      }));
    }
  });

  this.__vm.$mount(node);
}

/* harmony default export */ var notify = __webpack_exports__["a"] = ({
  create: function create(opts) {
    if (platform["c" /* isSSR */]) {
      return function () {};
    }

    return this.__vm.add(opts);
  },
  setDefaults: function setDefaults(opts) {
    Object.assign(defaults, opts);
  },
  install: function install(args) {
    if (platform["c" /* isSSR */]) {
      args.$q.notify = function () {};

      args.$q.notify.setDefaults = function () {};

      return;
    }

    init.call(this, args);
    args.cfg.notify && this.setDefaults(args.cfg.notify);
    args.$q.notify = this.create.bind(this);
    args.$q.notify.setDefaults = this.setDefaults;
  }
});

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1526":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b18c");


function showRipple(evt, el, _ref) {
  var stop = _ref.stop,
      center = _ref.center;

  if (stop) {
    evt.stopPropagation();
  }

  var container = document.createElement('span'),
      animNode = document.createElement('span'),
      size = el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight,
      unit = "".concat(center ? size : size * 2, "px"),
      offset = el.getBoundingClientRect();
  container.appendChild(animNode);
  container.className = 'q-ripple-container';
  animNode.className = 'q-ripple-animation';
  animNode.style.width = unit;
  animNode.style.height = unit;
  el.appendChild(container);
  var x, y;

  if (center) {
    x = y = 0;
  } else {
    var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_0__[/* position */ "e"])(evt);
    x = pos.left - offset.left - size;
    y = pos.top - offset.top - size;
  }

  animNode.classList.add('q-ripple-animation-enter');
  animNode.classList.add('q-ripple-animation-visible');
  animNode.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scale3d(0, 0, 0)");
  setTimeout(function () {
    animNode.classList.remove('q-ripple-animation-enter');
    animNode.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scale3d(1, 1, 1)");
    setTimeout(function () {
      animNode.classList.remove('q-ripple-animation-visible');
      setTimeout(function () {
        container.remove();
      }, 300);
    }, 300);
  }, 10);
}

function shouldAbort(_ref2) {
  var mat = _ref2.mat,
      ios = _ref2.ios;
  return mat && "mat" !== 'mat' || ios && "mat" !== 'ios';
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ripple',
  inserted: function inserted(el, _ref3) {
    var value = _ref3.value,
        modifiers = _ref3.modifiers;

    if (shouldAbort(modifiers)) {
      return;
    }

    var ctx = {
      enabled: value !== false,
      modifiers: {
        stop: modifiers.stop,
        center: modifiers.center
      },
      click: function click(evt) {
        if (ctx.enabled && evt.detail !== -1) {
          showRipple(evt, el, ctx.modifiers);
        }
      },
      keyup: function keyup(evt) {
        if (ctx.enabled && evt.keyCode === 13) {
          showRipple(evt, el, ctx.modifiers);
        }
      }
    };
    el.__qripple = ctx;
    el.addEventListener('click', ctx.click, false);
    el.addEventListener('keyup', ctx.keyup, false);
  },
  update: function update(el, _ref4) {
    var value = _ref4.value,
        _ref4$modifiers = _ref4.modifiers,
        stop = _ref4$modifiers.stop,
        center = _ref4$modifiers.center;
    var ctx = el.__qripple;

    if (ctx) {
      ctx.enabled = value !== false;
      ctx.modifiers = {
        stop: stop,
        center: center
      };
    }
  },
  unbind: function unbind(el, _ref5) {
    var modifiers = _ref5.modifiers;
    var ctx = el.__qripple;

    if (ctx && !shouldAbort(modifiers)) {
      el.removeEventListener('click', ctx.click, false);
      el.removeEventListener('keyup', ctx.keyup, false);
      delete el.__qripple;
    }
  }
});

/***/ }),

/***/ "1528":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTarget; });
/* unused harmony export getScrollHeight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollPosition; });
/* unused harmony export getHorizontalScrollPosition */
/* unused harmony export animScrollTo */
/* unused harmony export setScrollPosition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasScrollbar; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("abcf");



function getScrollTarget(el) {
  return el.closest('.scroll,.scroll-y,.overflow-auto') || window;
}
function getScrollHeight(el) {
  return (el === window ? document.body : el).scrollHeight;
}
function getScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
  }

  return scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
  }

  return scrollTarget.scrollLeft;
}
function animScrollTo(el, to, duration) {
  if (duration <= 0) {
    return;
  }

  var pos = getScrollPosition(el);
  requestAnimationFrame(function () {
    setScroll(el, pos + (to - pos) / Math.max(16, duration) * 16);

    if (el.scrollTop !== to) {
      animScrollTo(el, to, duration - 16);
    }
  });
}

function setScroll(scrollTarget, offset) {
  if (scrollTarget === window) {
    document.documentElement.scrollTop = offset;
    document.body.scrollTop = offset;
    return;
  }

  scrollTarget.scrollTop = offset;
}

function setScrollPosition(scrollTarget, offset, duration) {
  if (duration) {
    animScrollTo(scrollTarget, offset, duration);
    return;
  }

  setScroll(scrollTarget, offset);
}
var size;
function getScrollbarWidth() {
  if (size !== undefined) {
    return size;
  }

  var inner = document.createElement('p'),
      outer = document.createElement('div');
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(inner, {
    width: '100%',
    height: '200px'
  });
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__[/* css */ "a"])(outer, {
    position: 'absolute',
    top: '0px',
    left: '0px',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el) {
  var onY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-y'])) : el.scrollWidth > el.clientWidth && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-x']));
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  getScrollTarget: getScrollTarget,
  getScrollHeight: getScrollHeight,
  getScrollPosition: getScrollPosition,
  animScrollTo: animScrollTo,
  setScrollPosition: setScrollPosition,
  getScrollbarWidth: getScrollbarWidth,
  hasScrollbar: hasScrollbar
});

/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1679":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routerLinkEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return routerLinkProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return evt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLinkMixin; });
/* harmony import */ var _plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a60d");

var routerLinkEventName = 'qrouterlinkclick';
var evt = null;

if (!_plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isSSR */ "c"]) {
  try {
    evt = new Event(routerLinkEventName);
  } catch (e) {
    evt = document.createEvent('Event');
    evt.initEvent(routerLinkEventName, true, false);
  }
}

var routerLinkProps = {
  to: [String, Object],
  exact: Boolean,
  append: Boolean,
  replace: Boolean,
  event: [String, Array],
  activeClass: String,
  exactActiveClass: String
};

var RouterLinkMixin = {
  props: routerLinkProps,
  data: function data() {
    return {
      routerLinkEventName: routerLinkEventName
    };
  }
};

/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1731":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QBtnGroup',
  props: {
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean
  },
  computed: {
    classes: function classes() {
      var _this = this;

      return ['outline', 'flat', 'rounded', 'push'].filter(function (t) {
        return _this[t];
      }).map(function (t) {
        return "q-btn-group-".concat(t);
      }).join(' ');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-btn-group row no-wrap inline',
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "177b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export humanStorageSize */
/* unused harmony export capitalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeToInterval; });
/* unused harmony export pad */
var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
function humanStorageSize(bytes) {
  var u = 0;

  while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }

  return "".concat(bytes.toFixed(1), " ").concat(units[u]);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function between(v, min, max) {
  if (max <= min) {
    return min;
  }

  return Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }

  var size = max - min + 1;
  var index = min + (v - min) % size;

  if (index < min) {
    index = size + index;
  }

  return index === 0 ? 0 : index;
}
function pad(v) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var val = '' + v;
  return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  humanStorageSize: humanStorageSize,
  capitalize: capitalize,
  between: between,
  normalizeToInterval: normalizeToInterval,
  pad: pad
});

/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "19aa":
/***/ (function(module) {

module.exports = {"a":"0.17.17"};

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1e55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QListHeader',
  props: {
    inset: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-list-header',
      'class': {
        'q-list-header-inset': this.inset
      }
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "2040":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d263");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _observables_QResizeObservable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("363b");
/* harmony import */ var _mixins_can_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("559e");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QLayoutHeader',
  mixins: [_mixins_can_render_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]],
  inject: {
    layout: {
      default: function _default() {
        console.error('QLayoutHeader needs to be child of QLayout');
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    }
  },
  data: function data() {
    return {
      size: 0,
      revealed: true
    };
  },
  watch: {
    value: function value(val) {
      this.__update('space', val);

      this.__updateLocal('revealed', true);

      this.layout.__animate();
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    reveal: function reveal(val) {
      if (!val) {
        this.__updateLocal('revealed', this.value);
      }
    },
    revealed: function revealed(val) {
      this.layout.__animate();

      this.$emit('reveal', val);
    },
    'layout.scroll': function layoutScroll(scroll) {
      if (!this.reveal) {
        return;
      }

      this.__updateLocal('revealed', scroll.direction === 'up' || scroll.position <= this.revealOffset || scroll.position - scroll.inflexionPosition < 100);
    }
  },
  computed: {
    fixed: function fixed() {
      return this.reveal || this.layout.view.indexOf('H') > -1 || this.layout.container;
    },
    offset: function offset() {
      if (!this.canRender || !this.value) {
        return 0;
      }

      if (this.fixed) {
        return this.revealed ? this.size : 0;
      }

      var offset = this.size - this.layout.scroll.position;
      return offset > 0 ? offset : 0;
    },
    computedClass: function computedClass() {
      return {
        'fixed-top': this.fixed,
        'absolute-top': !this.fixed,
        'q-layout-header-hidden': !this.canRender || !this.value || this.fixed && !this.revealed
      };
    },
    computedStyle: function computedStyle() {
      var view = this.layout.rows.top,
          css = {};

      if (view[0] === 'l' && this.layout.left.space) {
        css[this.$q.i18n.rtl ? 'right' : 'left'] = "".concat(this.layout.left.size, "px");
      }

      if (view[2] === 'r' && this.layout.right.space) {
        css[this.$q.i18n.rtl ? 'left' : 'right'] = "".concat(this.layout.right.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    return h('header', {
      staticClass: 'q-layout-header q-layout-marginal q-layout-transition',
      'class': this.computedClass,
      style: this.computedStyle
    }, [h(_observables_QResizeObservable_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      props: {
        debounce: 0
      },
      on: {
        resize: this.__onResize
      }
    }), this.$slots.default]);
  },
  created: function created() {
    this.layout.instances.header = this;

    this.__update('space', this.value);

    this.__update('offset', this.offset);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.layout.instances.header === this) {
      this.layout.instances.header = null;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  methods: {
    __onResize: function __onResize(_ref) {
      var height = _ref.height;

      this.__updateLocal('size', height);

      this.__update('size', height);
    },
    __update: function __update(prop, val) {
      if (this.layout.header[prop] !== val) {
        this.layout.header[prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    }
  }
});

/***/ }),

/***/ "2054":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/input-frame.js
var input_frame = __webpack_require__("cd88");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/mixins/parent-field.js
/* harmony default export */ var parent_field = ({
  inject: {
    field: {
      from: '__field',
      default: null
    }
  },
  props: {
    noParentField: Boolean
  },
  watch: {
    noParentField: function noParentField(val) {
      if (!this.field) {
        return;
      }

      this.field[val ? '__registerInput' : '__unregisterInput'](this);
    }
  },
  beforeMount: function beforeMount() {
    if (!this.noParentField && this.field) {
      this.field.__registerInput(this);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.noParentField && this.field) {
      this.field.__unregisterInput(this);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/input-frame/QInputFrame.js




/* harmony default export */ var QInputFrame = __webpack_exports__["a"] = ({
  name: 'QInputFrame',
  mixins: [input_frame["a" /* default */], parent_field],
  props: {
    focused: Boolean,
    length: Number,
    focusable: Boolean,
    additionalLength: Boolean
  },
  computed: {
    hasStackLabel: function hasStackLabel() {
      return typeof this.stackLabel === 'string' && this.stackLabel.length > 0;
    },
    hasLabel: function hasLabel() {
      return this.hasStackLabel || typeof this.floatLabel === 'string' && this.floatLabel.length > 0;
    },
    label: function label() {
      return this.hasStackLabel ? this.stackLabel : this.floatLabel;
    },
    addonClass: function addonClass() {
      return {
        'q-if-addon-visible': !this.hasLabel || this.labelIsAbove
      };
    },
    classes: function classes() {
      var cls = [{
        'q-if-has-label': this.label,
        'q-if-focused': this.focused,
        'q-if-error': this.hasError,
        'q-if-warning': this.hasWarning,
        'q-if-disabled': this.disable,
        'q-if-readonly': this.readonly,
        'q-if-focusable': this.focusable && !this.disable,
        'q-if-inverted': this.isInverted,
        'q-if-inverted-light': this.isInvertedLight,
        'q-if-light-color': this.lightColor,
        'q-if-dark': this.dark,
        'q-if-hide-underline': this.isHideUnderline,
        'q-if-standard': this.isStandard,
        'q-if-has-content': this.hasContent
      }];
      var color = this.hasError ? 'negative' : this.hasWarning ? 'warning' : this.color;

      if (this.isInverted) {
        cls.push("bg-".concat(color));
        cls.push("text-".concat(this.isInvertedLight ? 'black' : 'white'));
      } else if (color) {
        cls.push("text-".concat(color));
      }

      return cls;
    }
  },
  methods: {
    __onClick: function __onClick(e) {
      this.$emit('click', e);
    },
    __onMouseDown: function __onMouseDown(e) {
      var _this = this;

      !this.disable && this.$nextTick(function () {
        return _this.$emit('focus', e);
      });
    },
    __additionalHidden: function __additionalHidden(item, hasError, hasWarning, length) {
      if (item.condition !== void 0) {
        return item.condition === false;
      }

      return item.content !== void 0 && !item.content === length > 0 || item.error !== void 0 && !item.error === hasError || item.warning !== void 0 && !item.warning === hasWarning;
    },
    __baHandler: function __baHandler(evt, item) {
      if (!item.allowPropagation) {
        evt.stopPropagation();
      }

      if (item.handler) {
        item.handler(evt);
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'q-if row no-wrap relative-position',
      'class': this.classes,
      attrs: {
        tabindex: this.focusable && !this.disable ? 0 : -1
      },
      on: {
        click: this.__onClick
      }
    }, [h('div', {
      staticClass: 'q-if-baseline'
    }, '|'), this.before && this.before.map(function (item) {
      return h(QIcon["a" /* default */], {
        key: "b".concat(item.icon),
        staticClass: 'q-if-control q-if-control-before',
        'class': [item.class, {
          hidden: _this2.__additionalHidden(item, _this2.hasError, _this2.hasWarning, _this2.length)
        }],
        props: {
          name: item.icon
        },
        nativeOn: {
          mousedown: _this2.__onMouseDown,
          touchstart: _this2.__onMouseDown,
          click: function click(e) {
            _this2.__baHandler(e, item);
          }
        }
      });
    }) || void 0, h('div', {
      staticClass: 'q-if-inner col column'
    }, [h('div', {
      staticClass: 'row no-wrap relative-position'
    }, [this.prefix && h('span', {
      staticClass: 'q-if-addon q-if-addon-left',
      'class': this.addonClass,
      domProps: {
        innerHTML: this.prefix
      }
    }) || void 0, this.hasLabel && h('div', {
      staticClass: 'q-if-label',
      'class': {
        'q-if-label-above': this.labelIsAbove
      }
    }, [h('div', {
      staticClass: 'q-if-label-inner ellipsis',
      domProps: {
        innerHTML: this.label
      }
    })]) || void 0].concat(this.$slots.default).concat([this.suffix && h('span', {
      staticClass: 'q-if-addon q-if-addon-right',
      'class': this.addonClass,
      domProps: {
        innerHTML: this.suffix
      }
    }) || void 0])), this.hasLabel && h('div', {
      staticClass: 'q-if-label-spacer',
      domProps: {
        innerHTML: this.label
      }
    }) || void 0]), this.after && this.after.map(function (item) {
      return h(QIcon["a" /* default */], {
        key: "a".concat(item.icon),
        staticClass: 'q-if-control',
        'class': [item.class, {
          hidden: _this2.__additionalHidden(item, _this2.hasError, _this2.hasWarning, _this2.length)
        }],
        props: {
          name: item.icon
        },
        nativeOn: {
          mousedown: _this2.__onMouseDown,
          touchstart: _this2.__onMouseDown,
          click: function click(e) {
            _this2.__baHandler(e, item);
          }
        }
      });
    }) || void 0].concat(this.$slots.after));
  }
});

/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "2259":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8a9a261c.woff2";

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "278c":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("c135");

var iterableToArrayLimit = __webpack_require__("9b42");

var nonIterableRest = __webpack_require__("c240");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2828":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b18c");



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: {
      required: true
    },
    label: String,
    leftLabel: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    keepColor: Boolean,
    dark: Boolean,
    disable: Boolean,
    readonly: Boolean,
    noFocus: Boolean,
    checkedIcon: String,
    uncheckedIcon: String
  },
  computed: {
    classes: function classes() {
      return [this.__kebabTag, {
        disabled: this.disable,
        reverse: this.leftLabel,
        'q-focusable': this.focusable
      }];
    },
    innerClasses: function innerClasses() {
      if (this.isTrue || this.isIndeterminate) {
        return ['active', "text-".concat(this.color)];
      } else {
        var color = this.keepColor ? this.color : this.dark ? 'light' : 'faded';
        return "text-".concat(color);
      }
    },
    focusable: function focusable() {
      return !this.noFocus && !this.disable && !this.readonly;
    },
    tabindex: function tabindex() {
      return this.focusable ? 0 : -1;
    }
  },
  methods: {
    __update: function __update(value) {
      var _this = this;

      var ref = this.$refs.ripple;

      if (ref) {
        ref.classList.add('active');
        setTimeout(function () {
          ref.classList.remove('active');
        }, 10);
      }

      this.$emit('input', value);
      this.$nextTick(function () {
        if (JSON.stringify(value) !== JSON.stringify(_this.value)) {
          _this.$emit('change', value);
        }
      });
    },
    __handleKeyDown: function __handleKeyDown(e) {
      if ([13, 32].includes(Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_2__[/* getEventKey */ "a"])(e))) {
        this.toggle(e, false);
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'q-option cursor-pointer no-outline row inline no-wrap items-center',
      'class': this.classes,
      attrs: {
        tabindex: this.tabindex
      },
      on: {
        click: this.toggle,
        focus: function focus() {
          _this2.$emit('focus');
        },
        blur: function blur() {
          _this2.$emit('blur');
        },
        keydown: this.__handleKeyDown
      },
      directives: this.__kebabTag === 'q-toggle' && !this.disable && !this.readonly ? [{
        name: 'touch-swipe',
        modifiers: {
          horizontal: true
        },
        value: this.__swipe
      }] : null
    }, [h('div', {
      staticClass: 'q-option-inner relative-position',
      'class': this.innerClasses
    }, [h('input', {
      attrs: {
        type: 'checkbox'
      },
      on: {
        change: this.toggle
      }
    }), this.$q.platform.is.desktop ? h('div', {
      staticClass: 'q-focus-helper',
      'class': this.__kebabTag === 'q-radio' ? 'q-focus-helper-round' : 'q-focus-helper-rounded'
    }) : null, this.__getContent(h)]), this.label ? h('span', {
      staticClass: 'q-option-label',
      domProps: {
        innerHTML: this.label
      }
    }) : null, this.$slots.default]);
  }
});

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "28c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b18c");





function getDirection(mod) {
  var dir = {};
  ['left', 'right', 'up', 'down', 'horizontal', 'vertical'].forEach(function (direction) {
    if (mod[direction]) {
      dir[direction] = true;
    }
  });

  if (Object.keys(dir).length === 0) {
    return {
      left: true,
      right: true,
      up: true,
      down: true,
      horizontal: true,
      vertical: true
    };
  }

  if (dir.horizontal) {
    dir.left = dir.right = true;
  }

  if (dir.vertical) {
    dir.up = dir.down = true;
  }

  if (dir.left && dir.right) {
    dir.horizontal = true;
  }

  if (dir.up && dir.down) {
    dir.vertical = true;
  }

  return dir;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'touch-swipe',
  bind: function bind(el, binding) {
    var mouse = !binding.modifiers.noMouse;
    var ctx = {
      handler: binding.value,
      threshold: parseInt(binding.arg, 10) || 300,
      direction: getDirection(binding.modifiers),
      mouseStart: function mouseStart(evt) {
        if (Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_3__[/* leftClick */ "c"])(evt)) {
          document.addEventListener('mousemove', ctx.move);
          document.addEventListener('mouseup', ctx.mouseEnd);
          ctx.start(evt);
        }
      },
      mouseEnd: function mouseEnd(evt) {
        document.removeEventListener('mousemove', ctx.move);
        document.removeEventListener('mouseup', ctx.mouseEnd);
        ctx.end(evt);
      },
      start: function start(evt) {
        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_3__[/* position */ "e"])(evt);
        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          detected: false,
          abort: false
        };
        el.classList.add('q-touch');
      },
      move: function move(evt) {
        if (ctx.event.abort) {
          return;
        }

        if (new Date().getTime() - ctx.event.time > ctx.threshold) {
          ctx.event.abort = true;
          return;
        }

        if (ctx.event.detected) {
          evt.stopPropagation();
          evt.preventDefault();
          return;
        }

        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_3__[/* position */ "e"])(evt),
            distX = pos.left - ctx.event.x,
            absX = Math.abs(distX),
            distY = pos.top - ctx.event.y,
            absY = Math.abs(distY);

        if (absX === absY) {
          return;
        }

        ctx.event.detected = true;
        ctx.event.abort = !(ctx.direction.vertical && absX < absY || ctx.direction.horizontal && absX > absY || ctx.direction.up && absX < absY && distY < 0 || ctx.direction.down && absX < absY && distY > 0 || ctx.direction.left && absX > absY && distX < 0 || ctx.direction.right && absX > absY && distX > 0);
        ctx.move(evt);
      },
      end: function end(evt) {
        el.classList.remove('q-touch');

        if (ctx.event.abort || !ctx.event.detected) {
          return;
        }

        var duration = new Date().getTime() - ctx.event.time;

        if (duration > ctx.threshold) {
          return;
        }

        evt.stopPropagation();
        evt.preventDefault();
        var direction,
            pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_3__[/* position */ "e"])(evt),
            distX = pos.left - ctx.event.x,
            absX = Math.abs(distX),
            distY = pos.top - ctx.event.y,
            absY = Math.abs(distY);

        if (absX >= absY) {
          if (absX < 50) {
            return;
          }

          direction = distX < 0 ? 'left' : 'right';
        } else {
          if (absY < 50) {
            return;
          }

          direction = distY < 0 ? 'up' : 'down';
        }

        if (ctx.direction[direction]) {
          ctx.handler({
            evt: evt,
            direction: direction,
            duration: duration,
            distance: {
              x: absX,
              y: absY
            }
          });
        }
      }
    };
    el.__qtouchswipe = ctx;

    if (mouse) {
      el.addEventListener('mousedown', ctx.mouseStart);
    }

    el.addEventListener('touchstart', ctx.start);
    el.addEventListener('touchmove', ctx.move);
    el.addEventListener('touchend', ctx.end);
  },
  update: function update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.__qtouchswipe.handler = binding.value;
    }
  },
  unbind: function unbind(el, binding) {
    var ctx = el.__qtouchswipe;

    if (!ctx) {
      return;
    }

    el.removeEventListener('mousedown', ctx.mouseStart);
    el.removeEventListener('touchstart', ctx.start);
    el.removeEventListener('touchmove', ctx.move);
    el.removeEventListener('touchend', ctx.end);
    delete el.__qtouchswipe;
  }
});

/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {}
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (false) { var key; }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "2f06":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.7b464e27.woff";

/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2f62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {}
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {}
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {}
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {}

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {}
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "3156":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("8f5a");

var _Object$getOwnPropertySymbols = __webpack_require__("afdb");

var _Object$keys = __webpack_require__("895c");

var defineProperty = __webpack_require__("9523");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QPage',
  inject: {
    pageContainer: {
      default: function _default() {
        console.error('QPage needs to be child of QPageContainer');
      }
    },
    layout: {}
  },
  props: {
    padding: Boolean,
    styleFn: Function
  },
  computed: {
    style: function style() {
      var offset = (this.layout.header.space ? this.layout.header.size : 0) + (this.layout.footer.space ? this.layout.footer.size : 0);

      if (typeof this.styleFn === 'function') {
        return this.styleFn(offset);
      }

      var minHeight = this.layout.container ? this.layout.containerHeight - offset + 'px' : offset ? "calc(100vh - ".concat(offset, "px)") : "100vh";
      return {
        minHeight: minHeight
      };
    },
    classes: function classes() {
      if (this.padding) {
        return 'layout-padding';
      }
    }
  },
  render: function render(h) {
    return h('main', {
      staticClass: 'q-layout-page',
      style: this.style,
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOlCnqEu92Fr1MmWUlfBBc-.cf6613d1.woff";

/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "363b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b18c");
/* harmony import */ var _mixins_can_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("559e");
/* harmony import */ var _plugins_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a60d");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QResizeObservable',
  mixins: [_mixins_can_render_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]],
  props: {
    debounce: {
      type: Number,
      default: 100
    }
  },
  data: function data() {
    return this.hasObserver ? {} : {
      url: this.$q.platform.is.ie ? null : 'about:blank'
    };
  },
  methods: {
    onResize: function onResize() {
      this.timer = null;

      if (!this.$el || !this.$el.parentNode) {
        return;
      }

      var parent = this.$el.parentNode,
          size = {
        width: parent.offsetWidth,
        height: parent.offsetHeight
      };

      if (size.width === this.size.width && size.height === this.size.height) {
        return;
      }

      this.size = size;
      this.$emit('resize', this.size);
    },
    trigger: function trigger(immediately) {
      if (immediately === true || this.debounce === 0) {
        this.onResize();
      } else if (!this.timer) {
        this.timer = setTimeout(this.onResize, this.debounce);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.canRender || this.hasObserver) {
      return;
    }

    return h('object', {
      style: this.style,
      attrs: {
        tabindex: -1,
        type: 'text/html',
        data: this.url,
        'aria-hidden': true
      },
      on: {
        load: function load() {
          _this.$el.contentDocument.defaultView.addEventListener('resize', _this.trigger, _utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* listenOpts */ "d"].passive);

          _this.trigger(true);
        }
      }
    });
  },
  beforeCreate: function beforeCreate() {
    this.size = {
      width: -1,
      height: -1
    };

    if (_plugins_platform_js__WEBPACK_IMPORTED_MODULE_3__[/* isSSR */ "c"]) {
      return;
    }

    this.hasObserver = typeof ResizeObserver !== 'undefined';

    if (!this.hasObserver) {
      this.style = "".concat(this.$q.platform.is.ie ? 'visibility:hidden;' : '', "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;");
    }
  },
  mounted: function mounted() {
    if (this.hasObserver) {
      this.observer = new ResizeObserver(this.trigger);
      this.observer.observe(this.$el.parentNode);
      return;
    }

    this.trigger(true);

    if (this.$q.platform.is.ie) {
      this.url = 'about:blank';
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);

    if (this.hasObserver) {
      this.$el.parentNode && this.observer.unobserve(this.$el.parentNode);
      return;
    }

    if (this.$el.contentDocument) {
      this.$el.contentDocument.defaultView.removeEventListener('resize', this.trigger, _utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* listenOpts */ "d"].passive);
    }
  }
});

/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "386d":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("214f")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "4487":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/observables/QResizeObservable.js
var QResizeObservable = __webpack_require__("363b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/observables/QWindowResizeObservable.js



/* harmony default export */ var QWindowResizeObservable = ({
  name: 'QWindowResizeObservable',
  props: {
    debounce: {
      type: Number,
      default: 80
    }
  },
  render: function render() {},
  methods: {
    trigger: function trigger() {
      if (this.debounce === 0) {
        this.emit();
      } else if (!this.timer) {
        this.timer = setTimeout(this.emit, this.debounce);
      }
    },
    emit: function emit(ssr) {
      this.timer = null;
      this.$emit('resize', {
        height: ssr ? 0 : window.innerHeight,
        width: ssr ? 0 : window.innerWidth
      });
    }
  },
  created: function created() {
    this.emit(platform["d" /* onSSR */]);
  },
  mounted: function mounted() {
    platform["b" /* fromSSR */] && this.emit();
    window.addEventListener('resize', this.trigger, utils_event["d" /* listenOpts */].passive);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    window.removeEventListener('resize', this.trigger, utils_event["d" /* listenOpts */].passive);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/can-render.js
var can_render = __webpack_require__("559e");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/layout/QLayoutFooter.js





/* harmony default export */ var QLayoutFooter = __webpack_exports__["a"] = ({
  name: 'QLayoutFooter',
  mixins: [can_render["a" /* default */]],
  inject: {
    layout: {
      default: function _default() {
        console.error('QLayoutFooter needs to be child of QLayout');
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    reveal: Boolean
  },
  data: function data() {
    return {
      size: 0,
      revealed: true,
      windowHeight: platform["d" /* onSSR */] || this.layout.container ? 0 : window.innerHeight
    };
  },
  watch: {
    value: function value(val) {
      this.__update('space', val);

      this.__updateLocal('revealed', true);

      this.layout.__animate();
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    reveal: function reveal(val) {
      if (!val) {
        this.__updateLocal('revealed', this.value);
      }
    },
    revealed: function revealed(val) {
      this.layout.__animate();

      this.$emit('reveal', val);
    },
    'layout.scroll': function layoutScroll() {
      this.__updateRevealed();
    },
    'layout.height': function layoutHeight() {
      this.__updateRevealed();
    },
    size: function size() {
      this.__updateRevealed();
    }
  },
  computed: {
    fixed: function fixed() {
      return this.reveal || this.layout.view.indexOf('F') > -1 || this.layout.container;
    },
    containerHeight: function containerHeight() {
      return this.layout.container ? this.layout.containerHeight : this.windowHeight;
    },
    offset: function offset() {
      if (!this.canRender || !this.value) {
        return 0;
      }

      if (this.fixed) {
        return this.revealed ? this.size : 0;
      }

      var offset = this.layout.scroll.position + this.containerHeight + this.size - this.layout.height;
      return offset > 0 ? offset : 0;
    },
    computedClass: function computedClass() {
      return {
        'fixed-bottom': this.fixed,
        'absolute-bottom': !this.fixed,
        'hidden': !this.value && !this.fixed,
        'q-layout-footer-hidden': !this.canRender || !this.value || this.fixed && !this.revealed
      };
    },
    computedStyle: function computedStyle() {
      var view = this.layout.rows.bottom,
          css = {};

      if (view[0] === 'l' && this.layout.left.space) {
        css[this.$q.i18n.rtl ? 'right' : 'left'] = "".concat(this.layout.left.size, "px");
      }

      if (view[2] === 'r' && this.layout.right.space) {
        css[this.$q.i18n.rtl ? 'left' : 'right'] = "".concat(this.layout.right.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    return h('footer', {
      staticClass: 'q-layout-footer q-layout-marginal q-layout-transition',
      'class': this.computedClass,
      style: this.computedStyle
    }, [h(QResizeObservable["a" /* default */], {
      props: {
        debounce: 0
      },
      on: {
        resize: this.__onResize
      }
    }), !this.layout.container && h(QWindowResizeObservable, {
      props: {
        debounce: 0
      },
      on: {
        resize: this.__onWindowResize
      }
    }) || void 0, this.$slots.default]);
  },
  created: function created() {
    this.layout.instances.footer = this;

    this.__update('space', this.value);

    this.__update('offset', this.offset);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.layout.instances.footer === this) {
      this.layout.instances.footer = null;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  methods: {
    __onResize: function __onResize(_ref) {
      var height = _ref.height;

      this.__updateLocal('size', height);

      this.__update('size', height);
    },
    __onWindowResize: function __onWindowResize(_ref2) {
      var height = _ref2.height;

      this.__updateLocal('windowHeight', height);
    },
    __update: function __update(prop, val) {
      if (this.layout.footer[prop] !== val) {
        this.layout.footer[prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    },
    __updateRevealed: function __updateRevealed() {
      if (!this.reveal) {
        return;
      }

      var _this$layout$scroll = this.layout.scroll,
          direction = _this$layout$scroll.direction,
          position = _this$layout$scroll.position,
          inflexionPosition = _this$layout$scroll.inflexionPosition;

      this.__updateLocal('revealed', direction === 'up' || position - inflexionPosition < 100 || this.layout.height - this.containerHeight - position - this.size < 300);
    }
  }
});

/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4679":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__("2259")) + ") format('woff2'), url(" + escape(__webpack_require__("bb0b")) + ") format('woff');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/node_modules/quasar-extras/material-icons/material-icons.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,iGAAoJ;CACrJ;;AAED;EACE,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,qBAAqB;EACrB,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;;EAEf,sCAAsC;EACtC,oCAAoC;EACpC,oCAAoC;EACpC,mCAAmC;;EAEnC,0BAA0B;EAC1B,mCAAmC;;EAEnC,qBAAqB;EACrB,sCAA8B;UAA9B,8BAA8B;CAC/B","file":"material-icons.css","sourcesContent":["@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2') format('woff2'), url('./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff') format('woff');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "46a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QPageContainer',
  inject: {
    layout: {
      default: function _default() {
        console.error('QPageContainer needs to be child of QLayout');
      }
    }
  },
  provide: {
    pageContainer: true
  },
  computed: {
    style: function style() {
      var css = {};

      if (this.layout.header.space) {
        css.paddingTop = "".concat(this.layout.header.size, "px");
      }

      if (this.layout.right.space) {
        css["padding".concat(this.$q.i18n.rtl ? 'Left' : 'Right')] = "".concat(this.layout.right.size, "px");
      }

      if (this.layout.footer.space) {
        css.paddingBottom = "".concat(this.layout.footer.size, "px");
      }

      if (this.layout.left.space) {
        css["padding".concat(this.$q.i18n.rtl ? 'Right' : 'Left')] = "".concat(this.layout.left.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-layout-page-container q-layout-transition',
      style: this.style
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "482e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f751");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _btn_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0707");
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("52b5");
/* harmony import */ var _spinner_QSpinner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b70a");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("177b");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("b18c");








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QBtn',
  mixins: [_btn_mixin_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]],
  props: {
    percentage: Number,
    darkPercentage: Boolean,
    waitForRipple: Boolean,
    repeatTimeout: [Number, Function]
  },
  computed: {
    hasPercentage: function hasPercentage() {
      return this.percentage !== void 0;
    },
    width: function width() {
      return "".concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_6__[/* between */ "a"])(this.percentage, 0, 100), "%");
    },
    events: function events() {
      var _this = this;

      return this.isDisabled || !this.repeatTimeout ? {
        click: this.click,
        keydown: this.__onKeyDown,
        keyup: this.__onKeyUp
      } : {
        mousedown: this.__startRepeat,
        touchstart: this.__startRepeat,
        keydown: function keydown(e) {
          _this.__onKeyDown(e, true);
        },
        mouseup: this.__endRepeat,
        touchend: this.__endRepeat,
        keyup: function keyup(e) {
          _this.__onKeyUp(e, true);
        },
        mouseleave: this.__abortRepeat,
        touchmove: this.__abortRepeat,
        blur: this.__abortRepeat
      };
    }
  },
  data: function data() {
    return {
      repeating: false,
      active: false
    };
  },
  methods: {
    click: function click(e) {
      var _this2 = this;

      this.__cleanup();

      if (this.to !== void 0 || this.isDisabled) {
        e && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_7__[/* stopAndPrevent */ "f"])(e);

        if (this.isDisabled) {
          return;
        }
      }

      if (e && e.detail !== -1 && this.type === 'submit') {
        Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_7__[/* stopAndPrevent */ "f"])(e);
        var ev = new MouseEvent('click', Object.assign({}, e, {
          detail: -1
        }));
        this.timer = setTimeout(function () {
          return _this2.$el && _this2.$el.dispatchEvent(ev);
        }, 200);
        return;
      }

      var go = function go() {
        _this2.$router[_this2.replace ? 'replace' : 'push'](_this2.to);
      };

      var trigger = function trigger() {
        if (!_this2.isDisabled) {
          _this2.$emit('click', e, go);

          _this2.to !== void 0 && e.navigate !== false && go();
        }
      };

      if (this.waitForRipple && this.hasRipple) {
        this.timer = setTimeout(trigger, 300);
      } else {
        trigger();
      }
    },
    __cleanup: function __cleanup() {
      clearTimeout(this.timer);
    },
    __onKeyDown: function __onKeyDown(e, repeat) {
      if (this.isDisabled || e.keyCode !== 13) {
        return;
      }

      this.active = true;
      repeat ? this.__startRepeat(e) : Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_7__[/* stopAndPrevent */ "f"])(e);
    },
    __onKeyUp: function __onKeyUp(e, repeat) {
      if (!this.active) {
        return;
      }

      this.active = false;

      if (this.isDisabled || e.keyCode !== 13) {
        return;
      }

      this[repeat ? '__endRepeat' : 'click'](e);
    },
    __startRepeat: function __startRepeat(e) {
      var _this3 = this;

      if (this.repeating) {
        return;
      }

      var setTimer = function setTimer() {
        _this3.timer = setTimeout(trigger, typeof _this3.repeatTimeout === 'function' ? _this3.repeatTimeout(_this3.repeatCount) : _this3.repeatTimeout);
      };

      var trigger = function trigger() {
        if (_this3.isDisabled) {
          return;
        }

        _this3.repeatCount += 1;
        e.repeatCount = _this3.repeatCount;

        _this3.$emit('click', e);

        setTimer();
      };

      this.repeatCount = 0;
      this.repeating = true;
      setTimer();
    },
    __abortRepeat: function __abortRepeat() {
      this.repeating = false;

      this.__cleanup();
    },
    __endRepeat: function __endRepeat(e) {
      if (!this.repeating) {
        return;
      }

      this.repeating = false;

      if (this.repeatCount) {
        this.repeatCount = 0;
      } else if (e.detail || e.keyCode) {
        e.repeatCount = 0;
        this.$emit('click', e);
      }

      this.__cleanup();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.__cleanup();
  },
  render: function render(h) {
    return h(this.isLink ? 'a' : 'button', {
      staticClass: 'q-btn inline relative-position q-btn-item non-selectable',
      'class': this.classes,
      style: this.style,
      attrs: this.attrs,
      on: this.events,
      directives: this.hasRipple ? [{
        name: 'ripple',
        value: true,
        modifiers: {
          center: this.isRound
        }
      }] : null
    }, ["mat" === 'ios' || this.$q.platform.is.desktop ? h('div', {
      staticClass: 'q-focus-helper'
    }) : null, this.loading && this.hasPercentage ? h('div', {
      staticClass: 'q-btn-progress absolute-full',
      'class': {
        'q-btn-dark-progress': this.darkPercentage
      },
      style: {
        width: this.width
      }
    }) : null, h('div', {
      staticClass: 'q-btn-inner row col items-center',
      'class': this.innerClasses
    }, this.loading ? [this.$slots.loading || h(_spinner_QSpinner_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])] : [this.icon ? h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      'class': {
        'on-left': this.label && this.isRectangle
      },
      props: {
        name: this.icon
      }
    }) : null, this.label && this.isRectangle ? h('div', [this.label]) : null, this.$slots.default, this.iconRight && this.isRectangle ? h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      staticClass: 'on-right',
      props: {
        name: this.iconRight
      }
    }) : null])]);
  }
});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("52b5");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b18c");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QChip',
  props: {
    small: Boolean,
    dense: Boolean,
    tag: Boolean,
    square: Boolean,
    floating: Boolean,
    pointing: {
      type: String,
      validator: function validator(v) {
        return ['up', 'right', 'down', 'left'].includes(v);
      }
    },
    color: String,
    textColor: String,
    icon: String,
    iconRight: String,
    avatar: String,
    closable: Boolean,
    detail: Boolean
  },
  computed: {
    classes: function classes() {
      var _this = this;

      var cls = [];
      this.pointing && cls.push("q-chip-pointing-".concat(this.pointing));
      ['tag', 'square', 'floating', 'pointing', 'small', 'dense'].forEach(function (prop) {
        _this[prop] && cls.push("q-chip-".concat(prop));
      });

      if (this.floating) {
        !this.dense && cls.push('q-chip-dense');
        !this.square && cls.push('q-chip-square');
      }

      if (this.color) {
        cls.push("bg-".concat(this.color));
        !this.textColor && cls.push("text-white");
      }

      if (this.textColor) {
        cls.push("text-".concat(this.textColor));
      }

      return cls;
    }
  },
  methods: {
    __onClick: function __onClick(e) {
      this.$emit('click', e);
    },
    __onMouseDown: function __onMouseDown(e) {
      this.$emit('focus', e);
    },
    __handleKeyDown: function __handleKeyDown(e) {
      if (this.closable && [8, 13, 32].includes(Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_4__[/* getEventKey */ "a"])(e))) {
        Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_4__[/* stopAndPrevent */ "f"])(e);
        this.$emit('hide');
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'q-chip row no-wrap inline items-center',
      'class': this.classes,
      on: {
        mousedown: this.__onMouseDown,
        touchstart: this.__onMouseDown,
        click: this.__onClick,
        keydown: this.__handleKeyDown
      }
    }, [this.icon || this.avatar ? h('div', {
      staticClass: 'q-chip-side q-chip-left row flex-center',
      'class': {
        'q-chip-detail': this.detail
      }
    }, [this.icon ? h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      staticClass: 'q-chip-icon',
      props: {
        name: this.icon
      }
    }) : this.avatar ? h('img', {
      attrs: {
        src: this.avatar
      }
    }) : null]) : null, h('div', {
      staticClass: 'q-chip-main ellipsis'
    }, this.$slots.default), this.iconRight ? h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      props: {
        name: this.iconRight
      },
      'class': this.closable ? 'on-right q-chip-icon' : 'q-chip-side q-chip-right'
    }) : null, this.closable ? h('div', {
      staticClass: 'q-chip-side q-chip-close q-chip-right row flex-center'
    }, [h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      props: {
        name: this.$q.icon.chip.close
      },
      staticClass: 'cursor-pointer',
      nativeOn: {
        click: function click(e) {
          e && e.stopPropagation();

          _this2.$emit('hide');
        }
      }
    })]) : null]);
  }
});

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "506f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f751");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bd60");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QItem',
  mixins: [_mixins_item_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]],
  props: {
    active: Boolean,
    link: Boolean
  },
  computed: {
    classes: function classes() {
      return [this.to !== void 0 ? 'q-link' : {
        active: this.active
      }, this.itemClasses];
    }
  },
  render: function render(h) {
    if (this.to !== void 0) {
      return h('router-link', {
        props: Object.assign({}, this.$props, {
          tag: 'a'
        }),
        'class': this.classes
      }, this.$slots.default);
    }

    return h(this.tag, {
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "525b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ecdd");
/* harmony import */ var _mixins_option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2828");
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("52b5");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QCheckbox',
  mixins: [_mixins_checkbox_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_option_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]],
  props: {
    toggleIndeterminate: Boolean,
    indeterminateValue: {
      default: null
    },
    indeterminateIcon: String
  },
  computed: {
    isIndeterminate: function isIndeterminate() {
      return this.value === void 0 || this.value === this.indeterminateValue;
    },
    checkedStyle: function checkedStyle() {
      return this.isTrue ? {
        transition: 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        opacity: 1,
        transform: 'scale(1)'
      } : {
        transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms',
        opacity: 0,
        transform: 'scale(0)'
      };
    },
    indeterminateStyle: function indeterminateStyle() {
      return this.isIndeterminate ? {
        transition: 'opacity 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        opacity: 1,
        transform: 'scale(1)'
      } : {
        transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms',
        opacity: 0,
        transform: 'scale(0)'
      };
    },
    uncheckedStyle: function uncheckedStyle() {
      return this.isFalse ? {
        opacity: 1
      } : {
        transition: 'opacity 650ms cubic-bezier(0.23, 1, 0.32, 1) 150ms',
        opacity: 0
      };
    }
  },
  methods: {
    __getContent: function __getContent(h) {
      return [h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'q-checkbox-icon cursor-pointer',
        props: {
          name: this.uncheckedIcon || this.$q.icon.checkbox.unchecked["mat"]
        },
        style: this.uncheckedStyle
      }), h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'q-checkbox-icon cursor-pointer absolute-full',
        props: {
          name: this.indeterminateIcon || this.$q.icon.checkbox.indeterminate["mat"]
        },
        style: this.indeterminateStyle
      }), h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        staticClass: 'q-checkbox-icon cursor-pointer absolute-full',
        props: {
          name: this.checkedIcon || this.$q.icon.checkbox.checked["mat"]
        },
        style: this.checkedStyle
      }),  true ? h('div', {
        ref: 'ripple',
        staticClass: 'q-radial-ripple'
      }) : undefined];
    }
  },
  beforeCreate: function beforeCreate() {
    this.__kebabTag = 'q-checkbox';
  }
});

/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");
var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "52b5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f559");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);



var prefix =  true ? 'md' : undefined;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QIcon',
  props: {
    name: String,
    color: String,
    size: String
  },
  computed: {
    classes: function classes() {
      var cls;
      var icon = this.name;

      if (!icon) {
        return '';
      } else if (/^fa[s|r|l|b]{0,1} /.test(icon) || icon.startsWith('icon-')) {
        cls = icon;
      } else if (icon.startsWith('bt-')) {
        cls = "bt ".concat(icon);
      } else if (/^ion-(md|ios|logo)/.test(icon)) {
        cls = "ionicons ".concat(icon);
      } else if (icon.startsWith('ion-')) {
        cls = "ionicons ion-".concat(prefix).concat(icon.substr(3));
      } else if (icon.startsWith('mdi-')) {
        cls = "mdi ".concat(icon);
      } else {
        cls = 'material-icons';
      }

      return this.color ? "".concat(cls, " text-").concat(this.color) : cls;
    },
    content: function content() {
      return this.classes.startsWith('material-icons') ? this.name.replace(/ /g, '_') : ' ';
    },
    style: function style() {
      if (this.size) {
        return {
          fontSize: this.size
        };
      }
    }
  },
  render: function render(h) {
    return h('i', {
      staticClass: 'q-icon',
      'class': this.classes,
      style: this.style,
      attrs: {
        'aria-hidden': true
      }
    }, [this.content, this.$slots.default]);
  }
});

/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "53fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_QSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5931");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTableColumns',
  props: {
    value: {
      type: Array,
      required: true
    },
    label: String,
    columns: {
      type: Array,
      required: true
    },
    color: String,
    dark: Boolean
  },
  computed: {
    computedOptions: function computedOptions() {
      return this.columns.filter(function (col) {
        return !col.required;
      }).map(function (col) {
        return {
          value: col.name,
          label: col.label
        };
      });
    }
  },
  render: function render(h) {
    var _this = this;

    return h(_select_QSelect_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      props: {
        multiple: true,
        toggle: true,
        value: this.value,
        options: this.computedOptions,
        displayValue: this.label || this.$q.i18n.table.columns,
        color: this.color,
        dark: this.dark,
        hideUnderline: true
      },
      on: {
        input: function input(v) {
          _this.$emit('input', v);
        },
        change: function change(v) {
          _this.$emit('change', v);
        }
      }
    });
  }
});

/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "559e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a60d");

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      canRender: !_plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__[/* onSSR */ "d"]
    };
  },
  mounted: function mounted() {
    this.canRender === false && (this.canRender = true);
  }
});

/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5931":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__("5d8b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/input.js
var input = __webpack_require__("d7db");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/input-frame.js
var input_frame = __webpack_require__("cd88");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/search/QSearch.js





/* harmony default export */ var QSearch = ({
  name: 'QSearch',
  mixins: [input_frame["a" /* default */], input["a" /* default */]],
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'search'
    },
    debounce: {
      type: Number,
      default: 300
    },
    icon: String,
    noIcon: Boolean,
    upperCase: Boolean,
    lowerCase: Boolean
  },
  data: function data() {
    return {
      model: this.value,
      childDebounce: false
    };
  },
  provide: function provide() {
    var _this = this;

    var set = function set(val) {
      if (_this.model !== val) {
        _this.model = val;
      }
    };

    return {
      __inputDebounce: {
        set: set,
        setNav: set,
        setChildDebounce: function setChildDebounce(v) {
          _this.childDebounce = v;
        }
      }
    };
  },
  watch: {
    value: function value(v) {
      this.model = v;
    },
    model: function model(val) {
      var _this2 = this;

      clearTimeout(this.timer);

      if (this.value === val) {
        return;
      }

      if (!val && val !== 0) {
        this.model = this.type === 'number' ? null : '';
      }

      this.timer = setTimeout(function () {
        _this2.$emit('input', _this2.model);
      }, this.debounceValue);
    }
  },
  computed: {
    debounceValue: function debounceValue() {
      return this.childDebounce ? 0 : this.debounce;
    },
    computedClearValue: function computedClearValue() {
      return this.isNumber && this.clearValue === 0 ? this.clearValue : this.clearValue || (this.type === 'number' ? null : '');
    },
    controlBefore: function controlBefore() {
      var before = (this.before || []).slice();

      if (!this.noIcon) {
        before.unshift({
          icon: this.icon || this.$q.icon.search.icon,
          handler: this.focus
        });
      }

      return before;
    },
    controlAfter: function controlAfter() {
      var after = (this.after || []).slice();

      if (this.isClearable) {
        after.push({
          icon: this.$q.icon.search["clear".concat(this.isInverted ? 'Inverted' : '')],
          handler: this.clear
        });
      }

      return after;
    }
  },
  methods: {
    clear: function clear(evt) {
      this.$refs.input.clear(evt);
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h(QInput["a" /* default */], {
      ref: 'input',
      staticClass: 'q-search',
      props: {
        value: this.model,
        type: this.type,
        autofocus: this.autofocus,
        placeholder: this.placeholder || this.$q.i18n.label.search,
        disable: this.disable,
        readonly: this.readonly,
        error: this.error,
        warning: this.warning,
        align: this.align,
        noParentField: this.noParentField,
        floatLabel: this.floatLabel,
        stackLabel: this.stackLabel,
        prefix: this.prefix,
        suffix: this.suffix,
        inverted: this.inverted,
        invertedLight: this.invertedLight,
        dark: this.dark,
        hideUnderline: this.hideUnderline,
        color: this.color,
        rows: this.rows,
        before: this.controlBefore,
        after: this.controlAfter,
        clearValue: this.clearValue,
        upperCase: this.upperCase,
        lowerCase: this.lowerCase
      },
      attrs: this.$attrs,
      on: {
        input: function input(v) {
          _this3.model = v;
        },
        focus: this.__onFocus,
        blur: this.__onBlur,
        keyup: this.__onKeyup,
        keydown: this.__onKeydown,
        click: this.__onClick,
        paste: this.__onPaste,
        clear: function clear(val) {
          _this3.$emit('clear', val);

          _this3.__emit();
        }
      }
    }, this.$slots.default);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/popover/QPopover.js + 2 modules
var QPopover = __webpack_require__("b5b8");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/list/QList.js
var QList = __webpack_require__("1180");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/list/QItem.js
var QItem = __webpack_require__("506f");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/list/QItemMain.js
var QItemMain = __webpack_require__("b8d9");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/list/QItemSide.js
var QItemSide = __webpack_require__("7d43");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/list/QItemWrapper.js




function push(child, h, name, slot, replace, conf) {
  var defaultProps = {
    props: {
      right: conf.right
    }
  };

  if (slot && replace) {
    child.push(h(name, defaultProps, slot));
    return;
  }

  var v = false;

  for (var p in conf) {
    if (conf.hasOwnProperty(p)) {
      v = conf[p];

      if (v !== void 0 && v !== true) {
        child.push(h(name, {
          props: conf
        }));
        break;
      }
    }
  }

  slot && child.push(h(name, defaultProps, slot));
}

/* harmony default export */ var QItemWrapper = ({
  name: 'QItemWrapper',
  props: {
    cfg: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    slotReplace: Boolean
  },
  render: function render(h) {
    var cfg = this.cfg,
        replace = this.slotReplace,
        child = [];
    push(child, h, QItemSide["a" /* default */], this.$slots.left, replace, {
      icon: cfg.icon,
      color: cfg.leftColor,
      avatar: cfg.avatar,
      letter: cfg.letter,
      image: cfg.image,
      inverted: cfg.leftInverted,
      textColor: cfg.leftTextColor
    });
    push(child, h, QItemMain["a" /* default */], this.$slots.main, replace, {
      label: cfg.label,
      sublabel: cfg.sublabel,
      labelLines: cfg.labelLines,
      sublabelLines: cfg.sublabelLines,
      inset: cfg.inset
    });
    push(child, h, QItemSide["a" /* default */], this.$slots.right, replace, {
      right: true,
      icon: cfg.rightIcon,
      color: cfg.rightColor,
      avatar: cfg.rightAvatar,
      letter: cfg.rightLetter,
      image: cfg.rightImage,
      stamp: cfg.stamp,
      inverted: cfg.rightInverted,
      textColor: cfg.rightTextColor
    });
    child.push(this.$slots.default);
    return h(QItem["a" /* default */], {
      attrs: this.$attrs,
      on: this.$listeners,
      props: cfg
    }, child);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("525b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/option.js
var mixins_option = __webpack_require__("2828");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/radio/QRadio.js



/* harmony default export */ var QRadio = ({
  name: 'QRadio',
  mixins: [mixins_option["a" /* default */]],
  props: {
    val: {
      required: true
    }
  },
  computed: {
    isTrue: function isTrue() {
      return this.value === this.val;
    }
  },
  methods: {
    toggle: function toggle(evt) {
      var blur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.disable || this.readonly) {
        return;
      }

      evt && Object(utils_event["f" /* stopAndPrevent */])(evt);
      blur && this.$el.blur();

      if (!this.isTrue) {
        this.__update(this.val);
      }
    },
    __getContent: function __getContent(h) {
      return [h(QIcon["a" /* default */], {
        staticClass: 'q-radio-unchecked cursor-pointer absolute-full',
        props: {
          name: this.uncheckedIcon || this.$q.icon.radio.unchecked["mat"]
        }
      }), h(QIcon["a" /* default */], {
        staticClass: 'q-radio-checked cursor-pointer absolute-full',
        props: {
          name: this.checkedIcon || this.$q.icon.radio.checked["mat"]
        }
      }),  true ? h('div', {
        ref: 'ripple',
        staticClass: 'q-radial-ripple'
      }) : undefined];
    }
  },
  beforeCreate: function beforeCreate() {
    this.__kebabTag = 'q-radio';
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/checkbox.js
var mixins_checkbox = __webpack_require__("ecdd");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/toggle/QToggle.js



/* harmony default export */ var QToggle = ({
  name: 'QToggle',
  mixins: [mixins_checkbox["a" /* default */], mixins_option["a" /* default */]],
  props: {
    icon: String
  },
  computed: {
    currentIcon: function currentIcon() {
      return (this.isTrue ? this.checkedIcon : this.uncheckedIcon) || this.icon;
    },
    iconColor: function iconColor() {
      return  false ? undefined : this.isTrue ? 'white' : 'dark';
    },
    baseClass: function baseClass() {
      if (false) {}
    }
  },
  methods: {
    __swipe: function __swipe(evt) {
      if (evt.direction === 'left') {
        if (this.isTrue) {
          this.toggle();
        }
      } else if (evt.direction === 'right') {
        if (this.isFalse) {
          this.toggle();
        }
      }
    },
    __getContent: function __getContent(h) {
      return [h('div', {
        staticClass: 'q-toggle-base',
        'class': this.baseClass
      }), h('div', {
        staticClass: 'q-toggle-handle row flex-center'
      }, [this.currentIcon ? h(QIcon["a" /* default */], {
        staticClass: 'q-toggle-icon',
        props: {
          name: this.currentIcon,
          color: this.iconColor
        }
      }) : null,  true ? h('div', {
        ref: 'ripple',
        staticClass: 'q-radial-ripple'
      }) : undefined])];
    }
  },
  beforeCreate: function beforeCreate() {
    this.__kebabTag = 'q-toggle';
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/input-frame/QInputFrame.js + 1 modules
var QInputFrame = __webpack_require__("2054");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/chip/QChip.js
var QChip = __webpack_require__("4bf4");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/format.js
var format = __webpack_require__("177b");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/mixins/keyboard-selection.js


/* harmony default export */ var keyboard_selection = ({
  data: function data() {
    return {
      keyboardIndex: 0,
      keyboardMoveDirection: false,
      keyboardMoveTimer: false
    };
  },
  watch: {
    keyboardIndex: function keyboardIndex(val) {
      var _this = this;

      if (this.$refs.popover && this.$refs.popover.showing && this.keyboardMoveDirection && val > -1) {
        this.$nextTick(function () {
          if (!_this.$refs.popover) {
            return;
          }

          var selected = _this.$refs.popover.$el.querySelector('.q-select-highlight');

          if (selected && selected.scrollIntoView) {
            if (selected.scrollIntoViewIfNeeded) {
              return selected.scrollIntoViewIfNeeded(false);
            }

            selected.scrollIntoView(_this.keyboardMoveDirection < 0);
          }
        });
      }
    }
  },
  methods: {
    __keyboardShow: function __keyboardShow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.keyboardIndex !== index) {
        this.keyboardIndex = index;
      }
    },
    __keyboardSetCurrentSelection: function __keyboardSetCurrentSelection(navigation) {
      if (this.keyboardIndex >= 0 && this.keyboardIndex <= this.keyboardMaxIndex) {
        this.__keyboardSetSelection(this.keyboardIndex, navigation);
      }
    },
    __keyboardHandleKey: function __keyboardHandleKey(e) {
      var key = Object(utils_event["a" /* getEventKey */])(e);

      switch (key) {
        case 38:
          this.__keyboardMoveCursor(-1, e);

          break;

        case 40:
          this.__keyboardMoveCursor(1, e);

          break;

        case 13:
          if (this.$refs.popover.showing) {
            Object(utils_event["f" /* stopAndPrevent */])(e);

            this.__keyboardSetCurrentSelection();

            return;
          }

          break;

        case 9:
          this.hide();
          break;
      }

      this.__keyboardCustomKeyHandle(key, e);
    },
    __keyboardMoveCursor: function __keyboardMoveCursor(offset, e) {
      var _this2 = this;

      Object(utils_event["f" /* stopAndPrevent */])(e);

      if (this.$refs.popover.showing) {
        clearTimeout(this.keyboardMoveTimer);

        var index = this.keyboardIndex,
            valid = this.__keyboardIsSelectableIndex || function () {
          return true;
        };

        do {
          index = Object(format["b" /* normalizeToInterval */])(index + offset, -1, this.keyboardMaxIndex);
        } while (index !== this.keyboardIndex && !valid(index));

        this.keyboardMoveDirection = index > this.keyboardIndex ? 1 : -1;
        this.keyboardMoveTimer = setTimeout(function () {
          _this2.keyboardMoveDirection = false;
        }, 500);
        this.keyboardIndex = index;
        return;
      }

      this.__keyboardShowTrigger();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/select/QSelect.js



















function defaultFilterFn(terms, obj) {
  return obj.label.toLowerCase().indexOf(terms) > -1;
}

/* harmony default export */ var QSelect = __webpack_exports__["a"] = ({
  name: 'QSelect',
  mixins: [input_frame["a" /* default */], keyboard_selection],
  props: {
    filter: [Function, Boolean],
    filterPlaceholder: String,
    radio: Boolean,
    placeholder: String,
    separator: Boolean,
    value: {
      required: true
    },
    multiple: Boolean,
    toggle: Boolean,
    chips: Boolean,
    options: {
      type: Array,
      required: true,
      validator: function validator(v) {
        return v.every(function (o) {
          return 'label' in o && 'value' in o;
        });
      }
    },
    chipsColor: String,
    chipsBgColor: String,
    displayValue: String,
    popupMaxHeight: String
  },
  data: function data() {
    return {
      model: this.multiple && Array.isArray(this.value) ? this.value.slice() : this.value,
      terms: '',
      focused: false
    };
  },
  watch: {
    value: function value(val) {
      this.model = this.multiple && Array.isArray(val) ? val.slice() : val;
    },
    visibleOptions: function visibleOptions() {
      this.__keyboardCalcIndex();
    }
  },
  computed: {
    optModel: function optModel() {
      var _this = this;

      if (this.multiple) {
        return this.model.length > 0 ? this.options.map(function (opt) {
          return _this.model.includes(opt.value);
        }) : this.options.map(function (opt) {
          return false;
        });
      }
    },
    visibleOptions: function visibleOptions() {
      var _this2 = this;

      var opts = this.options.map(function (opt, index) {
        return Object.assign({}, opt, {
          index: index
        });
      });

      if (this.filter && this.terms.length) {
        var lowerTerms = this.terms.toLowerCase();
        opts = opts.filter(function (opt) {
          return _this2.filterFn(lowerTerms, opt);
        });
      }

      return opts;
    },
    keyboardMaxIndex: function keyboardMaxIndex() {
      return this.visibleOptions.length - 1;
    },
    filterFn: function filterFn() {
      return typeof this.filter === 'boolean' ? defaultFilterFn : this.filter;
    },
    actualValue: function actualValue() {
      var _this3 = this;

      if (this.displayValue) {
        return this.displayValue;
      }

      if (!this.multiple) {
        var _opt = this.options.find(function (opt) {
          return opt.value === _this3.model;
        });

        return _opt ? _opt.label : '';
      }

      var opt = this.selectedOptions.map(function (opt) {
        return opt.label;
      });
      return opt.length ? opt.join(', ') : '';
    },
    computedClearValue: function computedClearValue() {
      return this.clearValue === void 0 ? this.multiple ? [] : null : this.clearValue;
    },
    isClearable: function isClearable() {
      return this.editable && this.clearable && JSON.stringify(this.computedClearValue) !== JSON.stringify(this.model);
    },
    selectedOptions: function selectedOptions() {
      var _this4 = this;

      if (this.multiple) {
        return this.length > 0 ? this.options.filter(function (opt) {
          return _this4.model.includes(opt.value);
        }) : [];
      }
    },
    hasChips: function hasChips() {
      return this.multiple && this.chips && this.length > 0;
    },
    length: function length() {
      return this.multiple ? this.model.length : [null, undefined, ''].includes(this.model) ? 0 : 1;
    },
    additionalLength: function additionalLength() {
      return this.displayValue && this.displayValue.length > 0;
    }
  },
  methods: {
    togglePopup: function togglePopup() {
      this.$refs.popover && this[this.$refs.popover.showing ? 'hide' : 'show']();
    },
    show: function show() {
      this.__keyboardCalcIndex();

      if (this.$refs.popover) {
        return this.$refs.popover.show();
      }
    },
    hide: function hide() {
      return this.$refs.popover ? this.$refs.popover.hide() : Promise.resolve();
    },
    reposition: function reposition() {
      var popover = this.$refs.popover;

      if (popover && popover.showing) {
        this.$nextTick(function () {
          return popover && popover.reposition();
        });
      }
    },
    __keyboardCalcIndex: function __keyboardCalcIndex() {
      var _this5 = this;

      this.keyboardIndex = -1;
      var sel = this.multiple ? this.selectedOptions.map(function (o) {
        return o.value;
      }) : [this.model];
      this.$nextTick(function () {
        var index = sel === void 0 ? -1 : Math.max(-1, _this5.visibleOptions.findIndex(function (opt) {
          return sel.includes(opt.value);
        }));

        if (index > -1) {
          _this5.keyboardMoveDirection = true;
          setTimeout(function () {
            _this5.keyboardMoveDirection = false;
          }, 500);

          _this5.__keyboardShow(index);
        }
      });
    },
    __keyboardCustomKeyHandle: function __keyboardCustomKeyHandle(key, e) {
      switch (key) {
        case 27:
          if (this.$refs.popover.showing) {
            this.hide();
          }

          break;

        case 13:
        case 32:
          if (!this.$refs.popover.showing) {
            this.show();
          }

          break;
      }
    },
    __keyboardShowTrigger: function __keyboardShowTrigger() {
      this.show();
    },
    __keyboardSetSelection: function __keyboardSetSelection(index) {
      var opt = this.visibleOptions[index];

      if (this.multiple) {
        this.__toggleMultiple(opt.value, opt.disable);
      } else {
        this.__singleSelect(opt.value, opt.disable);
      }
    },
    __keyboardIsSelectableIndex: function __keyboardIsSelectableIndex(index) {
      return index > -1 && index < this.visibleOptions.length && !this.visibleOptions[index].disable;
    },
    __mouseEnterHandler: function __mouseEnterHandler(e, index) {
      if (!this.keyboardMoveDirection) {
        this.keyboardIndex = index;
      }
    },
    __onFocus: function __onFocus() {
      if (this.disable || this.focused) {
        return;
      }

      this.focused = true;
      this.$emit('focus');
    },
    __onShow: function __onShow() {
      if (this.disable) {
        return;
      }

      this.__onFocus();

      if (this.filter && this.$refs.filter) {
        this.$refs.filter.focus();
        this.reposition();
      }
    },
    __onBlur: function __onBlur(e) {
      var _this6 = this;

      if (!this.focused) {
        return;
      }

      setTimeout(function () {
        var el = document.activeElement;

        if (!_this6.$refs.popover || !_this6.$refs.popover.showing || el !== document.body && !_this6.$refs.popover.$el.contains(el)) {
          _this6.__onClose();

          _this6.hide();
        }
      }, 1);
    },
    __onClose: function __onClose(keepFocus) {
      var _this7 = this;

      this.$nextTick(function () {
        if (JSON.stringify(_this7.model) !== JSON.stringify(_this7.value)) {
          _this7.$emit('change', _this7.model);
        }
      });
      this.terms = '';

      if (!this.focused) {
        return;
      }

      if (keepFocus) {
        this.$refs.input && this.$refs.input.$el && this.$refs.input.$el.focus();
        return;
      }

      this.focused = false;
      this.$emit('blur');
    },
    __singleSelect: function __singleSelect(val, disable) {
      if (disable) {
        return;
      }

      this.__emit(val);

      this.hide();
    },
    __toggleMultiple: function __toggleMultiple(value, disable) {
      if (disable) {
        return;
      }

      var model = this.model,
          index = model.indexOf(value);

      if (index > -1) {
        this.$emit('remove', {
          index: index,
          value: model.splice(index, 1)
        });
      } else {
        this.$emit('add', {
          index: model.length,
          value: value
        });
        model.push(value);
      }

      this.$emit('input', model);
    },
    __emit: function __emit(value) {
      var _this8 = this;

      this.$emit('input', value);
      this.$nextTick(function () {
        if (JSON.stringify(value) !== JSON.stringify(_this8.value)) {
          _this8.$emit('change', value);
        }
      });
    },
    __setModel: function __setModel(val, forceUpdate) {
      this.model = val || (this.multiple ? [] : null);
      this.$emit('input', this.model);

      if (forceUpdate || !this.$refs.popover || !this.$refs.popover.showing) {
        this.__onClose(forceUpdate);
      }
    },
    __getChipTextColor: function __getChipTextColor(optColor) {
      if (this.chipsColor) {
        return this.chipsColor;
      }

      if (this.isInvertedLight) {
        return this.invertedLight ? optColor || this.color : 'white';
      }

      if (this.isInverted) {
        return optColor || (this.invertedLight ? 'grey-10' : this.color);
      }

      return this.dark ? optColor || this.color : 'white';
    },
    __getChipBgColor: function __getChipBgColor(optColor) {
      if (this.chipsBgColor) {
        return this.chipsBgColor;
      }

      if (this.isInvertedLight) {
        return this.invertedLight ? 'grey-10' : optColor || this.color;
      }

      if (this.isInverted) {
        return this.invertedLight ? this.color : 'white';
      }

      return this.dark ? 'white' : optColor || this.color;
    }
  },
  render: function render(h) {
    var _this9 = this;

    var child = [];

    if (this.hasChips) {
      var el = h('div', {
        staticClass: 'col row items-center q-input-chips',
        'class': this.alignClass
      }, this.selectedOptions.map(function (opt, index) {
        return h(QChip["a" /* default */], {
          key: index,
          props: {
            small: true,
            closable: _this9.editable && !opt.disable,
            color: _this9.__getChipBgColor(opt.color),
            textColor: _this9.__getChipTextColor(opt.color),
            icon: opt.icon,
            iconRight: opt.rightIcon,
            avatar: opt.avatar
          },
          on: {
            hide: function hide() {
              _this9.__toggleMultiple(opt.value, _this9.disable || opt.disable);
            }
          },
          nativeOn: {
            click: function click(e) {
              e.stopPropagation();
            }
          }
        }, [h('div', {
          domProps: {
            innerHTML: opt.label
          }
        })]);
      }));
      child.push(el);
    } else {
      var _el = h('div', {
        staticClass: 'col q-input-target ellipsis',
        'class': this.fakeInputClasses,
        domProps: {
          innerHTML: this.fakeInputValue
        }
      });

      child.push(_el);
    }

    child.push(h(QPopover["a" /* default */], {
      ref: 'popover',
      staticClass: 'column no-wrap',
      'class': this.dark ? 'bg-dark' : null,
      props: {
        cover: true,
        keepOnScreen: true,
        disable: !this.editable,
        anchorClick: false,
        maxHeight: this.popupMaxHeight
      },
      slot: 'after',
      on: {
        show: this.__onShow,
        hide: function hide() {
          _this9.__onClose(true);
        }
      },
      nativeOn: {
        keydown: this.__keyboardHandleKey
      }
    }, [this.filter && h(QSearch, {
      ref: 'filter',
      staticClass: 'col-auto',
      style: 'padding: 10px;',
      props: {
        value: this.terms,
        placeholder: this.filterPlaceholder || this.$q.i18n.label.filter,
        debounce: 100,
        color: this.color,
        dark: this.dark,
        noParentField: true,
        noIcon: true
      },
      on: {
        input: function input(val) {
          _this9.terms = val;

          _this9.reposition();
        }
      }
    }) || void 0, this.visibleOptions.length && h(QList["a" /* default */], {
      staticClass: 'no-border scroll',
      props: {
        separator: this.separator,
        dark: this.dark
      }
    }, this.visibleOptions.map(function (opt, index) {
      return h(QItemWrapper, {
        key: index,
        'class': [opt.disable ? 'text-faded' : 'cursor-pointer', index === _this9.keyboardIndex ? 'q-select-highlight' : '', opt.disable ? '' : 'cursor-pointer', opt.className || ''],
        props: {
          cfg: opt,
          slotReplace: true,
          active: _this9.multiple ? void 0 : _this9.value === opt.value
        },
        nativeOn: {
          '!click': function click() {
            var action = _this9.multiple ? '__toggleMultiple' : '__singleSelect';

            _this9[action](opt.value, opt.disable);
          },
          mouseenter: function mouseenter(e) {
            !opt.disable && _this9.__mouseEnterHandler(e, index);
          }
        }
      }, [_this9.multiple ? h(_this9.toggle ? QToggle : QCheckbox["a" /* default */], {
        slot: _this9.toggle ? 'right' : 'left',
        props: {
          keepColor: true,
          color: opt.color || _this9.color,
          dark: _this9.dark,
          value: _this9.optModel[opt.index],
          disable: opt.disable,
          noFocus: true
        }
      }) : _this9.radio && h(QRadio, {
        slot: 'left',
        props: {
          keepColor: true,
          color: opt.color || _this9.color,
          dark: _this9.dark,
          value: _this9.value,
          val: opt.value,
          disable: opt.disable,
          noFocus: true
        }
      }) || void 0]);
    })) || void 0]));

    if (this.isClearable) {
      child.push(h(QIcon["a" /* default */], {
        slot: 'after',
        staticClass: 'q-if-control',
        props: {
          name: this.$q.icon.input["clear".concat(this.isInverted ? 'Inverted' : '')]
        },
        nativeOn: {
          click: this.clear
        }
      }));
    }

    child.push(h(QIcon["a" /* default */], {
      slot: 'after',
      staticClass: 'q-if-control',
      props: {
        name: this.$q.icon.input.dropdown
      }
    }));
    return h(QInputFrame["a" /* default */], {
      ref: 'input',
      staticClass: 'q-select',
      props: {
        prefix: this.prefix,
        suffix: this.suffix,
        stackLabel: this.stackLabel,
        floatLabel: this.floatLabel,
        error: this.error,
        warning: this.warning,
        disable: this.disable,
        readonly: this.readonly,
        inverted: this.inverted,
        invertedLight: this.invertedLight,
        dark: this.dark,
        hideUnderline: this.hideUnderline,
        before: this.before,
        after: this.after,
        color: this.color,
        noParentField: this.noParentField,
        focused: this.focused,
        focusable: true,
        length: this.length,
        additionalLength: this.additionalLength
      },
      nativeOn: {
        click: this.togglePopup,
        focus: this.__onFocus,
        blur: this.__onBlur,
        keydown: this.__keyboardHandleKey
      }
    }, child);
  }
});

/***/ }),

/***/ "5958":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);





var alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around'
},
    alignValues = Object.keys(alignMap);
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    align: {
      type: String,
      default: 'center',
      validator: function validator(v) {
        return alignValues.includes(v);
      }
    }
  },
  computed: {
    alignClass: function alignClass() {
      return "justify-".concat(alignMap[this.align]);
    }
  }
});

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5c6f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.381af09a.woff";

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-integer.js
var es6_number_is_integer = __webpack_require__("7cdf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/input-frame.js
var input_frame = __webpack_require__("cd88");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/input.js
var mixins_input = __webpack_require__("d7db");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/input/input-types.js
/* harmony default export */ var input_types = (['text', 'textarea', 'email', 'search', 'tel', 'file', 'number', 'password', 'url', 'time', 'date']);
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/frame-debounce.js
var frame_debounce = __webpack_require__("8e2f");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/format.js
var format = __webpack_require__("177b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/observables/QResizeObservable.js
var QResizeObservable = __webpack_require__("363b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/input-frame/QInputFrame.js + 1 modules
var QInputFrame = __webpack_require__("2054");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/spinner/QSpinner.js + 2 modules
var QSpinner = __webpack_require__("b70a");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/input/QInput.js














/* harmony default export */ var QInput = __webpack_exports__["a"] = ({
  name: 'QInput',
  mixins: [input_frame["a" /* default */], mixins_input["a" /* default */]],
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator: function validator(t) {
        return input_types.includes(t);
      }
    },
    align: {
      type: String,
      validator: function validator(v) {
        return ['left', 'center', 'right'].includes(v);
      }
    },
    noPassToggle: Boolean,
    numericKeyboardToggle: Boolean,
    readonly: Boolean,
    decimals: Number,
    step: Number,
    upperCase: Boolean,
    lowerCase: Boolean,
    initialShowPassword: Boolean
  },
  data: function data() {
    var _this = this;

    return {
      showPass: this.initialShowPassword,
      showNumber: true,
      model: this.value,
      watcher: null,
      autofilled: false,
      shadow: {
        val: this.model,
        set: this.__set,
        setNav: this.__set,
        loading: false,
        watched: 0,
        isEditable: function isEditable() {
          return _this.editable;
        },
        isDark: function isDark() {
          return _this.dark;
        },
        hasFocus: function hasFocus() {
          return document.activeElement === _this.$refs.input;
        },
        register: function register() {
          _this.shadow.watched += 1;

          _this.__watcherRegister();
        },
        unregister: function unregister() {
          _this.shadow.watched = Math.max(0, _this.shadow.watched - 1);

          _this.__watcherUnregister();
        },
        getEl: function getEl() {
          return _this.$refs.input;
        }
      }
    };
  },
  watch: {
    value: function value(v) {
      var vOldNum = parseFloat(this.model),
          vNewNum = parseFloat(v);

      if (!this.isNumber || this.isNumberError || isNaN(vOldNum) || isNaN(vNewNum) || vOldNum !== vNewNum) {
        this.model = v;
      }

      this.isNumberError = false;
      this.isNegZero = false;
    },
    isTextarea: function isTextarea(v) {
      this[v ? '__watcherRegister' : '__watcherUnregister']();
    },
    '$attrs.rows': function $attrsRows() {
      this.isTextarea && this.__updateArea();
    }
  },
  provide: function provide() {
    return {
      __input: this.shadow
    };
  },
  computed: {
    isNumber: function isNumber() {
      return this.type === 'number';
    },
    isPassword: function isPassword() {
      return this.type === 'password';
    },
    isTextarea: function isTextarea() {
      return this.type === 'textarea';
    },
    isLoading: function isLoading() {
      return this.loading || this.shadow.watched && this.shadow.loading;
    },
    keyboardToggle: function keyboardToggle() {
      return this.$q.platform.is.mobile && this.isNumber && this.numericKeyboardToggle;
    },
    inputType: function inputType() {
      if (this.isPassword) {
        return this.showPass && this.editable ? 'text' : 'password';
      }

      return this.isNumber ? this.showNumber || !this.editable ? 'number' : 'text' : this.type;
    },
    inputClasses: function inputClasses() {
      var classes = [];
      this.align && classes.push("text-".concat(this.align));
      this.autofilled && classes.push('q-input-autofill');
      return classes;
    },
    length: function length() {
      return this.model !== null && this.model !== undefined ? ('' + this.model).length : 0;
    },
    computedClearValue: function computedClearValue() {
      return this.isNumber && this.clearValue === 0 ? this.clearValue : this.clearValue || (this.isNumber ? null : '');
    },
    computedStep: function computedStep() {
      return this.step || (this.decimals ? Math.pow(10, -this.decimals) : 'any');
    },
    frameProps: function frameProps() {
      return {
        prefix: this.prefix,
        suffix: this.suffix,
        stackLabel: this.stackLabel,
        floatLabel: this.floatLabel,
        placeholder: this.placeholder,
        error: this.error,
        warning: this.warning,
        disable: this.disable,
        readonly: this.readonly,
        inverted: this.inverted,
        invertedLight: this.invertedLight,
        dark: this.dark,
        hideUnderline: this.hideUnderline,
        before: this.before,
        after: this.after,
        color: this.color,
        noParentField: this.noParentField,
        focused: this.focused,
        length: this.autofilled + this.length
      };
    }
  },
  methods: {
    togglePass: function togglePass() {
      this.showPass = !this.showPass;
      clearTimeout(this.timer);
      this.focus();
    },
    toggleNumber: function toggleNumber() {
      this.showNumber = !this.showNumber;
      clearTimeout(this.timer);
      this.focus();
    },
    __clearTimer: function __clearTimer() {
      var _this2 = this;

      this.$nextTick(function () {
        return clearTimeout(_this2.timer);
      });
    },
    __onAnimationStart: function __onAnimationStart(e) {
      if (e.animationName.indexOf('webkit-autofill-') === 0) {
        var value = e.animationName === 'webkit-autofill-on';

        if (value !== this.autofilled) {
          e.value = this.autofilled = value;
          e.el = this;
          return this.$emit('autofill', e);
        }
      }
    },
    __setModel: function __setModel(val) {
      clearTimeout(this.timer);
      this.focus();

      this.__set(this.isNumber && val === 0 ? val : val || (this.isNumber ? null : ''), true);
    },
    __set: function __set(e, forceUpdate) {
      var _this3 = this;

      var val = e && e.target ? e.target.value : e;

      if (this.isNumber) {
        this.isNegZero = 1 / val === -Infinity;
        var forcedValue = this.isNegZero ? -0 : val;
        this.model = val;
        val = parseFloat(val);

        if (isNaN(val) || this.isNegZero) {
          this.isNumberError = true;

          if (forceUpdate) {
            this.$emit('input', forcedValue);
            this.$nextTick(function () {
              if (String(1 / forcedValue) !== String(1 / _this3.value)) {
                _this3.$emit('change', forcedValue);
              }
            });
          }

          return;
        }

        this.isNumberError = false;

        if (Number.isInteger(this.decimals)) {
          val = parseFloat(val.toFixed(this.decimals));
        }
      } else {
        if (this.lowerCase) {
          val = val.toLowerCase();
        } else if (this.upperCase) {
          val = val.toUpperCase();
        }

        this.model = val;
      }

      this.$emit('input', val);

      if (forceUpdate) {
        this.$nextTick(function () {
          if (JSON.stringify(val) !== JSON.stringify(_this3.value)) {
            _this3.$emit('change', val);
          }
        });
      }
    },
    __updateArea: function __updateArea() {
      var shadow = this.$refs.shadow,
          input = this.$refs.input;

      if (shadow && input) {
        var sH = shadow.scrollHeight,
            h = Object(format["a" /* between */])(sH, shadow.offsetHeight, this.maxHeight || sH);
        input.style.height = "".concat(h, "px");
        input.style.overflowY = this.maxHeight && h < sH ? 'scroll' : 'hidden';
      }
    },
    __watcher: function __watcher(value) {
      if (this.isTextarea) {
        this.__updateArea();
      }

      if (this.shadow.watched) {
        this.shadow.val = value;
      }
    },
    __watcherRegister: function __watcherRegister() {
      if (!this.watcher) {
        this.watcher = this.$watch('model', this.__watcher);
      }
    },
    __watcherUnregister: function __watcherUnregister(forceUnregister) {
      if (this.watcher && (forceUnregister || !this.isTextarea && !this.shadow.watched)) {
        this.watcher();
        this.watcher = null;
      }
    },
    __getTextarea: function __getTextarea(h) {
      var attrs = Object.assign({
        rows: 1
      }, this.$attrs);
      return h('div', {
        staticClass: 'col row relative-position'
      }, [h(QResizeObservable["a" /* default */], {
        on: {
          resize: this.__updateArea
        }
      }), h('textarea', {
        ref: 'shadow',
        staticClass: 'col q-input-target q-input-shadow absolute-top',
        domProps: {
          value: this.model
        },
        attrs: attrs
      }), h('textarea', {
        ref: 'input',
        staticClass: 'col q-input-target q-input-area',
        attrs: Object.assign({}, attrs, {
          placeholder: this.inputPlaceholder,
          disabled: this.disable,
          readonly: this.readonly
        }),
        domProps: {
          value: this.model
        },
        on: {
          input: this.__set,
          focus: this.__onFocus,
          blur: this.__onInputBlur,
          keydown: this.__onKeydown,
          keyup: this.__onKeyup,
          paste: this.__onPaste
        }
      })]);
    },
    __getInput: function __getInput(h) {
      return h('input', {
        ref: 'input',
        staticClass: 'col q-input-target q-no-input-spinner ellipsis',
        'class': this.inputClasses,
        attrs: Object.assign({}, this.$attrs, {
          type: this.inputType,
          placeholder: this.inputPlaceholder,
          disabled: this.disable,
          readonly: this.readonly,
          step: this.computedStep
        }),
        domProps: {
          value: this.model
        },
        on: {
          input: this.__set,
          focus: this.__onFocus,
          blur: this.__onInputBlur,
          keydown: this.__onKeydown,
          keyup: this.__onKeyup,
          paste: this.__onPaste,
          animationstart: this.__onAnimationStart
        }
      });
    }
  },
  mounted: function mounted() {
    this.__updateArea = Object(frame_debounce["a" /* default */])(this.__updateArea);

    if (this.isTextarea) {
      this.__updateArea();

      this.__watcherRegister();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.__watcherUnregister(true);
  },
  render: function render(h) {
    return h(QInputFrame["a" /* default */], {
      staticClass: 'q-input',
      props: this.frameProps,
      on: {
        click: this.__onClick,
        focus: this.__onFocus,
        paste: this.__onPaste
      }
    }, [].concat(this.$slots.before).concat([this.isTextarea ? this.__getTextarea(h) : this.__getInput(h), !this.disable && this.isPassword && !this.noPassToggle && (this.initialShowPassword || this.length) && h(QIcon["a" /* default */], {
      slot: 'after',
      staticClass: 'q-if-control',
      props: {
        name: this.$q.icon.input[this.showPass ? 'showPass' : 'hidePass']
      },
      nativeOn: {
        mousedown: this.__clearTimer,
        touchstart: this.__clearTimer,
        click: this.togglePass
      }
    }) || void 0, this.editable && this.keyboardToggle && h(QIcon["a" /* default */], {
      slot: 'after',
      staticClass: 'q-if-control',
      props: {
        name: this.$q.icon.input[this.showNumber ? 'showNumber' : 'hideNumber']
      },
      nativeOn: {
        mousedown: this.__clearTimer,
        touchstart: this.__clearTimer,
        click: this.toggleNumber
      }
    }) || void 0, this.isClearable && h(QIcon["a" /* default */], {
      slot: 'after',
      staticClass: 'q-if-control',
      props: {
        name: this.$q.icon.input["clear".concat(this.isInverted ? 'Inverted' : '')]
      },
      nativeOn: {
        mousedown: this.__clearTimer,
        touchstart: this.__clearTimer,
        click: this.clear
      }
    }) || void 0, this.isLoading && (this.$slots.loading ? h('div', {
      staticClass: 'q-if-control',
      slot: 'after'
    }, this.$slots.loading) : h(QSpinner["a" /* default */], {
      slot: 'after',
      staticClass: 'q-if-control',
      props: {
        size: '24px'
      }
    })) || void 0]).concat(this.$slots.after).concat(this.$slots.default ? h('div', {
      staticClass: 'absolute-full no-pointer-events',
      slot: 'after'
    }, this.$slots.default) : void 0));
  }
});

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5fd5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.48461ea4.woff2";

/***/ }),

/***/ "60de":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOkCnqEu92Fr1MmgVxIIzQ.e9dbbe8a.woff";

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "62a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("55dd");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("52b5");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTh',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render: function render(h) {
    var _this = this;

    if (!this.props) {
      return h('td', {
        'class': {
          'q-table-col-auto-width': this.autoWidth
        }
      }, this.$slots.default);
    }

    var col;
    var name = this.$vnode.key,
        child = [].concat(this.$slots.default);

    if (name) {
      col = this.props.colsMap[name];

      if (!col) {
        return;
      }
    } else {
      col = this.props.col;
    }

    if (col.sortable) {
      var action = col.align === 'right' ? 'unshift' : 'push';
      child[action](h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        props: {
          name: this.$q.icon.table.arrowUp
        },
        staticClass: col.__iconClass
      }));
    }

    return h('th', {
      'class': [col.__thClass, {
        'q-table-col-auto-width': this.autoWidth
      }],
      on: col.sortable ? {
        click: function click() {
          _this.props.sort(col);
        }
      } : null
    }, child);
  }
});

/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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


/***/ }),

/***/ "66d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTr',
  props: {
    props: Object
  },
  render: function render(h) {
    return h('tr', !this.props || this.props.header ? {} : {
      'class': this.props.__trClass
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "66fb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOlCnqEu92Fr1MmSU5fBBc-.a1471d1d.woff";

/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "68c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b54");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
});

/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6f6c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOlCnqEu92Fr1MmYUtfBBc-.8c2ade50.woff";

/***/ }),

/***/ "7051":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/scroll.js
var utils_scroll = __webpack_require__("1528");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/observables/QScrollObservable.js



/* harmony default export */ var QScrollObservable = ({
  name: 'QScrollObservable',
  props: {
    debounce: Number
  },
  render: function render() {},
  data: function data() {
    return {
      pos: 0,
      dir: 'down',
      dirChanged: false,
      dirChangePos: 0
    };
  },
  methods: {
    getPosition: function getPosition() {
      return {
        position: this.pos,
        direction: this.dir,
        directionChanged: this.dirChanged,
        inflexionPosition: this.dirChangePos
      };
    },
    trigger: function trigger(immediately) {
      if (immediately === true || this.debounce === 0) {
        this.emit();
      } else if (!this.timer) {
        this.timer = this.debounce ? setTimeout(this.emit, this.debounce) : requestAnimationFrame(this.emit);
      }
    },
    emit: function emit() {
      var pos = Math.max(0, Object(utils_scroll["a" /* getScrollPosition */])(this.target)),
          delta = pos - this.pos,
          dir = delta < 0 ? 'up' : 'down';
      this.dirChanged = this.dir !== dir;

      if (this.dirChanged) {
        this.dir = dir;
        this.dirChangePos = this.pos;
      }

      this.timer = null;
      this.pos = pos;
      this.$emit('scroll', this.getPosition());
    }
  },
  mounted: function mounted() {
    this.target = Object(utils_scroll["b" /* getScrollTarget */])(this.$el.parentNode);
    this.target.addEventListener('scroll', this.trigger, utils_event["d" /* listenOpts */].passive);
    this.trigger(true);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.timer);
    this.target.removeEventListener('scroll', this.trigger, utils_event["d" /* listenOpts */].passive);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/observables/QResizeObservable.js
var QResizeObservable = __webpack_require__("363b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/layout/QLayout.js






/* harmony default export */ var QLayout = __webpack_exports__["a"] = ({
  name: 'QLayout',
  provide: function provide() {
    return {
      layout: this
    };
  },
  props: {
    container: Boolean,
    view: {
      type: String,
      default: 'hhh lpr fff',
      validator: function validator(v) {
        return /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase());
      }
    }
  },
  data: function data() {
    return {
      height: platform["d" /* onSSR */] ? 0 : window.innerHeight,
      width: platform["d" /* onSSR */] || this.container ? 0 : window.innerWidth,
      containerHeight: 0,
      scrollbarWidth: platform["d" /* onSSR */] ? 0 : Object(utils_scroll["c" /* getScrollbarWidth */])(),
      header: {
        size: 0,
        offset: 0,
        space: false
      },
      right: {
        size: 300,
        offset: 0,
        space: false
      },
      footer: {
        size: 0,
        offset: 0,
        space: false
      },
      left: {
        size: 300,
        offset: 0,
        space: false
      },
      scroll: {
        position: 0,
        direction: 'down'
      }
    };
  },
  computed: {
    rows: function rows() {
      var rows = this.view.toLowerCase().split(' ');
      return {
        top: rows[0].split(''),
        middle: rows[1].split(''),
        bottom: rows[2].split('')
      };
    },
    targetStyle: function targetStyle() {
      if (this.scrollbarWidth !== 0) {
        return defineProperty_default()({}, this.$q.i18n.rtl ? 'left' : 'right', "".concat(this.scrollbarWidth, "px"));
      }
    },
    targetChildStyle: function targetChildStyle() {
      if (this.scrollbarWidth !== 0) {
        var _ref2;

        return _ref2 = {}, defineProperty_default()(_ref2, this.$q.i18n.rtl ? 'right' : 'left', 0), defineProperty_default()(_ref2, this.$q.i18n.rtl ? 'left' : 'right', "-".concat(this.scrollbarWidth, "px")), defineProperty_default()(_ref2, "width", "calc(100% + ".concat(this.scrollbarWidth, "px)")), _ref2;
      }
    }
  },
  created: function created() {
    this.instances = {
      header: null,
      right: null,
      footer: null,
      left: null
    };
  },
  render: function render(h) {
    var layout = h('div', {
      staticClass: 'q-layout'
    }, [h(QScrollObservable, {
      on: {
        scroll: this.__onPageScroll
      }
    }), h(QResizeObservable["a" /* default */], {
      on: {
        resize: this.__onPageResize
      }
    }), this.$slots.default]);
    return this.container ? h('div', {
      staticClass: 'q-layout-container relative-position overflow-hidden'
    }, [h(QResizeObservable["a" /* default */], {
      on: {
        resize: this.__onContainerResize
      }
    }), h('div', {
      staticClass: 'absolute-full',
      style: this.targetStyle
    }, [h('div', {
      staticClass: 'overflow-auto',
      style: this.targetChildStyle
    }, [layout])])]) : layout;
  },
  methods: {
    __animate: function __animate() {
      var _this = this;

      if (this.timer) {
        clearTimeout(this.timer);
      } else {
        document.body.classList.add('q-layout-animate');
      }

      this.timer = setTimeout(function () {
        document.body.classList.remove('q-layout-animate');
        _this.timer = null;
      }, 150);
    },
    __onPageScroll: function __onPageScroll(data) {
      this.scroll = data;
      this.$emit('scroll', data);
    },
    __onPageResize: function __onPageResize(_ref3) {
      var height = _ref3.height,
          width = _ref3.width;
      var resized = false;

      if (this.height !== height) {
        resized = true;
        this.height = height;
        this.$emit('scrollHeight', height);

        this.__updateScrollbarWidth();
      }

      if (this.width !== width) {
        resized = true;
        this.width = width;
      }

      resized && this.$emit('resize', {
        height: height,
        width: width
      });
    },
    __onContainerResize: function __onContainerResize(_ref4) {
      var height = _ref4.height;

      if (this.containerHeight !== height) {
        this.containerHeight = height;

        this.__updateScrollbarWidth();
      }
    },
    __updateScrollbarWidth: function __updateScrollbarWidth() {
      if (this.container) {
        var width = this.height > this.containerHeight ? Object(utils_scroll["c" /* getScrollbarWidth */])() : 0;

        if (this.scrollbarWidth !== width) {
          this.scrollbarWidth = width;
        }
      }
    }
  }
});

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "79e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7cdf");
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("52b5");
/* harmony import */ var _mixins_can_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("559e");






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QField',
  mixins: [_mixins_can_render_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]],
  props: {
    inset: {
      type: String,
      validator: function validator(v) {
        return ['icon', 'label', 'full'].includes(v);
      }
    },
    label: String,
    count: {
      type: [Number, Boolean],
      default: false
    },
    error: Boolean,
    errorLabel: String,
    warning: Boolean,
    warningLabel: String,
    helper: String,
    icon: String,
    iconColor: String,
    dark: Boolean,
    orientation: {
      type: String,
      validator: function validator(v) {
        return ['vertical', 'horizontal'].includes(v);
      }
    },
    labelWidth: {
      type: [Number, String],
      default: 5,
      validator: function validator(val) {
        var v = parseInt(val, 10);
        return v > 0 && v < 13;
      }
    }
  },
  data: function data() {
    return {
      input: {}
    };
  },
  computed: {
    hasError: function hasError() {
      return this.input.error || this.error;
    },
    hasWarning: function hasWarning() {
      return !this.hasError && (this.input.warning || this.warning);
    },
    childHasLabel: function childHasLabel() {
      return this.input.floatLabel || this.input.stackLabel;
    },
    isDark: function isDark() {
      return this.input.dark || this.dark;
    },
    insetIcon: function insetIcon() {
      return ['icon', 'full'].includes(this.inset);
    },
    hasNoInput: function hasNoInput() {
      return this.canRender && (!this.input.$options || this.input.__needsBorder);
    },
    counter: function counter() {
      if (this.count) {
        var length = this.input.length || '0';
        return Number.isInteger(this.count) ? "".concat(length, " / ").concat(this.count) : length;
      }
    },
    classes: function classes() {
      return {
        'q-field-responsive': !this.isVertical && !this.isHorizontal,
        'q-field-vertical': this.isVertical,
        'q-field-horizontal': this.isHorizontal,
        'q-field-floating': this.childHasLabel,
        'q-field-no-label': !this.label && !this.$slots.label,
        'q-field-with-error': this.hasError,
        'q-field-with-warning': this.hasWarning,
        'q-field-dark': this.isDark,
        'q-field-no-input': this.hasNoInput
      };
    },
    computedLabelWidth: function computedLabelWidth() {
      return parseInt(this.labelWidth, 10);
    },
    isVertical: function isVertical() {
      return this.orientation === 'vertical' || this.computedLabelWidth === 12;
    },
    isHorizontal: function isHorizontal() {
      return this.orientation === 'horizontal';
    },
    labelClasses: function labelClasses() {
      return this.isVertical ? "col-12" : this.isHorizontal ? "col-".concat(this.labelWidth) : "col-xs-12 col-sm-".concat(this.labelWidth);
    },
    inputClasses: function inputClasses() {
      return this.isVertical ? "col-xs-12" : this.isHorizontal ? 'col' : 'col-xs-12 col-sm';
    },
    iconProps: function iconProps() {
      var prop = {
        name: this.icon
      };

      if (this.iconColor && !this.hasError && !this.hasWarning) {
        prop.color = this.iconColor;
      }

      return prop;
    },
    insetHasLabel: function insetHasLabel() {
      return ['label', 'full'].includes(this.inset);
    }
  },
  provide: function provide() {
    return {
      __field: this
    };
  },
  methods: {
    __registerInput: function __registerInput(vm) {
      this.input = vm;
    },
    __unregisterInput: function __unregisterInput(vm) {
      if (!vm || vm === this.input) {
        this.input = {};
      }
    },
    __getBottomContent: function __getBottomContent(h) {
      var label;

      if (this.hasError && (label = this.$slots['error-label'] || this.errorLabel)) {
        return h('div', {
          staticClass: 'q-field-error col'
        }, label);
      }

      if (this.hasWarning && (label = this.$slots['warning-label'] || this.warningLabel)) {
        return h('div', {
          staticClass: 'q-field-warning col'
        }, label);
      }

      if (label = this.$slots.helper || this.helper) {
        return h('div', {
          staticClass: 'q-field-helper col'
        }, label);
      }

      return h('div', {
        staticClass: 'col text-transparent'
      }, ['|']);
    },
    __hasBottom: function __hasBottom() {
      return this.$slots['error-label'] || this.errorLabel || this.$slots['warning-label'] || this.warningLabel || this.$slots.helper || this.helper || this.count;
    }
  },
  render: function render(h) {
    var label = this.$slots.label || this.label;
    return h('div', {
      staticClass: 'q-field row no-wrap items-start',
      'class': this.classes
    }, [this.icon ? h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      props: this.iconProps,
      staticClass: 'q-field-icon q-field-margin'
    }) : this.insetIcon ? h('div', {
      staticClass: 'q-field-icon'
    }) : null, h('div', {
      staticClass: 'row col'
    }, [label || this.insetHasLabel ? h('div', {
      staticClass: 'q-field-label q-field-margin',
      'class': this.labelClasses
    }, [h('div', {
      staticClass: 'q-field-label-inner row items-center'
    }, [this.$slots.label || this.label])]) : null, h('div', {
      staticClass: 'q-field-content',
      'class': this.inputClasses
    }, [this.$slots.default, this.__hasBottom() ? h('div', {
      staticClass: 'q-field-bottom row no-wrap'
    }, [this.__getBottomContent(h), this.counter ? h('div', {
      staticClass: 'q-field-counter col-auto'
    }, [this.counter]) : null]) : null])])]);
  }
});

/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "7b38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTd',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render: function render(h) {
    if (!this.props) {
      return h('td', {
        'class': {
          'q-table-col-auto-width': this.autoWidth
        }
      }, this.$slots.default);
    }

    var col;
    var name = this.$vnode.key;

    if (name) {
      col = this.props.colsMap[name];

      if (!col) {
        return;
      }
    } else {
      col = this.props.col;
    }

    return h('td', {
      'class': [col.__tdClass, {
        'q-table-col-auto-width': this.autoWidth
      }]
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7cdf":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__("5ca1");

$export($export.S, 'Number', { isInteger: __webpack_require__("9c12") });


/***/ }),

/***/ "7d2b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOmCnqEu92Fr1Mu4mxM.bafb105b.woff";

/***/ }),

/***/ "7d43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7514");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("52b5");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QItemSide',
  props: {
    right: Boolean,
    icon: String,
    letter: {
      type: String,
      validator: function validator(v) {
        return v.length === 1;
      }
    },
    inverted: Boolean,
    avatar: String,
    image: String,
    stamp: String,
    color: String,
    textColor: String
  },
  computed: {
    type: function type() {
      var _this = this;

      return ['icon', 'image', 'avatar', 'letter', 'stamp'].find(function (type) {
        return _this[type];
      });
    },
    classes: function classes() {
      var cls = ["q-item-side-".concat(this.right ? 'right' : 'left')];

      if (this.color && !this.icon && !this.letter) {
        cls.push("text-".concat(this.color));
      }

      return cls;
    },
    typeClasses: function typeClasses() {
      var cls = ["q-item-".concat(this.type)];

      if (this.color) {
        if (this.inverted && (this.icon || this.letter)) {
          cls.push("bg-".concat(this.color));
        } else if (!this.textColor) {
          cls.push("text-".concat(this.color));
        }
      }

      this.textColor && cls.push("text-".concat(this.textColor));

      if (this.inverted && (this.icon || this.letter)) {
        cls.push('q-item-inverted');
        cls.push('flex');
        cls.push('flex-center');
      }

      return cls;
    },
    imagePath: function imagePath() {
      return this.image || this.avatar;
    }
  },
  render: function render(h) {
    var child;

    if (this.type) {
      if (this.icon) {
        child = h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
          'class': this.inverted ? null : this.typeClasses,
          props: {
            name: this.icon
          }
        });

        if (this.inverted) {
          child = h('div', {
            'class': this.typeClasses
          }, [child]);
        }
      } else if (this.imagePath) {
        child = h('img', {
          'class': this.typeClasses,
          attrs: {
            src: this.imagePath
          }
        });
      } else {
        child = h('div', {
          'class': this.typeClasses
        }, [this.stamp || this.letter]);
      }
    }

    return h('div', {
      staticClass: 'q-item-side q-item-section',
      'class': this.classes
    }, [child, this.$slots.default]);
  }
});

/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "83f9":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: url(" + escape(__webpack_require__("60de")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + escape(__webpack_require__("66fb")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__("7d2b")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__("fcf3")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + escape(__webpack_require__("32f4")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + escape(__webpack_require__("6f6c")) + ") format('woff');\n}\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/node_modules/quasar-extras/roboto-font/roboto-font.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAAiE;CAClE;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAAkE;CACnE;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAA8D;CAC/D;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAAkE;CACnE;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAAkE;CACnE;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kDAAkE;CACnE","file":"roboto-font.css","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: url(./web-font/KFOkCnqEu92Fr1MmgVxIIzQ.woff) format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(./web-font/KFOlCnqEu92Fr1MmSU5fBBc-.woff) format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(./web-font/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(./web-font/KFOlCnqEu92Fr1MmEU9fBBc-.woff) format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(./web-font/KFOlCnqEu92Fr1MmWUlfBBc-.woff) format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: url(./web-font/KFOlCnqEu92Fr1MmYUtfBBc-.woff) format('woff');\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "8449":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__("386b")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8941":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.949a2b06.woff2";

/***/ }),

/***/ "895c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8c4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {}
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {}
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {}
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {}

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {}
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {}
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {}
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {}
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "8e2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (fn) {
  var wait = false,
      frame;

  function debounced() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (wait) {
      return;
    }

    wait = true;
    frame = requestAnimationFrame(function () {
      fn.apply(_this, args);
      wait = false;
    });
  }

  debounced.cancel = function () {
    window.cancelAnimationFrame(frame);
    wait = false;
  };

  return debounced;
});

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f5a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fde4");

/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9413":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1679");
/* harmony import */ var _tab_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c6da");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QRouteTab',
  mixins: [_tab_mixin_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__[/* RouterLinkMixin */ "a"]],
  inject: {
    selectTabRouter: {}
  },
  watch: {
    $route: function $route() {
      this.checkIfSelected();
    }
  },
  methods: {
    select: function select() {
      this.$emit('click', this.name);

      if (!this.disable) {
        this.$el.dispatchEvent(_utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__[/* routerLinkEvent */ "b"]);
        this.selectTabRouter({
          value: this.name,
          selected: true
        });
      }
    },
    checkIfSelected: function checkIfSelected() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$el.classList.contains('q-router-link-exact-active')) {
          _this.selectTabRouter({
            value: _this.name,
            selectable: true,
            exact: true
          });
        } else if (_this.$el.classList.contains('q-router-link-active')) {
          var path = _this.$router.resolve(_this.to, undefined, _this.append);

          _this.selectTabRouter({
            value: _this.name,
            selectable: true,
            priority: path.href.length
          });
        } else if (_this.active) {
          _this.selectTabRouter({
            value: null
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.checkIfSelected();
  },
  render: function render(h) {
    var _this2 = this;

    return h('router-link', {
      props: {
        tag: 'a',
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        event: _utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__[/* routerLinkEventName */ "c"],
        activeClass: 'q-router-link-active',
        exactActiveClass: 'q-router-link-exact-active'
      },
      attrs: {
        tabindex: -1
      },
      nativeOn: {
        click: this.select,
        keyup: function keyup(e) {
          return e.keyCode === 13 && _this2.select(e);
        }
      },
      staticClass: 'q-link q-tab column flex-center relative-position',
      'class': this.classes,
      directives:  true ? [{
        name: 'ripple'
      }] : undefined
    }, this.__getTabContent(h));
  }
});

/***/ }),

/***/ "9523":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("0a75");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b42":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("f4aa");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c12":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__("d3f4");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9e58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("551c");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f751");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("28a5");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _btn_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0707");
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("52b5");
/* harmony import */ var _QBtn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("482e");
/* harmony import */ var _QBtnGroup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1731");
/* harmony import */ var _popover_QPopover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("b5b8");








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QBtnDropdown',
  mixins: [_btn_mixin_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]],
  props: {
    value: Boolean,
    split: Boolean,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    popoverAnchor: {
      type: String,
      default: 'bottom right'
    },
    popoverSelf: {
      type: String,
      default: 'top right'
    }
  },
  data: function data() {
    return {
      showing: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.$refs.popover && this.$refs.popover[val ? 'show' : 'hide']();
    }
  },
  render: function render(h) {
    var _this = this;

    var Popover = h(_popover_QPopover_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      ref: 'popover',
      props: {
        disable: this.disable,
        fit: true,
        anchorClick: !this.split,
        anchor: this.popoverAnchor,
        self: this.popoverSelf
      },
      'class': this.contentClass,
      style: this.contentStyle,
      on: {
        show: function show(e) {
          _this.showing = true;

          _this.$emit('show', e);

          _this.$emit('input', true);
        },
        hide: function hide(e) {
          _this.showing = false;

          _this.$emit('hide', e);

          _this.$emit('input', false);
        }
      }
    }, this.$slots.default),
        Icon = h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      props: {
        name: this.$q.icon.input.dropdown
      },
      staticClass: 'transition-generic',
      'class': {
        'rotate-180': this.showing,
        'on-right': !this.split,
        'q-btn-dropdown-arrow': !this.split
      }
    }),
        Btn = h(_QBtn_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      props: Object.assign({}, this.$props, {
        iconRight: this.split ? this.iconRight : null
      }),
      'class': this.split ? 'q-btn-dropdown-current' : 'q-btn-dropdown q-btn-dropdown-simple',
      on: {
        click: function click(e) {
          _this.split && _this.hide();

          if (!_this.disable) {
            _this.$emit('click', e);
          }
        }
      }
    }, this.split ? null : [Icon, Popover]);

    if (!this.split) {
      return Btn;
    }

    return h(_QBtnGroup_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      props: {
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push
      },
      staticClass: 'q-btn-dropdown q-btn-dropdown-split no-wrap q-btn-item'
    }, [Btn, h(_QBtn_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      props: {
        disable: this.disable,
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        size: this.size,
        color: this.color,
        textColor: this.textColor,
        dense: this.dense,
        glossy: this.glossy,
        noRipple: this.noRipple,
        waitForRipple: this.waitForRipple
      },
      staticClass: 'q-btn-dropdown-arrow',
      on: {
        click: function click() {
          _this.toggle();
        }
      }
    }, [Icon]), [Popover]]);
  },
  methods: {
    toggle: function toggle() {
      return this.$refs.popover ? this.$refs.popover.toggle() : Promise.resolve();
    },
    show: function show() {
      return this.$refs.popover ? this.$refs.popover.show() : Promise.resolve();
    },
    hide: function hide() {
      return this.$refs.popover ? this.$refs.popover.hide() : Promise.resolve();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.value) {
        _this2.$refs.popover && _this2.$refs.popover.show();
      }
    });
  }
});

/***/ }),

/***/ "9fa6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "a114":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("83f9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e0999698", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "a60d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onSSR; });
/* unused harmony export hasWebStorage */
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f751");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3156");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);


var isSSR = typeof window === 'undefined';
var fromSSR = false;
var onSSR = isSSR;

function getMatch(userAgent, platformMatch) {
  var match = /(edge)\/([\w.]+)/.exec(userAgent) || /(opr)[\/]([\w.]+)/.exec(userAgent) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent) || /(chrome)[\/]([\w.]+)/.exec(userAgent) || /(iemobile)[\/]([\w.]+)/.exec(userAgent) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+)/.exec(userAgent) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) || /(msie) ([\w.]+)/.exec(userAgent) || userAgent.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(userAgent) || userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent) || [];
  return {
    browser: match[5] || match[3] || match[1] || '',
    version: match[2] || match[4] || '0',
    versionNumber: match[4] || match[2] || '0',
    platform: platformMatch[0] || ''
  };
}

function getPlatformMatch(userAgent) {
  return /(ipad)/.exec(userAgent) || /(ipod)/.exec(userAgent) || /(windows phone)/.exec(userAgent) || /(iphone)/.exec(userAgent) || /(kindle)/.exec(userAgent) || /(silk)/.exec(userAgent) || /(android)/.exec(userAgent) || /(win)/.exec(userAgent) || /(mac)/.exec(userAgent) || /(linux)/.exec(userAgent) || /(cros)/.exec(userAgent) || /(playbook)/.exec(userAgent) || /(bb)/.exec(userAgent) || /(blackberry)/.exec(userAgent) || [];
}

function getPlatform(userAgent) {
  userAgent = (userAgent || navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
  var platformMatch = getPlatformMatch(userAgent),
      matched = getMatch(userAgent, platformMatch),
      browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if (matched.platform) {
    browser[matched.platform] = true;
  }

  if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser['windows phone']) {
    browser.mobile = true;
  }

  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }

  if (browser['windows phone']) {
    browser.winphone = true;
    delete browser['windows phone'];
  }

  if (browser.cros || browser.mac || browser.linux || browser.win) {
    browser.desktop = true;
  }

  if (browser.chrome || browser.opr || browser.safari || browser.vivaldi) {
    browser.webkit = true;
  }

  if (browser.rv || browser.iemobile) {
    matched.browser = 'ie';
    browser.ie = true;
  }

  if (browser.edge) {
    matched.browser = 'edge';
    browser.edge = true;
  }

  if (browser.safari && browser.blackberry || browser.bb) {
    matched.browser = 'blackberry';
    browser.blackberry = true;
  }

  if (browser.safari && browser.playbook) {
    matched.browser = 'playbook';
    browser.playbook = true;
  }

  if (browser.opr) {
    matched.browser = 'opera';
    browser.opera = true;
  }

  if (browser.safari && browser.android) {
    matched.browser = 'android';
    browser.android = true;
  }

  if (browser.safari && browser.kindle) {
    matched.browser = 'kindle';
    browser.kindle = true;
  }

  if (browser.safari && browser.silk) {
    matched.browser = 'silk';
    browser.silk = true;
  }

  if (browser.vivaldi) {
    matched.browser = 'vivaldi';
    browser.vivaldi = true;
  }

  browser.name = matched.browser;
  browser.platform = matched.platform;

  if (!isSSR) {
    if (window.process && window.process.versions && window.process.versions.electron) {
      browser.electron = true;
    } else if (document.location.href.indexOf('chrome-extension://') === 0) {
      browser.chromeExt = true;
    } else if (window._cordovaNative || window.cordova) {
      browser.cordova = true;
    }

    fromSSR = browser.cordova === void 0 && browser.electron === void 0 && !!document.querySelector('[data-server-rendered]');
    fromSSR && (onSSR = true);
  }

  return browser;
}

var webStorage;
function hasWebStorage() {
  if (webStorage !== void 0) {
    return webStorage;
  }

  try {
    if (window.localStorage) {
      webStorage = true;
      return true;
    }
  } catch (e) {}

  webStorage = false;
  return false;
}

function getClientProperties() {
  return {
    has: {
      touch: function () {
        return !!('ontouchstart' in document.documentElement) || window.navigator.msMaxTouchPoints > 0;
      }(),
      webStorage: hasWebStorage()
    },
    within: {
      iframe: window.self !== window.top
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  has: {
    touch: false,
    webStorage: false
  },
  within: {
    iframe: false
  },
  parseSSR: function parseSSR(ssr) {
    return ssr ? {
      is: getPlatform(ssr.req.headers['user-agent']),
      has: this.has,
      within: this.within
    } : _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
      is: getPlatform()
    }, getClientProperties());
  },
  install: function install($q, queues, Vue) {
    var _this = this;

    if (isSSR) {
      queues.server.push(function (q, ctx) {
        q.platform = _this.parseSSR(ctx.ssr);
      });
      return;
    }

    this.is = getPlatform();

    if (fromSSR) {
      queues.takeover.push(function (q) {
        onSSR = fromSSR = false;
        Object.assign(q.platform, getClientProperties());
      });
      Vue.util.defineReactive($q, 'platform', this);
    } else {
      Object.assign(this, getClientProperties());
      $q.platform = this;
    }
  }
});

/***/ }),

/***/ "a925":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * vue-i18n v7.8.1 
 * (c) 2018 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * utilites
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function getOldChoiceIndexFixed (choice) {
  return choice
    ? choice > 1
      ? 1
      : 0
    : 1
}

function getChoiceIndex (choice, choicesLength) {
  choice = Math.abs(choice);

  if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

  return choice ? Math.min(choice, 2) : 0
}

function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') { return null }
  var choices = message.split('|');

  choice = getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

var canUseDateTimeFormat =
  typeof Intl !== 'undefined' && typeof Intl.DateTimeFormat !== 'undefined';

var canUseNumberFormat =
  typeof Intl !== 'undefined' && typeof Intl.NumberFormat !== 'undefined';

/*  */

function extend (Vue) {
  // $FlowFixMe
  Object.defineProperty(Vue.prototype, '$t', {
    get: function get () {
      var this$1 = this;

      return function (key) {
        var values = [], len = arguments.length - 1;
        while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

        var i18n = this$1.$i18n;
        return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this$1 ].concat( values ))
      }
    }
  });
  // $FlowFixMe
  Object.defineProperty(Vue.prototype, '$tc', {
    get: function get () {
      var this$1 = this;

      return function (key, choice) {
        var values = [], len = arguments.length - 2;
        while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

        var i18n = this$1.$i18n;
        return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this$1, choice ].concat( values ))
      }
    }
  });
  // $FlowFixMe
  Object.defineProperty(Vue.prototype, '$te', {
    get: function get () {
      var this$1 = this;

      return function (key, locale) {
        var i18n = this$1.$i18n;
        return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
      }
    }
  });
  // $FlowFixMe
  Object.defineProperty(Vue.prototype, '$d', {
    get: function get () {
      var this$1 = this;

      return function (value) {
        var ref;

        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
        return (ref = this$1.$i18n).d.apply(ref, [ value ].concat( args ))
      }
    }
  });
  // $FlowFixMe
  Object.defineProperty(Vue.prototype, '$n', {
    get: function get () {
      var this$1 = this;

      return function (value) {
        var ref;

        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
        return (ref = this$1.$i18n).n.apply(ref, [ value ].concat( args ))
      }
    }
  });
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (false) {}
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root.$i18n;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (false) {}
          }
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (false) {}
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    if (this._subscribing) {
      this._i18n.unsubscribeDataChanging(this);
      delete this._subscribing;
    }

    if (this._i18nWatcher) {
      this._i18nWatcher();
      delete this._i18nWatcher;
    }

    if (this._localeWatcher) {
      this._localeWatcher();
      delete this._localeWatcher;
    }

    this._i18n = null;
  }
}

/*  */

var component = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var parent = ref.parent;

    var i18n = parent.$i18n;

    children = (children || []).filter(function (child) {
      return child.tag || (child.text = child.text.trim())
    });

    if (!i18n) {
      if (false) {}
      return children
    }

    var path = props.path;
    var locale = props.locale;

    var params = {};
    var places = props.places || {};

    var hasPlaces = Array.isArray(places)
      ? places.length > 0
      : Object.keys(places).length > 0;

    var everyPlace = children.every(function (child) {
      if (child.data && child.data.attrs) {
        var place = child.data.attrs.place;
        return (typeof place !== 'undefined') && place !== ''
      }
    });

    if (hasPlaces && children.length > 0 && !everyPlace) {
      warn('If places prop is set, all child elements must have place prop set.');
    }

    if (Array.isArray(places)) {
      places.forEach(function (el, i) {
        params[i] = el;
      });
    } else {
      Object.keys(places).forEach(function (key) {
        params[key] = places[key];
      });
    }

    children.forEach(function (child, i) {
      var key = everyPlace
        ? ("" + (child.data.attrs.place))
        : ("" + i);
      params[key] = child;
    });

    return h(props.tag, data, i18n.i(path, locale, params))
  }
}

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  if (localeEqual(el, vnode) && looseEqual(binding.value, binding.oldValue)) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  el.textContent = '';
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('not exist Vue instance in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('not exist VueI18n instance in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('not support value type');
    return
  }

  if (!path) {
    warn('required `path` in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if (false) {}
  install.installed = true;

  /* istanbul ignore if */
  if (false) {}

  Object.defineProperty(Vue.prototype, '$i18n', {
    get: function get () { return this._i18n }
  });

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(component.name, component);

  // use object-based merge strategy
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = strats.methods;
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== '}') {
        sub += char;
        char = format[position++];
      }

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (false) {}
        }
        break
      case 'unknown':
        if (false) {}
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path paerser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) { return 'number' }

  return 'else'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





function empty (target) {
  /* istanbul ignore else */
  if (Array.isArray(target)) {
    return target.length === 0
  } else {
    return false
  }
}

var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (empty(paths)) {
    return null
  } else {
    var length = paths.length;
    var ret = null;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        last = null;
        break
      }
      last = value;
      i++;
    }

    ret = last;
    return ret
  }
};

/*  */



var numberFormatKeys = [
  'style',
  'currency',
  'currencyDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'localeMatcher',
  'formatMatcher'
];

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || new BaseFormatter();
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : !!options.silentTranslationWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];

  this._exist = function (message, key) {
    if (!message || !key) { return false }
    return !isNull(this$1._path.getPathValue(message, key))
  };

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true } };

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (typeof missingRet === 'string') {
      return missingRet
    }
  } else {
    if (false) {}
  }
  return key
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if (false) {}
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if (false) {}
      return null
    }
  }

  // Check for the existance of links within the translated string
  if (ret.indexOf('@:') >= 0) {
    ret = this._link(locale, message, ret, host, interpolateMode, values);
  }

  return this._render(ret, interpolateMode, values)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values
) {
    var this$1 = this;

  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(/(@:[\w\-_|.]+)/g);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    // Remove the leading @:
    var linkPlaceholder = link.substr(2);
    // Translate the link
    var translated = this$1._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values
    );

    if (this$1._isFallbackRoot(translated)) {
      if (false) {}
      /* istanbul ignore if */
      if (!this$1._root) { throw Error('unexpected error') }
      var root = this$1._root;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this$1._warnDefault(
      locale, linkPlaceholder, translated, host,
      Array.isArray(values) ? values : [values]
    );

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._render = function _render (message, interpolateMode, values) {
  var ret = this._formatter.interpolate(message, values);
  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var res =
    this._interpolate(locale, messages[locale], key, host, interpolateMode, args);
  if (!isNull(res)) { return res }

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args);
  if (!isNull(res)) {
    if (false) {}
    return res
  } else {
    return null
  }
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).t.apply(ref, [ key ].concat( values ))
  } else {
    return this._warnDefault(locale, key, ret, host, values)
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    if (!this._root) { throw Error('unexpected error') }
    return this._root.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values])
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }
  return fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  this._vm.$set(this._vm.messages, locale, Vue.util.extend(this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, Vue.util.extend(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if (false) {}
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if (false) {}

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, Vue.util.extend(this._vm.numberFormats[locale] || {}, format));
};

VueI18n.prototype._localizeNumber = function _localizeNumber (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if (false) {}
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (false) {}

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var ret =
    this._localizeNumber(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

VueI18n.availabilities = {
  dateTimeFormat: canUseDateTimeFormat,
  numberFormat: canUseNumberFormat
};
VueI18n.install = install;
VueI18n.version = '7.8.1';

/* harmony default export */ __webpack_exports__["a"] = (VueI18n);


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "abcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export offset */
/* unused harmony export style */
/* unused harmony export height */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/* unused harmony export ready */
/* unused harmony export cssTransform */
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);



function offset(el) {
  if (!el || el === window) {
    return {
      top: 0,
      left: 0
    };
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    top: top,
    left: left
  };
}
function style(el, property) {
  return window.getComputedStyle(el).getPropertyValue(property);
}
function height(el) {
  if (el === window) {
    return window.innerHeight;
  }

  return parseFloat(style(el, 'height'));
}
function width(el) {
  if (el === window) {
    return window.innerWidth;
  }

  return parseFloat(style(el, 'width'));
}
function css(element, css) {
  var style = element.style;
  Object.keys(css).forEach(function (prop) {
    style[prop] = css[prop];
  });
}
function ready(fn) {
  if (typeof fn !== 'function') {
    return;
  }

  if (document.readyState !== 'loading') {
    return fn();
  }

  document.addEventListener('DOMContentLoaded', fn, false);
}
var prefix = ['-webkit-', '-moz-', '-ms-', '-o-'];
function cssTransform(val) {
  var o = {
    transform: val
  };
  prefix.forEach(function (p) {
    o[p + 'transform'] = val;
  });
  return o;
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  offset: offset,
  style: style,
  height: height,
  width: width,
  css: css,
  ready: ready,
  cssTransform: cssTransform
});

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "aef6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "afdb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "b105":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "/*!\n * Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n .fa,.fab,.fal,.far,.fas{\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  display:inline-block;\n  font-style:normal;\n  font-variant:normal;\n  text-rendering:auto;\n  line-height:1\n}\n.fa-lg{\n  font-size:1.33333em;\n  line-height:.75em;\n  vertical-align:-.0667em\n}\n.fa-xs{\n  font-size:.75em\n}\n.fa-sm{\n  font-size:.875em\n}\n.fa-1x{\n  font-size:1em\n}\n.fa-2x{\n  font-size:2em\n}\n.fa-3x{\n  font-size:3em\n}\n.fa-4x{\n  font-size:4em\n}\n.fa-5x{\n  font-size:5em\n}\n.fa-6x{\n  font-size:6em\n}\n.fa-7x{\n  font-size:7em\n}\n.fa-8x{\n  font-size:8em\n}\n.fa-9x{\n  font-size:9em\n}\n.fa-10x{\n  font-size:10em\n}\n.fa-fw{\n  text-align:center;\n  width:1.25em\n}\n.fa-ul{\n  list-style-type:none;\n  margin-left:2.5em;\n  padding-left:0\n}\n.fa-ul>li{\n  position:relative\n}\n.fa-li{\n  left:-2em;\n  position:absolute;\n  text-align:center;\n  width:2em;\n  line-height:inherit\n}\n.fa-border{\n  border:.08em solid #eee;\n  border-radius:.1em;\n  padding:.2em .25em .15em\n}\n.fa-pull-left{\n  float:left\n}\n.fa-pull-right{\n  float:right\n}\n.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{\n  margin-right:.3em\n}\n.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{\n  margin-left:.3em\n}\n.fa-spin{\n  -webkit-animation:fa-spin 2s infinite linear;\n          animation:fa-spin 2s infinite linear\n}\n.fa-pulse{\n  -webkit-animation:fa-spin 1s infinite steps(8);\n          animation:fa-spin 1s infinite steps(8)\n}\n@-webkit-keyframes fa-spin{\n  0%{\n      -webkit-transform:rotate(0deg);\n              transform:rotate(0deg)\n  }\n  to{\n      -webkit-transform:rotate(1turn);\n              transform:rotate(1turn)\n  }\n}\n@keyframes fa-spin{\n  0%{\n      -webkit-transform:rotate(0deg);\n              transform:rotate(0deg)\n  }\n  to{\n      -webkit-transform:rotate(1turn);\n              transform:rotate(1turn)\n  }\n}\n.fa-rotate-90{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform:rotate(90deg);\n          transform:rotate(90deg)\n}\n.fa-rotate-180{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform:rotate(180deg);\n          transform:rotate(180deg)\n}\n.fa-rotate-270{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform:rotate(270deg);\n          transform:rotate(270deg)\n}\n.fa-flip-horizontal{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform:scaleX(-1);\n          transform:scaleX(-1)\n}\n.fa-flip-vertical{\n  -webkit-transform:scaleY(-1);\n          transform:scaleY(-1)\n}\n.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"\n}\n.fa-flip-horizontal.fa-flip-vertical{\n  -webkit-transform:scale(-1);\n          transform:scale(-1)\n}\n:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{\n  -webkit-filter:none;\n  filter:none\n}\n.fa-stack{\n  display:inline-block;\n  height:2em;\n  line-height:2em;\n  position:relative;\n  vertical-align:middle;\n  width:2em\n}\n.fa-stack-1x,.fa-stack-2x{\n  left:0;\n  position:absolute;\n  text-align:center;\n  width:100%\n}\n.fa-stack-1x{\n  line-height:inherit\n}\n.fa-stack-2x{\n  font-size:2em\n}\n.fa-inverse{\n  color:#fff\n}\n.fa-500px:before{\n  content:\"\\F26E\"\n}\n.fa-accessible-icon:before{\n  content:\"\\F368\"\n}\n.fa-accusoft:before{\n  content:\"\\F369\"\n}\n.fa-ad:before{\n  content:\"\\F641\"\n}\n.fa-address-book:before{\n  content:\"\\F2B9\"\n}\n.fa-address-card:before{\n  content:\"\\F2BB\"\n}\n.fa-adjust:before{\n  content:\"\\F042\"\n}\n.fa-adn:before{\n  content:\"\\F170\"\n}\n.fa-adversal:before{\n  content:\"\\F36A\"\n}\n.fa-affiliatetheme:before{\n  content:\"\\F36B\"\n}\n.fa-air-freshener:before{\n  content:\"\\F5D0\"\n}\n.fa-algolia:before{\n  content:\"\\F36C\"\n}\n.fa-align-center:before{\n  content:\"\\F037\"\n}\n.fa-align-justify:before{\n  content:\"\\F039\"\n}\n.fa-align-left:before{\n  content:\"\\F036\"\n}\n.fa-align-right:before{\n  content:\"\\F038\"\n}\n.fa-alipay:before{\n  content:\"\\F642\"\n}\n.fa-allergies:before{\n  content:\"\\F461\"\n}\n.fa-amazon:before{\n  content:\"\\F270\"\n}\n.fa-amazon-pay:before{\n  content:\"\\F42C\"\n}\n.fa-ambulance:before{\n  content:\"\\F0F9\"\n}\n.fa-american-sign-language-interpreting:before{\n  content:\"\\F2A3\"\n}\n.fa-amilia:before{\n  content:\"\\F36D\"\n}\n.fa-anchor:before{\n  content:\"\\F13D\"\n}\n.fa-android:before{\n  content:\"\\F17B\"\n}\n.fa-angellist:before{\n  content:\"\\F209\"\n}\n.fa-angle-double-down:before{\n  content:\"\\F103\"\n}\n.fa-angle-double-left:before{\n  content:\"\\F100\"\n}\n.fa-angle-double-right:before{\n  content:\"\\F101\"\n}\n.fa-angle-double-up:before{\n  content:\"\\F102\"\n}\n.fa-angle-down:before{\n  content:\"\\F107\"\n}\n.fa-angle-left:before{\n  content:\"\\F104\"\n}\n.fa-angle-right:before{\n  content:\"\\F105\"\n}\n.fa-angle-up:before{\n  content:\"\\F106\"\n}\n.fa-angry:before{\n  content:\"\\F556\"\n}\n.fa-angrycreative:before{\n  content:\"\\F36E\"\n}\n.fa-angular:before{\n  content:\"\\F420\"\n}\n.fa-ankh:before{\n  content:\"\\F644\"\n}\n.fa-app-store:before{\n  content:\"\\F36F\"\n}\n.fa-app-store-ios:before{\n  content:\"\\F370\"\n}\n.fa-apper:before{\n  content:\"\\F371\"\n}\n.fa-apple:before{\n  content:\"\\F179\"\n}\n.fa-apple-alt:before{\n  content:\"\\F5D1\"\n}\n.fa-apple-pay:before{\n  content:\"\\F415\"\n}\n.fa-archive:before{\n  content:\"\\F187\"\n}\n.fa-archway:before{\n  content:\"\\F557\"\n}\n.fa-arrow-alt-circle-down:before{\n  content:\"\\F358\"\n}\n.fa-arrow-alt-circle-left:before{\n  content:\"\\F359\"\n}\n.fa-arrow-alt-circle-right:before{\n  content:\"\\F35A\"\n}\n.fa-arrow-alt-circle-up:before{\n  content:\"\\F35B\"\n}\n.fa-arrow-circle-down:before{\n  content:\"\\F0AB\"\n}\n.fa-arrow-circle-left:before{\n  content:\"\\F0A8\"\n}\n.fa-arrow-circle-right:before{\n  content:\"\\F0A9\"\n}\n.fa-arrow-circle-up:before{\n  content:\"\\F0AA\"\n}\n.fa-arrow-down:before{\n  content:\"\\F063\"\n}\n.fa-arrow-left:before{\n  content:\"\\F060\"\n}\n.fa-arrow-right:before{\n  content:\"\\F061\"\n}\n.fa-arrow-up:before{\n  content:\"\\F062\"\n}\n.fa-arrows-alt:before{\n  content:\"\\F0B2\"\n}\n.fa-arrows-alt-h:before{\n  content:\"\\F337\"\n}\n.fa-arrows-alt-v:before{\n  content:\"\\F338\"\n}\n.fa-assistive-listening-systems:before{\n  content:\"\\F2A2\"\n}\n.fa-asterisk:before{\n  content:\"\\F069\"\n}\n.fa-asymmetrik:before{\n  content:\"\\F372\"\n}\n.fa-at:before{\n  content:\"\\F1FA\"\n}\n.fa-atlas:before{\n  content:\"\\F558\"\n}\n.fa-atom:before{\n  content:\"\\F5D2\"\n}\n.fa-audible:before{\n  content:\"\\F373\"\n}\n.fa-audio-description:before{\n  content:\"\\F29E\"\n}\n.fa-autoprefixer:before{\n  content:\"\\F41C\"\n}\n.fa-avianex:before{\n  content:\"\\F374\"\n}\n.fa-aviato:before{\n  content:\"\\F421\"\n}\n.fa-award:before{\n  content:\"\\F559\"\n}\n.fa-aws:before{\n  content:\"\\F375\"\n}\n.fa-backspace:before{\n  content:\"\\F55A\"\n}\n.fa-backward:before{\n  content:\"\\F04A\"\n}\n.fa-balance-scale:before{\n  content:\"\\F24E\"\n}\n.fa-ban:before{\n  content:\"\\F05E\"\n}\n.fa-band-aid:before{\n  content:\"\\F462\"\n}\n.fa-bandcamp:before{\n  content:\"\\F2D5\"\n}\n.fa-barcode:before{\n  content:\"\\F02A\"\n}\n.fa-bars:before{\n  content:\"\\F0C9\"\n}\n.fa-baseball-ball:before{\n  content:\"\\F433\"\n}\n.fa-basketball-ball:before{\n  content:\"\\F434\"\n}\n.fa-bath:before{\n  content:\"\\F2CD\"\n}\n.fa-battery-empty:before{\n  content:\"\\F244\"\n}\n.fa-battery-full:before{\n  content:\"\\F240\"\n}\n.fa-battery-half:before{\n  content:\"\\F242\"\n}\n.fa-battery-quarter:before{\n  content:\"\\F243\"\n}\n.fa-battery-three-quarters:before{\n  content:\"\\F241\"\n}\n.fa-bed:before{\n  content:\"\\F236\"\n}\n.fa-beer:before{\n  content:\"\\F0FC\"\n}\n.fa-behance:before{\n  content:\"\\F1B4\"\n}\n.fa-behance-square:before{\n  content:\"\\F1B5\"\n}\n.fa-bell:before{\n  content:\"\\F0F3\"\n}\n.fa-bell-slash:before{\n  content:\"\\F1F6\"\n}\n.fa-bezier-curve:before{\n  content:\"\\F55B\"\n}\n.fa-bible:before{\n  content:\"\\F647\"\n}\n.fa-bicycle:before{\n  content:\"\\F206\"\n}\n.fa-bimobject:before{\n  content:\"\\F378\"\n}\n.fa-binoculars:before{\n  content:\"\\F1E5\"\n}\n.fa-birthday-cake:before{\n  content:\"\\F1FD\"\n}\n.fa-bitbucket:before{\n  content:\"\\F171\"\n}\n.fa-bitcoin:before{\n  content:\"\\F379\"\n}\n.fa-bity:before{\n  content:\"\\F37A\"\n}\n.fa-black-tie:before{\n  content:\"\\F27E\"\n}\n.fa-blackberry:before{\n  content:\"\\F37B\"\n}\n.fa-blender:before{\n  content:\"\\F517\"\n}\n.fa-blind:before{\n  content:\"\\F29D\"\n}\n.fa-blogger:before{\n  content:\"\\F37C\"\n}\n.fa-blogger-b:before{\n  content:\"\\F37D\"\n}\n.fa-bluetooth:before{\n  content:\"\\F293\"\n}\n.fa-bluetooth-b:before{\n  content:\"\\F294\"\n}\n.fa-bold:before{\n  content:\"\\F032\"\n}\n.fa-bolt:before{\n  content:\"\\F0E7\"\n}\n.fa-bomb:before{\n  content:\"\\F1E2\"\n}\n.fa-bone:before{\n  content:\"\\F5D7\"\n}\n.fa-bong:before{\n  content:\"\\F55C\"\n}\n.fa-book:before{\n  content:\"\\F02D\"\n}\n.fa-book-open:before{\n  content:\"\\F518\"\n}\n.fa-book-reader:before{\n  content:\"\\F5DA\"\n}\n.fa-bookmark:before{\n  content:\"\\F02E\"\n}\n.fa-bowling-ball:before{\n  content:\"\\F436\"\n}\n.fa-box:before{\n  content:\"\\F466\"\n}\n.fa-box-open:before{\n  content:\"\\F49E\"\n}\n.fa-boxes:before{\n  content:\"\\F468\"\n}\n.fa-braille:before{\n  content:\"\\F2A1\"\n}\n.fa-brain:before{\n  content:\"\\F5DC\"\n}\n.fa-briefcase:before{\n  content:\"\\F0B1\"\n}\n.fa-briefcase-medical:before{\n  content:\"\\F469\"\n}\n.fa-broadcast-tower:before{\n  content:\"\\F519\"\n}\n.fa-broom:before{\n  content:\"\\F51A\"\n}\n.fa-brush:before{\n  content:\"\\F55D\"\n}\n.fa-btc:before{\n  content:\"\\F15A\"\n}\n.fa-bug:before{\n  content:\"\\F188\"\n}\n.fa-building:before{\n  content:\"\\F1AD\"\n}\n.fa-bullhorn:before{\n  content:\"\\F0A1\"\n}\n.fa-bullseye:before{\n  content:\"\\F140\"\n}\n.fa-burn:before{\n  content:\"\\F46A\"\n}\n.fa-buromobelexperte:before{\n  content:\"\\F37F\"\n}\n.fa-bus:before{\n  content:\"\\F207\"\n}\n.fa-bus-alt:before{\n  content:\"\\F55E\"\n}\n.fa-business-time:before{\n  content:\"\\F64A\"\n}\n.fa-buysellads:before{\n  content:\"\\F20D\"\n}\n.fa-calculator:before{\n  content:\"\\F1EC\"\n}\n.fa-calendar:before{\n  content:\"\\F133\"\n}\n.fa-calendar-alt:before{\n  content:\"\\F073\"\n}\n.fa-calendar-check:before{\n  content:\"\\F274\"\n}\n.fa-calendar-minus:before{\n  content:\"\\F272\"\n}\n.fa-calendar-plus:before{\n  content:\"\\F271\"\n}\n.fa-calendar-times:before{\n  content:\"\\F273\"\n}\n.fa-camera:before{\n  content:\"\\F030\"\n}\n.fa-camera-retro:before{\n  content:\"\\F083\"\n}\n.fa-cannabis:before{\n  content:\"\\F55F\"\n}\n.fa-capsules:before{\n  content:\"\\F46B\"\n}\n.fa-car:before{\n  content:\"\\F1B9\"\n}\n.fa-car-alt:before{\n  content:\"\\F5DE\"\n}\n.fa-car-battery:before{\n  content:\"\\F5DF\"\n}\n.fa-car-crash:before{\n  content:\"\\F5E1\"\n}\n.fa-car-side:before{\n  content:\"\\F5E4\"\n}\n.fa-caret-down:before{\n  content:\"\\F0D7\"\n}\n.fa-caret-left:before{\n  content:\"\\F0D9\"\n}\n.fa-caret-right:before{\n  content:\"\\F0DA\"\n}\n.fa-caret-square-down:before{\n  content:\"\\F150\"\n}\n.fa-caret-square-left:before{\n  content:\"\\F191\"\n}\n.fa-caret-square-right:before{\n  content:\"\\F152\"\n}\n.fa-caret-square-up:before{\n  content:\"\\F151\"\n}\n.fa-caret-up:before{\n  content:\"\\F0D8\"\n}\n.fa-cart-arrow-down:before{\n  content:\"\\F218\"\n}\n.fa-cart-plus:before{\n  content:\"\\F217\"\n}\n.fa-cc-amazon-pay:before{\n  content:\"\\F42D\"\n}\n.fa-cc-amex:before{\n  content:\"\\F1F3\"\n}\n.fa-cc-apple-pay:before{\n  content:\"\\F416\"\n}\n.fa-cc-diners-club:before{\n  content:\"\\F24C\"\n}\n.fa-cc-discover:before{\n  content:\"\\F1F2\"\n}\n.fa-cc-jcb:before{\n  content:\"\\F24B\"\n}\n.fa-cc-mastercard:before{\n  content:\"\\F1F1\"\n}\n.fa-cc-paypal:before{\n  content:\"\\F1F4\"\n}\n.fa-cc-stripe:before{\n  content:\"\\F1F5\"\n}\n.fa-cc-visa:before{\n  content:\"\\F1F0\"\n}\n.fa-centercode:before{\n  content:\"\\F380\"\n}\n.fa-certificate:before{\n  content:\"\\F0A3\"\n}\n.fa-chalkboard:before{\n  content:\"\\F51B\"\n}\n.fa-chalkboard-teacher:before{\n  content:\"\\F51C\"\n}\n.fa-charging-station:before{\n  content:\"\\F5E7\"\n}\n.fa-chart-area:before{\n  content:\"\\F1FE\"\n}\n.fa-chart-bar:before{\n  content:\"\\F080\"\n}\n.fa-chart-line:before{\n  content:\"\\F201\"\n}\n.fa-chart-pie:before{\n  content:\"\\F200\"\n}\n.fa-check:before{\n  content:\"\\F00C\"\n}\n.fa-check-circle:before{\n  content:\"\\F058\"\n}\n.fa-check-double:before{\n  content:\"\\F560\"\n}\n.fa-check-square:before{\n  content:\"\\F14A\"\n}\n.fa-chess:before{\n  content:\"\\F439\"\n}\n.fa-chess-bishop:before{\n  content:\"\\F43A\"\n}\n.fa-chess-board:before{\n  content:\"\\F43C\"\n}\n.fa-chess-king:before{\n  content:\"\\F43F\"\n}\n.fa-chess-knight:before{\n  content:\"\\F441\"\n}\n.fa-chess-pawn:before{\n  content:\"\\F443\"\n}\n.fa-chess-queen:before{\n  content:\"\\F445\"\n}\n.fa-chess-rook:before{\n  content:\"\\F447\"\n}\n.fa-chevron-circle-down:before{\n  content:\"\\F13A\"\n}\n.fa-chevron-circle-left:before{\n  content:\"\\F137\"\n}\n.fa-chevron-circle-right:before{\n  content:\"\\F138\"\n}\n.fa-chevron-circle-up:before{\n  content:\"\\F139\"\n}\n.fa-chevron-down:before{\n  content:\"\\F078\"\n}\n.fa-chevron-left:before{\n  content:\"\\F053\"\n}\n.fa-chevron-right:before{\n  content:\"\\F054\"\n}\n.fa-chevron-up:before{\n  content:\"\\F077\"\n}\n.fa-child:before{\n  content:\"\\F1AE\"\n}\n.fa-chrome:before{\n  content:\"\\F268\"\n}\n.fa-church:before{\n  content:\"\\F51D\"\n}\n.fa-circle:before{\n  content:\"\\F111\"\n}\n.fa-circle-notch:before{\n  content:\"\\F1CE\"\n}\n.fa-city:before{\n  content:\"\\F64F\"\n}\n.fa-clipboard:before{\n  content:\"\\F328\"\n}\n.fa-clipboard-check:before{\n  content:\"\\F46C\"\n}\n.fa-clipboard-list:before{\n  content:\"\\F46D\"\n}\n.fa-clock:before{\n  content:\"\\F017\"\n}\n.fa-clone:before{\n  content:\"\\F24D\"\n}\n.fa-closed-captioning:before{\n  content:\"\\F20A\"\n}\n.fa-cloud:before{\n  content:\"\\F0C2\"\n}\n.fa-cloud-download-alt:before{\n  content:\"\\F381\"\n}\n.fa-cloud-upload-alt:before{\n  content:\"\\F382\"\n}\n.fa-cloudscale:before{\n  content:\"\\F383\"\n}\n.fa-cloudsmith:before{\n  content:\"\\F384\"\n}\n.fa-cloudversify:before{\n  content:\"\\F385\"\n}\n.fa-cocktail:before{\n  content:\"\\F561\"\n}\n.fa-code:before{\n  content:\"\\F121\"\n}\n.fa-code-branch:before{\n  content:\"\\F126\"\n}\n.fa-codepen:before{\n  content:\"\\F1CB\"\n}\n.fa-codiepie:before{\n  content:\"\\F284\"\n}\n.fa-coffee:before{\n  content:\"\\F0F4\"\n}\n.fa-cog:before{\n  content:\"\\F013\"\n}\n.fa-cogs:before{\n  content:\"\\F085\"\n}\n.fa-coins:before{\n  content:\"\\F51E\"\n}\n.fa-columns:before{\n  content:\"\\F0DB\"\n}\n.fa-comment:before{\n  content:\"\\F075\"\n}\n.fa-comment-alt:before{\n  content:\"\\F27A\"\n}\n.fa-comment-dollar:before{\n  content:\"\\F651\"\n}\n.fa-comment-dots:before{\n  content:\"\\F4AD\"\n}\n.fa-comment-slash:before{\n  content:\"\\F4B3\"\n}\n.fa-comments:before{\n  content:\"\\F086\"\n}\n.fa-comments-dollar:before{\n  content:\"\\F653\"\n}\n.fa-compact-disc:before{\n  content:\"\\F51F\"\n}\n.fa-compass:before{\n  content:\"\\F14E\"\n}\n.fa-compress:before{\n  content:\"\\F066\"\n}\n.fa-concierge-bell:before{\n  content:\"\\F562\"\n}\n.fa-connectdevelop:before{\n  content:\"\\F20E\"\n}\n.fa-contao:before{\n  content:\"\\F26D\"\n}\n.fa-cookie:before{\n  content:\"\\F563\"\n}\n.fa-cookie-bite:before{\n  content:\"\\F564\"\n}\n.fa-copy:before{\n  content:\"\\F0C5\"\n}\n.fa-copyright:before{\n  content:\"\\F1F9\"\n}\n.fa-couch:before{\n  content:\"\\F4B8\"\n}\n.fa-cpanel:before{\n  content:\"\\F388\"\n}\n.fa-creative-commons:before{\n  content:\"\\F25E\"\n}\n.fa-creative-commons-by:before{\n  content:\"\\F4E7\"\n}\n.fa-creative-commons-nc:before{\n  content:\"\\F4E8\"\n}\n.fa-creative-commons-nc-eu:before{\n  content:\"\\F4E9\"\n}\n.fa-creative-commons-nc-jp:before{\n  content:\"\\F4EA\"\n}\n.fa-creative-commons-nd:before{\n  content:\"\\F4EB\"\n}\n.fa-creative-commons-pd:before{\n  content:\"\\F4EC\"\n}\n.fa-creative-commons-pd-alt:before{\n  content:\"\\F4ED\"\n}\n.fa-creative-commons-remix:before{\n  content:\"\\F4EE\"\n}\n.fa-creative-commons-sa:before{\n  content:\"\\F4EF\"\n}\n.fa-creative-commons-sampling:before{\n  content:\"\\F4F0\"\n}\n.fa-creative-commons-sampling-plus:before{\n  content:\"\\F4F1\"\n}\n.fa-creative-commons-share:before{\n  content:\"\\F4F2\"\n}\n.fa-credit-card:before{\n  content:\"\\F09D\"\n}\n.fa-crop:before{\n  content:\"\\F125\"\n}\n.fa-crop-alt:before{\n  content:\"\\F565\"\n}\n.fa-cross:before{\n  content:\"\\F654\"\n}\n.fa-crosshairs:before{\n  content:\"\\F05B\"\n}\n.fa-crow:before{\n  content:\"\\F520\"\n}\n.fa-crown:before{\n  content:\"\\F521\"\n}\n.fa-css3:before{\n  content:\"\\F13C\"\n}\n.fa-css3-alt:before{\n  content:\"\\F38B\"\n}\n.fa-cube:before{\n  content:\"\\F1B2\"\n}\n.fa-cubes:before{\n  content:\"\\F1B3\"\n}\n.fa-cut:before{\n  content:\"\\F0C4\"\n}\n.fa-cuttlefish:before{\n  content:\"\\F38C\"\n}\n.fa-d-and-d:before{\n  content:\"\\F38D\"\n}\n.fa-dashcube:before{\n  content:\"\\F210\"\n}\n.fa-database:before{\n  content:\"\\F1C0\"\n}\n.fa-deaf:before{\n  content:\"\\F2A4\"\n}\n.fa-delicious:before{\n  content:\"\\F1A5\"\n}\n.fa-deploydog:before{\n  content:\"\\F38E\"\n}\n.fa-deskpro:before{\n  content:\"\\F38F\"\n}\n.fa-desktop:before{\n  content:\"\\F108\"\n}\n.fa-deviantart:before{\n  content:\"\\F1BD\"\n}\n.fa-dharmachakra:before{\n  content:\"\\F655\"\n}\n.fa-diagnoses:before{\n  content:\"\\F470\"\n}\n.fa-dice:before{\n  content:\"\\F522\"\n}\n.fa-dice-five:before{\n  content:\"\\F523\"\n}\n.fa-dice-four:before{\n  content:\"\\F524\"\n}\n.fa-dice-one:before{\n  content:\"\\F525\"\n}\n.fa-dice-six:before{\n  content:\"\\F526\"\n}\n.fa-dice-three:before{\n  content:\"\\F527\"\n}\n.fa-dice-two:before{\n  content:\"\\F528\"\n}\n.fa-digg:before{\n  content:\"\\F1A6\"\n}\n.fa-digital-ocean:before{\n  content:\"\\F391\"\n}\n.fa-digital-tachograph:before{\n  content:\"\\F566\"\n}\n.fa-directions:before{\n  content:\"\\F5EB\"\n}\n.fa-discord:before{\n  content:\"\\F392\"\n}\n.fa-discourse:before{\n  content:\"\\F393\"\n}\n.fa-divide:before{\n  content:\"\\F529\"\n}\n.fa-dizzy:before{\n  content:\"\\F567\"\n}\n.fa-dna:before{\n  content:\"\\F471\"\n}\n.fa-dochub:before{\n  content:\"\\F394\"\n}\n.fa-docker:before{\n  content:\"\\F395\"\n}\n.fa-dollar-sign:before{\n  content:\"\\F155\"\n}\n.fa-dolly:before{\n  content:\"\\F472\"\n}\n.fa-dolly-flatbed:before{\n  content:\"\\F474\"\n}\n.fa-donate:before{\n  content:\"\\F4B9\"\n}\n.fa-door-closed:before{\n  content:\"\\F52A\"\n}\n.fa-door-open:before{\n  content:\"\\F52B\"\n}\n.fa-dot-circle:before{\n  content:\"\\F192\"\n}\n.fa-dove:before{\n  content:\"\\F4BA\"\n}\n.fa-download:before{\n  content:\"\\F019\"\n}\n.fa-draft2digital:before{\n  content:\"\\F396\"\n}\n.fa-drafting-compass:before{\n  content:\"\\F568\"\n}\n.fa-draw-polygon:before{\n  content:\"\\F5EE\"\n}\n.fa-dribbble:before{\n  content:\"\\F17D\"\n}\n.fa-dribbble-square:before{\n  content:\"\\F397\"\n}\n.fa-dropbox:before{\n  content:\"\\F16B\"\n}\n.fa-drum:before{\n  content:\"\\F569\"\n}\n.fa-drum-steelpan:before{\n  content:\"\\F56A\"\n}\n.fa-drupal:before{\n  content:\"\\F1A9\"\n}\n.fa-dumbbell:before{\n  content:\"\\F44B\"\n}\n.fa-dyalog:before{\n  content:\"\\F399\"\n}\n.fa-earlybirds:before{\n  content:\"\\F39A\"\n}\n.fa-ebay:before{\n  content:\"\\F4F4\"\n}\n.fa-edge:before{\n  content:\"\\F282\"\n}\n.fa-edit:before{\n  content:\"\\F044\"\n}\n.fa-eject:before{\n  content:\"\\F052\"\n}\n.fa-elementor:before{\n  content:\"\\F430\"\n}\n.fa-ellipsis-h:before{\n  content:\"\\F141\"\n}\n.fa-ellipsis-v:before{\n  content:\"\\F142\"\n}\n.fa-ello:before{\n  content:\"\\F5F1\"\n}\n.fa-ember:before{\n  content:\"\\F423\"\n}\n.fa-empire:before{\n  content:\"\\F1D1\"\n}\n.fa-envelope:before{\n  content:\"\\F0E0\"\n}\n.fa-envelope-open:before{\n  content:\"\\F2B6\"\n}\n.fa-envelope-open-text:before{\n  content:\"\\F658\"\n}\n.fa-envelope-square:before{\n  content:\"\\F199\"\n}\n.fa-envira:before{\n  content:\"\\F299\"\n}\n.fa-equals:before{\n  content:\"\\F52C\"\n}\n.fa-eraser:before{\n  content:\"\\F12D\"\n}\n.fa-erlang:before{\n  content:\"\\F39D\"\n}\n.fa-ethereum:before{\n  content:\"\\F42E\"\n}\n.fa-etsy:before{\n  content:\"\\F2D7\"\n}\n.fa-euro-sign:before{\n  content:\"\\F153\"\n}\n.fa-exchange-alt:before{\n  content:\"\\F362\"\n}\n.fa-exclamation:before{\n  content:\"\\F12A\"\n}\n.fa-exclamation-circle:before{\n  content:\"\\F06A\"\n}\n.fa-exclamation-triangle:before{\n  content:\"\\F071\"\n}\n.fa-expand:before{\n  content:\"\\F065\"\n}\n.fa-expand-arrows-alt:before{\n  content:\"\\F31E\"\n}\n.fa-expeditedssl:before{\n  content:\"\\F23E\"\n}\n.fa-external-link-alt:before{\n  content:\"\\F35D\"\n}\n.fa-external-link-square-alt:before{\n  content:\"\\F360\"\n}\n.fa-eye:before{\n  content:\"\\F06E\"\n}\n.fa-eye-dropper:before{\n  content:\"\\F1FB\"\n}\n.fa-eye-slash:before{\n  content:\"\\F070\"\n}\n.fa-facebook:before{\n  content:\"\\F09A\"\n}\n.fa-facebook-f:before{\n  content:\"\\F39E\"\n}\n.fa-facebook-messenger:before{\n  content:\"\\F39F\"\n}\n.fa-facebook-square:before{\n  content:\"\\F082\"\n}\n.fa-fast-backward:before{\n  content:\"\\F049\"\n}\n.fa-fast-forward:before{\n  content:\"\\F050\"\n}\n.fa-fax:before{\n  content:\"\\F1AC\"\n}\n.fa-feather:before{\n  content:\"\\F52D\"\n}\n.fa-feather-alt:before{\n  content:\"\\F56B\"\n}\n.fa-female:before{\n  content:\"\\F182\"\n}\n.fa-fighter-jet:before{\n  content:\"\\F0FB\"\n}\n.fa-file:before{\n  content:\"\\F15B\"\n}\n.fa-file-alt:before{\n  content:\"\\F15C\"\n}\n.fa-file-archive:before{\n  content:\"\\F1C6\"\n}\n.fa-file-audio:before{\n  content:\"\\F1C7\"\n}\n.fa-file-code:before{\n  content:\"\\F1C9\"\n}\n.fa-file-contract:before{\n  content:\"\\F56C\"\n}\n.fa-file-download:before{\n  content:\"\\F56D\"\n}\n.fa-file-excel:before{\n  content:\"\\F1C3\"\n}\n.fa-file-export:before{\n  content:\"\\F56E\"\n}\n.fa-file-image:before{\n  content:\"\\F1C5\"\n}\n.fa-file-import:before{\n  content:\"\\F56F\"\n}\n.fa-file-invoice:before{\n  content:\"\\F570\"\n}\n.fa-file-invoice-dollar:before{\n  content:\"\\F571\"\n}\n.fa-file-medical:before{\n  content:\"\\F477\"\n}\n.fa-file-medical-alt:before{\n  content:\"\\F478\"\n}\n.fa-file-pdf:before{\n  content:\"\\F1C1\"\n}\n.fa-file-powerpoint:before{\n  content:\"\\F1C4\"\n}\n.fa-file-prescription:before{\n  content:\"\\F572\"\n}\n.fa-file-signature:before{\n  content:\"\\F573\"\n}\n.fa-file-upload:before{\n  content:\"\\F574\"\n}\n.fa-file-video:before{\n  content:\"\\F1C8\"\n}\n.fa-file-word:before{\n  content:\"\\F1C2\"\n}\n.fa-fill:before{\n  content:\"\\F575\"\n}\n.fa-fill-drip:before{\n  content:\"\\F576\"\n}\n.fa-film:before{\n  content:\"\\F008\"\n}\n.fa-filter:before{\n  content:\"\\F0B0\"\n}\n.fa-fingerprint:before{\n  content:\"\\F577\"\n}\n.fa-fire:before{\n  content:\"\\F06D\"\n}\n.fa-fire-extinguisher:before{\n  content:\"\\F134\"\n}\n.fa-firefox:before{\n  content:\"\\F269\"\n}\n.fa-first-aid:before{\n  content:\"\\F479\"\n}\n.fa-first-order:before{\n  content:\"\\F2B0\"\n}\n.fa-first-order-alt:before{\n  content:\"\\F50A\"\n}\n.fa-firstdraft:before{\n  content:\"\\F3A1\"\n}\n.fa-fish:before{\n  content:\"\\F578\"\n}\n.fa-flag:before{\n  content:\"\\F024\"\n}\n.fa-flag-checkered:before{\n  content:\"\\F11E\"\n}\n.fa-flask:before{\n  content:\"\\F0C3\"\n}\n.fa-flickr:before{\n  content:\"\\F16E\"\n}\n.fa-flipboard:before{\n  content:\"\\F44D\"\n}\n.fa-flushed:before{\n  content:\"\\F579\"\n}\n.fa-fly:before{\n  content:\"\\F417\"\n}\n.fa-folder:before{\n  content:\"\\F07B\"\n}\n.fa-folder-minus:before{\n  content:\"\\F65D\"\n}\n.fa-folder-open:before{\n  content:\"\\F07C\"\n}\n.fa-folder-plus:before{\n  content:\"\\F65E\"\n}\n.fa-font:before{\n  content:\"\\F031\"\n}\n.fa-font-awesome:before{\n  content:\"\\F2B4\"\n}\n.fa-font-awesome-alt:before{\n  content:\"\\F35C\"\n}\n.fa-font-awesome-flag:before{\n  content:\"\\F425\"\n}\n.fa-font-awesome-logo-full:before{\n  content:\"\\F4E6\"\n}\n.fa-fonticons:before{\n  content:\"\\F280\"\n}\n.fa-fonticons-fi:before{\n  content:\"\\F3A2\"\n}\n.fa-football-ball:before{\n  content:\"\\F44E\"\n}\n.fa-fort-awesome:before{\n  content:\"\\F286\"\n}\n.fa-fort-awesome-alt:before{\n  content:\"\\F3A3\"\n}\n.fa-forumbee:before{\n  content:\"\\F211\"\n}\n.fa-forward:before{\n  content:\"\\F04E\"\n}\n.fa-foursquare:before{\n  content:\"\\F180\"\n}\n.fa-free-code-camp:before{\n  content:\"\\F2C5\"\n}\n.fa-freebsd:before{\n  content:\"\\F3A4\"\n}\n.fa-frog:before{\n  content:\"\\F52E\"\n}\n.fa-frown:before{\n  content:\"\\F119\"\n}\n.fa-frown-open:before{\n  content:\"\\F57A\"\n}\n.fa-fulcrum:before{\n  content:\"\\F50B\"\n}\n.fa-funnel-dollar:before{\n  content:\"\\F662\"\n}\n.fa-futbol:before{\n  content:\"\\F1E3\"\n}\n.fa-galactic-republic:before{\n  content:\"\\F50C\"\n}\n.fa-galactic-senate:before{\n  content:\"\\F50D\"\n}\n.fa-gamepad:before{\n  content:\"\\F11B\"\n}\n.fa-gas-pump:before{\n  content:\"\\F52F\"\n}\n.fa-gavel:before{\n  content:\"\\F0E3\"\n}\n.fa-gem:before{\n  content:\"\\F3A5\"\n}\n.fa-genderless:before{\n  content:\"\\F22D\"\n}\n.fa-get-pocket:before{\n  content:\"\\F265\"\n}\n.fa-gg:before{\n  content:\"\\F260\"\n}\n.fa-gg-circle:before{\n  content:\"\\F261\"\n}\n.fa-gift:before{\n  content:\"\\F06B\"\n}\n.fa-git:before{\n  content:\"\\F1D3\"\n}\n.fa-git-square:before{\n  content:\"\\F1D2\"\n}\n.fa-github:before{\n  content:\"\\F09B\"\n}\n.fa-github-alt:before{\n  content:\"\\F113\"\n}\n.fa-github-square:before{\n  content:\"\\F092\"\n}\n.fa-gitkraken:before{\n  content:\"\\F3A6\"\n}\n.fa-gitlab:before{\n  content:\"\\F296\"\n}\n.fa-gitter:before{\n  content:\"\\F426\"\n}\n.fa-glass-martini:before{\n  content:\"\\F000\"\n}\n.fa-glass-martini-alt:before{\n  content:\"\\F57B\"\n}\n.fa-glasses:before{\n  content:\"\\F530\"\n}\n.fa-glide:before{\n  content:\"\\F2A5\"\n}\n.fa-glide-g:before{\n  content:\"\\F2A6\"\n}\n.fa-globe:before{\n  content:\"\\F0AC\"\n}\n.fa-globe-africa:before{\n  content:\"\\F57C\"\n}\n.fa-globe-americas:before{\n  content:\"\\F57D\"\n}\n.fa-globe-asia:before{\n  content:\"\\F57E\"\n}\n.fa-gofore:before{\n  content:\"\\F3A7\"\n}\n.fa-golf-ball:before{\n  content:\"\\F450\"\n}\n.fa-goodreads:before{\n  content:\"\\F3A8\"\n}\n.fa-goodreads-g:before{\n  content:\"\\F3A9\"\n}\n.fa-google:before{\n  content:\"\\F1A0\"\n}\n.fa-google-drive:before{\n  content:\"\\F3AA\"\n}\n.fa-google-play:before{\n  content:\"\\F3AB\"\n}\n.fa-google-plus:before{\n  content:\"\\F2B3\"\n}\n.fa-google-plus-g:before{\n  content:\"\\F0D5\"\n}\n.fa-google-plus-square:before{\n  content:\"\\F0D4\"\n}\n.fa-google-wallet:before{\n  content:\"\\F1EE\"\n}\n.fa-gopuram:before{\n  content:\"\\F664\"\n}\n.fa-graduation-cap:before{\n  content:\"\\F19D\"\n}\n.fa-gratipay:before{\n  content:\"\\F184\"\n}\n.fa-grav:before{\n  content:\"\\F2D6\"\n}\n.fa-greater-than:before{\n  content:\"\\F531\"\n}\n.fa-greater-than-equal:before{\n  content:\"\\F532\"\n}\n.fa-grimace:before{\n  content:\"\\F57F\"\n}\n.fa-grin:before{\n  content:\"\\F580\"\n}\n.fa-grin-alt:before{\n  content:\"\\F581\"\n}\n.fa-grin-beam:before{\n  content:\"\\F582\"\n}\n.fa-grin-beam-sweat:before{\n  content:\"\\F583\"\n}\n.fa-grin-hearts:before{\n  content:\"\\F584\"\n}\n.fa-grin-squint:before{\n  content:\"\\F585\"\n}\n.fa-grin-squint-tears:before{\n  content:\"\\F586\"\n}\n.fa-grin-stars:before{\n  content:\"\\F587\"\n}\n.fa-grin-tears:before{\n  content:\"\\F588\"\n}\n.fa-grin-tongue:before{\n  content:\"\\F589\"\n}\n.fa-grin-tongue-squint:before{\n  content:\"\\F58A\"\n}\n.fa-grin-tongue-wink:before{\n  content:\"\\F58B\"\n}\n.fa-grin-wink:before{\n  content:\"\\F58C\"\n}\n.fa-grip-horizontal:before{\n  content:\"\\F58D\"\n}\n.fa-grip-vertical:before{\n  content:\"\\F58E\"\n}\n.fa-gripfire:before{\n  content:\"\\F3AC\"\n}\n.fa-grunt:before{\n  content:\"\\F3AD\"\n}\n.fa-gulp:before{\n  content:\"\\F3AE\"\n}\n.fa-h-square:before{\n  content:\"\\F0FD\"\n}\n.fa-hacker-news:before{\n  content:\"\\F1D4\"\n}\n.fa-hacker-news-square:before{\n  content:\"\\F3AF\"\n}\n.fa-hackerrank:before{\n  content:\"\\F5F7\"\n}\n.fa-hamsa:before{\n  content:\"\\F665\"\n}\n.fa-hand-holding:before{\n  content:\"\\F4BD\"\n}\n.fa-hand-holding-heart:before{\n  content:\"\\F4BE\"\n}\n.fa-hand-holding-usd:before{\n  content:\"\\F4C0\"\n}\n.fa-hand-lizard:before{\n  content:\"\\F258\"\n}\n.fa-hand-paper:before{\n  content:\"\\F256\"\n}\n.fa-hand-peace:before{\n  content:\"\\F25B\"\n}\n.fa-hand-point-down:before{\n  content:\"\\F0A7\"\n}\n.fa-hand-point-left:before{\n  content:\"\\F0A5\"\n}\n.fa-hand-point-right:before{\n  content:\"\\F0A4\"\n}\n.fa-hand-point-up:before{\n  content:\"\\F0A6\"\n}\n.fa-hand-pointer:before{\n  content:\"\\F25A\"\n}\n.fa-hand-rock:before{\n  content:\"\\F255\"\n}\n.fa-hand-scissors:before{\n  content:\"\\F257\"\n}\n.fa-hand-spock:before{\n  content:\"\\F259\"\n}\n.fa-hands:before{\n  content:\"\\F4C2\"\n}\n.fa-hands-helping:before{\n  content:\"\\F4C4\"\n}\n.fa-handshake:before{\n  content:\"\\F2B5\"\n}\n.fa-hashtag:before{\n  content:\"\\F292\"\n}\n.fa-haykal:before{\n  content:\"\\F666\"\n}\n.fa-hdd:before{\n  content:\"\\F0A0\"\n}\n.fa-heading:before{\n  content:\"\\F1DC\"\n}\n.fa-headphones:before{\n  content:\"\\F025\"\n}\n.fa-headphones-alt:before{\n  content:\"\\F58F\"\n}\n.fa-headset:before{\n  content:\"\\F590\"\n}\n.fa-heart:before{\n  content:\"\\F004\"\n}\n.fa-heartbeat:before{\n  content:\"\\F21E\"\n}\n.fa-helicopter:before{\n  content:\"\\F533\"\n}\n.fa-highlighter:before{\n  content:\"\\F591\"\n}\n.fa-hips:before{\n  content:\"\\F452\"\n}\n.fa-hire-a-helper:before{\n  content:\"\\F3B0\"\n}\n.fa-history:before{\n  content:\"\\F1DA\"\n}\n.fa-hockey-puck:before{\n  content:\"\\F453\"\n}\n.fa-home:before{\n  content:\"\\F015\"\n}\n.fa-hooli:before{\n  content:\"\\F427\"\n}\n.fa-hornbill:before{\n  content:\"\\F592\"\n}\n.fa-hospital:before{\n  content:\"\\F0F8\"\n}\n.fa-hospital-alt:before{\n  content:\"\\F47D\"\n}\n.fa-hospital-symbol:before{\n  content:\"\\F47E\"\n}\n.fa-hot-tub:before{\n  content:\"\\F593\"\n}\n.fa-hotel:before{\n  content:\"\\F594\"\n}\n.fa-hotjar:before{\n  content:\"\\F3B1\"\n}\n.fa-hourglass:before{\n  content:\"\\F254\"\n}\n.fa-hourglass-end:before{\n  content:\"\\F253\"\n}\n.fa-hourglass-half:before{\n  content:\"\\F252\"\n}\n.fa-hourglass-start:before{\n  content:\"\\F251\"\n}\n.fa-houzz:before{\n  content:\"\\F27C\"\n}\n.fa-html5:before{\n  content:\"\\F13B\"\n}\n.fa-hubspot:before{\n  content:\"\\F3B2\"\n}\n.fa-i-cursor:before{\n  content:\"\\F246\"\n}\n.fa-id-badge:before{\n  content:\"\\F2C1\"\n}\n.fa-id-card:before{\n  content:\"\\F2C2\"\n}\n.fa-id-card-alt:before{\n  content:\"\\F47F\"\n}\n.fa-image:before{\n  content:\"\\F03E\"\n}\n.fa-images:before{\n  content:\"\\F302\"\n}\n.fa-imdb:before{\n  content:\"\\F2D8\"\n}\n.fa-inbox:before{\n  content:\"\\F01C\"\n}\n.fa-indent:before{\n  content:\"\\F03C\"\n}\n.fa-industry:before{\n  content:\"\\F275\"\n}\n.fa-infinity:before{\n  content:\"\\F534\"\n}\n.fa-info:before{\n  content:\"\\F129\"\n}\n.fa-info-circle:before{\n  content:\"\\F05A\"\n}\n.fa-instagram:before{\n  content:\"\\F16D\"\n}\n.fa-internet-explorer:before{\n  content:\"\\F26B\"\n}\n.fa-ioxhost:before{\n  content:\"\\F208\"\n}\n.fa-italic:before{\n  content:\"\\F033\"\n}\n.fa-itunes:before{\n  content:\"\\F3B4\"\n}\n.fa-itunes-note:before{\n  content:\"\\F3B5\"\n}\n.fa-java:before{\n  content:\"\\F4E4\"\n}\n.fa-jedi:before{\n  content:\"\\F669\"\n}\n.fa-jedi-order:before{\n  content:\"\\F50E\"\n}\n.fa-jenkins:before{\n  content:\"\\F3B6\"\n}\n.fa-joget:before{\n  content:\"\\F3B7\"\n}\n.fa-joint:before{\n  content:\"\\F595\"\n}\n.fa-joomla:before{\n  content:\"\\F1AA\"\n}\n.fa-journal-whills:before{\n  content:\"\\F66A\"\n}\n.fa-js:before{\n  content:\"\\F3B8\"\n}\n.fa-js-square:before{\n  content:\"\\F3B9\"\n}\n.fa-jsfiddle:before{\n  content:\"\\F1CC\"\n}\n.fa-kaaba:before{\n  content:\"\\F66B\"\n}\n.fa-kaggle:before{\n  content:\"\\F5FA\"\n}\n.fa-key:before{\n  content:\"\\F084\"\n}\n.fa-keybase:before{\n  content:\"\\F4F5\"\n}\n.fa-keyboard:before{\n  content:\"\\F11C\"\n}\n.fa-keycdn:before{\n  content:\"\\F3BA\"\n}\n.fa-khanda:before{\n  content:\"\\F66D\"\n}\n.fa-kickstarter:before{\n  content:\"\\F3BB\"\n}\n.fa-kickstarter-k:before{\n  content:\"\\F3BC\"\n}\n.fa-kiss:before{\n  content:\"\\F596\"\n}\n.fa-kiss-beam:before{\n  content:\"\\F597\"\n}\n.fa-kiss-wink-heart:before{\n  content:\"\\F598\"\n}\n.fa-kiwi-bird:before{\n  content:\"\\F535\"\n}\n.fa-korvue:before{\n  content:\"\\F42F\"\n}\n.fa-landmark:before{\n  content:\"\\F66F\"\n}\n.fa-language:before{\n  content:\"\\F1AB\"\n}\n.fa-laptop:before{\n  content:\"\\F109\"\n}\n.fa-laptop-code:before{\n  content:\"\\F5FC\"\n}\n.fa-laravel:before{\n  content:\"\\F3BD\"\n}\n.fa-lastfm:before{\n  content:\"\\F202\"\n}\n.fa-lastfm-square:before{\n  content:\"\\F203\"\n}\n.fa-laugh:before{\n  content:\"\\F599\"\n}\n.fa-laugh-beam:before{\n  content:\"\\F59A\"\n}\n.fa-laugh-squint:before{\n  content:\"\\F59B\"\n}\n.fa-laugh-wink:before{\n  content:\"\\F59C\"\n}\n.fa-layer-group:before{\n  content:\"\\F5FD\"\n}\n.fa-leaf:before{\n  content:\"\\F06C\"\n}\n.fa-leanpub:before{\n  content:\"\\F212\"\n}\n.fa-lemon:before{\n  content:\"\\F094\"\n}\n.fa-less:before{\n  content:\"\\F41D\"\n}\n.fa-less-than:before{\n  content:\"\\F536\"\n}\n.fa-less-than-equal:before{\n  content:\"\\F537\"\n}\n.fa-level-down-alt:before{\n  content:\"\\F3BE\"\n}\n.fa-level-up-alt:before{\n  content:\"\\F3BF\"\n}\n.fa-life-ring:before{\n  content:\"\\F1CD\"\n}\n.fa-lightbulb:before{\n  content:\"\\F0EB\"\n}\n.fa-line:before{\n  content:\"\\F3C0\"\n}\n.fa-link:before{\n  content:\"\\F0C1\"\n}\n.fa-linkedin:before{\n  content:\"\\F08C\"\n}\n.fa-linkedin-in:before{\n  content:\"\\F0E1\"\n}\n.fa-linode:before{\n  content:\"\\F2B8\"\n}\n.fa-linux:before{\n  content:\"\\F17C\"\n}\n.fa-lira-sign:before{\n  content:\"\\F195\"\n}\n.fa-list:before{\n  content:\"\\F03A\"\n}\n.fa-list-alt:before{\n  content:\"\\F022\"\n}\n.fa-list-ol:before{\n  content:\"\\F0CB\"\n}\n.fa-list-ul:before{\n  content:\"\\F0CA\"\n}\n.fa-location-arrow:before{\n  content:\"\\F124\"\n}\n.fa-lock:before{\n  content:\"\\F023\"\n}\n.fa-lock-open:before{\n  content:\"\\F3C1\"\n}\n.fa-long-arrow-alt-down:before{\n  content:\"\\F309\"\n}\n.fa-long-arrow-alt-left:before{\n  content:\"\\F30A\"\n}\n.fa-long-arrow-alt-right:before{\n  content:\"\\F30B\"\n}\n.fa-long-arrow-alt-up:before{\n  content:\"\\F30C\"\n}\n.fa-low-vision:before{\n  content:\"\\F2A8\"\n}\n.fa-luggage-cart:before{\n  content:\"\\F59D\"\n}\n.fa-lyft:before{\n  content:\"\\F3C3\"\n}\n.fa-magento:before{\n  content:\"\\F3C4\"\n}\n.fa-magic:before{\n  content:\"\\F0D0\"\n}\n.fa-magnet:before{\n  content:\"\\F076\"\n}\n.fa-mail-bulk:before{\n  content:\"\\F674\"\n}\n.fa-mailchimp:before{\n  content:\"\\F59E\"\n}\n.fa-male:before{\n  content:\"\\F183\"\n}\n.fa-mandalorian:before{\n  content:\"\\F50F\"\n}\n.fa-map:before{\n  content:\"\\F279\"\n}\n.fa-map-marked:before{\n  content:\"\\F59F\"\n}\n.fa-map-marked-alt:before{\n  content:\"\\F5A0\"\n}\n.fa-map-marker:before{\n  content:\"\\F041\"\n}\n.fa-map-marker-alt:before{\n  content:\"\\F3C5\"\n}\n.fa-map-pin:before{\n  content:\"\\F276\"\n}\n.fa-map-signs:before{\n  content:\"\\F277\"\n}\n.fa-markdown:before{\n  content:\"\\F60F\"\n}\n.fa-marker:before{\n  content:\"\\F5A1\"\n}\n.fa-mars:before{\n  content:\"\\F222\"\n}\n.fa-mars-double:before{\n  content:\"\\F227\"\n}\n.fa-mars-stroke:before{\n  content:\"\\F229\"\n}\n.fa-mars-stroke-h:before{\n  content:\"\\F22B\"\n}\n.fa-mars-stroke-v:before{\n  content:\"\\F22A\"\n}\n.fa-mastodon:before{\n  content:\"\\F4F6\"\n}\n.fa-maxcdn:before{\n  content:\"\\F136\"\n}\n.fa-medal:before{\n  content:\"\\F5A2\"\n}\n.fa-medapps:before{\n  content:\"\\F3C6\"\n}\n.fa-medium:before{\n  content:\"\\F23A\"\n}\n.fa-medium-m:before{\n  content:\"\\F3C7\"\n}\n.fa-medkit:before{\n  content:\"\\F0FA\"\n}\n.fa-medrt:before{\n  content:\"\\F3C8\"\n}\n.fa-meetup:before{\n  content:\"\\F2E0\"\n}\n.fa-megaport:before{\n  content:\"\\F5A3\"\n}\n.fa-meh:before{\n  content:\"\\F11A\"\n}\n.fa-meh-blank:before{\n  content:\"\\F5A4\"\n}\n.fa-meh-rolling-eyes:before{\n  content:\"\\F5A5\"\n}\n.fa-memory:before{\n  content:\"\\F538\"\n}\n.fa-menorah:before{\n  content:\"\\F676\"\n}\n.fa-mercury:before{\n  content:\"\\F223\"\n}\n.fa-microchip:before{\n  content:\"\\F2DB\"\n}\n.fa-microphone:before{\n  content:\"\\F130\"\n}\n.fa-microphone-alt:before{\n  content:\"\\F3C9\"\n}\n.fa-microphone-alt-slash:before{\n  content:\"\\F539\"\n}\n.fa-microphone-slash:before{\n  content:\"\\F131\"\n}\n.fa-microscope:before{\n  content:\"\\F610\"\n}\n.fa-microsoft:before{\n  content:\"\\F3CA\"\n}\n.fa-minus:before{\n  content:\"\\F068\"\n}\n.fa-minus-circle:before{\n  content:\"\\F056\"\n}\n.fa-minus-square:before{\n  content:\"\\F146\"\n}\n.fa-mix:before{\n  content:\"\\F3CB\"\n}\n.fa-mixcloud:before{\n  content:\"\\F289\"\n}\n.fa-mizuni:before{\n  content:\"\\F3CC\"\n}\n.fa-mobile:before{\n  content:\"\\F10B\"\n}\n.fa-mobile-alt:before{\n  content:\"\\F3CD\"\n}\n.fa-modx:before{\n  content:\"\\F285\"\n}\n.fa-monero:before{\n  content:\"\\F3D0\"\n}\n.fa-money-bill:before{\n  content:\"\\F0D6\"\n}\n.fa-money-bill-alt:before{\n  content:\"\\F3D1\"\n}\n.fa-money-bill-wave:before{\n  content:\"\\F53A\"\n}\n.fa-money-bill-wave-alt:before{\n  content:\"\\F53B\"\n}\n.fa-money-check:before{\n  content:\"\\F53C\"\n}\n.fa-money-check-alt:before{\n  content:\"\\F53D\"\n}\n.fa-monument:before{\n  content:\"\\F5A6\"\n}\n.fa-moon:before{\n  content:\"\\F186\"\n}\n.fa-mortar-pestle:before{\n  content:\"\\F5A7\"\n}\n.fa-mosque:before{\n  content:\"\\F678\"\n}\n.fa-motorcycle:before{\n  content:\"\\F21C\"\n}\n.fa-mouse-pointer:before{\n  content:\"\\F245\"\n}\n.fa-music:before{\n  content:\"\\F001\"\n}\n.fa-napster:before{\n  content:\"\\F3D2\"\n}\n.fa-neos:before{\n  content:\"\\F612\"\n}\n.fa-neuter:before{\n  content:\"\\F22C\"\n}\n.fa-newspaper:before{\n  content:\"\\F1EA\"\n}\n.fa-nimblr:before{\n  content:\"\\F5A8\"\n}\n.fa-nintendo-switch:before{\n  content:\"\\F418\"\n}\n.fa-node:before{\n  content:\"\\F419\"\n}\n.fa-node-js:before{\n  content:\"\\F3D3\"\n}\n.fa-not-equal:before{\n  content:\"\\F53E\"\n}\n.fa-notes-medical:before{\n  content:\"\\F481\"\n}\n.fa-npm:before{\n  content:\"\\F3D4\"\n}\n.fa-ns8:before{\n  content:\"\\F3D5\"\n}\n.fa-nutritionix:before{\n  content:\"\\F3D6\"\n}\n.fa-object-group:before{\n  content:\"\\F247\"\n}\n.fa-object-ungroup:before{\n  content:\"\\F248\"\n}\n.fa-odnoklassniki:before{\n  content:\"\\F263\"\n}\n.fa-odnoklassniki-square:before{\n  content:\"\\F264\"\n}\n.fa-oil-can:before{\n  content:\"\\F613\"\n}\n.fa-old-republic:before{\n  content:\"\\F510\"\n}\n.fa-om:before{\n  content:\"\\F679\"\n}\n.fa-opencart:before{\n  content:\"\\F23D\"\n}\n.fa-openid:before{\n  content:\"\\F19B\"\n}\n.fa-opera:before{\n  content:\"\\F26A\"\n}\n.fa-optin-monster:before{\n  content:\"\\F23C\"\n}\n.fa-osi:before{\n  content:\"\\F41A\"\n}\n.fa-outdent:before{\n  content:\"\\F03B\"\n}\n.fa-page4:before{\n  content:\"\\F3D7\"\n}\n.fa-pagelines:before{\n  content:\"\\F18C\"\n}\n.fa-paint-brush:before{\n  content:\"\\F1FC\"\n}\n.fa-paint-roller:before{\n  content:\"\\F5AA\"\n}\n.fa-palette:before{\n  content:\"\\F53F\"\n}\n.fa-palfed:before{\n  content:\"\\F3D8\"\n}\n.fa-pallet:before{\n  content:\"\\F482\"\n}\n.fa-paper-plane:before{\n  content:\"\\F1D8\"\n}\n.fa-paperclip:before{\n  content:\"\\F0C6\"\n}\n.fa-parachute-box:before{\n  content:\"\\F4CD\"\n}\n.fa-paragraph:before{\n  content:\"\\F1DD\"\n}\n.fa-parking:before{\n  content:\"\\F540\"\n}\n.fa-passport:before{\n  content:\"\\F5AB\"\n}\n.fa-pastafarianism:before{\n  content:\"\\F67B\"\n}\n.fa-paste:before{\n  content:\"\\F0EA\"\n}\n.fa-patreon:before{\n  content:\"\\F3D9\"\n}\n.fa-pause:before{\n  content:\"\\F04C\"\n}\n.fa-pause-circle:before{\n  content:\"\\F28B\"\n}\n.fa-paw:before{\n  content:\"\\F1B0\"\n}\n.fa-paypal:before{\n  content:\"\\F1ED\"\n}\n.fa-peace:before{\n  content:\"\\F67C\"\n}\n.fa-pen:before{\n  content:\"\\F304\"\n}\n.fa-pen-alt:before{\n  content:\"\\F305\"\n}\n.fa-pen-fancy:before{\n  content:\"\\F5AC\"\n}\n.fa-pen-nib:before{\n  content:\"\\F5AD\"\n}\n.fa-pen-square:before{\n  content:\"\\F14B\"\n}\n.fa-pencil-alt:before{\n  content:\"\\F303\"\n}\n.fa-pencil-ruler:before{\n  content:\"\\F5AE\"\n}\n.fa-people-carry:before{\n  content:\"\\F4CE\"\n}\n.fa-percent:before{\n  content:\"\\F295\"\n}\n.fa-percentage:before{\n  content:\"\\F541\"\n}\n.fa-periscope:before{\n  content:\"\\F3DA\"\n}\n.fa-phabricator:before{\n  content:\"\\F3DB\"\n}\n.fa-phoenix-framework:before{\n  content:\"\\F3DC\"\n}\n.fa-phoenix-squadron:before{\n  content:\"\\F511\"\n}\n.fa-phone:before{\n  content:\"\\F095\"\n}\n.fa-phone-slash:before{\n  content:\"\\F3DD\"\n}\n.fa-phone-square:before{\n  content:\"\\F098\"\n}\n.fa-phone-volume:before{\n  content:\"\\F2A0\"\n}\n.fa-php:before{\n  content:\"\\F457\"\n}\n.fa-pied-piper:before{\n  content:\"\\F2AE\"\n}\n.fa-pied-piper-alt:before{\n  content:\"\\F1A8\"\n}\n.fa-pied-piper-hat:before{\n  content:\"\\F4E5\"\n}\n.fa-pied-piper-pp:before{\n  content:\"\\F1A7\"\n}\n.fa-piggy-bank:before{\n  content:\"\\F4D3\"\n}\n.fa-pills:before{\n  content:\"\\F484\"\n}\n.fa-pinterest:before{\n  content:\"\\F0D2\"\n}\n.fa-pinterest-p:before{\n  content:\"\\F231\"\n}\n.fa-pinterest-square:before{\n  content:\"\\F0D3\"\n}\n.fa-place-of-worship:before{\n  content:\"\\F67F\"\n}\n.fa-plane:before{\n  content:\"\\F072\"\n}\n.fa-plane-arrival:before{\n  content:\"\\F5AF\"\n}\n.fa-plane-departure:before{\n  content:\"\\F5B0\"\n}\n.fa-play:before{\n  content:\"\\F04B\"\n}\n.fa-play-circle:before{\n  content:\"\\F144\"\n}\n.fa-playstation:before{\n  content:\"\\F3DF\"\n}\n.fa-plug:before{\n  content:\"\\F1E6\"\n}\n.fa-plus:before{\n  content:\"\\F067\"\n}\n.fa-plus-circle:before{\n  content:\"\\F055\"\n}\n.fa-plus-square:before{\n  content:\"\\F0FE\"\n}\n.fa-podcast:before{\n  content:\"\\F2CE\"\n}\n.fa-poll:before{\n  content:\"\\F681\"\n}\n.fa-poll-h:before{\n  content:\"\\F682\"\n}\n.fa-poo:before{\n  content:\"\\F2FE\"\n}\n.fa-poop:before{\n  content:\"\\F619\"\n}\n.fa-portrait:before{\n  content:\"\\F3E0\"\n}\n.fa-pound-sign:before{\n  content:\"\\F154\"\n}\n.fa-power-off:before{\n  content:\"\\F011\"\n}\n.fa-pray:before{\n  content:\"\\F683\"\n}\n.fa-praying-hands:before{\n  content:\"\\F684\"\n}\n.fa-prescription:before{\n  content:\"\\F5B1\"\n}\n.fa-prescription-bottle:before{\n  content:\"\\F485\"\n}\n.fa-prescription-bottle-alt:before{\n  content:\"\\F486\"\n}\n.fa-print:before{\n  content:\"\\F02F\"\n}\n.fa-procedures:before{\n  content:\"\\F487\"\n}\n.fa-product-hunt:before{\n  content:\"\\F288\"\n}\n.fa-project-diagram:before{\n  content:\"\\F542\"\n}\n.fa-pushed:before{\n  content:\"\\F3E1\"\n}\n.fa-puzzle-piece:before{\n  content:\"\\F12E\"\n}\n.fa-python:before{\n  content:\"\\F3E2\"\n}\n.fa-qq:before{\n  content:\"\\F1D6\"\n}\n.fa-qrcode:before{\n  content:\"\\F029\"\n}\n.fa-question:before{\n  content:\"\\F128\"\n}\n.fa-question-circle:before{\n  content:\"\\F059\"\n}\n.fa-quidditch:before{\n  content:\"\\F458\"\n}\n.fa-quinscape:before{\n  content:\"\\F459\"\n}\n.fa-quora:before{\n  content:\"\\F2C4\"\n}\n.fa-quote-left:before{\n  content:\"\\F10D\"\n}\n.fa-quote-right:before{\n  content:\"\\F10E\"\n}\n.fa-quran:before{\n  content:\"\\F687\"\n}\n.fa-r-project:before{\n  content:\"\\F4F7\"\n}\n.fa-random:before{\n  content:\"\\F074\"\n}\n.fa-ravelry:before{\n  content:\"\\F2D9\"\n}\n.fa-react:before{\n  content:\"\\F41B\"\n}\n.fa-readme:before{\n  content:\"\\F4D5\"\n}\n.fa-rebel:before{\n  content:\"\\F1D0\"\n}\n.fa-receipt:before{\n  content:\"\\F543\"\n}\n.fa-recycle:before{\n  content:\"\\F1B8\"\n}\n.fa-red-river:before{\n  content:\"\\F3E3\"\n}\n.fa-reddit:before{\n  content:\"\\F1A1\"\n}\n.fa-reddit-alien:before{\n  content:\"\\F281\"\n}\n.fa-reddit-square:before{\n  content:\"\\F1A2\"\n}\n.fa-redo:before{\n  content:\"\\F01E\"\n}\n.fa-redo-alt:before{\n  content:\"\\F2F9\"\n}\n.fa-registered:before{\n  content:\"\\F25D\"\n}\n.fa-rendact:before{\n  content:\"\\F3E4\"\n}\n.fa-renren:before{\n  content:\"\\F18B\"\n}\n.fa-reply:before{\n  content:\"\\F3E5\"\n}\n.fa-reply-all:before{\n  content:\"\\F122\"\n}\n.fa-replyd:before{\n  content:\"\\F3E6\"\n}\n.fa-researchgate:before{\n  content:\"\\F4F8\"\n}\n.fa-resolving:before{\n  content:\"\\F3E7\"\n}\n.fa-retweet:before{\n  content:\"\\F079\"\n}\n.fa-rev:before{\n  content:\"\\F5B2\"\n}\n.fa-ribbon:before{\n  content:\"\\F4D6\"\n}\n.fa-road:before{\n  content:\"\\F018\"\n}\n.fa-robot:before{\n  content:\"\\F544\"\n}\n.fa-rocket:before{\n  content:\"\\F135\"\n}\n.fa-rocketchat:before{\n  content:\"\\F3E8\"\n}\n.fa-rockrms:before{\n  content:\"\\F3E9\"\n}\n.fa-route:before{\n  content:\"\\F4D7\"\n}\n.fa-rss:before{\n  content:\"\\F09E\"\n}\n.fa-rss-square:before{\n  content:\"\\F143\"\n}\n.fa-ruble-sign:before{\n  content:\"\\F158\"\n}\n.fa-ruler:before{\n  content:\"\\F545\"\n}\n.fa-ruler-combined:before{\n  content:\"\\F546\"\n}\n.fa-ruler-horizontal:before{\n  content:\"\\F547\"\n}\n.fa-ruler-vertical:before{\n  content:\"\\F548\"\n}\n.fa-rupee-sign:before{\n  content:\"\\F156\"\n}\n.fa-sad-cry:before{\n  content:\"\\F5B3\"\n}\n.fa-sad-tear:before{\n  content:\"\\F5B4\"\n}\n.fa-safari:before{\n  content:\"\\F267\"\n}\n.fa-sass:before{\n  content:\"\\F41E\"\n}\n.fa-save:before{\n  content:\"\\F0C7\"\n}\n.fa-schlix:before{\n  content:\"\\F3EA\"\n}\n.fa-school:before{\n  content:\"\\F549\"\n}\n.fa-screwdriver:before{\n  content:\"\\F54A\"\n}\n.fa-scribd:before{\n  content:\"\\F28A\"\n}\n.fa-search:before{\n  content:\"\\F002\"\n}\n.fa-search-dollar:before{\n  content:\"\\F688\"\n}\n.fa-search-location:before{\n  content:\"\\F689\"\n}\n.fa-search-minus:before{\n  content:\"\\F010\"\n}\n.fa-search-plus:before{\n  content:\"\\F00E\"\n}\n.fa-searchengin:before{\n  content:\"\\F3EB\"\n}\n.fa-seedling:before{\n  content:\"\\F4D8\"\n}\n.fa-sellcast:before{\n  content:\"\\F2DA\"\n}\n.fa-sellsy:before{\n  content:\"\\F213\"\n}\n.fa-server:before{\n  content:\"\\F233\"\n}\n.fa-servicestack:before{\n  content:\"\\F3EC\"\n}\n.fa-shapes:before{\n  content:\"\\F61F\"\n}\n.fa-share:before{\n  content:\"\\F064\"\n}\n.fa-share-alt:before{\n  content:\"\\F1E0\"\n}\n.fa-share-alt-square:before{\n  content:\"\\F1E1\"\n}\n.fa-share-square:before{\n  content:\"\\F14D\"\n}\n.fa-shekel-sign:before{\n  content:\"\\F20B\"\n}\n.fa-shield-alt:before{\n  content:\"\\F3ED\"\n}\n.fa-ship:before{\n  content:\"\\F21A\"\n}\n.fa-shipping-fast:before{\n  content:\"\\F48B\"\n}\n.fa-shirtsinbulk:before{\n  content:\"\\F214\"\n}\n.fa-shoe-prints:before{\n  content:\"\\F54B\"\n}\n.fa-shopping-bag:before{\n  content:\"\\F290\"\n}\n.fa-shopping-basket:before{\n  content:\"\\F291\"\n}\n.fa-shopping-cart:before{\n  content:\"\\F07A\"\n}\n.fa-shopware:before{\n  content:\"\\F5B5\"\n}\n.fa-shower:before{\n  content:\"\\F2CC\"\n}\n.fa-shuttle-van:before{\n  content:\"\\F5B6\"\n}\n.fa-sign:before{\n  content:\"\\F4D9\"\n}\n.fa-sign-in-alt:before{\n  content:\"\\F2F6\"\n}\n.fa-sign-language:before{\n  content:\"\\F2A7\"\n}\n.fa-sign-out-alt:before{\n  content:\"\\F2F5\"\n}\n.fa-signal:before{\n  content:\"\\F012\"\n}\n.fa-signature:before{\n  content:\"\\F5B7\"\n}\n.fa-simplybuilt:before{\n  content:\"\\F215\"\n}\n.fa-sistrix:before{\n  content:\"\\F3EE\"\n}\n.fa-sitemap:before{\n  content:\"\\F0E8\"\n}\n.fa-sith:before{\n  content:\"\\F512\"\n}\n.fa-skull:before{\n  content:\"\\F54C\"\n}\n.fa-skyatlas:before{\n  content:\"\\F216\"\n}\n.fa-skype:before{\n  content:\"\\F17E\"\n}\n.fa-slack:before{\n  content:\"\\F198\"\n}\n.fa-slack-hash:before{\n  content:\"\\F3EF\"\n}\n.fa-sliders-h:before{\n  content:\"\\F1DE\"\n}\n.fa-slideshare:before{\n  content:\"\\F1E7\"\n}\n.fa-smile:before{\n  content:\"\\F118\"\n}\n.fa-smile-beam:before{\n  content:\"\\F5B8\"\n}\n.fa-smile-wink:before{\n  content:\"\\F4DA\"\n}\n.fa-smoking:before{\n  content:\"\\F48D\"\n}\n.fa-smoking-ban:before{\n  content:\"\\F54D\"\n}\n.fa-snapchat:before{\n  content:\"\\F2AB\"\n}\n.fa-snapchat-ghost:before{\n  content:\"\\F2AC\"\n}\n.fa-snapchat-square:before{\n  content:\"\\F2AD\"\n}\n.fa-snowflake:before{\n  content:\"\\F2DC\"\n}\n.fa-socks:before{\n  content:\"\\F696\"\n}\n.fa-solar-panel:before{\n  content:\"\\F5BA\"\n}\n.fa-sort:before{\n  content:\"\\F0DC\"\n}\n.fa-sort-alpha-down:before{\n  content:\"\\F15D\"\n}\n.fa-sort-alpha-up:before{\n  content:\"\\F15E\"\n}\n.fa-sort-amount-down:before{\n  content:\"\\F160\"\n}\n.fa-sort-amount-up:before{\n  content:\"\\F161\"\n}\n.fa-sort-down:before{\n  content:\"\\F0DD\"\n}\n.fa-sort-numeric-down:before{\n  content:\"\\F162\"\n}\n.fa-sort-numeric-up:before{\n  content:\"\\F163\"\n}\n.fa-sort-up:before{\n  content:\"\\F0DE\"\n}\n.fa-soundcloud:before{\n  content:\"\\F1BE\"\n}\n.fa-spa:before{\n  content:\"\\F5BB\"\n}\n.fa-space-shuttle:before{\n  content:\"\\F197\"\n}\n.fa-speakap:before{\n  content:\"\\F3F3\"\n}\n.fa-spinner:before{\n  content:\"\\F110\"\n}\n.fa-splotch:before{\n  content:\"\\F5BC\"\n}\n.fa-spotify:before{\n  content:\"\\F1BC\"\n}\n.fa-spray-can:before{\n  content:\"\\F5BD\"\n}\n.fa-square:before{\n  content:\"\\F0C8\"\n}\n.fa-square-full:before{\n  content:\"\\F45C\"\n}\n.fa-square-root-alt:before{\n  content:\"\\F698\"\n}\n.fa-squarespace:before{\n  content:\"\\F5BE\"\n}\n.fa-stack-exchange:before{\n  content:\"\\F18D\"\n}\n.fa-stack-overflow:before{\n  content:\"\\F16C\"\n}\n.fa-stamp:before{\n  content:\"\\F5BF\"\n}\n.fa-star:before{\n  content:\"\\F005\"\n}\n.fa-star-and-crescent:before{\n  content:\"\\F699\"\n}\n.fa-star-half:before{\n  content:\"\\F089\"\n}\n.fa-star-half-alt:before{\n  content:\"\\F5C0\"\n}\n.fa-star-of-david:before{\n  content:\"\\F69A\"\n}\n.fa-star-of-life:before{\n  content:\"\\F621\"\n}\n.fa-staylinked:before{\n  content:\"\\F3F5\"\n}\n.fa-steam:before{\n  content:\"\\F1B6\"\n}\n.fa-steam-square:before{\n  content:\"\\F1B7\"\n}\n.fa-steam-symbol:before{\n  content:\"\\F3F6\"\n}\n.fa-step-backward:before{\n  content:\"\\F048\"\n}\n.fa-step-forward:before{\n  content:\"\\F051\"\n}\n.fa-stethoscope:before{\n  content:\"\\F0F1\"\n}\n.fa-sticker-mule:before{\n  content:\"\\F3F7\"\n}\n.fa-sticky-note:before{\n  content:\"\\F249\"\n}\n.fa-stop:before{\n  content:\"\\F04D\"\n}\n.fa-stop-circle:before{\n  content:\"\\F28D\"\n}\n.fa-stopwatch:before{\n  content:\"\\F2F2\"\n}\n.fa-store:before{\n  content:\"\\F54E\"\n}\n.fa-store-alt:before{\n  content:\"\\F54F\"\n}\n.fa-strava:before{\n  content:\"\\F428\"\n}\n.fa-stream:before{\n  content:\"\\F550\"\n}\n.fa-street-view:before{\n  content:\"\\F21D\"\n}\n.fa-strikethrough:before{\n  content:\"\\F0CC\"\n}\n.fa-stripe:before{\n  content:\"\\F429\"\n}\n.fa-stripe-s:before{\n  content:\"\\F42A\"\n}\n.fa-stroopwafel:before{\n  content:\"\\F551\"\n}\n.fa-studiovinari:before{\n  content:\"\\F3F8\"\n}\n.fa-stumbleupon:before{\n  content:\"\\F1A4\"\n}\n.fa-stumbleupon-circle:before{\n  content:\"\\F1A3\"\n}\n.fa-subscript:before{\n  content:\"\\F12C\"\n}\n.fa-subway:before{\n  content:\"\\F239\"\n}\n.fa-suitcase:before{\n  content:\"\\F0F2\"\n}\n.fa-suitcase-rolling:before{\n  content:\"\\F5C1\"\n}\n.fa-sun:before{\n  content:\"\\F185\"\n}\n.fa-superpowers:before{\n  content:\"\\F2DD\"\n}\n.fa-superscript:before{\n  content:\"\\F12B\"\n}\n.fa-supple:before{\n  content:\"\\F3F9\"\n}\n.fa-surprise:before{\n  content:\"\\F5C2\"\n}\n.fa-swatchbook:before{\n  content:\"\\F5C3\"\n}\n.fa-swimmer:before{\n  content:\"\\F5C4\"\n}\n.fa-swimming-pool:before{\n  content:\"\\F5C5\"\n}\n.fa-synagogue:before{\n  content:\"\\F69B\"\n}\n.fa-sync:before{\n  content:\"\\F021\"\n}\n.fa-sync-alt:before{\n  content:\"\\F2F1\"\n}\n.fa-syringe:before{\n  content:\"\\F48E\"\n}\n.fa-table:before{\n  content:\"\\F0CE\"\n}\n.fa-table-tennis:before{\n  content:\"\\F45D\"\n}\n.fa-tablet:before{\n  content:\"\\F10A\"\n}\n.fa-tablet-alt:before{\n  content:\"\\F3FA\"\n}\n.fa-tablets:before{\n  content:\"\\F490\"\n}\n.fa-tachometer-alt:before{\n  content:\"\\F3FD\"\n}\n.fa-tag:before{\n  content:\"\\F02B\"\n}\n.fa-tags:before{\n  content:\"\\F02C\"\n}\n.fa-tape:before{\n  content:\"\\F4DB\"\n}\n.fa-tasks:before{\n  content:\"\\F0AE\"\n}\n.fa-taxi:before{\n  content:\"\\F1BA\"\n}\n.fa-teamspeak:before{\n  content:\"\\F4F9\"\n}\n.fa-teeth:before{\n  content:\"\\F62E\"\n}\n.fa-teeth-open:before{\n  content:\"\\F62F\"\n}\n.fa-telegram:before{\n  content:\"\\F2C6\"\n}\n.fa-telegram-plane:before{\n  content:\"\\F3FE\"\n}\n.fa-tencent-weibo:before{\n  content:\"\\F1D5\"\n}\n.fa-terminal:before{\n  content:\"\\F120\"\n}\n.fa-text-height:before{\n  content:\"\\F034\"\n}\n.fa-text-width:before{\n  content:\"\\F035\"\n}\n.fa-th:before{\n  content:\"\\F00A\"\n}\n.fa-th-large:before{\n  content:\"\\F009\"\n}\n.fa-th-list:before{\n  content:\"\\F00B\"\n}\n.fa-the-red-yeti:before{\n  content:\"\\F69D\"\n}\n.fa-theater-masks:before{\n  content:\"\\F630\"\n}\n.fa-themeco:before{\n  content:\"\\F5C6\"\n}\n.fa-themeisle:before{\n  content:\"\\F2B2\"\n}\n.fa-thermometer:before{\n  content:\"\\F491\"\n}\n.fa-thermometer-empty:before{\n  content:\"\\F2CB\"\n}\n.fa-thermometer-full:before{\n  content:\"\\F2C7\"\n}\n.fa-thermometer-half:before{\n  content:\"\\F2C9\"\n}\n.fa-thermometer-quarter:before{\n  content:\"\\F2CA\"\n}\n.fa-thermometer-three-quarters:before{\n  content:\"\\F2C8\"\n}\n.fa-thumbs-down:before{\n  content:\"\\F165\"\n}\n.fa-thumbs-up:before{\n  content:\"\\F164\"\n}\n.fa-thumbtack:before{\n  content:\"\\F08D\"\n}\n.fa-ticket-alt:before{\n  content:\"\\F3FF\"\n}\n.fa-times:before{\n  content:\"\\F00D\"\n}\n.fa-times-circle:before{\n  content:\"\\F057\"\n}\n.fa-tint:before{\n  content:\"\\F043\"\n}\n.fa-tint-slash:before{\n  content:\"\\F5C7\"\n}\n.fa-tired:before{\n  content:\"\\F5C8\"\n}\n.fa-toggle-off:before{\n  content:\"\\F204\"\n}\n.fa-toggle-on:before{\n  content:\"\\F205\"\n}\n.fa-toolbox:before{\n  content:\"\\F552\"\n}\n.fa-tooth:before{\n  content:\"\\F5C9\"\n}\n.fa-torah:before{\n  content:\"\\F6A0\"\n}\n.fa-torii-gate:before{\n  content:\"\\F6A1\"\n}\n.fa-trade-federation:before{\n  content:\"\\F513\"\n}\n.fa-trademark:before{\n  content:\"\\F25C\"\n}\n.fa-traffic-light:before{\n  content:\"\\F637\"\n}\n.fa-train:before{\n  content:\"\\F238\"\n}\n.fa-transgender:before{\n  content:\"\\F224\"\n}\n.fa-transgender-alt:before{\n  content:\"\\F225\"\n}\n.fa-trash:before{\n  content:\"\\F1F8\"\n}\n.fa-trash-alt:before{\n  content:\"\\F2ED\"\n}\n.fa-tree:before{\n  content:\"\\F1BB\"\n}\n.fa-trello:before{\n  content:\"\\F181\"\n}\n.fa-tripadvisor:before{\n  content:\"\\F262\"\n}\n.fa-trophy:before{\n  content:\"\\F091\"\n}\n.fa-truck:before{\n  content:\"\\F0D1\"\n}\n.fa-truck-loading:before{\n  content:\"\\F4DE\"\n}\n.fa-truck-monster:before{\n  content:\"\\F63B\"\n}\n.fa-truck-moving:before{\n  content:\"\\F4DF\"\n}\n.fa-truck-pickup:before{\n  content:\"\\F63C\"\n}\n.fa-tshirt:before{\n  content:\"\\F553\"\n}\n.fa-tty:before{\n  content:\"\\F1E4\"\n}\n.fa-tumblr:before{\n  content:\"\\F173\"\n}\n.fa-tumblr-square:before{\n  content:\"\\F174\"\n}\n.fa-tv:before{\n  content:\"\\F26C\"\n}\n.fa-twitch:before{\n  content:\"\\F1E8\"\n}\n.fa-twitter:before{\n  content:\"\\F099\"\n}\n.fa-twitter-square:before{\n  content:\"\\F081\"\n}\n.fa-typo3:before{\n  content:\"\\F42B\"\n}\n.fa-uber:before{\n  content:\"\\F402\"\n}\n.fa-uikit:before{\n  content:\"\\F403\"\n}\n.fa-umbrella:before{\n  content:\"\\F0E9\"\n}\n.fa-umbrella-beach:before{\n  content:\"\\F5CA\"\n}\n.fa-underline:before{\n  content:\"\\F0CD\"\n}\n.fa-undo:before{\n  content:\"\\F0E2\"\n}\n.fa-undo-alt:before{\n  content:\"\\F2EA\"\n}\n.fa-uniregistry:before{\n  content:\"\\F404\"\n}\n.fa-universal-access:before{\n  content:\"\\F29A\"\n}\n.fa-university:before{\n  content:\"\\F19C\"\n}\n.fa-unlink:before{\n  content:\"\\F127\"\n}\n.fa-unlock:before{\n  content:\"\\F09C\"\n}\n.fa-unlock-alt:before{\n  content:\"\\F13E\"\n}\n.fa-untappd:before{\n  content:\"\\F405\"\n}\n.fa-upload:before{\n  content:\"\\F093\"\n}\n.fa-usb:before{\n  content:\"\\F287\"\n}\n.fa-user:before{\n  content:\"\\F007\"\n}\n.fa-user-alt:before{\n  content:\"\\F406\"\n}\n.fa-user-alt-slash:before{\n  content:\"\\F4FA\"\n}\n.fa-user-astronaut:before{\n  content:\"\\F4FB\"\n}\n.fa-user-check:before{\n  content:\"\\F4FC\"\n}\n.fa-user-circle:before{\n  content:\"\\F2BD\"\n}\n.fa-user-clock:before{\n  content:\"\\F4FD\"\n}\n.fa-user-cog:before{\n  content:\"\\F4FE\"\n}\n.fa-user-edit:before{\n  content:\"\\F4FF\"\n}\n.fa-user-friends:before{\n  content:\"\\F500\"\n}\n.fa-user-graduate:before{\n  content:\"\\F501\"\n}\n.fa-user-lock:before{\n  content:\"\\F502\"\n}\n.fa-user-md:before{\n  content:\"\\F0F0\"\n}\n.fa-user-minus:before{\n  content:\"\\F503\"\n}\n.fa-user-ninja:before{\n  content:\"\\F504\"\n}\n.fa-user-plus:before{\n  content:\"\\F234\"\n}\n.fa-user-secret:before{\n  content:\"\\F21B\"\n}\n.fa-user-shield:before{\n  content:\"\\F505\"\n}\n.fa-user-slash:before{\n  content:\"\\F506\"\n}\n.fa-user-tag:before{\n  content:\"\\F507\"\n}\n.fa-user-tie:before{\n  content:\"\\F508\"\n}\n.fa-user-times:before{\n  content:\"\\F235\"\n}\n.fa-users:before{\n  content:\"\\F0C0\"\n}\n.fa-users-cog:before{\n  content:\"\\F509\"\n}\n.fa-ussunnah:before{\n  content:\"\\F407\"\n}\n.fa-utensil-spoon:before{\n  content:\"\\F2E5\"\n}\n.fa-utensils:before{\n  content:\"\\F2E7\"\n}\n.fa-vaadin:before{\n  content:\"\\F408\"\n}\n.fa-vector-square:before{\n  content:\"\\F5CB\"\n}\n.fa-venus:before{\n  content:\"\\F221\"\n}\n.fa-venus-double:before{\n  content:\"\\F226\"\n}\n.fa-venus-mars:before{\n  content:\"\\F228\"\n}\n.fa-viacoin:before{\n  content:\"\\F237\"\n}\n.fa-viadeo:before{\n  content:\"\\F2A9\"\n}\n.fa-viadeo-square:before{\n  content:\"\\F2AA\"\n}\n.fa-vial:before{\n  content:\"\\F492\"\n}\n.fa-vials:before{\n  content:\"\\F493\"\n}\n.fa-viber:before{\n  content:\"\\F409\"\n}\n.fa-video:before{\n  content:\"\\F03D\"\n}\n.fa-video-slash:before{\n  content:\"\\F4E2\"\n}\n.fa-vihara:before{\n  content:\"\\F6A7\"\n}\n.fa-vimeo:before{\n  content:\"\\F40A\"\n}\n.fa-vimeo-square:before{\n  content:\"\\F194\"\n}\n.fa-vimeo-v:before{\n  content:\"\\F27D\"\n}\n.fa-vine:before{\n  content:\"\\F1CA\"\n}\n.fa-vk:before{\n  content:\"\\F189\"\n}\n.fa-vnv:before{\n  content:\"\\F40B\"\n}\n.fa-volleyball-ball:before{\n  content:\"\\F45F\"\n}\n.fa-volume-down:before{\n  content:\"\\F027\"\n}\n.fa-volume-off:before{\n  content:\"\\F026\"\n}\n.fa-volume-up:before{\n  content:\"\\F028\"\n}\n.fa-vuejs:before{\n  content:\"\\F41F\"\n}\n.fa-walking:before{\n  content:\"\\F554\"\n}\n.fa-wallet:before{\n  content:\"\\F555\"\n}\n.fa-warehouse:before{\n  content:\"\\F494\"\n}\n.fa-weebly:before{\n  content:\"\\F5CC\"\n}\n.fa-weibo:before{\n  content:\"\\F18A\"\n}\n.fa-weight:before{\n  content:\"\\F496\"\n}\n.fa-weight-hanging:before{\n  content:\"\\F5CD\"\n}\n.fa-weixin:before{\n  content:\"\\F1D7\"\n}\n.fa-whatsapp:before{\n  content:\"\\F232\"\n}\n.fa-whatsapp-square:before{\n  content:\"\\F40C\"\n}\n.fa-wheelchair:before{\n  content:\"\\F193\"\n}\n.fa-whmcs:before{\n  content:\"\\F40D\"\n}\n.fa-wifi:before{\n  content:\"\\F1EB\"\n}\n.fa-wikipedia-w:before{\n  content:\"\\F266\"\n}\n.fa-window-close:before{\n  content:\"\\F410\"\n}\n.fa-window-maximize:before{\n  content:\"\\F2D0\"\n}\n.fa-window-minimize:before{\n  content:\"\\F2D1\"\n}\n.fa-window-restore:before{\n  content:\"\\F2D2\"\n}\n.fa-windows:before{\n  content:\"\\F17A\"\n}\n.fa-wine-glass:before{\n  content:\"\\F4E3\"\n}\n.fa-wine-glass-alt:before{\n  content:\"\\F5CE\"\n}\n.fa-wix:before{\n  content:\"\\F5CF\"\n}\n.fa-wolf-pack-battalion:before{\n  content:\"\\F514\"\n}\n.fa-won-sign:before{\n  content:\"\\F159\"\n}\n.fa-wordpress:before{\n  content:\"\\F19A\"\n}\n.fa-wordpress-simple:before{\n  content:\"\\F411\"\n}\n.fa-wpbeginner:before{\n  content:\"\\F297\"\n}\n.fa-wpexplorer:before{\n  content:\"\\F2DE\"\n}\n.fa-wpforms:before{\n  content:\"\\F298\"\n}\n.fa-wrench:before{\n  content:\"\\F0AD\"\n}\n.fa-x-ray:before{\n  content:\"\\F497\"\n}\n.fa-xbox:before{\n  content:\"\\F412\"\n}\n.fa-xing:before{\n  content:\"\\F168\"\n}\n.fa-xing-square:before{\n  content:\"\\F169\"\n}\n.fa-y-combinator:before{\n  content:\"\\F23B\"\n}\n.fa-yahoo:before{\n  content:\"\\F19E\"\n}\n.fa-yandex:before{\n  content:\"\\F413\"\n}\n.fa-yandex-international:before{\n  content:\"\\F414\"\n}\n.fa-yelp:before{\n  content:\"\\F1E9\"\n}\n.fa-yen-sign:before{\n  content:\"\\F157\"\n}\n.fa-yin-yang:before{\n  content:\"\\F6AD\"\n}\n.fa-yoast:before{\n  content:\"\\F2B1\"\n}\n.fa-youtube:before{\n  content:\"\\F167\"\n}\n.fa-youtube-square:before{\n  content:\"\\F431\"\n}\n.fa-zhihu:before{\n  content:\"\\F63F\"\n}\n.sr-only{\n  border:0;\n  clip:rect(0,0,0,0);\n  height:1px;\n  margin:-1px;\n  overflow:hidden;\n  padding:0;\n  position:absolute;\n  width:1px\n}\n.sr-only-focusable:active,.sr-only-focusable:focus{\n  clip:auto;\n  height:auto;\n  margin:0;\n  overflow:visible;\n  position:static;\n  width:auto\n}\n\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + escape(__webpack_require__("5fd5")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("2f06")) + ") format(\"woff\"); }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__("8941")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("5c6f")) + ") format(\"woff\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + escape(__webpack_require__("bc54")) + ") format(\"woff2\"), url(" + escape(__webpack_require__("0000")) + ") format(\"woff\"); }\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n", "", {"version":3,"sources":["/Users/JPVenegas/Documents/LDSIV/UX/quasar/proyectoq/node_modules/quasar-extras/fontawesome/fontawesome.css"],"names":[],"mappings":"AAAA;;;GAGG;CACF;EACC,kCAAkC;EAClC,mCAAmC;EACnC,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;CACpB;AACD;EACE,wBAAwB;EACxB,mBAAmB;EACnB,wBAAwB;CACzB;AACD;EACE,UAAU;CACX;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,6CAAoC;UAApC,oCAAoC;CACrC;AACD;EACE,+CAAsC;UAAtC,sCAAsC;CACvC;AACD;EACE;MACI,+BAAsB;cAAtB,sBAAsB;GACzB;EACD;MACI,gCAAuB;cAAvB,uBAAuB;GAC1B;CACF;AAPD;EACE;MACI,+BAAsB;cAAtB,sBAAsB;GACzB;EACD;MACI,gCAAuB;cAAvB,uBAAuB;GAC1B;CACF;AACD;EACE,sEAAsE;EACtE,gCAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,sEAAsE;EACtE,iCAAwB;UAAxB,wBAAwB;CACzB;AACD;EACE,sEAAsE;EACtE,iCAAwB;UAAxB,wBAAwB;CACzB;AACD;EACE,gFAAgF;EAChF,6BAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,6BAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,+EAA+E;CAChF;AACD;EACE,4BAAmB;UAAnB,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;CACV;AACD;EACE,OAAO;EACP,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,UAAU;CACX;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,SAAS;CACV;AACD;EACE,UAAU;EACV,YAAY;EACZ,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;CACX;;AAED;EACE,qCAAqC;EACrC,mBAAmB;EACnB,oBAAoB;EACpB,iGAA8F,EAAE;;AAElG;EACE,qCAAqC,EAAE;AACzC;EACE,mCAAmC;EACnC,mBAAmB;EACnB,iBAAiB;EACjB,iGAAgG,EAAE;;AAEpG;EACE,mCAAmC;EACnC,iBAAiB,EAAE;AACrB;EACE,mCAAmC;EACnC,mBAAmB;EACnB,iBAAiB;EACjB,iGAA4F,EAAE;AAChG;;EAEE,mCAAmC;EACnC,iBAAiB,EAAE","file":"fontawesome.css","sourcesContent":["/*!\n * Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n .fa,.fab,.fal,.far,.fas{\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  display:inline-block;\n  font-style:normal;\n  font-variant:normal;\n  text-rendering:auto;\n  line-height:1\n}\n.fa-lg{\n  font-size:1.33333em;\n  line-height:.75em;\n  vertical-align:-.0667em\n}\n.fa-xs{\n  font-size:.75em\n}\n.fa-sm{\n  font-size:.875em\n}\n.fa-1x{\n  font-size:1em\n}\n.fa-2x{\n  font-size:2em\n}\n.fa-3x{\n  font-size:3em\n}\n.fa-4x{\n  font-size:4em\n}\n.fa-5x{\n  font-size:5em\n}\n.fa-6x{\n  font-size:6em\n}\n.fa-7x{\n  font-size:7em\n}\n.fa-8x{\n  font-size:8em\n}\n.fa-9x{\n  font-size:9em\n}\n.fa-10x{\n  font-size:10em\n}\n.fa-fw{\n  text-align:center;\n  width:1.25em\n}\n.fa-ul{\n  list-style-type:none;\n  margin-left:2.5em;\n  padding-left:0\n}\n.fa-ul>li{\n  position:relative\n}\n.fa-li{\n  left:-2em;\n  position:absolute;\n  text-align:center;\n  width:2em;\n  line-height:inherit\n}\n.fa-border{\n  border:.08em solid #eee;\n  border-radius:.1em;\n  padding:.2em .25em .15em\n}\n.fa-pull-left{\n  float:left\n}\n.fa-pull-right{\n  float:right\n}\n.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{\n  margin-right:.3em\n}\n.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{\n  margin-left:.3em\n}\n.fa-spin{\n  animation:fa-spin 2s infinite linear\n}\n.fa-pulse{\n  animation:fa-spin 1s infinite steps(8)\n}\n@keyframes fa-spin{\n  0%{\n      transform:rotate(0deg)\n  }\n  to{\n      transform:rotate(1turn)\n  }\n}\n.fa-rotate-90{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform:rotate(90deg)\n}\n.fa-rotate-180{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform:rotate(180deg)\n}\n.fa-rotate-270{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform:rotate(270deg)\n}\n.fa-flip-horizontal{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform:scaleX(-1)\n}\n.fa-flip-vertical{\n  transform:scaleY(-1)\n}\n.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{\n  -ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"\n}\n.fa-flip-horizontal.fa-flip-vertical{\n  transform:scale(-1)\n}\n:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{\n  -webkit-filter:none;\n  filter:none\n}\n.fa-stack{\n  display:inline-block;\n  height:2em;\n  line-height:2em;\n  position:relative;\n  vertical-align:middle;\n  width:2em\n}\n.fa-stack-1x,.fa-stack-2x{\n  left:0;\n  position:absolute;\n  text-align:center;\n  width:100%\n}\n.fa-stack-1x{\n  line-height:inherit\n}\n.fa-stack-2x{\n  font-size:2em\n}\n.fa-inverse{\n  color:#fff\n}\n.fa-500px:before{\n  content:\"\\f26e\"\n}\n.fa-accessible-icon:before{\n  content:\"\\f368\"\n}\n.fa-accusoft:before{\n  content:\"\\f369\"\n}\n.fa-ad:before{\n  content:\"\\f641\"\n}\n.fa-address-book:before{\n  content:\"\\f2b9\"\n}\n.fa-address-card:before{\n  content:\"\\f2bb\"\n}\n.fa-adjust:before{\n  content:\"\\f042\"\n}\n.fa-adn:before{\n  content:\"\\f170\"\n}\n.fa-adversal:before{\n  content:\"\\f36a\"\n}\n.fa-affiliatetheme:before{\n  content:\"\\f36b\"\n}\n.fa-air-freshener:before{\n  content:\"\\f5d0\"\n}\n.fa-algolia:before{\n  content:\"\\f36c\"\n}\n.fa-align-center:before{\n  content:\"\\f037\"\n}\n.fa-align-justify:before{\n  content:\"\\f039\"\n}\n.fa-align-left:before{\n  content:\"\\f036\"\n}\n.fa-align-right:before{\n  content:\"\\f038\"\n}\n.fa-alipay:before{\n  content:\"\\f642\"\n}\n.fa-allergies:before{\n  content:\"\\f461\"\n}\n.fa-amazon:before{\n  content:\"\\f270\"\n}\n.fa-amazon-pay:before{\n  content:\"\\f42c\"\n}\n.fa-ambulance:before{\n  content:\"\\f0f9\"\n}\n.fa-american-sign-language-interpreting:before{\n  content:\"\\f2a3\"\n}\n.fa-amilia:before{\n  content:\"\\f36d\"\n}\n.fa-anchor:before{\n  content:\"\\f13d\"\n}\n.fa-android:before{\n  content:\"\\f17b\"\n}\n.fa-angellist:before{\n  content:\"\\f209\"\n}\n.fa-angle-double-down:before{\n  content:\"\\f103\"\n}\n.fa-angle-double-left:before{\n  content:\"\\f100\"\n}\n.fa-angle-double-right:before{\n  content:\"\\f101\"\n}\n.fa-angle-double-up:before{\n  content:\"\\f102\"\n}\n.fa-angle-down:before{\n  content:\"\\f107\"\n}\n.fa-angle-left:before{\n  content:\"\\f104\"\n}\n.fa-angle-right:before{\n  content:\"\\f105\"\n}\n.fa-angle-up:before{\n  content:\"\\f106\"\n}\n.fa-angry:before{\n  content:\"\\f556\"\n}\n.fa-angrycreative:before{\n  content:\"\\f36e\"\n}\n.fa-angular:before{\n  content:\"\\f420\"\n}\n.fa-ankh:before{\n  content:\"\\f644\"\n}\n.fa-app-store:before{\n  content:\"\\f36f\"\n}\n.fa-app-store-ios:before{\n  content:\"\\f370\"\n}\n.fa-apper:before{\n  content:\"\\f371\"\n}\n.fa-apple:before{\n  content:\"\\f179\"\n}\n.fa-apple-alt:before{\n  content:\"\\f5d1\"\n}\n.fa-apple-pay:before{\n  content:\"\\f415\"\n}\n.fa-archive:before{\n  content:\"\\f187\"\n}\n.fa-archway:before{\n  content:\"\\f557\"\n}\n.fa-arrow-alt-circle-down:before{\n  content:\"\\f358\"\n}\n.fa-arrow-alt-circle-left:before{\n  content:\"\\f359\"\n}\n.fa-arrow-alt-circle-right:before{\n  content:\"\\f35a\"\n}\n.fa-arrow-alt-circle-up:before{\n  content:\"\\f35b\"\n}\n.fa-arrow-circle-down:before{\n  content:\"\\f0ab\"\n}\n.fa-arrow-circle-left:before{\n  content:\"\\f0a8\"\n}\n.fa-arrow-circle-right:before{\n  content:\"\\f0a9\"\n}\n.fa-arrow-circle-up:before{\n  content:\"\\f0aa\"\n}\n.fa-arrow-down:before{\n  content:\"\\f063\"\n}\n.fa-arrow-left:before{\n  content:\"\\f060\"\n}\n.fa-arrow-right:before{\n  content:\"\\f061\"\n}\n.fa-arrow-up:before{\n  content:\"\\f062\"\n}\n.fa-arrows-alt:before{\n  content:\"\\f0b2\"\n}\n.fa-arrows-alt-h:before{\n  content:\"\\f337\"\n}\n.fa-arrows-alt-v:before{\n  content:\"\\f338\"\n}\n.fa-assistive-listening-systems:before{\n  content:\"\\f2a2\"\n}\n.fa-asterisk:before{\n  content:\"\\f069\"\n}\n.fa-asymmetrik:before{\n  content:\"\\f372\"\n}\n.fa-at:before{\n  content:\"\\f1fa\"\n}\n.fa-atlas:before{\n  content:\"\\f558\"\n}\n.fa-atom:before{\n  content:\"\\f5d2\"\n}\n.fa-audible:before{\n  content:\"\\f373\"\n}\n.fa-audio-description:before{\n  content:\"\\f29e\"\n}\n.fa-autoprefixer:before{\n  content:\"\\f41c\"\n}\n.fa-avianex:before{\n  content:\"\\f374\"\n}\n.fa-aviato:before{\n  content:\"\\f421\"\n}\n.fa-award:before{\n  content:\"\\f559\"\n}\n.fa-aws:before{\n  content:\"\\f375\"\n}\n.fa-backspace:before{\n  content:\"\\f55a\"\n}\n.fa-backward:before{\n  content:\"\\f04a\"\n}\n.fa-balance-scale:before{\n  content:\"\\f24e\"\n}\n.fa-ban:before{\n  content:\"\\f05e\"\n}\n.fa-band-aid:before{\n  content:\"\\f462\"\n}\n.fa-bandcamp:before{\n  content:\"\\f2d5\"\n}\n.fa-barcode:before{\n  content:\"\\f02a\"\n}\n.fa-bars:before{\n  content:\"\\f0c9\"\n}\n.fa-baseball-ball:before{\n  content:\"\\f433\"\n}\n.fa-basketball-ball:before{\n  content:\"\\f434\"\n}\n.fa-bath:before{\n  content:\"\\f2cd\"\n}\n.fa-battery-empty:before{\n  content:\"\\f244\"\n}\n.fa-battery-full:before{\n  content:\"\\f240\"\n}\n.fa-battery-half:before{\n  content:\"\\f242\"\n}\n.fa-battery-quarter:before{\n  content:\"\\f243\"\n}\n.fa-battery-three-quarters:before{\n  content:\"\\f241\"\n}\n.fa-bed:before{\n  content:\"\\f236\"\n}\n.fa-beer:before{\n  content:\"\\f0fc\"\n}\n.fa-behance:before{\n  content:\"\\f1b4\"\n}\n.fa-behance-square:before{\n  content:\"\\f1b5\"\n}\n.fa-bell:before{\n  content:\"\\f0f3\"\n}\n.fa-bell-slash:before{\n  content:\"\\f1f6\"\n}\n.fa-bezier-curve:before{\n  content:\"\\f55b\"\n}\n.fa-bible:before{\n  content:\"\\f647\"\n}\n.fa-bicycle:before{\n  content:\"\\f206\"\n}\n.fa-bimobject:before{\n  content:\"\\f378\"\n}\n.fa-binoculars:before{\n  content:\"\\f1e5\"\n}\n.fa-birthday-cake:before{\n  content:\"\\f1fd\"\n}\n.fa-bitbucket:before{\n  content:\"\\f171\"\n}\n.fa-bitcoin:before{\n  content:\"\\f379\"\n}\n.fa-bity:before{\n  content:\"\\f37a\"\n}\n.fa-black-tie:before{\n  content:\"\\f27e\"\n}\n.fa-blackberry:before{\n  content:\"\\f37b\"\n}\n.fa-blender:before{\n  content:\"\\f517\"\n}\n.fa-blind:before{\n  content:\"\\f29d\"\n}\n.fa-blogger:before{\n  content:\"\\f37c\"\n}\n.fa-blogger-b:before{\n  content:\"\\f37d\"\n}\n.fa-bluetooth:before{\n  content:\"\\f293\"\n}\n.fa-bluetooth-b:before{\n  content:\"\\f294\"\n}\n.fa-bold:before{\n  content:\"\\f032\"\n}\n.fa-bolt:before{\n  content:\"\\f0e7\"\n}\n.fa-bomb:before{\n  content:\"\\f1e2\"\n}\n.fa-bone:before{\n  content:\"\\f5d7\"\n}\n.fa-bong:before{\n  content:\"\\f55c\"\n}\n.fa-book:before{\n  content:\"\\f02d\"\n}\n.fa-book-open:before{\n  content:\"\\f518\"\n}\n.fa-book-reader:before{\n  content:\"\\f5da\"\n}\n.fa-bookmark:before{\n  content:\"\\f02e\"\n}\n.fa-bowling-ball:before{\n  content:\"\\f436\"\n}\n.fa-box:before{\n  content:\"\\f466\"\n}\n.fa-box-open:before{\n  content:\"\\f49e\"\n}\n.fa-boxes:before{\n  content:\"\\f468\"\n}\n.fa-braille:before{\n  content:\"\\f2a1\"\n}\n.fa-brain:before{\n  content:\"\\f5dc\"\n}\n.fa-briefcase:before{\n  content:\"\\f0b1\"\n}\n.fa-briefcase-medical:before{\n  content:\"\\f469\"\n}\n.fa-broadcast-tower:before{\n  content:\"\\f519\"\n}\n.fa-broom:before{\n  content:\"\\f51a\"\n}\n.fa-brush:before{\n  content:\"\\f55d\"\n}\n.fa-btc:before{\n  content:\"\\f15a\"\n}\n.fa-bug:before{\n  content:\"\\f188\"\n}\n.fa-building:before{\n  content:\"\\f1ad\"\n}\n.fa-bullhorn:before{\n  content:\"\\f0a1\"\n}\n.fa-bullseye:before{\n  content:\"\\f140\"\n}\n.fa-burn:before{\n  content:\"\\f46a\"\n}\n.fa-buromobelexperte:before{\n  content:\"\\f37f\"\n}\n.fa-bus:before{\n  content:\"\\f207\"\n}\n.fa-bus-alt:before{\n  content:\"\\f55e\"\n}\n.fa-business-time:before{\n  content:\"\\f64a\"\n}\n.fa-buysellads:before{\n  content:\"\\f20d\"\n}\n.fa-calculator:before{\n  content:\"\\f1ec\"\n}\n.fa-calendar:before{\n  content:\"\\f133\"\n}\n.fa-calendar-alt:before{\n  content:\"\\f073\"\n}\n.fa-calendar-check:before{\n  content:\"\\f274\"\n}\n.fa-calendar-minus:before{\n  content:\"\\f272\"\n}\n.fa-calendar-plus:before{\n  content:\"\\f271\"\n}\n.fa-calendar-times:before{\n  content:\"\\f273\"\n}\n.fa-camera:before{\n  content:\"\\f030\"\n}\n.fa-camera-retro:before{\n  content:\"\\f083\"\n}\n.fa-cannabis:before{\n  content:\"\\f55f\"\n}\n.fa-capsules:before{\n  content:\"\\f46b\"\n}\n.fa-car:before{\n  content:\"\\f1b9\"\n}\n.fa-car-alt:before{\n  content:\"\\f5de\"\n}\n.fa-car-battery:before{\n  content:\"\\f5df\"\n}\n.fa-car-crash:before{\n  content:\"\\f5e1\"\n}\n.fa-car-side:before{\n  content:\"\\f5e4\"\n}\n.fa-caret-down:before{\n  content:\"\\f0d7\"\n}\n.fa-caret-left:before{\n  content:\"\\f0d9\"\n}\n.fa-caret-right:before{\n  content:\"\\f0da\"\n}\n.fa-caret-square-down:before{\n  content:\"\\f150\"\n}\n.fa-caret-square-left:before{\n  content:\"\\f191\"\n}\n.fa-caret-square-right:before{\n  content:\"\\f152\"\n}\n.fa-caret-square-up:before{\n  content:\"\\f151\"\n}\n.fa-caret-up:before{\n  content:\"\\f0d8\"\n}\n.fa-cart-arrow-down:before{\n  content:\"\\f218\"\n}\n.fa-cart-plus:before{\n  content:\"\\f217\"\n}\n.fa-cc-amazon-pay:before{\n  content:\"\\f42d\"\n}\n.fa-cc-amex:before{\n  content:\"\\f1f3\"\n}\n.fa-cc-apple-pay:before{\n  content:\"\\f416\"\n}\n.fa-cc-diners-club:before{\n  content:\"\\f24c\"\n}\n.fa-cc-discover:before{\n  content:\"\\f1f2\"\n}\n.fa-cc-jcb:before{\n  content:\"\\f24b\"\n}\n.fa-cc-mastercard:before{\n  content:\"\\f1f1\"\n}\n.fa-cc-paypal:before{\n  content:\"\\f1f4\"\n}\n.fa-cc-stripe:before{\n  content:\"\\f1f5\"\n}\n.fa-cc-visa:before{\n  content:\"\\f1f0\"\n}\n.fa-centercode:before{\n  content:\"\\f380\"\n}\n.fa-certificate:before{\n  content:\"\\f0a3\"\n}\n.fa-chalkboard:before{\n  content:\"\\f51b\"\n}\n.fa-chalkboard-teacher:before{\n  content:\"\\f51c\"\n}\n.fa-charging-station:before{\n  content:\"\\f5e7\"\n}\n.fa-chart-area:before{\n  content:\"\\f1fe\"\n}\n.fa-chart-bar:before{\n  content:\"\\f080\"\n}\n.fa-chart-line:before{\n  content:\"\\f201\"\n}\n.fa-chart-pie:before{\n  content:\"\\f200\"\n}\n.fa-check:before{\n  content:\"\\f00c\"\n}\n.fa-check-circle:before{\n  content:\"\\f058\"\n}\n.fa-check-double:before{\n  content:\"\\f560\"\n}\n.fa-check-square:before{\n  content:\"\\f14a\"\n}\n.fa-chess:before{\n  content:\"\\f439\"\n}\n.fa-chess-bishop:before{\n  content:\"\\f43a\"\n}\n.fa-chess-board:before{\n  content:\"\\f43c\"\n}\n.fa-chess-king:before{\n  content:\"\\f43f\"\n}\n.fa-chess-knight:before{\n  content:\"\\f441\"\n}\n.fa-chess-pawn:before{\n  content:\"\\f443\"\n}\n.fa-chess-queen:before{\n  content:\"\\f445\"\n}\n.fa-chess-rook:before{\n  content:\"\\f447\"\n}\n.fa-chevron-circle-down:before{\n  content:\"\\f13a\"\n}\n.fa-chevron-circle-left:before{\n  content:\"\\f137\"\n}\n.fa-chevron-circle-right:before{\n  content:\"\\f138\"\n}\n.fa-chevron-circle-up:before{\n  content:\"\\f139\"\n}\n.fa-chevron-down:before{\n  content:\"\\f078\"\n}\n.fa-chevron-left:before{\n  content:\"\\f053\"\n}\n.fa-chevron-right:before{\n  content:\"\\f054\"\n}\n.fa-chevron-up:before{\n  content:\"\\f077\"\n}\n.fa-child:before{\n  content:\"\\f1ae\"\n}\n.fa-chrome:before{\n  content:\"\\f268\"\n}\n.fa-church:before{\n  content:\"\\f51d\"\n}\n.fa-circle:before{\n  content:\"\\f111\"\n}\n.fa-circle-notch:before{\n  content:\"\\f1ce\"\n}\n.fa-city:before{\n  content:\"\\f64f\"\n}\n.fa-clipboard:before{\n  content:\"\\f328\"\n}\n.fa-clipboard-check:before{\n  content:\"\\f46c\"\n}\n.fa-clipboard-list:before{\n  content:\"\\f46d\"\n}\n.fa-clock:before{\n  content:\"\\f017\"\n}\n.fa-clone:before{\n  content:\"\\f24d\"\n}\n.fa-closed-captioning:before{\n  content:\"\\f20a\"\n}\n.fa-cloud:before{\n  content:\"\\f0c2\"\n}\n.fa-cloud-download-alt:before{\n  content:\"\\f381\"\n}\n.fa-cloud-upload-alt:before{\n  content:\"\\f382\"\n}\n.fa-cloudscale:before{\n  content:\"\\f383\"\n}\n.fa-cloudsmith:before{\n  content:\"\\f384\"\n}\n.fa-cloudversify:before{\n  content:\"\\f385\"\n}\n.fa-cocktail:before{\n  content:\"\\f561\"\n}\n.fa-code:before{\n  content:\"\\f121\"\n}\n.fa-code-branch:before{\n  content:\"\\f126\"\n}\n.fa-codepen:before{\n  content:\"\\f1cb\"\n}\n.fa-codiepie:before{\n  content:\"\\f284\"\n}\n.fa-coffee:before{\n  content:\"\\f0f4\"\n}\n.fa-cog:before{\n  content:\"\\f013\"\n}\n.fa-cogs:before{\n  content:\"\\f085\"\n}\n.fa-coins:before{\n  content:\"\\f51e\"\n}\n.fa-columns:before{\n  content:\"\\f0db\"\n}\n.fa-comment:before{\n  content:\"\\f075\"\n}\n.fa-comment-alt:before{\n  content:\"\\f27a\"\n}\n.fa-comment-dollar:before{\n  content:\"\\f651\"\n}\n.fa-comment-dots:before{\n  content:\"\\f4ad\"\n}\n.fa-comment-slash:before{\n  content:\"\\f4b3\"\n}\n.fa-comments:before{\n  content:\"\\f086\"\n}\n.fa-comments-dollar:before{\n  content:\"\\f653\"\n}\n.fa-compact-disc:before{\n  content:\"\\f51f\"\n}\n.fa-compass:before{\n  content:\"\\f14e\"\n}\n.fa-compress:before{\n  content:\"\\f066\"\n}\n.fa-concierge-bell:before{\n  content:\"\\f562\"\n}\n.fa-connectdevelop:before{\n  content:\"\\f20e\"\n}\n.fa-contao:before{\n  content:\"\\f26d\"\n}\n.fa-cookie:before{\n  content:\"\\f563\"\n}\n.fa-cookie-bite:before{\n  content:\"\\f564\"\n}\n.fa-copy:before{\n  content:\"\\f0c5\"\n}\n.fa-copyright:before{\n  content:\"\\f1f9\"\n}\n.fa-couch:before{\n  content:\"\\f4b8\"\n}\n.fa-cpanel:before{\n  content:\"\\f388\"\n}\n.fa-creative-commons:before{\n  content:\"\\f25e\"\n}\n.fa-creative-commons-by:before{\n  content:\"\\f4e7\"\n}\n.fa-creative-commons-nc:before{\n  content:\"\\f4e8\"\n}\n.fa-creative-commons-nc-eu:before{\n  content:\"\\f4e9\"\n}\n.fa-creative-commons-nc-jp:before{\n  content:\"\\f4ea\"\n}\n.fa-creative-commons-nd:before{\n  content:\"\\f4eb\"\n}\n.fa-creative-commons-pd:before{\n  content:\"\\f4ec\"\n}\n.fa-creative-commons-pd-alt:before{\n  content:\"\\f4ed\"\n}\n.fa-creative-commons-remix:before{\n  content:\"\\f4ee\"\n}\n.fa-creative-commons-sa:before{\n  content:\"\\f4ef\"\n}\n.fa-creative-commons-sampling:before{\n  content:\"\\f4f0\"\n}\n.fa-creative-commons-sampling-plus:before{\n  content:\"\\f4f1\"\n}\n.fa-creative-commons-share:before{\n  content:\"\\f4f2\"\n}\n.fa-credit-card:before{\n  content:\"\\f09d\"\n}\n.fa-crop:before{\n  content:\"\\f125\"\n}\n.fa-crop-alt:before{\n  content:\"\\f565\"\n}\n.fa-cross:before{\n  content:\"\\f654\"\n}\n.fa-crosshairs:before{\n  content:\"\\f05b\"\n}\n.fa-crow:before{\n  content:\"\\f520\"\n}\n.fa-crown:before{\n  content:\"\\f521\"\n}\n.fa-css3:before{\n  content:\"\\f13c\"\n}\n.fa-css3-alt:before{\n  content:\"\\f38b\"\n}\n.fa-cube:before{\n  content:\"\\f1b2\"\n}\n.fa-cubes:before{\n  content:\"\\f1b3\"\n}\n.fa-cut:before{\n  content:\"\\f0c4\"\n}\n.fa-cuttlefish:before{\n  content:\"\\f38c\"\n}\n.fa-d-and-d:before{\n  content:\"\\f38d\"\n}\n.fa-dashcube:before{\n  content:\"\\f210\"\n}\n.fa-database:before{\n  content:\"\\f1c0\"\n}\n.fa-deaf:before{\n  content:\"\\f2a4\"\n}\n.fa-delicious:before{\n  content:\"\\f1a5\"\n}\n.fa-deploydog:before{\n  content:\"\\f38e\"\n}\n.fa-deskpro:before{\n  content:\"\\f38f\"\n}\n.fa-desktop:before{\n  content:\"\\f108\"\n}\n.fa-deviantart:before{\n  content:\"\\f1bd\"\n}\n.fa-dharmachakra:before{\n  content:\"\\f655\"\n}\n.fa-diagnoses:before{\n  content:\"\\f470\"\n}\n.fa-dice:before{\n  content:\"\\f522\"\n}\n.fa-dice-five:before{\n  content:\"\\f523\"\n}\n.fa-dice-four:before{\n  content:\"\\f524\"\n}\n.fa-dice-one:before{\n  content:\"\\f525\"\n}\n.fa-dice-six:before{\n  content:\"\\f526\"\n}\n.fa-dice-three:before{\n  content:\"\\f527\"\n}\n.fa-dice-two:before{\n  content:\"\\f528\"\n}\n.fa-digg:before{\n  content:\"\\f1a6\"\n}\n.fa-digital-ocean:before{\n  content:\"\\f391\"\n}\n.fa-digital-tachograph:before{\n  content:\"\\f566\"\n}\n.fa-directions:before{\n  content:\"\\f5eb\"\n}\n.fa-discord:before{\n  content:\"\\f392\"\n}\n.fa-discourse:before{\n  content:\"\\f393\"\n}\n.fa-divide:before{\n  content:\"\\f529\"\n}\n.fa-dizzy:before{\n  content:\"\\f567\"\n}\n.fa-dna:before{\n  content:\"\\f471\"\n}\n.fa-dochub:before{\n  content:\"\\f394\"\n}\n.fa-docker:before{\n  content:\"\\f395\"\n}\n.fa-dollar-sign:before{\n  content:\"\\f155\"\n}\n.fa-dolly:before{\n  content:\"\\f472\"\n}\n.fa-dolly-flatbed:before{\n  content:\"\\f474\"\n}\n.fa-donate:before{\n  content:\"\\f4b9\"\n}\n.fa-door-closed:before{\n  content:\"\\f52a\"\n}\n.fa-door-open:before{\n  content:\"\\f52b\"\n}\n.fa-dot-circle:before{\n  content:\"\\f192\"\n}\n.fa-dove:before{\n  content:\"\\f4ba\"\n}\n.fa-download:before{\n  content:\"\\f019\"\n}\n.fa-draft2digital:before{\n  content:\"\\f396\"\n}\n.fa-drafting-compass:before{\n  content:\"\\f568\"\n}\n.fa-draw-polygon:before{\n  content:\"\\f5ee\"\n}\n.fa-dribbble:before{\n  content:\"\\f17d\"\n}\n.fa-dribbble-square:before{\n  content:\"\\f397\"\n}\n.fa-dropbox:before{\n  content:\"\\f16b\"\n}\n.fa-drum:before{\n  content:\"\\f569\"\n}\n.fa-drum-steelpan:before{\n  content:\"\\f56a\"\n}\n.fa-drupal:before{\n  content:\"\\f1a9\"\n}\n.fa-dumbbell:before{\n  content:\"\\f44b\"\n}\n.fa-dyalog:before{\n  content:\"\\f399\"\n}\n.fa-earlybirds:before{\n  content:\"\\f39a\"\n}\n.fa-ebay:before{\n  content:\"\\f4f4\"\n}\n.fa-edge:before{\n  content:\"\\f282\"\n}\n.fa-edit:before{\n  content:\"\\f044\"\n}\n.fa-eject:before{\n  content:\"\\f052\"\n}\n.fa-elementor:before{\n  content:\"\\f430\"\n}\n.fa-ellipsis-h:before{\n  content:\"\\f141\"\n}\n.fa-ellipsis-v:before{\n  content:\"\\f142\"\n}\n.fa-ello:before{\n  content:\"\\f5f1\"\n}\n.fa-ember:before{\n  content:\"\\f423\"\n}\n.fa-empire:before{\n  content:\"\\f1d1\"\n}\n.fa-envelope:before{\n  content:\"\\f0e0\"\n}\n.fa-envelope-open:before{\n  content:\"\\f2b6\"\n}\n.fa-envelope-open-text:before{\n  content:\"\\f658\"\n}\n.fa-envelope-square:before{\n  content:\"\\f199\"\n}\n.fa-envira:before{\n  content:\"\\f299\"\n}\n.fa-equals:before{\n  content:\"\\f52c\"\n}\n.fa-eraser:before{\n  content:\"\\f12d\"\n}\n.fa-erlang:before{\n  content:\"\\f39d\"\n}\n.fa-ethereum:before{\n  content:\"\\f42e\"\n}\n.fa-etsy:before{\n  content:\"\\f2d7\"\n}\n.fa-euro-sign:before{\n  content:\"\\f153\"\n}\n.fa-exchange-alt:before{\n  content:\"\\f362\"\n}\n.fa-exclamation:before{\n  content:\"\\f12a\"\n}\n.fa-exclamation-circle:before{\n  content:\"\\f06a\"\n}\n.fa-exclamation-triangle:before{\n  content:\"\\f071\"\n}\n.fa-expand:before{\n  content:\"\\f065\"\n}\n.fa-expand-arrows-alt:before{\n  content:\"\\f31e\"\n}\n.fa-expeditedssl:before{\n  content:\"\\f23e\"\n}\n.fa-external-link-alt:before{\n  content:\"\\f35d\"\n}\n.fa-external-link-square-alt:before{\n  content:\"\\f360\"\n}\n.fa-eye:before{\n  content:\"\\f06e\"\n}\n.fa-eye-dropper:before{\n  content:\"\\f1fb\"\n}\n.fa-eye-slash:before{\n  content:\"\\f070\"\n}\n.fa-facebook:before{\n  content:\"\\f09a\"\n}\n.fa-facebook-f:before{\n  content:\"\\f39e\"\n}\n.fa-facebook-messenger:before{\n  content:\"\\f39f\"\n}\n.fa-facebook-square:before{\n  content:\"\\f082\"\n}\n.fa-fast-backward:before{\n  content:\"\\f049\"\n}\n.fa-fast-forward:before{\n  content:\"\\f050\"\n}\n.fa-fax:before{\n  content:\"\\f1ac\"\n}\n.fa-feather:before{\n  content:\"\\f52d\"\n}\n.fa-feather-alt:before{\n  content:\"\\f56b\"\n}\n.fa-female:before{\n  content:\"\\f182\"\n}\n.fa-fighter-jet:before{\n  content:\"\\f0fb\"\n}\n.fa-file:before{\n  content:\"\\f15b\"\n}\n.fa-file-alt:before{\n  content:\"\\f15c\"\n}\n.fa-file-archive:before{\n  content:\"\\f1c6\"\n}\n.fa-file-audio:before{\n  content:\"\\f1c7\"\n}\n.fa-file-code:before{\n  content:\"\\f1c9\"\n}\n.fa-file-contract:before{\n  content:\"\\f56c\"\n}\n.fa-file-download:before{\n  content:\"\\f56d\"\n}\n.fa-file-excel:before{\n  content:\"\\f1c3\"\n}\n.fa-file-export:before{\n  content:\"\\f56e\"\n}\n.fa-file-image:before{\n  content:\"\\f1c5\"\n}\n.fa-file-import:before{\n  content:\"\\f56f\"\n}\n.fa-file-invoice:before{\n  content:\"\\f570\"\n}\n.fa-file-invoice-dollar:before{\n  content:\"\\f571\"\n}\n.fa-file-medical:before{\n  content:\"\\f477\"\n}\n.fa-file-medical-alt:before{\n  content:\"\\f478\"\n}\n.fa-file-pdf:before{\n  content:\"\\f1c1\"\n}\n.fa-file-powerpoint:before{\n  content:\"\\f1c4\"\n}\n.fa-file-prescription:before{\n  content:\"\\f572\"\n}\n.fa-file-signature:before{\n  content:\"\\f573\"\n}\n.fa-file-upload:before{\n  content:\"\\f574\"\n}\n.fa-file-video:before{\n  content:\"\\f1c8\"\n}\n.fa-file-word:before{\n  content:\"\\f1c2\"\n}\n.fa-fill:before{\n  content:\"\\f575\"\n}\n.fa-fill-drip:before{\n  content:\"\\f576\"\n}\n.fa-film:before{\n  content:\"\\f008\"\n}\n.fa-filter:before{\n  content:\"\\f0b0\"\n}\n.fa-fingerprint:before{\n  content:\"\\f577\"\n}\n.fa-fire:before{\n  content:\"\\f06d\"\n}\n.fa-fire-extinguisher:before{\n  content:\"\\f134\"\n}\n.fa-firefox:before{\n  content:\"\\f269\"\n}\n.fa-first-aid:before{\n  content:\"\\f479\"\n}\n.fa-first-order:before{\n  content:\"\\f2b0\"\n}\n.fa-first-order-alt:before{\n  content:\"\\f50a\"\n}\n.fa-firstdraft:before{\n  content:\"\\f3a1\"\n}\n.fa-fish:before{\n  content:\"\\f578\"\n}\n.fa-flag:before{\n  content:\"\\f024\"\n}\n.fa-flag-checkered:before{\n  content:\"\\f11e\"\n}\n.fa-flask:before{\n  content:\"\\f0c3\"\n}\n.fa-flickr:before{\n  content:\"\\f16e\"\n}\n.fa-flipboard:before{\n  content:\"\\f44d\"\n}\n.fa-flushed:before{\n  content:\"\\f579\"\n}\n.fa-fly:before{\n  content:\"\\f417\"\n}\n.fa-folder:before{\n  content:\"\\f07b\"\n}\n.fa-folder-minus:before{\n  content:\"\\f65d\"\n}\n.fa-folder-open:before{\n  content:\"\\f07c\"\n}\n.fa-folder-plus:before{\n  content:\"\\f65e\"\n}\n.fa-font:before{\n  content:\"\\f031\"\n}\n.fa-font-awesome:before{\n  content:\"\\f2b4\"\n}\n.fa-font-awesome-alt:before{\n  content:\"\\f35c\"\n}\n.fa-font-awesome-flag:before{\n  content:\"\\f425\"\n}\n.fa-font-awesome-logo-full:before{\n  content:\"\\f4e6\"\n}\n.fa-fonticons:before{\n  content:\"\\f280\"\n}\n.fa-fonticons-fi:before{\n  content:\"\\f3a2\"\n}\n.fa-football-ball:before{\n  content:\"\\f44e\"\n}\n.fa-fort-awesome:before{\n  content:\"\\f286\"\n}\n.fa-fort-awesome-alt:before{\n  content:\"\\f3a3\"\n}\n.fa-forumbee:before{\n  content:\"\\f211\"\n}\n.fa-forward:before{\n  content:\"\\f04e\"\n}\n.fa-foursquare:before{\n  content:\"\\f180\"\n}\n.fa-free-code-camp:before{\n  content:\"\\f2c5\"\n}\n.fa-freebsd:before{\n  content:\"\\f3a4\"\n}\n.fa-frog:before{\n  content:\"\\f52e\"\n}\n.fa-frown:before{\n  content:\"\\f119\"\n}\n.fa-frown-open:before{\n  content:\"\\f57a\"\n}\n.fa-fulcrum:before{\n  content:\"\\f50b\"\n}\n.fa-funnel-dollar:before{\n  content:\"\\f662\"\n}\n.fa-futbol:before{\n  content:\"\\f1e3\"\n}\n.fa-galactic-republic:before{\n  content:\"\\f50c\"\n}\n.fa-galactic-senate:before{\n  content:\"\\f50d\"\n}\n.fa-gamepad:before{\n  content:\"\\f11b\"\n}\n.fa-gas-pump:before{\n  content:\"\\f52f\"\n}\n.fa-gavel:before{\n  content:\"\\f0e3\"\n}\n.fa-gem:before{\n  content:\"\\f3a5\"\n}\n.fa-genderless:before{\n  content:\"\\f22d\"\n}\n.fa-get-pocket:before{\n  content:\"\\f265\"\n}\n.fa-gg:before{\n  content:\"\\f260\"\n}\n.fa-gg-circle:before{\n  content:\"\\f261\"\n}\n.fa-gift:before{\n  content:\"\\f06b\"\n}\n.fa-git:before{\n  content:\"\\f1d3\"\n}\n.fa-git-square:before{\n  content:\"\\f1d2\"\n}\n.fa-github:before{\n  content:\"\\f09b\"\n}\n.fa-github-alt:before{\n  content:\"\\f113\"\n}\n.fa-github-square:before{\n  content:\"\\f092\"\n}\n.fa-gitkraken:before{\n  content:\"\\f3a6\"\n}\n.fa-gitlab:before{\n  content:\"\\f296\"\n}\n.fa-gitter:before{\n  content:\"\\f426\"\n}\n.fa-glass-martini:before{\n  content:\"\\f000\"\n}\n.fa-glass-martini-alt:before{\n  content:\"\\f57b\"\n}\n.fa-glasses:before{\n  content:\"\\f530\"\n}\n.fa-glide:before{\n  content:\"\\f2a5\"\n}\n.fa-glide-g:before{\n  content:\"\\f2a6\"\n}\n.fa-globe:before{\n  content:\"\\f0ac\"\n}\n.fa-globe-africa:before{\n  content:\"\\f57c\"\n}\n.fa-globe-americas:before{\n  content:\"\\f57d\"\n}\n.fa-globe-asia:before{\n  content:\"\\f57e\"\n}\n.fa-gofore:before{\n  content:\"\\f3a7\"\n}\n.fa-golf-ball:before{\n  content:\"\\f450\"\n}\n.fa-goodreads:before{\n  content:\"\\f3a8\"\n}\n.fa-goodreads-g:before{\n  content:\"\\f3a9\"\n}\n.fa-google:before{\n  content:\"\\f1a0\"\n}\n.fa-google-drive:before{\n  content:\"\\f3aa\"\n}\n.fa-google-play:before{\n  content:\"\\f3ab\"\n}\n.fa-google-plus:before{\n  content:\"\\f2b3\"\n}\n.fa-google-plus-g:before{\n  content:\"\\f0d5\"\n}\n.fa-google-plus-square:before{\n  content:\"\\f0d4\"\n}\n.fa-google-wallet:before{\n  content:\"\\f1ee\"\n}\n.fa-gopuram:before{\n  content:\"\\f664\"\n}\n.fa-graduation-cap:before{\n  content:\"\\f19d\"\n}\n.fa-gratipay:before{\n  content:\"\\f184\"\n}\n.fa-grav:before{\n  content:\"\\f2d6\"\n}\n.fa-greater-than:before{\n  content:\"\\f531\"\n}\n.fa-greater-than-equal:before{\n  content:\"\\f532\"\n}\n.fa-grimace:before{\n  content:\"\\f57f\"\n}\n.fa-grin:before{\n  content:\"\\f580\"\n}\n.fa-grin-alt:before{\n  content:\"\\f581\"\n}\n.fa-grin-beam:before{\n  content:\"\\f582\"\n}\n.fa-grin-beam-sweat:before{\n  content:\"\\f583\"\n}\n.fa-grin-hearts:before{\n  content:\"\\f584\"\n}\n.fa-grin-squint:before{\n  content:\"\\f585\"\n}\n.fa-grin-squint-tears:before{\n  content:\"\\f586\"\n}\n.fa-grin-stars:before{\n  content:\"\\f587\"\n}\n.fa-grin-tears:before{\n  content:\"\\f588\"\n}\n.fa-grin-tongue:before{\n  content:\"\\f589\"\n}\n.fa-grin-tongue-squint:before{\n  content:\"\\f58a\"\n}\n.fa-grin-tongue-wink:before{\n  content:\"\\f58b\"\n}\n.fa-grin-wink:before{\n  content:\"\\f58c\"\n}\n.fa-grip-horizontal:before{\n  content:\"\\f58d\"\n}\n.fa-grip-vertical:before{\n  content:\"\\f58e\"\n}\n.fa-gripfire:before{\n  content:\"\\f3ac\"\n}\n.fa-grunt:before{\n  content:\"\\f3ad\"\n}\n.fa-gulp:before{\n  content:\"\\f3ae\"\n}\n.fa-h-square:before{\n  content:\"\\f0fd\"\n}\n.fa-hacker-news:before{\n  content:\"\\f1d4\"\n}\n.fa-hacker-news-square:before{\n  content:\"\\f3af\"\n}\n.fa-hackerrank:before{\n  content:\"\\f5f7\"\n}\n.fa-hamsa:before{\n  content:\"\\f665\"\n}\n.fa-hand-holding:before{\n  content:\"\\f4bd\"\n}\n.fa-hand-holding-heart:before{\n  content:\"\\f4be\"\n}\n.fa-hand-holding-usd:before{\n  content:\"\\f4c0\"\n}\n.fa-hand-lizard:before{\n  content:\"\\f258\"\n}\n.fa-hand-paper:before{\n  content:\"\\f256\"\n}\n.fa-hand-peace:before{\n  content:\"\\f25b\"\n}\n.fa-hand-point-down:before{\n  content:\"\\f0a7\"\n}\n.fa-hand-point-left:before{\n  content:\"\\f0a5\"\n}\n.fa-hand-point-right:before{\n  content:\"\\f0a4\"\n}\n.fa-hand-point-up:before{\n  content:\"\\f0a6\"\n}\n.fa-hand-pointer:before{\n  content:\"\\f25a\"\n}\n.fa-hand-rock:before{\n  content:\"\\f255\"\n}\n.fa-hand-scissors:before{\n  content:\"\\f257\"\n}\n.fa-hand-spock:before{\n  content:\"\\f259\"\n}\n.fa-hands:before{\n  content:\"\\f4c2\"\n}\n.fa-hands-helping:before{\n  content:\"\\f4c4\"\n}\n.fa-handshake:before{\n  content:\"\\f2b5\"\n}\n.fa-hashtag:before{\n  content:\"\\f292\"\n}\n.fa-haykal:before{\n  content:\"\\f666\"\n}\n.fa-hdd:before{\n  content:\"\\f0a0\"\n}\n.fa-heading:before{\n  content:\"\\f1dc\"\n}\n.fa-headphones:before{\n  content:\"\\f025\"\n}\n.fa-headphones-alt:before{\n  content:\"\\f58f\"\n}\n.fa-headset:before{\n  content:\"\\f590\"\n}\n.fa-heart:before{\n  content:\"\\f004\"\n}\n.fa-heartbeat:before{\n  content:\"\\f21e\"\n}\n.fa-helicopter:before{\n  content:\"\\f533\"\n}\n.fa-highlighter:before{\n  content:\"\\f591\"\n}\n.fa-hips:before{\n  content:\"\\f452\"\n}\n.fa-hire-a-helper:before{\n  content:\"\\f3b0\"\n}\n.fa-history:before{\n  content:\"\\f1da\"\n}\n.fa-hockey-puck:before{\n  content:\"\\f453\"\n}\n.fa-home:before{\n  content:\"\\f015\"\n}\n.fa-hooli:before{\n  content:\"\\f427\"\n}\n.fa-hornbill:before{\n  content:\"\\f592\"\n}\n.fa-hospital:before{\n  content:\"\\f0f8\"\n}\n.fa-hospital-alt:before{\n  content:\"\\f47d\"\n}\n.fa-hospital-symbol:before{\n  content:\"\\f47e\"\n}\n.fa-hot-tub:before{\n  content:\"\\f593\"\n}\n.fa-hotel:before{\n  content:\"\\f594\"\n}\n.fa-hotjar:before{\n  content:\"\\f3b1\"\n}\n.fa-hourglass:before{\n  content:\"\\f254\"\n}\n.fa-hourglass-end:before{\n  content:\"\\f253\"\n}\n.fa-hourglass-half:before{\n  content:\"\\f252\"\n}\n.fa-hourglass-start:before{\n  content:\"\\f251\"\n}\n.fa-houzz:before{\n  content:\"\\f27c\"\n}\n.fa-html5:before{\n  content:\"\\f13b\"\n}\n.fa-hubspot:before{\n  content:\"\\f3b2\"\n}\n.fa-i-cursor:before{\n  content:\"\\f246\"\n}\n.fa-id-badge:before{\n  content:\"\\f2c1\"\n}\n.fa-id-card:before{\n  content:\"\\f2c2\"\n}\n.fa-id-card-alt:before{\n  content:\"\\f47f\"\n}\n.fa-image:before{\n  content:\"\\f03e\"\n}\n.fa-images:before{\n  content:\"\\f302\"\n}\n.fa-imdb:before{\n  content:\"\\f2d8\"\n}\n.fa-inbox:before{\n  content:\"\\f01c\"\n}\n.fa-indent:before{\n  content:\"\\f03c\"\n}\n.fa-industry:before{\n  content:\"\\f275\"\n}\n.fa-infinity:before{\n  content:\"\\f534\"\n}\n.fa-info:before{\n  content:\"\\f129\"\n}\n.fa-info-circle:before{\n  content:\"\\f05a\"\n}\n.fa-instagram:before{\n  content:\"\\f16d\"\n}\n.fa-internet-explorer:before{\n  content:\"\\f26b\"\n}\n.fa-ioxhost:before{\n  content:\"\\f208\"\n}\n.fa-italic:before{\n  content:\"\\f033\"\n}\n.fa-itunes:before{\n  content:\"\\f3b4\"\n}\n.fa-itunes-note:before{\n  content:\"\\f3b5\"\n}\n.fa-java:before{\n  content:\"\\f4e4\"\n}\n.fa-jedi:before{\n  content:\"\\f669\"\n}\n.fa-jedi-order:before{\n  content:\"\\f50e\"\n}\n.fa-jenkins:before{\n  content:\"\\f3b6\"\n}\n.fa-joget:before{\n  content:\"\\f3b7\"\n}\n.fa-joint:before{\n  content:\"\\f595\"\n}\n.fa-joomla:before{\n  content:\"\\f1aa\"\n}\n.fa-journal-whills:before{\n  content:\"\\f66a\"\n}\n.fa-js:before{\n  content:\"\\f3b8\"\n}\n.fa-js-square:before{\n  content:\"\\f3b9\"\n}\n.fa-jsfiddle:before{\n  content:\"\\f1cc\"\n}\n.fa-kaaba:before{\n  content:\"\\f66b\"\n}\n.fa-kaggle:before{\n  content:\"\\f5fa\"\n}\n.fa-key:before{\n  content:\"\\f084\"\n}\n.fa-keybase:before{\n  content:\"\\f4f5\"\n}\n.fa-keyboard:before{\n  content:\"\\f11c\"\n}\n.fa-keycdn:before{\n  content:\"\\f3ba\"\n}\n.fa-khanda:before{\n  content:\"\\f66d\"\n}\n.fa-kickstarter:before{\n  content:\"\\f3bb\"\n}\n.fa-kickstarter-k:before{\n  content:\"\\f3bc\"\n}\n.fa-kiss:before{\n  content:\"\\f596\"\n}\n.fa-kiss-beam:before{\n  content:\"\\f597\"\n}\n.fa-kiss-wink-heart:before{\n  content:\"\\f598\"\n}\n.fa-kiwi-bird:before{\n  content:\"\\f535\"\n}\n.fa-korvue:before{\n  content:\"\\f42f\"\n}\n.fa-landmark:before{\n  content:\"\\f66f\"\n}\n.fa-language:before{\n  content:\"\\f1ab\"\n}\n.fa-laptop:before{\n  content:\"\\f109\"\n}\n.fa-laptop-code:before{\n  content:\"\\f5fc\"\n}\n.fa-laravel:before{\n  content:\"\\f3bd\"\n}\n.fa-lastfm:before{\n  content:\"\\f202\"\n}\n.fa-lastfm-square:before{\n  content:\"\\f203\"\n}\n.fa-laugh:before{\n  content:\"\\f599\"\n}\n.fa-laugh-beam:before{\n  content:\"\\f59a\"\n}\n.fa-laugh-squint:before{\n  content:\"\\f59b\"\n}\n.fa-laugh-wink:before{\n  content:\"\\f59c\"\n}\n.fa-layer-group:before{\n  content:\"\\f5fd\"\n}\n.fa-leaf:before{\n  content:\"\\f06c\"\n}\n.fa-leanpub:before{\n  content:\"\\f212\"\n}\n.fa-lemon:before{\n  content:\"\\f094\"\n}\n.fa-less:before{\n  content:\"\\f41d\"\n}\n.fa-less-than:before{\n  content:\"\\f536\"\n}\n.fa-less-than-equal:before{\n  content:\"\\f537\"\n}\n.fa-level-down-alt:before{\n  content:\"\\f3be\"\n}\n.fa-level-up-alt:before{\n  content:\"\\f3bf\"\n}\n.fa-life-ring:before{\n  content:\"\\f1cd\"\n}\n.fa-lightbulb:before{\n  content:\"\\f0eb\"\n}\n.fa-line:before{\n  content:\"\\f3c0\"\n}\n.fa-link:before{\n  content:\"\\f0c1\"\n}\n.fa-linkedin:before{\n  content:\"\\f08c\"\n}\n.fa-linkedin-in:before{\n  content:\"\\f0e1\"\n}\n.fa-linode:before{\n  content:\"\\f2b8\"\n}\n.fa-linux:before{\n  content:\"\\f17c\"\n}\n.fa-lira-sign:before{\n  content:\"\\f195\"\n}\n.fa-list:before{\n  content:\"\\f03a\"\n}\n.fa-list-alt:before{\n  content:\"\\f022\"\n}\n.fa-list-ol:before{\n  content:\"\\f0cb\"\n}\n.fa-list-ul:before{\n  content:\"\\f0ca\"\n}\n.fa-location-arrow:before{\n  content:\"\\f124\"\n}\n.fa-lock:before{\n  content:\"\\f023\"\n}\n.fa-lock-open:before{\n  content:\"\\f3c1\"\n}\n.fa-long-arrow-alt-down:before{\n  content:\"\\f309\"\n}\n.fa-long-arrow-alt-left:before{\n  content:\"\\f30a\"\n}\n.fa-long-arrow-alt-right:before{\n  content:\"\\f30b\"\n}\n.fa-long-arrow-alt-up:before{\n  content:\"\\f30c\"\n}\n.fa-low-vision:before{\n  content:\"\\f2a8\"\n}\n.fa-luggage-cart:before{\n  content:\"\\f59d\"\n}\n.fa-lyft:before{\n  content:\"\\f3c3\"\n}\n.fa-magento:before{\n  content:\"\\f3c4\"\n}\n.fa-magic:before{\n  content:\"\\f0d0\"\n}\n.fa-magnet:before{\n  content:\"\\f076\"\n}\n.fa-mail-bulk:before{\n  content:\"\\f674\"\n}\n.fa-mailchimp:before{\n  content:\"\\f59e\"\n}\n.fa-male:before{\n  content:\"\\f183\"\n}\n.fa-mandalorian:before{\n  content:\"\\f50f\"\n}\n.fa-map:before{\n  content:\"\\f279\"\n}\n.fa-map-marked:before{\n  content:\"\\f59f\"\n}\n.fa-map-marked-alt:before{\n  content:\"\\f5a0\"\n}\n.fa-map-marker:before{\n  content:\"\\f041\"\n}\n.fa-map-marker-alt:before{\n  content:\"\\f3c5\"\n}\n.fa-map-pin:before{\n  content:\"\\f276\"\n}\n.fa-map-signs:before{\n  content:\"\\f277\"\n}\n.fa-markdown:before{\n  content:\"\\f60f\"\n}\n.fa-marker:before{\n  content:\"\\f5a1\"\n}\n.fa-mars:before{\n  content:\"\\f222\"\n}\n.fa-mars-double:before{\n  content:\"\\f227\"\n}\n.fa-mars-stroke:before{\n  content:\"\\f229\"\n}\n.fa-mars-stroke-h:before{\n  content:\"\\f22b\"\n}\n.fa-mars-stroke-v:before{\n  content:\"\\f22a\"\n}\n.fa-mastodon:before{\n  content:\"\\f4f6\"\n}\n.fa-maxcdn:before{\n  content:\"\\f136\"\n}\n.fa-medal:before{\n  content:\"\\f5a2\"\n}\n.fa-medapps:before{\n  content:\"\\f3c6\"\n}\n.fa-medium:before{\n  content:\"\\f23a\"\n}\n.fa-medium-m:before{\n  content:\"\\f3c7\"\n}\n.fa-medkit:before{\n  content:\"\\f0fa\"\n}\n.fa-medrt:before{\n  content:\"\\f3c8\"\n}\n.fa-meetup:before{\n  content:\"\\f2e0\"\n}\n.fa-megaport:before{\n  content:\"\\f5a3\"\n}\n.fa-meh:before{\n  content:\"\\f11a\"\n}\n.fa-meh-blank:before{\n  content:\"\\f5a4\"\n}\n.fa-meh-rolling-eyes:before{\n  content:\"\\f5a5\"\n}\n.fa-memory:before{\n  content:\"\\f538\"\n}\n.fa-menorah:before{\n  content:\"\\f676\"\n}\n.fa-mercury:before{\n  content:\"\\f223\"\n}\n.fa-microchip:before{\n  content:\"\\f2db\"\n}\n.fa-microphone:before{\n  content:\"\\f130\"\n}\n.fa-microphone-alt:before{\n  content:\"\\f3c9\"\n}\n.fa-microphone-alt-slash:before{\n  content:\"\\f539\"\n}\n.fa-microphone-slash:before{\n  content:\"\\f131\"\n}\n.fa-microscope:before{\n  content:\"\\f610\"\n}\n.fa-microsoft:before{\n  content:\"\\f3ca\"\n}\n.fa-minus:before{\n  content:\"\\f068\"\n}\n.fa-minus-circle:before{\n  content:\"\\f056\"\n}\n.fa-minus-square:before{\n  content:\"\\f146\"\n}\n.fa-mix:before{\n  content:\"\\f3cb\"\n}\n.fa-mixcloud:before{\n  content:\"\\f289\"\n}\n.fa-mizuni:before{\n  content:\"\\f3cc\"\n}\n.fa-mobile:before{\n  content:\"\\f10b\"\n}\n.fa-mobile-alt:before{\n  content:\"\\f3cd\"\n}\n.fa-modx:before{\n  content:\"\\f285\"\n}\n.fa-monero:before{\n  content:\"\\f3d0\"\n}\n.fa-money-bill:before{\n  content:\"\\f0d6\"\n}\n.fa-money-bill-alt:before{\n  content:\"\\f3d1\"\n}\n.fa-money-bill-wave:before{\n  content:\"\\f53a\"\n}\n.fa-money-bill-wave-alt:before{\n  content:\"\\f53b\"\n}\n.fa-money-check:before{\n  content:\"\\f53c\"\n}\n.fa-money-check-alt:before{\n  content:\"\\f53d\"\n}\n.fa-monument:before{\n  content:\"\\f5a6\"\n}\n.fa-moon:before{\n  content:\"\\f186\"\n}\n.fa-mortar-pestle:before{\n  content:\"\\f5a7\"\n}\n.fa-mosque:before{\n  content:\"\\f678\"\n}\n.fa-motorcycle:before{\n  content:\"\\f21c\"\n}\n.fa-mouse-pointer:before{\n  content:\"\\f245\"\n}\n.fa-music:before{\n  content:\"\\f001\"\n}\n.fa-napster:before{\n  content:\"\\f3d2\"\n}\n.fa-neos:before{\n  content:\"\\f612\"\n}\n.fa-neuter:before{\n  content:\"\\f22c\"\n}\n.fa-newspaper:before{\n  content:\"\\f1ea\"\n}\n.fa-nimblr:before{\n  content:\"\\f5a8\"\n}\n.fa-nintendo-switch:before{\n  content:\"\\f418\"\n}\n.fa-node:before{\n  content:\"\\f419\"\n}\n.fa-node-js:before{\n  content:\"\\f3d3\"\n}\n.fa-not-equal:before{\n  content:\"\\f53e\"\n}\n.fa-notes-medical:before{\n  content:\"\\f481\"\n}\n.fa-npm:before{\n  content:\"\\f3d4\"\n}\n.fa-ns8:before{\n  content:\"\\f3d5\"\n}\n.fa-nutritionix:before{\n  content:\"\\f3d6\"\n}\n.fa-object-group:before{\n  content:\"\\f247\"\n}\n.fa-object-ungroup:before{\n  content:\"\\f248\"\n}\n.fa-odnoklassniki:before{\n  content:\"\\f263\"\n}\n.fa-odnoklassniki-square:before{\n  content:\"\\f264\"\n}\n.fa-oil-can:before{\n  content:\"\\f613\"\n}\n.fa-old-republic:before{\n  content:\"\\f510\"\n}\n.fa-om:before{\n  content:\"\\f679\"\n}\n.fa-opencart:before{\n  content:\"\\f23d\"\n}\n.fa-openid:before{\n  content:\"\\f19b\"\n}\n.fa-opera:before{\n  content:\"\\f26a\"\n}\n.fa-optin-monster:before{\n  content:\"\\f23c\"\n}\n.fa-osi:before{\n  content:\"\\f41a\"\n}\n.fa-outdent:before{\n  content:\"\\f03b\"\n}\n.fa-page4:before{\n  content:\"\\f3d7\"\n}\n.fa-pagelines:before{\n  content:\"\\f18c\"\n}\n.fa-paint-brush:before{\n  content:\"\\f1fc\"\n}\n.fa-paint-roller:before{\n  content:\"\\f5aa\"\n}\n.fa-palette:before{\n  content:\"\\f53f\"\n}\n.fa-palfed:before{\n  content:\"\\f3d8\"\n}\n.fa-pallet:before{\n  content:\"\\f482\"\n}\n.fa-paper-plane:before{\n  content:\"\\f1d8\"\n}\n.fa-paperclip:before{\n  content:\"\\f0c6\"\n}\n.fa-parachute-box:before{\n  content:\"\\f4cd\"\n}\n.fa-paragraph:before{\n  content:\"\\f1dd\"\n}\n.fa-parking:before{\n  content:\"\\f540\"\n}\n.fa-passport:before{\n  content:\"\\f5ab\"\n}\n.fa-pastafarianism:before{\n  content:\"\\f67b\"\n}\n.fa-paste:before{\n  content:\"\\f0ea\"\n}\n.fa-patreon:before{\n  content:\"\\f3d9\"\n}\n.fa-pause:before{\n  content:\"\\f04c\"\n}\n.fa-pause-circle:before{\n  content:\"\\f28b\"\n}\n.fa-paw:before{\n  content:\"\\f1b0\"\n}\n.fa-paypal:before{\n  content:\"\\f1ed\"\n}\n.fa-peace:before{\n  content:\"\\f67c\"\n}\n.fa-pen:before{\n  content:\"\\f304\"\n}\n.fa-pen-alt:before{\n  content:\"\\f305\"\n}\n.fa-pen-fancy:before{\n  content:\"\\f5ac\"\n}\n.fa-pen-nib:before{\n  content:\"\\f5ad\"\n}\n.fa-pen-square:before{\n  content:\"\\f14b\"\n}\n.fa-pencil-alt:before{\n  content:\"\\f303\"\n}\n.fa-pencil-ruler:before{\n  content:\"\\f5ae\"\n}\n.fa-people-carry:before{\n  content:\"\\f4ce\"\n}\n.fa-percent:before{\n  content:\"\\f295\"\n}\n.fa-percentage:before{\n  content:\"\\f541\"\n}\n.fa-periscope:before{\n  content:\"\\f3da\"\n}\n.fa-phabricator:before{\n  content:\"\\f3db\"\n}\n.fa-phoenix-framework:before{\n  content:\"\\f3dc\"\n}\n.fa-phoenix-squadron:before{\n  content:\"\\f511\"\n}\n.fa-phone:before{\n  content:\"\\f095\"\n}\n.fa-phone-slash:before{\n  content:\"\\f3dd\"\n}\n.fa-phone-square:before{\n  content:\"\\f098\"\n}\n.fa-phone-volume:before{\n  content:\"\\f2a0\"\n}\n.fa-php:before{\n  content:\"\\f457\"\n}\n.fa-pied-piper:before{\n  content:\"\\f2ae\"\n}\n.fa-pied-piper-alt:before{\n  content:\"\\f1a8\"\n}\n.fa-pied-piper-hat:before{\n  content:\"\\f4e5\"\n}\n.fa-pied-piper-pp:before{\n  content:\"\\f1a7\"\n}\n.fa-piggy-bank:before{\n  content:\"\\f4d3\"\n}\n.fa-pills:before{\n  content:\"\\f484\"\n}\n.fa-pinterest:before{\n  content:\"\\f0d2\"\n}\n.fa-pinterest-p:before{\n  content:\"\\f231\"\n}\n.fa-pinterest-square:before{\n  content:\"\\f0d3\"\n}\n.fa-place-of-worship:before{\n  content:\"\\f67f\"\n}\n.fa-plane:before{\n  content:\"\\f072\"\n}\n.fa-plane-arrival:before{\n  content:\"\\f5af\"\n}\n.fa-plane-departure:before{\n  content:\"\\f5b0\"\n}\n.fa-play:before{\n  content:\"\\f04b\"\n}\n.fa-play-circle:before{\n  content:\"\\f144\"\n}\n.fa-playstation:before{\n  content:\"\\f3df\"\n}\n.fa-plug:before{\n  content:\"\\f1e6\"\n}\n.fa-plus:before{\n  content:\"\\f067\"\n}\n.fa-plus-circle:before{\n  content:\"\\f055\"\n}\n.fa-plus-square:before{\n  content:\"\\f0fe\"\n}\n.fa-podcast:before{\n  content:\"\\f2ce\"\n}\n.fa-poll:before{\n  content:\"\\f681\"\n}\n.fa-poll-h:before{\n  content:\"\\f682\"\n}\n.fa-poo:before{\n  content:\"\\f2fe\"\n}\n.fa-poop:before{\n  content:\"\\f619\"\n}\n.fa-portrait:before{\n  content:\"\\f3e0\"\n}\n.fa-pound-sign:before{\n  content:\"\\f154\"\n}\n.fa-power-off:before{\n  content:\"\\f011\"\n}\n.fa-pray:before{\n  content:\"\\f683\"\n}\n.fa-praying-hands:before{\n  content:\"\\f684\"\n}\n.fa-prescription:before{\n  content:\"\\f5b1\"\n}\n.fa-prescription-bottle:before{\n  content:\"\\f485\"\n}\n.fa-prescription-bottle-alt:before{\n  content:\"\\f486\"\n}\n.fa-print:before{\n  content:\"\\f02f\"\n}\n.fa-procedures:before{\n  content:\"\\f487\"\n}\n.fa-product-hunt:before{\n  content:\"\\f288\"\n}\n.fa-project-diagram:before{\n  content:\"\\f542\"\n}\n.fa-pushed:before{\n  content:\"\\f3e1\"\n}\n.fa-puzzle-piece:before{\n  content:\"\\f12e\"\n}\n.fa-python:before{\n  content:\"\\f3e2\"\n}\n.fa-qq:before{\n  content:\"\\f1d6\"\n}\n.fa-qrcode:before{\n  content:\"\\f029\"\n}\n.fa-question:before{\n  content:\"\\f128\"\n}\n.fa-question-circle:before{\n  content:\"\\f059\"\n}\n.fa-quidditch:before{\n  content:\"\\f458\"\n}\n.fa-quinscape:before{\n  content:\"\\f459\"\n}\n.fa-quora:before{\n  content:\"\\f2c4\"\n}\n.fa-quote-left:before{\n  content:\"\\f10d\"\n}\n.fa-quote-right:before{\n  content:\"\\f10e\"\n}\n.fa-quran:before{\n  content:\"\\f687\"\n}\n.fa-r-project:before{\n  content:\"\\f4f7\"\n}\n.fa-random:before{\n  content:\"\\f074\"\n}\n.fa-ravelry:before{\n  content:\"\\f2d9\"\n}\n.fa-react:before{\n  content:\"\\f41b\"\n}\n.fa-readme:before{\n  content:\"\\f4d5\"\n}\n.fa-rebel:before{\n  content:\"\\f1d0\"\n}\n.fa-receipt:before{\n  content:\"\\f543\"\n}\n.fa-recycle:before{\n  content:\"\\f1b8\"\n}\n.fa-red-river:before{\n  content:\"\\f3e3\"\n}\n.fa-reddit:before{\n  content:\"\\f1a1\"\n}\n.fa-reddit-alien:before{\n  content:\"\\f281\"\n}\n.fa-reddit-square:before{\n  content:\"\\f1a2\"\n}\n.fa-redo:before{\n  content:\"\\f01e\"\n}\n.fa-redo-alt:before{\n  content:\"\\f2f9\"\n}\n.fa-registered:before{\n  content:\"\\f25d\"\n}\n.fa-rendact:before{\n  content:\"\\f3e4\"\n}\n.fa-renren:before{\n  content:\"\\f18b\"\n}\n.fa-reply:before{\n  content:\"\\f3e5\"\n}\n.fa-reply-all:before{\n  content:\"\\f122\"\n}\n.fa-replyd:before{\n  content:\"\\f3e6\"\n}\n.fa-researchgate:before{\n  content:\"\\f4f8\"\n}\n.fa-resolving:before{\n  content:\"\\f3e7\"\n}\n.fa-retweet:before{\n  content:\"\\f079\"\n}\n.fa-rev:before{\n  content:\"\\f5b2\"\n}\n.fa-ribbon:before{\n  content:\"\\f4d6\"\n}\n.fa-road:before{\n  content:\"\\f018\"\n}\n.fa-robot:before{\n  content:\"\\f544\"\n}\n.fa-rocket:before{\n  content:\"\\f135\"\n}\n.fa-rocketchat:before{\n  content:\"\\f3e8\"\n}\n.fa-rockrms:before{\n  content:\"\\f3e9\"\n}\n.fa-route:before{\n  content:\"\\f4d7\"\n}\n.fa-rss:before{\n  content:\"\\f09e\"\n}\n.fa-rss-square:before{\n  content:\"\\f143\"\n}\n.fa-ruble-sign:before{\n  content:\"\\f158\"\n}\n.fa-ruler:before{\n  content:\"\\f545\"\n}\n.fa-ruler-combined:before{\n  content:\"\\f546\"\n}\n.fa-ruler-horizontal:before{\n  content:\"\\f547\"\n}\n.fa-ruler-vertical:before{\n  content:\"\\f548\"\n}\n.fa-rupee-sign:before{\n  content:\"\\f156\"\n}\n.fa-sad-cry:before{\n  content:\"\\f5b3\"\n}\n.fa-sad-tear:before{\n  content:\"\\f5b4\"\n}\n.fa-safari:before{\n  content:\"\\f267\"\n}\n.fa-sass:before{\n  content:\"\\f41e\"\n}\n.fa-save:before{\n  content:\"\\f0c7\"\n}\n.fa-schlix:before{\n  content:\"\\f3ea\"\n}\n.fa-school:before{\n  content:\"\\f549\"\n}\n.fa-screwdriver:before{\n  content:\"\\f54a\"\n}\n.fa-scribd:before{\n  content:\"\\f28a\"\n}\n.fa-search:before{\n  content:\"\\f002\"\n}\n.fa-search-dollar:before{\n  content:\"\\f688\"\n}\n.fa-search-location:before{\n  content:\"\\f689\"\n}\n.fa-search-minus:before{\n  content:\"\\f010\"\n}\n.fa-search-plus:before{\n  content:\"\\f00e\"\n}\n.fa-searchengin:before{\n  content:\"\\f3eb\"\n}\n.fa-seedling:before{\n  content:\"\\f4d8\"\n}\n.fa-sellcast:before{\n  content:\"\\f2da\"\n}\n.fa-sellsy:before{\n  content:\"\\f213\"\n}\n.fa-server:before{\n  content:\"\\f233\"\n}\n.fa-servicestack:before{\n  content:\"\\f3ec\"\n}\n.fa-shapes:before{\n  content:\"\\f61f\"\n}\n.fa-share:before{\n  content:\"\\f064\"\n}\n.fa-share-alt:before{\n  content:\"\\f1e0\"\n}\n.fa-share-alt-square:before{\n  content:\"\\f1e1\"\n}\n.fa-share-square:before{\n  content:\"\\f14d\"\n}\n.fa-shekel-sign:before{\n  content:\"\\f20b\"\n}\n.fa-shield-alt:before{\n  content:\"\\f3ed\"\n}\n.fa-ship:before{\n  content:\"\\f21a\"\n}\n.fa-shipping-fast:before{\n  content:\"\\f48b\"\n}\n.fa-shirtsinbulk:before{\n  content:\"\\f214\"\n}\n.fa-shoe-prints:before{\n  content:\"\\f54b\"\n}\n.fa-shopping-bag:before{\n  content:\"\\f290\"\n}\n.fa-shopping-basket:before{\n  content:\"\\f291\"\n}\n.fa-shopping-cart:before{\n  content:\"\\f07a\"\n}\n.fa-shopware:before{\n  content:\"\\f5b5\"\n}\n.fa-shower:before{\n  content:\"\\f2cc\"\n}\n.fa-shuttle-van:before{\n  content:\"\\f5b6\"\n}\n.fa-sign:before{\n  content:\"\\f4d9\"\n}\n.fa-sign-in-alt:before{\n  content:\"\\f2f6\"\n}\n.fa-sign-language:before{\n  content:\"\\f2a7\"\n}\n.fa-sign-out-alt:before{\n  content:\"\\f2f5\"\n}\n.fa-signal:before{\n  content:\"\\f012\"\n}\n.fa-signature:before{\n  content:\"\\f5b7\"\n}\n.fa-simplybuilt:before{\n  content:\"\\f215\"\n}\n.fa-sistrix:before{\n  content:\"\\f3ee\"\n}\n.fa-sitemap:before{\n  content:\"\\f0e8\"\n}\n.fa-sith:before{\n  content:\"\\f512\"\n}\n.fa-skull:before{\n  content:\"\\f54c\"\n}\n.fa-skyatlas:before{\n  content:\"\\f216\"\n}\n.fa-skype:before{\n  content:\"\\f17e\"\n}\n.fa-slack:before{\n  content:\"\\f198\"\n}\n.fa-slack-hash:before{\n  content:\"\\f3ef\"\n}\n.fa-sliders-h:before{\n  content:\"\\f1de\"\n}\n.fa-slideshare:before{\n  content:\"\\f1e7\"\n}\n.fa-smile:before{\n  content:\"\\f118\"\n}\n.fa-smile-beam:before{\n  content:\"\\f5b8\"\n}\n.fa-smile-wink:before{\n  content:\"\\f4da\"\n}\n.fa-smoking:before{\n  content:\"\\f48d\"\n}\n.fa-smoking-ban:before{\n  content:\"\\f54d\"\n}\n.fa-snapchat:before{\n  content:\"\\f2ab\"\n}\n.fa-snapchat-ghost:before{\n  content:\"\\f2ac\"\n}\n.fa-snapchat-square:before{\n  content:\"\\f2ad\"\n}\n.fa-snowflake:before{\n  content:\"\\f2dc\"\n}\n.fa-socks:before{\n  content:\"\\f696\"\n}\n.fa-solar-panel:before{\n  content:\"\\f5ba\"\n}\n.fa-sort:before{\n  content:\"\\f0dc\"\n}\n.fa-sort-alpha-down:before{\n  content:\"\\f15d\"\n}\n.fa-sort-alpha-up:before{\n  content:\"\\f15e\"\n}\n.fa-sort-amount-down:before{\n  content:\"\\f160\"\n}\n.fa-sort-amount-up:before{\n  content:\"\\f161\"\n}\n.fa-sort-down:before{\n  content:\"\\f0dd\"\n}\n.fa-sort-numeric-down:before{\n  content:\"\\f162\"\n}\n.fa-sort-numeric-up:before{\n  content:\"\\f163\"\n}\n.fa-sort-up:before{\n  content:\"\\f0de\"\n}\n.fa-soundcloud:before{\n  content:\"\\f1be\"\n}\n.fa-spa:before{\n  content:\"\\f5bb\"\n}\n.fa-space-shuttle:before{\n  content:\"\\f197\"\n}\n.fa-speakap:before{\n  content:\"\\f3f3\"\n}\n.fa-spinner:before{\n  content:\"\\f110\"\n}\n.fa-splotch:before{\n  content:\"\\f5bc\"\n}\n.fa-spotify:before{\n  content:\"\\f1bc\"\n}\n.fa-spray-can:before{\n  content:\"\\f5bd\"\n}\n.fa-square:before{\n  content:\"\\f0c8\"\n}\n.fa-square-full:before{\n  content:\"\\f45c\"\n}\n.fa-square-root-alt:before{\n  content:\"\\f698\"\n}\n.fa-squarespace:before{\n  content:\"\\f5be\"\n}\n.fa-stack-exchange:before{\n  content:\"\\f18d\"\n}\n.fa-stack-overflow:before{\n  content:\"\\f16c\"\n}\n.fa-stamp:before{\n  content:\"\\f5bf\"\n}\n.fa-star:before{\n  content:\"\\f005\"\n}\n.fa-star-and-crescent:before{\n  content:\"\\f699\"\n}\n.fa-star-half:before{\n  content:\"\\f089\"\n}\n.fa-star-half-alt:before{\n  content:\"\\f5c0\"\n}\n.fa-star-of-david:before{\n  content:\"\\f69a\"\n}\n.fa-star-of-life:before{\n  content:\"\\f621\"\n}\n.fa-staylinked:before{\n  content:\"\\f3f5\"\n}\n.fa-steam:before{\n  content:\"\\f1b6\"\n}\n.fa-steam-square:before{\n  content:\"\\f1b7\"\n}\n.fa-steam-symbol:before{\n  content:\"\\f3f6\"\n}\n.fa-step-backward:before{\n  content:\"\\f048\"\n}\n.fa-step-forward:before{\n  content:\"\\f051\"\n}\n.fa-stethoscope:before{\n  content:\"\\f0f1\"\n}\n.fa-sticker-mule:before{\n  content:\"\\f3f7\"\n}\n.fa-sticky-note:before{\n  content:\"\\f249\"\n}\n.fa-stop:before{\n  content:\"\\f04d\"\n}\n.fa-stop-circle:before{\n  content:\"\\f28d\"\n}\n.fa-stopwatch:before{\n  content:\"\\f2f2\"\n}\n.fa-store:before{\n  content:\"\\f54e\"\n}\n.fa-store-alt:before{\n  content:\"\\f54f\"\n}\n.fa-strava:before{\n  content:\"\\f428\"\n}\n.fa-stream:before{\n  content:\"\\f550\"\n}\n.fa-street-view:before{\n  content:\"\\f21d\"\n}\n.fa-strikethrough:before{\n  content:\"\\f0cc\"\n}\n.fa-stripe:before{\n  content:\"\\f429\"\n}\n.fa-stripe-s:before{\n  content:\"\\f42a\"\n}\n.fa-stroopwafel:before{\n  content:\"\\f551\"\n}\n.fa-studiovinari:before{\n  content:\"\\f3f8\"\n}\n.fa-stumbleupon:before{\n  content:\"\\f1a4\"\n}\n.fa-stumbleupon-circle:before{\n  content:\"\\f1a3\"\n}\n.fa-subscript:before{\n  content:\"\\f12c\"\n}\n.fa-subway:before{\n  content:\"\\f239\"\n}\n.fa-suitcase:before{\n  content:\"\\f0f2\"\n}\n.fa-suitcase-rolling:before{\n  content:\"\\f5c1\"\n}\n.fa-sun:before{\n  content:\"\\f185\"\n}\n.fa-superpowers:before{\n  content:\"\\f2dd\"\n}\n.fa-superscript:before{\n  content:\"\\f12b\"\n}\n.fa-supple:before{\n  content:\"\\f3f9\"\n}\n.fa-surprise:before{\n  content:\"\\f5c2\"\n}\n.fa-swatchbook:before{\n  content:\"\\f5c3\"\n}\n.fa-swimmer:before{\n  content:\"\\f5c4\"\n}\n.fa-swimming-pool:before{\n  content:\"\\f5c5\"\n}\n.fa-synagogue:before{\n  content:\"\\f69b\"\n}\n.fa-sync:before{\n  content:\"\\f021\"\n}\n.fa-sync-alt:before{\n  content:\"\\f2f1\"\n}\n.fa-syringe:before{\n  content:\"\\f48e\"\n}\n.fa-table:before{\n  content:\"\\f0ce\"\n}\n.fa-table-tennis:before{\n  content:\"\\f45d\"\n}\n.fa-tablet:before{\n  content:\"\\f10a\"\n}\n.fa-tablet-alt:before{\n  content:\"\\f3fa\"\n}\n.fa-tablets:before{\n  content:\"\\f490\"\n}\n.fa-tachometer-alt:before{\n  content:\"\\f3fd\"\n}\n.fa-tag:before{\n  content:\"\\f02b\"\n}\n.fa-tags:before{\n  content:\"\\f02c\"\n}\n.fa-tape:before{\n  content:\"\\f4db\"\n}\n.fa-tasks:before{\n  content:\"\\f0ae\"\n}\n.fa-taxi:before{\n  content:\"\\f1ba\"\n}\n.fa-teamspeak:before{\n  content:\"\\f4f9\"\n}\n.fa-teeth:before{\n  content:\"\\f62e\"\n}\n.fa-teeth-open:before{\n  content:\"\\f62f\"\n}\n.fa-telegram:before{\n  content:\"\\f2c6\"\n}\n.fa-telegram-plane:before{\n  content:\"\\f3fe\"\n}\n.fa-tencent-weibo:before{\n  content:\"\\f1d5\"\n}\n.fa-terminal:before{\n  content:\"\\f120\"\n}\n.fa-text-height:before{\n  content:\"\\f034\"\n}\n.fa-text-width:before{\n  content:\"\\f035\"\n}\n.fa-th:before{\n  content:\"\\f00a\"\n}\n.fa-th-large:before{\n  content:\"\\f009\"\n}\n.fa-th-list:before{\n  content:\"\\f00b\"\n}\n.fa-the-red-yeti:before{\n  content:\"\\f69d\"\n}\n.fa-theater-masks:before{\n  content:\"\\f630\"\n}\n.fa-themeco:before{\n  content:\"\\f5c6\"\n}\n.fa-themeisle:before{\n  content:\"\\f2b2\"\n}\n.fa-thermometer:before{\n  content:\"\\f491\"\n}\n.fa-thermometer-empty:before{\n  content:\"\\f2cb\"\n}\n.fa-thermometer-full:before{\n  content:\"\\f2c7\"\n}\n.fa-thermometer-half:before{\n  content:\"\\f2c9\"\n}\n.fa-thermometer-quarter:before{\n  content:\"\\f2ca\"\n}\n.fa-thermometer-three-quarters:before{\n  content:\"\\f2c8\"\n}\n.fa-thumbs-down:before{\n  content:\"\\f165\"\n}\n.fa-thumbs-up:before{\n  content:\"\\f164\"\n}\n.fa-thumbtack:before{\n  content:\"\\f08d\"\n}\n.fa-ticket-alt:before{\n  content:\"\\f3ff\"\n}\n.fa-times:before{\n  content:\"\\f00d\"\n}\n.fa-times-circle:before{\n  content:\"\\f057\"\n}\n.fa-tint:before{\n  content:\"\\f043\"\n}\n.fa-tint-slash:before{\n  content:\"\\f5c7\"\n}\n.fa-tired:before{\n  content:\"\\f5c8\"\n}\n.fa-toggle-off:before{\n  content:\"\\f204\"\n}\n.fa-toggle-on:before{\n  content:\"\\f205\"\n}\n.fa-toolbox:before{\n  content:\"\\f552\"\n}\n.fa-tooth:before{\n  content:\"\\f5c9\"\n}\n.fa-torah:before{\n  content:\"\\f6a0\"\n}\n.fa-torii-gate:before{\n  content:\"\\f6a1\"\n}\n.fa-trade-federation:before{\n  content:\"\\f513\"\n}\n.fa-trademark:before{\n  content:\"\\f25c\"\n}\n.fa-traffic-light:before{\n  content:\"\\f637\"\n}\n.fa-train:before{\n  content:\"\\f238\"\n}\n.fa-transgender:before{\n  content:\"\\f224\"\n}\n.fa-transgender-alt:before{\n  content:\"\\f225\"\n}\n.fa-trash:before{\n  content:\"\\f1f8\"\n}\n.fa-trash-alt:before{\n  content:\"\\f2ed\"\n}\n.fa-tree:before{\n  content:\"\\f1bb\"\n}\n.fa-trello:before{\n  content:\"\\f181\"\n}\n.fa-tripadvisor:before{\n  content:\"\\f262\"\n}\n.fa-trophy:before{\n  content:\"\\f091\"\n}\n.fa-truck:before{\n  content:\"\\f0d1\"\n}\n.fa-truck-loading:before{\n  content:\"\\f4de\"\n}\n.fa-truck-monster:before{\n  content:\"\\f63b\"\n}\n.fa-truck-moving:before{\n  content:\"\\f4df\"\n}\n.fa-truck-pickup:before{\n  content:\"\\f63c\"\n}\n.fa-tshirt:before{\n  content:\"\\f553\"\n}\n.fa-tty:before{\n  content:\"\\f1e4\"\n}\n.fa-tumblr:before{\n  content:\"\\f173\"\n}\n.fa-tumblr-square:before{\n  content:\"\\f174\"\n}\n.fa-tv:before{\n  content:\"\\f26c\"\n}\n.fa-twitch:before{\n  content:\"\\f1e8\"\n}\n.fa-twitter:before{\n  content:\"\\f099\"\n}\n.fa-twitter-square:before{\n  content:\"\\f081\"\n}\n.fa-typo3:before{\n  content:\"\\f42b\"\n}\n.fa-uber:before{\n  content:\"\\f402\"\n}\n.fa-uikit:before{\n  content:\"\\f403\"\n}\n.fa-umbrella:before{\n  content:\"\\f0e9\"\n}\n.fa-umbrella-beach:before{\n  content:\"\\f5ca\"\n}\n.fa-underline:before{\n  content:\"\\f0cd\"\n}\n.fa-undo:before{\n  content:\"\\f0e2\"\n}\n.fa-undo-alt:before{\n  content:\"\\f2ea\"\n}\n.fa-uniregistry:before{\n  content:\"\\f404\"\n}\n.fa-universal-access:before{\n  content:\"\\f29a\"\n}\n.fa-university:before{\n  content:\"\\f19c\"\n}\n.fa-unlink:before{\n  content:\"\\f127\"\n}\n.fa-unlock:before{\n  content:\"\\f09c\"\n}\n.fa-unlock-alt:before{\n  content:\"\\f13e\"\n}\n.fa-untappd:before{\n  content:\"\\f405\"\n}\n.fa-upload:before{\n  content:\"\\f093\"\n}\n.fa-usb:before{\n  content:\"\\f287\"\n}\n.fa-user:before{\n  content:\"\\f007\"\n}\n.fa-user-alt:before{\n  content:\"\\f406\"\n}\n.fa-user-alt-slash:before{\n  content:\"\\f4fa\"\n}\n.fa-user-astronaut:before{\n  content:\"\\f4fb\"\n}\n.fa-user-check:before{\n  content:\"\\f4fc\"\n}\n.fa-user-circle:before{\n  content:\"\\f2bd\"\n}\n.fa-user-clock:before{\n  content:\"\\f4fd\"\n}\n.fa-user-cog:before{\n  content:\"\\f4fe\"\n}\n.fa-user-edit:before{\n  content:\"\\f4ff\"\n}\n.fa-user-friends:before{\n  content:\"\\f500\"\n}\n.fa-user-graduate:before{\n  content:\"\\f501\"\n}\n.fa-user-lock:before{\n  content:\"\\f502\"\n}\n.fa-user-md:before{\n  content:\"\\f0f0\"\n}\n.fa-user-minus:before{\n  content:\"\\f503\"\n}\n.fa-user-ninja:before{\n  content:\"\\f504\"\n}\n.fa-user-plus:before{\n  content:\"\\f234\"\n}\n.fa-user-secret:before{\n  content:\"\\f21b\"\n}\n.fa-user-shield:before{\n  content:\"\\f505\"\n}\n.fa-user-slash:before{\n  content:\"\\f506\"\n}\n.fa-user-tag:before{\n  content:\"\\f507\"\n}\n.fa-user-tie:before{\n  content:\"\\f508\"\n}\n.fa-user-times:before{\n  content:\"\\f235\"\n}\n.fa-users:before{\n  content:\"\\f0c0\"\n}\n.fa-users-cog:before{\n  content:\"\\f509\"\n}\n.fa-ussunnah:before{\n  content:\"\\f407\"\n}\n.fa-utensil-spoon:before{\n  content:\"\\f2e5\"\n}\n.fa-utensils:before{\n  content:\"\\f2e7\"\n}\n.fa-vaadin:before{\n  content:\"\\f408\"\n}\n.fa-vector-square:before{\n  content:\"\\f5cb\"\n}\n.fa-venus:before{\n  content:\"\\f221\"\n}\n.fa-venus-double:before{\n  content:\"\\f226\"\n}\n.fa-venus-mars:before{\n  content:\"\\f228\"\n}\n.fa-viacoin:before{\n  content:\"\\f237\"\n}\n.fa-viadeo:before{\n  content:\"\\f2a9\"\n}\n.fa-viadeo-square:before{\n  content:\"\\f2aa\"\n}\n.fa-vial:before{\n  content:\"\\f492\"\n}\n.fa-vials:before{\n  content:\"\\f493\"\n}\n.fa-viber:before{\n  content:\"\\f409\"\n}\n.fa-video:before{\n  content:\"\\f03d\"\n}\n.fa-video-slash:before{\n  content:\"\\f4e2\"\n}\n.fa-vihara:before{\n  content:\"\\f6a7\"\n}\n.fa-vimeo:before{\n  content:\"\\f40a\"\n}\n.fa-vimeo-square:before{\n  content:\"\\f194\"\n}\n.fa-vimeo-v:before{\n  content:\"\\f27d\"\n}\n.fa-vine:before{\n  content:\"\\f1ca\"\n}\n.fa-vk:before{\n  content:\"\\f189\"\n}\n.fa-vnv:before{\n  content:\"\\f40b\"\n}\n.fa-volleyball-ball:before{\n  content:\"\\f45f\"\n}\n.fa-volume-down:before{\n  content:\"\\f027\"\n}\n.fa-volume-off:before{\n  content:\"\\f026\"\n}\n.fa-volume-up:before{\n  content:\"\\f028\"\n}\n.fa-vuejs:before{\n  content:\"\\f41f\"\n}\n.fa-walking:before{\n  content:\"\\f554\"\n}\n.fa-wallet:before{\n  content:\"\\f555\"\n}\n.fa-warehouse:before{\n  content:\"\\f494\"\n}\n.fa-weebly:before{\n  content:\"\\f5cc\"\n}\n.fa-weibo:before{\n  content:\"\\f18a\"\n}\n.fa-weight:before{\n  content:\"\\f496\"\n}\n.fa-weight-hanging:before{\n  content:\"\\f5cd\"\n}\n.fa-weixin:before{\n  content:\"\\f1d7\"\n}\n.fa-whatsapp:before{\n  content:\"\\f232\"\n}\n.fa-whatsapp-square:before{\n  content:\"\\f40c\"\n}\n.fa-wheelchair:before{\n  content:\"\\f193\"\n}\n.fa-whmcs:before{\n  content:\"\\f40d\"\n}\n.fa-wifi:before{\n  content:\"\\f1eb\"\n}\n.fa-wikipedia-w:before{\n  content:\"\\f266\"\n}\n.fa-window-close:before{\n  content:\"\\f410\"\n}\n.fa-window-maximize:before{\n  content:\"\\f2d0\"\n}\n.fa-window-minimize:before{\n  content:\"\\f2d1\"\n}\n.fa-window-restore:before{\n  content:\"\\f2d2\"\n}\n.fa-windows:before{\n  content:\"\\f17a\"\n}\n.fa-wine-glass:before{\n  content:\"\\f4e3\"\n}\n.fa-wine-glass-alt:before{\n  content:\"\\f5ce\"\n}\n.fa-wix:before{\n  content:\"\\f5cf\"\n}\n.fa-wolf-pack-battalion:before{\n  content:\"\\f514\"\n}\n.fa-won-sign:before{\n  content:\"\\f159\"\n}\n.fa-wordpress:before{\n  content:\"\\f19a\"\n}\n.fa-wordpress-simple:before{\n  content:\"\\f411\"\n}\n.fa-wpbeginner:before{\n  content:\"\\f297\"\n}\n.fa-wpexplorer:before{\n  content:\"\\f2de\"\n}\n.fa-wpforms:before{\n  content:\"\\f298\"\n}\n.fa-wrench:before{\n  content:\"\\f0ad\"\n}\n.fa-x-ray:before{\n  content:\"\\f497\"\n}\n.fa-xbox:before{\n  content:\"\\f412\"\n}\n.fa-xing:before{\n  content:\"\\f168\"\n}\n.fa-xing-square:before{\n  content:\"\\f169\"\n}\n.fa-y-combinator:before{\n  content:\"\\f23b\"\n}\n.fa-yahoo:before{\n  content:\"\\f19e\"\n}\n.fa-yandex:before{\n  content:\"\\f413\"\n}\n.fa-yandex-international:before{\n  content:\"\\f414\"\n}\n.fa-yelp:before{\n  content:\"\\f1e9\"\n}\n.fa-yen-sign:before{\n  content:\"\\f157\"\n}\n.fa-yin-yang:before{\n  content:\"\\f6ad\"\n}\n.fa-yoast:before{\n  content:\"\\f2b1\"\n}\n.fa-youtube:before{\n  content:\"\\f167\"\n}\n.fa-youtube-square:before{\n  content:\"\\f431\"\n}\n.fa-zhihu:before{\n  content:\"\\f63f\"\n}\n.sr-only{\n  border:0;\n  clip:rect(0,0,0,0);\n  height:1px;\n  margin:-1px;\n  overflow:hidden;\n  padding:0;\n  position:absolute;\n  width:1px\n}\n.sr-only-focusable:active,.sr-only-focusable:focus{\n  clip:auto;\n  height:auto;\n  margin:0;\n  overflow:visible;\n  position:static;\n  width:auto\n}\n\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"./fa-brands-400.woff2\") format(\"woff2\"), url(\"./fa-brands-400.woff\") format(\"woff\"); }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./fa-regular-400.woff2\") format(\"woff2\"), url(\"./fa-regular-400.woff\") format(\"woff\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"./fa-solid-900.woff2\") format(\"woff2\"), url(\"./fa-solid-900.woff\") format(\"woff\"); }\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "b18c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listenOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return leftClick; });
/* unused harmony export middleClick */
/* unused harmony export rightClick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEventKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return position; });
/* unused harmony export targetElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEventPath; });
/* unused harmony export getMouseWheelDistance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stopAndPrevent; });
var listenOpts = {};
Object.defineProperty(listenOpts, 'passive', {
  configurable: true,
  get: function get() {
    var passive;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = {
            passive: true
          };
        }
      });
      window.addEventListener('qtest', null, opts);
      window.removeEventListener('qtest', null, opts);
    } catch (e) {}

    listenOpts.passive = passive;
    return passive;
  },
  set: function set(val) {
    Object.defineProperty(this, 'passive', {
      value: val
    });
  }
});
function leftClick(e) {
  return e.button === 0;
}
function middleClick(e) {
  return e.button === 1;
}
function rightClick(e) {
  return e.button === 2;
}
function getEventKey(e) {
  return e.which || e.keyCode;
}
function position(e) {
  var posx, posy;

  if (e.touches && e.touches[0]) {
    e = e.touches[0];
  } else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0];
  }

  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  } else if (e.pageX || e.pageY) {
    posx = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
    posy = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;
  } else {
    var offset = targetElement(e).getBoundingClientRect();
    posx = (offset.right - offset.left) / 2 + offset.left;
    posy = (offset.bottom - offset.top) / 2 + offset.top;
  }

  return {
    top: posy,
    left: posx
  };
}
function targetElement(e) {
  var target;

  if (e.target) {
    target = e.target;
  } else if (e.srcElement) {
    target = e.srcElement;
  }

  if (target.nodeType === 3) {
    target = target.parentNode;
  }

  return target;
}
function getEventPath(e) {
  if (e.path) {
    return e.path;
  }

  if (e.composedPath) {
    return e.composedPath();
  }

  var path = [];
  var el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }
}
var LINE_HEIGHT = 40,
    PAGE_HEIGHT = 800;
function getMouseWheelDistance(e) {
  var x = e.deltaX,
      y = e.deltaY;

  if ((x || y) && e.deltaMode) {
    var multiplier = e.deltaMode === 1 ? LINE_HEIGHT : PAGE_HEIGHT;
    x *= multiplier;
    y *= multiplier;
  }

  if (e.shiftKey && !x) {
    var _ref = [x, y];
    y = _ref[0];
    x = _ref[1];
  }

  return {
    x: x,
    y: y
  };
}
function stopAndPrevent(e) {
  e.preventDefault();
  e.stopPropagation();
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
  listenOpts: listenOpts,
  leftClick: leftClick,
  middleClick: middleClick,
  rightClick: rightClick,
  getEventKey: getEventKey,
  position: position,
  targetElement: targetElement,
  getEventPath: getEventPath,
  getMouseWheelDistance: getMouseWheelDistance,
  stopAndPrevent: stopAndPrevent
});

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var buildURL = __webpack_require__("30b5");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("9fa6");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("7aac");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "b5b8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.anchor.js
var es6_string_anchor = __webpack_require__("8449");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/scroll.js
var utils_scroll = __webpack_require__("1528");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/popup.js





function getAnchorPosition(el, offset) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      right = _el$getBoundingClient.right,
      bottom = _el$getBoundingClient.bottom,
      a = {
    top: top,
    left: left,
    width: el.offsetWidth,
    height: el.offsetHeight
  };

  if (offset) {
    a.top -= offset[1];
    a.left -= offset[0];

    if (bottom) {
      bottom += offset[1];
    }

    if (right) {
      right += offset[0];
    }

    a.width += offset[0];
    a.height += offset[1];
  }

  a.right = right || a.left + a.width;
  a.bottom = bottom || a.top + a.height;
  a.middle = a.left + (a.right - a.left) / 2;
  a.center = a.top + (a.bottom - a.top) / 2;
  return a;
}
function getTargetPosition(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  };
}
function repositionIfNeeded(anchor, target, selfOrigin, anchorOrigin, targetPosition, cover) {
  var margin = Object(utils_scroll["c" /* getScrollbarWidth */])();
  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;
  innerHeight -= margin;
  innerWidth -= margin;

  if (targetPosition.top < 0 || targetPosition.top + target.bottom > innerHeight) {
    if (selfOrigin.vertical === 'center') {
      targetPosition.top = anchor[selfOrigin.vertical] > innerHeight / 2 ? innerHeight - target.bottom : 0;
      targetPosition.maxHeight = Math.min(target.bottom, innerHeight);
    } else if (anchor[selfOrigin.vertical] > innerHeight / 2) {
      var anchorY = Math.min(innerHeight, anchorOrigin.vertical === 'center' ? anchor.center : anchorOrigin.vertical === selfOrigin.vertical ? anchor.bottom : anchor.top);
      targetPosition.maxHeight = Math.min(target.bottom, anchorY);
      targetPosition.top = Math.max(0, anchorY - targetPosition.maxHeight);
    } else {
      targetPosition.top = anchorOrigin.vertical === 'center' ? anchor.center : anchorOrigin.vertical === selfOrigin.vertical ? anchor.top : anchor.bottom;
      targetPosition.maxHeight = Math.min(target.bottom, innerHeight - targetPosition.top);
    }
  }

  if (targetPosition.left < 0 || targetPosition.left + target.right > innerWidth) {
    targetPosition.maxWidth = Math.min(target.right, innerWidth);

    if (selfOrigin.horizontal === 'middle') {
      targetPosition.left = anchor[selfOrigin.horizontal] > innerWidth / 2 ? innerWidth - target.right : 0;
    } else if (cover) {
      targetPosition.left = targetPosition.left < 0 ? 0 : innerWidth - target.right;
    } else if (anchor[selfOrigin.horizontal] > innerWidth / 2) {
      var _anchorY = Math.min(innerWidth, anchorOrigin.horizontal === 'middle' ? anchor.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchor.right : anchor.left);

      targetPosition.maxWidth = Math.min(target.right, _anchorY);
      targetPosition.left = Math.max(0, _anchorY - targetPosition.maxWidth);
    } else {
      targetPosition.left = anchorOrigin.horizontal === 'middle' ? anchor.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchor.left : anchor.right;
      targetPosition.maxWidth = Math.min(target.right, innerWidth - targetPosition.left);
    }
  }

  return targetPosition;
}
function parseHorizTransformOrigin(pos) {
  return pos === 'middle' ? 'center' : pos;
}
function setPosition(_ref) {
  var el = _ref.el,
      animate = _ref.animate,
      anchorEl = _ref.anchorEl,
      anchorOrigin = _ref.anchorOrigin,
      selfOrigin = _ref.selfOrigin,
      maxHeight = _ref.maxHeight,
      event = _ref.event,
      anchorClick = _ref.anchorClick,
      touchPosition = _ref.touchPosition,
      offset = _ref.offset,
      touchOffset = _ref.touchOffset,
      cover = _ref.cover;
  var anchor;
  el.style.maxHeight = maxHeight || '65vh';
  el.style.maxWidth = '100vw';

  if (event && (!anchorClick || touchPosition)) {
    var _eventPosition = Object(utils_event["e" /* position */])(event),
        top = _eventPosition.top,
        left = _eventPosition.left;

    anchor = {
      top: top,
      left: left,
      width: 1,
      height: 1,
      right: left + 1,
      center: top,
      middle: left,
      bottom: top + 1
    };
  } else {
    if (touchOffset) {
      var _anchorEl$getBounding = anchorEl.getBoundingClientRect(),
          anchorTop = _anchorEl$getBounding.top,
          anchorLeft = _anchorEl$getBounding.left,
          _top = anchorTop + touchOffset.top,
          _left = anchorLeft + touchOffset.left;

      anchor = {
        top: _top,
        left: _left,
        width: 1,
        height: 1,
        right: _left + 1,
        center: _top,
        middle: _left,
        bottom: _top + 1
      };
    } else {
      anchor = getAnchorPosition(anchorEl, offset);
    }
  }

  var target = getTargetPosition(el);
  var targetPosition = {
    top: anchor[anchorOrigin.vertical] - target[selfOrigin.vertical],
    left: anchor[anchorOrigin.horizontal] - target[selfOrigin.horizontal]
  };
  targetPosition = repositionIfNeeded(anchor, target, selfOrigin, anchorOrigin, targetPosition, cover);
  el.style.top = Math.max(0, targetPosition.top) + 'px';
  el.style.left = Math.max(0, targetPosition.left) + 'px';

  if (targetPosition.maxHeight) {
    el.style.maxHeight = "".concat(targetPosition.maxHeight, "px");
  }

  if (targetPosition.maxWidth) {
    el.style.maxWidth = "".concat(targetPosition.maxWidth, "px");
  }

  if (animate) {
    var directions = targetPosition.top < anchor.top ? ['up', 'down'] : ['down', 'up'];
    el.classList.add("animate-popup-".concat(directions[0]));
    el.classList.remove("animate-popup-".concat(directions[1]));
  }
}
function positionValidator(pos) {
  var parts = pos.split(' ');

  if (parts.length !== 2) {
    return false;
  }

  if (!['top', 'center', 'bottom'].includes(parts[0])) {
    console.error('Anchor/Self position must start with one of top/center/bottom');
    return false;
  }

  if (!['left', 'middle', 'right'].includes(parts[1])) {
    console.error('Anchor/Self position must end with one of left/middle/right');
    return false;
  }

  return true;
}
function offsetValidator(val) {
  if (!val) {
    return true;
  }

  if (val.length !== 2) {
    return false;
  }

  if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
    return false;
  }

  return true;
}
function parsePosition(pos) {
  var parts = pos.split(' ');
  return {
    vertical: parts[0],
    horizontal: parts[1]
  };
}
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/frame-debounce.js
var frame_debounce = __webpack_require__("8e2f");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/escape-key.js

var handlers = [];
/* harmony default export */ var escape_key = ({
  __installed: false,
  __install: function __install() {
    this.__installed = true;
    window.addEventListener('keyup', function (evt) {
      if (handlers.length === 0) {
        return;
      }

      if (evt.which === 27 || evt.keyCode === 27) {
        handlers[handlers.length - 1]();
      }
    });
  },
  register: function register(handler) {
    if (platform["a" /* default */].is.desktop) {
      if (!this.__installed) {
        this.__install();
      }

      handlers.push(handler);
    }
  },
  pop: function pop() {
    if (platform["a" /* default */].is.desktop) {
      handlers.pop();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/model-toggle.js
var model_toggle = __webpack_require__("fb40");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/can-render.js
var can_render = __webpack_require__("559e");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/popover/QPopover.js








/* harmony default export */ var QPopover = __webpack_exports__["a"] = ({
  name: 'QPopover',
  mixins: [model_toggle["a" /* default */], can_render["a" /* default */]],
  props: {
    anchor: {
      type: String,
      validator: positionValidator
    },
    self: {
      type: String,
      validator: positionValidator
    },
    fit: Boolean,
    cover: Boolean,
    persistent: Boolean,
    keepOnScreen: Boolean,
    maxHeight: String,
    touchPosition: Boolean,
    anchorClick: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Array,
      validator: offsetValidator
    },
    noFocus: Boolean,
    noRefocus: Boolean,
    disable: Boolean
  },
  watch: {
    $route: function $route() {
      this.hide();
    }
  },
  computed: {
    horizSide: function horizSide() {
      return this.$q.i18n.rtl ? 'right' : 'left';
    },
    anchorOrigin: function anchorOrigin() {
      return parsePosition(this.cover ? "top ".concat(this.horizSide) : this.anchor || "bottom ".concat(this.horizSide));
    },
    selfOrigin: function selfOrigin() {
      return parsePosition(this.self || "top ".concat(this.horizSide));
    }
  },
  render: function render(h) {
    if (!this.canRender) {
      return;
    }

    return h('div', {
      staticClass: 'q-popover scroll',
      ref: 'content',
      attrs: {
        tabindex: -1
      },
      on: {
        click: function click(e) {
          e.stopPropagation();
        }
      }
    }, this.$slots.default);
  },
  mounted: function mounted() {
    var _this = this;

    this.__updatePosition = Object(frame_debounce["a" /* default */])(function (_, event, animate) {
      return _this.reposition(event, animate);
    });
    this.$nextTick(function () {
      _this.anchorEl = _this.$el.parentNode;

      _this.anchorEl.removeChild(_this.$el);

      if (_this.anchorEl.classList.contains('q-btn-inner') || _this.anchorEl.classList.contains('q-if-inner') || _this.anchorEl.classList.contains('no-pointer-events')) {
        _this.anchorEl = _this.anchorEl.parentNode;
      }

      if (_this.anchorClick) {
        _this.anchorEl.classList.add('cursor-pointer');

        _this.anchorEl.addEventListener('click', _this.toggle);

        _this.anchorEl.addEventListener('keyup', _this.__toggleKey);
      }
    });
    this.value && this.show();
  },
  beforeDestroy: function beforeDestroy() {
    this.showing && this.__cleanup();

    if (this.anchorClick && this.anchorEl) {
      this.anchorEl.removeEventListener('click', this.toggle);
      this.anchorEl.removeEventListener('keyup', this.__toggleKey);
    }
  },
  methods: {
    __show: function __show(evt) {
      var _this2 = this;

      if (!this.noRefocus) {
        this.__refocusTarget = this.anchorClick && this.anchorEl || document.activeElement;
      }

      document.body.appendChild(this.$el);
      escape_key.register(function () {
        _this2.$emit('escape-key');

        _this2.hide();
      });
      this.scrollTarget = Object(utils_scroll["b" /* getScrollTarget */])(this.anchorEl);
      this.scrollTarget.addEventListener('scroll', this.__updatePosition, utils_event["d" /* listenOpts */].passive);

      if (this.scrollTarget !== window) {
        window.addEventListener('scroll', this.__updatePosition, utils_event["d" /* listenOpts */].passive);
      }

      window.addEventListener('resize', this.__updatePosition, utils_event["d" /* listenOpts */].passive);

      this.__updatePosition(0, evt, true);

      clearTimeout(this.timer);

      if (!this.noFocus && this.$refs.content) {
        this.$refs.content.focus();
      }

      this.timer = setTimeout(function () {
        document.body.addEventListener('mousedown', _this2.__bodyHide, true);
        document.body.addEventListener('touchstart', _this2.__bodyHide, true);
        _this2.showPromise && _this2.showPromiseResolve();
      }, 0);
    },
    __toggleKey: function __toggleKey(evt) {
      if (evt.keyCode === 13) {
        this.toggle(evt);
      }
    },
    __bodyHide: function __bodyHide(evt) {
      if (this.persistent || evt && evt.target && (this.$el.contains(evt.target) || this.anchorEl.contains(evt.target))) {
        return;
      }

      this.hide(evt);
    },
    __hide: function __hide() {
      this.__cleanup();

      this.hidePromise && this.hidePromiseResolve();

      if (!this.noRefocus && this.__refocusTarget) {
        this.__refocusTarget.focus();

        !this.__refocusTarget.classList.contains('q-if') && this.__refocusTarget.blur();
      }
    },
    __cleanup: function __cleanup() {
      clearTimeout(this.timer);
      document.body.removeEventListener('mousedown', this.__bodyHide, true);
      document.body.removeEventListener('touchstart', this.__bodyHide, true);
      this.scrollTarget.removeEventListener('scroll', this.__updatePosition, utils_event["d" /* listenOpts */].passive);

      if (this.scrollTarget !== window) {
        window.removeEventListener('scroll', this.__updatePosition, utils_event["d" /* listenOpts */].passive);
      }

      window.removeEventListener('resize', this.__updatePosition, utils_event["d" /* listenOpts */].passive);
      escape_key.pop();
      this.$el.remove();
    },
    reposition: function reposition(event, animate) {
      var _this$anchorEl$getBou = this.anchorEl.getBoundingClientRect(),
          top = _this$anchorEl$getBou.top,
          bottom = _this$anchorEl$getBou.bottom,
          left = _this$anchorEl$getBou.left,
          right = _this$anchorEl$getBou.right;

      if (!this.keepOnScreen && (bottom < 0 || top > window.innerHeight || right < 0 || left > window.innerWidth)) {
        return this.hide();
      }

      if (this.fit || this.cover) {
        var style = window.getComputedStyle(this.anchorEl);
        this.$el.style.minWidth = style.getPropertyValue('width');

        if (this.cover) {
          this.$el.style.minHeight = style.getPropertyValue('height');
        }
      }

      if (animate) {
        if (this.touchPosition) {
          var _eventPosition = Object(utils_event["e" /* position */])(event),
              eventTop = _eventPosition.top,
              eventLeft = _eventPosition.left;

          this.touchOffset = {
            left: eventLeft - left,
            top: eventTop - top
          };
        } else {
          delete this.touchOffset;
        }
      }

      setPosition({
        event: event,
        animate: animate,
        el: this.$el,
        offset: this.offset,
        anchorEl: this.anchorEl,
        anchorOrigin: this.anchorOrigin,
        selfOrigin: this.selfOrigin,
        maxHeight: this.maxHeight,
        anchorClick: this.anchorClick,
        touchPosition: this.touchPosition,
        touchOffset: this.touchOffset,
        cover: this.cover
      });
    }
  }
});

/***/ }),

/***/ "b70a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/spinner/spinner-mixin.js

/* harmony default export */ var spinner_mixin = ({
  props: {
    color: String,
    size: {
      type: [Number, String],
      default: '1em'
    }
  },
  computed: {
    classes: function classes() {
      if (this.color) {
        return "text-".concat(this.color);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/spinner/QSpinner.mat.js

/* harmony default export */ var QSpinner_mat = ({
  name: 'QSpinnerMat',
  mixins: [spinner_mixin],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner q-spinner-mat',
      class: this.classes,
      attrs: {
        'width': this.size,
        'height': this.size,
        'viewBox': '25 25 50 50'
      }
    }, [h('circle', {
      staticClass: 'path',
      attrs: {
        'cx': '50',
        'cy': '50',
        'r': '20',
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-width': '3',
        'stroke-miterlimit': '10'
      }
    })]);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/spinner/QSpinner.js

/* harmony default export */ var QSpinner = __webpack_exports__["a"] = ({
  mixins: [QSpinner_mat],
  name: 'QSpinner'
});

/***/ }),

/***/ "b8d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bd60");



function text(h, name, val, n) {
  n = parseInt(n, 10);
  return h('div', {
    staticClass: "q-item-".concat(name).concat(n === 1 ? ' ellipsis' : ''),
    style: Object(_mixins_item_js__WEBPACK_IMPORTED_MODULE_1__[/* textStyle */ "b"])(n),
    domProps: {
      innerHTML: val
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QItemMain',
  props: {
    label: String,
    labelLines: [String, Number],
    sublabel: String,
    sublabelLines: [String, Number],
    inset: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h) {
    return h(this.tag, {
      staticClass: 'q-item-main q-item-section',
      'class': {
        'q-item-main-inset': this.inset
      }
    }, [this.label ? text(h, 'label', this.label, this.labelLines) : null, this.sublabel ? text(h, 'sublabel', this.sublabel, this.sublabelLines) : null, this.$slots.default]);
  }
});

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bb0b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.c38ebd3c.woff";

/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "bc54":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.14a08198.woff2";

/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "bd60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return textStyle; });
/* unused harmony export subItemProps */
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b54a");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1679");



function textStyle(n) {
  return n === void 0 || n < 2 ? {} : {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': n
  };
}
var subItemProps = {
  icon: String,
  rightIcon: String,
  image: String,
  rightImage: String,
  avatar: String,
  rightAvatar: String,
  letter: String,
  rightLetter: String,
  label: String,
  sublabel: String,
  labelLines: [String, Number],
  sublabelLines: [String, Number]
};
/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [{
    props: _utils_router_link_js__WEBPACK_IMPORTED_MODULE_2__[/* routerLinkProps */ "d"]
  }],
  props: {
    dark: Boolean,
    link: Boolean,
    dense: Boolean,
    sparse: Boolean,
    separator: Boolean,
    insetSeparator: Boolean,
    multiline: Boolean,
    highlight: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    itemClasses: function itemClasses() {
      return {
        'q-item': true,
        'q-item-division': true,
        'relative-position': true,
        'q-item-dark': this.dark,
        'q-item-dense': this.dense,
        'q-item-sparse': this.sparse,
        'q-item-separator': this.separator,
        'q-item-inset-separator': this.insetSeparator,
        'q-item-multiline': this.multiline,
        'q-item-highlight': this.highlight,
        'q-item-link': this.to || this.link
      };
    }
  }
});

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "be90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a60d");

/* harmony default export */ __webpack_exports__["a"] = ({
  __history: [],
  add: function add() {},
  remove: function remove() {},
  install: function install($q, cfg) {
    var _this = this;

    if (_plugins_platform_js__WEBPACK_IMPORTED_MODULE_0__[/* isSSR */ "c"] || !$q.platform.is.cordova) {
      return;
    }

    this.add = function (definition) {
      _this.__history.push(definition);
    };

    this.remove = function (definition) {
      var index = _this.__history.indexOf(definition);

      if (index >= 0) {
        _this.__history.splice(index, 1);
      }
    };

    var exit = cfg.cordova === void 0 || cfg.cordova.backButtonExit !== false;
    document.addEventListener('deviceready', function () {
      document.addEventListener('backbutton', function () {
        if (_this.__history.length) {
          _this.__history.pop().handler();
        } else if (exit && window.location.hash === '#/') {
          navigator.app.exitApp();
        } else {
          window.history.back();
        }
      }, false);
    });
  }
});

/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("36c3");
var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;

__webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "c081":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTabPane',
  inject: {
    data: {
      default: function _default() {
        console.error('QTabPane needs to be child of QTabs');
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    keepAlive: Boolean
  },
  data: function data() {
    return {
      shown: false
    };
  },
  computed: {
    active: function active() {
      return this.data.tabName === this.name;
    },
    classes: function classes() {
      return {
        hidden: !this.active,
        'animate-fade-left': this.data.direction === 'left',
        'animate-fade-right': this.data.direction === 'right'
      };
    }
  },
  render: function render(h) {
    var node = h('div', {
      staticClass: 'q-tab-pane',
      'class': this.classes
    }, this.$slots.default);

    if (this.keepAlive) {
      if (!this.shown && !this.active) {
        return;
      }

      this.shown = true;
      return node;
    } else {
      this.shown = this.active;

      if (this.active) {
        return node;
      }
    }
  }
});

/***/ }),

/***/ "c135":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "c240":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");
var isBuffer = __webpack_require__("044b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "c563":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/dom.js
var dom = __webpack_require__("abcf");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/debounce.js
/* harmony default export */ var debounce = (function (fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timeout;

  function debounced() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;

      if (!immediate) {
        fn.apply(_this, args);
      }
    };

    clearTimeout(timeout);

    if (immediate && !timeout) {
      fn.apply(this, args);
    }

    timeout = setTimeout(later, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
  };

  return debounced;
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/directives/touch-swipe.js
var touch_swipe = __webpack_require__("28c4");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/tab/QTabs.js











var scrollNavigationSpeed = 5,
    debounceDelay = 50;

function getUnderlineClass(v) {
  if (v) {
    return "text-".concat(v);
  }
}

/* harmony default export */ var QTabs = __webpack_exports__["a"] = ({
  name: 'QTabs',
  provide: function provide() {
    return {
      data: this.data,
      selectTab: this.selectTab,
      selectTabRouter: this.selectTabRouter
    };
  },
  directives: {
    TouchSwipe: touch_swipe["a" /* default */]
  },
  props: {
    value: String,
    align: {
      type: String,
      default:  false ? undefined : 'left',
      validator: function validator(v) {
        return ['left', 'center', 'right', 'justify'].includes(v);
      }
    },
    position: {
      type: String,
      default: 'top',
      validator: function validator(v) {
        return ['top', 'bottom'].includes(v);
      }
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: String,
    inverted: Boolean,
    twoLines: Boolean,
    glossy: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    panesContainerClass: String,
    underlineColor: String
  },
  data: function data() {
    return {
      currentEl: null,
      posbar: {
        width: 0,
        left: 0
      },
      data: {
        highlight: true,
        tabName: this.value || '',
        color: this.color,
        textColor: this.textColor,
        inverted: this.inverted,
        underlineClass: getUnderlineClass(this.underlineColor),
        direction: null
      }
    };
  },
  watch: {
    value: function value(name) {
      this.selectTab(name);
    },
    color: function color(v) {
      this.data.color = v;
    },
    textColor: function textColor(v) {
      this.data.textColor = v;
    },
    inverted: function inverted(v) {
      this.data.inverted = v;
    },
    underlineColor: function underlineColor(v) {
      this.data.underlineClass = getUnderlineClass(v);
    }
  },
  computed: {
    classes: function classes() {
      return ["q-tabs-position-".concat(this.position), "q-tabs-".concat(this.inverted ? 'inverted' : 'normal'), this.twoLines ? 'q-tabs-two-lines' : ''];
    },
    innerClasses: function innerClasses() {
      var cls = ["q-tabs-align-".concat(this.align)];
      this.glossy && cls.push('glossy');

      if (this.inverted) {
        cls.push("text-".concat(this.textColor || this.color));
      } else {
        cls.push("bg-".concat(this.color));
        cls.push("text-".concat(this.textColor || 'white'));
      }

      return cls;
    },
    posbarClasses: function posbarClasses() {
      var cls = [];
      this.inverted && cls.push("text-".concat(this.textColor || this.color));
      this.data.highlight && cls.push('highlight');
      return cls;
    }
  },
  methods: {
    go: function go(offset) {
      var index = 0;

      if (this.data.tabName) {
        var el = this.$refs.scroller.querySelector("[data-tab-name=\"".concat(this.data.tabName, "\"]"));

        if (el) {
          index = Array.prototype.indexOf.call(this.$refs.scroller.children, el);
        }
      }

      var nodes = this.$refs.scroller.querySelectorAll('[data-tab-name]');
      index += offset;

      if (index > -1 && index < nodes.length) {
        this.selectTab(nodes[index].getAttribute('data-tab-name'));
      }
    },
    previous: function previous() {
      this.go(-1);
    },
    next: function next() {
      this.go(1);
    },
    selectTab: function selectTab(value) {
      if (this.data.tabName === value) {
        return;
      }

      this.data.tabName = value;

      var el = this.__getTabElByName(value);

      if (el) {
        this.__scrollToTab(el);

        this.currentEl = el;

        if (this.oldEl) {
          if (this.animated) {
            var children = this.$refs.scroller.children;
            this.data.direction = Array.prototype.indexOf.call(children, el) < Array.prototype.indexOf.call(children, this.oldEl) ? 'left' : 'right';
          }

          if (true) {
            this.__repositionBar();
          }
        } else {
          this.oldEl = el;
        }
      } else {
        this.oldEl = null;
        this.data.direction = null;
      }

      this.$emit('input', value, this.data.direction);
      this.$emit('select', value, this.data.direction);
    },
    selectTabRouter: function selectTabRouter(params) {
      var _this = this;

      var value = params.value,
          selectable = params.selectable,
          exact = params.exact,
          selected = params.selected,
          priority = params.priority,
          first = !this.buffer.length,
          existingIndex = first ? -1 : this.buffer.findIndex(function (t) {
        return t.value === value;
      });

      if (existingIndex > -1) {
        var buffer = this.buffer[existingIndex];
        exact && (buffer.exact = exact);
        selectable && (buffer.selectable = selectable);
        selected && (buffer.selected = selected);
        priority && (buffer.priority = priority);
      } else {
        this.buffer.push(params);
      }

      if (first) {
        this.bufferTimer = setTimeout(function () {
          var tab = _this.buffer.find(function (t) {
            return t.exact && t.selected;
          }) || _this.buffer.find(function (t) {
            return t.selectable && t.selected;
          }) || _this.buffer.find(function (t) {
            return t.exact;
          }) || _this.buffer.filter(function (t) {
            return t.selectable;
          }).sort(function (t1, t2) {
            return t2.priority - t1.priority;
          })[0] || _this.buffer[0];

          _this.buffer.length = 0;

          _this.selectTab(tab.value);
        }, 100);
      }
    },
    __swipe: function __swipe(touch) {
      this.go(touch.direction === 'left' ? 1 : -1);
    },
    __repositionBar: function __repositionBar() {
      var _this2 = this;

      clearTimeout(this.timer);
      var needsUpdate = false;
      var ref = this.$refs.posbar,
          el = this.currentEl;

      if (this.data.highlight !== false) {
        this.data.highlight = false;
        needsUpdate = true;
      }

      if (!el) {
        this.finalPosbar = {
          width: 0,
          left: 0
        };

        this.__setPositionBar(0, 0);

        return;
      }

      var offsetReference = ref.parentNode.offsetLeft;

      if (needsUpdate && this.oldEl) {
        this.__setPositionBar(this.oldEl.getBoundingClientRect().width, this.oldEl.offsetLeft - offsetReference);
      }

      this.timer = setTimeout(function () {
        var width = el.getBoundingClientRect().width,
            left = el.offsetLeft - offsetReference;
        ref.classList.remove('contract');
        _this2.oldEl = el;
        _this2.finalPosbar = {
          width: width,
          left: left
        };

        _this2.__setPositionBar(_this2.posbar.left < left ? left + width - _this2.posbar.left : _this2.posbar.left + _this2.posbar.width - left, _this2.posbar.left < left ? _this2.posbar.left : left);
      }, 20);
    },
    __setPositionBar: function __setPositionBar() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.posbar.width === width && this.posbar.left === left) {
        this.__updatePosbarTransition();

        return;
      }

      this.posbar = {
        width: width,
        left: left
      };
      var xPos = this.$q.i18n.rtl ? left + width : left;
      this.$refs.posbar.style.transform = "translateX(".concat(xPos, "px) scaleX(").concat(width, ")");
    },
    __updatePosbarTransition: function __updatePosbarTransition() {
      if (this.finalPosbar.width === this.posbar.width && this.finalPosbar.left === this.posbar.left) {
        this.posbar = {};

        if (this.data.highlight !== true) {
          this.data.highlight = true;
        }

        return;
      }

      this.$refs.posbar.classList.add('contract');

      this.__setPositionBar(this.finalPosbar.width, this.finalPosbar.left);
    },
    __redraw: function __redraw() {
      if (!this.$q.platform.is.desktop) {
        return;
      }

      this.scrollerWidth = Object(dom["b" /* width */])(this.$refs.scroller);

      if (this.scrollerWidth === 0 && this.$refs.scroller.scrollWidth === 0) {
        return;
      }

      if (this.scrollerWidth + 5 < this.$refs.scroller.scrollWidth) {
        this.$refs.tabs.classList.add('scrollable');
        this.scrollable = true;

        this.__updateScrollIndicator();
      } else {
        this.$refs.tabs.classList.remove('scrollable');
        this.scrollable = false;
      }
    },
    __updateScrollIndicator: function __updateScrollIndicator() {
      if (!this.$q.platform.is.desktop || !this.scrollable) {
        return;
      }

      var action = this.$refs.scroller.scrollLeft + Object(dom["b" /* width */])(this.$refs.scroller) + 5 >= this.$refs.scroller.scrollWidth ? 'add' : 'remove';
      this.$refs.leftScroll.classList[this.$refs.scroller.scrollLeft <= 0 ? 'add' : 'remove']('disabled');
      this.$refs.rightScroll.classList[action]('disabled');
    },
    __getTabElByName: function __getTabElByName(value) {
      var tab = this.$children.find(function (child) {
        return child.name === value && child.$el && child.$el.nodeType === 1;
      });

      if (tab) {
        return tab.$el;
      }
    },
    __findTabAndScroll: function __findTabAndScroll(name, noAnimation) {
      var _this3 = this;

      setTimeout(function () {
        _this3.__scrollToTab(_this3.__getTabElByName(name), noAnimation);
      }, debounceDelay * 4);
    },
    __scrollToTab: function __scrollToTab(tab, noAnimation) {
      if (!tab || !this.scrollable) {
        return;
      }

      var contentRect = this.$refs.scroller.getBoundingClientRect(),
          rect = tab.getBoundingClientRect(),
          tabWidth = rect.width,
          offset = rect.left - contentRect.left;

      if (offset < 0) {
        if (noAnimation) {
          this.$refs.scroller.scrollLeft += offset;
        } else {
          this.__animScrollTo(this.$refs.scroller.scrollLeft + offset);
        }

        return;
      }

      offset += tabWidth - this.$refs.scroller.offsetWidth;

      if (offset > 0) {
        if (noAnimation) {
          this.$refs.scroller.scrollLeft += offset;
        } else {
          this.__animScrollTo(this.$refs.scroller.scrollLeft + offset);
        }
      }
    },
    __animScrollTo: function __animScrollTo(value) {
      var _this4 = this;

      this.__stopAnimScroll();

      this.__scrollTowards(value);

      this.scrollTimer = setInterval(function () {
        if (_this4.__scrollTowards(value)) {
          _this4.__stopAnimScroll();
        }
      }, 5);
    },
    __scrollToStart: function __scrollToStart() {
      this.__animScrollTo(0);
    },
    __scrollToEnd: function __scrollToEnd() {
      this.__animScrollTo(9999);
    },
    __stopAnimScroll: function __stopAnimScroll() {
      clearInterval(this.scrollTimer);
    },
    __scrollTowards: function __scrollTowards(value) {
      var scrollPosition = this.$refs.scroller.scrollLeft,
          direction = value < scrollPosition ? -1 : 1,
          done = false;
      scrollPosition += direction * scrollNavigationSpeed;

      if (scrollPosition < 0) {
        done = true;
        scrollPosition = 0;
      } else if (direction === -1 && scrollPosition <= value || direction === 1 && scrollPosition >= value) {
        done = true;
        scrollPosition = value;
      }

      this.$refs.scroller.scrollLeft = scrollPosition;
      return done;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-tabs flex no-wrap overflow-hidden',
      'class': this.classes
    }, [h('div', {
      staticClass: 'q-tabs-head row',
      ref: 'tabs',
      'class': this.innerClasses
    }, [h('div', {
      ref: 'scroller',
      staticClass: 'q-tabs-scroller row no-wrap'
    }, [this.$slots.title,  true ? h('div', {
      staticClass: 'relative-position self-stretch q-tabs-global-bar-container',
      'class': this.posbarClasses
    }, [h('div', {
      ref: 'posbar',
      staticClass: 'q-tabs-bar q-tabs-global-bar',
      'class': this.data.underlineClass,
      on: {
        transitionend: this.__updatePosbarTransition
      }
    })]) : undefined]), h('div', {
      ref: 'leftScroll',
      staticClass: 'row flex-center q-tabs-left-scroll',
      on: {
        mousedown: this.__scrollToStart,
        touchstart: this.__scrollToStart,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    }, [h(QIcon["a" /* default */], {
      props: {
        name: this.$q.icon.tabs.left
      }
    })]), h('div', {
      ref: 'rightScroll',
      staticClass: 'row flex-center q-tabs-right-scroll',
      on: {
        mousedown: this.__scrollToEnd,
        touchstart: this.__scrollToEnd,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    }, [h(QIcon["a" /* default */], {
      props: {
        name: this.$q.icon.tabs.right
      }
    })])]), h('div', {
      staticClass: 'q-tabs-panes',
      'class': this.panesContainerClass,
      directives: this.swipeable ? [{
        name: 'touch-swipe',
        value: this.__swipe
      }] : null
    }, this.$slots.default)]);
  },
  created: function created() {
    this.timer = null;
    this.scrollTimer = null;
    this.bufferTimer = null;
    this.buffer = [];
    this.scrollable = !this.$q.platform.is.desktop;
    this.__redraw = debounce(this.__redraw, debounceDelay);
    this.__updateScrollIndicator = debounce(this.__updateScrollIndicator, debounceDelay);
  },
  mounted: function mounted() {
    var _this5 = this;

    this.$nextTick(function () {
      if (!_this5.$refs.scroller) {
        return;
      }

      _this5.$refs.scroller.addEventListener('scroll', _this5.__updateScrollIndicator, utils_event["d" /* listenOpts */].passive);

      window.addEventListener('resize', _this5.__redraw, utils_event["d" /* listenOpts */].passive);

      if (_this5.data.tabName !== '' && _this5.value) {
        _this5.selectTab(_this5.value);
      }

      _this5.__redraw();

      _this5.__findTabAndScroll(_this5.data.tabName, true);
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    clearTimeout(this.bufferTimer);

    this.__stopAnimScroll();

    this.$refs.scroller.removeEventListener('scroll', this.__updateScrollIndicator, utils_event["d" /* listenOpts */].passive);
    window.removeEventListener('resize', this.__redraw, utils_event["d" /* listenOpts */].passive);

    this.__redraw.cancel();

    this.__updateScrollIndicator.cancel();
  }
});

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c604":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-top.js
/* harmony default export */ var table_top = ({
  computed: {
    marginalsProps: function marginalsProps() {
      return {
        pagination: this.computedPagination,
        pagesNumber: this.pagesNumber,
        isFirstPage: this.isFirstPage,
        isLastPage: this.isLastPage,
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        inFullscreen: this.inFullscreen,
        toggleFullscreen: this.toggleFullscreen
      };
    }
  },
  methods: {
    getTop: function getTop(h) {
      var top = this.$scopedSlots.top,
          topLeft = this.$scopedSlots['top-left'],
          topRight = this.$scopedSlots['top-right'],
          topSelection = this.$scopedSlots['top-selection'],
          hasSelection = this.hasSelectionMode && topSelection && this.rowsSelectedNumber > 0,
          staticClass = 'q-table-top relative-position row items-center',
          child = [];

      if (top) {
        return h('div', {
          staticClass: staticClass
        }, [top(this.marginalsProps)]);
      }

      if (hasSelection) {
        child.push(topSelection(this.marginalsProps));
      } else {
        if (topLeft) {
          child.push(h('div', {
            staticClass: 'q-table-control'
          }, [topLeft(this.marginalsProps)]));
        } else if (this.title) {
          child.push(h('div', {
            staticClass: 'q-table-control'
          }, [h('div', {
            staticClass: 'q-table-title'
          }, this.title)]));
        }
      }

      if (topRight) {
        child.push(h('div', {
          staticClass: 'q-table-separator col'
        }));
        child.push(h('div', {
          staticClass: 'q-table-control'
        }, [topRight(this.marginalsProps)]));
      }

      if (child.length === 0) {
        return;
      }

      return h('div', {
        staticClass: staticClass
      }, child);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/format.js
var format = __webpack_require__("177b");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/progress/QProgress.js



function width(val) {
  return {
    width: "".concat(val, "%")
  };
}

/* harmony default export */ var QProgress = ({
  name: 'QProgress',
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    },
    stripe: Boolean,
    animate: Boolean,
    indeterminate: Boolean,
    buffer: Number,
    height: {
      type: String,
      default: '4px'
    }
  },
  computed: {
    model: function model() {
      return Object(format["a" /* between */])(this.percentage, 0, 100);
    },
    bufferModel: function bufferModel() {
      return Object(format["a" /* between */])(this.buffer || 0, 0, 100 - this.model);
    },
    bufferStyle: function bufferStyle() {
      return width(this.bufferModel);
    },
    trackStyle: function trackStyle() {
      return width(this.buffer ? 100 - this.buffer : 100);
    },
    computedClass: function computedClass() {
      return "text-".concat(this.color);
    },
    computedStyle: function computedStyle() {
      return {
        height: this.height
      };
    },
    modelClass: function modelClass() {
      return {
        animate: this.animate,
        stripe: this.stripe,
        indeterminate: this.indeterminate
      };
    },
    modelStyle: function modelStyle() {
      return width(this.model);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-progress',
      style: this.computedStyle,
      'class': this.computedClass
    }, [this.buffer && !this.indeterminate ? h('div', {
      staticClass: 'q-progress-buffer',
      style: this.bufferStyle
    }) : null, h('div', {
      staticClass: 'q-progress-track',
      style: this.trackStyle
    }), h('div', {
      staticClass: 'q-progress-model',
      style: this.modelStyle,
      'class': this.modelClass
    })]);
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("525b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/table/QTh.js
var QTh = __webpack_require__("62a9");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-header.js





/* harmony default export */ var table_header = ({
  methods: {
    getTableHeader: function getTableHeader(h) {
      var child = [this.getTableHeaderRow(h)];

      if (this.loading) {
        child.push(h('tr', {
          staticClass: 'q-table-progress animate-fade'
        }, [h('td', {
          attrs: {
            colspan: '100%'
          }
        }, [h(QProgress, {
          props: {
            color: this.color,
            indeterminate: true,
            height: '2px'
          }
        })])]));
      }

      return h('thead', child);
    },
    getTableHeaderRow: function getTableHeaderRow(h) {
      var _this = this;

      var header = this.$scopedSlots.header,
          headerCell = this.$scopedSlots['header-cell'];

      if (header) {
        return header(this.addTableHeaderRowMeta({
          header: true,
          cols: this.computedCols,
          sort: this.sort,
          colsMap: this.computedColsMap
        }));
      }

      var mapFn;

      if (headerCell) {
        mapFn = function mapFn(col) {
          return headerCell({
            col: col,
            cols: _this.computedCols,
            sort: _this.sort,
            colsMap: _this.computedColsMap
          });
        };
      } else {
        mapFn = function mapFn(col) {
          return h(QTh["a" /* default */], {
            key: col.name,
            props: {
              props: {
                col: col,
                cols: _this.computedCols,
                sort: _this.sort,
                colsMap: _this.computedColsMap
              }
            },
            style: col.style,
            'class': col.classes
          }, col.label);
        };
      }

      var child = this.computedCols.map(mapFn);

      if (this.singleSelection && !this.grid) {
        child.unshift(h('th', {
          staticClass: 'q-table-col-auto-width'
        }, [' ']));
      } else if (this.multipleSelection) {
        child.unshift(h('th', {
          staticClass: 'q-table-col-auto-width'
        }, [h(QCheckbox["a" /* default */], {
          props: {
            color: this.color,
            value: this.someRowsSelected ? null : this.allRowsSelected,
            dark: this.dark
          },
          on: {
            input: function input(val) {
              if (_this.someRowsSelected) {
                val = false;
              }

              _this.__updateSelection(_this.computedRows.map(function (row) {
                return row[_this.rowKey];
              }), _this.computedRows, val);
            }
          }
        })]));
      }

      return h('tr', child);
    },
    addTableHeaderRowMeta: function addTableHeaderRowMeta(data) {
      var _this2 = this;

      if (this.multipleSelection) {
        Object.defineProperty(data, 'selected', {
          get: function get() {
            return _this2.someRowsSelected ? 'some' : _this2.allRowsSelected;
          },
          set: function set(val) {
            if (_this2.someRowsSelected) {
              val = false;
            }

            _this2.__updateSelection(_this2.computedRows.map(function (row) {
              return row[_this2.rowKey];
            }), _this2.computedRows, val);
          }
        });
        data.partialSelected = this.someRowsSelected;
        data.multipleSelect = true;
      }

      return data;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-body.js



/* harmony default export */ var table_body = ({
  methods: {
    getTableBody: function getTableBody(h) {
      var _this = this;

      var body = this.$scopedSlots.body,
          bodyCell = this.$scopedSlots['body-cell'],
          topRow = this.$scopedSlots['top-row'],
          bottomRow = this.$scopedSlots['bottom-row'];
      var child = [];

      if (body) {
        child = this.computedRows.map(function (row) {
          var key = row[_this.rowKey],
              selected = _this.isRowSelected(key);

          return body(_this.addBodyRowMeta({
            key: key,
            row: row,
            cols: _this.computedCols,
            colsMap: _this.computedColsMap,
            __trClass: selected ? 'selected' : ''
          }));
        });
      } else {
        child = this.computedRows.map(function (row) {
          var key = row[_this.rowKey],
              selected = _this.isRowSelected(key),
              child = bodyCell ? _this.computedCols.map(function (col) {
            return bodyCell(_this.addBodyCellMetaData({
              row: row,
              col: col
            }));
          }) : _this.computedCols.map(function (col) {
            var slot = _this.$scopedSlots["body-cell-".concat(col.name)];

            return slot ? slot(_this.addBodyCellMetaData({
              row: row,
              col: col
            })) : h('td', {
              staticClass: col.__tdClass,
              style: col.style,
              'class': col.classes
            }, _this.getCellValue(col, row));
          });

          if (_this.hasSelectionMode) {
            child.unshift(h('td', {
              staticClass: 'q-table-col-auto-width'
            }, [h(QCheckbox["a" /* default */], {
              props: {
                value: selected,
                color: _this.color,
                dark: _this.dark
              },
              on: {
                input: function input(adding) {
                  _this.__updateSelection([key], [row], adding);
                }
              }
            })]));
          }

          return h('tr', {
            key: key,
            'class': {
              selected: selected
            }
          }, child);
        });
      }

      if (topRow) {
        child.unshift(topRow({
          cols: this.computedCols
        }));
      }

      if (bottomRow) {
        child.push(bottomRow({
          cols: this.computedCols
        }));
      }

      return h('tbody', child);
    },
    addBodyRowMeta: function addBodyRowMeta(data) {
      var _this2 = this;

      if (this.hasSelectionMode) {
        Object.defineProperty(data, 'selected', {
          get: function get() {
            return _this2.isRowSelected(data.key);
          },
          set: function set(adding) {
            _this2.__updateSelection([data.key], [data.row], adding);
          }
        });
      }

      Object.defineProperty(data, 'expand', {
        get: function get() {
          return _this2.rowsExpanded[data.key] === true;
        },
        set: function set(val) {
          _this2.$set(_this2.rowsExpanded, data.key, val);
        }
      });
      data.cols = data.cols.map(function (col) {
        var c = Object.assign({}, col);
        Object.defineProperty(c, 'value', {
          get: function get() {
            return _this2.getCellValue(col, data.row);
          }
        });
        return c;
      });
      return data;
    },
    addBodyCellMetaData: function addBodyCellMetaData(data) {
      var _this3 = this;

      Object.defineProperty(data, 'value', {
        get: function get() {
          return _this3.getCellValue(data.col, data.row);
        }
      });
      return data;
    },
    getCellValue: function getCellValue(col, row) {
      var val = typeof col.field === 'function' ? col.field(row) : row[col.field];
      return col.format ? col.format(val) : val;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/select/QSelect.js + 5 modules
var QSelect = __webpack_require__("5931");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/btn/QBtn.js
var QBtn = __webpack_require__("482e");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/icon/QIcon.js
var QIcon = __webpack_require__("52b5");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-bottom.js



/* harmony default export */ var table_bottom = ({
  computed: {
    navIcon: function navIcon() {
      var ico = [this.$q.icon.table.prevPage, this.$q.icon.table.nextPage];
      return this.$q.i18n.rtl ? ico.reverse() : ico;
    }
  },
  methods: {
    getBottom: function getBottom(h) {
      if (this.hideBottom) {
        return;
      }

      if (this.nothingToDisplay) {
        var message = this.filter ? this.noResultsLabel || this.$q.i18n.table.noResults : this.loading ? this.loadingLabel || this.$q.i18n.table.loading : this.noDataLabel || this.$q.i18n.table.noData;
        return h('div', {
          staticClass: 'q-table-bottom row items-center q-table-nodata'
        }, [h(QIcon["a" /* default */], {
          props: {
            name: this.$q.icon.table.warning
          }
        }), message]);
      }

      var bottom = this.$scopedSlots.bottom;
      return h('div', {
        staticClass: 'q-table-bottom row items-center',
        'class': bottom ? null : 'justify-end'
      }, bottom ? [bottom(this.marginalsProps)] : this.getPaginationRow(h));
    },
    getPaginationRow: function getPaginationRow(h) {
      var _this = this;

      var rowsPerPage = this.computedPagination.rowsPerPage,
          paginationLabel = this.paginationLabel || this.$q.i18n.table.pagination,
          paginationSlot = this.$scopedSlots.pagination;
      return [h('div', {
        staticClass: 'q-table-control'
      }, [h('div', [this.hasSelectionMode && this.rowsSelectedNumber > 0 ? (this.selectedRowsLabel || this.$q.i18n.table.selectedRecords)(this.rowsSelectedNumber) : ''])]), h('div', {
        staticClass: 'q-table-separator col'
      }), this.rowsPerPageOptions.length > 1 && h('div', {
        staticClass: 'q-table-control'
      }, [h('span', {
        staticClass: 'q-table-bottom-item'
      }, [this.rowsPerPageLabel || this.$q.i18n.table.recordsPerPage]), h(QSelect["a" /* default */], {
        staticClass: 'inline q-table-bottom-item',
        props: {
          color: this.color,
          value: rowsPerPage,
          options: this.computedRowsPerPageOptions,
          dark: this.dark,
          hideUnderline: true
        },
        on: {
          input: function input(rowsPerPage) {
            _this.setPagination({
              page: 1,
              rowsPerPage: rowsPerPage
            });
          }
        }
      })]) || void 0, h('div', {
        staticClass: 'q-table-control'
      }, [paginationSlot ? paginationSlot(this.marginalsProps) : [h('span', {
        staticClass: 'q-table-bottom-item'
      }, [rowsPerPage ? paginationLabel(this.firstRowIndex + 1, Math.min(this.lastRowIndex, this.computedRowsNumber), this.computedRowsNumber) : paginationLabel(1, this.computedRowsNumber, this.computedRowsNumber)]), h(QBtn["a" /* default */], {
        props: {
          color: this.color,
          round: true,
          icon: this.navIcon[0],
          dense: true,
          flat: true,
          disable: this.isFirstPage
        },
        on: {
          click: this.prevPage
        }
      }), h(QBtn["a" /* default */], {
        props: {
          color: this.color,
          round: true,
          icon: this.navIcon[1],
          dense: true,
          flat: true,
          disable: this.isLastPage
        },
        on: {
          click: this.nextPage
        }
      })]])];
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("278c");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/sort.js
function sortString(a, b) {
  if (typeof a !== 'string') {
    throw new TypeError('The value for sorting must be a String');
  }

  return a.localeCompare(b);
}
function sortNumber(a, b) {
  return a - b;
}
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
function sortBoolean(a, b) {
  return a && !b ? -1 : !a && b ? 1 : 0;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/is.js

function isPrintableChar(v) {
  return v > 47 && v < 58 || v === 32 || v === 13 || v > 64 && v < 91 || v > 95 && v < 112 || v > 185 && v < 193 || v > 218 && v < 223;
}
function isObject(v) {
  return Object(v) === v;
}
function isDate(v) {
  return Object.prototype.toString.call(v) === '[object Date]';
}
function isRegexp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]';
}
function isNumber(v) {
  return typeof v === 'number' && isFinite(v);
}
function isString(v) {
  return typeof v === 'string';
}
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-sort.js






/* harmony default export */ var table_sort = ({
  props: {
    sortMethod: {
      type: Function,
      default: function _default(data, sortBy, descending) {
        var col = this.columns.find(function (def) {
          return def.name === sortBy;
        });

        if (col === null || col.field === void 0) {
          return data;
        }

        var dir = descending ? -1 : 1,
            val = typeof col.field === 'function' ? function (v) {
          return col.field(v);
        } : function (v) {
          return v[col.field];
        };
        return data.sort(function (a, b) {
          var A = val(a),
              B = val(b);

          if (A === null || A === void 0) {
            return -1 * dir;
          }

          if (B === null || B === void 0) {
            return 1 * dir;
          }

          if (col.sort) {
            return col.sort(A, B) * dir;
          }

          if (isNumber(A) && isNumber(B)) {
            return (A - B) * dir;
          }

          if (isDate(A) && isDate(B)) {
            return sortDate(A, B) * dir;
          }

          if (typeof A === 'boolean' && typeof B === 'boolean') {
            return (a - b) * dir;
          }

          var _map = [A, B].map(function (s) {
            return (s + '').toLowerCase();
          });

          var _map2 = slicedToArray_default()(_map, 2);

          A = _map2[0];
          B = _map2[1];
          return A < B ? -1 * dir : A === B ? 0 : dir;
        });
      }
    }
  },
  computed: {
    columnToSort: function columnToSort() {
      var sortBy = this.computedPagination.sortBy;

      if (sortBy) {
        return this.columns.find(function (def) {
          return def.name === sortBy;
        }) || null;
      }
    }
  },
  methods: {
    sort: function sort(col) {
      if (col === Object(col)) {
        col = col.name;
      }

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending;

      if (sortBy !== col) {
        sortBy = col;
        descending = false;
      } else {
        if (this.binaryStateSort) {
          descending = !descending;
        } else {
          if (descending) {
            sortBy = null;
          } else {
            descending = true;
          }
        }
      }

      this.setPagination({
        sortBy: sortBy,
        descending: descending,
        page: 1
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-filter.js
/* harmony default export */ var table_filter = ({
  props: {
    filter: [String, Object],
    filterMethod: {
      type: Function,
      default: function _default(rows, terms) {
        var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.computedCols;
        var cellValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getCellValue;
        var lowerTerms = terms ? terms.toLowerCase() : '';
        return rows.filter(function (row) {
          return cols.some(function (col) {
            return (cellValue(col, row) + '').toLowerCase().indexOf(lowerTerms) !== -1;
          });
        });
      }
    }
  },
  watch: {
    filter: function filter() {
      var _this = this;

      this.$nextTick(function () {
        _this.setPagination({
          page: 1
        }, true);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-pagination.js


function samePagination(oldPag, newPag) {
  for (var prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }

  return true;
}

function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }

  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }

  return p;
}

/* harmony default export */ var table_pagination = ({
  props: {
    pagination: Object,
    rowsPerPageOptions: {
      type: Array,
      default: function _default() {
        return [3, 5, 7, 10, 15, 20, 25, 50, 0];
      }
    }
  },
  data: function data() {
    return {
      innerPagination: {
        sortBy: null,
        descending: false,
        page: 1,
        rowsPerPage: 5
      }
    };
  },
  computed: {
    computedPagination: function computedPagination() {
      return fixPagination(Object.assign({}, this.innerPagination, this.pagination));
    },
    firstRowIndex: function firstRowIndex() {
      var _this$computedPaginat = this.computedPagination,
          page = _this$computedPaginat.page,
          rowsPerPage = _this$computedPaginat.rowsPerPage;
      return (page - 1) * rowsPerPage;
    },
    lastRowIndex: function lastRowIndex() {
      var _this$computedPaginat2 = this.computedPagination,
          page = _this$computedPaginat2.page,
          rowsPerPage = _this$computedPaginat2.rowsPerPage;
      return page * rowsPerPage;
    },
    isFirstPage: function isFirstPage() {
      return this.computedPagination.page === 1;
    },
    pagesNumber: function pagesNumber() {
      return Math.max(1, Math.ceil(this.computedRowsNumber / this.computedPagination.rowsPerPage));
    },
    isLastPage: function isLastPage() {
      if (this.lastRowIndex === 0) {
        return true;
      }

      return this.computedPagination.page >= this.pagesNumber;
    },
    computedRowsPerPageOptions: function computedRowsPerPageOptions() {
      var _this = this;

      return this.rowsPerPageOptions.map(function (count) {
        return {
          label: count === 0 ? _this.$q.i18n.table.allRows : '' + count,
          value: count
        };
      });
    }
  },
  watch: {
    pagesNumber: function pagesNumber(lastPage, oldLastPage) {
      if (lastPage === oldLastPage) {
        return;
      }

      var currentPage = this.computedPagination.page;

      if (lastPage && !currentPage) {
        this.setPagination({
          page: 1
        });
      } else if (lastPage < currentPage) {
        this.setPagination({
          page: lastPage
        });
      }
    }
  },
  methods: {
    __sendServerRequest: function __sendServerRequest(pagination) {
      this.requestServerInteraction({
        pagination: pagination,
        filter: this.filter
      });
    },
    setPagination: function setPagination(val, forceServerRequest) {
      var newPagination = fixPagination(Object.assign({}, this.computedPagination, val));

      if (samePagination(this.computedPagination, newPagination)) {
        if (this.isServerSide && forceServerRequest) {
          this.__sendServerRequest(newPagination);
        }

        return;
      }

      if (this.isServerSide) {
        this.__sendServerRequest(newPagination);

        return;
      }

      if (this.pagination) {
        this.$emit('update:pagination', newPagination);
      } else {
        this.innerPagination = newPagination;
      }
    },
    prevPage: function prevPage() {
      var page = this.computedPagination.page;

      if (page > 1) {
        this.setPagination({
          page: page - 1
        });
      }
    },
    nextPage: function nextPage() {
      var _this$computedPaginat3 = this.computedPagination,
          page = _this$computedPaginat3.page,
          rowsPerPage = _this$computedPaginat3.rowsPerPage;

      if (this.lastRowIndex > 0 && page * rowsPerPage < this.computedRowsNumber) {
        this.setPagination({
          page: page + 1
        });
      }
    }
  },
  created: function created() {
    this.$emit('update:pagination', Object.assign({}, this.computedPagination));
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-row-selection.js



/* harmony default export */ var table_row_selection = ({
  props: {
    selection: {
      type: String,
      default: 'none',
      validator: function validator(v) {
        return ['single', 'multiple', 'none'].includes(v);
      }
    },
    selected: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    selectedKeys: function selectedKeys() {
      var _this = this;

      var keys = {};
      this.selected.map(function (row) {
        return row[_this.rowKey];
      }).forEach(function (key) {
        keys[key] = true;
      });
      return keys;
    },
    hasSelectionMode: function hasSelectionMode() {
      return this.selection !== 'none';
    },
    singleSelection: function singleSelection() {
      return this.selection === 'single';
    },
    multipleSelection: function multipleSelection() {
      return this.selection === 'multiple';
    },
    allRowsSelected: function allRowsSelected() {
      var _this2 = this;

      if (this.multipleSelection) {
        return this.computedRows.length > 0 && this.computedRows.every(function (row) {
          return _this2.selectedKeys[row[_this2.rowKey]] === true;
        });
      }
    },
    someRowsSelected: function someRowsSelected() {
      var _this3 = this;

      if (this.multipleSelection) {
        return !this.allRowsSelected && this.computedRows.some(function (row) {
          return _this3.selectedKeys[row[_this3.rowKey]] === true;
        });
      }
    },
    rowsSelectedNumber: function rowsSelectedNumber() {
      return this.selected.length;
    }
  },
  methods: {
    isRowSelected: function isRowSelected(key) {
      return this.selectedKeys[key] === true;
    },
    clearSelection: function clearSelection() {
      this.$emit('update:selected', []);
    },
    __updateSelection: function __updateSelection(keys, rows, adding) {
      var _this4 = this;

      if (this.singleSelection) {
        this.$emit('update:selected', adding ? rows : []);
      } else {
        this.$emit('update:selected', adding ? this.selected.concat(rows) : this.selected.filter(function (row) {
          return !keys.includes(row[_this4.rowKey]);
        }));
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-column-selection.js




/* harmony default export */ var table_column_selection = ({
  props: {
    visibleColumns: Array
  },
  computed: {
    computedCols: function computedCols() {
      var _this = this;

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending;
      var cols = this.visibleColumns ? this.columns.filter(function (col) {
        return col.required || _this.visibleColumns.includes(col.name);
      }) : this.columns;
      return cols.map(function (col) {
        col.align = col.align || 'right';
        col.__iconClass = "q-table-sort-icon q-table-sort-icon-".concat(col.align);
        col.__thClass = "text-".concat(col.align).concat(col.sortable ? ' sortable' : '').concat(col.name === sortBy ? " sorted ".concat(descending ? 'sort-desc' : '') : '');
        col.__tdClass = "text-".concat(col.align);
        return col;
      });
    },
    computedColsMap: function computedColsMap() {
      var names = {};
      this.computedCols.forEach(function (col) {
        names[col.name] = col;
      });
      return names;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/table-expand.js
/* harmony default export */ var table_expand = ({
  data: function data() {
    return {
      rowsExpanded: {}
    };
  }
});
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/history.js
var src_history = __webpack_require__("be90");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/mixins/fullscreen.js

/* harmony default export */ var fullscreen = ({
  data: function data() {
    return {
      inFullscreen: false
    };
  },
  watch: {
    $route: function $route() {
      this.exitFullscreen();
    },
    inFullscreen: function inFullscreen(v) {
      this.$emit('fullscreen', v);
    }
  },
  methods: {
    toggleFullscreen: function toggleFullscreen() {
      if (this.inFullscreen) {
        this.exitFullscreen();
      } else {
        this.setFullscreen();
      }
    },
    setFullscreen: function setFullscreen() {
      if (this.inFullscreen) {
        return;
      }

      this.inFullscreen = true;
      this.container = this.$el.parentNode;
      this.container.replaceChild(this.fullscreenFillerNode, this.$el);
      document.body.appendChild(this.$el);
      document.body.classList.add('q-body-fullscreen-mixin');
      this.__historyFullscreen = {
        handler: this.exitFullscreen
      };
      src_history["a" /* default */].add(this.__historyFullscreen);
    },
    exitFullscreen: function exitFullscreen() {
      if (!this.inFullscreen) {
        return;
      }

      if (this.__historyFullscreen) {
        src_history["a" /* default */].remove(this.__historyFullscreen);
        this.__historyFullscreen = null;
      }

      this.container.replaceChild(this.$el, this.fullscreenFillerNode);
      document.body.classList.remove('q-body-fullscreen-mixin');
      this.inFullscreen = false;
    }
  },
  beforeMount: function beforeMount() {
    this.fullscreenFillerNode = document.createElement('span');
  },
  beforeDestroy: function beforeDestroy() {
    this.exitFullscreen();
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/table/QTable.js













/* harmony default export */ var QTable = __webpack_exports__["a"] = ({
  name: 'QTable',
  mixins: [fullscreen, table_top, table_header, table_body, table_bottom, table_sort, table_filter, table_pagination, table_row_selection, table_column_selection, table_expand],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    color: {
      type: String,
      default: 'grey-8'
    },
    grid: Boolean,
    dense: Boolean,
    columns: Array,
    loading: Boolean,
    title: String,
    hideHeader: Boolean,
    hideBottom: Boolean,
    dark: Boolean,
    separator: {
      type: String,
      default: 'horizontal',
      validator: function validator(v) {
        return ['horizontal', 'vertical', 'cell', 'none'].includes(v);
      }
    },
    binaryStateSort: Boolean,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    tableStyle: {
      type: [String, Array, Object],
      default: ''
    },
    tableClass: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    computedData: function computedData() {
      var rows = this.data.slice().map(function (row, i) {
        row.__index = i;
        return row;
      });

      if (rows.length === 0) {
        return {
          rowsNumber: 0,
          rows: []
        };
      }

      if (this.isServerSide) {
        return {
          rows: rows
        };
      }

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending,
          rowsPerPage = _this$computedPaginat.rowsPerPage;

      if (this.filter) {
        rows = this.filterMethod(rows, this.filter, this.computedCols, this.getCellValue);
      }

      if (this.columnToSort) {
        rows = this.sortMethod(rows, sortBy, descending);
      }

      var rowsNumber = rows.length;

      if (rowsPerPage) {
        rows = rows.slice(this.firstRowIndex, this.lastRowIndex);
      }

      return {
        rowsNumber: rowsNumber,
        rows: rows
      };
    },
    computedRows: function computedRows() {
      return this.computedData.rows;
    },
    computedRowsNumber: function computedRowsNumber() {
      return this.isServerSide ? this.computedPagination.rowsNumber || 0 : this.computedData.rowsNumber;
    },
    nothingToDisplay: function nothingToDisplay() {
      return this.computedRows.length === 0;
    },
    isServerSide: function isServerSide() {
      return this.computedPagination.rowsNumber !== void 0;
    }
  },
  render: function render(h) {
    return h('div', {
      'class': {
        'q-table-grid': this.grid,
        'q-table-container': true,
        'q-table-dark': this.dark,
        'q-table-dense': this.dense,
        fullscreen: this.inFullscreen,
        scroll: this.inFullscreen
      }
    }, [this.getTop(h), this.getBody(h), this.getBottom(h)]);
  },
  methods: {
    requestServerInteraction: function requestServerInteraction(prop) {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('request', {
          pagination: prop.pagination || _this.computedPagination,
          filter: prop.filter || _this.filter,
          getCellValue: _this.getCellValue
        });
      });
    },
    getBody: function getBody(h) {
      var _this2 = this;

      var hasHeader = !this.hideHeader;

      if (this.grid) {
        var item = this.$scopedSlots.item;

        if (item !== void 0) {
          return [hasHeader && h('div', {
            staticClass: 'q-table-middle scroll'
          }, [h('table', {
            staticClass: "q-table".concat(this.dark ? ' q-table-dark' : '')
          }, [this.getTableHeader(h)])]) || null, h('div', {
            staticClass: 'row'
          }, this.computedRows.map(function (row) {
            var key = row[_this2.rowKey],
                selected = _this2.isRowSelected(key);

            return item(_this2.addBodyRowMeta({
              key: key,
              row: row,
              cols: _this2.computedCols,
              colsMap: _this2.computedColsMap,
              __trClass: selected ? 'selected' : ''
            }));
          }))];
        }
      }

      return h('div', {
        staticClass: 'q-table-middle scroll',
        'class': this.tableClass,
        style: this.tableStyle
      }, [h('table', {
        staticClass: "q-table q-table-".concat(this.separator, "-separator").concat(this.dark ? ' q-table-dark' : '')
      }, [hasHeader && this.getTableHeader(h) || null, this.getTableBody(h)])]);
    }
  }
});

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c6da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("68c2");
/* harmony import */ var _icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("52b5");
/* harmony import */ var _chip_QChip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4bf4");
/* harmony import */ var _directives_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1526");






/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    Ripple: _directives_ripple_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  },
  props: {
    label: String,
    icon: String,
    disable: Boolean,
    hidden: Boolean,
    hide: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: function _default() {
        return Object(_utils_uid_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
      }
    },
    alert: Boolean,
    count: [Number, String],
    color: String,
    tabindex: Number
  },
  inject: {
    data: {
      default: function _default() {
        console.error('QTab/QRouteTab components need to be child of QTabs');
      }
    },
    selectTab: {}
  },
  watch: {
    active: function active(val) {
      if (val) {
        this.$emit('select', this.name);
      }
    }
  },
  computed: {
    active: function active() {
      return this.data.tabName === this.name;
    },
    classes: function classes() {
      var cls = {
        active: this.active,
        hidden: this.hidden,
        disabled: this.disable,
        'q-tab-full': this.icon && this.label,
        'q-tab-only-label': !this.icon && this.label,
        'hide-none': !this.hide,
        'hide-icon': this.hide === 'icon',
        'hide-label': this.hide === 'label'
      };
      var color = this.data.inverted ? this.color || this.data.textColor || this.data.color : this.color;

      if (color) {
        cls["text-".concat(color)] =  false ? undefined : true;
      }

      return cls;
    },
    barStyle: function barStyle() {
      if (!this.active || !this.data.highlight) {
        return 'display: none;';
      }
    },
    computedTabIndex: function computedTabIndex() {
      return this.disable || this.active ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    __getTabMeta: function __getTabMeta(h) {
      if (this.count) {
        return [h(_chip_QChip_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          staticClass: 'q-tab-meta',
          props: {
            floating: true
          }
        }, [this.count])];
      }

      if (this.alert) {
        return [h('div', {
          staticClass: 'q-tab-meta q-dot'
        })];
      }
    },
    __getTabContent: function __getTabContent(h) {
      var child = [];
      this.icon && child.push(h('div', {
        staticClass: 'q-tab-icon-parent relative-position'
      }, [h(_icon_QIcon_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'q-tab-icon',
        props: {
          name: this.icon
        }
      }), this.__getTabMeta(h)]));
      this.label && child.push(h('div', {
        staticClass: 'q-tab-label-parent relative-position'
      }, [h('div', {
        staticClass: 'q-tab-label'
      }, [this.label]), this.__getTabMeta(h)]));
      child = child.concat(this.$slots.default);

      if (true) {
        child.push(h('div', {
          staticClass: 'q-tabs-bar',
          style: this.barStyle,
          'class': this.data.underlineClass
        }));
      }

      child.push(h('div', {
        staticClass: 'q-tab-focus-helper absolute-full',
        attrs: {
          tabindex: this.computedTabIndex
        }
      }));
      return child;
    }
  }
});

/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "cd88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b18c");
/* harmony import */ var _align_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5958");


var marginal = {
  type: Array,
  validator: function validator(v) {
    return v.every(function (i) {
      return 'icon' in i;
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [_align_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]],
  props: {
    prefix: String,
    suffix: String,
    stackLabel: String,
    floatLabel: String,
    placeholder: String,
    error: Boolean,
    warning: Boolean,
    disable: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    align: {
      default: 'left'
    },
    dark: Boolean,
    before: marginal,
    after: marginal,
    inverted: Boolean,
    invertedLight: Boolean,
    hideUnderline: Boolean,
    clearValue: {},
    noParentField: Boolean
  },
  computed: {
    inputPlaceholder: function inputPlaceholder() {
      if (!this.floatLabel && !this.stackLabel || this.labelIsAbove) {
        return this.placeholder;
      }
    },
    isInverted: function isInverted() {
      return this.inverted || this.invertedLight;
    },
    isInvertedLight: function isInvertedLight() {
      return this.isInverted && (this.invertedLight && !this.hasError || this.inverted && this.hasWarning);
    },
    isStandard: function isStandard() {
      return !this.isInverted;
    },
    isHideUnderline: function isHideUnderline() {
      return this.isStandard && this.hideUnderline;
    },
    labelIsAbove: function labelIsAbove() {
      return this.focused || this.length || this.additionalLength || this.stackLabel;
    },
    hasContent: function hasContent() {
      return this.length > 0 || this.additionalLength > 0 || this.placeholder || this.placeholder === 0;
    },
    editable: function editable() {
      return !this.disable && !this.readonly;
    },
    computedClearValue: function computedClearValue() {
      return this.clearValue === void 0 ? null : this.clearValue;
    },
    isClearable: function isClearable() {
      return this.editable && this.clearable && this.computedClearValue !== this.model;
    },
    hasError: function hasError() {
      return !!(!this.noParentField && this.field && this.field.error || this.error);
    },
    hasWarning: function hasWarning() {
      return !!(!this.hasError && (!this.noParentField && this.field && this.field.warning || this.warning));
    },
    fakeInputValue: function fakeInputValue() {
      return this.actualValue || this.actualValue === 0 ? this.actualValue : this.placeholder || this.placeholder === 0 ? this.placeholder : '';
    },
    fakeInputClasses: function fakeInputClasses() {
      var hasValue = this.actualValue || this.actualValue === 0;
      return [this.alignClass, {
        invisible: (this.stackLabel || this.floatLabel) && !this.labelIsAbove && !hasValue,
        'q-input-target-placeholder': !hasValue && this.inputPlaceholder
      }];
    }
  },
  methods: {
    clear: function clear(evt) {
      if (!this.editable) {
        return;
      }

      evt && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_0__[/* stopAndPrevent */ "f"])(evt);
      var val = this.computedClearValue;

      if (this.__setModel) {
        this.__setModel(val, true);
      }

      this.$emit('clear', val);
    }
  }
});

/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QToolbarTitle',
  props: {
    shrink: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar-title',
      'class': this.shrink ? 'col-auto' : null
    }, [this.$slots.default, this.$slots.subtitle ? h('div', {
      staticClass: 'q-toolbar-subtitle'
    }, this.$slots.subtitle) : null]);
  }
});

/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "cf12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/directives/touch-pan.js
var touch_pan = __webpack_require__("f62b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/format.js
var format = __webpack_require__("177b");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/mixins/model-toggle.js
var model_toggle = __webpack_require__("fb40");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/scroll.js
var utils_scroll = __webpack_require__("1528");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/prevent-scroll.js



var registered = 0;

function onWheel(e) {
  if (shouldPreventScroll(e)) {
    Object(utils_event["f" /* stopAndPrevent */])(e);
  }
}

function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout-backdrop')) {
    return true;
  }

  var path = Object(utils_event["b" /* getEventPath */])(e),
      shift = e.shiftKey && !e.deltaX,
      scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
      delta = shift || scrollY ? e.deltaY : e.deltaX;

  for (var index = 0; index < path.length; index++) {
    var el = path[index];

    if (Object(utils_scroll["d" /* hasScrollbar */])(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }

  return true;
}

/* harmony default export */ var prevent_scroll = (function (register) {
  registered += register ? 1 : -1;

  if (registered > 1) {
    return;
  }

  var action = register ? 'add' : 'remove';

  if (platform["a" /* default */].is.mobile) {
    document.body.classList[action]('q-body-prevent-scroll');
  } else if (platform["a" /* default */].is.desktop) {
    window["".concat(action, "EventListener")]('wheel', onWheel);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/layout/QLayoutDrawer.js








var duration = 150;
/* harmony default export */ var QLayoutDrawer = __webpack_exports__["a"] = ({
  name: 'QLayoutDrawer',
  inject: {
    layout: {
      default: function _default() {
        console.error('QLayoutDrawer needs to be child of QLayout');
      }
    }
  },
  mixins: [model_toggle["a" /* default */]],
  directives: {
    TouchPan: touch_pan["a" /* default */]
  },
  props: {
    overlay: Boolean,
    side: {
      type: String,
      default: 'left',
      validator: function validator(v) {
        return ['left', 'right'].includes(v);
      }
    },
    width: {
      type: Number,
      default:  true ? 300 : undefined
    },
    mini: Boolean,
    miniWidth: {
      type: Number,
      default: 60
    },
    breakpoint: {
      type: Number,
      default: 992
    },
    behavior: {
      type: String,
      validator: function validator(v) {
        return ['default', 'desktop', 'mobile'].includes(v);
      },
      default: 'default'
    },
    showIfAbove: Boolean,
    contentStyle: Object,
    contentClass: [String, Object, Array],
    noHideOnRouteChange: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean
  },
  data: function data() {
    var largeScreenState = this.showIfAbove || (this.value !== void 0 ? this.value : true),
        showing = this.behavior !== 'mobile' && this.breakpoint < this.layout.width && !this.overlay ? largeScreenState : false;

    if (this.value !== void 0 && this.value !== showing) {
      this.$emit('input', showing);
    }

    return {
      showing: showing,
      belowBreakpoint: this.behavior === 'mobile' || this.behavior !== 'desktop' && this.breakpoint >= this.layout.width,
      largeScreenState: largeScreenState,
      mobileOpened: false
    };
  },
  watch: {
    belowBreakpoint: function belowBreakpoint(val) {
      if (this.mobileOpened) {
        return;
      }

      if (val) {
        if (!this.overlay) {
          this.largeScreenState = this.showing;
        }

        this.hide(false);
      } else if (!this.overlay) {
        this[this.largeScreenState ? 'show' : 'hide'](false);
      }
    },
    side: function side(_, oldSide) {
      this.layout[oldSide].space = false;
      this.layout[oldSide].offset = 0;
    },
    behavior: function behavior(val) {
      this.__updateLocal('belowBreakpoint', val === 'mobile' || val !== 'desktop' && this.breakpoint >= this.layout.width);
    },
    breakpoint: function breakpoint(val) {
      this.__updateLocal('belowBreakpoint', this.behavior === 'mobile' || this.behavior !== 'desktop' && val >= this.layout.width);
    },
    'layout.width': function layoutWidth(val) {
      this.__updateLocal('belowBreakpoint', this.behavior === 'mobile' || this.behavior !== 'desktop' && this.breakpoint >= val);
    },
    'layout.scrollbarWidth': function layoutScrollbarWidth() {
      this.applyPosition(this.showing ? 0 : void 0);
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    onLayout: function onLayout(val) {
      this.$emit('on-layout', val);

      this.__update('space', val);
    },
    $route: function $route() {
      if (this.noHideOnRouteChange) {
        return;
      }

      if (this.mobileOpened || this.onScreenOverlay) {
        this.hide();
      }
    },
    rightSide: function rightSide() {
      this.applyPosition();
    },
    size: function size(val) {
      this.applyPosition();

      this.__update('size', val);
    },
    '$q.i18n.rtl': function $qI18nRtl() {
      this.applyPosition();
    },
    mini: function mini() {
      if (this.value) {
        this.layout.__animate();
      }
    }
  },
  computed: {
    rightSide: function rightSide() {
      return this.side === 'right';
    },
    offset: function offset() {
      return this.showing && !this.mobileOpened && !this.overlay ? this.size : 0;
    },
    size: function size() {
      return this.isMini ? this.miniWidth : this.width;
    },
    fixed: function fixed() {
      return this.overlay || this.layout.view.indexOf(this.rightSide ? 'R' : 'L') > -1;
    },
    onLayout: function onLayout() {
      return this.showing && !this.mobileView && !this.overlay;
    },
    onScreenOverlay: function onScreenOverlay() {
      return this.showing && !this.mobileView && this.overlay;
    },
    backdropClass: function backdropClass() {
      return {
        'no-pointer-events': !this.showing || !this.mobileView
      };
    },
    mobileView: function mobileView() {
      return this.belowBreakpoint || this.mobileOpened;
    },
    headerSlot: function headerSlot() {
      return this.overlay ? false : this.rightSide ? this.layout.rows.top[2] === 'r' : this.layout.rows.top[0] === 'l';
    },
    footerSlot: function footerSlot() {
      return this.overlay ? false : this.rightSide ? this.layout.rows.bottom[2] === 'r' : this.layout.rows.bottom[0] === 'l';
    },
    belowClass: function belowClass() {
      return {
        'fixed': true,
        'on-top': true,
        'q-layout-drawer-delimiter': this.fixed && this.showing,
        'q-layout-drawer-mobile': true,
        'top-padding': true
      };
    },
    aboveClass: function aboveClass() {
      return {
        'fixed': this.fixed || !this.onLayout,
        'q-layout-drawer-mini': this.isMini,
        'q-layout-drawer-normal': !this.isMini,
        'q-layout-drawer-delimiter': this.fixed && this.showing,
        'top-padding': this.headerSlot
      };
    },
    aboveStyle: function aboveStyle() {
      var css = {};

      if (this.layout.header.space && !this.headerSlot) {
        if (this.fixed) {
          css.top = "".concat(this.layout.header.offset, "px");
        } else if (this.layout.header.space) {
          css.top = "".concat(this.layout.header.size, "px");
        }
      }

      if (this.layout.footer.space && !this.footerSlot) {
        if (this.fixed) {
          css.bottom = "".concat(this.layout.footer.offset, "px");
        } else if (this.layout.footer.space) {
          css.bottom = "".concat(this.layout.footer.size, "px");
        }
      }

      return css;
    },
    computedStyle: function computedStyle() {
      return [this.contentStyle, {
        width: "".concat(this.size, "px")
      }, this.mobileView ? '' : this.aboveStyle];
    },
    computedClass: function computedClass() {
      return ["q-layout-drawer-".concat(this.side), this.layout.container ? 'overflow-auto' : 'scroll', this.contentClass, this.mobileView ? this.belowClass : this.aboveClass];
    },
    stateDirection: function stateDirection() {
      return (this.$q.i18n.rtl ? -1 : 1) * (this.rightSide ? 1 : -1);
    },
    isMini: function isMini() {
      return this.mini && !this.mobileView;
    },
    onNativeEvents: function onNativeEvents() {
      var _this = this;

      if (!this.mobileView) {
        return {
          '!click': function click(e) {
            _this.$emit('click', e);
          },
          mouseover: function mouseover(e) {
            _this.$emit('mouseover', e);
          },
          mouseout: function mouseout(e) {
            _this.$emit('mouseout', e);
          }
        };
      }
    }
  },
  methods: {
    applyPosition: function applyPosition(position) {
      var _this2 = this;

      if (position === void 0) {
        this.$nextTick(function () {
          position = _this2.showing ? 0 : _this2.size;

          _this2.applyPosition(_this2.stateDirection * position);
        });
      } else if (this.$refs.content) {
        if (this.layout.container && this.rightSide && (this.mobileView || Math.abs(position) === this.size)) {
          position += this.stateDirection * this.layout.scrollbarWidth;
        }

        this.$refs.content.style.transform = "translateX(".concat(position, "px)");
      }
    },
    applyBackdrop: function applyBackdrop(x) {
      if (this.$refs.backdrop) {
        this.$refs.backdrop.style.backgroundColor = "rgba(0,0,0,".concat(x * 0.4, ")");
      }
    },
    __setScrollable: function __setScrollable(v) {
      if (!this.layout.container) {
        document.body.classList[v ? 'add' : 'remove']('q-body-drawer-toggle');
      }
    },
    __openByTouch: function __openByTouch(evt) {
      if (!this.belowBreakpoint) {
        return;
      }

      var width = this.size,
          position = Object(format["a" /* between */])(evt.distance.x, 0, width);

      if (evt.isFinal) {
        var el = this.$refs.content,
            opened = position >= Math.min(75, width);
        el.classList.remove('no-transition');

        if (opened) {
          this.show();
        } else {
          this.layout.__animate();

          this.applyBackdrop(0);
          this.applyPosition(this.stateDirection * width);
          el.classList.remove('q-layout-drawer-delimiter');
        }

        return;
      }

      this.applyPosition((this.$q.i18n.rtl ? !this.rightSide : this.rightSide) ? Math.max(width - position, 0) : Math.min(0, position - width));
      this.applyBackdrop(Object(format["a" /* between */])(position / width, 0, 1));

      if (evt.isFirst) {
        var _el = this.$refs.content;

        _el.classList.add('no-transition');

        _el.classList.add('q-layout-drawer-delimiter');
      }
    },
    __closeByTouch: function __closeByTouch(evt) {
      if (!this.mobileOpened) {
        return;
      }

      var width = this.size,
          dir = evt.direction === this.side,
          position = (this.$q.i18n.rtl ? !dir : dir) ? Object(format["a" /* between */])(evt.distance.x, 0, width) : 0;

      if (evt.isFinal) {
        var opened = Math.abs(position) < Math.min(75, width);
        this.$refs.content.classList.remove('no-transition');

        if (opened) {
          this.layout.__animate();

          this.applyBackdrop(1);
          this.applyPosition(0);
        } else {
          this.hide();
        }

        return;
      }

      this.applyPosition(this.stateDirection * position);
      this.applyBackdrop(Object(format["a" /* between */])(1 - position / width, 0, 1));

      if (evt.isFirst) {
        this.$refs.content.classList.add('no-transition');
      }
    },
    __show: function __show() {
      var _this3 = this;

      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      animate && this.layout.__animate();
      this.applyPosition(0);
      var otherSide = this.layout.instances[this.rightSide ? 'left' : 'right'];

      if (otherSide && otherSide.mobileOpened) {
        otherSide.hide();
      }

      if (this.belowBreakpoint) {
        this.mobileOpened = true;
        this.applyBackdrop(1);

        if (!this.layout.container) {
          this.preventedScroll = true;
          prevent_scroll(true);
        }
      } else {
        this.__setScrollable(true);
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        if (_this3.showPromise) {
          _this3.showPromise.then(function () {
            _this3.__setScrollable(false);
          });

          _this3.showPromiseResolve();
        }
      }, duration);
    },
    __hide: function __hide() {
      var _this4 = this;

      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      animate && this.layout.__animate();

      if (this.mobileOpened) {
        this.mobileOpened = false;
      }

      this.applyPosition(this.stateDirection * this.size);
      this.applyBackdrop(0);

      this.__cleanup();

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.hidePromise && _this4.hidePromiseResolve();
      }, duration);
    },
    __cleanup: function __cleanup() {
      if (this.preventedScroll) {
        this.preventedScroll = false;
        prevent_scroll(false);
      }

      this.__setScrollable(false);
    },
    __update: function __update(prop, val) {
      if (this.layout[this.side][prop] !== val) {
        this.layout[this.side][prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    }
  },
  created: function created() {
    this.layout.instances[this.side] = this;

    this.__update('size', this.size);

    this.__update('space', this.onLayout);

    this.__update('offset', this.offset);
  },
  mounted: function mounted() {
    this.applyPosition(this.showing ? 0 : void 0);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    this.showing && this.__cleanup();

    if (this.layout.instances[this.side] === this) {
      this.layout.instances[this.side] = null;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  render: function render(h) {
    var child = [this.mobileView && !this.noSwipeOpen ? h('div', {
      staticClass: "q-layout-drawer-opener fixed-".concat(this.side),
      directives: [{
        name: 'touch-pan',
        modifiers: {
          horizontal: true
        },
        value: this.__openByTouch
      }]
    }) : null, h('div', {
      ref: 'backdrop',
      staticClass: 'fullscreen q-layout-backdrop q-layout-transition',
      'class': this.backdropClass,
      on: {
        click: this.hide
      },
      directives: [{
        name: 'touch-pan',
        modifiers: {
          horizontal: true
        },
        value: this.__closeByTouch
      }]
    })];
    return h('div', {
      staticClass: 'q-drawer-container'
    }, child.concat([h('aside', {
      ref: 'content',
      staticClass: "q-layout-drawer q-layout-transition",
      'class': this.computedClass,
      style: this.computedStyle,
      attrs: this.$attrs,
      on: this.onNativeEvents,
      directives: this.mobileView && !this.noSwipeClose ? [{
        name: 'touch-pan',
        modifiers: {
          horizontal: true
        },
        value: this.__closeByTouch
      }] : null
    }, this.isMini && this.$slots.mini ? [this.$slots.mini] : this.$slots.default)]));
  }
});

/***/ }),

/***/ "d14b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4679");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0c2692e9", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "d263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("386b")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d7db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7cdf");
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    autofocus: [Boolean, String],
    maxHeight: Number,
    loading: Boolean
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      isNumberError: false,
      isNegZero: false
    };
  },
  methods: {
    focus: function focus() {
      if (!this.disable) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    select: function select() {
      this.$refs.input.select();
    },
    __onFocus: function __onFocus(e) {
      clearTimeout(this.timer);

      if (this.focused) {
        return;
      }

      this.focused = true;
      this.$refs.input && this.$refs.input.focus();
      this.$emit('focus', e);
    },
    __onInputBlur: function __onInputBlur(e) {
      var _this = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.__onBlur(e);
      }, 200);
    },
    __onBlur: function __onBlur(e, destroy) {
      if (this.focused) {
        this.focused = false;
        this.$emit('blur', e);
      }

      this.__emit(destroy);
    },
    __emit: function __emit(destroy) {
      var _this2 = this;

      var isNumberError = this.isNumber && this.isNumberError;
      var value = isNumberError ? this.isNegZero ? -0 : null : this.model;

      if (this.isNumber) {
        this.model = this.value;
      }

      if (isNumberError) {
        this.$emit('input', value);
      }

      var emit = function emit() {
        if (_this2.isNumber) {
          value = parseFloat(value);

          if (Number.isInteger(_this2.decimals)) {
            value = parseFloat(value.toFixed(_this2.decimals));
          }

          if (String(1 / value) !== String(1 / _this2.value)) {
            _this2.$emit('change', value);
          }
        } else if (JSON.stringify(value) !== JSON.stringify(_this2.value)) {
          _this2.$emit('change', value);
        }
      };

      destroy ? emit() : this.$nextTick(emit);
    },
    __onKeydown: function __onKeydown(e) {
      if (e.keyCode === 13) {
        if (this.type === 'textarea') {
          e.stopPropagation();
        } else {
          this.__emit();
        }
      }

      this.$emit('keydown', e);
    },
    __onKeyup: function __onKeyup(e) {
      this.$emit('keyup', e);
    },
    __onClick: function __onClick(e) {
      this.focus();
      this.$emit('click', e);
    },
    __onPaste: function __onPaste(e) {
      this.$emit('paste', e);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      var input = _this3.$refs.input;

      if (_this3.autofocus && input) {
        input.focus();

        if (_this3.autofocus === 'select') {
          input.select();
        }
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    this.focused && this.__onBlur(void 0, true);
  }
});

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "db7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tab_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c6da");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QTab',
  mixins: [_tab_mixin_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]],
  props: {
    default: Boolean
  },
  methods: {
    select: function select() {
      this.$emit('click', this.name);

      if (!this.disable) {
        this.selectTab(this.name);
      }
    }
  },
  mounted: function mounted() {
    if (this.default && !this.disable) {
      this.select();
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'q-tab column flex-center relative-position',
      'class': this.classes,
      attrs: {
        'data-tab-name': this.name
      },
      on: {
        click: this.select,
        keyup: function keyup(e) {
          return e.keyCode === 13 && _this.select(e);
        }
      },
      directives:  true ? [{
        name: 'ripple'
      }] : undefined
    }, this.__getTabContent(h));
  }
});

/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b105");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5561859e", content, false, {"sourceMap":true});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e84f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("aef6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-integer.js
var es6_number_is_integer = __webpack_require__("7cdf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/plugins/platform.js
var platform = __webpack_require__("a60d");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/polyfills.js














function polyfills_assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];

    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));

    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }

  return to;
}

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: polyfills_assign
  });
}

if (!Number.isInteger) {
  Number.isInteger = function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchEl, startFrom) {
    'use strict';

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;

    if (len === 0) {
      return false;
    }

    var n = parseInt(startFrom, 10) || 0;
    var k;

    if (n >= 0) {
      k = n;
    } else {
      k = len + n;

      if (k < 0) {
        k = 0;
      }
    }

    var curEl;

    while (k < len) {
      curEl = O[k];

      if (searchEl === curEl || searchEl !== searchEl && curEl !== curEl) {
        return true;
      }

      k++;
    }

    return false;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (str, position) {
    position = position || 0;
    return this.substr(position, str.length) === str;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (str, position) {
    var subjectString = this.toString();

    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }

    position -= str.length;
    var lastIndex = subjectString.indexOf(str, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!platform["c" /* isSSR */]) {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this,
          elements = (element.document || element.ownerDocument).querySelectorAll(selector),
          index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var el = this;

      while (el && el.nodeType === 1) {
        if (el.matches(selector)) {
          return el;
        }

        el = el.parentNode;
      }

      return null;
    };
  }

  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('remove')) {
        return;
      }

      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var value;
      var list = Object(this),
          length = list.length >>> 0,
          thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        value = list[i];

        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }

      return undefined;
    }
  });
}
// EXTERNAL MODULE: ./node_modules/quasar-framework/package.json
var quasar_framework_package = __webpack_require__("19aa");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/history.js
var src_history = __webpack_require__("be90");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/quasar-framework/i18n/en-us.js

/* harmony default export */ var en_us = ({
  lang: 'en-us',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh'
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0,
    format24h: false
  },
  pullToRefresh: {
    pull: 'Pull down to refresh',
    release: 'Release to refresh',
    refresh: 'Refreshing...'
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: function selectedRecords(rows) {
      return rows === 1 ? '1 record selected.' : (rows === 0 ? 'No' : rows) + ' records selected.';
    },
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: function pagination(start, end, total) {
      return start + '-' + end + ' of ' + total;
    },
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    header1: 'Header 1',
    header2: 'Header 2',
    header3: 'Header 3',
    header4: 'Header 4',
    header5: 'Header 5',
    header6: 'Header 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/i18n.js





/* harmony default export */ var i18n = ({
  install: function install($q, queues, Vue, lang) {
    var _this = this;

    if (platform["c" /* isSSR */]) {
      queues.server.push(function (q, ctx) {
        var opt = {
          lang: q.i18n.lang,
          dir: q.i18n.rtl ? 'rtl' : 'ltr'
        },
            fn = ctx.ssr.setHtmlAttrs;

        if (typeof fn === 'function') {
          fn(opt);
        } else {
          ctx.ssr.Q_HTML_ATTRS = Object.keys(opt).map(function (key) {
            return "".concat(key, "=").concat(opt[key]);
          }).join(' ');
        }
      });
    }

    this.set = function () {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : en_us;
      lang.set = _this.set;
      lang.getLocale = _this.getLocale;
      lang.rtl = lang.rtl || false;

      if (!platform["c" /* isSSR */]) {
        var el = document.documentElement;
        el.setAttribute('dir', lang.rtl ? 'rtl' : 'ltr');
        el.setAttribute('lang', lang.lang);
      }

      if (platform["c" /* isSSR */] || $q.i18n) {
        $q.i18n = lang;
      } else {
        Vue.util.defineReactive($q, 'i18n', lang);
      }

      _this.name = lang.lang;
      _this.lang = lang;
    };

    this.set(lang);
  },
  getLocale: function getLocale() {
    if (platform["c" /* isSSR */]) {
      return;
    }

    var val = navigator.language || navigator.languages[0] || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;

    if (val) {
      return val.toLowerCase();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/utils/colors.js


function rgbToHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
  var alpha = a !== void 0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  if (r > 255 || g > 255 || b > 255 || alpha && a > 100) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)');
  }

  a = alpha ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1) : '';
  return '#' + (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + a;
}
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  var num = parseInt(hex, 16);
  return hex.length > 6 ? {
    r: num >> 24 & 255,
    g: num >> 16 & 255,
    b: num >> 8 & 255,
    a: Math.round((num & 255) / 2.55)
  } : {
    r: num >> 16,
    g: num >> 8 & 255,
    b: num & 255
  };
}
function hsvToRgb(_ref2) {
  var h = _ref2.h,
      s = _ref2.s,
      v = _ref2.v,
      a = _ref2.a;
  var r, g, b, i, f, p, q, t;
  s = s / 100;
  v = v / 100;
  h = h / 360;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;

    case 1:
      r = q;
      g = v;
      b = p;
      break;

    case 2:
      r = p;
      g = v;
      b = t;
      break;

    case 3:
      r = p;
      g = q;
      b = v;
      break;

    case 4:
      r = t;
      g = p;
      b = v;
      break;

    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a: a
  };
}
function rgbToHsv(_ref3) {
  var r = _ref3.r,
      g = _ref3.g,
      b = _ref3.b,
      a = _ref3.a;
  var max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min,
      h,
      s = max === 0 ? 0 : d / max,
      v = max / 255;

  switch (max) {
    case min:
      h = 0;
      break;

    case r:
      h = g - b + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;

    case g:
      h = b - r + d * 2;
      h /= 6 * d;
      break;

    case b:
      h = r - g + d * 4;
      h /= 6 * d;
      break;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a: a
  };
}
var reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;
function textToRgb(color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string');
  }

  var m = reRGBA.exec(color);

  if (m) {
    var rgb = {
      r: Math.max(255, parseInt(m[2], 10)),
      g: Math.max(255, parseInt(m[3], 10)),
      b: Math.max(255, parseInt(m[4], 10))
    };

    if (m[1]) {
      rgb.a = Math.max(1, parseFloat(m[5]));
    }

    return rgb;
  }

  return hexToRgb(color);
}
function lighten(color, percent) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (typeof percent !== 'number') {
    throw new TypeError('Expected a numeric percent');
  }

  var rgb = textToRgb(color),
      t = percent < 0 ? 0 : 255,
      p = Math.abs(percent) / 100,
      R = rgb.r,
      G = rgb.g,
      B = rgb.b;
  return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}
function luminosity(color) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color');
  }

  var rgb = typeof color === 'string' ? textToRgb(color) : color,
      r = rgb.r / 255,
      g = rgb.g / 255,
      b = rgb.b / 255,
      R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
      G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
      B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function setBrand(color, value) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as value');
  }

  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element');
  }

  element.style.setProperty("--q-color-".concat(color), value);

  switch (color) {
    case 'negative':
    case 'warning':
      element.style.setProperty("--q-color-".concat(color, "-l"), lighten(value, 46));
      break;

    case 'light':
      element.style.setProperty("--q-color-".concat(color, "-d"), lighten(value, -10));
  }
}
function getBrand(color) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color');
  }

  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element');
  }

  return getComputedStyle(element).getPropertyValue("--q-color-".concat(color)).trim() || null;
}
/* harmony default export */ var colors = ({
  rgbToHex: rgbToHex,
  hexToRgb: hexToRgb,
  hsvToRgb: hsvToRgb,
  rgbToHsv: rgbToHsv,
  textToRgb: textToRgb,
  lighten: lighten,
  luminosity: luminosity,
  setBrand: setBrand,
  getBrand: getBrand
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/body.js




function getBodyClasses(_ref, cfg) {
  var is = _ref.is,
      has = _ref.has,
      within = _ref.within;
  var cls = ["mat", is.desktop ? 'desktop' : 'mobile', has.touch ? 'touch' : 'no-touch', "platform-".concat(is.ios ? 'ios' : 'mat')];

  if (is.cordova) {
    cls.push('cordova');

    if (is.ios && (cfg.cordova === void 0 || cfg.cordova.iosStatusBarPadding !== false)) {
      var ratio = window.devicePixelRatio || 1,
          width = window.screen.width * ratio,
          height = window.screen.height * ratio;

      if (width === 1125 && height === 2436) {
        cls.push('q-ios-statusbar-x');
      }

      if (width !== 1125 || height !== 2001) {
        cls.push('q-ios-statusbar-padding');
      }
    }
  }

  within.iframe && cls.push('within-iframe');
  is.electron && cls.push('electron');
  return cls;
}

function bodyInit(Platform, cfg) {
  var cls = getBodyClasses(Platform, cfg);

  if (Platform.is.ie && Platform.is.versionNumber === 11) {
    cls.forEach(function (c) {
      return document.body.classList.add(c);
    });
  } else {
    document.body.classList.add.apply(document.body.classList, cls);
  }

  if (Platform.is.ios) {
    document.body.addEventListener('touchstart', function () {});
  }
}

function setColors(brand) {
  for (var color in brand) {
    setBrand(color, brand[color]);
  }
}

/* harmony default export */ var body = ({
  install: function install($q, queues, cfg) {
    if (platform["c" /* isSSR */]) {
      queues.server.push(function (q, ctx) {
        var cls = getBodyClasses(q.platform, cfg),
            fn = ctx.ssr.setBodyClasses;

        if (typeof fn === 'function') {
          fn(cls);
        } else {
          ctx.ssr.Q_BODY_CLASSES = cls.join(' ');
        }
      });
      return;
    }

    cfg.brand && setColors(cfg.brand);
    bodyInit($q.platform, cfg);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/icons/material-icons.js
/* harmony default export */ var material_icons = ({
  name: 'material-icons',
  type: {
    positive: 'check_circle',
    negative: 'warning',
    info: 'info',
    warning: 'priority_high'
  },
  arrow: {
    up: 'arrow_upward',
    right: 'arrow_forward',
    down: 'arrow_downward',
    left: 'arrow_back'
  },
  chevron: {
    left: 'chevron_left',
    right: 'chevron_right'
  },
  pullToRefresh: {
    arrow: 'arrow_downward',
    refresh: 'refresh'
  },
  search: {
    icon: 'search',
    clear: 'cancel',
    clearInverted: 'clear'
  },
  carousel: {
    left: 'chevron_left',
    right: 'chevron_right',
    quickNav: 'lens',
    thumbnails: 'view_carousel'
  },
  checkbox: {
    checked: {
      ios: 'check_circle',
      mat: 'check_box'
    },
    unchecked: {
      ios: 'radio_button_unchecked',
      mat: 'check_box_outline_blank'
    },
    indeterminate: {
      ios: 'remove_circle_outline',
      mat: 'indeterminate_check_box'
    }
  },
  chip: {
    close: 'cancel'
  },
  chipsInput: {
    add: 'send'
  },
  collapsible: {
    icon: 'arrow_drop_down'
  },
  datetime: {
    arrowLeft: 'chevron_left',
    arrowRight: 'chevron_right'
  },
  editor: {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    underline: 'format_underlined',
    unorderedList: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    subscript: 'vertical_align_bottom',
    superscript: 'vertical_align_top',
    hyperlink: 'link',
    toggleFullscreen: 'fullscreen',
    quote: 'format_quote',
    left: 'format_align_left',
    center: 'format_align_center',
    right: 'format_align_right',
    justify: 'format_align_justify',
    print: 'print',
    outdent: 'format_indent_decrease',
    indent: 'format_indent_increase',
    removeFormat: 'format_clear',
    formatting: 'text_format',
    fontSize: 'format_size',
    align: 'format_align_left',
    hr: 'remove',
    undo: 'undo',
    redo: 'redo',
    header: 'format_size',
    code: 'code',
    size: 'format_size',
    font: 'font_download'
  },
  fab: {
    icon: 'add',
    activeIcon: 'close'
  },
  input: {
    showPass: 'visibility',
    hidePass: 'visibility_off',
    showNumber: 'keyboard',
    hideNumber: 'keyboard_hide',
    clear: 'cancel',
    clearInverted: 'clear',
    dropdown: 'arrow_drop_down'
  },
  pagination: {
    first: 'first_page',
    prev: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
    last: 'last_page'
  },
  radio: {
    checked: {
      ios: 'check',
      mat: 'radio_button_checked'
    },
    unchecked: {
      ios: '',
      mat: 'radio_button_unchecked'
    }
  },
  rating: {
    icon: 'grade'
  },
  stepper: {
    done: 'check',
    active: 'edit',
    error: 'warning'
  },
  tabs: {
    left: 'chevron_left',
    right: 'chevron_right'
  },
  table: {
    arrowUp: 'arrow_upward',
    warning: 'warning',
    prevPage: 'chevron_left',
    nextPage: 'chevron_right'
  },
  tree: {
    icon: 'play_arrow'
  },
  uploader: {
    done: 'done',
    clear: 'cancel',
    clearInverted: 'clear',
    add: 'add',
    upload: 'cloud_upload',
    expand: 'keyboard_arrow_down',
    file: 'insert_drive_file'
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/icons.js



/* harmony default export */ var icons = ({
  __installed: false,
  install: function install($q, Vue, iconSet) {
    var _this = this;

    this.set = function () {
      var iconDef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : material_icons;
      iconDef.set = _this.set;

      if (platform["c" /* isSSR */] || $q.icon) {
        $q.icon = iconDef;
      } else {
        Vue.util.defineReactive($q, 'icon', iconDef);
      }

      _this.name = iconDef.name;
      _this.def = iconDef;
    };

    this.set(iconSet);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/install.js











var install_queues = {
  server: [],
  takeover: []
};
var install_$q = {
  version: quasar_framework_package["a" /* version */],
  theme: "mat"
};
/* harmony default export */ var src_install = (function (Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (this.__installed) {
    return;
  }

  this.__installed = true;
  var cfg = opts.config || {};
  platform["a" /* default */].install(install_$q, install_queues, Vue);
  body.install(install_$q, install_queues, cfg);
  src_history["a" /* default */].install(install_$q, cfg);
  i18n.install(install_$q, install_queues, Vue, opts.i18n);
  icons.install(install_$q, Vue, opts.iconSet);

  if (platform["c" /* isSSR */]) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        this.$q = this.$root.$options.$q;
      }
    });
  } else {
    Vue.prototype.$q = install_$q;
  }

  opts.components && Object.keys(opts.components).forEach(function (key) {
    var c = opts.components[key];

    if (c.name !== undefined && (c.render !== void 0 || c.mixins !== void 0)) {
      Vue.component(c.name, c);
    }
  });
  opts.directives && Object.keys(opts.directives).forEach(function (key) {
    var d = opts.directives[key];

    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d);
    }
  });

  if (opts.plugins) {
    var param = {
      $q: install_$q,
      queues: install_queues,
      Vue: Vue,
      cfg: cfg
    };
    Object.keys(opts.plugins).forEach(function (key) {
      var p = opts.plugins[key];

      if (typeof p.install === 'function' && p !== platform["a" /* default */]) {
        p.install(param);
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/ssr-update.js





var mixin = {
  mounted: function mounted() {
    var _this = this;

    install_queues.takeover.forEach(function (run) {
      run(_this.$q);
    });
  }
};
/* harmony default export */ var ssr_update = (function (ctx) {
  if (ctx.ssr) {
    var q = Object.assign({}, install_$q);
    Object.assign(ctx.ssr, {
      Q_HEAD_TAGS: '',
      Q_BODY_ATTRS: '',
      Q_BODY_TAGS: ''
    });
    install_queues.server.forEach(function (run) {
      run(q, ctx);
    });
    ctx.app.$q = q;
  } else {
    var mixins = ctx.app.mixins || [];

    if (!mixins.includes(mixin)) {
      ctx.app.mixins = mixins.concat(mixin);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar-framework/src/vue-plugin.js





var theme = "mat";
/* harmony default export */ var vue_plugin = __webpack_exports__["a"] = ({
  version: quasar_framework_package["a" /* version */],
  install: src_install,
  i18n: i18n,
  icons: icons,
  theme: theme,
  ssrUpdate: ssr_update
});

/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ecdd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b18c");
/* harmony import */ var _directives_touch_swipe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("28c4");


/* harmony default export */ __webpack_exports__["a"] = ({
  directives: {
    TouchSwipe: _directives_touch_swipe_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  props: {
    val: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    isTrue: function isTrue() {
      return this.modelIsArray ? this.index > -1 : this.value === this.trueValue;
    },
    isFalse: function isFalse() {
      return this.modelIsArray ? this.index === -1 : this.value === this.falseValue;
    },
    index: function index() {
      if (this.modelIsArray) {
        return this.value.indexOf(this.val);
      }
    },
    modelIsArray: function modelIsArray() {
      return Array.isArray(this.value);
    }
  },
  methods: {
    toggle: function toggle(evt) {
      var blur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.disable || this.readonly) {
        return;
      }

      evt && Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_0__[/* stopAndPrevent */ "f"])(evt);
      blur && this.$el.blur();
      var val;

      if (this.modelIsArray) {
        if (this.isTrue) {
          val = this.value.slice();
          val.splice(this.index, 1);
        } else {
          val = this.value.concat(this.val);
        }
      } else if (this.isTrue) {
        val = this.toggleIndeterminate ? this.indeterminateValue : this.falseValue;
      } else if (this.isFalse) {
        val = this.trueValue;
      } else {
        val = this.falseValue;
      }

      this.__update(val);
    }
  }
});

/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "f30c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'QToolbar',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    textColor: String,
    inverted: Boolean,
    glossy: Boolean
  },
  computed: {
    classes: function classes() {
      var cls = ["q-toolbar-".concat(this.inverted ? 'inverted' : 'normal')];
      this.glossy && cls.push('glossy');

      if (this.inverted) {
        cls.push("text-".concat(this.textColor || this.color));
      } else {
        cls.push("bg-".concat(this.color));
        cls.push("text-".concat(this.textColor || 'white'));
      }

      return cls;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar row no-wrap items-center relative-position',
      'class': this.classes
    }, this.$slots.default);
  }
});

/***/ }),

/***/ "f4aa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f62b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b18c");



function getDirection(mod) {
  if (!mod.horizontal && !mod.vertical) {
    return {
      horizontal: true,
      vertical: true
    };
  }

  var dir = {};
  ['horizontal', 'vertical'].forEach(function (direction) {
    if (mod[direction]) {
      dir[direction] = true;
    }
  });
  return dir;
}

function processChanges(evt, ctx, isFinal) {
  var direction,
      pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* position */ "e"])(evt),
      distX = pos.left - ctx.event.x,
      distY = pos.top - ctx.event.y,
      absDistX = Math.abs(distX),
      absDistY = Math.abs(distY);

  if (ctx.direction.horizontal && !ctx.direction.vertical) {
    direction = distX < 0 ? 'left' : 'right';
  } else if (!ctx.direction.horizontal && ctx.direction.vertical) {
    direction = distY < 0 ? 'up' : 'down';
  } else if (absDistX >= absDistY) {
    direction = distX < 0 ? 'left' : 'right';
  } else {
    direction = distY < 0 ? 'up' : 'down';
  }

  return {
    evt: evt,
    position: pos,
    direction: direction,
    isFirst: ctx.event.isFirst,
    isFinal: Boolean(isFinal),
    duration: new Date().getTime() - ctx.event.time,
    distance: {
      x: absDistX,
      y: absDistY
    },
    delta: {
      x: pos.left - ctx.event.lastX,
      y: pos.top - ctx.event.lastY
    }
  };
}

function shouldTrigger(ctx, changes) {
  if (ctx.direction.horizontal && ctx.direction.vertical) {
    return true;
  }

  if (ctx.direction.horizontal && !ctx.direction.vertical) {
    return Math.abs(changes.delta.x) > 0;
  }

  if (!ctx.direction.horizontal && ctx.direction.vertical) {
    return Math.abs(changes.delta.y) > 0;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'touch-pan',
  bind: function bind(el, binding) {
    var mouse = !binding.modifiers.noMouse,
        stopPropagation = binding.modifiers.stop,
        preventDefault = binding.modifiers.prevent,
        evtOpts = preventDefault || binding.modifiers.mightPrevent ? null : _utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* listenOpts */ "d"].passive;
    var ctx = {
      handler: binding.value,
      direction: getDirection(binding.modifiers),
      mouseStart: function mouseStart(evt) {
        if (Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* leftClick */ "c"])(evt)) {
          document.addEventListener('mousemove', ctx.move, evtOpts);
          document.addEventListener('mouseup', ctx.mouseEnd, evtOpts);
          ctx.start(evt);
        }
      },
      mouseEnd: function mouseEnd(evt) {
        document.removeEventListener('mousemove', ctx.move, evtOpts);
        document.removeEventListener('mouseup', ctx.mouseEnd, evtOpts);
        ctx.end(evt);
      },
      start: function start(evt) {
        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* position */ "e"])(evt);
        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          detected: ctx.direction.horizontal && ctx.direction.vertical,
          abort: false,
          isFirst: true,
          lastX: pos.left,
          lastY: pos.top
        };

        if (ctx.event.detected) {
          el.classList.add('q-touch');
          stopPropagation && evt.stopPropagation();
          preventDefault && evt.preventDefault();
        }
      },
      move: function move(evt) {
        if (ctx.event.abort) {
          return;
        }

        if (ctx.event.detected) {
          stopPropagation && evt.stopPropagation();
          preventDefault && evt.preventDefault();
          var changes = processChanges(evt, ctx, false);

          if (shouldTrigger(ctx, changes)) {
            ctx.handler(changes);
            ctx.event.lastX = changes.position.left;
            ctx.event.lastY = changes.position.top;
            ctx.event.isFirst = false;
          }

          return;
        }

        var pos = Object(_utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* position */ "e"])(evt),
            distX = Math.abs(pos.left - ctx.event.x),
            distY = Math.abs(pos.top - ctx.event.y);

        if (distX === distY) {
          return;
        }

        ctx.event.detected = true;
        ctx.event.abort = ctx.direction.vertical ? distX > distY : distX < distY;
        ctx.move(evt);
      },
      end: function end(evt) {
        el.classList.remove('q-touch');

        if (ctx.event.abort || !ctx.event.detected || ctx.event.isFirst) {
          return;
        }

        stopPropagation && evt.stopPropagation();
        preventDefault && evt.preventDefault();
        ctx.handler(processChanges(evt, ctx, true));
      }
    };
    el.__qtouchpan = ctx;

    if (mouse) {
      el.addEventListener('mousedown', ctx.mouseStart, evtOpts);
    }

    el.addEventListener('touchstart', ctx.start, evtOpts);
    el.addEventListener('touchmove', ctx.move, evtOpts);
    el.addEventListener('touchend', ctx.end, evtOpts);
  },
  update: function update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.__qtouchpan.handler = binding.value;
    }
  },
  unbind: function unbind(el, binding) {
    var ctx = el.__qtouchpan;

    if (!ctx) {
      return;
    }

    var evtOpts = binding.modifiers.prevent ? null : _utils_event_js__WEBPACK_IMPORTED_MODULE_1__[/* listenOpts */ "d"].passive;
    el.removeEventListener('mousedown', ctx.mouseStart, evtOpts);
    el.removeEventListener('touchstart', ctx.start, evtOpts);
    el.removeEventListener('touchmove', ctx.move, evtOpts);
    el.removeEventListener('touchend', ctx.end, evtOpts);
    delete el.__qtouchpan;
  }
});

/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("551c");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("be90");


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: Boolean
  },
  data: function data() {
    return {
      showing: false
    };
  },
  watch: {
    value: function value(val) {
      var _this = this;

      if (this.disable && val) {
        this.$emit('input', false);
        return;
      }

      this.$nextTick(function () {
        if (_this.value !== _this.showing) {
          _this[val ? 'show' : 'hide']();
        }
      });
    }
  },
  methods: {
    toggle: function toggle(evt) {
      return this[this.showing ? 'hide' : 'show'](evt);
    },
    show: function show(evt) {
      var _this2 = this;

      if (this.disable || this.showing) {
        return this.showPromise || Promise.resolve(evt);
      }

      this.hidePromise && this.hidePromiseReject();
      this.showing = true;

      if (this.value === false) {
        this.$emit('input', true);
      }

      if (this.$options.modelToggle === void 0 || this.$options.modelToggle.history) {
        this.__historyEntry = {
          handler: this.hide
        };
        _history_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].add(this.__historyEntry);
      }

      if (!this.__show) {
        this.$emit('show', evt);
        return Promise.resolve(evt);
      }

      this.showPromise = new Promise(function (resolve, reject) {
        _this2.showPromiseResolve = function () {
          _this2.showPromise = null;

          _this2.$emit('show', evt);

          resolve(evt);
        };

        _this2.showPromiseReject = function () {
          _this2.showPromise.catch(function () {});

          _this2.showPromise = null;
          reject(null);
        };
      });

      this.__show(evt);

      return this.showPromise || Promise.resolve(evt);
    },
    hide: function hide(evt) {
      var _this3 = this;

      if (this.disable || !this.showing) {
        return this.hidePromise || Promise.resolve(evt);
      }

      this.showPromise && this.showPromiseReject();
      this.showing = false;

      if (this.value === true) {
        this.$emit('input', false);
      }

      this.__removeHistory();

      if (!this.__hide) {
        this.$emit('hide', evt);
        return Promise.resolve();
      }

      this.hidePromise = new Promise(function (resolve, reject) {
        _this3.hidePromiseResolve = function () {
          _this3.hidePromise = null;

          _this3.$emit('hide', evt);

          resolve();
        };

        _this3.hidePromiseReject = function () {
          _this3.hidePromise.catch(function () {});

          _this3.hidePromise = null;
          reject(null);
        };
      });

      this.__hide(evt);

      return this.hidePromise || Promise.resolve(evt);
    },
    __removeHistory: function __removeHistory() {
      if (this.__historyEntry) {
        _history_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].remove(this.__historyEntry);
        this.__historyEntry = null;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.showing) {
      this.showPromise && this.showPromiseReject();
      this.hidePromise && this.hidePromiseReject();

      this.__removeHistory();
    }
  }
});

/***/ }),

/***/ "fcf3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/KFOlCnqEu92Fr1MmEU9fBBc-.de8b7431.woff";

/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bf90");
var $Object = __webpack_require__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fe4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/event.js
var utils_event = __webpack_require__("b18c");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/utils/format.js
var format = __webpack_require__("177b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar-framework/src/directives/touch-pan.js
var touch_pan = __webpack_require__("f62b");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/slider/slider-utils.js





function getPercentage(event, dragging, rtl) {
  var val = Object(format["a" /* between */])((Object(utils_event["e" /* position */])(event).left - dragging.left) / dragging.width, 0, 1);
  return rtl ? 1.0 - val : val;
}
function notDivides(res, decimals) {
  var number = decimals ? parseFloat(res.toFixed(decimals)) : res;
  return number !== parseInt(number, 10);
}
function getModel(percentage, min, max, step, decimals) {
  var model = min + percentage * (max - min),
      modulo = (model - min) % step;
  model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;

  if (decimals) {
    model = parseFloat(model.toFixed(decimals));
  }

  return Object(format["a" /* between */])(model, min, max);
}
var SliderMixin = {
  directives: {
    TouchPan: touch_pan["a" /* default */]
  },
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    },
    decimals: Number,
    snap: Boolean,
    markers: Boolean,
    label: Boolean,
    labelAlways: Boolean,
    square: Boolean,
    color: String,
    fillHandleAlways: Boolean,
    error: Boolean,
    warning: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  computed: {
    editable: function editable() {
      return !this.disable && !this.readonly;
    },
    classes: function classes() {
      var cls = {
        disabled: this.disable,
        readonly: this.readonly,
        'label-always': this.labelAlways,
        'has-error': this.error,
        'has-warning': this.warning
      };

      if (!this.error && !this.warning && this.color) {
        cls["text-".concat(this.color)] = true;
      }

      return cls;
    },
    markersLen: function markersLen() {
      return (this.max - this.min) / this.step + 1;
    },
    labelColor: function labelColor() {
      return this.error ? 'negative' : this.warning ? 'warning' : this.color || 'primary';
    },
    computedDecimals: function computedDecimals() {
      return this.decimals !== void 0 ? this.decimals || 0 : (String(this.step).trim('0').split('.')[1] || '').length;
    },
    computedStep: function computedStep() {
      return this.decimals !== void 0 ? 1 / Math.pow(10, this.decimals || 0) : this.step;
    }
  },
  methods: {
    __pan: function __pan(event) {
      var _this = this;

      if (event.isFinal) {
        if (this.dragging) {
          this.dragTimer = setTimeout(function () {
            _this.dragging = false;
          }, 100);

          this.__end(event.evt);

          this.__update(true);
        }
      } else if (event.isFirst) {
        clearTimeout(this.dragTimer);
        this.dragging = this.__getDragging(event.evt);
      } else if (this.dragging) {
        this.__move(event.evt);

        this.__update();
      }
    },
    __update: function __update(change) {
      var _this2 = this;

      if (JSON.stringify(this.model) === JSON.stringify(this.value)) {
        return;
      }

      this.$emit('input', this.model);

      if (change) {
        this.$nextTick(function () {
          if (JSON.stringify(_this2.model) !== JSON.stringify(_this2.value)) {
            _this2.$emit('change', _this2.model);
          }
        });
      }
    },
    __click: function __click(event) {
      if (!this.dragging) {
        var dragging = this.__getDragging(event);

        if (dragging) {
          this.__end(event, dragging);

          this.__update(true);
        }
      }
    },
    __getMarkers: function __getMarkers(h) {
      if (!this.markers) {
        return;
      }

      var markers = [];

      for (var i = 0; i < this.markersLen; i++) {
        markers.push(h('div', {
          staticClass: 'q-slider-mark',
          key: "marker".concat(i),
          style: {
            left: "".concat(i * 100 * this.step / (this.max - this.min), "%")
          }
        }));
      }

      return markers;
    }
  },
  created: function created() {
    this.__validateProps();
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-slider non-selectable',
      'class': this.classes,
      on: this.editable ? {
        click: this.__click
      } : null,
      directives: this.editable ? [{
        name: 'touch-pan',
        modifiers: {
          horizontal: true,
          prevent: true,
          stop: true
        },
        value: this.__pan
      }] : null
    }, [h('div', {
      ref: 'handle',
      staticClass: 'q-slider-handle-container'
    }, [h('div', {
      staticClass: 'q-slider-track'
    }), this.__getMarkers(h)].concat(this.__getContent(h)))]);
  }
};
// EXTERNAL MODULE: ./node_modules/quasar-framework/src/components/chip/QChip.js
var QChip = __webpack_require__("4bf4");

// CONCATENATED MODULE: ./node_modules/quasar-framework/src/components/range/QRange.js








var dragType = {
  MIN: 0,
  RANGE: 1,
  MAX: 2
};
/* harmony default export */ var QRange = __webpack_exports__["a"] = ({
  name: 'QRange',
  mixins: [SliderMixin],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          min: 0,
          max: 0
        };
      },
      validator: function validator(value) {
        return value.hasOwnProperty('min') && value.hasOwnProperty('max');
      }
    },
    dragRange: Boolean,
    dragOnlyRange: Boolean,
    leftLabelColor: String,
    leftLabelValue: String,
    rightLabelColor: String,
    rightLabelValue: String
  },
  data: function data() {
    return {
      model: Object.assign({}, this.value),
      dragging: false,
      currentMinPercentage: (this.value.min - this.min) / (this.max - this.min),
      currentMaxPercentage: (this.value.max - this.min) / (this.max - this.min)
    };
  },
  computed: {
    percentageMin: function percentageMin() {
      return this.snap ? (this.model.min - this.min) / (this.max - this.min) : this.currentMinPercentage;
    },
    percentageMax: function percentageMax() {
      return this.snap ? (this.model.max - this.min) / (this.max - this.min) : this.currentMaxPercentage;
    },
    activeTrackWidth: function activeTrackWidth() {
      return 100 * (this.percentageMax - this.percentageMin) + '%';
    },
    leftDisplayValue: function leftDisplayValue() {
      return this.leftLabelValue !== void 0 ? this.leftLabelValue : this.model.min;
    },
    rightDisplayValue: function rightDisplayValue() {
      return this.rightLabelValue !== void 0 ? this.rightLabelValue : this.model.max;
    },
    leftTooltipColor: function leftTooltipColor() {
      return this.leftLabelColor || this.labelColor;
    },
    rightTooltipColor: function rightTooltipColor() {
      return this.rightLabelColor || this.labelColor;
    }
  },
  watch: {
    'value.min': function valueMin(value) {
      this.model.min = value;
    },
    'value.max': function valueMax(value) {
      this.model.max = value;
    },
    'model.min': function modelMin(value) {
      if (this.dragging) {
        return;
      }

      if (value > this.model.max) {
        value = this.model.max;
      }

      this.currentMinPercentage = (value - this.min) / (this.max - this.min);
    },
    'model.max': function modelMax(value) {
      if (this.dragging) {
        return;
      }

      if (value < this.model.min) {
        value = this.model.min;
      }

      this.currentMaxPercentage = (value - this.min) / (this.max - this.min);
    },
    min: function min(value) {
      if (this.model.min < value) {
        this.__update({
          min: value
        });
      }

      if (this.model.max < value) {
        this.__update({
          max: value
        });
      }

      this.$nextTick(this.__validateProps);
    },
    max: function max(value) {
      if (this.model.min > value) {
        this.__update({
          min: value
        });
      }

      if (this.model.max > value) {
        this.__update({
          max: value
        });
      }

      this.$nextTick(this.__validateProps);
    },
    step: function step() {
      this.$nextTick(this.__validateProps);
    }
  },
  methods: {
    __getDragging: function __getDragging(event) {
      var container = this.$refs.handle,
          width = container.offsetWidth,
          sensitivity = (this.dragOnlyRange ? -1 : 1) * this.$refs.handleMin.offsetWidth / (2 * width);
      var dragging = {
        left: container.getBoundingClientRect().left,
        width: width,
        valueMin: this.model.min,
        valueMax: this.model.max,
        percentageMin: this.currentMinPercentage,
        percentageMax: this.currentMaxPercentage
      };
      var percentage = getPercentage(event, dragging, this.$q.i18n.rtl),
          type;

      if (percentage < this.currentMinPercentage + sensitivity) {
        type = dragType.MIN;
      } else if (percentage < this.currentMaxPercentage - sensitivity) {
        if (this.dragRange || this.dragOnlyRange) {
          type = dragType.RANGE;
          Object.assign(dragging, {
            offsetPercentage: percentage,
            offsetModel: getModel(percentage, this.min, this.max, this.step, this.computedDecimals),
            rangeValue: dragging.valueMax - dragging.valueMin,
            rangePercentage: this.currentMaxPercentage - this.currentMinPercentage
          });
        } else {
          type = this.currentMaxPercentage - percentage < percentage - this.currentMinPercentage ? dragType.MAX : dragType.MIN;
        }
      } else {
        type = dragType.MAX;
      }

      if (this.dragOnlyRange && type !== dragType.RANGE) {
        return false;
      }

      dragging.type = type;
      return dragging;
    },
    __move: function __move(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;
      var percentage = getPercentage(event, dragging, this.$q.i18n.rtl),
          model = getModel(percentage, this.min, this.max, this.step, this.computedDecimals),
          pos;

      switch (dragging.type) {
        case dragType.MIN:
          if (percentage <= dragging.percentageMax) {
            pos = {
              minP: percentage,
              maxP: dragging.percentageMax,
              min: model,
              max: dragging.valueMax
            };
          } else {
            pos = {
              minP: dragging.percentageMax,
              maxP: percentage,
              min: dragging.valueMax,
              max: model
            };
          }

          break;

        case dragType.MAX:
          if (percentage >= dragging.percentageMin) {
            pos = {
              minP: dragging.percentageMin,
              maxP: percentage,
              min: dragging.valueMin,
              max: model
            };
          } else {
            pos = {
              minP: percentage,
              maxP: dragging.percentageMin,
              min: model,
              max: dragging.valueMin
            };
          }

          break;

        case dragType.RANGE:
          var percentageDelta = percentage - dragging.offsetPercentage,
              minP = Object(format["a" /* between */])(dragging.percentageMin + percentageDelta, 0, 1 - dragging.rangePercentage),
              modelDelta = model - dragging.offsetModel,
              min = Object(format["a" /* between */])(dragging.valueMin + modelDelta, this.min, this.max - dragging.rangeValue);
          pos = {
            minP: minP,
            maxP: minP + dragging.rangePercentage,
            min: parseFloat(min.toFixed(this.computedDecimals)),
            max: parseFloat((min + dragging.rangeValue).toFixed(this.computedDecimals))
          };
          break;
      }

      this.currentMinPercentage = pos.minP;
      this.currentMaxPercentage = pos.maxP;
      this.model = {
        min: pos.min,
        max: pos.max
      };
    },
    __end: function __end(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;

      this.__move(event, dragging);

      this.currentMinPercentage = (this.model.min - this.min) / (this.max - this.min);
      this.currentMaxPercentage = (this.model.max - this.min) / (this.max - this.min);
    },
    __onKeyDown: function __onKeyDown(ev, type) {
      var keyCode = ev.keyCode;

      if (!this.editable || ![37, 40, 39, 38].includes(keyCode)) {
        return;
      }

      Object(utils_event["f" /* stopAndPrevent */])(ev);
      var decimals = this.computedDecimals,
          step = ev.ctrlKey ? 10 * this.computedStep : this.computedStep,
          offset = [37, 40].includes(keyCode) ? -step : step,
          model = decimals ? parseFloat((this.model[type] + offset).toFixed(decimals)) : this.model[type] + offset;
      this.model[type] = Object(format["a" /* between */])(model, type === 'min' ? this.min : this.model.min, type === 'max' ? this.max : this.model.max);
      this.currentMinPercentage = (this.model.min - this.min) / (this.max - this.min);
      this.currentMaxPercentage = (this.model.max - this.min) / (this.max - this.min);

      this.__update();
    },
    __onKeyUp: function __onKeyUp(ev, type) {
      var keyCode = ev.keyCode;

      if (!this.editable || ![37, 40, 39, 38].includes(keyCode)) {
        return;
      }

      this.__update(true);
    },
    __validateProps: function __validateProps() {
      if (this.min >= this.max) {
        console.error('Range error: min >= max', this.$el, this.min, this.max);
      } else if (notDivides((this.max - this.min) / this.step, this.computedDecimals)) {
        console.error('Range error: step must be a divisor of max - min', this.min, this.max, this.step);
      } else if (notDivides((this.model.min - this.min) / this.step, this.computedDecimals)) {
        console.error('Range error: step must be a divisor of initial value.min - min', this.model.min, this.min, this.step);
      } else if (notDivides((this.model.max - this.min) / this.step, this.computedDecimals)) {
        console.error('Range error: step must be a divisor of initial value.max - min', this.model.max, this.max, this.step);
      }
    },
    __getHandle: function __getHandle(h, lower, upper, edge, percentage, color, label) {
      var _style,
          _this = this;

      return h('div', {
        ref: "handle".concat(upper),
        staticClass: "q-slider-handle q-slider-handle-".concat(lower),
        style: (_style = {}, defineProperty_default()(_style, this.$q.i18n.rtl ? 'right' : 'left', "".concat(percentage * 100, "%")), defineProperty_default()(_style, "borderRadius", this.square ? '0' : '50%'), _style),
        'class': [edge ? 'handle-at-minimum' : null, {
          dragging: this.dragging
        }],
        attrs: {
          tabindex: this.$q.platform.is.desktop ? this.editable ? 0 : -1 : void 0
        },
        on: {
          keydown: function keydown(ev) {
            return _this.__onKeyDown(ev, lower);
          },
          keyup: function keyup(ev) {
            return _this.__onKeyUp(ev, lower);
          }
        }
      }, [this.label || this.labelAlways ? h(QChip["a" /* default */], {
        props: {
          pointing: 'down',
          square: true,
          dense: true,
          color: color
        },
        staticClass: 'q-slider-label no-pointer-events',
        'class': {
          'label-always': this.labelAlways
        }
      }, [label]) : null,  true ? h('div', {
        staticClass: 'q-slider-ring'
      }) : undefined]);
    },
    __getContent: function __getContent(h) {
      var _style2;

      return [h('div', {
        staticClass: 'q-slider-track active-track',
        style: (_style2 = {}, defineProperty_default()(_style2, this.$q.i18n.rtl ? 'right' : 'left', "".concat(this.percentageMin * 100, "%")), defineProperty_default()(_style2, "width", this.activeTrackWidth), _style2),
        'class': {
          dragging: this.dragging,
          'track-draggable': this.dragRange || this.dragOnlyRange
        }
      }), this.__getHandle(h, 'min', 'Min', !this.fillHandleAlways && this.model.min === this.min, this.percentageMin, this.leftTooltipColor, this.leftDisplayValue), this.__getHandle(h, 'max', 'Max', false, this.percentageMax, this.rightTooltipColor, this.rightDisplayValue)];
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=vendor.698e5057.js.map