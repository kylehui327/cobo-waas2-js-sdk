# CoboWaas2.RefreshTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **String** | The App ID, a unique identifier to distinguish Cobo Portal Apps. You can get the App ID by retrieving the Manifest file after receiving the notification of app launch approval. | [optional] 
**grant_type** | **String** | The type of the permission granting. To refresh an access token, you need to set the value as &#x60;refresh_token&#x60;. | [optional] 
**refresh_token** | **String** | The refresh token of the expired or expiring access token. | [optional] 


