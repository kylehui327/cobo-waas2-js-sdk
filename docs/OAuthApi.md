# CoboWaas2.OAuthApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](OAuthApi.md#getToken) | **GET** /oauth/token | Get Access Token
[**refreshToken**](OAuthApi.md#refreshToken) | **POST** /oauth/token | Refresh Access Token



## getToken

> GetToken200Response getToken(client_id, org_id, grant_type)

Get Access Token

&lt;Note&gt;This operation is only applicable to Cobo Portal App developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.&lt;/Note&gt; This operation allows Cobo Portal Apps to get an access token and a refresh token with a specified App ID, Org ID, and grant type.   Access tokens allow the app to signal to the WaaS service that it has received permission from the organization admin to access specific resources. Once the app has been granted permission by an organization admin, it can use this operation to obtain both an access token and a refresh token.  For security purposes, access tokens expire after a certain period. Once they expire, the app need to [Refresh token](/v2/api-references/oauth/refresh-access-token) to get a new access token and a new fresh token. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.OAuthApi();
const client_id = "pvSwS8iFrfK0oZrB0ugG54XPDOLEv0Ij"; // String | The App ID, a unique identifier to distinguish Cobo Portal Apps. You can get the App ID by retrieving the Manifest file after receiving the notification of app launch approval.
const org_id = "e3986401-4aec-480a-973d-e775a4518413"; // String | Org ID, a unique identifier to distinguish different organizations. You can get the Org ID by retrieving the Manifest file after receiving the notification of app launch approval.
const grant_type = "org_implicit"; // String | The type of the permission granting. To get an access token, you need to set the value as `org_implicit`.
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
 **org_id** | **String**| Org ID, a unique identifier to distinguish different organizations. You can get the Org ID by retrieving the Manifest file after receiving the notification of app launch approval. | 
 **grant_type** | **String**| The type of the permission granting. To get an access token, you need to set the value as &#x60;org_implicit&#x60;. | 

### Return type

[**GetToken200Response**](GetToken200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshToken

> GetToken200Response refreshToken(RefreshTokenRequest)

Refresh Access Token

&lt;Note&gt;This operation is only applicable to Cobo Portal Apps developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.&lt;/Note&gt; This operation allows Cobo Portal Apps to obtain a new access token with a specified App ID, grant type and a refresh token. For security purposes, access tokens expire after a certain period. Once they expire, the app need to use this operation to get a new access token and a new fresh token. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.OAuthApi();
const RefreshTokenRequest = new CoboWaas2.RefreshTokenRequest(); // RefreshTokenRequest | The request body for refreshing an access token.
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

[**GetToken200Response**](GetToken200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

