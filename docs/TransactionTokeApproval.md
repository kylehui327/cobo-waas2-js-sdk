# CoboWaas2.TransactionTokeApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
**chain_id** | **String** | The ID of the chain on which the token operates. | 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
**symbol** | **String** | The token symbol, which is the abbreviated name of a token. | [optional] 
**name** | **String** | The token name, which is the full name of a token. | [optional] 
**decimal** | **Number** | The token decimal. | [optional] 
**icon_url** | **String** | The URL of the token icon. | [optional] 
**token_address** | **String** | The token address, if applicable. | [optional] 
**fee_token_id** | **String** | The fee token ID. A fee token is the token with which you pay transaction fees. | [optional] 
**can_deposit** | **Boolean** | Whether deposits are enabled for this token. | [optional] 
**can_withdraw** | **Boolean** | Whether withdrawals are enabled for this token. | [optional] 
**amount** | **Number** | Transaction value (Note that this is an absolute value. If you trade 1.5 BTC, then the value is 1.5)  | [optional] 
**spender** | **String** | Spender address | [optional] 


