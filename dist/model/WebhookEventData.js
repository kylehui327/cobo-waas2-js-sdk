"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AcquiringType = _interopRequireDefault(require("./AcquiringType"));
var _AddressesEventData = _interopRequireDefault(require("./AddressesEventData"));
var _AddressesEventDataAllOfAddresses = _interopRequireDefault(require("./AddressesEventDataAllOfAddresses"));
var _Balance = _interopRequireDefault(require("./Balance"));
var _BalanceUpdateInfoEventData = _interopRequireDefault(require("./BalanceUpdateInfoEventData"));
var _ChainInfo = _interopRequireDefault(require("./ChainInfo"));
var _ChainsEventData = _interopRequireDefault(require("./ChainsEventData"));
var _MPCVaultEventData = _interopRequireDefault(require("./MPCVaultEventData"));
var _PaymentAddressUpdateEventData = _interopRequireDefault(require("./PaymentAddressUpdateEventData"));
var _PaymentOrderEventData = _interopRequireDefault(require("./PaymentOrderEventData"));
var _PaymentRefundEventData = _interopRequireDefault(require("./PaymentRefundEventData"));
var _PaymentSettlementEvent = _interopRequireDefault(require("./PaymentSettlementEvent"));
var _PaymentTransaction = _interopRequireDefault(require("./PaymentTransaction"));
var _PaymentTransactionEventData = _interopRequireDefault(require("./PaymentTransactionEventData"));
var _RefundType = _interopRequireDefault(require("./RefundType"));
var _RootPubkey = _interopRequireDefault(require("./RootPubkey"));
var _SettleStatus = _interopRequireDefault(require("./SettleStatus"));
var _SettlementDetail = _interopRequireDefault(require("./SettlementDetail"));
var _SourceGroup = _interopRequireDefault(require("./SourceGroup"));
var _SuspendedTokenEventData = _interopRequireDefault(require("./SuspendedTokenEventData"));
var _SuspendedTokenOperationType = _interopRequireDefault(require("./SuspendedTokenOperationType"));
var _TSSRequestWebhookEventData = _interopRequireDefault(require("./TSSRequestWebhookEventData"));
var _TokenInfo = _interopRequireDefault(require("./TokenInfo"));
var _TokenListingEventData = _interopRequireDefault(require("./TokenListingEventData"));
var _TokensEventData = _interopRequireDefault(require("./TokensEventData"));
var _TransactionBlockInfo = _interopRequireDefault(require("./TransactionBlockInfo"));
var _TransactionDestination = _interopRequireDefault(require("./TransactionDestination"));
var _TransactionFee = _interopRequireDefault(require("./TransactionFee"));
var _TransactionFuelingInfo = _interopRequireDefault(require("./TransactionFuelingInfo"));
var _TransactionInitiatorType = _interopRequireDefault(require("./TransactionInitiatorType"));
var _TransactionRawTxInfo = _interopRequireDefault(require("./TransactionRawTxInfo"));
var _TransactionReplacement = _interopRequireDefault(require("./TransactionReplacement"));
var _TransactionResult = _interopRequireDefault(require("./TransactionResult"));
var _TransactionSource = _interopRequireDefault(require("./TransactionSource"));
var _TransactionStatus = _interopRequireDefault(require("./TransactionStatus"));
var _TransactionSubStatus = _interopRequireDefault(require("./TransactionSubStatus"));
var _TransactionType = _interopRequireDefault(require("./TransactionType"));
var _TransactionWebhookEventData = _interopRequireDefault(require("./TransactionWebhookEventData"));
var _WalletInfo = _interopRequireDefault(require("./WalletInfo"));
var _WalletInfoEventData = _interopRequireDefault(require("./WalletInfoEventData"));
var _WalletSubtype = _interopRequireDefault(require("./WalletSubtype"));
var _WalletType = _interopRequireDefault(require("./WalletType"));
var _WebhookEventData;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The WebhookEventData model module.
 * @module model/WebhookEventData
 */
