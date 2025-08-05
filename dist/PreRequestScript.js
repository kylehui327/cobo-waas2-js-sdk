"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var P = Math.pow(2n, 255n) - 19n,
  N = Math.pow(2n, 252n) + 27742317777372353535851937790883648493n,
  Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n,
  CURVE = {
    a: -1n,
    d: 37095705934669439343138083508754565189542113879843219016388785533085940283555n,
    p: P,
    n: N,
    h: 8,
    Gx: Gx,
    Gy: Gy
  },
  err = function err() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    throw new Error(e);
  },
  str = function str(e) {
    return "string" == typeof e;
  },
  isu8 = function isu8(e) {
    return e instanceof Uint8Array || null != e && "object" == _typeof(e) && "Uint8Array" === e.constructor.name;
  },
  au8 = function au8(e, t) {
    return !isu8(e) || "number" == typeof t && t > 0 && e.length !== t ? err("Uint8Array of valid length expected") : e;
  },
  u8n = function u8n(e) {
    return new Uint8Array(e);
  },
  toU8 = function toU8(e, t) {
    return au8(str(e) ? h2b(e) : u8n(au8(e)), t);
  },
  mod = function mod(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : P;
    var n = e % t;
    return n >= 0n ? n : t + n;
  },
  isPoint = function isPoint(e) {
    return e instanceof Point ? e : err("Point expected");
  };
