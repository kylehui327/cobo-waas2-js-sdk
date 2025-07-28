# CoboWaas2.SettlementInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. For developer balance, this field will be empty. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency. | [optional] 
**available_amount** | **String** | The amount available for settlement or refund, in the specified cryptocurrency. | 
**available_currency_balance** | **String** | The amount available for settlement or refund, in the specified fiat currency. | [optional] 
**pending_amount** | **String** | The amount unavailable for settlement or refund, in the specified cryptocurrency. | [optional] 
**pending_currency_balance** | **String** | The amount unavailable for settlement or refund, in the specified fiat currency. | [optional] 
**settled_amount** | **String** | The amount already settled, in the specified cryptocurrency. | [optional] 
**available_balance** | **String** | The balance available for settlement or refund, in the specified fiat currency. | [optional] 
**total_balance** | **String** | The balance total for settlement or refund, in the specified fiat currency. | [optional] 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | [optional] 
**created_timestamp** | **Number** | The created time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The updated time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 


