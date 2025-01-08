# CoboWaas2.TravelRuleDepositRequestTravelRuleInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_wallet_type** | [**DestinationWalletType**](DestinationWalletType.md) |  | 
**vendor_code** | **String** | The vendor code for exchanges or VASPs. | 
**vendor_vasp_id** | **String** | The unique identifier of the VASP. | 
**vendor_vasp_name** | **String** | The vendor name to be provided when selecting \&quot;Others\&quot; as the VASP case. This field allows customers to specify the name of a vendor not listed. | [optional] 
**entity_info** | [**TravelRuleDepositExchangesOrVASPEntityInfo**](TravelRuleDepositExchangesOrVASPEntityInfo.md) |  | 
**self_custody_wallet_challenge** | **String** | The challenge obtained from a previous operation. | 
**self_custody_wallet_address** | **String** | The address of the self-custodial wallet. | 
**self_custody_wallet_sign** | **String** | The signed message from the self-custodial wallet. | 


