"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CryptoJS = _interopRequireWildcard(require("crypto-js"));
var _tweetnacl = require("tweetnacl");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ApiSigner = exports["default"] = /*#__PURE__*/function () {
  function ApiSigner(privateKey) {
    _classCallCheck(this, ApiSigner);
    this.privateKey = privateKey;
  }
  return _createClass(ApiSigner, [{
    key: "generateHeaders",
    value: function generateHeaders(path, method, body, queryString) {
      var nonce = String(new Date().getTime());
      var strToSign = [method, path, nonce, queryString, body ? JSON.stringify(body) : ''].join('|');
      console.log("strToSign:", strToSign);
      var hash2String = CryptoJS.SHA256(CryptoJS.SHA256(strToSign)).toString(CryptoJS.enc.Hex);
      return {
        'BIZ-API-KEY': this.getPublicKey(this.privateKey),
        "BIZ-API-NONCE": nonce,
        "BIZ-API-SIGNATURE": this.sign(hash2String, this.privateKey)
      };
    }
  }, {
    key: "sign",
    value: function sign(message, sk) {
      var pk = this.getPublicKey(sk);
      var skBytes = new Uint8Array(Buffer.from(sk + pk, 'hex'));
      var messageBytes = new Uint8Array(Buffer.from(message, 'hex'));
      var signature = _tweetnacl.sign.detached(messageBytes, skBytes);
      return Buffer.from(signature).toString('hex');
    }
  }, {
    key: "getPublicKey",
    value: function getPublicKey(sk) {
      var skBytes = new Uint8Array(Buffer.from(sk, 'hex'));
      var pk = _tweetnacl.sign.keyPair.fromSeed(skBytes).publicKey;
      return Buffer.from(pk).toString('hex');
    }
  }]);
}();