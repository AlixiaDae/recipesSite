/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CedarvilleCursive-Regular.ttf */ "./src/CedarvilleCursive-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./NORDIC LIGHT.ttf */ "./src/NORDIC LIGHT.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Cedar';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Nordic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    font-size: 24px;\n    font-family: 'Nordic';\n    padding: 0;\n    background-color: rgb(153, 3, 3);\n    color: whitesmoke;\n}\n\nh1 {\n    margin: 20px 0px 20px 50px;\n    letter-spacing: 3px;\n}\n\n.main {\n    box-shadow: -3px 0px 6px gray inset;\n    flex: auto;\n    display: flex;\n    justify-content: center;\n}\n\n.footer {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 10px;\n    background-color: black;\n    color: whitesmoke;\n    font-family: 'Nordic';\n    letter-spacing: 2px;\n    font-size: 17px;\n}\n\na > img {\n    height: 30px;\n}\n\n.copyright {\n    cursor: default;\n}\n\n/*Main Page Content Selectors*/\n\n.feast-image {\n    width: 50%;\n    height: 900px;\n}\n\n.recipe-wrapper,\n.stew-subwrapper {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px 15px 15px 15px;\n}\n\n.recipe-subheader,\n.stew-header {\n    font-family: 'Nordic';\n    font-size: 33px;\n    letter-spacing: 2px;\n    cursor:  default;\n}\n\n.recipe-grid {\n    display: grid;\n    grid-template-columns: minmax(300px, auto) minmax(300px, auto);\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    row-gap: 5px;\n    column-gap: 5px;\n    flex: auto;\n    padding: 10px;\n    margin-left: 30px;\n}\n\n.recipe-card {\n    font-size: 20px;\n    font-family: 'Nordic';\n    padding: 10px;\n    width: 350px;\n    transition: 0.3s;\n}\n\n.recipe-card > img {\n    height: 300px;\n    width: 300px;\n}\n\n/*Stew Selectors*/\n\n.stew-wrapper {\n    display: flex;\n}\n\n.stew-subwrapper {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    align-items: center;\n}\n\n.ingredients-header,\n.instructions-header {\n    margin-top: 10px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.stew-image {\n    width: 50%;\n}\n\n.ingredients-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr ;\n    grid-auto-flow: row;\n    grid-auto-rows: 40px;\n    row-gap: 5px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 20px;\n    text-align: left;\n    width: 50%;\n    margin-top: 10px;\n}\n\n.ingredient {\n    list-style-type: disc;\n    \n}\n\n/*Pseudo-selectors*/\n\na > img:hover {\n    opacity: 80%;\n}\n\n.site-name:hover,\n.recipe-card:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.recipe-card:hover {\n    box-shadow: 3px 3px 5px gray;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAA2C;AAC/C;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,UAAU;IACV,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,UAAU;IACV,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA,8BAA8B;;AAE9B;IACI,UAAU;IACV,aAAa;AACjB;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;;IAEI,qBAAqB;IACrB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,kCAAkC;IAClC,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;IACZ,wEAAwE;IACxE,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;;AAEzB;;AAEA,mBAAmB;;AAEnB;IACI,YAAY;AAChB;;AAEA;;IAEI,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["@font-face {\n    font-family: 'Cedar';\n    src: url('./CedarvilleCursive-Regular.ttf');\n}\n\n@font-face {\n    font-family: 'Nordic';\n    src: url('./NORDIC\\ LIGHT.ttf');\n}\n\nbody {\n    margin: 0;\n    height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    font-size: 24px;\n    font-family: 'Nordic';\n    padding: 0;\n    background-color: rgb(153, 3, 3);\n    color: whitesmoke;\n}\n\nh1 {\n    margin: 20px 0px 20px 50px;\n    letter-spacing: 3px;\n}\n\n.main {\n    box-shadow: -3px 0px 6px gray inset;\n    flex: auto;\n    display: flex;\n    justify-content: center;\n}\n\n.footer {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 10px;\n    background-color: black;\n    color: whitesmoke;\n    font-family: 'Nordic';\n    letter-spacing: 2px;\n    font-size: 17px;\n}\n\na > img {\n    height: 30px;\n}\n\n.copyright {\n    cursor: default;\n}\n\n/*Main Page Content Selectors*/\n\n.feast-image {\n    width: 50%;\n    height: 900px;\n}\n\n.recipe-wrapper,\n.stew-subwrapper {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding: 40px 15px 15px 15px;\n}\n\n.recipe-subheader,\n.stew-header {\n    font-family: 'Nordic';\n    font-size: 33px;\n    letter-spacing: 2px;\n    cursor:  default;\n}\n\n.recipe-grid {\n    display: grid;\n    grid-template-columns: minmax(300px, auto) minmax(300px, auto);\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    row-gap: 5px;\n    column-gap: 5px;\n    flex: auto;\n    padding: 10px;\n    margin-left: 30px;\n}\n\n.recipe-card {\n    font-size: 20px;\n    font-family: 'Nordic';\n    padding: 10px;\n    width: 350px;\n    transition: 0.3s;\n}\n\n.recipe-card > img {\n    height: 300px;\n    width: 300px;\n}\n\n/*Stew Selectors*/\n\n.stew-wrapper {\n    display: flex;\n}\n\n.stew-subwrapper {\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    align-items: center;\n}\n\n.ingredients-header,\n.instructions-header {\n    margin-top: 10px;\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.stew-image {\n    width: 50%;\n}\n\n.ingredients-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 40px 1fr ;\n    grid-auto-flow: row;\n    grid-auto-rows: 40px;\n    row-gap: 5px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 20px;\n    text-align: left;\n    width: 50%;\n    margin-top: 10px;\n}\n\n.ingredient {\n    list-style-type: disc;\n    \n}\n\n/*Pseudo-selectors*/\n\na > img:hover {\n    opacity: 80%;\n}\n\n.site-name:hover,\n.recipe-card:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.recipe-card:hover {\n    box-shadow: 3px 3px 5px gray;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/flatbread.js":
/*!********************************!*\
  !*** ./src/pages/flatbread.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function creatFlatbread() {
    const flatbreadWrapper = document.createElement("div")
    flatbreadWrapper.classList.add("flatbread-wrapper")

    const flatbreadHeader = document.createElement("div")
    flatbreadHeader.textContent = "Viking Flatbread"
    flatbreadWrapper.appendChild(flatbreadHeader)

    return flatbreadWrapper
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creatFlatbread);

/***/ }),

