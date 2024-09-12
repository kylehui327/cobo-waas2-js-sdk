# CoboWaas2.CreateAddressRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | 
**count** | **Number** | The number of addresses to create. This property will be ignored if you are tweaking Taproot address(es). | [default to 1]
**taproot_script_tree_hashes** | **[String]** | The information about the new address. This parameter is required only if you want to generate a tweaked address. | [optional] 
**taproot_internal_address** | **String** | The address you want to tweak. This parameter is required only if you want to generate a tweaked address. | [optional] 
**encoding** | [**AddressEncoding**](AddressEncoding.md) |  | [optional] 