var Point = /*#__PURE__*/function () {
  function Point(e, t, n, o) {
    _classCallCheck(this, Point);
    this.ex = e, this.ey = t, this.ez = n, this.et = o;
  }
  return _createClass(Point, [{
    key: "x",
    get: function get() {
      return this.toAffine().x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.toAffine().y;
    }
  }, {
    key: "equals",
    value: function equals(e) {
      var t = this.ex,
        n = this.ey,
        o = this.ez,
        _isPoint = isPoint(e),
        r = _isPoint.ex,
        s = _isPoint.ey,
        i = _isPoint.ez,
        a = mod(t * i),
        d = mod(r * o),
        c = mod(n * i),
        u = mod(s * o);
      return a === d && c === u;
    }
  }, {
    key: "is0",
    value: function is0() {
      return this.equals(I);
    }
  }, {
    key: "negate",
    value: function negate() {
      return new Point(mod(-this.ex), this.ey, this.ez, mod(-this.et));
    }
  }, {
    key: "double",
    value: function _double() {
      var e = this.ex,
        t = this.ey,
        n = this.ez,
        o = CURVE.a,
        r = mod(e * e),
        s = mod(t * t),
        i = mod(2n * mod(n * n)),
        a = mod(o * r),
        d = e + t,
        c = mod(mod(d * d) - r - s),
        u = a + s,
        h = u - i,
        l = a - s,
        y = mod(c * h),
        m = mod(u * l),
        f = mod(c * l),
        b = mod(h * u);
      return new Point(y, m, b, f);
    }
  }, {
    key: "add",
    value: function add(e) {
      var t = this.ex,
        n = this.ey,
        o = this.ez,
        r = this.et,
        _isPoint2 = isPoint(e),
        s = _isPoint2.ex,
        i = _isPoint2.ey,
        a = _isPoint2.ez,
        d = _isPoint2.et,
        c = CURVE.a,
        u = CURVE.d,
        h = mod(t * s),
        l = mod(n * i),
        y = mod(r * u * d),
        m = mod(o * a),
        f = mod((t + n) * (s + i) - h - l),
        b = mod(m - y),
        p = mod(m + y),
        P = mod(l - c * h),
        x = mod(f * b),
        g = mod(p * P),
        w = mod(f * P),
        _ = mod(b * p);
      return new Point(x, g, _, w);
    }
  }, {
    key: "mul",
    value: function mul(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      if (0n === e) return !0 === t ? err("cannot multiply by 0") : I;
      if ("bigint" == typeof e && 0n < e && e < N || err("invalid scalar, must be < L"), !t && this.is0() || 1n === e) return this;
      if (this.equals(G)) return wNAF(e).p;
      var n = I,
        o = G;
      for (var r = this; e > 0n; r = r["double"](), e >>= 1n) 1n & e ? n = n.add(r) : t && (o = o.add(r));
      return n;
    }
  }, {
    key: "multiply",
    value: function multiply(e) {
      return this.mul(e);
    }
  }, {
    key: "clearCofactor",
    value: function clearCofactor() {
      return this.mul(BigInt(CURVE.h), !1);
    }
  }, {
    key: "isSmallOrder",
    value: function isSmallOrder() {
      return this.clearCofactor().is0();
    }
  }, {
    key: "isTorsionFree",
    value: function isTorsionFree() {
      var e = this.mul(N / 2n, !1)["double"]();
      return e = e.add(this), e.is0();
    }
  }, {
    key: "toAffine",
    value: function toAffine() {
      var e = this.ex,
        t = this.ey,
        n = this.ez;
      if (this.equals(I)) return {
        x: 0n,
        y: 1n
      };
      var o = invert(n);
      return 1n !== mod(n * o) && err("invalid inverse"), {
        x: mod(e * o),
        y: mod(t * o)
      };
    }
  }, {
    key: "toRawBytes",
    value: function toRawBytes() {
      var _this$toAffine = this.toAffine(),
        e = _this$toAffine.x,
        t = _this$toAffine.y,
        n = n2b_32LE(t);
      return n[31] |= 1n & e ? 128 : 0, n;
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return b2h(this.toRawBytes());
    }
  }], [{
    key: "fromAffine",
    value: function fromAffine(e) {
      return new Point(e.x, e.y, 1n, mod(e.x * e.y));
    }
  }, {
    key: "fromHex",
    value: function fromHex(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = CURVE.d,
        o = (e = toU8(e, 32)).slice(),
        r = e[31];
      o[31] = -129 & r;
      var s = b2n_LE(o);
      !t || 0n <= s && s < Math.pow(2n, 256n) || err("bad y coord 1"), t || 0n <= s && s < P || err("bad y coord 2");
      var i = mod(s * s),
        a = mod(i - 1n),
        d = mod(n * i + 1n);
      var _uvRatio = uvRatio(a, d),
        c = _uvRatio.isValid,
        u = _uvRatio.value;
      c || err("bad y coordinate 3");
      var h = 1n === (1n & u),
        l = !!(128 & r);
      return !t && 0n === u && l && err("bad y coord 3"), l !== h && (u = mod(-u)), new Point(u, s, 1n, mod(u * s));
    }
  }]);
}();
Point.BASE = new Point(Gx, Gy, 1n, mod(Gx * Gy)), Point.ZERO = new Point(0n, 1n, 1n, 0n);
var G = Point.BASE,
  I = Point.ZERO,
  padh = function padh(e, t) {
    return e.toString(16).padStart(t, "0");
  },
  b2h = function b2h(e) {
    return Array.from(e).map(function (e) {
      return padh(e, 2);
    }).join("");
  },
  h2b = function h2b(e) {
    var t = e.length;
    (!str(e) || t % 2) && err("hex invalid 1");
    var n = u8n(t / 2);
    for (var _t = 0; _t < n.length; _t++) {
      var o = 2 * _t,
        r = e.slice(o, o + 2),
        s = Number.parseInt(r, 16);
      (Number.isNaN(s) || s < 0) && err("hex invalid 2"), n[_t] = s;
    }
    return n;
  },
  n2b_32LE = function n2b_32LE(e) {
    return h2b(padh(e, 64)).reverse();
  },
  b2n_LE = function b2n_LE(e) {
    return BigInt("0x" + b2h(u8n(au8(e)).reverse()));
  },
  concatB = function concatB() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    var t = u8n(e.reduce(function (e, t) {
      return e + au8(t).length;
    }, 0));
    var n = 0;
    return e.forEach(function (e) {
      t.set(e, n), n += e.length;
    }), t;
  },
  invert = function invert(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : P;
    (0n === e || t <= 0n) && err("no inverse n=" + e + " mod=" + t);
    var n = mod(e, t),
      o = t,
      r = 0n,
      s = 1n,
      i = 1n,
      a = 0n;
    for (; 0n !== n;) {
      var _e = o / n,
        _t2 = o % n,
        d = r - i * _e,
        c = s - a * _e;
      o = n, n = _t2, r = i, s = a, i = d, a = c;
    }
    return 1n === o ? mod(r, t) : err("no inverse");
  },
  pow2 = function pow2(e, t) {
    var n = e;
    for (; t-- > 0n;) n *= n, n %= P;
    return n;
  },
  pow_2_252_3 = function pow_2_252_3(e) {
    var t = e * e % P * e % P,
      n = pow2(t, 2n) * t % P,
      o = pow2(n, 1n) * e % P,
      r = pow2(o, 5n) * o % P,
      s = pow2(r, 10n) * r % P,
      i = pow2(s, 20n) * s % P,
      a = pow2(i, 40n) * i % P,
      d = pow2(a, 80n) * a % P,
      c = pow2(d, 80n) * a % P,
      u = pow2(c, 10n) * r % P;
    return {
      pow_p_5_8: pow2(u, 2n) * e % P,
      b2: t
    };
  },
  RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n,
  uvRatio = function uvRatio(e, t) {
    var n = mod(t * t * t),
      o = mod(n * n * t),
      r = pow_2_252_3(e * o).pow_p_5_8;
    var s = mod(e * n * r);
    var i = mod(t * s * s),
      a = s,
      d = mod(s * RM1),
      c = i === e,
      u = i === mod(-e),
      h = i === mod(-e * RM1);
    return c && (s = a), (u || h) && (s = d), 1n === (1n & mod(s)) && (s = mod(-s)), {
      isValid: c || u,
      value: s
    };
  },
  modL_LE = function modL_LE(e) {
    return mod(b2n_LE(e), N);
  };
