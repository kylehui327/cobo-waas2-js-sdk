# CoboWaas2.ActivityExtra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_type** | [**StakingPoolType**](StakingPoolType.md) |  | 
**finality_provider_public_key** | **String** | The public key of the finality provider. | [optional] 
**stake_block_time** | **Number** | The number of blocks that need to be processed before the locked tokens are unlocked and become accessible. | [optional] 
**auto_broadcast** | **Boolean** | Whether to automatically broadcast the transaction.  - &#x60;true&#x60;: Automatically broadcast the transaction. - &#x60;false&#x60;: The transaction will not be submitted to the blockchain automatically. You can call [Broadcast signed transactions](/v2/api-references/transactions/broadcast-signed-transactions) to broadcast the transaction to the blockchain, or retrieve the signed raw transaction data &#x60;raw_tx&#x60; by calling [Get transaction information](/v2/api-references/transactions/get-transaction-information) and broadcast it yourself.  | [optional] 
**param_version** | **Number** | The version of babylon global parameters. | [optional] 
**withdraw_from_type** | [**ActivityType**](ActivityType.md) |  | [optional] 
**provider_name** | **String** | The name of the provider. | [optional] 
**validator_pubkeys** | **[String]** | A list of public keys identifying the validators to unstake from the Ethereum Beacon Chain. | [optional] 
**timelock** | **Number** | The Unix timestamp (in seconds) when the staking position will be unlocked and available for withdrawal. | [optional] 
**change_address** | **String** | The change bitcoin address. If not provided, the source wallet&#39;s address will be used as the change address. | [optional] 
**validator_address** | **String** | The validator evm address. | [optional] 
**reward_address** | **String** | The reward evm address. | [optional] 


