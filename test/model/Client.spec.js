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
    instance = new Backend.Client();
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

  describe('Client', function() {
    it('should create an instance of Client', function() {
      // uncomment below and update the code to test Client
      //var instane = new Backend.Client();
      //expect(instance).to.be.a(Backend.Client);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property secondName (base name: "secondName")', function() {
      // uncomment below and update the code to test the property secondName
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property realm (base name: "realm")', function() {
      // uncomment below and update the code to test the property realm
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property emailVerified (base name: "emailVerified")', function() {
      // uncomment below and update the code to test the property emailVerified
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Backend.Client();
      //expect(instance).to.be();
    });

  });

}));
