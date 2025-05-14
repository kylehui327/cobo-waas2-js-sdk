# CoboWaas2.Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID provided by you when creating the refund request. | [optional] 
**refund_id** | **String** | The refund order ID. | 
**order_id** | **String** | The order ID corresponding to this refund. | [optional] 
**merchant_id** | **String** | The merchant ID. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency used for refund. | 
**chain_id** | **String** | The ID of the blockchain network on which the refund transaction occurs. | 
**amount** | **String** | The amount in cryptocurrency to be returned for this refund order. | 
**to_address** | **String** | The recipient&#39;s wallet address where the refund will be sent. | 
**status** | [**RefundStatus**](RefundStatus.md) |  | 
**refund_type** | [**RefundType**](RefundType.md) |  | [optional] 
**created_timestamp** | **Number** | The created time of the refund order, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The updated time of the refund order, represented as a UNIX timestamp in seconds. | [optional] 
**initiator** | **String** | The initiator of this refund order, usually the user&#39;s API key. | [optional] 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) | An array of transactions associated with this refund order. Each transaction represents a separate blockchain operation related to the refund process. | [optional] 


