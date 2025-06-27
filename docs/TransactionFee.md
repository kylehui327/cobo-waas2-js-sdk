# CoboWaas2.TransactionFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | [optional] 
**effective_gas_price** | **String** | The gas price (gas fee per gas unit) on the chain, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions. | [optional] 
**fee_used** | **String** | The transaction fee. | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 
**gas_used** | **String** | The gas units used in the transaction. | [optional] 
**max_fee_per_gas** | **String** | The maximum gas fee per gas unit used on the chain, in wei. | [optional] 
**max_priority_fee_per_gas** | **String** | The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction. | [optional] 
**gas_limit** | **String** | This defines the maximum amount of computational effort that a transaction is allowed to consume. It&#39;s a way to cap the resources that a transaction can use, ensuring it doesn&#39;t consume excessive network resources. | [optional] 
**gas_price** | **String** | The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used. | [optional] 
**max_fee_amount** | **String** | The maximum fee that you are willing to pay for the transaction. Provide the value without applying precision. The transaction will fail if the transaction fee exceeds the maximum fee. | [optional] 
**fee_rate** | **String** | The fee rate in sat/vByte. The fee rate represents the satoshis you are willing to pay for each byte of data that your transaction will consume on the blockchain. | [optional] 
**base_fee** | **String** | The fundamental fee required for each transaction. It is charged to prevent spam transactions and network congestion, ensuring that only meaningful transactions consume network resources. | [optional] 
**rent_amount** | **String** | The fee charged as rent for maintaining the state of accounts on the blockchain. This rent ensures accounts are stored on-chain over the long term and that there&#39;s sufficient balance to sustain the account state. | [optional] 
**compute_unit_price** | **String** | The cost per compute unit. Transactions consume computational resources measured in compute units, and this price helps determine the cost of executing transactions, especially complex ones involving smart contracts. | [optional] 
**compute_unit_limit** | **String** | The maximum number of compute units allowed for a transaction. This limits the resources any single transaction can consume, preventing excessive resource usage that could impact network performance negatively. | [optional] 
**gas_base** | **String** | This is the minimum fee required to include a transaction in a block. It is determined by the network&#39;s congestion level, which adjusts to maintain a target block utilization rate. The base fee is burned, reducing the total supply of Filecoin over time. | [optional] 
**gas_premium** | **String** | An optional additional fee that users can include to prioritize their transactions over others. It acts like a tip to incentivize miners to select and include your transaction over transactions with only the base fee. | [optional] 
**gas_fee_cap** | **String** | The gas_fee_cap is a user-defined limit on how much they are willing to pay per unit of gas. | [optional] 


