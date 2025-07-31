# CoboWaas2.AutoSweepApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWalletSweepToAddresses**](AutoSweepApi.md#createWalletSweepToAddresses) | **POST** /auto_sweep/sweep_to_addresses | create wallet sweep to addresses
[**listWalletSweepToAddresses**](AutoSweepApi.md#listWalletSweepToAddresses) | **GET** /auto_sweep/sweep_to_addresses | List wallet sweep to addresses



## createWalletSweepToAddresses

> SweepToAddress createWalletSweepToAddresses(opts)

create wallet sweep to addresses

This operation create a new sweep to address for the wallet. The old sweep to address will become invalid. 

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
const apiInstance = new CoboWaas2.AutoSweepApi();
const opts = {
  'CreateSweepToAddress': new CoboWaas2.CreateSweepToAddress()
};
apiInstance.createWalletSweepToAddresses(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateSweepToAddress** | [**CreateSweepToAddress**](CreateSweepToAddress.md)| The request body to generates a new sweep to addresses within a specified wallet. | [optional] 

### Return type

[**SweepToAddress**](SweepToAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listWalletSweepToAddresses

> ListWalletSweepToAddresses200Response listWalletSweepToAddresses(wallet_id)

List wallet sweep to addresses

This operation retrieves a list of sweep to addresses within your wallet. 

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
const apiInstance = new CoboWaas2.AutoSweepApi();
const wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.listWalletSweepToAddresses(wallet_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**| The wallet ID. | 

### Return type

[**ListWalletSweepToAddresses200Response**](ListWalletSweepToAddresses200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

