# CoboWaas2.TravelRuleDepositLegalEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selected_entity_type** | **String** | Specifies the type of entity associated with the transaction. | 
**legal_name** | **String** | The legal name of the entity. | 
**date_of_incorporation** | **Date** | The incorporation date of the entity. This field is required when: - **Calling**: &#x60;travel_rule/transaction/limitation&#x60; API returns &#x60;is_threshold_reached &#x3D; true&#x60;. - **Entity Type**: LEGAL. Otherwise, this field can be omitted.  | [optional] 
**place_of_incorporation** | **String** | The place of incorporation of the entity. This field is required when: - **Calling**: &#x60;travel_rule/transaction/limitation&#x60; API returns &#x60;is_threshold_reached &#x3D; true&#x60;. - **Entity Type**: LEGAL. Otherwise, this field can be omitted.  | [optional] 



## Enum: SelectedEntityTypeEnum


* `LEGAL` (value: `"LEGAL"`)

* `NATURAL` (value: `"NATURAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




