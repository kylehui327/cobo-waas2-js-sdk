# CoboWaas2.BabylonStakeExtra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_type** | [**StakingPoolType**](StakingPoolType.md) |  | 
**finality_provider_public_key** | **String** | The public key of finality provider. | 
**stake_block_time** | **Number** | The stake block time. | 
**auto_broadcast** | **Boolean** | Whether to auto broadcast transactions. Default is &#x60;true&#x60;, if set to &#x60;false&#x60;,  the transaction will not be submitted to the blockchain automatically. You can call &#x60;Broadcast transactions&#x60; to submit the transaction to the blockchain,  Or you can find the signed raw_tx by &#x60;Get transaction information&#x60; and broadcast it yourself.  | [optional] 


