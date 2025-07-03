# CoboWaas2.SettlementDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | The fiat currency for the settlement. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency settled. | [optional] 
**chain_id** | **String** | The ID of the blockchain network on which the settlement occurred. | [optional] 
**merchant_id** | **String** | The ID of the merchant associated with this settlement. | [optional] 
**amount** | **String** | The settlement amount. - If &#x60;payout_channel&#x60; is set to &#x60;Crypto&#x60;, this represents the settlement amount in the specified cryptocurrency. - If &#x60;payout_channel&#x60; is set to &#x60;OffRamp&#x60;, this represents the settlement amount in the specified fiat currency.  | [optional] 
**settled_amount** | **String** | The settled amount of this settlement detail.  - If &#x60;payout_channel&#x60; is set to &#x60;Crypto&#x60;, this represents the actual settled amount in the specified cryptocurrency.  - If &#x60;payout_channel&#x60; is set to &#x60;OffRamp&#x60;, this represents the actual settled amount in the specified fiat currency.  | [optional] 
**status** | [**SettleStatus**](SettleStatus.md) |  | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) | An array of transactions associated with this settlement request. Each transaction represents a separate blockchain operation related to the settlement process. | [optional] 
**created_timestamp** | **Number** | The creation time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The last update time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 
**crypto_address_id** | **String** | The ID of the crypto address used for crypto withdrawal. | [optional] 
**payout_channel** | [**PayoutChannel**](PayoutChannel.md) |  | [optional] 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | [optional] 


