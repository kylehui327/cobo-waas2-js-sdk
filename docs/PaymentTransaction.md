# CoboWaas2.PaymentTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx_id** | **String** | Unique identifier for the transaction. | 
**tx_hash** | **String** | The blockchain transaction hash, may be initially null and populated after submission. | [optional] 
**from_address** | **String** | Source cryptocurrency address for the transaction. | 
**to_address** | **String** | Destination cryptocurrency address for the transaction. | 
**amount** | **String** | The amount of cryptocurrency transferred, as a decimal string. | 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**created_timestamp** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updated_timestamp** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 


