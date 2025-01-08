# CoboWaas2.TravelRuleApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionLimitation**](TravelRuleApi.md#getTransactionLimitation) | **GET** /travel_rule/transaction/limitation | Retrieve transaction limitations
[**listSupportedCountries**](TravelRuleApi.md#listSupportedCountries) | **GET** /travel_rule/transaction/countries | List supported countries
[**submitDepositTravelRuleInfo**](TravelRuleApi.md#submitDepositTravelRuleInfo) | **POST** /travel_rule/transaction/deposit/travel_rule_info | Submit Deposit Transaction Travel Rule information
[**submitWithdrawTravelRuleInfo**](TravelRuleApi.md#submitWithdrawTravelRuleInfo) | **POST** /travel_rule/transaction/withdraw/travel_rule_info | Submit Withdraw Transaction Travel Rule information



## getTransactionLimitation

> GetTransactionLimitation200Response getTransactionLimitation(transaction_type, transaction_id)

Retrieve transaction limitations

This endpoint retrieves transaction-related limitations based on the provided &#x60;transaction_type&#x60; and &#x60;transaction_id&#x60;.  The response includes the following information: - **&#x60;vasp_list&#x60;**: A list of Virtual Asset Service Providers (VASPs) associated with the transaction token. - **&#x60;is_threshold_reached&#x60;**: Indicates whether the transaction amount has exceeded the predefined threshold.    - If &#x60;true&#x60;: Additional Travel Rule information may be required for processing. - **&#x60;self_custody_wallet_challenge&#x60;**: A challenge string for verifying ownership of self-custody wallets. - **&#x60;connect_wallet_list&#x60;**: A list of supported wallet integrations for the transaction, such as MetaMask or WalletConnect.  Use this endpoint to ensure compliance with Travel Rule requirements and to retrieve supported options for completing the transaction. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TravelRuleApi();
const transaction_type = "DEPOSIT";
const transaction_id = "123e4567-e89b-12d3-a456-426614174000";
apiInstance.getTransactionLimitation(transaction_type, transaction_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_type** | **String**| The transaction type. Possible values include:    - &#x60;DEPOSIT&#x60;: A deposit transaction.   - &#x60;WITHDRAW&#x60;: A withdrawal transaction.  | 
 **transaction_id** | **String**| The transaction ID | 

### Return type

[**GetTransactionLimitation200Response**](GetTransactionLimitation200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSupportedCountries

> [ListSupportedCountries200ResponseInner] listSupportedCountries()

List supported countries

This operation retrieves all countries supported.

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TravelRuleApi();
apiInstance.listSupportedCountries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ListSupportedCountries200ResponseInner]**](ListSupportedCountries200ResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitDepositTravelRuleInfo

> SubmitDepositTravelRuleInfo201Response submitDepositTravelRuleInfo(opts)

Submit Deposit Transaction Travel Rule information

This operation allows you to submit the required Travel Rule information based on the transaction details. It supports both self-custody wallets and exchanges/VASPs, ensuring compliance with Travel Rule requirements.   - **Destination Wallet Type (&#x60;destination_wallet_type&#x60;)**:   - &#x60;SELF_CUSTODY_WALLET&#x60;: A self-custodial wallet (e.g., plugin wallet). Requires &#x60;self_custody_wallet_sign&#x60;, &#x60;self_custody_wallet_address&#x60;, and &#x60;self_custody_wallet_challenge&#x60;.   - &#x60;EXCHANGES_OR_VASP&#x60;: A wallet associated with an exchange or VASP. Requires &#x60;vendor_vasp_id&#x60; and information depending on &#x60;selected_entity_type&#x60;.  - **Entity Types (&#x60;selected_entity_type&#x60;)**:   - &#x60;LEGAL&#x60;: For legal entities, provide &#x60;legal_name&#x60;, &#x60;date_of_incorporation&#x60;, and &#x60;place_of_incorporation&#x60;.   - &#x60;NATURAL&#x60;: For natural persons, provide &#x60;date_of_birth&#x60;, &#x60;place_of_birth&#x60;, &#x60;first_name&#x60;, and &#x60;last_name&#x60;. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TravelRuleApi();
const opts = {
  'TravelRuleDepositRequest': new CoboWaas2.TravelRuleDepositRequest()
};
apiInstance.submitDepositTravelRuleInfo(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TravelRuleDepositRequest** | [**TravelRuleDepositRequest**](TravelRuleDepositRequest.md)|  | [optional] 

### Return type

[**SubmitDepositTravelRuleInfo201Response**](SubmitDepositTravelRuleInfo201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitWithdrawTravelRuleInfo

> SubmitDepositTravelRuleInfo201Response submitWithdrawTravelRuleInfo(opts)

Submit Withdraw Transaction Travel Rule information

This operation allows you to submit the required Travel Rule information based on the transaction details. It supports both self-custody wallets and exchanges/VASPs, ensuring compliance with Travel Rule requirements.   - **Destination Wallet Type (&#x60;destination_wallet_type&#x60;)**:   - &#x60;SELF_CUSTODY_WALLET&#x60;: A self-custodial wallet (e.g., plugin wallet). Requires &#x60;self_custody_wallet_sign&#x60;, &#x60;self_custody_wallet_address&#x60;, and &#x60;self_custody_wallet_challenge&#x60;.   - &#x60;EXCHANGES_OR_VASP&#x60;: A wallet associated with an exchange or VASP. Requires &#x60;vendor_vasp_id&#x60; and information depending on &#x60;selected_entity_type&#x60;.  - **Entity Types (&#x60;selected_entity_type&#x60;)**:   - &#x60;LEGAL&#x60;: For legal entities, provide &#x60;legal_name&#x60;.   - &#x60;NATURAL&#x60;: For natural persons, provide &#x60;date_of_birth&#x60;, &#x60;place_of_birth&#x60;, &#x60;first_name&#x60;, and &#x60;last_name&#x60;. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TravelRuleApi();
const opts = {
  'TravelRuleWithdrawRequest': new CoboWaas2.TravelRuleWithdrawRequest()
};
apiInstance.submitWithdrawTravelRuleInfo(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TravelRuleWithdrawRequest** | [**TravelRuleWithdrawRequest**](TravelRuleWithdrawRequest.md)|  | [optional] 

### Return type

[**SubmitDepositTravelRuleInfo201Response**](SubmitDepositTravelRuleInfo201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

