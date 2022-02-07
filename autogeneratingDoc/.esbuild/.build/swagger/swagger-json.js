"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// swagger/swagger.js
var require_swagger = __commonJS({
  "swagger/swagger.js"(exports2, module2) {
    module2.exports = {
      "swagger": "2.0",
      "info": {
        "title": "autogeneratingdoc",
        "version": "1"
      },
      "schemes": [
        "https"
      ],
      "paths": {
        "/hello": {
          "post": {
            "summary": "hello",
            "description": "",
            "operationId": "hello",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "parameters": [],
            "responses": {
              "200": {
                "description": "200 response"
              }
            }
          }
        }
      },
      "definitions": {}
    };
  }
});

// swagger/swagger-json.js
var swagger = require_swagger();
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(swagger)
  };
};
//# sourceMappingURL=swagger-json.js.map
