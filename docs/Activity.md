# CoboWaas2.Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id of the activity. | [optional] 
**initiator** | **String** | The initiator of the activity. | [optional] 
**type** | [**ActivityType**](ActivityType.md) |  | [optional] 
**wallet_id** | **String** | The id of the wallet to stake. | [optional] 
**address** | **String** | The staker wallet address. | [optional] 
**pool_id** | **String** | The id of the staking pool. | 
**token_id** | **String** | The id of the token. | 
**staking_id** | **String** | The id of the related staking. | [optional] 
**amount** | **String** | The amount of the activity. | 
**transaction_ids** | **[String]** | The related txs of the activity. | [optional] 
**timeline** | [**[ActivityTimeline]**](ActivityTimeline.md) | The timeline of the activity. | [optional] 
**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] 
**status** | [**ActivityStatus**](ActivityStatus.md) |  | 
**created_time** | **Number** | The time when the activity was created. | [optional] 
**updated_time** | **Number** | The time when the activity was last updated. | [optional] 


