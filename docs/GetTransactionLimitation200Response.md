# CoboWaas2.GetTransactionLimitation200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vasp_list** | [**[Vasp]**](Vasp.md) | A list of VASPs (Virtual Asset Service Providers) associated with the token. | [optional] 
**is_threshold_reached** | **Boolean** | Indicates whether the transaction amount exceeds a predefined threshold. - **If &#x60;true&#x60;**: Additional information is required when filling Travel Rule details:   - For deposits: &#x60;date_of_incorporation&#x60; and &#x60;place_of_incorporation&#x60;. - **If &#x60;false&#x60;**: No extra fields are required.  | [optional] 
**self_custody_wallet_challenge** | **String** | A human-readable, time-sensitive message to be signed by the wallet owner.  The message contains key details including the wallet address, a unique nonce, and a timestamp. Signing this message confirms ownership of the wallet and allows the operation to proceed.  | [optional] 
**connect_wallet_list** | **[String]** | A list of wallets connected to the system for transactions. | [optional] 


