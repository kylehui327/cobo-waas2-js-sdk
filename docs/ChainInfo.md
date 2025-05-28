# CoboWaas2.ChainInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. | 
**symbol** | **String** | The chain symbol, which is the abbreviated name of a chain. | [optional] 
**icon_url** | **String** | The URL of the chain icon. | [optional] 
**explorer_tx_url** | **String** | The transaction URL pattern on the blockchain explorer. You can use it to concatenate the transaction URLs. | [optional] 
**explorer_address_url** | **String** | The address URL pattern on the blockchain explorer. You can use it to concatenate the address URLs. | [optional] 
**require_memo** | **Boolean** | Whether the chain requires a memo. | [optional] 
**confirming_threshold** | **Number** | The number of confirmations required for an on-chain transaction, such as 64 for Ethereum. | [optional] 
**coinbase_maturity** | **Number** | The number of confirmations required for a coinbase transaction to be mature, such as 100 for BTC. | [optional] 


