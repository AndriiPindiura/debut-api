/**
 * backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Backend);
  }
}(this, function(expect, Backend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Backend.ClientApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ClientApi', function() {
    describe('clientChangePassword', function() {
      it('should call clientChangePassword successfully', function(done) {
        //uncomment below and update the code to test clientChangePassword
        //instance.clientChangePassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientConfirm', function() {
      it('should call clientConfirm successfully', function(done) {
        //uncomment below and update the code to test clientConfirm
        //instance.clientConfirm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientCount', function() {
      it('should call clientCount successfully', function(done) {
        //uncomment below and update the code to test clientCount
        //instance.clientCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientCreate', function() {
      it('should call clientCreate successfully', function(done) {
        //uncomment below and update the code to test clientCreate
        //instance.clientCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientCreateChangeStreamGetClientsChangeStream', function() {
      it('should call clientCreateChangeStreamGetClientsChangeStream successfully', function(done) {
        //uncomment below and update the code to test clientCreateChangeStreamGetClientsChangeStream
        //instance.clientCreateChangeStreamGetClientsChangeStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientCreateChangeStreamPostClientsChangeStream', function() {
      it('should call clientCreateChangeStreamPostClientsChangeStream successfully', function(done) {
        //uncomment below and update the code to test clientCreateChangeStreamPostClientsChangeStream
        //instance.clientCreateChangeStreamPostClientsChangeStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientDeleteById', function() {
      it('should call clientDeleteById successfully', function(done) {
        //uncomment below and update the code to test clientDeleteById
        //instance.clientDeleteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientExistsGetClientsidExists', function() {
      it('should call clientExistsGetClientsidExists successfully', function(done) {
        //uncomment below and update the code to test clientExistsGetClientsidExists
        //instance.clientExistsGetClientsidExists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientExistsHeadClientsid', function() {
      it('should call clientExistsHeadClientsid successfully', function(done) {
        //uncomment below and update the code to test clientExistsHeadClientsid
        //instance.clientExistsHeadClientsid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientFind', function() {
      it('should call clientFind successfully', function(done) {
        //uncomment below and update the code to test clientFind
        //instance.clientFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientFindById', function() {
      it('should call clientFindById successfully', function(done) {
        //uncomment below and update the code to test clientFindById
        //instance.clientFindById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientFindOne', function() {
      it('should call clientFindOne successfully', function(done) {
        //uncomment below and update the code to test clientFindOne
        //instance.clientFindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientLogin', function() {
      it('should call clientLogin successfully', function(done) {
        //uncomment below and update the code to test clientLogin
        //instance.clientLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientLogout', function() {
      it('should call clientLogout successfully', function(done) {
        //uncomment below and update the code to test clientLogout
        //instance.clientLogout(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPatchOrCreate', function() {
      it('should call clientPatchOrCreate successfully', function(done) {
        //uncomment below and update the code to test clientPatchOrCreate
        //instance.clientPatchOrCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCountAccessTokens', function() {
      it('should call clientPrototypeCountAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCountAccessTokens
        //instance.clientPrototypeCountAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCountEditorFeeds', function() {
      it('should call clientPrototypeCountEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCountEditorFeeds
        //instance.clientPrototypeCountEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCountSubscribtions', function() {
      it('should call clientPrototypeCountSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCountSubscribtions
        //instance.clientPrototypeCountSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCreateAccessTokens', function() {
      it('should call clientPrototypeCreateAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCreateAccessTokens
        //instance.clientPrototypeCreateAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCreateEditorFeeds', function() {
      it('should call clientPrototypeCreateEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCreateEditorFeeds
        //instance.clientPrototypeCreateEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeCreateSubscribtions', function() {
      it('should call clientPrototypeCreateSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeCreateSubscribtions
        //instance.clientPrototypeCreateSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDeleteAccessTokens', function() {
      it('should call clientPrototypeDeleteAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDeleteAccessTokens
        //instance.clientPrototypeDeleteAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDeleteEditorFeeds', function() {
      it('should call clientPrototypeDeleteEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDeleteEditorFeeds
        //instance.clientPrototypeDeleteEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDeleteSubscribtions', function() {
      it('should call clientPrototypeDeleteSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDeleteSubscribtions
        //instance.clientPrototypeDeleteSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDestroyByIdAccessTokens', function() {
      it('should call clientPrototypeDestroyByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDestroyByIdAccessTokens
        //instance.clientPrototypeDestroyByIdAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDestroyByIdEditorFeeds', function() {
      it('should call clientPrototypeDestroyByIdEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDestroyByIdEditorFeeds
        //instance.clientPrototypeDestroyByIdEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeDestroyByIdSubscribtions', function() {
      it('should call clientPrototypeDestroyByIdSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeDestroyByIdSubscribtions
        //instance.clientPrototypeDestroyByIdSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeExistsEditorFeeds', function() {
      it('should call clientPrototypeExistsEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeExistsEditorFeeds
        //instance.clientPrototypeExistsEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeExistsSubscribtions', function() {
      it('should call clientPrototypeExistsSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeExistsSubscribtions
        //instance.clientPrototypeExistsSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeFindByIdAccessTokens', function() {
      it('should call clientPrototypeFindByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeFindByIdAccessTokens
        //instance.clientPrototypeFindByIdAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeFindByIdEditorFeeds', function() {
      it('should call clientPrototypeFindByIdEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeFindByIdEditorFeeds
        //instance.clientPrototypeFindByIdEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeFindByIdSubscribtions', function() {
      it('should call clientPrototypeFindByIdSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeFindByIdSubscribtions
        //instance.clientPrototypeFindByIdSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeGetAccessTokens', function() {
      it('should call clientPrototypeGetAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeGetAccessTokens
        //instance.clientPrototypeGetAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeGetEditorFeeds', function() {
      it('should call clientPrototypeGetEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeGetEditorFeeds
        //instance.clientPrototypeGetEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeGetSubscribtions', function() {
      it('should call clientPrototypeGetSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeGetSubscribtions
        //instance.clientPrototypeGetSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeLinkEditorFeeds', function() {
      it('should call clientPrototypeLinkEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeLinkEditorFeeds
        //instance.clientPrototypeLinkEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeLinkSubscribtions', function() {
      it('should call clientPrototypeLinkSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeLinkSubscribtions
        //instance.clientPrototypeLinkSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypePatchAttributes', function() {
      it('should call clientPrototypePatchAttributes successfully', function(done) {
        //uncomment below and update the code to test clientPrototypePatchAttributes
        //instance.clientPrototypePatchAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeUnlinkEditorFeeds', function() {
      it('should call clientPrototypeUnlinkEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeUnlinkEditorFeeds
        //instance.clientPrototypeUnlinkEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeUnlinkSubscribtions', function() {
      it('should call clientPrototypeUnlinkSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeUnlinkSubscribtions
        //instance.clientPrototypeUnlinkSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeUpdateByIdAccessTokens', function() {
      it('should call clientPrototypeUpdateByIdAccessTokens successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeUpdateByIdAccessTokens
        //instance.clientPrototypeUpdateByIdAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeUpdateByIdEditorFeeds', function() {
      it('should call clientPrototypeUpdateByIdEditorFeeds successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeUpdateByIdEditorFeeds
        //instance.clientPrototypeUpdateByIdEditorFeeds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeUpdateByIdSubscribtions', function() {
      it('should call clientPrototypeUpdateByIdSubscribtions successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeUpdateByIdSubscribtions
        //instance.clientPrototypeUpdateByIdSubscribtions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientPrototypeVerify', function() {
      it('should call clientPrototypeVerify successfully', function(done) {
        //uncomment below and update the code to test clientPrototypeVerify
        //instance.clientPrototypeVerify(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientReplaceByIdPostClientsidReplace', function() {
      it('should call clientReplaceByIdPostClientsidReplace successfully', function(done) {
        //uncomment below and update the code to test clientReplaceByIdPostClientsidReplace
        //instance.clientReplaceByIdPostClientsidReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientReplaceByIdPutClientsid', function() {
      it('should call clientReplaceByIdPutClientsid successfully', function(done) {
        //uncomment below and update the code to test clientReplaceByIdPutClientsid
        //instance.clientReplaceByIdPutClientsid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientReplaceOrCreatePostClientsReplaceOrCreate', function() {
      it('should call clientReplaceOrCreatePostClientsReplaceOrCreate successfully', function(done) {
        //uncomment below and update the code to test clientReplaceOrCreatePostClientsReplaceOrCreate
        //instance.clientReplaceOrCreatePostClientsReplaceOrCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientReplaceOrCreatePutClients', function() {
      it('should call clientReplaceOrCreatePutClients successfully', function(done) {
        //uncomment below and update the code to test clientReplaceOrCreatePutClients
        //instance.clientReplaceOrCreatePutClients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientResetPassword', function() {
      it('should call clientResetPassword successfully', function(done) {
        //uncomment below and update the code to test clientResetPassword
        //instance.clientResetPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientSetPassword', function() {
      it('should call clientSetPassword successfully', function(done) {
        //uncomment below and update the code to test clientSetPassword
        //instance.clientSetPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientUpdateAll', function() {
      it('should call clientUpdateAll successfully', function(done) {
        //uncomment below and update the code to test clientUpdateAll
        //instance.clientUpdateAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clientUpsertWithWhere', function() {
      it('should call clientUpsertWithWhere successfully', function(done) {
        //uncomment below and update the code to test clientUpsertWithWhere
        //instance.clientUpsertWithWhere(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
