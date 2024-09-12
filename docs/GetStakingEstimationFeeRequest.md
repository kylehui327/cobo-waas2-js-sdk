# CoboWaas2.GetStakingEstimationFeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_type** | [**ActivityType**](ActivityType.md) |  | 
**request_id** | **String** | The request ID that is used to track a request. The request ID is provided by you and must be unique within your organization. | [optional] 
**source** | [**StakingSource**](StakingSource.md) |  | [optional] 
**pool_id** | **String** | The ID of the staking pool. | 
**amount** | **String** | The amount to withdraw. | 
**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | 
**extra** | [**CreateStakeActivityExtra**](CreateStakeActivityExtra.md) |  | 
**staking_id** | **String** | The ID of the corresponding staking position. | 
**address** | **String** | The withdrawal address. | 


