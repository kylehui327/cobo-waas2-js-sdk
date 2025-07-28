# CoboWaas2.SwapsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSwapActivity**](SwapsApi.md#createSwapActivity) | **POST** /swaps/swap | Create Swap Activity
[**estimateSwapFee**](SwapsApi.md#estimateSwapFee) | **POST** /swaps/estimate_fee | Estimate Swap Fee
[**getSwapActivity**](SwapsApi.md#getSwapActivity) | **GET** /swaps/activities/{activity_id} | Get Swap Activity Details
[**getSwapQuote**](SwapsApi.md#getSwapQuote) | **GET** /swaps/quote | Get Current Swap Rate
[**listSwapActivities**](SwapsApi.md#listSwapActivities) | **GET** /swaps/activities | List Swap Activities
[**listSwapEnabledTokens**](SwapsApi.md#listSwapEnabledTokens) | **GET** /swaps/enabled_tokens | List Enabled Tokens



## createSwapActivity

> SwapActivityDetail createSwapActivity(CreateSwapActivityRequest)

Create Swap Activity

This operation to create a swap activity. 

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
const apiInstance = new CoboWaas2.SwapsApi();
const CreateSwapActivityRequest = new CoboWaas2.CreateSwapActivityRequest();
apiInstance.createSwapActivity(CreateSwapActivityRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateSwapActivityRequest** | [**CreateSwapActivityRequest**](CreateSwapActivityRequest.md)| The request body for creating a swap activity. | 

### Return type

[**SwapActivityDetail**](SwapActivityDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateSwapFee

> EstimatedFee estimateSwapFee(SwapEstimateFee)

Estimate Swap Fee

This operation to estimate the fee of a swap activity. 

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
const apiInstance = new CoboWaas2.SwapsApi();
const SwapEstimateFee = new CoboWaas2.SwapEstimateFee();
apiInstance.estimateSwapFee(SwapEstimateFee).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SwapEstimateFee** | [**SwapEstimateFee**](SwapEstimateFee.md)| The request body for estimating the fee of a swap activity. | 

### Return type

[**EstimatedFee**](EstimatedFee.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSwapActivity

> SwapActivityDetail getSwapActivity(activity_id)

Get Swap Activity Details

This operation retrieves the details of a swap activity. 

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
const apiInstance = new CoboWaas2.SwapsApi();
const activity_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.getSwapActivity(activity_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **String**| The unique id of the activity. | 

### Return type

[**SwapActivityDetail**](SwapActivityDetail.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSwapQuote

> SwapQuote getSwapQuote(wallet_id, pay_token_id, receive_token_id, opts)

Get Current Swap Rate

This operation retrieves the current market exchange rate and estimated amount for swapping between two tokens. Either pay_amount or receive_amount must be provided. 

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
const apiInstance = new CoboWaas2.SwapsApi();
const wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const pay_token_id = "ETH";
const receive_token_id = "USDT";
const opts = {
  'pay_amount': "1.5",
  'receive_amount': "2000"
};
apiInstance.getSwapQuote(wallet_id, pay_token_id, receive_token_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**| The wallet ID. | 
 **pay_token_id** | **String**| Unique id of the token to pay. | 
 **receive_token_id** | **String**| Unique id of the token to receive. | 
 **pay_amount** | **String**| The amount of pay token. | [optional] 
 **receive_amount** | **String**| The amount of token to receive. | [optional] 

### Return type

[**SwapQuote**](SwapQuote.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSwapActivities

> ListSwapActivities200Response listSwapActivities(opts)

List Swap Activities

This operation retrieves a list of swap activities. 

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
const apiInstance = new CoboWaas2.SwapsApi();
const opts = {
  'type': new CoboWaas2.SwapType(),
  'status': new CoboWaas2.SwapActivityStatus(),
  'min_updated_timestamp': 1635744000000,
  'max_updated_timestamp': 1635744000000,
  'initiator': "steve@example.com",
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'sort_by': "timestamp",
  'direction': "ASC"
};
apiInstance.listSwapActivities(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**SwapType**](.md)|  | [optional] 
 **status** | [**SwapActivityStatus**](.md)|  | [optional] 
 **min_updated_timestamp** | **Number**| The start time of the query. All staking activities updated after the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds. | [optional] 
 **max_updated_timestamp** | **Number**| The end time of the query. All staking activities updated before the specified time will be retrieved. The time is in Unix timestamp format, measured in milliseconds. | [optional] 
 **initiator** | **String**| The activity initiator, which is your API key by default. You can also specify the initiator when creating the activity. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 
 **sort_by** | **String**| The field used for sorting. | [optional] [default to &#39;&#39;]
 **direction** | **String**| The sort direction. Possible values include:   - &#x60;ASC&#x60;: Sort the results in ascending order.   - &#x60;DESC&#x60;: Sort the results in descending order.  | [optional] [default to &#39;ASC&#39;]

### Return type

[**ListSwapActivities200Response**](ListSwapActivities200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSwapEnabledTokens

> ListSwapEnabledTokens200Response listSwapEnabledTokens(opts)

List Enabled Tokens

This operation retrieves all enabled tokens for swaps.   

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
const apiInstance = new CoboWaas2.SwapsApi();
const opts = {
  'type': new CoboWaas2.SwapType(),
  'asset_id': "USDT",
  'chain_id': "ETH",
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listSwapEnabledTokens(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**SwapType**](.md)|  | [optional] 
 **asset_id** | **String**| (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
 **chain_id** | **String**| The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListSwapEnabledTokens200Response**](ListSwapEnabledTokens200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

