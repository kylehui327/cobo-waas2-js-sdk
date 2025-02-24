# CoboWaas2.SolContractCallInstruction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**[SolContractCallAccount]**](SolContractCallAccount.md) |  | 
**data** | **String** | data used for calling Solana contract.  | 
**program_id** | **String** | contract address. when calling a Solana contract, the to_address parameter needs to match the program_id parameter. If multiple contracts are being called, then the to_address parameter should match the program_id parameter of the first instruction.  | 


