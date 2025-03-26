# CoboWaas2.SafeTxExtraData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **String** | The recipient address of the transaction | 
**value** | **String** | Readable transaction value (e.g., 1 ETH) | 
**data** | **String** | The transaction data | 
**domain_hash** | **String** | EIP712 structured data domain hash | 
**message_hash** | **String** | Hash of the structured message | 
**safe_address** | **String** | Address of the Safe contract | 
**safe_tx_hash** | **String** | Hash of the Safe transaction | 
**safe_nonce** | **Number** | Safe transaction nonce | 
**operation** | **String** | Type of operation performed in the transaction | 
**gas_token_addr** | **String** | Address of the gas token | [optional] 
**safe_tx_gas** | **Number** | Gas used for the Safe transaction | [optional] 
**base_gas** | **Number** | Base gas for the transaction | [optional] 
**gas_price** | **String** | Gas price used in the transaction | [optional] 
**refund_receiver** | **String** | Address to receive the gas refund | [optional] 
**to_contract_name** | **String** | Name of the recipient contract (if available) | [optional] 
**decoded_data** | [**SafeTxDecodedData**](SafeTxDecodedData.md) |  | [optional] 
**signature** | **String** | Signature of the transaction (if signed by Cobo Signer) | [optional] 
**wei** | **String** | Transaction amount in Wei | [optional] 


