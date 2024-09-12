# CoboWaas2.BookkeepingRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **String** | The wallet ID. | 
**wallet_type** | [**WalletType**](WalletType.md) |  | [optional] 
**wallet_name** | **String** | The wallet name. | [optional] 
**transaction_timestamp** | **Number** | The time when the bookkeeping was created, in Unix timestamp format, measured in milliseconds. | 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**type** | **String** | The bookkeeping type. | 
**amount** | **String** | The amount of the bookkeeping. | 
**balance** | **String** | The post-balance of the tx. | 
**from_address** | **String** | The from address. | [optional] 
**to_address** | **String** | The to address. | [optional] 
**transaction_hash** | **String** | The transaction hash. | [optional] 


