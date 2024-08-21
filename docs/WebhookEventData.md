# CoboWaas2.WebhookEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. | 
**transaction_id** | **String** | The transaction ID. | 
**cobo_id** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | [optional] 
**wallet_id** | **String** | For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source. | 
**type** | [**TSSRequestType**](TSSRequestType.md) |  | [optional] 
**status** | [**TSSRequestStatus**](TSSRequestStatus.md) |  | 
**sub_status** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failed_reason** | **String** | (This property is applicable to approval failures and signature failures only) The reason why the transaction failed. | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**result** | [**TransactionResult**](TransactionResult.md) |  | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**initiator** | **String** | The transaction initiator. | [optional] 
**initiator_type** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmed_num** | **Number** | The number of confirmations this transaction has received. | [optional] 
**confirming_threshold** | **Number** | The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction. | [optional] 
**transaction_hash** | **String** | The transaction hash. | [optional] 
**block_info** | [**TransactionBlockInfo**](TransactionBlockInfo.md) |  | [optional] 
**raw_tx_info** | [**TransactionRawTxInfo**](TransactionRawTxInfo.md) |  | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description of the TSS request. | [optional] 
**is_loop** | **Boolean** | Whether the transaction is a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/).  - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**created_timestamp** | **Number** | The TSS request&#39;s creation time in Unix timestamp format, measured in milliseconds. | [optional] 
**updated_timestamp** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | [optional] 
**tss_request_id** | **String** | The TSS request ID. | [optional] 
**source_key_share_holder_group** | [**SourceGroup**](SourceGroup.md) |  | [optional] 
**target_key_share_holder_group_id** | **String** | The target key share holder group ID. | [optional] 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




