# CoboWaas2.OAuthApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](OAuthApi.md#getToken) | **GET** /oauth/token | Get access token
[**refreshToken**](OAuthApi.md#refreshToken) | **POST** /oauth/token | Refresh access token



## getToken

> GetToken200Response getToken(client_id, org_id, grant_type)

Get access token

&lt;Note&gt;This operation is only applicable to Cobo Portal App developers. To call this operation, you need to use the OAuth authentication method that requires an app key.&lt;/Note&gt; This operation allows Cobo Portal Apps to get an access token and a refresh token with a specified App ID, Organization ID, and grant type.   Access tokens allow the app to signal to the WaaS service that it has received permission to access specific resources of the app user&#39;s [organization](https://manuals.cobo.com/en/portal/organization/introduction). Once the app has been granted permission by the organization&#39;s admin, it can use this operation to obtain both an access token and a refresh token.  For security purposes, access tokens expire after a certain period. Once they expire, the app needs to call [Refresh token](/v2/api-references/oauth/refresh-access-token) to get a new access token and a new refresh token.  

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
 **client_id** | **String**| The App ID, a unique identifier to distinguish Cobo Portal Apps. You can get the App ID by retrieving the Manifest file after receiving the notification of app launch approval. | 
 **org_id** | **String**| Organization ID, a unique identifier to distinguish different organizations. You can get the Organization ID by retrieving the Manifest file after receiving the notification of app launch approval. | 
 **grant_type** | **String**| The OAuth grant type. Set the value as &#x60;org_implicit&#x60;. | 

### Return type

[**GetToken200Response**](GetToken200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshToken

> RefreshToken200Response refreshToken(RefreshTokenRequest)

Refresh access token

&lt;Note&gt;This operation is only applicable to Cobo Portal Apps developers. To call this operation, you need to use the OAuth authentication method that requires an app key.&lt;/Note&gt; This operation allows Cobo Portal Apps to obtain a new access token with a specified App ID, grant type and a refresh token.   For security purposes, access tokens expire after a certain period. Once they expire, the app needs to call this operation to get a new access token and a new refresh token.  

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
 **RefreshTokenRequest** | [**RefreshTokenRequest**](RefreshTokenRequest.md)| The request body for refreshing an access token. | 

### Return type

[**RefreshToken200Response**](RefreshToken200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

