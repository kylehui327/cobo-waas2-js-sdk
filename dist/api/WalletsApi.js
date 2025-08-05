"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressInfo = _interopRequireDefault(require("../model/AddressInfo"));
var _BatchCheckUtxo201Response = _interopRequireDefault(require("../model/BatchCheckUtxo201Response"));
var _BatchCheckUtxoRequest = _interopRequireDefault(require("../model/BatchCheckUtxoRequest"));
var _ChainInfo = _interopRequireDefault(require("../model/ChainInfo"));
var _CheckAddressChainsValidity200ResponseInner = _interopRequireDefault(require("../model/CheckAddressChainsValidity200ResponseInner"));
var _CheckAddressValidity200Response = _interopRequireDefault(require("../model/CheckAddressValidity200Response"));
var _CheckAddressesValidity200ResponseInner = _interopRequireDefault(require("../model/CheckAddressesValidity200ResponseInner"));
var _CreateAddressRequest = _interopRequireDefault(require("../model/CreateAddressRequest"));
var _CreateTokenListingRequest201Response = _interopRequireDefault(require("../model/CreateTokenListingRequest201Response"));
var _CreateTokenListingRequestRequest = _interopRequireDefault(require("../model/CreateTokenListingRequestRequest"));
var _CreateWalletParams = _interopRequireDefault(require("../model/CreateWalletParams"));
var _CreatedWalletInfo = _interopRequireDefault(require("../model/CreatedWalletInfo"));
var _DeleteWalletById201Response = _interopRequireDefault(require("../model/DeleteWalletById201Response"));
var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));
var _ExtendedTokenInfo = _interopRequireDefault(require("../model/ExtendedTokenInfo"));
var _GetMaxTransferableValueWithFeeModelRequest = _interopRequireDefault(require("../model/GetMaxTransferableValueWithFeeModelRequest"));
var _ListAddressBalancesByToken200Response = _interopRequireDefault(require("../model/ListAddressBalancesByToken200Response"));
var _ListAddresses200Response = _interopRequireDefault(require("../model/ListAddresses200Response"));
var _ListSupportedChains200Response = _interopRequireDefault(require("../model/ListSupportedChains200Response"));
var _ListSupportedTokens200Response = _interopRequireDefault(require("../model/ListSupportedTokens200Response"));
var _ListTokenBalancesForAddress200Response = _interopRequireDefault(require("../model/ListTokenBalancesForAddress200Response"));
var _ListTokenListingRequests200Response = _interopRequireDefault(require("../model/ListTokenListingRequests200Response"));
var _ListUtxos200Response = _interopRequireDefault(require("../model/ListUtxos200Response"));
var _ListWallets200Response = _interopRequireDefault(require("../model/ListWallets200Response"));
var _LockUtxos201Response = _interopRequireDefault(require("../model/LockUtxos201Response"));
var _LockUtxosRequest = _interopRequireDefault(require("../model/LockUtxosRequest"));
var _MaxTransferableValue = _interopRequireDefault(require("../model/MaxTransferableValue"));
var _RefreshAddressBalancesByToken200Response = _interopRequireDefault(require("../model/RefreshAddressBalancesByToken200Response"));
var _RefreshAddressBalancesByTokenRequest = _interopRequireDefault(require("../model/RefreshAddressBalancesByTokenRequest"));
var _TokenListing = _interopRequireDefault(require("../model/TokenListing"));
var _TokenListingRequestStatus = _interopRequireDefault(require("../model/TokenListingRequestStatus"));
var _UpdateWalletParams = _interopRequireDefault(require("../model/UpdateWalletParams"));
var _WalletInfo = _interopRequireDefault(require("../model/WalletInfo"));
var _WalletSubtype = _interopRequireDefault(require("../model/WalletSubtype"));
var _WalletType = _interopRequireDefault(require("../model/WalletType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
* Wallets service.
* @module api/WalletsApi
*/
var WalletsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new WalletsApi. 
  * @alias module:api/WalletsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WalletsApi(apiClient) {
    _classCallCheck(this, WalletsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Batch check UTXOs
   * This operation verifies the existence and details of specified unspent transaction outputs (UTXOs) for a given wallet and token. A maximum of 100 UTXOs can be verified per request. <Note>This operation is applicable to MPC Wallets and Custodial Wallets (Web3 Wallets) only.</Note> 
   * @param {String} wallet_id The wallet ID.
   * @param {Object} opts Optional parameters
   * @param {module:model/BatchCheckUtxoRequest} [BatchCheckUtxoRequest] The request body of the Batch check UTXOs operation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchCheckUtxo201Response} and HTTP response
   */
  return _createClass(WalletsApi, [{
    key: "batchCheckUtxoWithHttpInfo",
    value: function batchCheckUtxoWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['BatchCheckUtxoRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling batchCheckUtxo");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BatchCheckUtxo201Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/utxos/batch_check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Batch check UTXOs
     * This operation verifies the existence and details of specified unspent transaction outputs (UTXOs) for a given wallet and token. A maximum of 100 UTXOs can be verified per request. <Note>This operation is applicable to MPC Wallets and Custodial Wallets (Web3 Wallets) only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/BatchCheckUtxoRequest} opts.BatchCheckUtxoRequest The request body of the Batch check UTXOs operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchCheckUtxo201Response}
     */
  }, {
    key: "batchCheckUtxo",
    value: function batchCheckUtxo(wallet_id, opts) {
      return this.batchCheckUtxoWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Check address validity across chains
     * This operation verifies if a given address is valid for a list of chains.  <Note>You can specify up to 20 chain IDs in a single request.</Note> 
     * @param {String} address The wallet address.
     * @param {String} chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CheckAddressChainsValidity200ResponseInner>} and HTTP response
     */
  }, {
    key: "checkAddressChainsValidityWithHttpInfo",
    value: function checkAddressChainsValidityWithHttpInfo(address, chain_ids) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling checkAddressChainsValidity");
      }
      // verify the required parameter 'chain_ids' is set
      if (chain_ids === undefined || chain_ids === null) {
        throw new Error("Missing the required parameter 'chain_ids' when calling checkAddressChainsValidity");
      }
      var pathParams = {};
      var queryParams = {
        'address': address,
        'chain_ids': chain_ids
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CheckAddressChainsValidity200ResponseInner["default"]];
      return this.apiClient.callApi('/wallets/check_address_chains_validity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Check address validity across chains
     * This operation verifies if a given address is valid for a list of chains.  <Note>You can specify up to 20 chain IDs in a single request.</Note> 
     * @param {String} address The wallet address.
     * @param {String} chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CheckAddressChainsValidity200ResponseInner>}
     */
  }, {
    key: "checkAddressChainsValidity",
    value: function checkAddressChainsValidity(address, chain_ids) {
      return this.checkAddressChainsValidityWithHttpInfo(address, chain_ids).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Check address validity
     * This operation verifies if a given address is valid for a specific chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} address The wallet address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CheckAddressValidity200Response} and HTTP response
     */
  }, {
    key: "checkAddressValidityWithHttpInfo",
    value: function checkAddressValidityWithHttpInfo(chain_id, address) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'chain_id' is set
      if (chain_id === undefined || chain_id === null) {
        throw new Error("Missing the required parameter 'chain_id' when calling checkAddressValidity");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling checkAddressValidity");
      }
      var pathParams = {};
      var queryParams = {
        'chain_id': chain_id,
        'address': address
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CheckAddressValidity200Response["default"];
      return this.apiClient.callApi('/wallets/check_address_validity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Check address validity
     * This operation verifies if a given address is valid for a specific chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} address The wallet address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckAddressValidity200Response}
     */
  }, {
    key: "checkAddressValidity",
    value: function checkAddressValidity(chain_id, address) {
      return this.checkAddressValidityWithHttpInfo(chain_id, address).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Check addresses validity
     * This operation verifies if given addresses are valid for a specific chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} addresses A list of wallet addresses, separated by comma. You can specify a maximum of 100 addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CheckAddressesValidity200ResponseInner>} and HTTP response
     */
  }, {
    key: "checkAddressesValidityWithHttpInfo",
    value: function checkAddressesValidityWithHttpInfo(chain_id, addresses) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'chain_id' is set
      if (chain_id === undefined || chain_id === null) {
        throw new Error("Missing the required parameter 'chain_id' when calling checkAddressesValidity");
      }
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling checkAddressesValidity");
      }
      var pathParams = {};
      var queryParams = {
        'chain_id': chain_id,
        'addresses': addresses
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CheckAddressesValidity200ResponseInner["default"]];
      return this.apiClient.callApi('/wallets/check_addresses_validity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Check addresses validity
     * This operation verifies if given addresses are valid for a specific chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} addresses A list of wallet addresses, separated by comma. You can specify a maximum of 100 addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CheckAddressesValidity200ResponseInner>}
     */
  }, {
    key: "checkAddressesValidity",
    value: function checkAddressesValidity(chain_id, addresses) {
      return this.checkAddressesValidityWithHttpInfo(chain_id, addresses).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create addresses in wallet
     * This operation generates one or more addresses within a specified wallet.  <Note>This operation is applicable to Custodial Wallets and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAddressRequest} [CreateAddressRequest] The request body to generates addresses within a specified wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AddressInfo>} and HTTP response
     */
  }, {
    key: "createAddressWithHttpInfo",
    value: function createAddressWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['CreateAddressRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling createAddress");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_AddressInfo["default"]];
      return this.apiClient.callApi('/wallets/{wallet_id}/addresses', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create addresses in wallet
     * This operation generates one or more addresses within a specified wallet.  <Note>This operation is applicable to Custodial Wallets and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAddressRequest} opts.CreateAddressRequest The request body to generates addresses within a specified wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AddressInfo>}
     */
  }, {
    key: "createAddress",
    value: function createAddress(wallet_id, opts) {
      return this.createAddressWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create token listing request
     * This operation creates a token listing request. The token to be listed must already be deployed on the specified blockchain and have a valid contract address.  <note>Currently, tokens listed through this operation are only supported in wallets of type `Custodial` or `MPC`, and subtype `Asset`, `Web3`, or `Org-Controlled`.</note> 
     * @param {module:model/CreateTokenListingRequestRequest} CreateTokenListingRequestRequest Request body for submitting a token listing request. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTokenListingRequest201Response} and HTTP response
     */
  }, {
    key: "createTokenListingRequestWithHttpInfo",
    value: function createTokenListingRequestWithHttpInfo(CreateTokenListingRequestRequest) {
      var postBody = CreateTokenListingRequestRequest;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'CreateTokenListingRequestRequest' is set
      if (CreateTokenListingRequestRequest === undefined || CreateTokenListingRequestRequest === null) {
        throw new Error("Missing the required parameter 'CreateTokenListingRequestRequest' when calling createTokenListingRequest");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTokenListingRequest201Response["default"];
      return this.apiClient.callApi('/wallets/tokens/listing_requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create token listing request
     * This operation creates a token listing request. The token to be listed must already be deployed on the specified blockchain and have a valid contract address.  <note>Currently, tokens listed through this operation are only supported in wallets of type `Custodial` or `MPC`, and subtype `Asset`, `Web3`, or `Org-Controlled`.</note> 
     * @param {module:model/CreateTokenListingRequestRequest} CreateTokenListingRequestRequest Request body for submitting a token listing request. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTokenListingRequest201Response}
     */
  }, {
    key: "createTokenListingRequest",
    value: function createTokenListingRequest(CreateTokenListingRequestRequest) {
      return this.createTokenListingRequestWithHttpInfo(CreateTokenListingRequestRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create wallet
     * This operation creates a wallet with the provided information.  <Note>This operation is not applicable to Smart Contract Wallets.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWalletParams} [CreateWalletParams] The request body to create a wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatedWalletInfo} and HTTP response
     */
  }, {
    key: "createWalletWithHttpInfo",
    value: function createWalletWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['CreateWalletParams'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreatedWalletInfo["default"];
      return this.apiClient.callApi('/wallets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create wallet
     * This operation creates a wallet with the provided information.  <Note>This operation is not applicable to Smart Contract Wallets.</Note> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWalletParams} opts.CreateWalletParams The request body to create a wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatedWalletInfo}
     */
  }, {
    key: "createWallet",
    value: function createWallet(opts) {
      return this.createWalletWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete wallet
     * This operation deletes a specified wallet.  <Note>This operation is applicable to Exchange Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteWalletById201Response} and HTTP response
     */
  }, {
    key: "deleteWalletByIdWithHttpInfo",
    value: function deleteWalletByIdWithHttpInfo(wallet_id) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling deleteWalletById");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteWalletById201Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete wallet
     * This operation deletes a specified wallet.  <Note>This operation is applicable to Exchange Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteWalletById201Response}
     */
  }, {
    key: "deleteWalletById",
    value: function deleteWalletById(wallet_id) {
      return this.deleteWalletByIdWithHttpInfo(wallet_id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get chain information
     * This operation retrieves the detailed information about a specified chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChainInfo} and HTTP response
     */
  }, {
    key: "getChainByIdWithHttpInfo",
    value: function getChainByIdWithHttpInfo(chain_id) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'chain_id' is set
      if (chain_id === undefined || chain_id === null) {
        throw new Error("Missing the required parameter 'chain_id' when calling getChainById");
      }
      var pathParams = {
        'chain_id': chain_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChainInfo["default"];
      return this.apiClient.callApi('/wallets/chains/{chain_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get chain information
     * This operation retrieves the detailed information about a specified chain. 
     * @param {String} chain_id The chain ID, which is the unique identifier of a blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChainInfo}
     */
  }, {
    key: "getChainById",
    value: function getChainById(chain_id) {
      return this.getChainByIdWithHttpInfo(chain_id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get maximum transferable value
     * This operation retrieves the maximum amount that you can transfer from a wallet or a specified wallet address, along with the corresponding transaction fee.  You must specify `to_address` in your query because it affects the transaction fee.  <Note>This operation is applicable to Custodial Wallets and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {String} fee_rate The fee rate in sats/vByte or gas price in wei.
     * @param {String} to_address The recipient's address.
     * @param {Object} opts Optional parameters
     * @param {String} [from_address] The sender's address. For EVM addresses in MPC Wallets, this parameter is required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MaxTransferableValue} and HTTP response
     */
  }, {
    key: "getMaxTransferableValueWithHttpInfo",
    value: function getMaxTransferableValueWithHttpInfo(wallet_id, token_id, fee_rate, to_address, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling getMaxTransferableValue");
      }
      // verify the required parameter 'token_id' is set
      if (token_id === undefined || token_id === null) {
        throw new Error("Missing the required parameter 'token_id' when calling getMaxTransferableValue");
      }
      // verify the required parameter 'fee_rate' is set
      if (fee_rate === undefined || fee_rate === null) {
        throw new Error("Missing the required parameter 'fee_rate' when calling getMaxTransferableValue");
      }
      // verify the required parameter 'to_address' is set
      if (to_address === undefined || to_address === null) {
        throw new Error("Missing the required parameter 'to_address' when calling getMaxTransferableValue");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {
        'token_id': token_id,
        'fee_rate': fee_rate,
        'to_address': to_address,
        'from_address': opts['from_address']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MaxTransferableValue["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/max_transferable_value', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get maximum transferable value
     * This operation retrieves the maximum amount that you can transfer from a wallet or a specified wallet address, along with the corresponding transaction fee.  You must specify `to_address` in your query because it affects the transaction fee.  <Note>This operation is applicable to Custodial Wallets and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {String} fee_rate The fee rate in sats/vByte or gas price in wei.
     * @param {String} to_address The recipient's address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.from_address The sender's address. For EVM addresses in MPC Wallets, this parameter is required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MaxTransferableValue}
     */
  }, {
    key: "getMaxTransferableValue",
    value: function getMaxTransferableValue(wallet_id, token_id, fee_rate, to_address, opts) {
      return this.getMaxTransferableValueWithHttpInfo(wallet_id, token_id, fee_rate, to_address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Estimate maximum transferable value
     * This operation estimates the maximum transferable value from a wallet or a specific wallet address, based on the specified fee settings.  The `to_address` property is required because it affects the fee calculation.  <Note>This operation is applicable to Custodial Wallets (Web3 Wallets) and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetMaxTransferableValueWithFeeModelRequest} [GetMaxTransferableValueWithFeeModelRequest] The request body for retrieving the maximum transferable value from a specified wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MaxTransferableValue} and HTTP response
     */
  }, {
    key: "getMaxTransferableValueWithFeeModelWithHttpInfo",
    value: function getMaxTransferableValueWithFeeModelWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['GetMaxTransferableValueWithFeeModelRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling getMaxTransferableValueWithFeeModel");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MaxTransferableValue["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/max_transferable_value_with_fee_model', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Estimate maximum transferable value
     * This operation estimates the maximum transferable value from a wallet or a specific wallet address, based on the specified fee settings.  The `to_address` property is required because it affects the fee calculation.  <Note>This operation is applicable to Custodial Wallets (Web3 Wallets) and MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetMaxTransferableValueWithFeeModelRequest} opts.GetMaxTransferableValueWithFeeModelRequest The request body for retrieving the maximum transferable value from a specified wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MaxTransferableValue}
     */
  }, {
    key: "getMaxTransferableValueWithFeeModel",
    value: function getMaxTransferableValueWithFeeModel(wallet_id, opts) {
      return this.getMaxTransferableValueWithFeeModelWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get token information
     * This operation retrieves the detailed information about a specified token. 
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtendedTokenInfo} and HTTP response
     */
  }, {
    key: "getTokenByIdWithHttpInfo",
    value: function getTokenByIdWithHttpInfo(token_id) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'token_id' is set
      if (token_id === undefined || token_id === null) {
        throw new Error("Missing the required parameter 'token_id' when calling getTokenById");
      }
      var pathParams = {
        'token_id': token_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExtendedTokenInfo["default"];
      return this.apiClient.callApi('/wallets/tokens/{token_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get token information
     * This operation retrieves the detailed information about a specified token. 
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtendedTokenInfo}
     */
  }, {
    key: "getTokenById",
    value: function getTokenById(token_id) {
      return this.getTokenByIdWithHttpInfo(token_id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get token listing request
     * This operation retrieves detailed information about a specific token listing request, including its current status. 
     * @param {String} request_id The unique identifier of the token listing request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenListing} and HTTP response
     */
  }, {
    key: "getTokenListingRequestByRequestIdWithHttpInfo",
    value: function getTokenListingRequestByRequestIdWithHttpInfo(request_id) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'request_id' is set
      if (request_id === undefined || request_id === null) {
        throw new Error("Missing the required parameter 'request_id' when calling getTokenListingRequestByRequestId");
      }
      var pathParams = {
        'request_id': request_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenListing["default"];
      return this.apiClient.callApi('/wallets/tokens/listing_requests/{request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get token listing request
     * This operation retrieves detailed information about a specific token listing request, including its current status. 
     * @param {String} request_id The unique identifier of the token listing request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenListing}
     */
  }, {
    key: "getTokenListingRequestByRequestId",
    value: function getTokenListingRequestByRequestId(request_id) {
      return this.getTokenListingRequestByRequestIdWithHttpInfo(request_id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get wallet information
     * This operation retrieves the detailed information about a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletInfo} and HTTP response
     */
  }, {
    key: "getWalletByIdWithHttpInfo",
    value: function getWalletByIdWithHttpInfo(wallet_id) {
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling getWalletById");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WalletInfo["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get wallet information
     * This operation retrieves the detailed information about a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletInfo}
     */
  }, {
    key: "getWalletById",
    value: function getWalletById(wallet_id) {
      return this.getWalletByIdWithHttpInfo(wallet_id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List address balances by token
     * This operation retrieves a list of address balances for a specified token within a wallet.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @param {Object} opts Optional parameters
     * @param {String} [addresses] A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAddressBalancesByToken200Response} and HTTP response
     */
  }, {
    key: "listAddressBalancesByTokenWithHttpInfo",
    value: function listAddressBalancesByTokenWithHttpInfo(wallet_id, token_id, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listAddressBalancesByToken");
      }
      // verify the required parameter 'token_id' is set
      if (token_id === undefined || token_id === null) {
        throw new Error("Missing the required parameter 'token_id' when calling listAddressBalancesByToken");
      }
      var pathParams = {
        'wallet_id': wallet_id,
        'token_id': token_id
      };
      var queryParams = {
        'addresses': opts['addresses'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAddressBalancesByToken200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/tokens/{token_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List address balances by token
     * This operation retrieves a list of address balances for a specified token within a wallet.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.addresses A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddressBalancesByToken200Response}
     */
  }, {
    key: "listAddressBalancesByToken",
    value: function listAddressBalancesByToken(wallet_id, token_id, opts) {
      return this.listAddressBalancesByTokenWithHttpInfo(wallet_id, token_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List wallet addresses
     * This operation retrieves a list of addresses within a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [addresses] A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAddresses200Response} and HTTP response
     */
  }, {
    key: "listAddressesWithHttpInfo",
    value: function listAddressesWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listAddresses");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {
        'chain_ids': opts['chain_ids'],
        'addresses': opts['addresses'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAddresses200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List wallet addresses
     * This operation retrieves a list of addresses within a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.addresses A list of wallet addresses, separated by comma. For addresses requiring a memo, append the memo after the address using the '|' separator (e.g., \"address|memo\").
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddresses200Response}
     */
  }, {
    key: "listAddresses",
    value: function listAddresses(wallet_id, opts) {
      return this.listAddressesWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List enabled chains
     * This operation retrieves all the chains that can be used by your organization.   You can filter the result by wallet type or subtype. If you do not specify a wallet type, this operation returns a combination of chains that can be used by your organization for each wallet type. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} [wallet_type] The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} [wallet_subtype] The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedChains200Response} and HTTP response
     */
  }, {
    key: "listEnabledChainsWithHttpInfo",
    value: function listEnabledChainsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'wallet_type': opts['wallet_type'],
        'wallet_subtype': opts['wallet_subtype'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSupportedChains200Response["default"];
      return this.apiClient.callApi('/wallets/enabled_chains', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List enabled chains
     * This operation retrieves all the chains that can be used by your organization.   You can filter the result by wallet type or subtype. If you do not specify a wallet type, this operation returns a combination of chains that can be used by your organization for each wallet type. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} opts.wallet_type The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} opts.wallet_subtype The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedChains200Response}
     */
  }, {
    key: "listEnabledChains",
    value: function listEnabledChains(opts) {
      return this.listEnabledChainsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List enabled tokens
     * This operation retrieves all the tokens that can be used by your organization.   You can filter the result by wallet type, subtype, chain IDs, and token IDs. If you do not specify a wallet type, this operation returns a combination of tokens that can be used by your organization for each wallet type. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} [wallet_type] The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} [wallet_subtype] The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedTokens200Response} and HTTP response
     */
  }, {
    key: "listEnabledTokensWithHttpInfo",
    value: function listEnabledTokensWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'wallet_type': opts['wallet_type'],
        'wallet_subtype': opts['wallet_subtype'],
        'chain_ids': opts['chain_ids'],
        'token_ids': opts['token_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSupportedTokens200Response["default"];
      return this.apiClient.callApi('/wallets/enabled_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List enabled tokens
     * This operation retrieves all the tokens that can be used by your organization.   You can filter the result by wallet type, subtype, chain IDs, and token IDs. If you do not specify a wallet type, this operation returns a combination of tokens that can be used by your organization for each wallet type. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} opts.wallet_type The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} opts.wallet_subtype The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedTokens200Response}
     */
  }, {
    key: "listEnabledTokens",
    value: function listEnabledTokens(opts) {
      return this.listEnabledTokensWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List supported chains
     * This operation retrieves all chains supported by a specific wallet type or subtype.   It provides details such as the chain ID, chain symbol, and other relevant information. If you do not specify a wallet type, this operation returns a combination of chains supported by each wallet type. You can filter the result by chain IDs. The chain metadata is publicly available without any permission restrictions.  Cobo Portal currently supports over 80 blockchains and more than 3,000 tokens. In addition to this operation, you can also view the full list of supported chains [here](https://www.cobo.com/chains). We regularly update the list with new additions. If you want to request support for a specific chain or token, please [contact us](https://www.cobo.com/contact). 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} [wallet_type] The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} [wallet_subtype] The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedChains200Response} and HTTP response
     */
  }, {
    key: "listSupportedChainsWithHttpInfo",
    value: function listSupportedChainsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'wallet_type': opts['wallet_type'],
        'wallet_subtype': opts['wallet_subtype'],
        'chain_ids': opts['chain_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSupportedChains200Response["default"];
      return this.apiClient.callApi('/wallets/chains', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List supported chains
     * This operation retrieves all chains supported by a specific wallet type or subtype.   It provides details such as the chain ID, chain symbol, and other relevant information. If you do not specify a wallet type, this operation returns a combination of chains supported by each wallet type. You can filter the result by chain IDs. The chain metadata is publicly available without any permission restrictions.  Cobo Portal currently supports over 80 blockchains and more than 3,000 tokens. In addition to this operation, you can also view the full list of supported chains [here](https://www.cobo.com/chains). We regularly update the list with new additions. If you want to request support for a specific chain or token, please [contact us](https://www.cobo.com/contact). 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} opts.wallet_type The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} opts.wallet_subtype The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedChains200Response}
     */
  }, {
    key: "listSupportedChains",
    value: function listSupportedChains(opts) {
      return this.listSupportedChainsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List supported tokens
     * This operation retrieves all tokens supported by a specific wallet type or subtype.   It provides details such as token ID, token symbol, and other relevant information. If you do not specify a wallet type, this operation returns a combination of tokens supported by each wallet type. You can filter the result by token IDs or chain IDs. The token metadata is publicly available without any permission restrictions.  Cobo Portal currently supports over 80 blockchains and more than 3,000 tokens. In addition to this operation, you can also view the full list of supported tokens [here](https://www.cobo.com/tokens). We regularly update the list with new additions. If you want to request support for a specific chain or token, please [contact us](https://www.cobo.com/contact). 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} [wallet_type] The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} [wallet_subtype] The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} [chain_ids] A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedTokens200Response} and HTTP response
     */
  }, {
    key: "listSupportedTokensWithHttpInfo",
    value: function listSupportedTokensWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'wallet_type': opts['wallet_type'],
        'wallet_subtype': opts['wallet_subtype'],
        'chain_ids': opts['chain_ids'],
        'token_ids': opts['token_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSupportedTokens200Response["default"];
      return this.apiClient.callApi('/wallets/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List supported tokens
     * This operation retrieves all tokens supported by a specific wallet type or subtype.   It provides details such as token ID, token symbol, and other relevant information. If you do not specify a wallet type, this operation returns a combination of tokens supported by each wallet type. You can filter the result by token IDs or chain IDs. The token metadata is publicly available without any permission restrictions.  Cobo Portal currently supports over 80 blockchains and more than 3,000 tokens. In addition to this operation, you can also view the full list of supported tokens [here](https://www.cobo.com/tokens). We regularly update the list with new additions. If you want to request support for a specific chain or token, please [contact us](https://www.cobo.com/contact). 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} opts.wallet_type The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} opts.wallet_subtype The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} opts.chain_ids A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedTokens200Response}
     */
  }, {
    key: "listSupportedTokens",
    value: function listSupportedTokens(opts) {
      return this.listSupportedTokensWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List token balances by address
     * The operation retrieves a list of token balances for a specified address within a wallet.   <Note>This operation is applicable to MPC Wallets and Smart Contract Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} address The wallet address.
     * @param {Object} opts Optional parameters
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokenBalancesForAddress200Response} and HTTP response
     */
  }, {
    key: "listTokenBalancesForAddressWithHttpInfo",
    value: function listTokenBalancesForAddressWithHttpInfo(wallet_id, address, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listTokenBalancesForAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listTokenBalancesForAddress");
      }
      var pathParams = {
        'wallet_id': wallet_id,
        'address': address
      };
      var queryParams = {
        'token_ids': opts['token_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokenBalancesForAddress200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/addresses/{address}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List token balances by address
     * The operation retrieves a list of token balances for a specified address within a wallet.   <Note>This operation is applicable to MPC Wallets and Smart Contract Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} address The wallet address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokenBalancesForAddress200Response}
     */
  }, {
    key: "listTokenBalancesForAddress",
    value: function listTokenBalancesForAddress(wallet_id, address, opts) {
      return this.listTokenBalancesForAddressWithHttpInfo(wallet_id, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List token balances by wallet
     * The operation retrieves a list of token balances within a specified wallet.  <Note>This operation is not applicable to Exchange Wallets.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} [token_ids] A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokenBalancesForAddress200Response} and HTTP response
     */
  }, {
    key: "listTokenBalancesForWalletWithHttpInfo",
    value: function listTokenBalancesForWalletWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listTokenBalancesForWallet");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {
        'token_ids': opts['token_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokenBalancesForAddress200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List token balances by wallet
     * The operation retrieves a list of token balances within a specified wallet.  <Note>This operation is not applicable to Exchange Wallets.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.token_ids A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokenBalancesForAddress200Response}
     */
  }, {
    key: "listTokenBalancesForWallet",
    value: function listTokenBalancesForWallet(wallet_id, opts) {
      return this.listTokenBalancesForWalletWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List token listing requests
     * This operation lists all token listing requests in your organization. You can filter the results by request status. 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @param {module:model/TokenListingRequestStatus} [status] The current status of the token listing request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokenListingRequests200Response} and HTTP response
     */
  }, {
    key: "listTokenListingRequestsWithHttpInfo",
    value: function listTokenListingRequestsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after'],
        'status': opts['status']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTokenListingRequests200Response["default"];
      return this.apiClient.callApi('/wallets/tokens/listing_requests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List token listing requests
     * This operation lists all token listing requests in your organization. You can filter the results by request status. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @param {module:model/TokenListingRequestStatus} opts.status The current status of the token listing request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokenListingRequests200Response}
     */
  }, {
    key: "listTokenListingRequests",
    value: function listTokenListingRequests(opts) {
      return this.listTokenListingRequestsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List UTXOs
     * The operation retrieves a list of unspent transaction outputs (UTXOs) for a specified wallet and token.  <Note>This operation is applicable to MPC Wallets and Custodial Wallets (Web3 Wallets) only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Object} opts Optional parameters
     * @param {String} [address] The wallet address.
     * @param {String} [tx_hash] 
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUtxos200Response} and HTTP response
     */
  }, {
    key: "listUtxosWithHttpInfo",
    value: function listUtxosWithHttpInfo(wallet_id, token_id, opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listUtxos");
      }
      // verify the required parameter 'token_id' is set
      if (token_id === undefined || token_id === null) {
        throw new Error("Missing the required parameter 'token_id' when calling listUtxos");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {
        'token_id': token_id,
        'address': opts['address'],
        'tx_hash': opts['tx_hash'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListUtxos200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/utxos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List UTXOs
     * The operation retrieves a list of unspent transaction outputs (UTXOs) for a specified wallet and token.  <Note>This operation is applicable to MPC Wallets and Custodial Wallets (Web3 Wallets) only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param {Object} opts Optional parameters
     * @param {String} opts.address The wallet address.
     * @param {String} opts.tx_hash 
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUtxos200Response}
     */
  }, {
    key: "listUtxos",
    value: function listUtxos(wallet_id, token_id, opts) {
      return this.listUtxosWithHttpInfo(wallet_id, token_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all wallets
     * This operation retrieves the information of all wallets under your organization. You can filter the result by wallet type and subtype. For MPC Wallets, you can also filter by project ID and vault ID. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} [wallet_type] The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} [wallet_subtype] The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} [project_id] The project ID, which you can retrieve by calling [List all projects](https://www.cobo.com/developers/v2/api-references/wallets--mpc-wallets/list-all-projects). 
     * @param {String} [vault_id] The vault ID, which you can retrieve by calling [List all vaults](https://www.cobo.com/developers/v2/api-references/wallets--mpc-wallets/list-all-vaults).
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} [after] A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListWallets200Response} and HTTP response
     */
  }, {
    key: "listWalletsWithHttpInfo",
    value: function listWalletsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      var pathParams = {};
      var queryParams = {
        'wallet_type': opts['wallet_type'],
        'wallet_subtype': opts['wallet_subtype'],
        'project_id': opts['project_id'],
        'vault_id': opts['vault_id'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListWallets200Response["default"];
      return this.apiClient.callApi('/wallets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List all wallets
     * This operation retrieves the information of all wallets under your organization. You can filter the result by wallet type and subtype. For MPC Wallets, you can also filter by project ID and vault ID. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletType} opts.wallet_type The wallet type.  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param {module:model/WalletSubtype} opts.wallet_subtype The wallet subtype.  - `Asset`: Custodial Wallets (Asset Wallets)  - `Web3`: Custodial Wallets (Web3 Wallets)  - `Main`: Exchange Wallets (Main Account)  - `Sub`: Exchange Wallets (Sub Account)  - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets)  - `User-Controlled`: MPC Wallets (User-Controlled Wallets)  - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}) 
     * @param {String} opts.project_id The project ID, which you can retrieve by calling [List all projects](https://www.cobo.com/developers/v2/api-references/wallets--mpc-wallets/list-all-projects). 
     * @param {String} opts.vault_id The vault ID, which you can retrieve by calling [List all vaults](https://www.cobo.com/developers/v2/api-references/wallets--mpc-wallets/list-all-vaults).
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response. 
     * @param {String} opts.after A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListWallets200Response}
     */
  }, {
    key: "listWallets",
    value: function listWallets(opts) {
      return this.listWalletsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Lock UTXOs
     * This operation locks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockUtxosRequest} [LockUtxosRequest] The request body of the Lock/Unlock UTXOs operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LockUtxos201Response} and HTTP response
     */
  }, {
    key: "lockUtxosWithHttpInfo",
    value: function lockUtxosWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['LockUtxosRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling lockUtxos");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LockUtxos201Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/utxos/lock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Lock UTXOs
     * This operation locks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockUtxosRequest} opts.LockUtxosRequest The request body of the Lock/Unlock UTXOs operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LockUtxos201Response}
     */
  }, {
    key: "lockUtxos",
    value: function lockUtxos(wallet_id, opts) {
      return this.lockUtxosWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Refresh address balances by token
     * This operation refreshes the balances of specified addresses for a given token within a wallet.  The successful return of the request only means that the refresh request has been submitted.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @param {Object} opts Optional parameters
     * @param {module:model/RefreshAddressBalancesByTokenRequest} [RefreshAddressBalancesByTokenRequest] The request body to refresh addresses balances.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RefreshAddressBalancesByToken200Response} and HTTP response
     */
  }, {
    key: "refreshAddressBalancesByTokenWithHttpInfo",
    value: function refreshAddressBalancesByTokenWithHttpInfo(wallet_id, token_id, opts) {
      opts = opts || {};
      var postBody = opts['RefreshAddressBalancesByTokenRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling refreshAddressBalancesByToken");
      }
      // verify the required parameter 'token_id' is set
      if (token_id === undefined || token_id === null) {
        throw new Error("Missing the required parameter 'token_id' when calling refreshAddressBalancesByToken");
      }
      var pathParams = {
        'wallet_id': wallet_id,
        'token_id': token_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RefreshAddressBalancesByToken200Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/tokens/{token_id}/refresh_address_balances', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Refresh address balances by token
     * This operation refreshes the balances of specified addresses for a given token within a wallet.  The successful return of the request only means that the refresh request has been submitted.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {String} token_id The token ID, which is the unique identifier of a token.
     * @param {Object} opts Optional parameters
     * @param {module:model/RefreshAddressBalancesByTokenRequest} opts.RefreshAddressBalancesByTokenRequest The request body to refresh addresses balances.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RefreshAddressBalancesByToken200Response}
     */
  }, {
    key: "refreshAddressBalancesByToken",
    value: function refreshAddressBalancesByToken(wallet_id, token_id, opts) {
      return this.refreshAddressBalancesByTokenWithHttpInfo(wallet_id, token_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unlock UTXOs
     * This operation unlocks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockUtxosRequest} [LockUtxosRequest] The request body of the Lock/Unlock UTXOs operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LockUtxos201Response} and HTTP response
     */
  }, {
    key: "unlockUtxosWithHttpInfo",
    value: function unlockUtxosWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['LockUtxosRequest'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling unlockUtxos");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2', 'CoboAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LockUtxos201Response["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}/utxos/unlock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unlock UTXOs
     * This operation unlocks the UTXOs with specified transaction hashes. Locked UTXOs cannot be transferred until unlocked.  <Note>This operation is applicable to MPC Wallets only.</Note> 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/LockUtxosRequest} opts.LockUtxosRequest The request body of the Lock/Unlock UTXOs operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LockUtxos201Response}
     */
  }, {
    key: "unlockUtxos",
    value: function unlockUtxos(wallet_id, opts) {
      return this.unlockUtxosWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update wallet
     * This operation updates the information of a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWalletParams} [UpdateWalletParams] The request body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletInfo} and HTTP response
     */
  }, {
    key: "updateWalletByIdWithHttpInfo",
    value: function updateWalletByIdWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      var postBody = opts['UpdateWalletParams'];
      if (postBody && postBody.toJSON) {
        postBody = postBody.toJSON();
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling updateWalletById");
      }
      var pathParams = {
        'wallet_id': wallet_id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WalletInfo["default"];
      return this.apiClient.callApi('/wallets/{wallet_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update wallet
     * This operation updates the information of a specified wallet. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWalletParams} opts.UpdateWalletParams The request body.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletInfo}
     */
  }, {
    key: "updateWalletById",
    value: function updateWalletById(wallet_id, opts) {
      return this.updateWalletByIdWithHttpInfo(wallet_id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();