/***/ "./src/pages/porridge.js":
/*!*******************************!*\
  !*** ./src/pages/porridge.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createPorridge() {
    const porridgeWrapper = document.createElement("div")
    porridgeWrapper.classList.add("porridge-wrapper")

    const porridgeHeader = document.createElement("div")
    porridgeHeader.textContent = "Viking Barley Porridge"
    porridgeWrapper.appendChild(porridgeHeader)

    return porridgeWrapper
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPorridge);

/***/ }),

/***/ "./src/pages/stew.js":
/*!***************************!*\
  !*** ./src/pages/stew.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_stew_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/stew.jpg */ "./src/images/stew.jpg");


function createStew() {
    const stewWrapper = document.createElement("div")
    stewWrapper.classList.add("stew-wrapper")

    const stewSubWrapper = document.createElement("div")
    stewSubWrapper.classList.add("stew-subwrapper")
    stewWrapper.appendChild(stewSubWrapper)

    const stewHeader = document.createElement("div")
    stewHeader.classList.add("stew-header")
    stewHeader.textContent = "Hearty Viking Stew"
    stewSubWrapper.appendChild(stewHeader)

    const ingredientsHeader = document.createElement("div")
    ingredientsHeader.classList.add("ingredients-header")
    ingredientsHeader.textContent = "Ingredients"
    stewSubWrapper.appendChild(ingredientsHeader)

    const ingredientsGrid = document.createElement("div")
    ingredientsGrid.classList.add("ingredients-grid")
    stewSubWrapper.appendChild(ingredientsGrid)

    ingredientsGrid.appendChild(appendIngredients("1 lb beef or venison, cubed"))
    ingredientsGrid.appendChild(appendIngredients("2 onions, chopped"))
    ingredientsGrid.appendChild(appendIngredients("3 carrots, chopped"))
    ingredientsGrid.appendChild(appendIngredients("2 parsnips, chopped"))
    ingredientsGrid.appendChild(appendIngredients("2 turnips, chopped"))
    ingredientsGrid.appendChild(appendIngredients("4 cups beef broth"))
    ingredientsGrid.appendChild(appendIngredients("2 tbsp butter"))
    ingredientsGrid.appendChild(appendIngredients("1 tbsp salt"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp ground black pepper"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried thyme"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried sage"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried rosemary"))

    const instructionsWrapper = document.createElement("div")
    instructionsWrapper.classList.add("instructions-wrapper")
    stewSubWrapper.appendChild(instructionsWrapper)

    const instructionsHeader = document.createElement("div")
    instructionsHeader.classList.add("instructions-header")
    instructionsHeader.textContent = "Instructions"
    instructionsWrapper.appendChild(instructionsHeader)


    const stewImage = document.createElement("img")
    stewImage.classList.add("stew-image")
    stewImage.src = _images_stew_jpg__WEBPACK_IMPORTED_MODULE_0__
    stewImage.alt = "Hearty Viking Stew"
    stewWrapper.appendChild(stewImage)

    return stewWrapper
}

function appendIngredients(name) {
    const ingredientName = document.createElement("li")
    ingredientName.classList.add("ingredient")
    ingredientName.textContent = name

    return ingredientName
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStew);


/***/ }),

/***/ "./src/pages/website.js":
/*!******************************!*\
  !*** ./src/pages/website.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stew */ "./src/pages/stew.js");
