# CoboWaas2.ApprovalUserDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_email** | **String** | The email address of the user who approved the transaction. | [optional] 
**pubkey** | **String** | The public key of the user who approved the transaction. | [optional] 
**signature** | **String** | The signature of the transaction approval. | [optional] 
**statement_uuid** | **String** | The UUID of the statement associated with the transaction approval. | [optional] 
**result** | [**ApprovalResult**](ApprovalResult.md) |  | [optional] 
**created_time** | **Number** | The timestamp when the approval was created. | [optional] 
**template_version** | **String** | The version of the template used for the transaction approval. | [optional] 
**header_title** | **String** | The title of the header for the transaction approval. | [optional] 
**is_for_sign** | **Boolean** | Indicates whether the approval is for signing. | [optional] 
**show_info** | [**ApprovalShowInfo**](ApprovalShowInfo.md) |  | [optional] 


