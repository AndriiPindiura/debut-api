# Backend.VersionApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionCount**](VersionApi.md#versionCount) | **GET** /Versions/count | Count instances of the model matched by where from the data source.
[**versionCreate**](VersionApi.md#versionCreate) | **POST** /Versions | Create a new instance of the model and persist it into the data source.
[**versionCreateChangeStreamGetVersionsChangeStream**](VersionApi.md#versionCreateChangeStreamGetVersionsChangeStream) | **GET** /Versions/change-stream | Create a change stream.
[**versionCreateChangeStreamPostVersionsChangeStream**](VersionApi.md#versionCreateChangeStreamPostVersionsChangeStream) | **POST** /Versions/change-stream | Create a change stream.
[**versionDeleteById**](VersionApi.md#versionDeleteById) | **DELETE** /Versions/{id} | Delete a model instance by {{id}} from the data source.
[**versionExistsGetVersionsidExists**](VersionApi.md#versionExistsGetVersionsidExists) | **GET** /Versions/{id}/exists | Check whether a model instance exists in the data source.
[**versionExistsHeadVersionsid**](VersionApi.md#versionExistsHeadVersionsid) | **HEAD** /Versions/{id} | Check whether a model instance exists in the data source.
[**versionFind**](VersionApi.md#versionFind) | **GET** /Versions | Find all instances of the model matched by filter from the data source.
[**versionFindById**](VersionApi.md#versionFindById) | **GET** /Versions/{id} | Find a model instance by {{id}} from the data source.
[**versionFindOne**](VersionApi.md#versionFindOne) | **GET** /Versions/findOne | Find first instance of the model matched by filter from the data source.
[**versionPatchOrCreate**](VersionApi.md#versionPatchOrCreate) | **PATCH** /Versions | Patch an existing model instance or insert a new one into the data source.
[**versionPrototypeGetArticle**](VersionApi.md#versionPrototypeGetArticle) | **GET** /Versions/{id}/article | Fetches belongsTo relation article.
[**versionPrototypePatchAttributes**](VersionApi.md#versionPrototypePatchAttributes) | **PATCH** /Versions/{id} | Patch attributes for a model instance and persist it into the data source.
[**versionReplaceByIdPostVersionsidReplace**](VersionApi.md#versionReplaceByIdPostVersionsidReplace) | **POST** /Versions/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**versionReplaceByIdPutVersionsid**](VersionApi.md#versionReplaceByIdPutVersionsid) | **PUT** /Versions/{id} | Replace attributes for a model instance and persist it into the data source.
[**versionReplaceOrCreatePostVersionsReplaceOrCreate**](VersionApi.md#versionReplaceOrCreatePostVersionsReplaceOrCreate) | **POST** /Versions/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**versionReplaceOrCreatePutVersions**](VersionApi.md#versionReplaceOrCreatePutVersions) | **PUT** /Versions | Replace an existing model instance or insert a new one into the data source.
[**versionUpdateAll**](VersionApi.md#versionUpdateAll) | **POST** /Versions/update | Update instances of the model matched by {{where}} from the data source.
[**versionUpsertWithWhere**](VersionApi.md#versionUpsertWithWhere) | **POST** /Versions/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="versionCount"></a>
# **versionCount**
> InlineResponse200 versionCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionCount(opts, callback);
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

<a name="versionCreate"></a>
# **versionCreate**
> Version versionCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionCreateChangeStreamGetVersionsChangeStream"></a>
# **versionCreateChangeStreamGetVersionsChangeStream**
> File versionCreateChangeStreamGetVersionsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionCreateChangeStreamGetVersionsChangeStream(opts, callback);
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

<a name="versionCreateChangeStreamPostVersionsChangeStream"></a>
# **versionCreateChangeStreamPostVersionsChangeStream**
> File versionCreateChangeStreamPostVersionsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionCreateChangeStreamPostVersionsChangeStream(opts, callback);
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

<a name="versionDeleteById"></a>
# **versionDeleteById**
> Object versionDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionDeleteById(id, callback);
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

<a name="versionExistsGetVersionsidExists"></a>
# **versionExistsGetVersionsidExists**
> InlineResponse2001 versionExistsGetVersionsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionExistsGetVersionsidExists(id, callback);
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

<a name="versionExistsHeadVersionsid"></a>
# **versionExistsHeadVersionsid**
> InlineResponse2001 versionExistsHeadVersionsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionExistsHeadVersionsid(id, callback);
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

<a name="versionFind"></a>
# **versionFind**
> [Version] versionFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Version]**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionFindById"></a>
# **versionFindById**
> Version versionFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionFindOne"></a>
# **versionFindOne**
> Version versionFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

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
apiInstance.versionFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionPatchOrCreate"></a>
# **versionPatchOrCreate**
> Version versionPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionPatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionPrototypeGetArticle"></a>
# **versionPrototypeGetArticle**
> Article versionPrototypeGetArticle(id, opts)

Fetches belongsTo relation article.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Version id

var opts = { 
  'refresh': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionPrototypeGetArticle(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Version id | 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionPrototypePatchAttributes"></a>
# **versionPrototypePatchAttributes**
> Version versionPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Version id

var opts = { 
  'data': new Backend.Version() // Version | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionPrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Version id | 
 **data** | [**Version**](Version.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionReplaceByIdPostVersionsidReplace"></a>
# **versionReplaceByIdPostVersionsidReplace**
> Version versionReplaceByIdPostVersionsidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionReplaceByIdPostVersionsidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionReplaceByIdPutVersionsid"></a>
# **versionReplaceByIdPutVersionsid**
> Version versionReplaceByIdPutVersionsid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionReplaceByIdPutVersionsid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionReplaceOrCreatePostVersionsReplaceOrCreate"></a>
# **versionReplaceOrCreatePostVersionsReplaceOrCreate**
> Version versionReplaceOrCreatePostVersionsReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionReplaceOrCreatePostVersionsReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionReplaceOrCreatePutVersions"></a>
# **versionReplaceOrCreatePutVersions**
> Version versionReplaceOrCreatePutVersions(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'data': new Backend.Version() // Version | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionReplaceOrCreatePutVersions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Version**](Version.md)| Model instance data | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionUpdateAll"></a>
# **versionUpdateAll**
> InlineResponse2002 versionUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Version() // Version | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Version**](Version.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="versionUpsertWithWhere"></a>
# **versionUpsertWithWhere**
> Version versionUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.VersionApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Version() // Version | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.versionUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Version**](Version.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

