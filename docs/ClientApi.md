# Backend.ClientApi

All URIs are relative to *https://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientChangePassword**](ClientApi.md#clientChangePassword) | **POST** /Clients/change-password | Change a user&#39;s password.
[**clientConfirm**](ClientApi.md#clientConfirm) | **GET** /Clients/confirm | Confirm a user registration with identity verification token.
[**clientCount**](ClientApi.md#clientCount) | **GET** /Clients/count | Count instances of the model matched by where from the data source.
[**clientCreate**](ClientApi.md#clientCreate) | **POST** /Clients | Create a new instance of the model and persist it into the data source.
[**clientCreateChangeStreamGetClientsChangeStream**](ClientApi.md#clientCreateChangeStreamGetClientsChangeStream) | **GET** /Clients/change-stream | Create a change stream.
[**clientCreateChangeStreamPostClientsChangeStream**](ClientApi.md#clientCreateChangeStreamPostClientsChangeStream) | **POST** /Clients/change-stream | Create a change stream.
[**clientDeleteById**](ClientApi.md#clientDeleteById) | **DELETE** /Clients/{id} | Delete a model instance by {{id}} from the data source.
[**clientExistsGetClientsidExists**](ClientApi.md#clientExistsGetClientsidExists) | **GET** /Clients/{id}/exists | Check whether a model instance exists in the data source.
[**clientExistsHeadClientsid**](ClientApi.md#clientExistsHeadClientsid) | **HEAD** /Clients/{id} | Check whether a model instance exists in the data source.
[**clientFind**](ClientApi.md#clientFind) | **GET** /Clients | Find all instances of the model matched by filter from the data source.
[**clientFindById**](ClientApi.md#clientFindById) | **GET** /Clients/{id} | Find a model instance by {{id}} from the data source.
[**clientFindOne**](ClientApi.md#clientFindOne) | **GET** /Clients/findOne | Find first instance of the model matched by filter from the data source.
[**clientLogin**](ClientApi.md#clientLogin) | **POST** /Clients/login | Login a user with username/email and password.
[**clientLogout**](ClientApi.md#clientLogout) | **POST** /Clients/logout | Logout a user with access token.
[**clientPatchOrCreate**](ClientApi.md#clientPatchOrCreate) | **PATCH** /Clients | Patch an existing model instance or insert a new one into the data source.
[**clientPrototypeCountAccessTokens**](ClientApi.md#clientPrototypeCountAccessTokens) | **GET** /Clients/{id}/accessTokens/count | Counts accessTokens of Client.
[**clientPrototypeCountEditorFeeds**](ClientApi.md#clientPrototypeCountEditorFeeds) | **GET** /Clients/{id}/editorFeeds/count | Counts editorFeeds of Client.
[**clientPrototypeCountSubscribtions**](ClientApi.md#clientPrototypeCountSubscribtions) | **GET** /Clients/{id}/subscribtions/count | Counts subscribtions of Client.
[**clientPrototypeCreateAccessTokens**](ClientApi.md#clientPrototypeCreateAccessTokens) | **POST** /Clients/{id}/accessTokens | Creates a new instance in accessTokens of this model.
[**clientPrototypeCreateEditorFeeds**](ClientApi.md#clientPrototypeCreateEditorFeeds) | **POST** /Clients/{id}/editorFeeds | Creates a new instance in editorFeeds of this model.
[**clientPrototypeCreateSubscribtions**](ClientApi.md#clientPrototypeCreateSubscribtions) | **POST** /Clients/{id}/subscribtions | Creates a new instance in subscribtions of this model.
[**clientPrototypeDeleteAccessTokens**](ClientApi.md#clientPrototypeDeleteAccessTokens) | **DELETE** /Clients/{id}/accessTokens | Deletes all accessTokens of this model.
[**clientPrototypeDeleteEditorFeeds**](ClientApi.md#clientPrototypeDeleteEditorFeeds) | **DELETE** /Clients/{id}/editorFeeds | Deletes all editorFeeds of this model.
[**clientPrototypeDeleteSubscribtions**](ClientApi.md#clientPrototypeDeleteSubscribtions) | **DELETE** /Clients/{id}/subscribtions | Deletes all subscribtions of this model.
[**clientPrototypeDestroyByIdAccessTokens**](ClientApi.md#clientPrototypeDestroyByIdAccessTokens) | **DELETE** /Clients/{id}/accessTokens/{fk} | Delete a related item by id for accessTokens.
[**clientPrototypeDestroyByIdEditorFeeds**](ClientApi.md#clientPrototypeDestroyByIdEditorFeeds) | **DELETE** /Clients/{id}/editorFeeds/{fk} | Delete a related item by id for editorFeeds.
[**clientPrototypeDestroyByIdSubscribtions**](ClientApi.md#clientPrototypeDestroyByIdSubscribtions) | **DELETE** /Clients/{id}/subscribtions/{fk} | Delete a related item by id for subscribtions.
[**clientPrototypeExistsEditorFeeds**](ClientApi.md#clientPrototypeExistsEditorFeeds) | **HEAD** /Clients/{id}/editorFeeds/rel/{fk} | Check the existence of editorFeeds relation to an item by id.
[**clientPrototypeExistsSubscribtions**](ClientApi.md#clientPrototypeExistsSubscribtions) | **HEAD** /Clients/{id}/subscribtions/rel/{fk} | Check the existence of subscribtions relation to an item by id.
[**clientPrototypeFindByIdAccessTokens**](ClientApi.md#clientPrototypeFindByIdAccessTokens) | **GET** /Clients/{id}/accessTokens/{fk} | Find a related item by id for accessTokens.
[**clientPrototypeFindByIdEditorFeeds**](ClientApi.md#clientPrototypeFindByIdEditorFeeds) | **GET** /Clients/{id}/editorFeeds/{fk} | Find a related item by id for editorFeeds.
[**clientPrototypeFindByIdSubscribtions**](ClientApi.md#clientPrototypeFindByIdSubscribtions) | **GET** /Clients/{id}/subscribtions/{fk} | Find a related item by id for subscribtions.
[**clientPrototypeGetAccessTokens**](ClientApi.md#clientPrototypeGetAccessTokens) | **GET** /Clients/{id}/accessTokens | Queries accessTokens of Client.
[**clientPrototypeGetEditorFeeds**](ClientApi.md#clientPrototypeGetEditorFeeds) | **GET** /Clients/{id}/editorFeeds | Queries editorFeeds of Client.
[**clientPrototypeGetSubscribtions**](ClientApi.md#clientPrototypeGetSubscribtions) | **GET** /Clients/{id}/subscribtions | Queries subscribtions of Client.
[**clientPrototypeLinkEditorFeeds**](ClientApi.md#clientPrototypeLinkEditorFeeds) | **PUT** /Clients/{id}/editorFeeds/rel/{fk} | Add a related item by id for editorFeeds.
[**clientPrototypeLinkSubscribtions**](ClientApi.md#clientPrototypeLinkSubscribtions) | **PUT** /Clients/{id}/subscribtions/rel/{fk} | Add a related item by id for subscribtions.
[**clientPrototypePatchAttributes**](ClientApi.md#clientPrototypePatchAttributes) | **PATCH** /Clients/{id} | Patch attributes for a model instance and persist it into the data source.
[**clientPrototypeUnlinkEditorFeeds**](ClientApi.md#clientPrototypeUnlinkEditorFeeds) | **DELETE** /Clients/{id}/editorFeeds/rel/{fk} | Remove the editorFeeds relation to an item by id.
[**clientPrototypeUnlinkSubscribtions**](ClientApi.md#clientPrototypeUnlinkSubscribtions) | **DELETE** /Clients/{id}/subscribtions/rel/{fk} | Remove the subscribtions relation to an item by id.
[**clientPrototypeUpdateByIdAccessTokens**](ClientApi.md#clientPrototypeUpdateByIdAccessTokens) | **PUT** /Clients/{id}/accessTokens/{fk} | Update a related item by id for accessTokens.
[**clientPrototypeUpdateByIdEditorFeeds**](ClientApi.md#clientPrototypeUpdateByIdEditorFeeds) | **PUT** /Clients/{id}/editorFeeds/{fk} | Update a related item by id for editorFeeds.
[**clientPrototypeUpdateByIdSubscribtions**](ClientApi.md#clientPrototypeUpdateByIdSubscribtions) | **PUT** /Clients/{id}/subscribtions/{fk} | Update a related item by id for subscribtions.
[**clientPrototypeVerify**](ClientApi.md#clientPrototypeVerify) | **POST** /Clients/{id}/verify | Trigger user&#39;s identity verification with configured verifyOptions
[**clientReplaceByIdPostClientsidReplace**](ClientApi.md#clientReplaceByIdPostClientsidReplace) | **POST** /Clients/{id}/replace | Replace attributes for a model instance and persist it into the data source.
[**clientReplaceByIdPutClientsid**](ClientApi.md#clientReplaceByIdPutClientsid) | **PUT** /Clients/{id} | Replace attributes for a model instance and persist it into the data source.
[**clientReplaceOrCreatePostClientsReplaceOrCreate**](ClientApi.md#clientReplaceOrCreatePostClientsReplaceOrCreate) | **POST** /Clients/replaceOrCreate | Replace an existing model instance or insert a new one into the data source.
[**clientReplaceOrCreatePutClients**](ClientApi.md#clientReplaceOrCreatePutClients) | **PUT** /Clients | Replace an existing model instance or insert a new one into the data source.
[**clientResetPassword**](ClientApi.md#clientResetPassword) | **POST** /Clients/reset | Reset password for a user with email.
[**clientSetPassword**](ClientApi.md#clientSetPassword) | **POST** /Clients/reset-password | Reset user&#39;s password via a password-reset token.
[**clientUpdateAll**](ClientApi.md#clientUpdateAll) | **POST** /Clients/update | Update instances of the model matched by {{where}} from the data source.
[**clientUpsertWithWhere**](ClientApi.md#clientUpsertWithWhere) | **POST** /Clients/upsertWithWhere | Update an existing model instance or insert a new one into the data source based on the where criteria.


<a name="clientChangePassword"></a>
# **clientChangePassword**
> clientChangePassword(oldPassword, newPassword)

Change a user&#39;s password.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var oldPassword = "oldPassword_example"; // String | 

var newPassword = "newPassword_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientChangePassword(oldPassword, newPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oldPassword** | **String**|  | 
 **newPassword** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientConfirm"></a>
# **clientConfirm**
> clientConfirm(uid, token, opts)

Confirm a user registration with identity verification token.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var uid = "uid_example"; // String | 

var token = "token_example"; // String | 

var opts = { 
  'redirect': "redirect_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientConfirm(uid, token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**|  | 
 **token** | **String**|  | 
 **redirect** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientCount"></a>
# **clientCount**
> InlineResponse200 clientCount(opts)

Count instances of the model matched by where from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientCount(opts, callback);
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

<a name="clientCreate"></a>
# **clientCreate**
> Client clientCreate(opts)

Create a new instance of the model and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientCreateChangeStreamGetClientsChangeStream"></a>
# **clientCreateChangeStreamGetClientsChangeStream**
> File clientCreateChangeStreamGetClientsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientCreateChangeStreamGetClientsChangeStream(opts, callback);
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

<a name="clientCreateChangeStreamPostClientsChangeStream"></a>
# **clientCreateChangeStreamPostClientsChangeStream**
> File clientCreateChangeStreamPostClientsChangeStream(opts)

Create a change stream.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientCreateChangeStreamPostClientsChangeStream(opts, callback);
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

<a name="clientDeleteById"></a>
# **clientDeleteById**
> Object clientDeleteById(id)

Delete a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientDeleteById(id, callback);
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

<a name="clientExistsGetClientsidExists"></a>
# **clientExistsGetClientsidExists**
> InlineResponse2001 clientExistsGetClientsidExists(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientExistsGetClientsidExists(id, callback);
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

<a name="clientExistsHeadClientsid"></a>
# **clientExistsHeadClientsid**
> InlineResponse2001 clientExistsHeadClientsid(id)

Check whether a model instance exists in the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientExistsHeadClientsid(id, callback);
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

<a name="clientFind"></a>
# **clientFind**
> [Client] clientFind(opts)

Find all instances of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientFind(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientFindById"></a>
# **clientFindById**
> Client clientFindById(id, opts)

Find a model instance by {{id}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientFindById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **filter** | **String**| Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientFindOne"></a>
# **clientFindOne**
> Client clientFindOne(opts)

Find first instance of the model matched by filter from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

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
apiInstance.clientFindOne(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;}) | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientLogin"></a>
# **clientLogin**
> Object clientLogin(credentials, opts)

Login a user with username/email and password.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var credentials = null; // Object | 

var opts = { 
  'include': "include_example" // String | Related objects to include in the response. See the description of return value for more details.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientLogin(credentials, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | **Object**|  | 
 **include** | **String**| Related objects to include in the response. See the description of return value for more details. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientLogout"></a>
# **clientLogout**
> clientLogout()

Logout a user with access token.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientLogout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPatchOrCreate"></a>
# **clientPatchOrCreate**
> Client clientPatchOrCreate(opts)

Patch an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPatchOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCountAccessTokens"></a>
# **clientPrototypeCountAccessTokens**
> InlineResponse200 clientPrototypeCountAccessTokens(id, opts)

Counts accessTokens of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeCountAccessTokens(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCountEditorFeeds"></a>
# **clientPrototypeCountEditorFeeds**
> InlineResponse200 clientPrototypeCountEditorFeeds(id, opts)

Counts editorFeeds of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeCountEditorFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCountSubscribtions"></a>
# **clientPrototypeCountSubscribtions**
> InlineResponse200 clientPrototypeCountSubscribtions(id, opts)

Counts subscribtions of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeCountSubscribtions(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **where** | **String**| Criteria to match model instances | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCreateAccessTokens"></a>
# **clientPrototypeCreateAccessTokens**
> AccessToken clientPrototypeCreateAccessTokens(id, opts)

Creates a new instance in accessTokens of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var opts = { 
  'data': new Backend.AccessToken() // AccessToken | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeCreateAccessTokens(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCreateEditorFeeds"></a>
# **clientPrototypeCreateEditorFeeds**
> Feed clientPrototypeCreateEditorFeeds(id, opts)

Creates a new instance in editorFeeds of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeCreateEditorFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeCreateSubscribtions"></a>
# **clientPrototypeCreateSubscribtions**
> Feed clientPrototypeCreateSubscribtions(id, opts)

Creates a new instance in subscribtions of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeCreateSubscribtions(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDeleteAccessTokens"></a>
# **clientPrototypeDeleteAccessTokens**
> clientPrototypeDeleteAccessTokens(id)

Deletes all accessTokens of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDeleteAccessTokens(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDeleteEditorFeeds"></a>
# **clientPrototypeDeleteEditorFeeds**
> clientPrototypeDeleteEditorFeeds(id)

Deletes all editorFeeds of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDeleteEditorFeeds(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDeleteSubscribtions"></a>
# **clientPrototypeDeleteSubscribtions**
> clientPrototypeDeleteSubscribtions(id)

Deletes all subscribtions of this model.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDeleteSubscribtions(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDestroyByIdAccessTokens"></a>
# **clientPrototypeDestroyByIdAccessTokens**
> clientPrototypeDestroyByIdAccessTokens(id, fk)

Delete a related item by id for accessTokens.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for accessTokens


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDestroyByIdAccessTokens(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDestroyByIdEditorFeeds"></a>
# **clientPrototypeDestroyByIdEditorFeeds**
> clientPrototypeDestroyByIdEditorFeeds(id, fk)

Delete a related item by id for editorFeeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDestroyByIdEditorFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeDestroyByIdSubscribtions"></a>
# **clientPrototypeDestroyByIdSubscribtions**
> clientPrototypeDestroyByIdSubscribtions(id, fk)

Delete a related item by id for subscribtions.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeDestroyByIdSubscribtions(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeExistsEditorFeeds"></a>
# **clientPrototypeExistsEditorFeeds**
> &#39;Boolean&#39; clientPrototypeExistsEditorFeeds(id, fk)

Check the existence of editorFeeds relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeExistsEditorFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeExistsSubscribtions"></a>
# **clientPrototypeExistsSubscribtions**
> &#39;Boolean&#39; clientPrototypeExistsSubscribtions(id, fk)

Check the existence of subscribtions relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeExistsSubscribtions(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeFindByIdAccessTokens"></a>
# **clientPrototypeFindByIdAccessTokens**
> AccessToken clientPrototypeFindByIdAccessTokens(id, fk)

Find a related item by id for accessTokens.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for accessTokens


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeFindByIdAccessTokens(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for accessTokens | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeFindByIdEditorFeeds"></a>
# **clientPrototypeFindByIdEditorFeeds**
> Feed clientPrototypeFindByIdEditorFeeds(id, fk)

Find a related item by id for editorFeeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeFindByIdEditorFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeFindByIdSubscribtions"></a>
# **clientPrototypeFindByIdSubscribtions**
> Feed clientPrototypeFindByIdSubscribtions(id, fk)

Find a related item by id for subscribtions.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeFindByIdSubscribtions(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeGetAccessTokens"></a>
# **clientPrototypeGetAccessTokens**
> [AccessToken] clientPrototypeGetAccessTokens(id, opts)

Queries accessTokens of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeGetAccessTokens(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeGetEditorFeeds"></a>
# **clientPrototypeGetEditorFeeds**
> [Feed] clientPrototypeGetEditorFeeds(id, opts)

Queries editorFeeds of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeGetEditorFeeds(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Feed]**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeGetSubscribtions"></a>
# **clientPrototypeGetSubscribtions**
> [Feed] clientPrototypeGetSubscribtions(id, opts)

Queries subscribtions of Client.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

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
apiInstance.clientPrototypeGetSubscribtions(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **filter** | **String**|  | [optional] 

### Return type

[**[Feed]**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeLinkEditorFeeds"></a>
# **clientPrototypeLinkEditorFeeds**
> EditorRole clientPrototypeLinkEditorFeeds(id, fk, opts)

Add a related item by id for editorFeeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds

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
apiInstance.clientPrototypeLinkEditorFeeds(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 
 **data** | [**EditorRole**](EditorRole.md)|  | [optional] 

### Return type

[**EditorRole**](EditorRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeLinkSubscribtions"></a>
# **clientPrototypeLinkSubscribtions**
> Subscribtion clientPrototypeLinkSubscribtions(id, fk, opts)

Add a related item by id for subscribtions.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions

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
apiInstance.clientPrototypeLinkSubscribtions(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 
 **data** | [**Subscribtion**](Subscribtion.md)|  | [optional] 

### Return type

[**Subscribtion**](Subscribtion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypePatchAttributes"></a>
# **clientPrototypePatchAttributes**
> Client clientPrototypePatchAttributes(id, opts)

Patch attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var opts = { 
  'data': new Backend.Client() // Client | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypePatchAttributes(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **data** | [**Client**](Client.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeUnlinkEditorFeeds"></a>
# **clientPrototypeUnlinkEditorFeeds**
> clientPrototypeUnlinkEditorFeeds(id, fk)

Remove the editorFeeds relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeUnlinkEditorFeeds(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeUnlinkSubscribtions"></a>
# **clientPrototypeUnlinkSubscribtions**
> clientPrototypeUnlinkSubscribtions(id, fk)

Remove the subscribtions relation to an item by id.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeUnlinkSubscribtions(id, fk, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeUpdateByIdAccessTokens"></a>
# **clientPrototypeUpdateByIdAccessTokens**
> AccessToken clientPrototypeUpdateByIdAccessTokens(id, fk, opts)

Update a related item by id for accessTokens.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for accessTokens

var opts = { 
  'data': new Backend.AccessToken() // AccessToken | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientPrototypeUpdateByIdAccessTokens(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for accessTokens | 
 **data** | [**AccessToken**](AccessToken.md)|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeUpdateByIdEditorFeeds"></a>
# **clientPrototypeUpdateByIdEditorFeeds**
> Feed clientPrototypeUpdateByIdEditorFeeds(id, fk, opts)

Update a related item by id for editorFeeds.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for editorFeeds

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
apiInstance.clientPrototypeUpdateByIdEditorFeeds(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for editorFeeds | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeUpdateByIdSubscribtions"></a>
# **clientPrototypeUpdateByIdSubscribtions**
> Feed clientPrototypeUpdateByIdSubscribtions(id, fk, opts)

Update a related item by id for subscribtions.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id

var fk = "fk_example"; // String | Foreign key for subscribtions

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
apiInstance.clientPrototypeUpdateByIdSubscribtions(id, fk, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 
 **fk** | **String**| Foreign key for subscribtions | 
 **data** | [**Feed**](Feed.md)|  | [optional] 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientPrototypeVerify"></a>
# **clientPrototypeVerify**
> clientPrototypeVerify(id)

Trigger user&#39;s identity verification with configured verifyOptions

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Client id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientPrototypeVerify(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Client id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientReplaceByIdPostClientsidReplace"></a>
# **clientReplaceByIdPostClientsidReplace**
> Client clientReplaceByIdPostClientsidReplace(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientReplaceByIdPostClientsidReplace(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientReplaceByIdPutClientsid"></a>
# **clientReplaceByIdPutClientsid**
> Client clientReplaceByIdPutClientsid(id, opts)

Replace attributes for a model instance and persist it into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var id = "id_example"; // String | Model id

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientReplaceByIdPutClientsid(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Model id | 
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientReplaceOrCreatePostClientsReplaceOrCreate"></a>
# **clientReplaceOrCreatePostClientsReplaceOrCreate**
> Client clientReplaceOrCreatePostClientsReplaceOrCreate(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientReplaceOrCreatePostClientsReplaceOrCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientReplaceOrCreatePutClients"></a>
# **clientReplaceOrCreatePutClients**
> Client clientReplaceOrCreatePutClients(opts)

Replace an existing model instance or insert a new one into the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'data': new Backend.Client() // Client | Model instance data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientReplaceOrCreatePutClients(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Client**](Client.md)| Model instance data | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientResetPassword"></a>
# **clientResetPassword**
> clientResetPassword(options)

Reset password for a user with email.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var options = null; // Object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientResetPassword(options, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **options** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientSetPassword"></a>
# **clientSetPassword**
> clientSetPassword(newPassword)

Reset user&#39;s password via a password-reset token.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var newPassword = "newPassword_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clientSetPassword(newPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newPassword** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientUpdateAll"></a>
# **clientUpdateAll**
> InlineResponse2002 clientUpdateAll(opts)

Update instances of the model matched by {{where}} from the data source.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Client() // Client | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientUpdateAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Client**](Client.md)| An object of model property name/value pairs | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

<a name="clientUpsertWithWhere"></a>
# **clientUpsertWithWhere**
> Client clientUpsertWithWhere(opts)

Update an existing model instance or insert a new one into the data source based on the where criteria.

### Example
```javascript
var Backend = require('backend');

var apiInstance = new Backend.ClientApi();

var opts = { 
  'where': "where_example", // String | Criteria to match model instances
  'data': new Backend.Client() // Client | An object of model property name/value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.clientUpsertWithWhere(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Criteria to match model instances | [optional] 
 **data** | [**Client**](Client.md)| An object of model property name/value pairs | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/xml
 - **Accept**: application/json, application/xml, text/xml, application/javascript, text/javascript