/* harmony import */ var _yogurt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yogurt */ "./src/pages/yogurt.js");
/* harmony import */ var _flatbread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flatbread */ "./src/pages/flatbread.js");
/* harmony import */ var _porridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./porridge */ "./src/pages/porridge.js");
/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/github-mark-white.png */ "./src/images/github-mark-white.png");
/* harmony import */ var _images_feast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/feast.jpg */ "./src/images/feast.jpg");
/* harmony import */ var _images_stew_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/stew.jpg */ "./src/images/stew.jpg");
/* harmony import */ var _images_yogurt_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/yogurt.jpg */ "./src/images/yogurt.jpg");
/* harmony import */ var _images_porridge_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/porridge.jpg */ "./src/images/porridge.jpg");
/* harmony import */ var _images_flatbread_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/flatbread.png */ "./src/images/flatbread.png");












function createHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const siteName = document.createElement("h1")
    siteName.classList.add("site-name")
    siteName.textContent = "Odin's Recipes"

    siteName.addEventListener("click", () => {
        const content = document.querySelector(".content")
        content.textContent = ""
        initializeWebsite()
    })

    header.appendChild(siteName)

    return header
}

function createMain() {
    const main = document.createElement("main")
    main.classList.add("main")
    main.setAttribute("id", "main")

    const feastImage = document.createElement("img")
    feastImage.classList.add("feast-image")
    feastImage.src = _images_feast_jpg__WEBPACK_IMPORTED_MODULE_5__
    feastImage.alt = "Feast"
    main.appendChild(feastImage)

    const recipeWrapper = document.createElement("div")
    recipeWrapper.classList.add("recipe-wrapper")
    main.appendChild(recipeWrapper)

    const recipeSubheader = document.createElement("div")
    recipeSubheader.classList.add("recipe-subheader")
    recipeSubheader.textContent = "Today's Specials"
    recipeWrapper.appendChild(recipeSubheader)

    //Recipe Grid

    const recipeGrid = document.createElement("div")
    recipeGrid.classList.add("recipe-grid")
    recipeWrapper.appendChild(recipeGrid)

    recipeGrid.appendChild(createRecipeCard("Hearty Viking Stew", _images_stew_jpg__WEBPACK_IMPORTED_MODULE_6__, (0,_stew__WEBPACK_IMPORTED_MODULE_0__["default"])()))

    recipeGrid.appendChild(createRecipeCard("Viking Flatbread", _images_flatbread_png__WEBPACK_IMPORTED_MODULE_9__, (0,_flatbread__WEBPACK_IMPORTED_MODULE_2__["default"])()))

    recipeGrid.appendChild(createRecipeCard("Skyr with Honey and Nuts", _images_yogurt_jpg__WEBPACK_IMPORTED_MODULE_7__, (0,_yogurt__WEBPACK_IMPORTED_MODULE_1__["default"])()))

    recipeGrid.appendChild(createRecipeCard("Viking Barley Porridge", _images_porridge_jpg__WEBPACK_IMPORTED_MODULE_8__, (0,_porridge__WEBPACK_IMPORTED_MODULE_3__["default"])()))

    return main
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const copyright = document.createElement("p")
    copyright.classList.add("copyright")
    copyright.textContent = `Copyright © ${new Date().getFullYear()} AlixiaDae`
    footer.appendChild(copyright)

    const githubLink = document.createElement("a")
    githubLink.setAttribute("target", "blank")
    githubLink.href = "https://github.com/AlixiaDae"
    footer.appendChild(githubLink)

    const githubIcon = document.createElement("img")
    githubIcon.src = _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_4__
    githubLink.appendChild(githubIcon)

    return footer
}

function createRecipeCard(name, imageSrc, recipeLink) {
    const recipeCard = document.createElement("div")
    recipeCard.classList.add("recipe-card")

    const recipeImage = document.createElement("img")
    recipeImage.src = imageSrc
    recipeImage.alt = name
    recipeCard.appendChild(recipeImage)

    const recipeName = document.createElement("div")
    recipeName.textContent = name
    recipeCard.appendChild(recipeName)

    recipeCard.addEventListener("click", (e) => {
            if(e.target.classList.contains("active")) return
            setActiveCard(recipeCard)
            const main = document.getElementById("main")
            main.textContent = ""
            main.appendChild(recipeLink)
        })
    
    return recipeCard
}

function setActiveCard(card) {
    const recipeCards = document.querySelectorAll(".recipe-card")

    recipeCards.forEach(recipeCard => {
        if(recipeCard !== this) {
            recipeCard.classList.remove("active")
        }
    });

    card.classList.add("active")
}

function appendToMain(recipeLink) {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(recipeLink)
}

function initializeWebsite() {
    const content = document.querySelector(".content")

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/pages/yogurt.js":
/*!*****************************!*\
  !*** ./src/pages/yogurt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createYogurt() {
    const yogurtWrapper = document.createElement("div")
    yogurtWrapper.classList.add("yogurt-wrapper")

    const yogurtHeader = document.createElement("div")
    yogurtHeader.textContent = "Skyr with Honey and Nuts"
    yogurtWrapper.appendChild(yogurtHeader)

    return yogurtWrapper
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createYogurt);

/***/ }),

