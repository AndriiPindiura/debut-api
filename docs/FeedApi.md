# Backend.FeedApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feedCount**](FeedApi.md#feedCount) | **GET** /Feeds/count | Count instances of the model matched by where from the data source.
[**feedCreate**](FeedApi.md#feedCreate) | **POST** /Feeds | Create a new instance of the model and persist it into the data source.
[**feedCreateChangeStreamGetFeedsChangeStream**](FeedApi.md#feedCreateChangeStreamGetFeedsChangeStream) | **GET** /Feeds/change-stream | Create a change stream.
[**feedCreateChangeStreamPostFeedsChangeStream**](FeedApi.md#feedCreateChangeStreamPostFeedsChangeStream) | **POST** /Feeds/change-stream | Create a change stream.
[**feedDeleteById**](FeedApi.md#feedDeleteById) | **DELETE** /Feeds/{id} | Delete a model instance by {{id}} from the data source.
[**feedExistsGetFeedsidExists**](FeedApi.md#feedExistsGetFeedsidExists) | **GET** /Feeds/{id}/exists | Check whether a model instance exists in the data source.
[**feedExistsHeadFeedsid**](FeedApi.md#feedExistsHeadFeedsid) | **HEAD** /Feeds/{id} | Check whether a model instance exists in the data source.
[**feedFind**](FeedApi.md#feedFind) | **GET** /Feeds | Find all instances of the model matched by filter from the data source.
[**feedFindById**](FeedApi.md#feedFindById) | **GET** /Feeds/{id} | Find a model instance by {{id}} from the data source.
[**feedFindOne**](FeedApi.md#feedFindOne) | **GET** /Feeds/findOne | Find first instance of the model matched by filter from the data source.
[**feedPatchOrCreate**](FeedApi.md#feedPatchOrCreate) | **PATCH** /Feeds | Patch an existing model instance or insert a new one into the data source.
[**feedPrototypeCountArticles**](FeedApi.md#feedPrototypeCountArticles) | **GET** /Feeds/{id}/articles/count | Counts articles of Feed.
[**feedPrototypeCountEditors**](FeedApi.md#feedPrototypeCountEditors) | **GET** /Feeds/{id}/editors/count | Counts editors of Feed.
[**feedPrototypeCountSubscribers**](FeedApi.md#feedPrototypeCountSubscribers) | **GET** /Feeds/{id}/subscribers/count | Counts subscribers of Feed.
[**feedPrototypeCreateArticles**](FeedApi.md#feedPrototypeCreateArticles) | **POST** /Feeds/{id}/articles | Creates a new instance in articles of this model.
[**feedPrototypeCreateEditors**](FeedApi.md#feedPrototypeCreateEditors) | **POST** /Feeds/{id}/editors | Creates a new instance in editors of this model.
[**feedPrototypeCreateSubscribers**](FeedApi.md#feedPrototypeCreateSubscribers) | **POST** /Feeds/{id}/subscribers | Creates a new instance in subscribers of this model.
[**feedPrototypeDeleteArticles**](FeedApi.md#feedPrototypeDeleteArticles) | **DELETE** /Feeds/{id}/articles | Deletes all articles of this model.
[**feedPrototypeDeleteEditors**](FeedApi.md#feedPrototypeDeleteEditors) | **DELETE** /Feeds/{id}/editors | Deletes all editors of this model.
[**feedPrototypeDeleteSubscribers**](FeedApi.md#feedPrototypeDeleteSubscribers) | **DELETE** /Feeds/{id}/subscribers | Deletes all subscribers of this model.
[**feedPrototypeDestroyByIdArticles**](FeedApi.md#feedPrototypeDestroyByIdArticles) | **DELETE** /Feeds/{id}/articles/{fk} | Delete a related item by id for articles.
[**feedPrototypeDestroyByIdEditors**](FeedApi.md#feedPrototypeDestroyByIdEditors) | **DELETE** /Feeds/{id}/editors/{fk} | Delete a related item by id for editors.
[**feedPrototypeDestroyByIdSubscribers**](FeedApi.md#feedPrototypeDestroyByIdSubscribers) | **DELETE** /Feeds/{id}/subscribers/{fk} | Delete a related item by id for subscribers.
[**feedPrototypeExistsEditors**](FeedApi.md#feedPrototypeExistsEditors) | **HEAD** /Feeds/{id}/editors/rel/{fk} | Check the existence of editors relation to an item by id.
[**feedPrototypeExistsSubscribers**](FeedApi.md#feedPrototypeExistsSubscribers) | **HEAD** /Feeds/{id}/subscribers/rel/{fk} | Check the existence of subscribers relation to an item by id.
[**feedPrototypeFindByIdArticles**](FeedApi.md#feedPrototypeFindByIdArticles) | **GET** /Feeds/{id}/articles/{fk} | Find a related item by id for articles.
[**feedPrototypeFindByIdEditors**](FeedApi.md#feedPrototypeFindByIdEditors) | **GET** /Feeds/{id}/editors/{fk} | Find a related item by id for editors.
[**feedPrototypeFindByIdSubscribers**](FeedApi.md#feedPrototypeFindByIdSubscribers) | **GET** /Feeds/{id}/subscribers/{fk} | Find a related item by id for subscribers.
[**feedPrototypeGetArticles**](FeedApi.md#feedPrototypeGetArticles) | **GET** /Feeds/{id}/articles | Queries articles of Feed.
[**feedPrototypeGetEditors**](FeedApi.md#feedPrototypeGetEditors) | **GET** /Feeds/{id}/editors | Queries editors of Feed.
[**feedPrototypeGetPublisher**](FeedApi.md#feedPrototypeGetPublisher) | **GET** /Feeds/{id}/publisher | Fetches belongsTo relation publisher.
[**feedPrototypeGetSubscribers**](FeedApi.md#feedPrototypeGetSubscribers) | **GET** /Feeds/{id}/subscribers | Queries subscribers of Feed.
[**feedPrototypeLinkEditors**](FeedApi.md#feedPrototypeLinkEditors) | **PUT** /Feeds/{id}/editors/rel/{fk} | Add a related item by id for editors.
[**feedPrototypeLinkSubscribers**](FeedApi.md#feedPrototypeLinkSubscribers) | **PUT** /Feeds/{id}/subscribers/rel/{fk} | Add a related item by id for subscribers.
[**feedPrototypePatchAttributes**](FeedApi.md#feedPrototypePatchAttributes) | **PATCH** /Feeds/{id} | Patch attributes for a model instance and persist it into the data source.
[**feedPrototypeUnlinkEditors**](FeedApi.md#feedPrototypeUnlinkEditors) | **DELETE** /Feeds/{id}/editors/rel/{fk} | Remove the editors relation to an item by id.
[**feedPrototypeUnlinkSubscribers**](FeedApi.md#feedPrototypeUnlinkSubscribers) | **DELETE** /Feeds/{id}/subscribers/rel/{fk} | Remove the subscribers relation to an item by id.
[**feedPrototypeUpdateByIdArticles**](FeedApi.md#feedPrototypeUpdateByIdArticles) | **PUT** /Feeds/{id}/articles/{fk} | Update a related item by id for articles.
[**feedPrototypeUpdateByIdEditors**](FeedApi.md#feedPrototypeUpdateByIdEditors) | **PUT** /Feeds/{id}/editors/{fk} | Update a related item by id for editors.
[**feedPrototypeUpdateByIdSubscribers**](FeedApi.md#feedPrototypeUpdateByIdSubscribers) | **PUT** /Feeds/{id}/subscribers/{fk} | Update a related item by id for subscribers.
[**feedReplaceByIdPostFeedsidReplace**](FeedApi.md#feedReplaceByIdPostFeedsidReplace) | **POST** /Feeds/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**feedReplaceByIdPutFeedsid**](FeedApi.md#feedReplaceByIdPutFeedsid) | **PUT** /Feeds/{id} | Replace attributes for a model instance and persist it into the data source.
[**feedReplaceOrCreatePostFeedsReplaceOrCreate**](FeedApi.md#feedReplaceOrCreatePostFeedsReplaceOrCreate) | **POST** /Feeds/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**feedReplaceOrCreatePutFeeds**](FeedApi.md#feedReplaceOrCreatePutFeeds) | **PUT** /Feeds | Replace an existing model instance or insert a new one into the data source.
[**feedUpdateAll**](FeedApi.md#feedUpdateAll) | **POST** /Feeds/update | Update instances of the model matched by {{where}} from the data source.
[**feedUpsertWithWhere**](FeedApi.md#feedUpsertWithWhere) | **POST** /Feeds/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="feedCount"></a>
# **feedCount**
> InlineResponse200 feedCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedCount(opts, callback);
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

<a name="feedCreate"></a>
# **feedCreate**
> Feed feedCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedCreateChangeStreamGetFeedsChangeStream"></a>
# **feedCreateChangeStreamGetFeedsChangeStream**
> File feedCreateChangeStreamGetFeedsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedCreateChangeStreamGetFeedsChangeStream(opts, callback);
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

<a name="feedCreateChangeStreamPostFeedsChangeStream"></a>
# **feedCreateChangeStreamPostFeedsChangeStream**
> File feedCreateChangeStreamPostFeedsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedCreateChangeStreamPostFeedsChangeStream(opts, callback);
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

<a name="feedDeleteById"></a>
# **feedDeleteById**
> Object feedDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedDeleteById(id, callback);
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

<a name="feedExistsGetFeedsidExists"></a>
# **feedExistsGetFeedsidExists**
> InlineResponse2001 feedExistsGetFeedsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedExistsGetFeedsidExists(id, callback);
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

<a name="feedExistsHeadFeedsid"></a>
# **feedExistsHeadFeedsid**
> InlineResponse2001 feedExistsHeadFeedsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedExistsHeadFeedsid(id, callback);
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

<a name="feedFind"></a>
# **feedFind**
> [Feed] feedFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Feed]**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedFindById"></a>
# **feedFindById**
> Feed feedFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedFindOne"></a>
# **feedFindOne**
> Feed feedFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

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
apiInstance.feedFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPatchOrCreate"></a>
# **feedPatchOrCreate**
> Feed feedPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCountArticles"></a>
# **feedPrototypeCountArticles**
> InlineResponse200 feedPrototypeCountArticles(id, opts)

Counts articles of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeCountArticles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCountEditors"></a>
# **feedPrototypeCountEditors**
> InlineResponse200 feedPrototypeCountEditors(id, opts)

Counts editors of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeCountEditors(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCountSubscribers"></a>
# **feedPrototypeCountSubscribers**
> InlineResponse200 feedPrototypeCountSubscribers(id, opts)

Counts subscribers of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeCountSubscribers(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCreateArticles"></a>
# **feedPrototypeCreateArticles**
> Article feedPrototypeCreateArticles(id, opts)

Creates a new instance in articles of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var opts = { 
  'data': new Backend.Article() // Article | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeCreateArticles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **data** | [**Article**](Article.md)|  | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCreateEditors"></a>
# **feedPrototypeCreateEditors**
> Client feedPrototypeCreateEditors(id, opts)

Creates a new instance in editors of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var opts = { 
  'data': new Backend.Client() // Client | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeCreateEditors(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **data** | [**Client**](Client.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeCreateSubscribers"></a>
# **feedPrototypeCreateSubscribers**
> Client feedPrototypeCreateSubscribers(id, opts)

Creates a new instance in subscribers of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var opts = { 
  'data': new Backend.Client() // Client | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeCreateSubscribers(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **data** | [**Client**](Client.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDeleteArticles"></a>
# **feedPrototypeDeleteArticles**
> feedPrototypeDeleteArticles(id)

Deletes all articles of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDeleteArticles(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDeleteEditors"></a>
# **feedPrototypeDeleteEditors**
> feedPrototypeDeleteEditors(id)

Deletes all editors of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDeleteEditors(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDeleteSubscribers"></a>
# **feedPrototypeDeleteSubscribers**
> feedPrototypeDeleteSubscribers(id)

Deletes all subscribers of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDeleteSubscribers(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDestroyByIdArticles"></a>
# **feedPrototypeDestroyByIdArticles**
> feedPrototypeDestroyByIdArticles(id, fk)

Delete a related item by id for articles.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for articles


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDestroyByIdArticles(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for articles | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDestroyByIdEditors"></a>
# **feedPrototypeDestroyByIdEditors**
> feedPrototypeDestroyByIdEditors(id, fk)

Delete a related item by id for editors.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDestroyByIdEditors(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeDestroyByIdSubscribers"></a>
# **feedPrototypeDestroyByIdSubscribers**
> feedPrototypeDestroyByIdSubscribers(id, fk)

Delete a related item by id for subscribers.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeDestroyByIdSubscribers(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeExistsEditors"></a>
# **feedPrototypeExistsEditors**
> &#39;Boolean&#39; feedPrototypeExistsEditors(id, fk)

Check the existence of editors relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeExistsEditors(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeExistsSubscribers"></a>
# **feedPrototypeExistsSubscribers**
> &#39;Boolean&#39; feedPrototypeExistsSubscribers(id, fk)

Check the existence of subscribers relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeExistsSubscribers(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeFindByIdArticles"></a>
# **feedPrototypeFindByIdArticles**
> Article feedPrototypeFindByIdArticles(id, fk)

Find a related item by id for articles.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for articles


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeFindByIdArticles(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for articles | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeFindByIdEditors"></a>
# **feedPrototypeFindByIdEditors**
> Client feedPrototypeFindByIdEditors(id, fk)

Find a related item by id for editors.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeFindByIdEditors(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeFindByIdSubscribers"></a>
# **feedPrototypeFindByIdSubscribers**
> Client feedPrototypeFindByIdSubscribers(id, fk)

Find a related item by id for subscribers.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeFindByIdSubscribers(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeGetArticles"></a>
# **feedPrototypeGetArticles**
> [Article] feedPrototypeGetArticles(id, opts)

Queries articles of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeGetArticles(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeGetEditors"></a>
# **feedPrototypeGetEditors**
> [Client] feedPrototypeGetEditors(id, opts)

Queries editors of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeGetEditors(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeGetPublisher"></a>
# **feedPrototypeGetPublisher**
> Publisher feedPrototypeGetPublisher(id, opts)

Fetches belongsTo relation publisher.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeGetPublisher(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **refresh** | **Boolean**|  | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeGetSubscribers"></a>
# **feedPrototypeGetSubscribers**
> [Client] feedPrototypeGetSubscribers(id, opts)

Queries subscribers of Feed.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

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
apiInstance.feedPrototypeGetSubscribers(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeLinkEditors"></a>
# **feedPrototypeLinkEditors**
> EditorRole feedPrototypeLinkEditors(id, fk, opts)

Add a related item by id for editors.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors

var opts = { 
  'data': new Backend.EditorRole() // EditorRole | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeLinkEditors(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 
 **data** | [**EditorRole**](EditorRole.md)|  | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeLinkSubscribers"></a>
# **feedPrototypeLinkSubscribers**
> Subscribtion feedPrototypeLinkSubscribers(id, fk, opts)

Add a related item by id for subscribers.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers

var opts = { 
  'data': new Backend.Subscribtion() // Subscribtion | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeLinkSubscribers(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 
 **data** | [**Subscribtion**](Subscribtion.md)|  | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypePatchAttributes"></a>
# **feedPrototypePatchAttributes**
> Feed feedPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var opts = { 
  'data': new Backend.Feed() // Feed | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **data** | [**Feed**](Feed.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeUnlinkEditors"></a>
# **feedPrototypeUnlinkEditors**
> feedPrototypeUnlinkEditors(id, fk)

Remove the editors relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeUnlinkEditors(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeUnlinkSubscribers"></a>
# **feedPrototypeUnlinkSubscribers**
> feedPrototypeUnlinkSubscribers(id, fk)

Remove the subscribers relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedPrototypeUnlinkSubscribers(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeUpdateByIdArticles"></a>
# **feedPrototypeUpdateByIdArticles**
> Article feedPrototypeUpdateByIdArticles(id, fk, opts)

Update a related item by id for articles.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for articles

var opts = { 
  'data': new Backend.Article() // Article | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeUpdateByIdArticles(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for articles | 
 **data** | [**Article**](Article.md)|  | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeUpdateByIdEditors"></a>
# **feedPrototypeUpdateByIdEditors**
> Client feedPrototypeUpdateByIdEditors(id, fk, opts)

Update a related item by id for editors.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for editors

var opts = { 
  'data': new Backend.Client() // Client | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeUpdateByIdEditors(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for editors | 
 **data** | [**Client**](Client.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedPrototypeUpdateByIdSubscribers"></a>
# **feedPrototypeUpdateByIdSubscribers**
> Client feedPrototypeUpdateByIdSubscribers(id, fk, opts)

Update a related item by id for subscribers.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Feed id

var fk = "fk_example"; // String | Foreign key for subscribers

var opts = { 
  'data': new Backend.Client() // Client | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedPrototypeUpdateByIdSubscribers(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Feed id | 
 **fk** | **String**| Foreign key for subscribers | 
 **data** | [**Client**](Client.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedReplaceByIdPostFeedsidReplace"></a>
# **feedReplaceByIdPostFeedsidReplace**
> Feed feedReplaceByIdPostFeedsidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedReplaceByIdPostFeedsidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedReplaceByIdPutFeedsid"></a>
# **feedReplaceByIdPutFeedsid**
> Feed feedReplaceByIdPutFeedsid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedReplaceByIdPutFeedsid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedReplaceOrCreatePostFeedsReplaceOrCreate"></a>
# **feedReplaceOrCreatePostFeedsReplaceOrCreate**
> Feed feedReplaceOrCreatePostFeedsReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedReplaceOrCreatePostFeedsReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedReplaceOrCreatePutFeeds"></a>
# **feedReplaceOrCreatePutFeeds**
> Feed feedReplaceOrCreatePutFeeds(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'data': new Backend.Feed() // Feed | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedReplaceOrCreatePutFeeds(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Feed**](Feed.md)| Model instance data | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedUpdateAll"></a>
# **feedUpdateAll**
> InlineResponse2002 feedUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Feed() // Feed | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Feed**](Feed.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="feedUpsertWithWhere"></a>
# **feedUpsertWithWhere**
> Feed feedUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.FeedApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Feed() // Feed | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Feed**](Feed.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

