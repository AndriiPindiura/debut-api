# Backend.EditorRoleApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editorRoleCount**](EditorRoleApi.md#editorRoleCount) | **GET** /EditorRoles/count | Count instances of the model matched by where from the data source.
[**editorRoleCreate**](EditorRoleApi.md#editorRoleCreate) | **POST** /EditorRoles | Create a new instance of the model and persist it into the data source.
[**editorRoleCreateChangeStreamGetEditorRolesChangeStream**](EditorRoleApi.md#editorRoleCreateChangeStreamGetEditorRolesChangeStream) | **GET** /EditorRoles/change-stream | Create a change stream.
[**editorRoleCreateChangeStreamPostEditorRolesChangeStream**](EditorRoleApi.md#editorRoleCreateChangeStreamPostEditorRolesChangeStream) | **POST** /EditorRoles/change-stream | Create a change stream.
[**editorRoleDeleteById**](EditorRoleApi.md#editorRoleDeleteById) | **DELETE** /EditorRoles/{id} | Delete a model instance by {{id}} from the data source.
[**editorRoleExistsGetEditorRolesidExists**](EditorRoleApi.md#editorRoleExistsGetEditorRolesidExists) | **GET** /EditorRoles/{id}/exists | Check whether a model instance exists in the data source.
[**editorRoleExistsHeadEditorRolesid**](EditorRoleApi.md#editorRoleExistsHeadEditorRolesid) | **HEAD** /EditorRoles/{id} | Check whether a model instance exists in the data source.
[**editorRoleFind**](EditorRoleApi.md#editorRoleFind) | **GET** /EditorRoles | Find all instances of the model matched by filter from the data source.
[**editorRoleFindById**](EditorRoleApi.md#editorRoleFindById) | **GET** /EditorRoles/{id} | Find a model instance by {{id}} from the data source.
[**editorRoleFindOne**](EditorRoleApi.md#editorRoleFindOne) | **GET** /EditorRoles/findOne | Find first instance of the model matched by filter from the data source.
[**editorRolePatchOrCreate**](EditorRoleApi.md#editorRolePatchOrCreate) | **PATCH** /EditorRoles | Patch an existing model instance or insert a new one into the data source.
[**editorRolePrototypePatchAttributes**](EditorRoleApi.md#editorRolePrototypePatchAttributes) | **PATCH** /EditorRoles/{id} | Patch attributes for a model instance and persist it into the data source.
[**editorRoleReplaceByIdPostEditorRolesidReplace**](EditorRoleApi.md#editorRoleReplaceByIdPostEditorRolesidReplace) | **POST** /EditorRoles/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**editorRoleReplaceByIdPutEditorRolesid**](EditorRoleApi.md#editorRoleReplaceByIdPutEditorRolesid) | **PUT** /EditorRoles/{id} | Replace attributes for a model instance and persist it into the data source.
[**editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate**](EditorRoleApi.md#editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate) | **POST** /EditorRoles/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**editorRoleReplaceOrCreatePutEditorRoles**](EditorRoleApi.md#editorRoleReplaceOrCreatePutEditorRoles) | **PUT** /EditorRoles | Replace an existing model instance or insert a new one into the data source.
[**editorRoleUpdateAll**](EditorRoleApi.md#editorRoleUpdateAll) | **POST** /EditorRoles/update | Update instances of the model matched by {{where}} from the data source.
[**editorRoleUpsertWithWhere**](EditorRoleApi.md#editorRoleUpsertWithWhere) | **POST** /EditorRoles/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="editorRoleCount"></a>
# **editorRoleCount**
> InlineResponse200 editorRoleCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleCount(opts, callback);
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

<a name="editorRoleCreate"></a>
# **editorRoleCreate**
> EditorRole editorRoleCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleCreateChangeStreamGetEditorRolesChangeStream"></a>
# **editorRoleCreateChangeStreamGetEditorRolesChangeStream**
> File editorRoleCreateChangeStreamGetEditorRolesChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleCreateChangeStreamGetEditorRolesChangeStream(opts, callback);
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

<a name="editorRoleCreateChangeStreamPostEditorRolesChangeStream"></a>
# **editorRoleCreateChangeStreamPostEditorRolesChangeStream**
> File editorRoleCreateChangeStreamPostEditorRolesChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleCreateChangeStreamPostEditorRolesChangeStream(opts, callback);
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

<a name="editorRoleDeleteById"></a>
# **editorRoleDeleteById**
> Object editorRoleDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleDeleteById(id, callback);
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

<a name="editorRoleExistsGetEditorRolesidExists"></a>
# **editorRoleExistsGetEditorRolesidExists**
> InlineResponse2001 editorRoleExistsGetEditorRolesidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleExistsGetEditorRolesidExists(id, callback);
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

<a name="editorRoleExistsHeadEditorRolesid"></a>
# **editorRoleExistsHeadEditorRolesid**
> InlineResponse2001 editorRoleExistsHeadEditorRolesid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleExistsHeadEditorRolesid(id, callback);
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

<a name="editorRoleFind"></a>
# **editorRoleFind**
> [EditorRole] editorRoleFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[EditorRole]**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleFindById"></a>
# **editorRoleFindById**
> EditorRole editorRoleFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleFindOne"></a>
# **editorRoleFindOne**
> EditorRole editorRoleFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

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
apiInstance.editorRoleFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRolePatchOrCreate"></a>
# **editorRolePatchOrCreate**
> EditorRole editorRolePatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRolePatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRolePrototypePatchAttributes"></a>
# **editorRolePrototypePatchAttributes**
> EditorRole editorRolePrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | EditorRole id

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRolePrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| EditorRole id | 
 **data** | [**EditorRole**](EditorRole.md)| An object of model property name/value pairs | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleReplaceByIdPostEditorRolesidReplace"></a>
# **editorRoleReplaceByIdPostEditorRolesidReplace**
> EditorRole editorRoleReplaceByIdPostEditorRolesidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleReplaceByIdPostEditorRolesidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleReplaceByIdPutEditorRolesid"></a>
# **editorRoleReplaceByIdPutEditorRolesid**
> EditorRole editorRoleReplaceByIdPutEditorRolesid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleReplaceByIdPutEditorRolesid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate"></a>
# **editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate**
> EditorRole editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleReplaceOrCreatePostEditorRolesReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleReplaceOrCreatePutEditorRoles"></a>
# **editorRoleReplaceOrCreatePutEditorRoles**
> EditorRole editorRoleReplaceOrCreatePutEditorRoles(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleReplaceOrCreatePutEditorRoles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EditorRole**](EditorRole.md)| Model instance data | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleUpdateAll"></a>
# **editorRoleUpdateAll**
> InlineResponse2002 editorRoleUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.EditorRole() // EditorRole | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**EditorRole**](EditorRole.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="editorRoleUpsertWithWhere"></a>
# **editorRoleUpsertWithWhere**
> EditorRole editorRoleUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.EditorRoleApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.EditorRole() // EditorRole | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorRoleUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**EditorRole**](EditorRole.md)| An object of model property name/value pairs | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