/***/ "./src/CedarvilleCursive-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/CedarvilleCursive-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d038d9ba6f24f43a1fd2.ttf";

/***/ }),

/***/ "./src/NORDIC LIGHT.ttf":
/*!******************************!*\
  !*** ./src/NORDIC LIGHT.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d7f4b0d954e54697d47.ttf";

/***/ }),

/***/ "./src/images/feast.jpg":
/*!******************************!*\
  !*** ./src/images/feast.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31dc241d4d10eb881e42.jpg";

/***/ }),

/***/ "./src/images/flatbread.png":
/*!**********************************!*\
  !*** ./src/images/flatbread.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "367008f65dc848c67512.png";

/***/ }),

/***/ "./src/images/github-mark-white.png":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/images/porridge.jpg":
/*!*********************************!*\
  !*** ./src/images/porridge.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d017a4e6e195b1cd4a1.jpg";

/***/ }),

/***/ "./src/images/stew.jpg":
/*!*****************************!*\
  !*** ./src/images/stew.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b94a461a8e07ec8bf9d.jpg";

/***/ }),

/***/ "./src/images/yogurt.jpg":
/*!*******************************!*\
  !*** ./src/images/yogurt.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccf51bd7e88e424e4f60.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/website */ "./src/pages/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_pages_website__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELDJCQUEyQiwyREFBMkQsR0FBRyxnQkFBZ0IsNEJBQTRCLDJEQUEyRCxHQUFHLFVBQVUsZ0JBQWdCLG9CQUFvQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxhQUFhLHNCQUFzQiw0QkFBNEIsaUJBQWlCLHVDQUF1Qyx3QkFBd0IsR0FBRyxRQUFRLGlDQUFpQywwQkFBMEIsR0FBRyxXQUFXLDBDQUEwQyxpQkFBaUIsb0JBQW9CLDhCQUE4QixHQUFHLGFBQWEsb0JBQW9CLGdCQUFnQiwwQkFBMEIsOEJBQThCLHlCQUF5QixvQkFBb0IsOEJBQThCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLHNCQUFzQixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHFEQUFxRCxpQkFBaUIsb0JBQW9CLEdBQUcsd0NBQXdDLGlCQUFpQixvQkFBb0IsNkJBQTZCLHlCQUF5QixtQ0FBbUMsR0FBRyxzQ0FBc0MsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLEdBQUcsa0JBQWtCLG9CQUFvQixxRUFBcUUseUNBQXlDLDBCQUEwQixtQkFBbUIsc0JBQXNCLGlCQUFpQixvQkFBb0Isd0JBQXdCLEdBQUcsa0JBQWtCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLG1CQUFtQix1QkFBdUIsR0FBRyx3QkFBd0Isb0JBQW9CLG1CQUFtQixHQUFHLHlDQUF5QyxvQkFBb0IsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QixpQkFBaUIsMEJBQTBCLEdBQUcsZ0RBQWdELHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLHVCQUF1QixvQkFBb0IscUNBQXFDLG9DQUFvQywwQkFBMEIsMkJBQTJCLG1CQUFtQiwrRUFBK0Usc0JBQXNCLHVCQUF1QixpQkFBaUIsdUJBQXVCLEdBQUcsaUJBQWlCLDRCQUE0QixTQUFTLDJDQUEyQyxtQkFBbUIsR0FBRywyQ0FBMkMsaUNBQWlDLHNCQUFzQixHQUFHLHdCQUF3QixtQ0FBbUMsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLHNDQUFzQywyQkFBMkIsa0RBQWtELEdBQUcsZ0JBQWdCLDRCQUE0Qix1Q0FBdUMsR0FBRyxVQUFVLGdCQUFnQixvQkFBb0IsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcsYUFBYSxzQkFBc0IsNEJBQTRCLGlCQUFpQix1Q0FBdUMsd0JBQXdCLEdBQUcsUUFBUSxpQ0FBaUMsMEJBQTBCLEdBQUcsV0FBVywwQ0FBMEMsaUJBQWlCLG9CQUFvQiw4QkFBOEIsR0FBRyxhQUFhLG9CQUFvQixnQkFBZ0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsNEJBQTRCLDBCQUEwQixzQkFBc0IsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxxREFBcUQsaUJBQWlCLG9CQUFvQixHQUFHLHdDQUF3QyxpQkFBaUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsbUNBQW1DLEdBQUcsc0NBQXNDLDRCQUE0QixzQkFBc0IsMEJBQTBCLHVCQUF1QixHQUFHLGtCQUFrQixvQkFBb0IscUVBQXFFLHlDQUF5QywwQkFBMEIsbUJBQW1CLHNCQUFzQixpQkFBaUIsb0JBQW9CLHdCQUF3QixHQUFHLGtCQUFrQixzQkFBc0IsNEJBQTRCLG9CQUFvQixtQkFBbUIsdUJBQXVCLEdBQUcsd0JBQXdCLG9CQUFvQixtQkFBbUIsR0FBRyx5Q0FBeUMsb0JBQW9CLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLDBCQUEwQixHQUFHLGdEQUFnRCx1QkFBdUIsc0JBQXNCLHdCQUF3QixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxvQ0FBb0MsMEJBQTBCLDJCQUEyQixtQkFBbUIsK0VBQStFLHNCQUFzQix1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLGlCQUFpQiw0QkFBNEIsU0FBUywyQ0FBMkMsbUJBQW1CLEdBQUcsMkNBQTJDLGlDQUFpQyxzQkFBc0IsR0FBRyx3QkFBd0IsbUNBQW1DLEdBQUcsbUJBQW1CO0FBQ3hrTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1pmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1pzQjs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBSTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFTTtBQUNJO0FBQ0s7QUFDRDs7QUFFYTtBQUNiO0FBQ0Y7QUFDSTtBQUNJO0FBQ0U7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBSztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0VBQWtFLDZDQUFJLEVBQUUsaURBQVU7O0FBRWxGLGdFQUFnRSxrREFBUyxFQUFFLHNEQUFjOztBQUV6Rix3RUFBd0UsK0NBQU0sRUFBRSxtREFBWTs7QUFFNUYsc0VBQXNFLGlEQUFRLEVBQUUscURBQWM7O0FBRTlGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBEQUFNO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzNJZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDNUI7O0FBRXBCLDBEQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3JlY2lwZXNzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlY2lwZXNzaXRlLy4vc3JjL3BhZ2VzL2ZsYXRicmVhZC5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL3NyYy9wYWdlcy9wb3JyaWRnZS5qcyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS8uL3NyYy9wYWdlcy9zdGV3LmpzIiwid2VicGFjazovL3JlY2lwZXNzaXRlLy4vc3JjL3BhZ2VzL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9zcmMvcGFnZXMveW9ndXJ0LmpzIiwid2VicGFjazovL3JlY2lwZXNzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2lwZXNzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlY2lwZXNzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlY2lwZXNzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZWNpcGVzc2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVjaXBlc3NpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL05PUkRJQyBMSUdIVC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2VkYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05vcmRpYyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ05vcmRpYyc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDMsIDMpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggNTBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA2cHggZ3JheSBpbnNldDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbmEgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qTWFpbiBQYWdlIENvbnRlbnQgU2VsZWN0b3JzKi9cXG5cXG4uZmVhc3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDkwMHB4O1xcbn1cXG5cXG4ucmVjaXBlLXdyYXBwZXIsXFxuLnN0ZXctc3Vid3JhcHBlciB7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweCAxNXB4IDE1cHggMTVweDtcXG59XFxuXFxuLnJlY2lwZS1zdWJoZWFkZXIsXFxuLnN0ZXctaGVhZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGN1cnNvcjogIGRlZmF1bHQ7XFxufVxcblxcbi5yZWNpcGUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCBhdXRvKSBtaW5tYXgoMzAwcHgsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiA1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yZWNpcGUtY2FyZCA+IGltZyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLypTdGV3IFNlbGVjdG9ycyovXFxuXFxuLnN0ZXctd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGV3LXN1YndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtaGVhZGVyLFxcbi5pbnN0cnVjdGlvbnMtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0ZXctaW1hZ2Uge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xcbiAgICByb3ctZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5ncmVkaWVudCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG4gICAgXFxufVxcblxcbi8qUHNldWRvLXNlbGVjdG9ycyovXFxuXFxuYSA+IGltZzpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLnNpdGUtbmFtZTpob3ZlcixcXG4ucmVjaXBlLWNhcmQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmF5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOERBQThEO0lBQzlELGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7O0FBRXpCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0NlZGFyJztcXG4gICAgc3JjOiB1cmwoJy4vQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm9yZGljJztcXG4gICAgc3JjOiB1cmwoJy4vTk9SRElDXFxcXCBMSUdIVC50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ05vcmRpYyc7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDMsIDMpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggNTBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA2cHggZ3JheSBpbnNldDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbmEgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qTWFpbiBQYWdlIENvbnRlbnQgU2VsZWN0b3JzKi9cXG5cXG4uZmVhc3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDkwMHB4O1xcbn1cXG5cXG4ucmVjaXBlLXdyYXBwZXIsXFxuLnN0ZXctc3Vid3JhcHBlciB7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweCAxNXB4IDE1cHggMTVweDtcXG59XFxuXFxuLnJlY2lwZS1zdWJoZWFkZXIsXFxuLnN0ZXctaGVhZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGN1cnNvcjogIGRlZmF1bHQ7XFxufVxcblxcbi5yZWNpcGUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCBhdXRvKSBtaW5tYXgoMzAwcHgsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiA1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG4gICAgZmxleDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWMnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5yZWNpcGUtY2FyZCA+IGltZyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLypTdGV3IFNlbGVjdG9ycyovXFxuXFxuLnN0ZXctd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGV3LXN1YndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtaGVhZGVyLFxcbi5pbnN0cnVjdGlvbnMtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN0ZXctaW1hZ2Uge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IDFmciA7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0MHB4O1xcbiAgICByb3ctZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5ncmVkaWVudCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG4gICAgXFxufVxcblxcbi8qUHNldWRvLXNlbGVjdG9ycyovXFxuXFxuYSA+IGltZzpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLnNpdGUtbmFtZTpob3ZlcixcXG4ucmVjaXBlLWNhcmQ6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmF5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0RmxhdGJyZWFkKCkge1xuICAgIGNvbnN0IGZsYXRicmVhZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZmxhdGJyZWFkV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZmxhdGJyZWFkLXdyYXBwZXJcIilcblxuICAgIGNvbnN0IGZsYXRicmVhZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmbGF0YnJlYWRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlZpa2luZyBGbGF0YnJlYWRcIlxuICAgIGZsYXRicmVhZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmxhdGJyZWFkSGVhZGVyKVxuXG4gICAgcmV0dXJuIGZsYXRicmVhZFdyYXBwZXJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdEZsYXRicmVhZCIsImZ1bmN0aW9uIGNyZWF0ZVBvcnJpZGdlKCkge1xuICAgIGNvbnN0IHBvcnJpZGdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwb3JyaWRnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInBvcnJpZGdlLXdyYXBwZXJcIilcblxuICAgIGNvbnN0IHBvcnJpZGdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBvcnJpZGdlSGVhZGVyLnRleHRDb250ZW50ID0gXCJWaWtpbmcgQmFybGV5IFBvcnJpZGdlXCJcbiAgICBwb3JyaWRnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocG9ycmlkZ2VIZWFkZXIpXG5cbiAgICByZXR1cm4gcG9ycmlkZ2VXcmFwcGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9ycmlkZ2UiLCJpbXBvcnQgU3RldyBmcm9tICcuLi9pbWFnZXMvc3Rldy5qcGcnXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0ZXcoKSB7XG4gICAgY29uc3Qgc3Rld1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3Rld1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN0ZXctd3JhcHBlclwiKVxuXG4gICAgY29uc3Qgc3Rld1N1YldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3Rld1N1YldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN0ZXctc3Vid3JhcHBlclwiKVxuICAgIHN0ZXdXcmFwcGVyLmFwcGVuZENoaWxkKHN0ZXdTdWJXcmFwcGVyKVxuXG4gICAgY29uc3Qgc3Rld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBzdGV3SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGV3LWhlYWRlclwiKVxuICAgIHN0ZXdIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhlYXJ0eSBWaWtpbmcgU3Rld1wiXG4gICAgc3Rld1N1YldyYXBwZXIuYXBwZW5kQ2hpbGQoc3Rld0hlYWRlcilcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGluZ3JlZGllbnRzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpbmdyZWRpZW50cy1oZWFkZXJcIilcbiAgICBpbmdyZWRpZW50c0hlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ncmVkaWVudHNcIlxuICAgIHN0ZXdTdWJXcmFwcGVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzSGVhZGVyKVxuXG4gICAgY29uc3QgaW5ncmVkaWVudHNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGluZ3JlZGllbnRzR3JpZC5jbGFzc0xpc3QuYWRkKFwiaW5ncmVkaWVudHMtZ3JpZFwiKVxuICAgIHN0ZXdTdWJXcmFwcGVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzR3JpZClcblxuICAgIGluZ3JlZGllbnRzR3JpZC5hcHBlbmRDaGlsZChhcHBlbmRJbmdyZWRpZW50cyhcIjEgbGIgYmVlZiBvciB2ZW5pc29uLCBjdWJlZFwiKSlcbiAgICBpbmdyZWRpZW50c0dyaWQuYXBwZW5kQ2hpbGQoYXBwZW5kSW5ncmVkaWVudHMoXCIyIG9uaW9ucywgY2hvcHBlZFwiKSlcbiAgICBpbmdyZWRpZW50c0dyaWQuYXBwZW5kQ2hpbGQoYXBwZW5kSW5ncmVkaWVudHMoXCIzIGNhcnJvdHMsIGNob3BwZWRcIikpXG4gICAgaW5ncmVkaWVudHNHcmlkLmFwcGVuZENoaWxkKGFwcGVuZEluZ3JlZGllbnRzKFwiMiBwYXJzbmlwcywgY2hvcHBlZFwiKSlcbiAgICBpbmdyZWRpZW50c0dyaWQuYXBwZW5kQ2hpbGQoYXBwZW5kSW5ncmVkaWVudHMoXCIyIHR1cm5pcHMsIGNob3BwZWRcIikpXG4gICAgaW5ncmVkaWVudHNHcmlkLmFwcGVuZENoaWxkKGFwcGVuZEluZ3JlZGllbnRzKFwiNCBjdXBzIGJlZWYgYnJvdGhcIikpXG4gICAgaW5ncmVkaWVudHNHcmlkLmFwcGVuZENoaWxkKGFwcGVuZEluZ3JlZGllbnRzKFwiMiB0YnNwIGJ1dHRlclwiKSlcbiAgICBpbmdyZWRpZW50c0dyaWQuYXBwZW5kQ2hpbGQoYXBwZW5kSW5ncmVkaWVudHMoXCIxIHRic3Agc2FsdFwiKSlcbiAgICBpbmdyZWRpZW50c0dyaWQuYXBwZW5kQ2hpbGQoYXBwZW5kSW5ncmVkaWVudHMoXCIxIHRzcCBncm91bmQgYmxhY2sgcGVwcGVyXCIpKVxuICAgIGluZ3JlZGllbnRzR3JpZC5hcHBlbmRDaGlsZChhcHBlbmRJbmdyZWRpZW50cyhcIjEgdHNwIGRyaWVkIHRoeW1lXCIpKVxuICAgIGluZ3JlZGllbnRzR3JpZC5hcHBlbmRDaGlsZChhcHBlbmRJbmdyZWRpZW50cyhcIjEgdHNwIGRyaWVkIHNhZ2VcIikpXG4gICAgaW5ncmVkaWVudHNHcmlkLmFwcGVuZENoaWxkKGFwcGVuZEluZ3JlZGllbnRzKFwiMSB0c3AgZHJpZWQgcm9zZW1hcnlcIikpXG5cbiAgICBjb25zdCBpbnN0cnVjdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGluc3RydWN0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImluc3RydWN0aW9ucy13cmFwcGVyXCIpXG4gICAgc3Rld1N1YldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zV3JhcHBlcilcblxuICAgIGNvbnN0IGluc3RydWN0aW9uc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnN0cnVjdGlvbnNIZWFkZXIuY2xhc3NMaXN0LmFkZChcImluc3RydWN0aW9ucy1oZWFkZXJcIilcbiAgICBpbnN0cnVjdGlvbnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uc1wiXG4gICAgaW5zdHJ1Y3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnNIZWFkZXIpXG5cblxuICAgIGNvbnN0IHN0ZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBzdGV3SW1hZ2UuY2xhc3NMaXN0LmFkZChcInN0ZXctaW1hZ2VcIilcbiAgICBzdGV3SW1hZ2Uuc3JjID0gU3Rld1xuICAgIHN0ZXdJbWFnZS5hbHQgPSBcIkhlYXJ0eSBWaWtpbmcgU3Rld1wiXG4gICAgc3Rld1dyYXBwZXIuYXBwZW5kQ2hpbGQoc3Rld0ltYWdlKVxuXG4gICAgcmV0dXJuIHN0ZXdXcmFwcGVyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZEluZ3JlZGllbnRzKG5hbWUpIHtcbiAgICBjb25zdCBpbmdyZWRpZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGluZ3JlZGllbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJpbmdyZWRpZW50XCIpXG4gICAgaW5ncmVkaWVudE5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICByZXR1cm4gaW5ncmVkaWVudE5hbWVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdGV3XG4iLCJpbXBvcnQgY3JlYXRlU3RldyBmcm9tICcuL3N0ZXcnXG5pbXBvcnQgY3JlYXRlWW9ndXJ0IGZyb20gJy4veW9ndXJ0J1xuaW1wb3J0IGNyZWF0RmxhdGJyZWFkIGZyb20gJy4vZmxhdGJyZWFkJ1xuaW1wb3J0IGNyZWF0ZVBvcnJpZGdlIGZyb20gJy4vcG9ycmlkZ2UnXG5cbmltcG9ydCBHaXRodWIgZnJvbSAnLi4vaW1hZ2VzL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZydcbmltcG9ydCBGZWFzdCBmcm9tICcuLi9pbWFnZXMvZmVhc3QuanBnJ1xuaW1wb3J0IFN0ZXcgZnJvbSAnLi4vaW1hZ2VzL3N0ZXcuanBnJ1xuaW1wb3J0IFlvZ3VydCBmcm9tICcuLi9pbWFnZXMveW9ndXJ0LmpwZydcbmltcG9ydCBQb3JyaWRnZSBmcm9tICcuLi9pbWFnZXMvcG9ycmlkZ2UuanBnJ1xuaW1wb3J0IEZsYXRicmVhZCBmcm9tICcuLi9pbWFnZXMvZmxhdGJyZWFkLnBuZydcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuXG4gICAgY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBzaXRlTmFtZS5jbGFzc0xpc3QuYWRkKFwic2l0ZS1uYW1lXCIpXG4gICAgc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBcIk9kaW4ncyBSZWNpcGVzXCJcblxuICAgIHNpdGVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgaW5pdGlhbGl6ZVdlYnNpdGUoKVxuICAgIH0pXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2l0ZU5hbWUpXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpXG5cbiAgICBjb25zdCBmZWFzdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGZlYXN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcImZlYXN0LWltYWdlXCIpXG4gICAgZmVhc3RJbWFnZS5zcmMgPSBGZWFzdFxuICAgIGZlYXN0SW1hZ2UuYWx0ID0gXCJGZWFzdFwiXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmZWFzdEltYWdlKVxuXG4gICAgY29uc3QgcmVjaXBlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZWNpcGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWNpcGUtd3JhcHBlclwiKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQocmVjaXBlV3JhcHBlcilcblxuICAgIGNvbnN0IHJlY2lwZVN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZWNpcGVTdWJoZWFkZXIuY2xhc3NMaXN0LmFkZChcInJlY2lwZS1zdWJoZWFkZXJcIilcbiAgICByZWNpcGVTdWJoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgU3BlY2lhbHNcIlxuICAgIHJlY2lwZVdyYXBwZXIuYXBwZW5kQ2hpbGQocmVjaXBlU3ViaGVhZGVyKVxuXG4gICAgLy9SZWNpcGUgR3JpZFxuXG4gICAgY29uc3QgcmVjaXBlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZWNpcGVHcmlkLmNsYXNzTGlzdC5hZGQoXCJyZWNpcGUtZ3JpZFwiKVxuICAgIHJlY2lwZVdyYXBwZXIuYXBwZW5kQ2hpbGQocmVjaXBlR3JpZClcblxuICAgIHJlY2lwZUdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlUmVjaXBlQ2FyZChcIkhlYXJ0eSBWaWtpbmcgU3Rld1wiLCBTdGV3LCBjcmVhdGVTdGV3KCkpKVxuXG4gICAgcmVjaXBlR3JpZC5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVDYXJkKFwiVmlraW5nIEZsYXRicmVhZFwiLCBGbGF0YnJlYWQsIGNyZWF0RmxhdGJyZWFkKCkpKVxuXG4gICAgcmVjaXBlR3JpZC5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVDYXJkKFwiU2t5ciB3aXRoIEhvbmV5IGFuZCBOdXRzXCIsIFlvZ3VydCwgY3JlYXRlWW9ndXJ0KCkpKVxuXG4gICAgcmVjaXBlR3JpZC5hcHBlbmRDaGlsZChjcmVhdGVSZWNpcGVDYXJkKFwiVmlraW5nIEJhcmxleSBQb3JyaWRnZVwiLCBQb3JyaWRnZSwgY3JlYXRlUG9ycmlkZ2UoKSkpXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKFwiY29weXJpZ2h0XCIpXG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWxpeGlhRGFlYFxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpXG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpXG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vQWxpeGlhRGFlXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcblxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgZ2l0aHViSWNvbi5zcmMgPSBHaXRodWJcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlY2lwZUNhcmQobmFtZSwgaW1hZ2VTcmMsIHJlY2lwZUxpbmspIHtcbiAgICBjb25zdCByZWNpcGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHJlY2lwZUNhcmQuY2xhc3NMaXN0LmFkZChcInJlY2lwZS1jYXJkXCIpXG5cbiAgICBjb25zdCByZWNpcGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICByZWNpcGVJbWFnZS5zcmMgPSBpbWFnZVNyY1xuICAgIHJlY2lwZUltYWdlLmFsdCA9IG5hbWVcbiAgICByZWNpcGVDYXJkLmFwcGVuZENoaWxkKHJlY2lwZUltYWdlKVxuXG4gICAgY29uc3QgcmVjaXBlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZWNpcGVOYW1lLnRleHRDb250ZW50ID0gbmFtZVxuICAgIHJlY2lwZUNhcmQuYXBwZW5kQ2hpbGQocmVjaXBlTmFtZSlcblxuICAgIHJlY2lwZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVyblxuICAgICAgICAgICAgc2V0QWN0aXZlQ2FyZChyZWNpcGVDYXJkKVxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICAgICAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVjaXBlTGluaylcbiAgICAgICAgfSlcbiAgICBcbiAgICByZXR1cm4gcmVjaXBlQ2FyZFxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVDYXJkKGNhcmQpIHtcbiAgICBjb25zdCByZWNpcGVDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVjaXBlLWNhcmRcIilcblxuICAgIHJlY2lwZUNhcmRzLmZvckVhY2gocmVjaXBlQ2FyZCA9PiB7XG4gICAgICAgIGlmKHJlY2lwZUNhcmQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJlY2lwZUNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9NYWluKHJlY2lwZUxpbmspIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmFwcGVuZENoaWxkKHJlY2lwZUxpbmspXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGUiLCJmdW5jdGlvbiBjcmVhdGVZb2d1cnQoKSB7XG4gICAgY29uc3QgeW9ndXJ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB5b2d1cnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ5b2d1cnQtd3JhcHBlclwiKVxuXG4gICAgY29uc3QgeW9ndXJ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHlvZ3VydEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2t5ciB3aXRoIEhvbmV5IGFuZCBOdXRzXCJcbiAgICB5b2d1cnRXcmFwcGVyLmFwcGVuZENoaWxkKHlvZ3VydEhlYWRlcilcblxuICAgIHJldHVybiB5b2d1cnRXcmFwcGVyXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlWW9ndXJ0IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vcGFnZXMvd2Vic2l0ZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==