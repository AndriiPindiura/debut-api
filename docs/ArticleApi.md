# Backend.ArticleApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articleCount**](ArticleApi.md#articleCount) | **GET** /Articles/count | Count instances of the model matched by where from the data source.
[**articleCreate**](ArticleApi.md#articleCreate) | **POST** /Articles | Create a new instance of the model and persist it into the data source.
[**articleCreateChangeStreamGetArticlesChangeStream**](ArticleApi.md#articleCreateChangeStreamGetArticlesChangeStream) | **GET** /Articles/change-stream | Create a change stream.
[**articleCreateChangeStreamPostArticlesChangeStream**](ArticleApi.md#articleCreateChangeStreamPostArticlesChangeStream) | **POST** /Articles/change-stream | Create a change stream.
[**articleDeleteById**](ArticleApi.md#articleDeleteById) | **DELETE** /Articles/{id} | Delete a model instance by {{id}} from the data source.
[**articleExistsGetArticlesidExists**](ArticleApi.md#articleExistsGetArticlesidExists) | **GET** /Articles/{id}/exists | Check whether a model instance exists in the data source.
[**articleExistsHeadArticlesid**](ArticleApi.md#articleExistsHeadArticlesid) | **HEAD** /Articles/{id} | Check whether a model instance exists in the data source.
[**articleFind**](ArticleApi.md#articleFind) | **GET** /Articles | Find all instances of the model matched by filter from the data source.
[**articleFindById**](ArticleApi.md#articleFindById) | **GET** /Articles/{id} | Find a model instance by {{id}} from the data source.
[**articleFindOne**](ArticleApi.md#articleFindOne) | **GET** /Articles/findOne | Find first instance of the model matched by filter from the data source.
[**articlePatchOrCreate**](ArticleApi.md#articlePatchOrCreate) | **PATCH** /Articles | Patch an existing model instance or insert a new one into the data source.
[**articlePrototypeGetFeed**](ArticleApi.md#articlePrototypeGetFeed) | **GET** /Articles/{id}/feed | Fetches belongsTo relation feed.
[**articlePrototypePatchAttributes**](ArticleApi.md#articlePrototypePatchAttributes) | **PATCH** /Articles/{id} | Patch attributes for a model instance and persist it into the data source.
[**articleReplaceByIdPostArticlesidReplace**](ArticleApi.md#articleReplaceByIdPostArticlesidReplace) | **POST** /Articles/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**articleReplaceByIdPutArticlesid**](ArticleApi.md#articleReplaceByIdPutArticlesid) | **PUT** /Articles/{id} | Replace attributes for a model instance and persist it into the data source.
[**articleReplaceOrCreatePostArticlesReplaceOrCreate**](ArticleApi.md#articleReplaceOrCreatePostArticlesReplaceOrCreate) | **POST** /Articles/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**articleReplaceOrCreatePutArticles**](ArticleApi.md#articleReplaceOrCreatePutArticles) | **PUT** /Articles | Replace an existing model instance or insert a new one into the data source.
[**articleUpdateAll**](ArticleApi.md#articleUpdateAll) | **POST** /Articles/update | Update instances of the model matched by {{where}} from the data source.
[**articleUpsertWithWhere**](ArticleApi.md#articleUpsertWithWhere) | **POST** /Articles/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="articleCount"></a>
# **articleCount**
> InlineResponse200 articleCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleCount(opts, callback);
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

<a name="articleCreate"></a>
# **articleCreate**
> Article articleCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleCreateChangeStreamGetArticlesChangeStream"></a>
# **articleCreateChangeStreamGetArticlesChangeStream**
> File articleCreateChangeStreamGetArticlesChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleCreateChangeStreamGetArticlesChangeStream(opts, callback);
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

<a name="articleCreateChangeStreamPostArticlesChangeStream"></a>
# **articleCreateChangeStreamPostArticlesChangeStream**
> File articleCreateChangeStreamPostArticlesChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleCreateChangeStreamPostArticlesChangeStream(opts, callback);
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

<a name="articleDeleteById"></a>
# **articleDeleteById**
> Object articleDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleDeleteById(id, callback);
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

<a name="articleExistsGetArticlesidExists"></a>
# **articleExistsGetArticlesidExists**
> InlineResponse2001 articleExistsGetArticlesidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleExistsGetArticlesidExists(id, callback);
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

<a name="articleExistsHeadArticlesid"></a>
# **articleExistsHeadArticlesid**
> InlineResponse2001 articleExistsHeadArticlesid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleExistsHeadArticlesid(id, callback);
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

<a name="articleFind"></a>
# **articleFind**
> [Article] articleFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleFindById"></a>
# **articleFindById**
> Article articleFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleFindOne"></a>
# **articleFindOne**
> Article articleFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

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
apiInstance.articleFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articlePatchOrCreate"></a>
# **articlePatchOrCreate**
> Article articlePatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articlePatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articlePrototypeGetFeed"></a>
# **articlePrototypeGetFeed**
> Feed articlePrototypeGetFeed(id, opts)

Fetches belongsTo relation feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Article id

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
apiInstance.articlePrototypeGetFeed(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Article id | 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articlePrototypePatchAttributes"></a>
# **articlePrototypePatchAttributes**
> Article articlePrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Article id

var opts = { 
  'data': new Backend.Article() // Article | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articlePrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Article id | 
 **data** | [**Article**](Article.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleReplaceByIdPostArticlesidReplace"></a>
# **articleReplaceByIdPostArticlesidReplace**
> Article articleReplaceByIdPostArticlesidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleReplaceByIdPostArticlesidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleReplaceByIdPutArticlesid"></a>
# **articleReplaceByIdPutArticlesid**
> Article articleReplaceByIdPutArticlesid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleReplaceByIdPutArticlesid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleReplaceOrCreatePostArticlesReplaceOrCreate"></a>
# **articleReplaceOrCreatePostArticlesReplaceOrCreate**
> Article articleReplaceOrCreatePostArticlesReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleReplaceOrCreatePostArticlesReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleReplaceOrCreatePutArticles"></a>
# **articleReplaceOrCreatePutArticles**
> Article articleReplaceOrCreatePutArticles(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'data': new Backend.Article() // Article | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleReplaceOrCreatePutArticles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Article**](Article.md)| Model instance data | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleUpdateAll"></a>
# **articleUpdateAll**
> InlineResponse2002 articleUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Article() // Article | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Article**](Article.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="articleUpsertWithWhere"></a>
# **articleUpsertWithWhere**
> Article articleUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ArticleApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Article() // Article | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Article**](Article.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

