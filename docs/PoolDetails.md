# CoboWaas2.PoolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique protocol id. | 
**chain_id** | **String** | The unique chain id. | 
**protocol** | **String** | The name of the protocol. | 
**protocol_icon_url** | **String** | The URL of the protocol&#39;s icon. | 
**supported_wallet_types** | [**[WalletType]**](WalletType.md) | The list of available wallet types. | 
**supported_wallet_subtypes** | [**[WalletSubtype]**](WalletSubtype.md) | The list of available wallet types. | 
**token_id** | **String** | The unique token id. | 
**est_apr** | **Number** | The estimated APR. | 
**pool_type** | [**StakingPoolType**](StakingPoolType.md) |  | [optional] 
**min_amount** | **String** | The minimum amount to stake. | [optional] 
**max_amount** | **String** | The maximum amount to stake. | [optional] 
**min_stake_period** | **Number** | The minimum staking period in days. | [optional] 
**max_stake_period** | **Number** | The maximum staking period in days. | [optional] 
**min_stake_blocks** | **Number** | The minimum staking blocks. | [optional] 
**max_stake_blocks** | **Number** | The maximum staking blocks. | [optional] 
**validators_info** | [**[PoolDetailsAllOfValidatorsInfo]**](PoolDetailsAllOfValidatorsInfo.md) | The list of validators. | 


