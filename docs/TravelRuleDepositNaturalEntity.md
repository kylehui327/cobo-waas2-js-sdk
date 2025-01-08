# CoboWaas2.TravelRuleDepositNaturalEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_entity_type** | **String** | Specifies the type of entity associated with the transaction. | 
**first_name** | **String** | The first name of the user. | 
**last_name** | **String** | The last name of the user. | 
**date_of_birth** | **Date** | The date of birth of the user. This field is required when: - **Calling**: &#x60;travel_rule/transaction/limitation&#x60; API returns &#x60;is_threshold_reached &#x3D; true&#x60;. - **Entity Type**: NATURAL. Otherwise, this field can be omitted.  | [optional] 
**place_of_birth** | **String** | The place of birth of the user. This field is required when: - **Calling**: &#x60;travel_rule/transaction/limitation&#x60; API returns &#x60;is_threshold_reached &#x3D; true&#x60;. - **Entity Type**: NATURAL. Otherwise, this field can be omitted.  | [optional] 



## Enum: SelectedEntityTypeEnum


* `LEGAL` (value: `"LEGAL"`)

* `NATURAL` (value: `"NATURAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




