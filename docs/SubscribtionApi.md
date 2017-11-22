# Backend.SubscribtionApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscribtionCount**](SubscribtionApi.md#subscribtionCount) | **GET** /Subscribtions/count | Count instances of the model matched by where from the data source.
[**subscribtionCreate**](SubscribtionApi.md#subscribtionCreate) | **POST** /Subscribtions | Create a new instance of the model and persist it into the data source.
[**subscribtionCreateChangeStreamGetSubscribtionsChangeStream**](SubscribtionApi.md#subscribtionCreateChangeStreamGetSubscribtionsChangeStream) | **GET** /Subscribtions/change-stream | Create a change stream.
[**subscribtionCreateChangeStreamPostSubscribtionsChangeStream**](SubscribtionApi.md#subscribtionCreateChangeStreamPostSubscribtionsChangeStream) | **POST** /Subscribtions/change-stream | Create a change stream.
[**subscribtionDeleteById**](SubscribtionApi.md#subscribtionDeleteById) | **DELETE** /Subscribtions/{id} | Delete a model instance by {{id}} from the data source.
[**subscribtionExistsGetSubscribtionsidExists**](SubscribtionApi.md#subscribtionExistsGetSubscribtionsidExists) | **GET** /Subscribtions/{id}/exists | Check whether a model instance exists in the data source.
[**subscribtionExistsHeadSubscribtionsid**](SubscribtionApi.md#subscribtionExistsHeadSubscribtionsid) | **HEAD** /Subscribtions/{id} | Check whether a model instance exists in the data source.
[**subscribtionFind**](SubscribtionApi.md#subscribtionFind) | **GET** /Subscribtions | Find all instances of the model matched by filter from the data source.
[**subscribtionFindById**](SubscribtionApi.md#subscribtionFindById) | **GET** /Subscribtions/{id} | Find a model instance by {{id}} from the data source.
[**subscribtionFindOne**](SubscribtionApi.md#subscribtionFindOne) | **GET** /Subscribtions/findOne | Find first instance of the model matched by filter from the data source.
[**subscribtionPatchOrCreate**](SubscribtionApi.md#subscribtionPatchOrCreate) | **PATCH** /Subscribtions | Patch an existing model instance or insert a new one into the data source.
[**subscribtionPrototypePatchAttributes**](SubscribtionApi.md#subscribtionPrototypePatchAttributes) | **PATCH** /Subscribtions/{id} | Patch attributes for a model instance and persist it into the data source.
[**subscribtionReplaceByIdPostSubscribtionsidReplace**](SubscribtionApi.md#subscribtionReplaceByIdPostSubscribtionsidReplace) | **POST** /Subscribtions/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**subscribtionReplaceByIdPutSubscribtionsid**](SubscribtionApi.md#subscribtionReplaceByIdPutSubscribtionsid) | **PUT** /Subscribtions/{id} | Replace attributes for a model instance and persist it into the data source.
[**subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate**](SubscribtionApi.md#subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate) | **POST** /Subscribtions/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**subscribtionReplaceOrCreatePutSubscribtions**](SubscribtionApi.md#subscribtionReplaceOrCreatePutSubscribtions) | **PUT** /Subscribtions | Replace an existing model instance or insert a new one into the data source.
[**subscribtionUpdateAll**](SubscribtionApi.md#subscribtionUpdateAll) | **POST** /Subscribtions/update | Update instances of the model matched by {{where}} from the data source.
[**subscribtionUpsertWithWhere**](SubscribtionApi.md#subscribtionUpsertWithWhere) | **POST** /Subscribtions/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="subscribtionCount"></a>
# **subscribtionCount**
> InlineResponse200 subscribtionCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'where': "where_example" // String | Criteria to match model instances
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionCount(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionCreate"></a>
# **subscribtionCreate**
> Subscribtion subscribtionCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionCreateChangeStreamGetSubscribtionsChangeStream"></a>
# **subscribtionCreateChangeStreamGetSubscribtionsChangeStream**
> File subscribtionCreateChangeStreamGetSubscribtionsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'options': "options_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionCreateChangeStreamGetSubscribtionsChangeStream(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionCreateChangeStreamPostSubscribtionsChangeStream"></a>
# **subscribtionCreateChangeStreamPostSubscribtionsChangeStream**
> File subscribtionCreateChangeStreamPostSubscribtionsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'options': "options_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionCreateChangeStreamPostSubscribtionsChangeStream(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionDeleteById"></a>
# **subscribtionDeleteById**
> Object subscribtionDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionDeleteById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionExistsGetSubscribtionsidExists"></a>
# **subscribtionExistsGetSubscribtionsidExists**
> InlineResponse2001 subscribtionExistsGetSubscribtionsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionExistsGetSubscribtionsidExists(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionExistsHeadSubscribtionsid"></a>
# **subscribtionExistsHeadSubscribtionsid**
> InlineResponse2001 subscribtionExistsHeadSubscribtionsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionExistsHeadSubscribtionsid(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionFind"></a>
# **subscribtionFind**
> [Subscribtion] subscribtionFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Subscribtion]**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionFindById"></a>
# **subscribtionFindById**
> Subscribtion subscribtionFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id

var opts = { 
  'filter': "filter_example" // String | Filter defining fields and include - must be a JSON-encoded string ({\"something\":\"value\"})
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionFindOne"></a>
# **subscribtionFindOne**
> Subscribtion subscribtionFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'filter': "filter_example" // String | Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\"something\":\"value\"})
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionPatchOrCreate"></a>
# **subscribtionPatchOrCreate**
> Subscribtion subscribtionPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionPatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionPrototypePatchAttributes"></a>
# **subscribtionPrototypePatchAttributes**
> Subscribtion subscribtionPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Subscribtion id

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionPrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscribtion id | 
 **data** | [**Subscribtion**](Subscribtion.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionReplaceByIdPostSubscribtionsidReplace"></a>
# **subscribtionReplaceByIdPostSubscribtionsidReplace**
> Subscribtion subscribtionReplaceByIdPostSubscribtionsidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionReplaceByIdPostSubscribtionsidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionReplaceByIdPutSubscribtionsid"></a>
# **subscribtionReplaceByIdPutSubscribtionsid**
> Subscribtion subscribtionReplaceByIdPutSubscribtionsid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionReplaceByIdPutSubscribtionsid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate"></a>
# **subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate**
> Subscribtion subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionReplaceOrCreatePutSubscribtions"></a>
# **subscribtionReplaceOrCreatePutSubscribtions**
> Subscribtion subscribtionReplaceOrCreatePutSubscribtions(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionReplaceOrCreatePutSubscribtions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Subscribtion**](Subscribtion.md)| Model instance data | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionUpdateAll"></a>
# **subscribtionUpdateAll**
> InlineResponse2002 subscribtionUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Subscribtion() // Subscribtion | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Subscribtion**](Subscribtion.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="subscribtionUpsertWithWhere"></a>
# **subscribtionUpsertWithWhere**
> Subscribtion subscribtionUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.SubscribtionApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Subscribtion() // Subscribtion | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribtionUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Subscribtion**](Subscribtion.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

