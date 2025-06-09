# CoboWaas2.AppWorkflowsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApprovalRequest**](AppWorkflowsApi.md#createApprovalRequest) | **POST** /app/workflows/approval_requests | Request app workflow approval
[**getApprovalRequestById**](AppWorkflowsApi.md#getApprovalRequestById) | **GET** /app/workflows/approval_requests/{approval_id} | Get app workflow approval request by approval id
[**listAppWorkflows**](AppWorkflowsApi.md#listAppWorkflows) | **GET** /app/workflows | list app workflows
[**listApprovalRequests**](AppWorkflowsApi.md#listApprovalRequests) | **GET** /app/workflows/approval_requests | List app workflow approval requests by operation_id
[**revokeApprovalRequest**](AppWorkflowsApi.md#revokeApprovalRequest) | **POST** /app/workflows/approval_requests/{approval_id}/revoke | Revoke an app workflow approval request by request initiator.



## createApprovalRequest

> CreateApprovalRequest201Response createApprovalRequest(opts)

Request app workflow approval

This operation is request approval from app workflow with idempotency checks. 

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
const apiInstance = new CoboWaas2.AppWorkflowsApi();
const opts = {
  'RequestApproval': new CoboWaas2.RequestApproval()
};
apiInstance.createApprovalRequest(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RequestApproval** | [**RequestApproval**](RequestApproval.md)| The request body to app workflow approval. | [optional] 

### Return type

[**CreateApprovalRequest201Response**](CreateApprovalRequest201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApprovalRequestById

> ApprovalRequestDetail getApprovalRequestById(approval_id)

Get app workflow approval request by approval id

This operation is retrieves approval request from app workflow. 

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
const apiInstance = new CoboWaas2.AppWorkflowsApi();
const approval_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.getApprovalRequestById(approval_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approval_id** | **String**| The approval ID that is used to track a workflow approval request. | 

### Return type

[**ApprovalRequestDetail**](ApprovalRequestDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAppWorkflows

> [AppWorkflow] listAppWorkflows()

list app workflows

This operation is list app workflows of app. 

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
const apiInstance = new CoboWaas2.AppWorkflowsApi();
apiInstance.listAppWorkflows().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AppWorkflow]**](AppWorkflow.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApprovalRequests

> ListApprovalRequests200Response listApprovalRequests(operation_id, opts)

List app workflow approval requests by operation_id

This operation is retrieves list approval requests from app workflow. 

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
const apiInstance = new CoboWaas2.AppWorkflowsApi();
const operation_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listApprovalRequests(operation_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **String**| The operation ID that is used to track a workflow. The operation ID is provided by you and must be unique within your app. | 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListApprovalRequests200Response**](ListApprovalRequests200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeApprovalRequest

> RevokeApprovalRequest201Response revokeApprovalRequest(approval_id, opts)

Revoke an app workflow approval request by request initiator.

This operation is revoke approval request from app workflow. 

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
const apiInstance = new CoboWaas2.AppWorkflowsApi();
const approval_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'RevokeApprovalRequestRequest': new CoboWaas2.RevokeApprovalRequestRequest()
};
apiInstance.revokeApprovalRequest(approval_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **approval_id** | **String**| The approval ID that is used to track a workflow approval request. | 
 **RevokeApprovalRequestRequest** | [**RevokeApprovalRequestRequest**](RevokeApprovalRequestRequest.md)| The revoke request body to app workflow approval. | [optional] 

### Return type

[**RevokeApprovalRequest201Response**](RevokeApprovalRequest201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

