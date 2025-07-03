# CoboWaas2.TransactionSOLFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fee** | **String** | The fundamental fee required for each transaction. It is charged to prevent spam transactions and network congestion, ensuring that only meaningful transactions consume network resources. | [optional] 
**rent_amount** | **String** | The fee charged as rent for maintaining the state of accounts on the blockchain. This rent ensures accounts are stored on-chain over the long term and that there&#39;s sufficient balance to sustain the account state. | [optional] 
**compute_unit_price** | **String** | The cost per compute unit. Transactions consume computational resources measured in compute units, and this price helps determine the cost of executing transactions, especially complex ones involving smart contracts. | [optional] 
**compute_unit_limit** | **String** | The maximum number of compute units allowed for a transaction. This limits the resources any single transaction can consume, preventing excessive resource usage that could impact network performance negatively. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | [optional] 
**fee_used** | **String** | The transaction fee. | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 


