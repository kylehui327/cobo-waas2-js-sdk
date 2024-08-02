# CoboWaas2.AddressInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The wallet address. | 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 
**memo** | **String** | The memo code. | [optional] 
**path** | **String** | The derivation path of the address. This property applies to MPC Wallets only. | [optional] 
**encoding** | [**AddressEncoding**](AddressEncoding.md) |  | [optional] 
**pubkey** | **String** | The public key of the address. This property applies to MPC Wallets only. | [optional] 


