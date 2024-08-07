# CoboWaas2.Stakings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the stake. | 
**wallet_id** | **String** | The unique wallet id. | 
**address** | **String** | The staker wallet address. | 
**amounts** | [**[AmountDetailsInner]**](AmountDetailsInner.md) | The staking amount details. | 
**initiator** | **String** | The initiator of the stake. | [optional] 
**unlock_timestamp** | **Number** | The unlock time. | [optional] 
**unlock_block_height** | **Number** | The unlock block height. | [optional] 
**pool_id** | **String** | The unique pool id. | 
**token_id** | **String** | The token id. | 
**pos_chain** | **String** | The pos chain of the stake. | [optional] 
**rewards_info** | **Object** | The rewards info of the stake. | [optional] 
**created_timestamp** | **Number** | The time when the stake was created. | 
**updated_timestamp** | **Number** | The time when the stake was last updated. | 
**validator_info** | [**StakingsValidatorInfo**](StakingsValidatorInfo.md) |  | 


