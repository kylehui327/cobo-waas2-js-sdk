# CoboWaas2.SettlementDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** | The currency for the settlement. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency token settled. | [optional] 
**chain_id** | **String** | The ID of the blockchain network on which the settlement occurred. | [optional] 
**amount** | **String** | The settled amount. - If &#x60;token_id&#x60; is specified, this represents the settlement amount in the specified cryptocurrency token. - If &#x60;token_id&#x60; is not specified, this represents the settlement amount in the specified currency.  | [optional] 
**status** | [**SettleStatus**](SettleStatus.md) |  | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) |  | [optional] 


