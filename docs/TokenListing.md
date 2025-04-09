# CoboWaas2.TokenListing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | Unique identifier of the token listing request | 
**chain_id** | **String** | chain_id of the blockchain where the token exists | 
**contract_address** | **String** | Contract address of the token | 
**wallet_type** | [**WalletType**](WalletType.md) |  | 
**wallet_subtype** | [**WalletSubtype**](WalletSubtype.md) |  | 
**token** | [**TokenInfo**](TokenInfo.md) |  | [optional] 
**status** | [**TokenListingRequestStatus**](TokenListingRequestStatus.md) |  | 
**source** | [**TokenListingRequestSource**](TokenListingRequestSource.md) |  | [optional] 
**feedback** | **String** | Feedback provided by the admin for rejected requests | [optional] 
**created_timestamp** | **Number** | Timestamp when the request was created (in milliseconds since Unix epoch) | [optional] 
**updated_timestamp** | **Number** | Timestamp when the request was last updated (in milliseconds since Unix epoch) | [optional] 


