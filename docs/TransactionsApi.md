# CoboWaas2.TransactionsApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastSignedTransactions**](TransactionsApi.md#broadcastSignedTransactions) | **POST** /transactions/broadcast | Broadcast signed transactions
[**cancelTransactionById**](TransactionsApi.md#cancelTransactionById) | **POST** /transactions/{transaction_id}/cancel | Cancel transaction
[**checkLoopTransfers**](TransactionsApi.md#checkLoopTransfers) | **GET** /transactions/check_loop_transfers | Check Loop transfers
[**createContractCallTransaction**](TransactionsApi.md#createContractCallTransaction) | **POST** /transactions/contract_call | Call smart contract
[**createMessageSignTransaction**](TransactionsApi.md#createMessageSignTransaction) | **POST** /transactions/message_sign | Sign message
[**createTransferTransaction**](TransactionsApi.md#createTransferTransaction) | **POST** /transactions/transfer | Transfer token
[**dropTransactionById**](TransactionsApi.md#dropTransactionById) | **POST** /transactions/{transaction_id}/drop | Drop transaction
[**estimateFee**](TransactionsApi.md#estimateFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
[**getTransactionById**](TransactionsApi.md#getTransactionById) | **GET** /transactions/{transaction_id} | Get transaction information
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List all transactions
[**resendTransactionById**](TransactionsApi.md#resendTransactionById) | **POST** /transactions/{transaction_id}/resend | Resend transaction
[**speedupTransactionById**](TransactionsApi.md#speedupTransactionById) | **POST** /transactions/{transaction_id}/speedup | Speed up transaction



## broadcastSignedTransactions

> [BroadcastSignedTransactions201ResponseInner] broadcastSignedTransactions(opts)

Broadcast signed transactions

&lt;Note&gt;This operation is only applicable to the staking scenarios.&lt;/Note&gt; This operation broadcasts a list of signed transactions.   If you set &#x60;auto_broadcast&#x60; to &#x60;false&#x60; when [creating a staking activity](/v2/api-references/staking/create-stake-activity), the transaction will not be submitted to the blockchain automatically after being signed. In such cases, you can call this operation to broadcast the transaction to the blockchain.  A transaction can only be broadcast if its status is &#x60;Broadcasting&#x60;. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'BroadcastSignedTransactionsRequest': new CoboWaas2.BroadcastSignedTransactionsRequest()
};
apiInstance.broadcastSignedTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **BroadcastSignedTransactionsRequest** | [**BroadcastSignedTransactionsRequest**](BroadcastSignedTransactionsRequest.md)| The request body to broadcast a list of signed transactions. | [optional] 

### Return type

[**[BroadcastSignedTransactions201ResponseInner]**](BroadcastSignedTransactions201ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelTransactionById

> CreateTransferTransaction201Response cancelTransactionById(transaction_id)

Cancel transaction

This operation cancels a specified transaction. A transaction can be cancelled if its status is either of the following: - &#x60;Submitted&#x60; - &#x60;PendingScreening&#x60; - &#x60;PendingAuthorization&#x60; - &#x60;PendingSignature&#x60;   A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions from MPC Wallets and Smart Contract Wallets.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
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


## checkLoopTransfers

> [CheckLoopTransfers200ResponseInner] checkLoopTransfers(token_id, source_wallet_id, destination_addresses)

Check Loop transfers

This operation verifies if the transactions from a given source wallet to a list of given destinations can be executed as Loop transfers.   For more information about Loop, see [Loop&#39;s website](https://loop.top/). 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const token_id = "ETH_USDT";
const source_wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const destination_addresses = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97";
apiInstance.checkLoopTransfers(token_id, source_wallet_id, destination_addresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | 
 **source_wallet_id** | **String**| The wallet ID of the transaction source. | 
 **destination_addresses** | **String**| A list of destination addresses, separated by comma. | 

### Return type

[**[CheckLoopTransfers200ResponseInner]**](CheckLoopTransfers200ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createContractCallTransaction

> CreateTransferTransaction201Response createContractCallTransaction(opts)

Call smart contract

This operation creates a transaction to interact with a smart contract on the blockchain.  You need to provide details such as the source address, destination address, and the calldata. You can specify the fee-related properties to limit the transaction fee. A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;Currently, this operation only applies to the transactions from MPC Wallets or Smart Contract Wallets on the blockchains that have a similar architecture to Ethereum.&lt;/Note&gt;  &lt;Info&gt;If you initiate a transaction from a Smart Contract Wallet, a relevant transaction will be triggered from the Delegate to the Cobo Safe&#39;s address of the Smart Contract Wallet, with a transfer amount of &lt;code&gt;0&lt;/code&gt;.&lt;/Info&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'ContractCallParams': new CoboWaas2.ContractCallParams()
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

This operation creates a transaction to sign the provided message using cryptographic techniques.  In some scenarios, you want to sign a message for identity authentication or transaction approval. You need to provide details such as the source address, destination address, and the message to be signed. A transaction request for tracking is returned upon successful operation.  You can get the signature result by calling [Get transaction information](/v2/api-references/transactions/get-transaction-information).   &lt;Note&gt;This operation only applies to transactions from MPC Wallets.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'MessageSignParams': new CoboWaas2.MessageSignParams()
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

The operation transfers your assets from a wallet created on Cobo Protal to another address.  You need to specify details such as the sender address and recipient address, token ID, and the amount to transfer. You can specify the fee-related properties to limit the transaction fee. A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;You can transfer tokens to multiple addresses only if you use MPC Wallets as the transaction source. You should use the &lt;code&gt;utxo_outputs&lt;/code&gt; property to specify the destination addresses.&lt;/Note&gt;  &lt;Info&gt;If you initiate a transaction from a Smart Contract Wallet, a relevant transaction will be triggered from the Delegate to the Cobo Safe&#39;s address of the Smart Contract Wallet, with a transfer amount of &lt;code&gt;0&lt;/code&gt;.&lt;/Info&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'TransferParams': new CoboWaas2.TransferParams()
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

This operation drops a specified transaction.   Dropping a transaction will trigger a Replace-By-Fee (RBF) transaction which is a new version of the original transaction. It has a higher transaction fee to incentivize miners to prioritize its confirmation over the original one. A transaction can be dropped if its status is &#x60;Broadcasting&#x60;.  &lt;ul&gt; &lt;li&gt;For EVM chains, this RBF transaction has a transfer amount of &#x60;0&#x60; and the sending address is the same as the receiving address.&lt;/li&gt; &lt;li&gt;For UTXO chains, this RBF transaction has a transfer amount of &#x60;0&#x60; and the destination address is the same as the change address in the original transaction.&lt;/li&gt; &lt;/ul&gt;  A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;This operation only applies to transactions from MPC Wallets and Smart Contract Wallets. It does not apply to transactions on the following chains: VET, TRON, TVET, SOL, and TON.&lt;/Note&gt;  &lt;Info&gt;If you drop a transaction from a Smart Contract Wallet, two RBF transactions will be triggered, one for the transaction from the Smart Contract Wallet, and the other for the transaction from the Delegate.&lt;/Info&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'TransactionRbf': new CoboWaas2.TransactionRbf()
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
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'EstimateFeeParams': new CoboWaas2.EstimateFeeParams()
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
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
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
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const opts = {
  'request_id': "web_send_by_user_327_1610444045047",
  'cobo_ids': "20231213122855000000000000000000,20231213122955000000000000000000",
  'transaction_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,557918d2-632a-4fe1-932f-315711f05fe3",
  'transaction_hashes': "239861be9a4afe080c359b7fe4a1d035945ec46256b1a0f44d1267c71de8ec28",
  'types': "Deposit,Withdrawal",
  'statuses': "Completed,Failed",
  'wallet_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,1ddca562-8434-41c9-8809-d437bad9c868",
  'chain_ids': "BTC,ETH",
  'token_ids': "ETH_USDT,ETH_USDC",
  'asset_ids': "USDT,USDC",
  'vault_id': "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'project_id': "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'min_created_timestamp': 1635744000000,
  'max_created_timestamp': 1635744000000,
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
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
 **statuses** | **String**| A list of transaction statuses, separated by comma. Possible values include:    - &#x60;Submitted&#x60;: The transaction is submitted.   - &#x60;PendingScreening&#x60;: The transaction is pending screening by Risk Control.    - &#x60;PendingAuthorization&#x60;: The transaction is pending approvals.   - &#x60;PendingSignature&#x60;: The transaction is pending signature.    - &#x60;Broadcasting&#x60;: The transaction is being broadcast.   - &#x60;Confirming&#x60;: The transaction is waiting for the required number of confirmations.   - &#x60;Completed&#x60;: The transaction is completed.   - &#x60;Failed&#x60;: The transaction failed.   - &#x60;Rejected&#x60;: The transaction is rejected.   - &#x60;Pending&#x60;: The transaction is waiting to be included in the next block of the blockchain.  | [optional] 
 **wallet_ids** | **String**| A list of wallet IDs, separated by comma. | [optional] 
 **chain_ids** | **String**| A list of chain IDs, separated by comma. The chain ID is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains). | [optional] 
 **token_ids** | **String**| A list of token IDs, separated by comma. The token ID is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens). | [optional] 
 **asset_ids** | **String**| (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
 **vault_id** | **String**| The vault ID, which you can retrieve by calling [List all vaults](/v2/api-references/wallets--mpc-wallets/list-all-vaults). | [optional] 
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

This operation resends a specified transaction. Resending a transaction initiates a new attempt to process the transaction that failed previously. A transaction can be resent if its status is &#x60;failed&#x60;.  A transaction request for tracking is returned upon successful operation. &lt;Note&gt;This operation only applies to transactions from MPC Wallets in the SOL token.&lt;/Note&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'TransactionResend': new CoboWaas2.TransactionResend()
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

This operation accelerates a specified transaction.   Speeding up a transaction will trigger a Replace-By-Fee (RBF) transaction which is a new version of the original transaction. It shares the same inputs but has a higher transaction fee to incentivize miners to prioritize its confirmation over the previous one. A transaction can be accelerated if its status is &#x60;Broadcasting&#x60;.  A transaction request for tracking is returned upon successful operation.  &lt;Note&gt;This operation only applies to transactions from MPC Wallets and Smart Contract Wallets. It does not apply to transactions on the following chains: VET, TRON, TVET, SOL, and TON.&lt;/Note&gt;  &lt;Info&gt;If you speed up a transaction from a Smart Contract Wallet, two RBF transactions will be triggered, one for the transaction from the Smart Contract Wallet, and the other for the transaction from the Delegate.&lt;/Info&gt; 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.TransactionsApi();
const transaction_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'TransactionRbf': new CoboWaas2.TransactionRbf()
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