var WebhookEventData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookEventData</code>.
   * @alias module:model/WebhookEventData
   * @param {(module:model/AddressesEventData|module:model/BalanceUpdateInfoEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/PaymentAddressUpdateEventData|module:model/PaymentOrderEventData|module:model/PaymentRefundEventData|module:model/PaymentSettlementEvent|module:model/PaymentTransactionEventData|module:model/SuspendedTokenEventData|module:model/TSSRequestWebhookEventData|module:model/TokenListingEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} instance The actual instance to initialize WebhookEventData.
   */
  function WebhookEventData() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, WebhookEventData);
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    var discriminatorValue = instance["data_type"];
    if (discriminatorValue) {
      switch (discriminatorValue) {
        case "Addresses":
          this.actualInstance = _AddressesEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "BalanceUpdateInfo":
          this.actualInstance = _BalanceUpdateInfoEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "Chains":
          this.actualInstance = _ChainsEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "MPCVault":
          this.actualInstance = _MPCVaultEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "PaymentAddressUpdate":
          this.actualInstance = _PaymentAddressUpdateEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "PaymentOrder":
          this.actualInstance = _PaymentOrderEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "PaymentRefund":
          this.actualInstance = _PaymentRefundEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "PaymentSettlement":
          this.actualInstance = _PaymentSettlementEvent["default"].constructFromObject(instance);
          match++;
          break;
        case "PaymentTransaction":
          this.actualInstance = _PaymentTransactionEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "SuspendedToken":
          this.actualInstance = _SuspendedTokenEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "TSSRequest":
          this.actualInstance = _TSSRequestWebhookEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "TokenListing":
          this.actualInstance = _TokenListingEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "Tokens":
          this.actualInstance = _TokensEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "Transaction":
          this.actualInstance = _TransactionWebhookEventData["default"].constructFromObject(instance);
          match++;
          break;
        case "WalletInfo":
          this.actualInstance = _WalletInfoEventData["default"].constructFromObject(instance);
          match++;
          break;
        default:
          errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
          break;
      }
      return;
    }
    try {
      if (instance instanceof _TransactionWebhookEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_TransactionWebhookEventData["default"].validateJSON && _TransactionWebhookEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create TransactionWebhookEventData from JS object
        this.actualInstance = _TransactionWebhookEventData["default"].constructFromObject(instance);
      } else {
        if (_TransactionWebhookEventData["default"].constructFromObject(instance)) {
          if (!!_TransactionWebhookEventData["default"].constructFromObject(instance).toJSON) {
            if (_TransactionWebhookEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _TransactionWebhookEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _TransactionWebhookEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TransactionWebhookEventData
      errorMessages.push("Failed to construct TransactionWebhookEventData: " + err);
    }
    try {
      if (instance instanceof _TSSRequestWebhookEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_TSSRequestWebhookEventData["default"].validateJSON && _TSSRequestWebhookEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create TSSRequestWebhookEventData from JS object
        this.actualInstance = _TSSRequestWebhookEventData["default"].constructFromObject(instance);
      } else {
        if (_TSSRequestWebhookEventData["default"].constructFromObject(instance)) {
          if (!!_TSSRequestWebhookEventData["default"].constructFromObject(instance).toJSON) {
            if (_TSSRequestWebhookEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _TSSRequestWebhookEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _TSSRequestWebhookEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TSSRequestWebhookEventData
      errorMessages.push("Failed to construct TSSRequestWebhookEventData: " + err);
    }
    try {
      if (instance instanceof _AddressesEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_AddressesEventData["default"].validateJSON && _AddressesEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create AddressesEventData from JS object
        this.actualInstance = _AddressesEventData["default"].constructFromObject(instance);
      } else {
        if (_AddressesEventData["default"].constructFromObject(instance)) {
          if (!!_AddressesEventData["default"].constructFromObject(instance).toJSON) {
            if (_AddressesEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _AddressesEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _AddressesEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressesEventData
      errorMessages.push("Failed to construct AddressesEventData: " + err);
    }
    try {
      if (instance instanceof _WalletInfoEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_WalletInfoEventData["default"].validateJSON && _WalletInfoEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create WalletInfoEventData from JS object
        this.actualInstance = _WalletInfoEventData["default"].constructFromObject(instance);
      } else {
        if (_WalletInfoEventData["default"].constructFromObject(instance)) {
          if (!!_WalletInfoEventData["default"].constructFromObject(instance).toJSON) {
            if (_WalletInfoEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _WalletInfoEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _WalletInfoEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into WalletInfoEventData
      errorMessages.push("Failed to construct WalletInfoEventData: " + err);
    }
    try {
      if (instance instanceof _MPCVaultEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_MPCVaultEventData["default"].validateJSON && _MPCVaultEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create MPCVaultEventData from JS object
        this.actualInstance = _MPCVaultEventData["default"].constructFromObject(instance);
      } else {
        if (_MPCVaultEventData["default"].constructFromObject(instance)) {
          if (!!_MPCVaultEventData["default"].constructFromObject(instance).toJSON) {
            if (_MPCVaultEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _MPCVaultEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _MPCVaultEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into MPCVaultEventData
      errorMessages.push("Failed to construct MPCVaultEventData: " + err);
    }
    try {
      if (instance instanceof _ChainsEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_ChainsEventData["default"].validateJSON && _ChainsEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create ChainsEventData from JS object
        this.actualInstance = _ChainsEventData["default"].constructFromObject(instance);
      } else {
        if (_ChainsEventData["default"].constructFromObject(instance)) {
          if (!!_ChainsEventData["default"].constructFromObject(instance).toJSON) {
            if (_ChainsEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _ChainsEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _ChainsEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ChainsEventData
      errorMessages.push("Failed to construct ChainsEventData: " + err);
    }
    try {
      if (instance instanceof _TokensEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_TokensEventData["default"].validateJSON && _TokensEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create TokensEventData from JS object
        this.actualInstance = _TokensEventData["default"].constructFromObject(instance);
      } else {
        if (_TokensEventData["default"].constructFromObject(instance)) {
          if (!!_TokensEventData["default"].constructFromObject(instance).toJSON) {
            if (_TokensEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _TokensEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _TokensEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokensEventData
      errorMessages.push("Failed to construct TokensEventData: " + err);
    }
    try {
      if (instance instanceof _TokenListingEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_TokenListingEventData["default"].validateJSON && _TokenListingEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create TokenListingEventData from JS object
        this.actualInstance = _TokenListingEventData["default"].constructFromObject(instance);
      } else {
        if (_TokenListingEventData["default"].constructFromObject(instance)) {
          if (!!_TokenListingEventData["default"].constructFromObject(instance).toJSON) {
            if (_TokenListingEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _TokenListingEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _TokenListingEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokenListingEventData
      errorMessages.push("Failed to construct TokenListingEventData: " + err);
    }
    try {
      if (instance instanceof _BalanceUpdateInfoEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_BalanceUpdateInfoEventData["default"].validateJSON && _BalanceUpdateInfoEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create BalanceUpdateInfoEventData from JS object
        this.actualInstance = _BalanceUpdateInfoEventData["default"].constructFromObject(instance);
      } else {
        if (_BalanceUpdateInfoEventData["default"].constructFromObject(instance)) {
          if (!!_BalanceUpdateInfoEventData["default"].constructFromObject(instance).toJSON) {
            if (_BalanceUpdateInfoEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _BalanceUpdateInfoEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _BalanceUpdateInfoEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into BalanceUpdateInfoEventData
      errorMessages.push("Failed to construct BalanceUpdateInfoEventData: " + err);
    }
    try {
      if (instance instanceof _SuspendedTokenEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_SuspendedTokenEventData["default"].validateJSON && _SuspendedTokenEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create SuspendedTokenEventData from JS object
        this.actualInstance = _SuspendedTokenEventData["default"].constructFromObject(instance);
      } else {
        if (_SuspendedTokenEventData["default"].constructFromObject(instance)) {
          if (!!_SuspendedTokenEventData["default"].constructFromObject(instance).toJSON) {
            if (_SuspendedTokenEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _SuspendedTokenEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _SuspendedTokenEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into SuspendedTokenEventData
      errorMessages.push("Failed to construct SuspendedTokenEventData: " + err);
    }
    try {
      if (instance instanceof _PaymentOrderEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_PaymentOrderEventData["default"].validateJSON && _PaymentOrderEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create PaymentOrderEventData from JS object
        this.actualInstance = _PaymentOrderEventData["default"].constructFromObject(instance);
      } else {
        if (_PaymentOrderEventData["default"].constructFromObject(instance)) {
          if (!!_PaymentOrderEventData["default"].constructFromObject(instance).toJSON) {
            if (_PaymentOrderEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _PaymentOrderEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _PaymentOrderEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PaymentOrderEventData
      errorMessages.push("Failed to construct PaymentOrderEventData: " + err);
    }
    try {
      if (instance instanceof _PaymentRefundEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_PaymentRefundEventData["default"].validateJSON && _PaymentRefundEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create PaymentRefundEventData from JS object
        this.actualInstance = _PaymentRefundEventData["default"].constructFromObject(instance);
      } else {
        if (_PaymentRefundEventData["default"].constructFromObject(instance)) {
          if (!!_PaymentRefundEventData["default"].constructFromObject(instance).toJSON) {
            if (_PaymentRefundEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _PaymentRefundEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _PaymentRefundEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PaymentRefundEventData
      errorMessages.push("Failed to construct PaymentRefundEventData: " + err);
    }
    try {
      if (instance instanceof _PaymentSettlementEvent["default"]) {
        this.actualInstance = instance;
      } else if (!!_PaymentSettlementEvent["default"].validateJSON && _PaymentSettlementEvent["default"].validateJSON(instance)) {
        // plain JS object
        // create PaymentSettlementEvent from JS object
        this.actualInstance = _PaymentSettlementEvent["default"].constructFromObject(instance);
      } else {
        if (_PaymentSettlementEvent["default"].constructFromObject(instance)) {
          if (!!_PaymentSettlementEvent["default"].constructFromObject(instance).toJSON) {
            if (_PaymentSettlementEvent["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _PaymentSettlementEvent["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _PaymentSettlementEvent["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PaymentSettlementEvent
      errorMessages.push("Failed to construct PaymentSettlementEvent: " + err);
    }
    try {
      if (instance instanceof _PaymentTransactionEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_PaymentTransactionEventData["default"].validateJSON && _PaymentTransactionEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create PaymentTransactionEventData from JS object
        this.actualInstance = _PaymentTransactionEventData["default"].constructFromObject(instance);
      } else {
        if (_PaymentTransactionEventData["default"].constructFromObject(instance)) {
          if (!!_PaymentTransactionEventData["default"].constructFromObject(instance).toJSON) {
            if (_PaymentTransactionEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _PaymentTransactionEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _PaymentTransactionEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PaymentTransactionEventData
      errorMessages.push("Failed to construct PaymentTransactionEventData: " + err);
    }
    try {
      if (instance instanceof _PaymentAddressUpdateEventData["default"]) {
        this.actualInstance = instance;
      } else if (!!_PaymentAddressUpdateEventData["default"].validateJSON && _PaymentAddressUpdateEventData["default"].validateJSON(instance)) {
        // plain JS object
        // create PaymentAddressUpdateEventData from JS object
        this.actualInstance = _PaymentAddressUpdateEventData["default"].constructFromObject(instance);
      } else {
        if (_PaymentAddressUpdateEventData["default"].constructFromObject(instance)) {
          if (!!_PaymentAddressUpdateEventData["default"].constructFromObject(instance).toJSON) {
            if (_PaymentAddressUpdateEventData["default"].constructFromObject(instance).toJSON()) {
              this.actualInstance = _PaymentAddressUpdateEventData["default"].constructFromObject(instance);
            }
          } else {
            this.actualInstance = _PaymentAddressUpdateEventData["default"].constructFromObject(instance);
          }
        }
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into PaymentAddressUpdateEventData
      errorMessages.push("Failed to construct PaymentAddressUpdateEventData: " + err);
    }

    // if (match > 1) {
    //    throw new Error("Multiple matches found constructing `WebhookEventData` with oneOf schemas AddressesEventData, BalanceUpdateInfoEventData, ChainsEventData, MPCVaultEventData, PaymentAddressUpdateEventData, PaymentOrderEventData, PaymentRefundEventData, PaymentSettlementEvent, PaymentTransactionEventData, SuspendedTokenEventData, TSSRequestWebhookEventData, TokenListingEventData, TokensEventData, TransactionWebhookEventData, WalletInfoEventData. Input: " + JSON.stringify(instance));
    // } else
    if (match === 0) {
      //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
      //    throw new Error("No match found constructing `WebhookEventData` with oneOf schemas AddressesEventData, BalanceUpdateInfoEventData, ChainsEventData, MPCVaultEventData, PaymentAddressUpdateEventData, PaymentOrderEventData, PaymentRefundEventData, PaymentSettlementEvent, PaymentTransactionEventData, SuspendedTokenEventData, TSSRequestWebhookEventData, TokenListingEventData, TokensEventData, TransactionWebhookEventData, WalletInfoEventData. Details: " +
      //                    errorMessages.join(", "));
      return;
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>WebhookEventData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookEventData} obj Optional instance to populate.
   * @return {module:model/WebhookEventData} The populated <code>WebhookEventData</code> instance.
   */
  return _createClass(WebhookEventData, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>AddressesEventData</code>, <code>BalanceUpdateInfoEventData</code>, <code>ChainsEventData</code>, <code>MPCVaultEventData</code>, <code>PaymentAddressUpdateEventData</code>, <code>PaymentOrderEventData</code>, <code>PaymentRefundEventData</code>, <code>PaymentSettlementEvent</code>, <code>PaymentTransactionEventData</code>, <code>SuspendedTokenEventData</code>, <code>TSSRequestWebhookEventData</code>, <code>TokenListingEventData</code>, <code>TokensEventData</code>, <code>TransactionWebhookEventData</code>, <code>WalletInfoEventData</code>.
     * @return {(module:model/AddressesEventData|module:model/BalanceUpdateInfoEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/PaymentAddressUpdateEventData|module:model/PaymentOrderEventData|module:model/PaymentRefundEventData|module:model/PaymentSettlementEvent|module:model/PaymentTransactionEventData|module:model/SuspendedTokenEventData|module:model/TSSRequestWebhookEventData|module:model/TokenListingEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressesEventData</code>, <code>BalanceUpdateInfoEventData</code>, <code>ChainsEventData</code>, <code>MPCVaultEventData</code>, <code>PaymentAddressUpdateEventData</code>, <code>PaymentOrderEventData</code>, <code>PaymentRefundEventData</code>, <code>PaymentSettlementEvent</code>, <code>PaymentTransactionEventData</code>, <code>SuspendedTokenEventData</code>, <code>TSSRequestWebhookEventData</code>, <code>TokenListingEventData</code>, <code>TokensEventData</code>, <code>TransactionWebhookEventData</code>, <code>WalletInfoEventData</code>.
     * @param {(module:model/AddressesEventData|module:model/BalanceUpdateInfoEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/PaymentAddressUpdateEventData|module:model/PaymentOrderEventData|module:model/PaymentRefundEventData|module:model/PaymentSettlementEvent|module:model/PaymentTransactionEventData|module:model/SuspendedTokenEventData|module:model/TSSRequestWebhookEventData|module:model/TokenListingEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = WebhookEventData.constructFromObject(obj).getActualInstance();
    }
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new WebhookEventData(data);
    }
  }]);
}();
/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/WebhookEventData.DataTypeEnum} data_type
 */
_WebhookEventData = WebhookEventData;
/**
 * Create an instance of WebhookEventData from a JSON string.
 * @param {string} json_string JSON string.
 * @return {module:model/WebhookEventData} An instance of WebhookEventData.
 */
_defineProperty(WebhookEventData, "fromJSON", function (json_string) {
  return _WebhookEventData.constructFromObject(JSON.parse(json_string));
});
WebhookEventData.prototype['data_type'] = undefined;

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
WebhookEventData.prototype['transaction_id'] = undefined;

/**
 * The Cobo ID, which can be used to track a transaction.
 * @member {String} cobo_id
 */
WebhookEventData.prototype['cobo_id'] = undefined;

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
WebhookEventData.prototype['request_id'] = undefined;

/**
 * For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
 * @member {String} wallet_id
 */
WebhookEventData.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/TransactionType} type
 */
WebhookEventData.prototype['type'] = undefined;

/**
 * @member {module:model/TransactionStatus} status
 */
WebhookEventData.prototype['status'] = undefined;

/**
 * @member {module:model/TransactionSubStatus} sub_status
 */
WebhookEventData.prototype['sub_status'] = undefined;

/**
 * (This property is applicable to approval failures and signature failures only) The reason why the transaction failed.
 * @member {String} failed_reason
 */
WebhookEventData.prototype['failed_reason'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
WebhookEventData.prototype['chain_id'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
WebhookEventData.prototype['token_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
 * @member {String} asset_id
 */
WebhookEventData.prototype['asset_id'] = undefined;

/**
 * @member {module:model/TransactionSource} source
 */
WebhookEventData.prototype['source'] = undefined;

/**
 * @member {module:model/TransactionDestination} destination
 */
WebhookEventData.prototype['destination'] = undefined;

/**
 * @member {module:model/TransactionResult} result
 */
WebhookEventData.prototype['result'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
WebhookEventData.prototype['fee'] = undefined;

/**
 * The transaction initiator.
 * @member {String} initiator
 */
WebhookEventData.prototype['initiator'] = undefined;

/**
 * @member {module:model/TransactionInitiatorType} initiator_type
 */
WebhookEventData.prototype['initiator_type'] = undefined;

/**
 * The number of confirmations this transaction has received.
 * @member {Number} confirmed_num
 */
WebhookEventData.prototype['confirmed_num'] = undefined;

/**
 * The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction.
 * @member {Number} confirming_threshold
 */
WebhookEventData.prototype['confirming_threshold'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
WebhookEventData.prototype['transaction_hash'] = undefined;

/**
 * @member {module:model/TransactionBlockInfo} block_info
 */
WebhookEventData.prototype['block_info'] = undefined;

/**
 * @member {module:model/TransactionRawTxInfo} raw_tx_info
 */
WebhookEventData.prototype['raw_tx_info'] = undefined;

/**
 * @member {module:model/TransactionReplacement} replacement
 */
WebhookEventData.prototype['replacement'] = undefined;

/**
 * A custom transaction category for you to identify your transfers more easily.
 * @member {Array.<String>} category
 */
WebhookEventData.prototype['category'] = undefined;

/**
 * The description for your transaction.
 * @member {String} description
 */
WebhookEventData.prototype['description'] = undefined;

/**
 * Whether the transaction was executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer. - `true`: The transaction was executed as a Cobo Loop transfer. - `false`: The transaction was not executed as a Cobo Loop transfer. 
 * @member {Boolean} is_loop
 */
WebhookEventData.prototype['is_loop'] = undefined;

/**
 * The transaction category defined by Cobo. Possible values include:  - `AutoSweep`: An auto-sweep transaction. - `AutoFueling`: A transaction where Fee Station pays transaction fees to an address within your wallet. - `AutoFuelingRefund`: A refund for an auto-fueling transaction. - `SafeTxMessage`: A message signing transaction to authorize a Smart Contract Wallet (Safe\\{Wallet\\}) transaction. - `BillPayment`: A transaction to pay Cobo bills through Fee Station. - `BillRefund`: A refund for a previously made bill payment. - `CommissionFeeCharge`: A transaction to charge commission fees via Fee Station. - `CommissionFeeRefund`: A refund of previously charged commission fees. 
 * @member {Array.<String>} cobo_category
 */
WebhookEventData.prototype['cobo_category'] = undefined;

/**
 * A list of JSON-encoded strings containing structured, business-specific extra information for the transaction. Each item corresponds to a specific data type, indicated by the `extra_type` field in the JSON object (for example, \"BabylonBusinessInfo\", \"BtcAddressInfo\"). 
 * @member {Array.<String>} extra
 */
WebhookEventData.prototype['extra'] = undefined;

/**
 * @member {module:model/TransactionFuelingInfo} fueling_info
 */
WebhookEventData.prototype['fueling_info'] = undefined;

/**
 * The time when the transaction was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
WebhookEventData.prototype['created_timestamp'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
WebhookEventData.prototype['updated_timestamp'] = undefined;

/**
 * The TSS request ID.
 * @member {String} tss_request_id
 */
WebhookEventData.prototype['tss_request_id'] = undefined;

/**
 * @member {module:model/SourceGroup} source_key_share_holder_group
 */
WebhookEventData.prototype['source_key_share_holder_group'] = undefined;

/**
 * The target key share holder group ID.
 * @member {String} target_key_share_holder_group_id
 */
WebhookEventData.prototype['target_key_share_holder_group_id'] = undefined;

/**
 * A list of addresses.
 * @member {Array.<module:model/AddressesEventDataAllOfAddresses>} addresses
 */
WebhookEventData.prototype['addresses'] = undefined;

/**
 * @member {module:model/WalletInfo} wallet
 */
WebhookEventData.prototype['wallet'] = undefined;

/**
 * The vault ID.
 * @member {String} vault_id
 */
WebhookEventData.prototype['vault_id'] = undefined;

/**
 * The project ID.
 * @member {String} project_id
 */
WebhookEventData.prototype['project_id'] = undefined;

/**
 * The vault name.
 * @member {String} name
 */
WebhookEventData.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/RootPubkey>} root_pubkeys
 */
WebhookEventData.prototype['root_pubkeys'] = undefined;

/**
 * The enabled chains.
 * @member {Array.<module:model/ChainInfo>} chains
 */
WebhookEventData.prototype['chains'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
WebhookEventData.prototype['wallet_type'] = undefined;

/**
 * @member {Array.<module:model/WalletSubtype>} wallet_subtypes
 */
WebhookEventData.prototype['wallet_subtypes'] = undefined;

/**
 * The enabled tokens.
 * @member {Array.<module:model/TokenInfo>} tokens
 */
WebhookEventData.prototype['tokens'] = undefined;

/**
 * The token's contract address on the specified blockchain.
 * @member {String} contract_address
 */
WebhookEventData.prototype['contract_address'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
WebhookEventData.prototype['wallet_subtype'] = undefined;

/**
 * @member {module:model/TokenInfo} token
 */
WebhookEventData.prototype['token'] = undefined;

/**
 * The feedback provided by Cobo when a token listing request is rejected.
 * @member {String} feedback
 */
WebhookEventData.prototype['feedback'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
WebhookEventData.prototype['address'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_uuid
 */
WebhookEventData.prototype['wallet_uuid'] = undefined;

/**
 * @member {module:model/Balance} balance
 */
WebhookEventData.prototype['balance'] = undefined;

/**
 * A list of token IDs, separated by comma.
 * @member {String} token_ids
 */
WebhookEventData.prototype['token_ids'] = undefined;

/**
 * @member {module:model/SuspendedTokenOperationType} operation_type
 */
WebhookEventData.prototype['operation_type'] = undefined;

/**
 * Unique identifier of a single order
 * @member {String} order_id
 */
WebhookEventData.prototype['order_id'] = undefined;

/**
 * The merchant ID.
 * @member {String} merchant_id
 */
WebhookEventData.prototype['merchant_id'] = undefined;

/**
 * The cryptocurrency amount to be paid for this order.
 * @member {String} payable_amount
 */
WebhookEventData.prototype['payable_amount'] = undefined;

/**
 * The recipient wallet address to be used for the payment transaction.
 * @member {String} receive_address
 */
WebhookEventData.prototype['receive_address'] = undefined;

/**
 * The fiat currency of the order.
 * @member {String} currency
 */
WebhookEventData.prototype['currency'] = undefined;

/**
 * The base amount of the order in fiat currency, excluding the developer fee (specified in `fee_amount`).
 * @member {String} order_amount
 */
WebhookEventData.prototype['order_amount'] = undefined;

/**
 * The developer fee for the order in fiat currency. It is added to the base amount (`order_amount`) to determine the final charge.
 * @member {String} fee_amount
 */
WebhookEventData.prototype['fee_amount'] = undefined;

/**
 * The exchange rate between a currency pair. Expressed as the amount of fiat currency per one unit of cryptocurrency. For example, if the cryptocurrency is USDT and the fiat currency is USD, a rate of \"0.99\" means 1 USDT = 0.99 USD.
 * @member {String} exchange_rate
 */
WebhookEventData.prototype['exchange_rate'] = undefined;

/**
 * The expiration time of the pay-in order, represented as a UNIX timestamp in seconds.
 * @member {Number} expired_at
 */
WebhookEventData.prototype['expired_at'] = undefined;

/**
 * A unique reference code assigned by the merchant to identify this order in their system.
 * @member {String} merchant_order_code
 */
WebhookEventData.prototype['merchant_order_code'] = undefined;

/**
 * A unique reference code assigned by the developer to identify this order in their system.
 * @member {String} psp_order_code
 */
WebhookEventData.prototype['psp_order_code'] = undefined;

/**
 * The total cryptocurrency amount received for this order. Updates until the expiration time. Precision matches the token standard (e.g., 6 decimals for USDT).
 * @member {String} received_token_amount
 */
WebhookEventData.prototype['received_token_amount'] = undefined;

/**
 * An array of transactions associated with this refund order. Each transaction represents a separate blockchain operation related to the refund process.
 * @member {Array.<module:model/PaymentTransaction>} transactions
 */
WebhookEventData.prototype['transactions'] = undefined;

/**
 * @member {module:model/SettleStatus} settlement_status
 */
WebhookEventData.prototype['settlement_status'] = undefined;

/**
 * The refund order ID.
 * @member {String} refund_id
 */
WebhookEventData.prototype['refund_id'] = undefined;

/**
 * The amount in cryptocurrency to be returned for this refund order.
 * @member {String} amount
 */
WebhookEventData.prototype['amount'] = undefined;

/**
 * The recipient's wallet address where the refund will be sent.
 * @member {String} to_address
 */
WebhookEventData.prototype['to_address'] = undefined;

/**
 * @member {module:model/RefundType} refund_type
 */
WebhookEventData.prototype['refund_type'] = undefined;

/**
 * Whether to charge developer fee to the merchant for the refund.    - `true`: The fee amount (specified in `merchant_fee_amount`) will be deducted from the merchant's balance and added to the developer's balance    - `false`: The merchant is not charged any developer fee. 
 * @member {Boolean} charge_merchant_fee
 */
WebhookEventData.prototype['charge_merchant_fee'] = undefined;

/**
 * The developer fee amount to charge the merchant, denominated in the cryptocurrency specified by `merchant_fee_token_id`. This is only applicable if `charge_merchant_fee` is set to `true`.
 * @member {String} merchant_fee_amount
 */
WebhookEventData.prototype['merchant_fee_amount'] = undefined;

/**
 * The ID of the cryptocurrency used for the developer fee. This is only applicable if `charge_merchant_fee` is set to true.
 * @member {String} merchant_fee_token_id
 */
WebhookEventData.prototype['merchant_fee_token_id'] = undefined;

/**
 * The settlement request ID generated by Cobo.
 * @member {String} settlement_request_id
 */
WebhookEventData.prototype['settlement_request_id'] = undefined;

/**
 * @member {Array.<module:model/SettlementDetail>} settlements
 */
WebhookEventData.prototype['settlements'] = undefined;

/**
 * @member {module:model/AcquiringType} acquiring_type
 */
WebhookEventData.prototype['acquiring_type'] = undefined;

/**
 * Unique payer identifier on the Cobo side, auto-generated by the system. 
 * @member {String} payer_id
 */
WebhookEventData.prototype['payer_id'] = undefined;

/**
 * Unique user identifier on the merchant side, used to assign a dedicated deposit address. 
 * @member {String} custom_payer_id
 */
WebhookEventData.prototype['custom_payer_id'] = undefined;

/**
 * Blockchain network identifier, e.g., 'ETH' for Ethereum, 'TRON' for Tron. 
 * @member {String} chain
 */
WebhookEventData.prototype['chain'] = undefined;

/**
 * The previous deposit address that was assigned before update. 
 * @member {String} previous_address
 */
WebhookEventData.prototype['previous_address'] = undefined;

/**
 * The new updated deposit address assigned to the user. 
 * @member {String} updated_address
 */
WebhookEventData.prototype['updated_address'] = undefined;
WebhookEventData.OneOf = ["AddressesEventData", "BalanceUpdateInfoEventData", "ChainsEventData", "MPCVaultEventData", "PaymentAddressUpdateEventData", "PaymentOrderEventData", "PaymentRefundEventData", "PaymentSettlementEvent", "PaymentTransactionEventData", "SuspendedTokenEventData", "TSSRequestWebhookEventData", "TokenListingEventData", "TokensEventData", "TransactionWebhookEventData", "WalletInfoEventData"];
var _default = exports["default"] = WebhookEventData;