var _shaS;
var sha512a = function sha512a() {
    return etc.sha512Async.apply(etc, arguments);
  },
  sha512s = function sha512s() {
    return "function" == typeof _shaS ? _shaS.apply(void 0, arguments) : err("etc.sha512Sync not set");
  },
  hash2extK = function hash2extK(e) {
    var t = e.slice(0, 32);
    t[0] &= 248, t[31] &= 127, t[31] |= 64;
    var n = e.slice(32, 64),
      o = modL_LE(t),
      r = G.mul(o),
      s = r.toRawBytes();
    return {
      head: t,
      prefix: n,
      scalar: o,
      point: r,
      pointBytes: s
    };
  },
  getExtendedPublicKeyAsync = function getExtendedPublicKeyAsync(e) {
    return sha512a(toU8(e, 32)).then(hash2extK);
  },
  getExtendedPublicKey = function getExtendedPublicKey(e) {
    return hash2extK(sha512s(toU8(e, 32)));
  },
  getPublicKeyAsync = function getPublicKeyAsync(e) {
    return getExtendedPublicKeyAsync(e).then(function (e) {
      return e.pointBytes;
    });
  },
  getPublicKey = function getPublicKey(e) {
    return getExtendedPublicKey(e).pointBytes;
  };
function hashFinish(e, t) {
  return e ? sha512a(t.hashable).then(t.finish) : t.finish(sha512s(t.hashable));
}
var _sign = function _sign(e, t, n) {
    var o = e.pointBytes,
      r = e.scalar,
      s = modL_LE(t),
      i = G.mul(s).toRawBytes();
    return {
      hashable: concatB(i, o, n),
      finish: function finish(e) {
        var t = mod(s + modL_LE(e) * r, N);
        return au8(concatB(i, n2b_32LE(t)), 64);
      }
    };
  },
  signAsync = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e, t) {
      var n, o, r;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            n = toU8(e);
            _context.n = 1;
            return getExtendedPublicKeyAsync(t);
          case 1:
            o = _context.v;
            _context.n = 2;
            return sha512a(o.prefix, n);
          case 2:
            r = _context.v;
            return _context.a(2, hashFinish(!0, _sign(o, r, n)));
        }
      }, _callee);
    }));
    return function signAsync(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  sign = function sign(e, t) {
    var n = toU8(e),
      o = getExtendedPublicKey(t),
      r = sha512s(o.prefix, n);
    return hashFinish(!1, _sign(o, r, n));
  },
  dvo = {
    zip215: !0
  },
  _verify = function _verify(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : dvo;
    t = toU8(t), e = toU8(e, 64);
    var r = o.zip215;
    var s,
      i,
      a,
      d,
      c = new Uint8Array();
    try {
      s = Point.fromHex(n, r), i = Point.fromHex(e.slice(0, 32), r), a = b2n_LE(e.slice(32, 64)), d = G.mul(a, !1), c = concatB(i.toRawBytes(), s.toRawBytes(), t);
    } catch (e) {}
    return {
      hashable: c,
      finish: function finish(e) {
        if (null == d) return !1;
        if (!r && s.isSmallOrder()) return !1;
        var t = modL_LE(e);
        return i.add(s.mul(t, !1)).add(d.negate()).clearCofactor().is0();
      }
    };
  },
  verifyAsync = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e, t, n) {
      var o,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            o = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : dvo;
            return _context2.a(2, hashFinish(!0, _verify(e, t, n, o)));
        }
      }, _callee2);
    }));
    return function verifyAsync(_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }(),
  verify = function verify(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : dvo;
    return hashFinish(!1, _verify(e, t, n, o));
  },
  cr = function cr() {
    return "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && "crypto" in globalThis ? globalThis.crypto : void 0;
  },
  etc = {
    bytesToHex: b2h,
    hexToBytes: h2b,
    concatBytes: concatB,
    mod: mod,
    invert: invert,
    randomBytes: function randomBytes() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
      var t = cr();
      return t && t.getRandomValues || err("crypto.getRandomValues must be defined"), t.getRandomValues(u8n(e));
    },
    sha512Async: function () {
      var _sha512Async = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var t,
          n,
          _args3 = arguments,
          _t3,
          _t4;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              t = cr();
              t && t.subtle || err("crypto.subtle or etc.sha512Async must be defined");
              n = concatB.apply(void 0, _args3);
              _t3 = u8n;
              _context3.n = 1;
              return t.subtle.digest("SHA-512", n.buffer);
            case 1:
              _t4 = _context3.v;
              return _context3.a(2, _t3(_t4));
          }
        }, _callee3);
      }));
      function sha512Async() {
        return _sha512Async.apply(this, arguments);
      }
      return sha512Async;
    }(),
    sha512Sync: void 0
  };
