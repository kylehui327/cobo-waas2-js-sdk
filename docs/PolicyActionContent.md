# CoboWaas2.PolicyActionContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The quorum action content type. Possible values include:    - &#x60;FULL_APPROVAL&#x60;: The content type is approved by all persons.   - &#x60;PART_APPROVAL&#x60;: The content type is approved by some persons.  | 
**roles** | **[String]** |  | [optional] 
**user_ids** | **[String]** |  | [optional] 
**threshold** | **Number** | The number of persons need approved, such as 2. | [optional] 



## Enum: TypeEnum


* `FULL_APPROVAL` (value: `"FULL_APPROVAL"`)

* `PART_APPROVAL` (value: `"PART_APPROVAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




