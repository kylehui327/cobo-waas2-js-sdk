# CoboWaas2.TransactionsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransactionById**](TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel transaction
[**createContractCallTransaction**](TransactionsApi.md#createContractCallTransaction) | **POST** /transactions/contract_call | Call smart contract
[**createMessageSignTransaction**](TransactionsApi.md#createMessageSignTransaction) | **POST** /transactions/message_sign | Sign message
[**createTransferTransaction**](TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Transfer token
[**dropTransactionById**](TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop transaction
[**estimateFee**](TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
[**resendTransactionById**](TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend transaction
[**speedupTransactionById**](TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up transaction



## cancelTransactionById

> CreateTransferTransaction201Response cancelTransactionById(transaction_id)

Cancel transaction

This operation cancels a specified transaction. A transaction can be cancelled if its status is either of the following: - &#x60;Submitted&#x60; - &#x60;PendingScreening&#x60; - &#x60;PendingAuthorization&#x60; - &#x60;PendingSignature&#x60;   A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions from MPC Wallets.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
apiInstance.cancelTransactionById(transaction_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The transaction ID. | 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createContractCallTransaction

> CreateTransferTransaction201Response createContractCallTransaction(opts)

Call smart contract

This operation creates a transaction to interact with a smart contract on the blockchain.  You need to provide details such as the source address, destination address, and the calldata. You can specify the fee-related properties to limit the transaction fee. A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;Currently, this operation only applies to blockchains that have a similar architecture to Ethereum.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'ContractCallParams': new CoboWaas2.ContractCallParams() // ContractCallParams | The request body for making a contract call.
};
apiInstance.createContractCallTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ContractCallParams** | [**ContractCallParams**](ContractCallParams.md)| The request body for making a contract call. | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMessageSignTransaction

> CreateTransferTransaction201Response createMessageSignTransaction(opts)

Sign message

This operation creates a transaction to sign the provided message using cryptographic techniques.  In some scenarios, you want to sign a message for identity authentication or transaction approval. You need to provide details such as the source address, destination address, and the message to be signed. A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;Currently, only MPC Wallets support this type of transaction to sign a message.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'MessageSignParams': new CoboWaas2.MessageSignParams() // MessageSignParams | The request body to create a message sign transaction
};
apiInstance.createMessageSignTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **MessageSignParams** | [**MessageSignParams**](MessageSignParams.md)| The request body to create a message sign transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransferTransaction

> CreateTransferTransaction201Response createTransferTransaction(opts)

Transfer token

The operation transfers your assets from a wallet created on Cobo Protal to another address.  You need to specify details such as the sender address and recipient address, token ID, and the amount to transfer. You can specify the fee-related properties to limit the transaction fee. A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;Only MPC Wallets as the transaction source can transfer tokens to multiple addresses by using the &lt;code&gt;utxo_outputs&lt;/code&gt; property.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'TransferParams': new CoboWaas2.TransferParams() // TransferParams | The request body to create a transfer transaction
};
apiInstance.createTransferTransaction(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TransferParams** | [**TransferParams**](TransferParams.md)| The request body to create a transfer transaction | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dropTransactionById

> CreateTransferTransaction201Response dropTransactionById(transaction_id, opts)

Drop transaction

This operation drops a specified transaction.   Dropping a transaction will trigger an Replace-By-Fee (RBF) transaction which is a new version of the original transaction. It has a higher transaction fee to incentivize miners to prioritize its confirmation over the original one. A transaction can be dropped if its status is &#x60;Broadcasting&#x60;.  &lt;ul&gt; &lt;li&gt;For EVM chains, this RBF transaction has a transfer amount of &#x60;0&#x60; and the sending address is the same as the receiving address.&lt;/li&gt; &lt;li&gt;For UTXO chains, this RBF transaction has a transfer amount of &#x60;0&#x60; and the destination address is the same as the change address in the original transaction.&lt;/li&gt; &lt;/ul&gt; A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions from MPC Wallets, excluding transactions in the tokens VET, TRON, TVET, SOL, and TON.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'TransactionRbf': new CoboWaas2.TransactionRbf() // TransactionRbf | The request body to drop or to speed up transactions
};
apiInstance.dropTransactionById(transaction_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The transaction ID. | 
 **TransactionRbf** | [**TransactionRbf**](TransactionRbf.md)| The request body to drop or to speed up transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateFee

> EstimatedFee estimateFee(opts)

Estimate transaction fee

This operation estimates the transaction fee rates of a token transfer or a contract call based on three different transaction speeds (slow, recommended, and fast), considering factors such as network congestion and transaction complexity.  You need to specify the transaction information, including the request ID, request type, source address, destination address, and token ID of the transaction fee.  The response can contain different properties based on the transaction fee model used by the chain, including EIP-1559 fee model, legacy fee model, UTXO fee model, and fixed fee model. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'EstimateFeeParams': new CoboWaas2.EstimateFeeParams() // EstimateFeeParams | The request body to estimate the transaction fee of a token transfer or a contract call.
};
apiInstance.estimateFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **EstimateFeeParams** | [**EstimateFeeParams**](EstimateFeeParams.md)| The request body to estimate the transaction fee of a token transfer or a contract call. | [optional] 

### Return type

[**EstimatedFee**](EstimatedFee.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionById

> TransactionDetail getTransactionById(transaction_id)

Get transaction information

This operation retrieves detailed information about a specified transaction, such as the transaction status, source address, destination address, and timestamp. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
apiInstance.getTransactionById(transaction_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The transaction ID. | 

### Return type

[**TransactionDetail**](TransactionDetail.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactions

> ListTransactions200Response listTransactions(opts)

List all transactions

This operation retrieves all the transactions under your organization.  You can filter the results by request ID, Cobo ID, transaction ID, transaction hash, type, status, and timestamps. You can also paginate and sort your query results. 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'request_id': "web_send_by_user_327_1610444045047", // String | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
  'cobo_ids': "20231213122855000000000000000000,20231213122955000000000000000000", // String | A list of Cobo IDs, separated by comma. A Cobo ID can be used to track a transaction.
  'transaction_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,557918d2-632a-4fe1-932f-315711f05fe3", // String | A list of transaction IDs, separated by comma.
  'transaction_hashes': "239861be9a4afe080c359b7fe4a1d035945ec46256b1a0f44d1267c71de8ec28", // String | A list of transaction hashes, separated by comma.
  'types': "Deposit,Withdrawal", // String | A list of transaction types, separated by comma. Possible values include:    - `Deposit`: A deposit transaction.   - `Withdrawal`: A withdrawal transaction.   - `ContractCall`: A transaction that interacts with a smart contract.   - `MessageSign`: A transaction that signs a message.    - `ExternalSafeTx`: A transaction to a Smart Contract Wallet (Safe{Wallet}) that requires one or multiple signatures to be executed. 
  'statuses': "Completed,Failed", // String | A list of transaction statuses, separated by comma. Possible values include:    - `Submitted`: The transaction is submitted.   - `PendingScreening`: The transaction is pending screening by Risk Control.    - `PendingAuthorization`: The transaction is pending approvals.   - `PendingSignature`: The transaction is pending signature.    - `Broadcasting`: The transaction is being broadcast.   - `Confirming`: The transaction is waiting for the required number of confirmations.   - `Completed`: The transaction is completed.   - `Failed`: The transaction failed.   - `Rejected`: The transaction is rejected.   - `Pending`: The transaction is pending. 
  'wallet_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,1ddca562-8434-41c9-8809-d437bad9c868", // String | A list of wallet IDs, separated by comma.
  'chain_ids': "BTC,ETH", // String | A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
  'token_ids': "ETH_USDT,ETH_USDC", // String | A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
  'asset_ids': "USDT,USDC", // String | (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account.
  'vault_id': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | (This parameter is applicable to MPC Wallets only) The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults).
  'project_id': "f47ac10b-58cc-4372-a567-0e02b2c3d479", // String | The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects). 
  'min_created_timestamp': 1635744000000, // Number | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time.
  'max_created_timestamp': 1635744000000, // Number | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time.
  'limit': 10, // Number | The maximum number of objects to return. For most operations, the value range is [1, 50].
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1", // String | An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk" // String | An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
};
apiInstance.listTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **String**| The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | [optional] 
 **cobo_ids** | **String**| A list of Cobo IDs, separated by comma. A Cobo ID can be used to track a transaction. | [optional] 
 **transaction_ids** | **String**| A list of transaction IDs, separated by comma. | [optional] 
 **transaction_hashes** | **String**| A list of transaction hashes, separated by comma. | [optional] 
 **types** | **String**| A list of transaction types, separated by comma. Possible values include:    - &#x60;Deposit&#x60;: A deposit transaction.   - &#x60;Withdrawal&#x60;: A withdrawal transaction.   - &#x60;ContractCall&#x60;: A transaction that interacts with a smart contract.   - &#x60;MessageSign&#x60;: A transaction that signs a message.    - &#x60;ExternalSafeTx&#x60;: A transaction to a Smart Contract Wallet (Safe{Wallet}) that requires one or multiple signatures to be executed.  | [optional] 
 **statuses** | **String**| A list of transaction statuses, separated by comma. Possible values include:    - &#x60;Submitted&#x60;: The transaction is submitted.   - &#x60;PendingScreening&#x60;: The transaction is pending screening by Risk Control.    - &#x60;PendingAuthorization&#x60;: The transaction is pending approvals.   - &#x60;PendingSignature&#x60;: The transaction is pending signature.    - &#x60;Broadcasting&#x60;: The transaction is being broadcast.   - &#x60;Confirming&#x60;: The transaction is waiting for the required number of confirmations.   - &#x60;Completed&#x60;: The transaction is completed.   - &#x60;Failed&#x60;: The transaction failed.   - &#x60;Rejected&#x60;: The transaction is rejected.   - &#x60;Pending&#x60;: The transaction is pending.  | [optional] 
 **wallet_ids** | **String**| A list of wallet IDs, separated by comma. | [optional] 
 **chain_ids** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **token_ids** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **asset_ids** | **String**| (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
 **vault_id** | **String**| (This parameter is applicable to MPC Wallets only) The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults). | [optional] 
 **project_id** | **String**| The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).  | [optional] 
 **min_created_timestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or after the specified time. | [optional] 
 **max_created_timestamp** | **Number**| The time when the transaction was created, in Unix timestamp format, measured in milliseconds. You can use this parameter to filter transactions created on or before the specified time. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendTransactionById

> CreateTransferTransaction201Response resendTransactionById(transaction_id, opts)

Resend transaction

This operation resends a specified transaction. Resending a transaction initiates a new attempt to process the transaction that failed previously. A transaction can be resent if its status is &#x60;failed&#x60;.  A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions in the SOL token from MPC Wallets.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'TransactionResend': new CoboWaas2.TransactionResend() // TransactionResend | The request body to resend transactions
};
apiInstance.resendTransactionById(transaction_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The transaction ID. | 
 **TransactionResend** | [**TransactionResend**](TransactionResend.md)| The request body to resend transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## speedupTransactionById

> CreateTransferTransaction201Response speedupTransactionById(transaction_id, opts)

Speed up transaction

This operation accelerates a specified transaction.   Speeding up a transaction will trigger an Replace-By-Fee (RBF) transaction which is a new version of the original transaction. It shares the same inputs but has a higher transaction fee to incentivize miners to prioritize its confirmation over the previous one. A transaction can be accelerated if its status is &#x60;Broadcasting&#x60;.  A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions from MPC Wallets, excluding transactions in the tokens VET, TRON, TVET, SOL, and TON.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('cobo-waas2');
// initial default api client
const apiClient = CoboWaas2.ApiClient.instance
// for dev env
// apiClient.setEnv(CoboWaas2.Env.DEV);
apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
// call api
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // String | The transaction ID.
const opts = {
  'TransactionRbf': new CoboWaas2.TransactionRbf() // TransactionRbf | The request body to drop or to speed up transactions
};
apiInstance.speedupTransactionById(transaction_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **String**| The transaction ID. | 
 **TransactionRbf** | [**TransactionRbf**](TransactionRbf.md)| The request body to drop or to speed up transactions | [optional] 

### Return type

[**CreateTransferTransaction201Response**](CreateTransferTransaction201Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

