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


import ApiClient from '../ApiClient';





/**
* The Article model module.
* @module model/Article
* @version 0.1.0
*/
export default class Article {
    /**
    * Constructs a new <code>Article</code>.
    * @alias module:model/Article
    * @class
    * @param feedId {Number} 
    */

    constructor(feedId) {
        


        this['feedId'] = feedId;

        
    }

    /**
    * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Article} obj Optional instance to populate.
    * @return {module:model/Article} The populated <code>Article</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Article();

            
            
            if (data.hasOwnProperty('publishedVersion')) {
                obj['publishedVersion'] = ApiClient.convertToType(data['publishedVersion'], 'Number');
            }
            if (data.hasOwnProperty('publishedAt')) {
                obj['publishedAt'] = ApiClient.convertToType(data['publishedAt'], 'Date');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('feedId')) {
                obj['feedId'] = ApiClient.convertToType(data['feedId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('articleId')) {
                obj['articleId'] = ApiClient.convertToType(data['articleId'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} publishedVersion
    */
    publishedVersion = undefined;
    /**
    * @member {Date} publishedAt
    */
    publishedAt = undefined;
    /**
    * @member {Date} createdAt
    */
    createdAt = undefined;
    /**
    * @member {Date} updatedAt
    */
    updatedAt = undefined;
    /**
    * @member {Boolean} isDeleted
    * @default false
    */
    isDeleted = false;
    /**
    * @member {Number} feedId
    */
    feedId = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {Number} articleId
    */
    articleId = undefined;








}


