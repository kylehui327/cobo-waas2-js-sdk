# CoboWaas2.EstimatedFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | 
**is_loop** | **Boolean** | Whether the transaction can be executed as a Loop transfer. For more information about Loop, see [Loop&#39;s website](https://loop.top/). - &#x60;true&#x60;: The transaction is a Loop transfer. - &#x60;false&#x60;: The transaction is not a Loop transfer.  | [optional] 
**fee_amount** | **String** | The fee that you need to pay for the transaction. | 
**slow** | [**EstimatedUtxoFeeSlow**](EstimatedUtxoFeeSlow.md) |  | [optional] 
**recommended** | [**EstimatedUtxoFeeSlow**](EstimatedUtxoFeeSlow.md) |  | 
**fast** | [**EstimatedUtxoFeeSlow**](EstimatedUtxoFeeSlow.md) |  | [optional] 


