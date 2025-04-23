# CoboWaas2.SettlementDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | The fiat currency for the settlement. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency settled. | [optional] 
**chain_id** | **String** | The ID of the blockchain network on which the settlement occurred. | [optional] 
**amount** | **String** | The settlement amount.  - If &#x60;token_id&#x60; is specified, this represents the settlement amount in the specified cryptocurrency.  - If &#x60;token_id&#x60; is not specified, this represents the settlement amount in the specified fiat currency.  | [optional] 
**status** | [**SettleStatus**](SettleStatus.md) |  | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) | An array of transactions associated with this settlement request. Each transaction represents a separate blockchain operation related to the settlement process. | [optional] 


