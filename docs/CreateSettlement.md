# CoboWaas2.CreateSettlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency you want to settle. Supported values:  - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDC&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC&#x60;, &#x60;BSC_USDC&#x60; - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | [optional] 
**currency** | **String** | The fiat currency for settling the cryptocurrency. Currently, only &#x60;USD&#x60; is supported. | [optional] [default to &#39;USD&#39;]
**amount** | **String** | The settlement amount. - If &#x60;token_id&#x60; is specified, this represents the settlement amount in the specified cryptocurrency. - If &#x60;token_id&#x60; is not specified, this represents the settlement amount in the specified fiat currency. | [optional] 
**bank_account_id** | **String** | The ID of the bank account where the settled funds will be deposited. | [optional] 
**settlement_type** | [**SettlementType**](SettlementType.md) |  | [optional] 


