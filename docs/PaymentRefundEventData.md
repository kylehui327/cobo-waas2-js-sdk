# CoboWaas2.PaymentRefundEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. - &#x60;TokenListing&#x60;: The token listing event data.        - &#x60;PaymentOrder&#x60;: The payment order event data. - &#x60;PaymentRefund&#x60;: The payment refund event data. - &#x60;PaymentSettlement&#x60;: The payment settlement event data. - &#x60;PaymentTransaction&#x60;: The payment transaction event data. - &#x60;PaymentAddressUpdate&#x60;: The payment address update event data. - &#x60;BalanceUpdateInfo&#x60;: The balance update event data. - &#x60;SuspendedToken&#x60;: The suspended token event data. | 
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
**charge_merchant_fee** | **Boolean** | Whether to charge developer fee to the merchant.  - &#x60;true&#x60;: The fee amount (specified in &#x60;merchant_fee_amount&#x60;) will be deducted from the merchant&#39;s balance and added to the developer&#39;s balance - &#x60;false&#x60;: The merchant is not charged any developer fee.  | [optional] 
**merchant_fee_amount** | **String** | The developer fee amount to charge the merchant, denominated in the cryptocurrency specified by &#x60;merchant_fee_token_id&#x60;. | [optional] 
**merchant_fee_token_id** | **String** | The ID of the cryptocurrency used for the developer fee. | [optional] 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `Addresses` (value: `"Addresses"`)

* `WalletInfo` (value: `"WalletInfo"`)

* `MPCVault` (value: `"MPCVault"`)

* `Chains` (value: `"Chains"`)

* `Tokens` (value: `"Tokens"`)

* `TokenListing` (value: `"TokenListing"`)

* `PaymentOrder` (value: `"PaymentOrder"`)

* `PaymentRefund` (value: `"PaymentRefund"`)

* `PaymentSettlement` (value: `"PaymentSettlement"`)

* `PaymentTransaction` (value: `"PaymentTransaction"`)

* `PaymentAddressUpdate` (value: `"PaymentAddressUpdate"`)

* `BalanceUpdateInfo` (value: `"BalanceUpdateInfo"`)

* `SuspendedToken` (value: `"SuspendedToken"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




