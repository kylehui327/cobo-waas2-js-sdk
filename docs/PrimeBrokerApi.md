# CoboWaas2.PrimeBrokerApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeGuardPubkey**](PrimeBrokerApi.md#changeGuardPubkey) | **PUT** /prime_broker/user/{user_id}/guard_pubkey | change a user guard pubkey
[**createGuardPubkey**](PrimeBrokerApi.md#createGuardPubkey) | **POST** /prime_broker/user/{user_id}/guard_pubkey | create a guard pubkey binding
[**createPrimeBrokerAddress**](PrimeBrokerApi.md#createPrimeBrokerAddress) | **POST** /prime_broker/user/{user_id}/addresses | bind addresses to a broker user
[**deleteGuardPubkey**](PrimeBrokerApi.md#deleteGuardPubkey) | **POST** /prime_broker/user/{user_id}/guard_pubkey/delete | delete a user guard pubkey
[**queryApprovalStatement**](PrimeBrokerApi.md#queryApprovalStatement) | **GET** /prime_broker/approval_statement/{statement_id} | query a approval statement
[**queryGuardPubkey**](PrimeBrokerApi.md#queryGuardPubkey) | **GET** /prime_broker/user/{user_id}/guard_pubkey | query a user guard pubkey



## changeGuardPubkey

> ChangeGuardPubkey200Response changeGuardPubkey(user_id)

change a user guard pubkey

This operation change a user guard pubkey. 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const user_id = "168108513539918";
apiInstance.changeGuardPubkey(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| user id. | 

### Return type

[**ChangeGuardPubkey200Response**](ChangeGuardPubkey200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createGuardPubkey

> ChangeGuardPubkey200Response createGuardPubkey(user_id)

create a guard pubkey binding

This operation create a guard pubkey binding. 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const user_id = "168108513539918";
apiInstance.createGuardPubkey(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| user id. | 

### Return type

[**ChangeGuardPubkey200Response**](ChangeGuardPubkey200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createPrimeBrokerAddress

> CreatePrimeBrokerAddress201Response createPrimeBrokerAddress(user_id, opts)

bind addresses to a broker user

This operation bind addresses to a broker user. 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const user_id = "168108513539918";
const opts = {
  'CreatePrimeBrokerAddressRequest': new CoboWaas2.CreatePrimeBrokerAddressRequest()
};
apiInstance.createPrimeBrokerAddress(user_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| user id. | 
 **CreatePrimeBrokerAddressRequest** | [**CreatePrimeBrokerAddressRequest**](CreatePrimeBrokerAddressRequest.md)| The request body to binding addresses to a broker user. | [optional] 

### Return type

[**CreatePrimeBrokerAddress201Response**](CreatePrimeBrokerAddress201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGuardPubkey

> DeleteGuardPubkey201Response deleteGuardPubkey(user_id)

delete a user guard pubkey

This operation delete a user guard pubkey. 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const user_id = "168108513539918";
apiInstance.deleteGuardPubkey(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| user id. | 

### Return type

[**DeleteGuardPubkey201Response**](DeleteGuardPubkey201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryApprovalStatement

> QueryApprovalStatement200Response queryApprovalStatement(statement_id)

query a approval statement

This operation query a approval statement. 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const statement_id = "168108513539918";
apiInstance.queryApprovalStatement(statement_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statement_id** | **String**| approval statement id. | 

### Return type

[**QueryApprovalStatement200Response**](QueryApprovalStatement200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryGuardPubkey

> QueryGuardPubkey200Response queryGuardPubkey(user_id)

query a user guard pubkey

This operation query a user guard pubkey 

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
const apiInstance = new CoboWaas2.PrimeBrokerApi();
const user_id = "168108513539918";
apiInstance.queryGuardPubkey(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**| user id. | 

### Return type

[**QueryGuardPubkey200Response**](QueryGuardPubkey200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

