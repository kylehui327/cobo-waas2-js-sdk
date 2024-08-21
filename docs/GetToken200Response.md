# CoboWaas2.GetToken200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **String** | The access token. | [optional] 
**token_type** | **String** | The type of the tokens, which is Bearer. | [optional] 
**scope** | **String** | The scope of the access token to limit the app&#39;s access to the organization&#39;s resources.  **Note**: Currently this property value is empty. The scope of the access token is based on the permissions granted when the app user installs the app.  | [optional] 
**expires_in** | **Number** | The time in seconds in which the access token expires. | [optional] 
**refresh_token** | **String** | The refresh token, used to obtain a new access token when the current access token expires. | [optional] 