Object.defineProperties(etc, {
  sha512Sync: {
    configurable: !1,
    get: function get() {
      return _shaS;
    },
    set: function set(e) {
      _shaS || (_shaS = e);
    }
  }
});
var utils = {
    getExtendedPublicKeyAsync: getExtendedPublicKeyAsync,
    getExtendedPublicKey: getExtendedPublicKey,
    randomPrivateKey: function randomPrivateKey() {
      return etc.randomBytes(32);
    },
    precompute: function precompute() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : G;
      return t.multiply(3n), t;
    }
  },
  W = 8,
  precompute = function precompute() {
    var e = [];
    var t = G,
      n = t;
    for (var o = 0; o < 33; o++) {
      n = t, e.push(n);
      for (var _o = 1; _o < 128; _o++) n = n.add(t), e.push(n);
      t = n["double"]();
    }
    return e;
  };
var Gpows;
var wNAF = function wNAF(e) {
  var t = Gpows || (Gpows = precompute()),
    n = function n(e, t) {
      var n = t.negate();
      return e ? n : t;
    };
  var o = I,
    r = G;
  var s = BigInt(255),
    i = BigInt(8);
  for (var a = 0; a < 33; a++) {
    var d = 128 * a;
    var c = Number(e & s);
    e >>= i, c > 128 && (c -= 256, e += 1n);
    var u = d,
      h = d + Math.abs(c) - 1,
      l = a % 2 != 0,
      y = c < 0;
    0 === c ? r = r.add(n(l, t[u])) : o = o.add(n(y, t[h]));
  }
  return {
    p: o,
    f: r
  };
};
var crypto = require('crypto-js');
function hexToUint8Array(hex) {
  if (hex.length % 2 !== 0) {
    throw new Error('Invalid hex string');
  }
  var byteArray = new Uint8Array(hex.length / 2);
  for (var i = 0; i < hex.length; i += 2) {
    byteArray[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return byteArray;
}
etc.sha512Sync = function () {
  var concatenatedBytes = etc.concatBytes.apply(etc, arguments);
  var wordArray = crypto.lib.WordArray.create(concatenatedBytes);
  var hash = crypto.SHA512(wordArray);
  ret = hash.toString(crypto.enc.Hex);
  return hexToUint8Array(ret);
};
function constructSignContent(request, nonce) {
  console.log(request.url.getPath(), request.url.host);
  var originalPath = request.url.getPath();
  var path = originalPath.startsWith("/v2") ? originalPath : "/v2" + originalPath;
  var method = request.method;
  var body = pm.request.body != null && pm.request.body.raw != null ? pm.request.body.raw : '';
  var queryString = request.url.getQueryString();
  if (queryString != "") {
    var params = queryString.split('&').map(function (param) {
      var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];
      return {
        key: key,
        value: value
      };
    });
    queryString = params.map(function (param) {
      return "".concat(param.key, "=").concat(encodeURIComponent(param.value));
    }).join('&').replace(/%20/g, "+");
  }
  var strToSign = [method, path, nonce, queryString, body].join('|');
  console.log("strToSign:", strToSign);
  return crypto.SHA256(crypto.SHA256(strToSign)).toString();
}
var nonce = String(new Date().getTime());
var hash = constructSignContent(pm.request, nonce);

// get private key from environment
var privateKey = pm.environment.get('privateKey');
// sign the request
var sig = sign(hash, privateKey);
// add authorization headers
pm.request.addHeader({
  key: 'Biz-Api-Nonce',
  value: nonce
});
pm.request.addHeader({
  key: 'Biz-Api-Signature',
  value: Buffer.from(sig).toString('hex')
});
pm.request.addHeader({
  key: 'Biz-Api-Key',
  value: pm.environment.get('apiKey')
});