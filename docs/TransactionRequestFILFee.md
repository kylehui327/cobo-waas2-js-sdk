# CoboWaas2.TransactionRequestFILFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gas_premium** | **String** | An optional additional fee that users can include to prioritize their transactions over others. It acts like a tip to incentivize miners to select and include your transaction over transactions with only the base fee. | 
**gas_fee_cap** | **String** | The gas_fee_cap is a user-defined limit on how much they are willing to pay per unit of gas. | 
**gas_limit** | **String** | This defines the maximum amount of computational effort that a transaction is allowed to consume. It&#39;s a way to cap the resources that a transaction can use, ensuring it doesn&#39;t consume excessive network resources. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | 


