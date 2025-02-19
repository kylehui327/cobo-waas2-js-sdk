# CoboWaas2.ContractCallParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains). | 
**source** | [**ContractCallSource**](ContractCallSource.md) |  | 
**destination** | [**ContractCallDestination**](ContractCallDestination.md) |  | 
**description** | **String** | The description of the contract call transaction. | [optional] 
**category_names** | **[String]** | The custom category for you to identify your transactions. | [optional] 
**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] 
**transaction_process_type** | **String** | Transaction processing type. Possible values are: - &#x60;AutoProcess&#x60; (default): After the transaction is constructed, it will be automatically signed and broadcast.   - &#x60;BuildOnly&#x60;: Set to this value if you want to build the transaction first without automatically signing and broadcasting it. You can manually call the [Sign and broadcast transaction](https://www.cobo.com/developers/v2/api-references/transactions/sign-and-broadcast-transaction) operation to complete the signing and broadcasting process.  | [optional] 
**auto_fuel** | [**AutoFuelType**](AutoFuelType.md) |  | [optional] 



## Enum: TransactionProcessTypeEnum


* `AutoProcess` (value: `"AutoProcess"`)

* `BuildOnly` (value: `"BuildOnly"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




