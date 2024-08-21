# CoboWaas2.TSSRequestWebhookEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. | 
**tss_request_id** | **String** | The TSS request ID. | [optional] 
**source_key_share_holder_group** | [**SourceGroup**](SourceGroup.md) |  | [optional] 
**target_key_share_holder_group_id** | **String** | The target key share holder group ID. | [optional] 
**type** | [**TSSRequestType**](TSSRequestType.md) |  | [optional] 
**status** | [**TSSRequestStatus**](TSSRequestStatus.md) |  | [optional] 
**description** | **String** | The description of the TSS request. | [optional] 
**created_timestamp** | **Number** | The TSS request&#39;s creation time in Unix timestamp format, measured in milliseconds. | [optional] 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




