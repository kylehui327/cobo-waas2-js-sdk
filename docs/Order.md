# CoboWaas2.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **String** | The order ID. | 
**merchant_id** | **String** | The merchant ID. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency token used for payment. | 
**chain_id** | **String** | The ID of the blockchain network where the payment transaction should be made. | 
**payable_amount** | **String** | The cryptocurrency amount to be paid for this order. | 
**receive_address** | **String** | The recipient wallet address to be used for the payment transaction. | 
**currency** | **String** | The currency of the order. | 
**order_amount** | **String** | The base amount in currency to be charged for the payment order, excluding the payment gateway fee (specified in &#x60;fee_amount&#x60;). | 
**fee_amount** | **String** | The payment gateway fee in currency. It is added to the base amount (&#x60;order_amount&#x60;) to determine the final charge. | 
**exchange_rate** | **String** | The exchange rate used to convert between currency and cryptocurrency token. Expressed as the amount of currency per one unit of cryptocurrency. For example, if the token is USDT and the currency is USD, a rate of \&quot;0.99\&quot; means 1 USDT &#x3D; 0.99 USD. | 
**expired_at** | **Number** | The expiration time of the payment order, represented as a UNIX timestamp in seconds. | [optional] 
**merchant_order_code** | **String** | A unique reference code assigned by the merchant to identify this order in their system. | [optional] 
**psp_order_code** | **String** | A unique reference code assigned by the payment gateway to identify this order in their system. | 
**status** | [**OrderStatus**](OrderStatus.md) |  | 
**received_token_amount** | **String** | The total cryptocurrency amount received for this order. Updates until order expires. Precision matches the token standard (e.g., 6 decimals for USDT). | 


