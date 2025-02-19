# CoboWaas2.TransferDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_type** | [**TransferDestinationType**](TransferDestinationType.md) |  | 
**account_output** | [**AddressTransferDestinationAccountOutput**](AddressTransferDestinationAccountOutput.md) |  | [optional] 
**utxo_outputs** | [**[AddressTransferDestinationUtxoOutputsInner]**](AddressTransferDestinationUtxoOutputsInner.md) |  | [optional] 
**change_address** | **String** | The address used to receive the remaining funds or change from the transaction. | [optional] 
**change_output_type** | **String** | The type of change output: **Last** means the change output is located at the end of the transaction&#39;s outputs, **Last** is the default value. while **First** means it is located at the beginning of the transaction&#39;s outputs.  | [optional] 
**force_internal** | **Boolean** | Whether the transaction request must be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - &#x60;true&#x60;: The transaction request must be executed as a Cobo Loop transfer.   - &#x60;false&#x60;: The transaction request may not be executed as a Cobo Loop transfer.    Please do not set both &#x60;force_internal&#x60; and &#x60;force_external&#x60; as &#x60;true&#x60;.  | [optional] 
**force_external** | **Boolean** | Whether the transaction request must not be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - &#x60;true&#x60;: The transaction request must not be executed as a Cobo Loop transfer.   - &#x60;false&#x60;: The transaction request can be executed as a Cobo Loop transfer.  Please do not set both &#x60;force_internal&#x60; and &#x60;force_external&#x60; as &#x60;true&#x60;.  | [optional] 
**wallet_id** | **String** | The wallet ID. | 
**trading_account_type** | **String** | The trading account type. | 
**amount** | **String** | The transfer amount. For example, if you trade 1.5 BTC, then the value is &#x60;1.5&#x60;.  | 



## Enum: ChangeOutputTypeEnum


* `Last` (value: `"Last"`)

* `First` (value: `"First"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




