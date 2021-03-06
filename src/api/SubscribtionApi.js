/**
 * backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import Subscribtion from '../model/Subscribtion';

/**
* Subscribtion service.
* @module api/SubscribtionApi
* @version 0.1.0
*/
export default class SubscribtionApi {

    /**
    * Constructs a new SubscribtionApi. 
    * @alias module:api/SubscribtionApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Count instances of the model matched by where from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    subscribtionCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/Subscribtions/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Count instances of the model matched by where from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    subscribtionCount(opts) {
      return this.subscribtionCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new instance of the model and persist it into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionCreateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new instance of the model and persist it into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionCreate(opts) {
      return this.subscribtionCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a change stream.
     * @param {Object} opts Optional parameters
     * @param {String} opts.options 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    subscribtionCreateChangeStreamGetSubscribtionsChangeStreamWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'options': opts['options']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = File;

      return this.apiClient.callApi(
        '/Subscribtions/change-stream', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a change stream.
     * @param {Object} opts Optional parameters
     * @param {String} opts.options 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    subscribtionCreateChangeStreamGetSubscribtionsChangeStream(opts) {
      return this.subscribtionCreateChangeStreamGetSubscribtionsChangeStreamWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a change stream.
     * @param {Object} opts Optional parameters
     * @param {String} opts.options 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    subscribtionCreateChangeStreamPostSubscribtionsChangeStreamWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'options': opts['options']
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = File;

      return this.apiClient.callApi(
        '/Subscribtions/change-stream', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a change stream.
     * @param {Object} opts Optional parameters
     * @param {String} opts.options 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    subscribtionCreateChangeStreamPostSubscribtionsChangeStream(opts) {
      return this.subscribtionCreateChangeStreamPostSubscribtionsChangeStreamWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a model instance by {{id}} from the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    subscribtionDeleteByIdWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionDeleteById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/Subscribtions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a model instance by {{id}} from the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    subscribtionDeleteById(id) {
      return this.subscribtionDeleteByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Check whether a model instance exists in the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    subscribtionExistsGetSubscribtionsidExistsWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionExistsGetSubscribtionsidExists");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/Subscribtions/{id}/exists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check whether a model instance exists in the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    subscribtionExistsGetSubscribtionsidExists(id) {
      return this.subscribtionExistsGetSubscribtionsidExistsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Check whether a model instance exists in the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    subscribtionExistsHeadSubscribtionsidWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionExistsHeadSubscribtionsid");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/Subscribtions/{id}', 'HEAD',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Check whether a model instance exists in the data source.
     * @param {String} id Model id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    subscribtionExistsHeadSubscribtionsid(id) {
      return this.subscribtionExistsHeadSubscribtionsidWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find all instances of the model matched by filter from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Subscribtion>} and HTTP response
     */
    subscribtionFindWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [Subscribtion];

      return this.apiClient.callApi(
        '/Subscribtions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find all instances of the model matched by filter from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Subscribtion>}
     */
    subscribtionFind(opts) {
      return this.subscribtionFindWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find a model instance by {{id}} from the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionFindByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionFindById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find a model instance by {{id}} from the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields and include - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionFindById(id, opts) {
      return this.subscribtionFindByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find first instance of the model matched by filter from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionFindOneWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/findOne', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find first instance of the model matched by filter from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({\&quot;something\&quot;:\&quot;value\&quot;})
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionFindOne(opts) {
      return this.subscribtionFindOneWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionPatchOrCreateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Patch an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionPatchOrCreate(opts) {
      return this.subscribtionPatchOrCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch attributes for a model instance and persist it into the data source.
     * @param {String} id Subscribtion id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionPrototypePatchAttributesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionPrototypePatchAttributes");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Patch attributes for a model instance and persist it into the data source.
     * @param {String} id Subscribtion id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionPrototypePatchAttributes(id, opts) {
      return this.subscribtionPrototypePatchAttributesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace attributes for a model instance and persist it into the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionReplaceByIdPostSubscribtionsidReplaceWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionReplaceByIdPostSubscribtionsidReplace");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/{id}/replace', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionReplaceByIdPostSubscribtionsidReplace(id, opts) {
      return this.subscribtionReplaceByIdPostSubscribtionsidReplaceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace attributes for a model instance and persist it into the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionReplaceByIdPutSubscribtionsidWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscribtionReplaceByIdPutSubscribtionsid");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     * @param {String} id Model id
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionReplaceByIdPutSubscribtionsid(id, opts) {
      return this.subscribtionReplaceByIdPutSubscribtionsidWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/replaceOrCreate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreate(opts) {
      return this.subscribtionReplaceOrCreatePostSubscribtionsReplaceOrCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionReplaceOrCreatePutSubscribtionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     * @param {Object} opts Optional parameters
     * @param {module:model/Subscribtion} opts.data Model instance data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionReplaceOrCreatePutSubscribtions(opts) {
      return this.subscribtionReplaceOrCreatePutSubscribtionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update instances of the model matched by {{where}} from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    subscribtionUpdateAllWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/Subscribtions/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update instances of the model matched by {{where}} from the data source.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    subscribtionUpdateAll(opts) {
      return this.subscribtionUpdateAllWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscribtion} and HTTP response
     */
    subscribtionUpsertWithWhereWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['data'];


      let pathParams = {
      };
      let queryParams = {
        'where': opts['where']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Subscribtion;

      return this.apiClient.callApi(
        '/Subscribtions/upsertWithWhere', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Criteria to match model instances
     * @param {module:model/Subscribtion} opts.data An object of model property name/value pairs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscribtion}
     */
    subscribtionUpsertWithWhere(opts) {
      return this.subscribtionUpsertWithWhereWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
