# CoboWaas2.CreateSwapQuoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **String** | The unique identifier of the wallet. | 
**pay_token_id** | **String** | Unique id of the token to pay. | 
**receive_token_id** | **String** | Unique id of the token to receive. | 
**pay_amount** | **String** | Amount of tokens to pay. For example \&quot;0.5 BTC\&quot;. Note: Either pay_amount or receive_amount must be provided, but not both.  | [optional] 
**receive_amount** | **String** | Amount of tokens to receive. For example \&quot;0.5 ETH_WBTC\&quot;. Note: Either pay_amount or receive_amount must be provided, but not both.  | [optional] 


