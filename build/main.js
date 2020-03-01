require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: HOST, PORT, DB_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_URL", function() { return DB_URL; });
/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv-safe */ "dotenv-safe");
/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_safe__WEBPACK_IMPORTED_MODULE_0__);

dotenv_safe__WEBPACK_IMPORTED_MODULE_0___default.a.config();
const {
  HOST,
  PORT,
  DB_URL
} = process.env;


/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_1__["DB_URL"], {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => console.log('Mongo DB connected.')).catch(err => console.error(err.message));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-graphql */ "express-graphql");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ "./src/db/index.js");
/* harmony import */ var _user_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/graphql */ "./src/user/graphql/index.js");






const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
Object(_db__WEBPACK_IMPORTED_MODULE_4__["default"])();
app.use('*', cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use('/', cors__WEBPACK_IMPORTED_MODULE_2___default()(), express_graphql__WEBPACK_IMPORTED_MODULE_1___default()({
  schema: _user_graphql__WEBPACK_IMPORTED_MODULE_5__["default"],
  rootValue: global,
  graphiql: true
}));
app.listen(_config__WEBPACK_IMPORTED_MODULE_3__["PORT"], () => {
  console.log(`🚀  Server ready at ${_config__WEBPACK_IMPORTED_MODULE_3__["HOST"]}:${_config__WEBPACK_IMPORTED_MODULE_3__["PORT"]}`);
});

/***/ }),

/***/ "./src/user/graphql/index.js":
/*!***********************************!*\
  !*** ./src/user/graphql/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries */ "./src/user/graphql/queries/index.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./src/user/graphql/mutations/index.js");



/* harmony default export */ __webpack_exports__["default"] = (new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]({
  query: _queries__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutation: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
    name: 'Mutation',
    fields: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"]
  })
}));

/***/ }),

/***/ "./src/user/graphql/mutations/index.js":
/*!*********************************************!*\
  !*** ./src/user/graphql/mutations/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./src/user/graphql/schema/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model */ "./src/user/model/index.js");



/**
 * Mutation create User.
 * @type args:
 * {
 *    first_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    last_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    email: {type: GraphQLNonNull<GraphQLNullableType>}
 * }
 */

const createUser = {
  type: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  args: {
    first_name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    last_name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    email: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    }
  },

  resolve(root, params) {
    const user = new _model__WEBPACK_IMPORTED_MODULE_2__["default"](params);
    const newUser = user.save();

    if (!newUser) {
      throw new Error('Error on creating user.');
    }

    return newUser;
  }

};
/**
 * Mutation reading User.
 * @type {{args: {id: {type: GraphQLNonNull<GraphQLNullableType>}} }}
 * TODO: Есть сомнения в необходимости этого метода в мутациях, т.к. пользователя можем получить в query.
 */

const readUser = {
  type: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  args: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    }
  },

  resolve(root, params) {
    const user = _model__WEBPACK_IMPORTED_MODULE_2__["default"].findById(params.id).exec();

    if (!user) {
      throw new Error('Error on get user by id.');
    }

    return user;
  }

};
/**
 * Mutation update User.
 * @type args:
 * {
 *    id: {name: string, type: GraphQLNonNull<GraphQLNullableType>},
 *    first_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    last_name: {type: GraphQLNonNull<GraphQLNullableType>},
 *    email: {type: GraphQLNonNull<GraphQLNullableType>}
 * }
 */

const updateUser = {
  type: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  args: {
    id: {
      name: 'id',
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    first_name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    last_name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    },
    email: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    }
  },

  resolve(root, params) {
    const {
      id,
      first_name,
      last_name,
      email
    } = params;
    return _model__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(id, {
      $set: {
        first_name,
        last_name,
        email
      }
    }, {
      new: true
    }).catch(err => new Error(err));
  }

};
/**
 * Mutation delete User.
 * @type {{args: {id: {type: GraphQLNonNull<GraphQLNullableType>}} }}
 */

const deleteUser = {
  type: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  args: {
    id: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
    }
  },

  resolve(root, params) {
    const removedUser = _model__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndRemove(params.id).exec();

    if (!removedUser) {
      throw new Error('Error on remove user.');
    }

    return removedUser;
  }

};
/* harmony default export */ __webpack_exports__["default"] = ({
  createUser,
  readUser,
  updateUser,
  deleteUser
});

/***/ }),

/***/ "./src/user/graphql/queries/index.js":
/*!*******************************************!*\
  !*** ./src/user/graphql/queries/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "./src/user/model/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema */ "./src/user/graphql/schema/index.js");



/* harmony default export */ __webpack_exports__["default"] = (new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: 'Query',
  fields: () => {
    return {
      users: {
        type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLList"](_schema__WEBPACK_IMPORTED_MODULE_2__["default"]),
        resolve: () => {
          const users = _model__WEBPACK_IMPORTED_MODULE_1__["default"].find().exec();

          if (!users) {
            throw new Error('Error on get user.');
          }

          return users;
        }
      }
    };
  }
}));

/***/ }),

/***/ "./src/user/graphql/schema/index.js":
/*!******************************************!*\
  !*** ./src/user/graphql/schema/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: 'user',
  fields: function () {
    return {
      first_name: {
        type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
      },
      last_name: {
        type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
      },
      email: {
        type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (userSchema);

/***/ }),

/***/ "./src/user/model/index.js":
/*!*********************************!*\
  !*** ./src/user/model/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
/**
 * Mongoose user schema.
 */

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});
const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/app/src/index.js */"./src/index.js");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv-safe":
/*!******************************!*\
  !*** external "dotenv-safe" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv-safe");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map