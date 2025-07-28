# CoboWaas2.CreateSwapActivityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **String** | The unique identifier of the wallet to pay. | 
**address** | **String** | The wallet address, required when the wallet is not a custodial wallet. | [optional] 
**quote_id** | **String** | The unique identifier of the quote. | 
**app_initiator** | **String** | The initiator of the app activity. If you do not specify this property, the WaaS service will automatically designate the API key as the initiator. | [optional] 
**request_id** | **String** | The request id of the swap activity. | [optional] 
**receiver_address** | **String** | The address of the receiver. | [optional] 
**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] 


