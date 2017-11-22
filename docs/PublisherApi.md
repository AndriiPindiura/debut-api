# Backend.PublisherApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publisherCount**](PublisherApi.md#publisherCount) | **GET** /Publishers/count | Count instances of the model matched by where from the data source.
[**publisherCreate**](PublisherApi.md#publisherCreate) | **POST** /Publishers | Create a new instance of the model and persist it into the data source.
[**publisherCreateChangeStreamGetPublishersChangeStream**](PublisherApi.md#publisherCreateChangeStreamGetPublishersChangeStream) | **GET** /Publishers/change-stream | Create a change stream.
[**publisherCreateChangeStreamPostPublishersChangeStream**](PublisherApi.md#publisherCreateChangeStreamPostPublishersChangeStream) | **POST** /Publishers/change-stream | Create a change stream.
[**publisherDeleteById**](PublisherApi.md#publisherDeleteById) | **DELETE** /Publishers/{id} | Delete a model instance by {{id}} from the data source.
[**publisherExistsGetPublishersidExists**](PublisherApi.md#publisherExistsGetPublishersidExists) | **GET** /Publishers/{id}/exists | Check whether a model instance exists in the data source.
[**publisherExistsHeadPublishersid**](PublisherApi.md#publisherExistsHeadPublishersid) | **HEAD** /Publishers/{id} | Check whether a model instance exists in the data source.
[**publisherFind**](PublisherApi.md#publisherFind) | **GET** /Publishers | Find all instances of the model matched by filter from the data source.
[**publisherFindById**](PublisherApi.md#publisherFindById) | **GET** /Publishers/{id} | Find a model instance by {{id}} from the data source.
[**publisherFindOne**](PublisherApi.md#publisherFindOne) | **GET** /Publishers/findOne | Find first instance of the model matched by filter from the data source.
[**publisherPatchOrCreate**](PublisherApi.md#publisherPatchOrCreate) | **PATCH** /Publishers | Patch an existing model instance or insert a new one into the data source.
[**publisherPrototypeCountFeeds**](PublisherApi.md#publisherPrototypeCountFeeds) | **GET** /Publishers/{id}/feeds/count | Counts feeds of Publisher.
[**publisherPrototypeCreateFeeds**](PublisherApi.md#publisherPrototypeCreateFeeds) | **POST** /Publishers/{id}/feeds | Creates a new instance in feeds of this model.
[**publisherPrototypeDeleteFeeds**](PublisherApi.md#publisherPrototypeDeleteFeeds) | **DELETE** /Publishers/{id}/feeds | Deletes all feeds of this model.
[**publisherPrototypeDestroyByIdFeeds**](PublisherApi.md#publisherPrototypeDestroyByIdFeeds) | **DELETE** /Publishers/{id}/feeds/{fk} | Delete a related item by id for feeds.
[**publisherPrototypeFindByIdFeeds**](PublisherApi.md#publisherPrototypeFindByIdFeeds) | **GET** /Publishers/{id}/feeds/{fk} | Find a related item by id for feeds.
[**publisherPrototypeGetFeeds**](PublisherApi.md#publisherPrototypeGetFeeds) | **GET** /Publishers/{id}/feeds | Queries feeds of Publisher.
[**publisherPrototypePatchAttributes**](PublisherApi.md#publisherPrototypePatchAttributes) | **PATCH** /Publishers/{id} | Patch attributes for a model instance and persist it into the data source.
[**publisherPrototypeUpdateByIdFeeds**](PublisherApi.md#publisherPrototypeUpdateByIdFeeds) | **PUT** /Publishers/{id}/feeds/{fk} | Update a related item by id for feeds.
[**publisherReplaceByIdPostPublishersidReplace**](PublisherApi.md#publisherReplaceByIdPostPublishersidReplace) | **POST** /Publishers/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**publisherReplaceByIdPutPublishersid**](PublisherApi.md#publisherReplaceByIdPutPublishersid) | **PUT** /Publishers/{id} | Replace attributes for a model instance and persist it into the data source.
[**publisherReplaceOrCreatePostPublishersReplaceOrCreate**](PublisherApi.md#publisherReplaceOrCreatePostPublishersReplaceOrCreate) | **POST** /Publishers/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**publisherReplaceOrCreatePutPublishers**](PublisherApi.md#publisherReplaceOrCreatePutPublishers) | **PUT** /Publishers | Replace an existing model instance or insert a new one into the data source.
[**publisherUpdateAll**](PublisherApi.md#publisherUpdateAll) | **POST** /Publishers/update | Update instances of the model matched by {{where}} from the data source.
[**publisherUpsertWithWhere**](PublisherApi.md#publisherUpsertWithWhere) | **POST** /Publishers/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="publisherCount"></a>
# **publisherCount**
> InlineResponse200 publisherCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherCount(opts, callback);
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

<a name="publisherCreate"></a>
# **publisherCreate**
> Publisher publisherCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherCreateChangeStreamGetPublishersChangeStream"></a>
# **publisherCreateChangeStreamGetPublishersChangeStream**
> File publisherCreateChangeStreamGetPublishersChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherCreateChangeStreamGetPublishersChangeStream(opts, callback);
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

<a name="publisherCreateChangeStreamPostPublishersChangeStream"></a>
# **publisherCreateChangeStreamPostPublishersChangeStream**
> File publisherCreateChangeStreamPostPublishersChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherCreateChangeStreamPostPublishersChangeStream(opts, callback);
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

<a name="publisherDeleteById"></a>
# **publisherDeleteById**
> Object publisherDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherDeleteById(id, callback);
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

<a name="publisherExistsGetPublishersidExists"></a>
# **publisherExistsGetPublishersidExists**
> InlineResponse2001 publisherExistsGetPublishersidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherExistsGetPublishersidExists(id, callback);
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

<a name="publisherExistsHeadPublishersid"></a>
# **publisherExistsHeadPublishersid**
> InlineResponse2001 publisherExistsHeadPublishersid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherExistsHeadPublishersid(id, callback);
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

<a name="publisherFind"></a>
# **publisherFind**
> [Publisher] publisherFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Publisher]**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherFindById"></a>
# **publisherFindById**
> Publisher publisherFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherFindOne"></a>
# **publisherFindOne**
> Publisher publisherFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

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
apiInstance.publisherFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPatchOrCreate"></a>
# **publisherPatchOrCreate**
> Publisher publisherPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeCountFeeds"></a>
# **publisherPrototypeCountFeeds**
> InlineResponse200 publisherPrototypeCountFeeds(id, opts)

Counts feeds of Publisher.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

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
apiInstance.publisherPrototypeCountFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeCreateFeeds"></a>
# **publisherPrototypeCreateFeeds**
> Feed publisherPrototypeCreateFeeds(id, opts)

Creates a new instance in feeds of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var opts = { 
  'data': new Backend.Feed() // Feed | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPrototypeCreateFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeDeleteFeeds"></a>
# **publisherPrototypeDeleteFeeds**
> publisherPrototypeDeleteFeeds(id)

Deletes all feeds of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.publisherPrototypeDeleteFeeds(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeDestroyByIdFeeds"></a>
# **publisherPrototypeDestroyByIdFeeds**
> publisherPrototypeDestroyByIdFeeds(id, fk)

Delete a related item by id for feeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var fk = "fk_example"; // String | Foreign key for feeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.publisherPrototypeDestroyByIdFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **fk** | **String**| Foreign key for feeds | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeFindByIdFeeds"></a>
# **publisherPrototypeFindByIdFeeds**
> Feed publisherPrototypeFindByIdFeeds(id, fk)

Find a related item by id for feeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var fk = "fk_example"; // String | Foreign key for feeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPrototypeFindByIdFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **fk** | **String**| Foreign key for feeds | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeGetFeeds"></a>
# **publisherPrototypeGetFeeds**
> [Feed] publisherPrototypeGetFeeds(id, opts)

Queries feeds of Publisher.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var opts = { 
  'filter': "filter_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPrototypeGetFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Feed]**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypePatchAttributes"></a>
# **publisherPrototypePatchAttributes**
> Publisher publisherPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var opts = { 
  'data': new Backend.Publisher() // Publisher | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **data** | [**Publisher**](Publisher.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherPrototypeUpdateByIdFeeds"></a>
# **publisherPrototypeUpdateByIdFeeds**
> Feed publisherPrototypeUpdateByIdFeeds(id, fk, opts)

Update a related item by id for feeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Publisher id

var fk = "fk_example"; // String | Foreign key for feeds

var opts = { 
  'data': new Backend.Feed() // Feed | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherPrototypeUpdateByIdFeeds(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Publisher id | 
 **fk** | **String**| Foreign key for feeds | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherReplaceByIdPostPublishersidReplace"></a>
# **publisherReplaceByIdPostPublishersidReplace**
> Publisher publisherReplaceByIdPostPublishersidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherReplaceByIdPostPublishersidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherReplaceByIdPutPublishersid"></a>
# **publisherReplaceByIdPutPublishersid**
> Publisher publisherReplaceByIdPutPublishersid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherReplaceByIdPutPublishersid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherReplaceOrCreatePostPublishersReplaceOrCreate"></a>
# **publisherReplaceOrCreatePostPublishersReplaceOrCreate**
> Publisher publisherReplaceOrCreatePostPublishersReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherReplaceOrCreatePostPublishersReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherReplaceOrCreatePutPublishers"></a>
# **publisherReplaceOrCreatePutPublishers**
> Publisher publisherReplaceOrCreatePutPublishers(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'data': new Backend.Publisher() // Publisher | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherReplaceOrCreatePutPublishers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Publisher**](Publisher.md)| Model instance data | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherUpdateAll"></a>
# **publisherUpdateAll**
> InlineResponse2002 publisherUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Publisher() // Publisher | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Publisher**](Publisher.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="publisherUpsertWithWhere"></a>
# **publisherUpsertWithWhere**
> Publisher publisherUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.PublisherApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Publisher() // Publisher | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publisherUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Publisher**](Publisher.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

