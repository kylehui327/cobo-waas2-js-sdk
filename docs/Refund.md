# CoboWaas2.Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request id. | [optional] 
**refund_id** | **String** | The refund order ID. | 
**merchant_id** | **String** | The merchant ID. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency token used for refund. | 
**chain_id** | **String** | The ID of the blockchain network on which the refund transaction occurs. | 
**amount** | **String** | The amount in cryptocurrency to be returned for this refund order. | 
**to_address** | **String** | The recipient&#39;s wallet address where the refund will be sent. | 
**status** | [**RefundStatus**](RefundStatus.md) |  | 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) |  | [optional] 


