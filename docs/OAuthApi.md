# CoboWaas2.OAuthApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchangePermissionToken**](OAuthApi.md#exchangePermissionToken) | **POST** /oauth/permission_token/exchange | Exchange Permission Access Token by API Key
[**getToken**](OAuthApi.md#getToken) | **GET** /oauth/token | Get Org Access Token
[**refreshPermissionToken**](OAuthApi.md#refreshPermissionToken) | **POST** /oauth/permission_token/refresh | Refresh Permission Access Token by Permission Refresh Token
[**refreshToken**](OAuthApi.md#refreshToken) | **POST** /oauth/token | Refresh Org Access Token



## exchangePermissionToken

> ExchangePermissionToken201Response exchangePermissionToken(ExchangePermissionTokenRequest)

Exchange Permission Access Token by API Key

&lt;Note&gt;This operation is only applicable to Cobo Portal Checkout SDK developers. To call this operation, you need to use the Cobo OAuth authentication method that requires an api key.&lt;/Note&gt; This operation allows Portal Checkout SDK to obtain a new Permission Access Token with a specified client ID, grant type and a Permission Refresh Token.   For security purposes, Permission Access Tokens expire after a certain period. Once they expire, the app needs to call this operation to get a new Permission Access Token and a new Permission Refresh Token. 

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
const apiInstance = new CoboWaas2.OAuthApi();
const ExchangePermissionTokenRequest = new CoboWaas2.ExchangePermissionTokenRequest();
apiInstance.exchangePermissionToken(ExchangePermissionTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExchangePermissionTokenRequest** | [**ExchangePermissionTokenRequest**](ExchangePermissionTokenRequest.md)| The request body for exchanging an Permission Access Token. | 

### Return type

[**ExchangePermissionToken201Response**](ExchangePermissionToken201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getToken

> GetToken2XXResponse getToken(client_id, org_id, grant_type)

Get Org Access Token

&lt;Note&gt;This operation is only applicable to Cobo Portal App developers. To call this operation, you need to use the Cobo OAuth authentication method that requires an app key.&lt;/Note&gt; This operation allows Cobo Portal Apps to get an Org Access Token and a Refresh Token with a specified client ID, organization ID, and grant type.   Access tokens allow the app to signal to the WaaS service that it has received permission to access specific resources of the app user&#39;s [organization](https://manuals.cobo.com/en/portal/organization/introduction). Once the app has been granted permission by the organization&#39;s admin, it can use this operation to obtain both an Org Access Token and a Refresh Token.  For security purposes, Org Access Tokens expire after a certain period. Once they expire, the app needs to call [Refresh token](https://www.cobo.com/developers/v2/api-references/oauth/refresh-org-access-token) to get a new Org Access Token and a new Refresh Token.  

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
const apiInstance = new CoboWaas2.OAuthApi();
const client_id = "pvSwS8iFrfK0oZrB0ugG54XPDOLEv0Ij";
const org_id = "e3986401-4aec-480a-973d-e775a4518413";
const grant_type = "org_implicit";
apiInstance.getToken(client_id, org_id, grant_type).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **String**| The client ID, a unique identifier to distinguish Cobo Portal Apps. You can get the client ID by retrieving the manifest file after publishing the app. | 
 **org_id** | **String**| Organization ID, a unique identifier to distinguish different organizations. You can get the organization ID from the callback message sent to the URL that was configured in the manifest file. | 
 **grant_type** | **String**| The OAuth grant type. Set the value as &#x60;org_implicit&#x60;. | 

### Return type

[**GetToken2XXResponse**](GetToken2XXResponse.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshPermissionToken

> ExchangePermissionToken201Response refreshPermissionToken(RefreshPermissionTokenRequest)

Refresh Permission Access Token by Permission Refresh Token

&lt;Note&gt;This operation is only applicable to Cobo Portal Checkout SDK developers. To call this operation, you need to use the Cobo OAuth authentication method that requires an api key.&lt;/Note&gt; This operation allows Portal Checkout SDK to refresh a new Permission Access Token with a specified client ID, grant type and a Permission Refresh Token.   For security purposes, Permission Access Tokens expire after a certain period. Once they expire, the app needs to call this operation to get a new Permission Access Token and a new Permission Refresh Token. 

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
const apiInstance = new CoboWaas2.OAuthApi();
const RefreshPermissionTokenRequest = new CoboWaas2.RefreshPermissionTokenRequest();
apiInstance.refreshPermissionToken(RefreshPermissionTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RefreshPermissionTokenRequest** | [**RefreshPermissionTokenRequest**](RefreshPermissionTokenRequest.md)| The request body for refreshing an Permission Access Token. | 

### Return type

[**ExchangePermissionToken201Response**](ExchangePermissionToken201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshToken

> RefreshToken2XXResponse refreshToken(RefreshTokenRequest)

Refresh Org Access Token

&lt;Note&gt;This operation is only applicable to Cobo Portal Apps developers. To call this operation, you need to use the Cobo OAuth authentication method that requires an app key.&lt;/Note&gt; This operation allows Cobo Portal Apps to obtain a new Org Access Token with a specified client ID, grant type and a Refresh Token.   For security purposes, Org Access Tokens expire after a certain period. Once they expire, the app needs to call this operation to get a new Org Access Token and a new Refresh Token.  

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
const apiInstance = new CoboWaas2.OAuthApi();
const RefreshTokenRequest = new CoboWaas2.RefreshTokenRequest();
apiInstance.refreshToken(RefreshTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RefreshTokenRequest** | [**RefreshTokenRequest**](RefreshTokenRequest.md)| The request body for refreshing an Org Access Token. | 

### Return type

[**RefreshToken2XXResponse**](RefreshToken2XXResponse.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

