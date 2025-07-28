# CoboWaas2.SwapActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **String** | The unique identifier of the swap activity. | [optional] 
**swap_type** | [**SwapType**](SwapType.md) |  | [optional] 
**status** | [**SwapActivityStatus**](SwapActivityStatus.md) |  | [optional] 
**request_id** | **String** | The request id of the swap activity. | [optional] 
**wallet_id** | **String** | The unique identifier of the wallet. | [optional] 
**pay_token_id** | **String** | The token ID to pay. | [optional] 
**receive_token_id** | **String** | The token ID to receive. | [optional] 
**pay_amount** | **String** | The amount of tokens to bridge. | [optional] 
**receive_amount** | **String** | The amount of tokens to receive. | [optional] 
**fee_token_id** | **String** | The fee token ID. | [optional] 
**fee_amount** | **String** | The amount of fee. | [optional] 
**initiator** | **String** | The initiator of the swap activity. | [optional] 
**initiator_type** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | [optional] 
**description** | **String** | The description of the swap activity. | [optional] 
**created_timestamp** | **Number** | The time when the swap activity was created, in Unix timestamp format, measured in milliseconds. | [optional] 
**updated_timestamp** | **Number** | The time when the swap activity was last updated, in Unix timestamp format, measured in milliseconds. | [optional] 
**network_fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] 
**destination_address** | **String** | the destination address of web3/mpc wallets. | [optional] 


