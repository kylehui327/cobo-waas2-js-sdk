# CoboWaas2.MPCVaultEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. | 
**vault_id** | **String** | The vault ID. | [optional] 
**project_id** | **String** | The project ID. | [optional] 
**name** | **String** | The vault name. | [optional] 
**type** | [**MPCVaultType**](MPCVaultType.md) |  | [optional] 
**root_pubkeys** | [**[RootPubkey]**](RootPubkey.md) |  | [optional] 
**created_timestamp** | **Number** | The vault&#39;s creation time in Unix timestamp format, measured in milliseconds. | [optional] 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `Addresses` (value: `"Addresses"`)

* `WalletInfo` (value: `"WalletInfo"`)

* `MPCVault` (value: `"MPCVault"`)

* `Chains` (value: `"Chains"`)

* `Tokens` (value: `"Tokens"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




