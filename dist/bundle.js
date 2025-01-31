/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
}

h3 {
    max-width: 500px;
    word-wrap: break-word;
}

#gameboards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    align-items: center;
    margin-top: 30px;
}

#ship-input-container {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
}

#player1-dropdown-container{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    gap: 10px;
    justify-content: center;
}

#player2-dropdown-container{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    gap: 10px;
    justify-content: center;
}

select{
    width: 40px;
    text-align: center;
    justify-self: center;
    align-self: center;
}

#player1-x-input{
    margin-bottom: 5px;
}

#player1-y-input{
    margin-bottom: 5px;
}



#player1-vertical-btn{
    width: 70px;
    justify-self: center;
    align-self: center;
}

#player1-horizontal-btn{
    width: 70px;
    justify-self: center;
    align-self: center;
}

#player1-btn-container{
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 5px;
}

#player2-x-input{
    margin-bottom: 5px;
}

#player2-y-input{
    margin-bottom: 5px;
}

#player2-vertical-btn{
    width: 70px;
    justify-self: center;
    align-self: center;
}

#player2-horizontal-btn{
    width: 70px;
    justify-self: center;
    align-self: center;
}

#player2-btn-container{
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 5px;
}

.start-game-button {
    display: none;
  }

.ui-container{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-column: 1 / 3;
    justify-items: center;
    align-items: center;
    gap: 10px;
}

.cell.ship{
    background-color: green;
}


.cell.hit{
    background-color: red;
}

.cell.miss{
    background-color: orange;
}



h1{
    grid-row: 1 / 2;
}

h4{
    padding-top: 50px;
}

#player1-gameboard {
    background-color: black;
    grid-column: 1 / 2;
    border: 1px solid black;
    width: 80%;
    
}

.playerone-bar {
    background-color: #17B169;
    text-align: center;
    font-size: 1.2em;
    border: 1px solid black;
}

.playertwo-bar {
    background-color: #7CB9E8;
    text-align: center;
    font-size: 1.2em;
    border: 1px solid black;
}

#player2-gameboard{
    background-color: black;
    grid-column: 2 / 2;
    border: 1px solid black;
    width: 80%;
}

.gameboard{
    height: 600px;
    display: grid; 
    grid-template-rows: repeat(10, 1fr); 
    grid-template-columns: repeat(10, 1fr); 
    gap: 1px; 
}


.row{
    display: contents;
}

.cell {
    background-color: #B9D9EB;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;;AAIA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;;;AAIA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;;AAEd;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;AACZ;;;AAGA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    height: 100vh;\n}\n\nh3 {\n    max-width: 500px;\n    word-wrap: break-word;\n}\n\n#gameboards-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    justify-items: center;\n    align-items: center;\n    margin-top: 30px;\n}\n\n#ship-input-container {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    width: 100%;\n}\n\n#player1-dropdown-container{\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n}\n\n#player2-dropdown-container{\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n}\n\nselect{\n    width: 40px;\n    text-align: center;\n    justify-self: center;\n    align-self: center;\n}\n\n#player1-x-input{\n    margin-bottom: 5px;\n}\n\n#player1-y-input{\n    margin-bottom: 5px;\n}\n\n\n\n#player1-vertical-btn{\n    width: 70px;\n    justify-self: center;\n    align-self: center;\n}\n\n#player1-horizontal-btn{\n    width: 70px;\n    justify-self: center;\n    align-self: center;\n}\n\n#player1-btn-container{\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    margin-bottom: 5px;\n}\n\n#player2-x-input{\n    margin-bottom: 5px;\n}\n\n#player2-y-input{\n    margin-bottom: 5px;\n}\n\n#player2-vertical-btn{\n    width: 70px;\n    justify-self: center;\n    align-self: center;\n}\n\n#player2-horizontal-btn{\n    width: 70px;\n    justify-self: center;\n    align-self: center;\n}\n\n#player2-btn-container{\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    margin-bottom: 5px;\n}\n\n.start-game-button {\n    display: none;\n  }\n\n.ui-container{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-column: 1 / 3;\n    justify-items: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.cell.ship{\n    background-color: green;\n}\n\n\n.cell.hit{\n    background-color: red;\n}\n\n.cell.miss{\n    background-color: orange;\n}\n\n\n\nh1{\n    grid-row: 1 / 2;\n}\n\nh4{\n    padding-top: 50px;\n}\n\n#player1-gameboard {\n    background-color: black;\n    grid-column: 1 / 2;\n    border: 1px solid black;\n    width: 80%;\n    \n}\n\n.playerone-bar {\n    background-color: #17B169;\n    text-align: center;\n    font-size: 1.2em;\n    border: 1px solid black;\n}\n\n.playertwo-bar {\n    background-color: #7CB9E8;\n    text-align: center;\n    font-size: 1.2em;\n    border: 1px solid black;\n}\n\n#player2-gameboard{\n    background-color: black;\n    grid-column: 2 / 2;\n    border: 1px solid black;\n    width: 80%;\n}\n\n.gameboard{\n    height: 600px;\n    display: grid; \n    grid-template-rows: repeat(10, 1fr); \n    grid-template-columns: repeat(10, 1fr); \n    gap: 1px; \n}\n\n\n.row{\n    display: contents;\n}\n\n.cell {\n    background-color: #B9D9EB;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = 0;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      if (this.hits < this.length) {
        this.hits++;
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits >= this.length) {
        return true;
      } else {
        return false;
      }
    }
  }]);
}();
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.grid = [];
    this.ships = [];
    this.miss = [];
    this.activeShips = 0;
    this.gameOver = false;
    for (var i = 0; i < 10; i++) {
      var row = [];
      for (var j = 0; j < 10; j++) {
        row.push(0);
      }
      this.grid.push(row);
    }
  }
  return _createClass(Gameboard, [{
    key: "placeShip",
    value: function placeShip(x, y, length, direction) {
      var newShip = new Ship(length);
      var coordinates = [];
      var noOverlap = true;
      if (direction === "horizontal") {
        if (x + length > 9) return false; //returns false if out of bounds
        for (var i = 0; i < length; i++) {
          if (this.grid[y][x + i] !== 0) {
            noOverlap = false;
          } //prevents ship from being placed on an occupied coordinate
        }
        if (!noOverlap) return false;
        for (var _i = 0; _i < length; _i++) {
          this.grid[y][x + _i] = newShip; //places ship on coordinates and creates ship object
          coordinates.push([x + _i, y]);
        }
      } else if (direction === "vertical") {
        if (y + length > 9) return false; //returns false if out of bounds

        for (var _i2 = 0; _i2 < length; _i2++) {
          if (this.grid[y + _i2][x] !== 0) {
            noOverlap = false;
          } //prevents ship from being placed on an occupied coordinate
        }
        if (!noOverlap) return false;
        for (var _i3 = 0; _i3 < length; _i3++) {
          this.grid[y + _i3][x] = newShip; //places ship on coordinates and creates ship object
          coordinates.push([x, y + _i3]);
        }
      } else {
        return false; // Invalid Placement
      }
      this.ships.push({
        ship: newShip,
        coordinates: coordinates
      }); //Adds the ship and its coordinates to the ships array
      this.activeShips++;
      return true;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      for (var i = 0; i < this.ships.length; i++) {
        for (var j = 0; j < this.ships[i].coordinates.length; j++) {
          if (this.ships[i].coordinates[j][0] === x && this.ships[i].coordinates[j][1] === y) {
            this.ships[i].ship.hit();
            this.ships[i].coordinates.splice(j, 1); // removes orginal coordinates and adds an H to represent a hit.
            this.grid[y][x] = 'H';
            if (this.ships[i].ship.isSunk()) {
              this.activeShips--;
            }
            return true;
          }
        }
      }
      this.miss.push([y, x]);
      this.grid[y][x] = 'M';
      return false;
    }
  }, {
    key: "status",
    value: function status() {
      return this.activeShips === 0;
    }
  }]);
}();
var Player = /*#__PURE__*/_createClass(function Player(type) {
  _classCallCheck(this, Player);
  this.type = type;
  this.gameboard = new Gameboard();
});


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/battleship-game.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.players = [];
    this.currentPlayerIndex = 0;
    this.gameOver = false;
    this.gameStart = false;
    this.shipsPlaced = false;
  }
  return _createClass(Game, [{
    key: "createGameboardContainers",
    value: function createGameboardContainers() {
      var gameContainer = document.getElementById("gameboards-container");
      var player1Input = document.getElementById("player1-input");
      var player1GridUI = document.createElement("div");
      player1GridUI.id = "player1-gameboard";
      var player1bar = document.createElement("div");
      player1bar.classList.add("playerone-bar");
      player1bar.innerText = "Player 1";
      player1GridUI.appendChild(player1bar);
      gameContainer.appendChild(player1GridUI);
      var player2GridUI = document.createElement("div");
      player2GridUI.id = "player2-gameboard";
      var player2bar = document.createElement("div");
      player2bar.classList.add("playertwo-bar");
      player2bar.innerText = "Player 2";
      player2GridUI.appendChild(player2bar);
      gameContainer.appendChild(player2GridUI);
    }
  }, {
    key: "handleTurn",
    value: function handleTurn() {
      if (this.gameOver) return;
      var currentPlayer = this.players[this.currentPlayerIndex];
      this.updateTurnDisplay();
      if (currentPlayer.type === "computer") {
        this.computerTurn();
      }
    }
  }, {
    key: "computerTurn",
    value: function computerTurn() {
      var _this = this;
      var currentPlayer = this.players[this.currentPlayerIndex];
      var opponentGameboard = this.players[(this.currentPlayerIndex + 1) % 2].gameboard; // This points to the opponent's board
      var opponentActiveShips = this.players[(this.currentPlayerIndex + 1) % 2].gameboard.activeShips; // Accessing the active ships from the opponent's board

      var player2ActiveShips = this.players[1].gameboard.activeShips;
      if (player2ActiveShips === 0) {
        this.gameOver = true;
        this.updateTurnDisplay();
        return; // Stop further execution if the game is over
      }
      if (this.gameOver) {
        return;
      }

      // Pick a random cell (coordinates between 0 and 9)
      var randomX = Math.floor(Math.random() * 10);
      var randomY = Math.floor(Math.random() * 10);

      // Make sure we haven't already attacked this cell
      while (opponentGameboard.grid[randomY][randomX] === 'H' || opponentGameboard.grid[randomY][randomX] === 'M') {
        randomX = Math.floor(Math.random() * 10);
        randomY = Math.floor(Math.random() * 10);
      }

      // Attack the random cell
      var isHit = opponentGameboard.receiveAttack(randomX, randomY);
      var cell = document.querySelector("#player".concat((this.currentPlayerIndex + 1) % 2 === 0 ? 1 : 2, "-gameboard .cell[data-x=\"").concat(randomX, "\"][data-y=\"").concat(randomY, "\"]"));
      setTimeout(function () {
        if (_this.gameOver) return;
        if (isHit) {
          if (cell) {
            cell.classList.remove('miss');
            cell.classList.add('hit');
            cell.style.backgroundColor = 'red';
          }
        } else {
          if (cell) {
            cell.classList.remove('hit');
            cell.classList.add('miss');
            cell.style.backgroundColor = 'orange';
          }
        }
        if (_this.gameOver) return;
        _this.switchTurn();
      }, 1500);
    }
  }, {
    key: "switchTurn",
    value: function switchTurn() {
      if (this.gameOver) return;
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
      this.updateTurnDisplay();
    }
  }, {
    key: "updateTurnDisplay",
    value: function updateTurnDisplay() {
      var turnDisplay = document.getElementById("turn-display");
      var player1ActiveShips = this.players[0].gameboard.activeShips;
      var player2ActiveShips = this.players[1].gameboard.activeShips;
      this.players[0].name = "Player 1";
      this.players[1].name = "Computer";
      var player1Name = this.players[0].name;
      var player2Name = this.players[1].name;
      if (this.gameStart) {
        if (turnDisplay) {
          var currentPlayer = this.players[this.currentPlayerIndex];
          var opponentGameboard = this.players[(this.currentPlayerIndex + 1) % 2].gameboard;
          var playerName = currentPlayer.type;
          if (player2ActiveShips === 0) {
            this.gameOver = true;
            turnDisplay.innerText = "".concat(player1Name, " won!");
            return;
          } else if (player1ActiveShips === 0) {
            this.gameOver = true;
            turnDisplay.innerText = "".concat(player2Name, " won!");
            return;
          }
          if (playerName === "human") {
            playerName = "Player 1";
          } else if (playerName === "computer") {
            playerName = "Computer";
          }
          turnDisplay.innerText = "It's ".concat(playerName, "'s turn!");
        }
      } else {
        turnDisplay.innerText = 'Place your ships! They will be placed in order from largest to smallest. You may pick the starting coordinate and the direction for each of your 5 ships.';
      }
    }
  }, {
    key: "renderGameboard",
    value: function renderGameboard(gameboard, playerGridUI, playerId) {
      var _this2 = this;
      var grid = gameboard.grid;
      var gridContainer = playerGridUI.querySelector(".".concat(playerId, "-grid"));
      if (!gridContainer) {
        // If grid container doesn't exist, create one and append it
        gridContainer = document.createElement('div');
        gridContainer.classList.add('gameboard');
        gridContainer.classList.add("".concat(playerId, "-grid"));
        playerGridUI.appendChild(gridContainer);
      }

      // Instead of clearing the entire gridContainer, update cells individually
      var rows = gridContainer.querySelectorAll('.row');
      var _loop = function _loop(y) {
        var row = rows[y];
        if (!row) {
          row = document.createElement('div');
          row.classList.add('row');
          gridContainer.appendChild(row);
        }
        var _loop2 = function _loop2(x) {
          var cell = row.querySelector("[data-x='".concat(x, "'][data-y='").concat(y, "']"));
          if (!cell) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-x', x);
            cell.setAttribute('data-y', y);
            row.appendChild(cell);
          }
          var cellValue = grid[y][x];

          // Clear existing classes and re-add based on current cell state
          cell.classList.remove('ship', 'hit', 'miss');
          if (cellValue instanceof _index_js__WEBPACK_IMPORTED_MODULE_1__.Ship) {
            cell.classList.add('ship');
          } else if (cellValue === 'H') {
            cell.classList.add('hit');
          } else if (cellValue === 'M') {
            cell.classList.add('miss');
          }

          // Adds click event listener for the cells
          cell.addEventListener('click', function () {
            if (_this2.gameOver) return;
            if (!_this2.gameStart) return;
            var player1BoardElement = document.querySelectorAll('.gameboard')[0];
            var currentPlayer = _this2.players[_this2.currentPlayerIndex];
            var opponentGameboard = _this2.players[(_this2.currentPlayerIndex + 1) % 2].gameboard;
            var clickedBoard = cell.closest('.gameboard');
            if (currentPlayer.type === 'human') {
              // Prevent attacking their own gameboard
              if (clickedBoard === player1BoardElement) {
                console.log("Player is trying to attack their own gameboard!");
                return;
              }
              var isHit = opponentGameboard.receiveAttack(x, y);
              if (isHit) {
                cell.classList.add('hit');
                cell.style.backgroundColor = 'red';
              } else if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
                return; // Do nothing if the cell was already hit or missed
              } else {
                cell.classList.add('miss');
                cell.style.backgroundColor = 'orange';
              }
              _this2.switchTurn();
              _this2.handleTurn();
            }
          });
        };
        for (var x = 0; x < grid[y].length; x++) {
          _loop2(x);
        }
      };
      for (var y = 0; y < grid.length; y++) {
        _loop(y);
      }
    }
  }, {
    key: "removeShipsFromView",
    value: function removeShipsFromView() {
      var player1Gameboard = document.querySelector('#player1-gameboard');
      var player2Gameboard = document.querySelector('#player2-gameboard');

      // Remove 'ship' class from all cells in player 1 and player 2's boards
      player1Gameboard.querySelectorAll('.cell').forEach(function (cell) {
        cell.classList.remove('ship');
      });
      player2Gameboard.querySelectorAll('.cell').forEach(function (cell) {
        cell.classList.remove('ship');
      });
    }
  }, {
    key: "allShipsPlaced",
    value: function allShipsPlaced(player1Ships, player2Ships) {
      if (player1Ships === 5 && player2Ships === 5) {
        this.shipsPlaced = true;
        document.querySelector('.start-game-button').style.display = 'block';
      } else {
        this.shipsPlaced = false;
        document.querySelector('.start-game-button').style.display = 'none';
      }
    }
  }, {
    key: "initializeGame",
    value: function initializeGame() {
      var _this3 = this;
      this.createGameboardContainers();
      var player1Ships = 0;
      var player2Ships = 0;
      var player1 = new _index_js__WEBPACK_IMPORTED_MODULE_1__.Player("human");
      var player2 = new _index_js__WEBPACK_IMPORTED_MODULE_1__.Player("computer");
      this.players.push(player1, player2);
      var player1GridUI = document.getElementById("player1-gameboard");
      var player2GridUI = document.getElementById("player2-gameboard");
      document.querySelector('.start-game-button').addEventListener('click', function () {
        if (_this3.gameStart) {
          return;
        } else {
          document.getElementById('ship-input-container').style.display = 'none';
          document.querySelector('.start-game-button').style.display = 'none';
          _this3.gameStart = true;
          document.getElementById("turn-display").innerText = "It's Player 1's Turn!";
          _this3.removeShipsFromView();
        }
      });
      document.getElementById('player1-vertical-btn').addEventListener('click', function () {
        var xInput = document.getElementById('player1-x-input').value;
        var yInput = document.getElementById('player1-y-input').value;
        var gameboard = player1.gameboard;
        console.log(player1Ships);
        if (xInput === "" || yInput === "") {
          console.log("test");
          return;
        }
        xInput = parseInt(xInput);
        yInput = parseInt(yInput);
        if (isNaN(xInput) || isNaN(yInput)) {
          console.log("Invalid coordinates");
          return;
        }
        if (player1Ships >= 5) {
          console.log("Player 1 has already placed all ships!");
          return;
        }
        var shipLength;
        if (player1Ships === 0) {
          shipLength = 5;
        } else if (player1Ships === 1) {
          shipLength = 4;
        } else if (player1Ships === 2 || player1Ships === 3) {
          shipLength = 3;
        } else if (player1Ships === 4) {
          shipLength = 2;
        } else {
          console.log("No more ships to place!");
          return;
        }
        var success = player1.gameboard.placeShip(xInput, yInput, shipLength, "vertical");
        if (success) {
          player1Ships++;
          _this3.allShipsPlaced(player1Ships, player2Ships);
          var coordinates = gameboard.ships[gameboard.ships.length - 1].coordinates; // Get the last placed ship coordinates
          coordinates.forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              x = _ref2[0],
              y = _ref2[1];
            var cell = document.querySelector("#player1-gameboard [data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
            if (cell) {
              cell.classList.add('ship');
            }
          });
        } else {
          console.log("Ship placement failed");
        }
      });
      document.getElementById('player1-horizontal-btn').addEventListener('click', function () {
        var xInput = document.getElementById('player1-x-input').value;
        var yInput = document.getElementById('player1-y-input').value;
        var gameboard = player1.gameboard;
        if (xInput === "" || yInput === "") {
          console.log("test");
          return;
        }
        xInput = parseInt(xInput);
        yInput = parseInt(yInput);
        if (isNaN(xInput) || isNaN(yInput)) {
          console.log("Invalid coordinates");
          return;
        }
        if (player1Ships >= 5) {
          console.log("Player 1 has already placed all ships!");
          return;
        }
        var shipLength;
        if (player1Ships === 0) {
          shipLength = 5;
        } else if (player1Ships === 1) {
          shipLength = 4;
        } else if (player1Ships === 2 || player1Ships === 3) {
          shipLength = 3;
        } else if (player1Ships === 4) {
          shipLength = 2;
        } else {
          console.log("No more ships to place!");
          return;
        }
        var success = player1.gameboard.placeShip(xInput, yInput, shipLength, "horizontal");
        if (success) {
          player1Ships++;
          _this3.allShipsPlaced(player1Ships, player2Ships);
          var coordinates = gameboard.ships[gameboard.ships.length - 1].coordinates;
          coordinates.forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              x = _ref4[0],
              y = _ref4[1];
            var cell = document.querySelector("#player1-gameboard [data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
            if (cell) {
              cell.classList.add('ship');
            }
          });
        } else {
          console.log("Ship placement failed");
        }
      });
      document.getElementById('player2-vertical-btn').addEventListener('click', function () {
        var xInput = document.getElementById('player2-x-input').value;
        var yInput = document.getElementById('player2-y-input').value;
        var gameboard = player2.gameboard;
        console.log(player2Ships);
        if (xInput === "" || yInput === "") {
          console.log("test");
          return;
        }
        xInput = parseInt(xInput);
        yInput = parseInt(yInput);
        if (isNaN(xInput) || isNaN(yInput)) {
          console.log("Invalid coordinates");
          return;
        }
        if (player2Ships >= 5) {
          console.log("Player 2 has already placed all ships!");
          return;
        }
        var shipLength;
        if (player2Ships === 0) {
          shipLength = 5;
        } else if (player2Ships === 1) {
          shipLength = 4;
        } else if (player2Ships === 2 || player2Ships === 3) {
          shipLength = 3;
        } else if (player2Ships === 4) {
          shipLength = 2;
        } else {
          console.log("No more ships to place!");
          return;
        }
        var success = player2.gameboard.placeShip(xInput, yInput, shipLength, "vertical");
        if (success) {
          player2Ships++;
          _this3.allShipsPlaced(player1Ships, player2Ships);
          var coordinates = gameboard.ships[gameboard.ships.length - 1].coordinates;
          coordinates.forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
              x = _ref6[0],
              y = _ref6[1];
            var cell = document.querySelector("#player2-gameboard [data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
            if (cell) {
              cell.classList.add('ship');
            }
          });
        } else {
          console.log("Ship placement failed");
        }
      });
      document.getElementById('player2-horizontal-btn').addEventListener('click', function () {
        var xInput = document.getElementById('player2-x-input').value;
        var yInput = document.getElementById('player2-y-input').value;
        var gameboard = player2.gameboard;
        console.log(player2Ships);
        if (xInput === "" || yInput === "") {
          console.log("test");
          return;
        }
        xInput = parseInt(xInput);
        yInput = parseInt(yInput);
        if (isNaN(xInput) || isNaN(yInput)) {
          console.log("Invalid coordinates");
          return;
        }
        if (player2Ships >= 5) {
          console.log("Player 2 has already placed all ships!");
          return;
        }
        var shipLength;
        if (player2Ships === 0) {
          shipLength = 5;
        } else if (player2Ships === 1) {
          shipLength = 4;
        } else if (player2Ships === 2 || player2Ships === 3) {
          shipLength = 3;
        } else if (player2Ships === 4) {
          shipLength = 2;
        } else {
          console.log("No more ships to place!");
          return;
        }
        var success = player2.gameboard.placeShip(xInput, yInput, shipLength, "horizontal");
        if (success) {
          _this3.allShipsPlaced(player1Ships, player2Ships);
          player2Ships++;
          var coordinates = gameboard.ships[gameboard.ships.length - 1].coordinates;
          coordinates.forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
              x = _ref8[0],
              y = _ref8[1];
            var cell = document.querySelector("#player2-gameboard [data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
            if (cell) {
              cell.classList.add('ship');
            }
          });
        } else {
          console.log("Ship placement failed");
        }
      });
      this.renderGameboard(player1.gameboard, player1GridUI, 'player1');
      this.renderGameboard(player2.gameboard, player2GridUI, 'player2');
      this.updateTurnDisplay();
    }
  }]);
}();
document.addEventListener("DOMContentLoaded", function () {
  var game = new Game();
  game.initializeGame();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUFOLGNBQUEsQ0FBQUssS0FBQTtjQUFWeEcsQ0FBQyxHQUFBeUcsS0FBQTtjQUFFeEcsQ0FBQyxHQUFBd0csS0FBQTtZQUN0QixJQUFNMUQsSUFBSSxHQUFHM0IsUUFBUSxDQUFDNEIsYUFBYSxpQ0FBQUMsTUFBQSxDQUFnQ2pELENBQUMsbUJBQUFpRCxNQUFBLENBQWNoRCxDQUFDLFFBQUksQ0FBQztZQUN4RixJQUFJOEMsSUFBSSxFQUFFO2NBQ05BLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM5QjtVQUNKLENBQUMsQ0FBQztRQUNOLENBQUMsTUFBTTtVQUNIZ0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDeEM7TUFDRixDQUFDLENBQUM7TUFNRSxJQUFJLENBQUNoQixlQUFlLENBQUM0QixPQUFPLENBQUM3RSxTQUFTLEVBQUVXLGFBQWEsRUFBRSxTQUFTLENBQUM7TUFDakUsSUFBSSxDQUFDc0MsZUFBZSxDQUFDNkIsT0FBTyxDQUFDOUUsU0FBUyxFQUFFbUIsYUFBYSxFQUFFLFNBQVMsQ0FBQztNQUVqRSxJQUFJLENBQUNJLGlCQUFpQixDQUFDLENBQUM7SUFDMUI7RUFBQztBQUFBO0FBTUhmLFFBQVEsQ0FBQ29ELGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQsSUFBTWtDLElBQUksR0FBRyxJQUFJN0YsSUFBSSxDQUFDLENBQUM7RUFDdkI2RixJQUFJLENBQUNuQixjQUFjLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAtZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oMyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI3NoaXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcGxheWVyMS1kcm9wZG93bi1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3BsYXllcjItZHJvcGRvd24tY29udGFpbmVye1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlbGVjdHtcbiAgICB3aWR0aDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheWVyMS14LWlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuI3BsYXllcjEteS1pbnB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cblxuXG4jcGxheWVyMS12ZXJ0aWNhbC1idG57XG4gICAgd2lkdGg6IDcwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheWVyMS1ob3Jpem9udGFsLWJ0bntcbiAgICB3aWR0aDogNzBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXIxLWJ0bi1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNwbGF5ZXIyLXgtaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4jcGxheWVyMi15LWlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuI3BsYXllcjItdmVydGljYWwtYnRue1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI3BsYXllcjItaG9yaXpvbnRhbC1idG57XG4gICAgd2lkdGg6IDcwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheWVyMi1idG4tY29udGFpbmVye1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3RhcnQtZ2FtZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuLnVpLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uY2VsbC5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG5cbi5jZWxsLmhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jZWxsLm1pc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG5cblxuaDF7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG5oNHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuI3BsYXllcjEtZ2FtZWJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBcbn1cblxuLnBsYXllcm9uZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN0IxNjk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXJ0d28tYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0NCOUU4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jcGxheWVyMi1nYW1lYm9hcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5nYW1lYm9hcmR7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7IFxuICAgIGdhcDogMXB4OyBcbn1cblxuXG4ucm93e1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I5RDlFQjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7Ozs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVOztBQUVkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDMge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNnYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI3NoaXAtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwbGF5ZXIxLWRyb3Bkb3duLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXIyLWRyb3Bkb3duLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnNlbGVjdHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllcjEteC1pbnB1dHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcGxheWVyMS15LWlucHV0e1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcblxcblxcbiNwbGF5ZXIxLXZlcnRpY2FsLWJ0bntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXIxLWhvcml6b250YWwtYnRue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllcjEtYnRuLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuI3BsYXllcjIteC1pbnB1dHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4jcGxheWVyMi15LWlucHV0e1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNwbGF5ZXIyLXZlcnRpY2FsLWJ0bntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXIyLWhvcml6b250YWwtYnRue1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllcjItYnRuLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnN0YXJ0LWdhbWUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4udWktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jZWxsLnNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4uY2VsbC5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGwubWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG5cXG5cXG5oMXtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5oNHtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbiNwbGF5ZXIxLWdhbWVib2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG59XFxuXFxuLnBsYXllcm9uZS1iYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdCMTY5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVydHdvLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0I5RTg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNwbGF5ZXIyLWdhbWVib2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5nYW1lYm9hcmR7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTsgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpOyBcXG4gICAgZ2FwOiAxcHg7IFxcbn1cXG5cXG5cXG4ucm93e1xcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjlEOUVCO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCl7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cblxuICAgIGhpdCgpe1xuICAgICAgICBpZiAodGhpcy5oaXRzIDwgdGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5oaXRzKytcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5taXNzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlU2hpcHMgPSAwO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyaWQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKXtcblxuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKVxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBub092ZXJsYXAgPSB0cnVlXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiA5KSByZXR1cm4gZmFsc2UgLy9yZXR1cm5zIGZhbHNlIGlmIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspeyBcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdyaWRbeV1beCArIGldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vT3ZlcmxhcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gLy9wcmV2ZW50cyBzaGlwIGZyb20gYmVpbmcgcGxhY2VkIG9uIGFuIG9jY3VwaWVkIGNvb3JkaW5hdGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIW5vT3ZlcmxhcCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeV1beCArIGldID0gbmV3U2hpcDsgLy9wbGFjZXMgc2hpcCBvbiBjb29yZGluYXRlcyBhbmQgY3JlYXRlcyBzaGlwIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gOSkgcmV0dXJuIGZhbHNlIC8vcmV0dXJucyBmYWxzZSBpZiBvdXQgb2YgYm91bmRzXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdyaWRbeSArIGldW3hdICE9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgbm9PdmVybGFwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSAvL3ByZXZlbnRzIHNoaXAgZnJvbSBiZWluZyBwbGFjZWQgb24gYW4gb2NjdXBpZWQgY29vcmRpbmF0ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighbm9PdmVybGFwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeSArIGldW3hdID0gbmV3U2hpcCAvL3BsYWNlcyBzaGlwIG9uIGNvb3JkaW5hdGVzIGFuZCBjcmVhdGVzIHNoaXAgb2JqZWN0XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeSArIGldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy8gSW52YWxpZCBQbGFjZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHsgc2hpcDogbmV3U2hpcCwgY29vcmRpbmF0ZXMgfSk7IC8vQWRkcyB0aGUgc2hpcCBhbmQgaXRzIGNvb3JkaW5hdGVzIHRvIHRoZSBzaGlwcyBhcnJheVxuICAgICAgICB0aGlzLmFjdGl2ZVNoaXBzKys7XG4gICAgXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KXtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdWzBdID09PSB4ICYmIHRoaXMuc2hpcHNbaV0uY29vcmRpbmF0ZXNbal1bMV0gPT09IHkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW2ldLnNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1tpXS5jb29yZGluYXRlcy5zcGxpY2UoaiwgMSkgLy8gcmVtb3ZlcyBvcmdpbmFsIGNvb3JkaW5hdGVzIGFuZCBhZGRzIGFuIEggdG8gcmVwcmVzZW50IGEgaGl0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbeV1beF0gPSAnSCdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbaV0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTaGlwcy0tOyAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWlzcy5wdXNoKFt5LCB4XSlcbiAgICAgICAgdGhpcy5ncmlkW3ldW3hdID0gJ00nXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTaGlwcyA9PT0gMDtcbiAgICB9XG5cbn1cblxuY2xhc3MgUGxheWVye1xuICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgfSBcbn1cblxuXG5leHBvcnQge0dhbWVib2FyZCwgUGxheWVyLCBTaGlwfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IEdhbWVib2FyZCwgUGxheWVyLCBTaGlwIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBzUGxhY2VkID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVHYW1lYm9hcmRDb250YWluZXJzKCkge1xuXG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZWJvYXJkcy1jb250YWluZXJcIilcbiAgICBjb25zdCBwbGF5ZXIxSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtaW5wdXRcIilcblxuXG4gICAgY29uc3QgcGxheWVyMUdyaWRVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyMUdyaWRVSS5pZCA9IFwicGxheWVyMS1nYW1lYm9hcmRcIjtcblxuICAgIGNvbnN0IHBsYXllcjFiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllcjFiYXIuY2xhc3NMaXN0LmFkZChcInBsYXllcm9uZS1iYXJcIik7XG4gICAgcGxheWVyMWJhci5pbm5lclRleHQgPSBcIlBsYXllciAxXCI7XG4gICAgcGxheWVyMUdyaWRVSS5hcHBlbmRDaGlsZChwbGF5ZXIxYmFyKTtcblxuICAgIFxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyMUdyaWRVSSk7XG5cbiAgICBjb25zdCBwbGF5ZXIyR3JpZFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXIyR3JpZFVJLmlkID0gXCJwbGF5ZXIyLWdhbWVib2FyZFwiO1xuXG4gICAgY29uc3QgcGxheWVyMmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyMmJhci5jbGFzc0xpc3QuYWRkKFwicGxheWVydHdvLWJhclwiKTtcbiAgICBwbGF5ZXIyYmFyLmlubmVyVGV4dCA9IFwiUGxheWVyIDJcIjtcblxuICAgIHBsYXllcjJHcmlkVUkuYXBwZW5kQ2hpbGQocGxheWVyMmJhcik7XG5cbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcjJHcmlkVUkpO1xuICB9XG5cbiBcbiAgaGFuZGxlVHVybigpIHtcblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF07XG4gICAgdGhpcy51cGRhdGVUdXJuRGlzcGxheSgpO1xuXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIudHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZXJUdXJuKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdO1xuICAgIGNvbnN0IG9wcG9uZW50R2FtZWJvYXJkID0gdGhpcy5wbGF5ZXJzWyh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgMl0uZ2FtZWJvYXJkOyAgLy8gVGhpcyBwb2ludHMgdG8gdGhlIG9wcG9uZW50J3MgYm9hcmRcbiAgICBjb25zdCBvcHBvbmVudEFjdGl2ZVNoaXBzID0gdGhpcy5wbGF5ZXJzWyh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgMl0uZ2FtZWJvYXJkLmFjdGl2ZVNoaXBzOyAgLy8gQWNjZXNzaW5nIHRoZSBhY3RpdmUgc2hpcHMgZnJvbSB0aGUgb3Bwb25lbnQncyBib2FyZFxuXG4gICAgY29uc3QgcGxheWVyMkFjdGl2ZVNoaXBzID0gdGhpcy5wbGF5ZXJzWzFdLmdhbWVib2FyZC5hY3RpdmVTaGlwcztcblxuICAgIGlmIChwbGF5ZXIyQWN0aXZlU2hpcHMgPT09IDApIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlVHVybkRpc3BsYXkoKVxuICAgICAgICByZXR1cm47IC8vIFN0b3AgZnVydGhlciBleGVjdXRpb24gaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIH1cblxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuXG5cbiAgICAvLyBQaWNrIGEgcmFuZG9tIGNlbGwgKGNvb3JkaW5hdGVzIGJldHdlZW4gMCBhbmQgOSlcbiAgICBsZXQgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZW4ndCBhbHJlYWR5IGF0dGFja2VkIHRoaXMgY2VsbFxuICAgIHdoaWxlIChvcHBvbmVudEdhbWVib2FyZC5ncmlkW3JhbmRvbVldW3JhbmRvbVhdID09PSAnSCcgfHwgb3Bwb25lbnRHYW1lYm9hcmQuZ3JpZFtyYW5kb21ZXVtyYW5kb21YXSA9PT0gJ00nKSB7XG4gICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuXG4gICAgXG4gICAgLy8gQXR0YWNrIHRoZSByYW5kb20gY2VsbFxuICAgIGNvbnN0IGlzSGl0ID0gb3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21YLCByYW5kb21ZKTtcbiAgICBcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7KHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSAyID09PSAwID8gMSA6IDJ9LWdhbWVib2FyZCAuY2VsbFtkYXRhLXg9XCIke3JhbmRvbVh9XCJdW2RhdGEteT1cIiR7cmFuZG9tWX1cIl1gKTtcbiAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGlmIChpc0hpdCkge1xuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnb3JhbmdlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLnN3aXRjaFR1cm4oKTtcbiAgICB9LCAxNTAwKTtcbn1cbiAgc3dpdGNoVHVybigpIHtcbiAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSAodGhpcy5jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIDI7XG4gICAgdGhpcy51cGRhdGVUdXJuRGlzcGxheSgpO1xuICB9XG5cbiAgdXBkYXRlVHVybkRpc3BsYXkoKSB7XG4gICAgY29uc3QgdHVybkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cm4tZGlzcGxheVwiKTtcbiAgICBjb25zdCBwbGF5ZXIxQWN0aXZlU2hpcHMgPSB0aGlzLnBsYXllcnNbMF0uZ2FtZWJvYXJkLmFjdGl2ZVNoaXBzO1xuICAgIGNvbnN0IHBsYXllcjJBY3RpdmVTaGlwcyA9IHRoaXMucGxheWVyc1sxXS5nYW1lYm9hcmQuYWN0aXZlU2hpcHM7XG4gICAgXG5cbiAgICB0aGlzLnBsYXllcnNbMF0ubmFtZSA9IFwiUGxheWVyIDFcIjsgIFxuICAgIHRoaXMucGxheWVyc1sxXS5uYW1lID0gXCJDb21wdXRlclwiO1xuICAgIGNvbnN0IHBsYXllcjFOYW1lID0gdGhpcy5wbGF5ZXJzWzBdLm5hbWU7ICBcbiAgICBjb25zdCBwbGF5ZXIyTmFtZSA9IHRoaXMucGxheWVyc1sxXS5uYW1lO1xuXG4gICAgaWYodGhpcy5nYW1lU3RhcnQpe1xuXG4gICAgICBpZiAodHVybkRpc3BsYXkpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XTtcbiAgICAgICAgICBjb25zdCBvcHBvbmVudEdhbWVib2FyZCA9IHRoaXMucGxheWVyc1sodGhpcy5jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIDJdLmdhbWVib2FyZDtcbiAgICAgICAgICBsZXQgcGxheWVyTmFtZSA9IGN1cnJlbnRQbGF5ZXIudHlwZTtcblxuICAgICAgXG4gICAgICAgICAgaWYgKHBsYXllcjJBY3RpdmVTaGlwcyA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdHVybkRpc3BsYXkuaW5uZXJUZXh0ID0gYCR7cGxheWVyMU5hbWV9IHdvbiFgO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjFBY3RpdmVTaGlwcyA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdHVybkRpc3BsYXkuaW5uZXJUZXh0ID0gYCR7cGxheWVyMk5hbWV9IHdvbiFgO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJodW1hblwiKSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lID0gXCJQbGF5ZXIgMVwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyTmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lID0gXCJDb21wdXRlclwiO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIHR1cm5EaXNwbGF5LmlubmVyVGV4dCA9IGBJdCdzICR7cGxheWVyTmFtZX0ncyB0dXJuIWA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHVybkRpc3BsYXkuaW5uZXJUZXh0ID0gJ1BsYWNlIHlvdXIgc2hpcHMhIFRoZXkgd2lsbCBiZSBwbGFjZWQgaW4gb3JkZXIgZnJvbSBsYXJnZXN0IHRvIHNtYWxsZXN0LiBZb3UgbWF5IHBpY2sgdGhlIHN0YXJ0aW5nIGNvb3JkaW5hdGUgYW5kIHRoZSBkaXJlY3Rpb24gZm9yIGVhY2ggb2YgeW91ciA1IHNoaXBzLidcbiAgICB9XG4gIH1cblxuICBcbiAgcmVuZGVyR2FtZWJvYXJkKGdhbWVib2FyZCwgcGxheWVyR3JpZFVJLCBwbGF5ZXJJZCkge1xuICAgIGNvbnN0IGdyaWQgPSBnYW1lYm9hcmQuZ3JpZDtcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IHBsYXllckdyaWRVSS5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJJZH0tZ3JpZGApO1xuXG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICAvLyBJZiBncmlkIGNvbnRhaW5lciBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgb25lIGFuZCBhcHBlbmQgaXRcbiAgICAgIGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVySWR9LWdyaWRgKTtcbiAgICAgIHBsYXllckdyaWRVSS5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0ZWFkIG9mIGNsZWFyaW5nIHRoZSBlbnRpcmUgZ3JpZENvbnRhaW5lciwgdXBkYXRlIGNlbGxzIGluZGl2aWR1YWxseVxuICAgIGNvbnN0IHJvd3MgPSBncmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgIGxldCByb3cgPSByb3dzW3ldO1xuXG4gICAgICBpZiAoIXJvdykge1xuICAgICAgICByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ3JpZFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKTtcblxuICAgICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgICBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCB5KTtcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsVmFsdWUgPSBncmlkW3ldW3hdO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgY2xhc3NlcyBhbmQgcmUtYWRkIGJhc2VkIG9uIGN1cnJlbnQgY2VsbCBzdGF0ZVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnLCAnaGl0JywgJ21pc3MnKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjZWxsVmFsdWUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbFZhbHVlID09PSAnSCcpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGxWYWx1ZSA9PT0gJ00nKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGRzIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgY2VsbHNcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0KSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllcjFCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkJylbMF1cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgb3Bwb25lbnRHYW1lYm9hcmQgPSB0aGlzLnBsYXllcnNbKHRoaXMuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSAyXS5nYW1lYm9hcmQ7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkQm9hcmQgPSBjZWxsLmNsb3Nlc3QoJy5nYW1lYm9hcmQnKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudFBsYXllci50eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBhdHRhY2tpbmcgdGhlaXIgb3duIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgIGlmIChjbGlja2VkQm9hcmQgPT09IHBsYXllcjFCb2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgaXMgdHJ5aW5nIHRvIGF0dGFjayB0aGVpciBvd24gZ2FtZWJvYXJkIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaXNIaXQgPSBvcHBvbmVudEdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNIaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZyBpZiB0aGUgY2VsbCB3YXMgYWxyZWFkeSBoaXQgb3IgbWlzc2VkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ29yYW5nZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn1cblxucmVtb3ZlU2hpcHNGcm9tVmlldygpIHtcbiAgY29uc3QgcGxheWVyMUdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxLWdhbWVib2FyZCcpO1xuICBjb25zdCBwbGF5ZXIyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjItZ2FtZWJvYXJkJyk7XG5cbiAgLy8gUmVtb3ZlICdzaGlwJyBjbGFzcyBmcm9tIGFsbCBjZWxscyBpbiBwbGF5ZXIgMSBhbmQgcGxheWVyIDIncyBib2FyZHNcbiAgcGxheWVyMUdhbWVib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goY2VsbCA9PiB7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gIH0pO1xuICBwbGF5ZXIyR2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykuZm9yRWFjaChjZWxsID0+IHtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgfSk7XG59XG5cbmFsbFNoaXBzUGxhY2VkKHBsYXllcjFTaGlwcywgcGxheWVyMlNoaXBzKSB7XG4gIGlmIChwbGF5ZXIxU2hpcHMgPT09IDUgJiYgcGxheWVyMlNoaXBzID09PSA1KSB7XG4gICAgICB0aGlzLnNoaXBzUGxhY2VkID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lLWJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGlwc1BsYWNlZCA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5cblxuICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZENvbnRhaW5lcnMoKTtcblxuICAgIGxldCBwbGF5ZXIxU2hpcHMgPSAwO1xuICAgIGxldCBwbGF5ZXIyU2hpcHMgPSAwO1xuXG4gICAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJodW1hblwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gbmV3IFBsYXllcihcImNvbXB1dGVyXCIpO1xuXG4gICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyMSwgcGxheWVyMik7XG5cbiAgICBjb25zdCBwbGF5ZXIxR3JpZFVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLWdhbWVib2FyZFwiKTtcbiAgICBjb25zdCBwbGF5ZXIyR3JpZFVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLWdhbWVib2FyZFwiKTtcblxuICAgIFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZih0aGlzLmdhbWVTdGFydCl7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtaW5wdXQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUtYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR1cm4tZGlzcGxheVwiKS5pbm5lclRleHQgPSBcIkl0J3MgUGxheWVyIDEncyBUdXJuIVwiXG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbW92ZVNoaXBzRnJvbVZpZXcoKVxuICAgICAgfVxuXG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLXZlcnRpY2FsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCB4SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS14LWlucHV0JykudmFsdWU7XG4gICAgbGV0IHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLXktaW5wdXQnKS52YWx1ZTtcblxuICAgIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllcjEuZ2FtZWJvYXJkOyBcblxuICAgIGNvbnNvbGUubG9nKHBsYXllcjFTaGlwcylcblxuICAgIFxuICAgIFxuICAgIGlmICh4SW5wdXQgPT09IFwiXCIgfHwgeUlucHV0ID09PSBcIlwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gIFxuICAgIHhJbnB1dCA9IHBhcnNlSW50KHhJbnB1dCk7XG4gICAgeUlucHV0ID0gcGFyc2VJbnQoeUlucHV0KTtcblxuICAgIFxuICAgIGlmIChpc05hTih4SW5wdXQpIHx8IGlzTmFOKHlJbnB1dCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBsYXllcjFTaGlwcyA+PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAxIGhhcyBhbHJlYWR5IHBsYWNlZCBhbGwgc2hpcHMhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzaGlwTGVuZ3RoO1xuICAgIGlmIChwbGF5ZXIxU2hpcHMgPT09IDApIHtcbiAgICAgICAgc2hpcExlbmd0aCA9IDU7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxU2hpcHMgPT09IDEpIHtcbiAgICAgICAgc2hpcExlbmd0aCA9IDQ7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIxU2hpcHMgPT09IDIgfHwgcGxheWVyMVNoaXBzID09PSAzKSB7XG4gICAgICAgIHNoaXBMZW5ndGggPSAzO1xuICAgIH0gZWxzZSBpZiAocGxheWVyMVNoaXBzID09PSA0KSB7XG4gICAgICAgIHNoaXBMZW5ndGggPSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSBzaGlwcyB0byBwbGFjZSFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKHhJbnB1dCwgeUlucHV0LCBzaGlwTGVuZ3RoLCBcInZlcnRpY2FsXCIpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIHBsYXllcjFTaGlwcysrO1xuICAgICAgICB0aGlzLmFsbFNoaXBzUGxhY2VkKHBsYXllcjFTaGlwcywgcGxheWVyMlNoaXBzKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnYW1lYm9hcmQuc2hpcHNbZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAtIDFdLmNvb3JkaW5hdGVzOyAvLyBHZXQgdGhlIGxhc3QgcGxhY2VkIHNoaXAgY29vcmRpbmF0ZXNcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllcjEtZ2FtZWJvYXJkIFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hpcCBwbGFjZW1lbnQgZmFpbGVkXCIpO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1ob3Jpem9udGFsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgeElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEteC1pbnB1dCcpLnZhbHVlO1xuICBsZXQgeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEteS1pbnB1dCcpLnZhbHVlO1xuXG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllcjEuZ2FtZWJvYXJkOyBcblxuICBcbiAgXG4gIGlmICh4SW5wdXQgPT09IFwiXCIgfHwgeUlucHV0ID09PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRlc3RcIilcbiAgICAgIHJldHVybjtcbiAgfVxuXG5cbiAgeElucHV0ID0gcGFyc2VJbnQoeElucHV0KTtcbiAgeUlucHV0ID0gcGFyc2VJbnQoeUlucHV0KTtcblxuICBcbiAgaWYgKGlzTmFOKHhJbnB1dCkgfHwgaXNOYU4oeUlucHV0KSkge1xuICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpO1xuICAgICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBsYXllcjFTaGlwcyA+PSA1KSB7XG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIgMSBoYXMgYWxyZWFkeSBwbGFjZWQgYWxsIHNoaXBzIVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgc2hpcExlbmd0aDtcbiAgaWYgKHBsYXllcjFTaGlwcyA9PT0gMCkge1xuICAgICAgc2hpcExlbmd0aCA9IDU7XG4gIH0gZWxzZSBpZiAocGxheWVyMVNoaXBzID09PSAxKSB7XG4gICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgfSBlbHNlIGlmIChwbGF5ZXIxU2hpcHMgPT09IDIgfHwgcGxheWVyMVNoaXBzID09PSAzKSB7XG4gICAgICBzaGlwTGVuZ3RoID0gMztcbiAgfSBlbHNlIGlmIChwbGF5ZXIxU2hpcHMgPT09IDQpIHtcbiAgICAgIHNoaXBMZW5ndGggPSAyO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBtb3JlIHNoaXBzIHRvIHBsYWNlIVwiKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBwbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoeElucHV0LCB5SW5wdXQsIHNoaXBMZW5ndGgsIFwiaG9yaXpvbnRhbFwiKTtcbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHBsYXllcjFTaGlwcysrO1xuICAgICAgdGhpcy5hbGxTaGlwc1BsYWNlZChwbGF5ZXIxU2hpcHMsIHBsYXllcjJTaGlwcyk7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdhbWVib2FyZC5zaGlwc1tnYW1lYm9hcmQuc2hpcHMubGVuZ3RoIC0gMV0uY29vcmRpbmF0ZXM7IFxuICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIxLWdhbWVib2FyZCBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNoaXAgcGxhY2VtZW50IGZhaWxlZFwiKTtcbiAgfVxufSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItdmVydGljYWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IHhJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLXgtaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjIteS1pbnB1dCcpLnZhbHVlO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyMi5nYW1lYm9hcmQ7IFxuXG4gICAgY29uc29sZS5sb2cocGxheWVyMlNoaXBzKVxuXG4gICAgXG4gICAgXG4gICAgaWYgKHhJbnB1dCA9PT0gXCJcIiB8fCB5SW5wdXQgPT09IFwiXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgXG4gICAgeElucHV0ID0gcGFyc2VJbnQoeElucHV0KTtcbiAgICB5SW5wdXQgPSBwYXJzZUludCh5SW5wdXQpO1xuXG4gICAgXG4gICAgaWYgKGlzTmFOKHhJbnB1dCkgfHwgaXNOYU4oeUlucHV0KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgY29vcmRpbmF0ZXNcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyMlNoaXBzID49IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDIgaGFzIGFscmVhZHkgcGxhY2VkIGFsbCBzaGlwcyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNoaXBMZW5ndGg7XG4gICAgaWYgKHBsYXllcjJTaGlwcyA9PT0gMCkge1xuICAgICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjJTaGlwcyA9PT0gMSkge1xuICAgICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICB9IGVsc2UgaWYgKHBsYXllcjJTaGlwcyA9PT0gMiB8fCBwbGF5ZXIyU2hpcHMgPT09IDMpIHtcbiAgICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIyU2hpcHMgPT09IDQpIHtcbiAgICAgICAgc2hpcExlbmd0aCA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBtb3JlIHNoaXBzIHRvIHBsYWNlIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBwbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoeElucHV0LCB5SW5wdXQsIHNoaXBMZW5ndGgsIFwidmVydGljYWxcIik7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgcGxheWVyMlNoaXBzKys7XG4gICAgICAgIHRoaXMuYWxsU2hpcHNQbGFjZWQocGxheWVyMVNoaXBzLCBwbGF5ZXIyU2hpcHMpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdhbWVib2FyZC5zaGlwc1tnYW1lYm9hcmQuc2hpcHMubGVuZ3RoIC0gMV0uY29vcmRpbmF0ZXM7IFxuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChbeCwgeV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyMi1nYW1lYm9hcmQgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hpcCBwbGFjZW1lbnQgZmFpbGVkXCIpO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1ob3Jpem9udGFsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgeElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjIteC1pbnB1dCcpLnZhbHVlO1xuICBsZXQgeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjIteS1pbnB1dCcpLnZhbHVlO1xuXG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllcjIuZ2FtZWJvYXJkOyBcblxuICBjb25zb2xlLmxvZyhwbGF5ZXIyU2hpcHMpXG5cbiAgXG4gIFxuICBpZiAoeElucHV0ID09PSBcIlwiIHx8IHlJbnB1dCA9PT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXG4gICAgICByZXR1cm47XG4gIH1cblxuXG4gIHhJbnB1dCA9IHBhcnNlSW50KHhJbnB1dCk7XG4gIHlJbnB1dCA9IHBhcnNlSW50KHlJbnB1dCk7XG5cbiAgXG4gIGlmIChpc05hTih4SW5wdXQpIHx8IGlzTmFOKHlJbnB1dCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gICAgICBpZiAocGxheWVyMlNoaXBzID49IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDIgaGFzIGFscmVhZHkgcGxhY2VkIGFsbCBzaGlwcyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIGxldCBzaGlwTGVuZ3RoO1xuICBpZiAocGxheWVyMlNoaXBzID09PSAwKSB7XG4gICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIyU2hpcHMgPT09IDEpIHtcbiAgICAgIHNoaXBMZW5ndGggPSA0O1xuICB9IGVsc2UgaWYgKHBsYXllcjJTaGlwcyA9PT0gMiB8fCBwbGF5ZXIyU2hpcHMgPT09IDMpIHtcbiAgICAgIHNoaXBMZW5ndGggPSAzO1xuICB9IGVsc2UgaWYgKHBsYXllcjJTaGlwcyA9PT0gNCkge1xuICAgICAgc2hpcExlbmd0aCA9IDI7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIG1vcmUgc2hpcHMgdG8gcGxhY2UhXCIpO1xuICAgICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3VjY2VzcyA9IHBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCh4SW5wdXQsIHlJbnB1dCwgc2hpcExlbmd0aCwgXCJob3Jpem9udGFsXCIpO1xuICBpZiAoc3VjY2Vzcykge1xuICAgIHRoaXMuYWxsU2hpcHNQbGFjZWQocGxheWVyMVNoaXBzLCBwbGF5ZXIyU2hpcHMpO1xuICAgICAgcGxheWVyMlNoaXBzKys7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdhbWVib2FyZC5zaGlwc1tnYW1lYm9hcmQuc2hpcHMubGVuZ3RoIC0gMV0uY29vcmRpbmF0ZXM7IFxuICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIyLWdhbWVib2FyZCBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7IFxuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJTaGlwIHBsYWNlbWVudCBmYWlsZWRcIik7XG4gIH1cbn0pO1xuXG5cblxuXG5cbiAgICB0aGlzLnJlbmRlckdhbWVib2FyZChwbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVyMUdyaWRVSSwgJ3BsYXllcjEnKTtcbiAgICB0aGlzLnJlbmRlckdhbWVib2FyZChwbGF5ZXIyLmdhbWVib2FyZCwgcGxheWVyMkdyaWRVSSwgJ3BsYXllcjInKTtcblxuICAgIHRoaXMudXBkYXRlVHVybkRpc3BsYXkoKTtcbiAgfVxuXG59XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmluaXRpYWxpemVHYW1lKCk7XG59KTtcblxuZXhwb3J0IHtHYW1lfTsiXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsIl9jbGFzc0NhbGxDaGVjayIsImhpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsImdyaWQiLCJzaGlwcyIsIm1pc3MiLCJhY3RpdmVTaGlwcyIsImdhbWVPdmVyIiwiaSIsInJvdyIsImoiLCJwdXNoIiwicGxhY2VTaGlwIiwieCIsInkiLCJkaXJlY3Rpb24iLCJuZXdTaGlwIiwiY29vcmRpbmF0ZXMiLCJub092ZXJsYXAiLCJzaGlwIiwicmVjZWl2ZUF0dGFjayIsInNwbGljZSIsInN0YXR1cyIsIlBsYXllciIsInR5cGUiLCJnYW1lYm9hcmQiLCJHYW1lIiwicGxheWVycyIsImN1cnJlbnRQbGF5ZXJJbmRleCIsImdhbWVTdGFydCIsInNoaXBzUGxhY2VkIiwiY3JlYXRlR2FtZWJvYXJkQ29udGFpbmVycyIsImdhbWVDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyMUlucHV0IiwicGxheWVyMUdyaWRVSSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInBsYXllcjFiYXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInBsYXllcjJHcmlkVUkiLCJwbGF5ZXIyYmFyIiwiaGFuZGxlVHVybiIsImN1cnJlbnRQbGF5ZXIiLCJ1cGRhdGVUdXJuRGlzcGxheSIsImNvbXB1dGVyVHVybiIsIl90aGlzIiwib3Bwb25lbnRHYW1lYm9hcmQiLCJvcHBvbmVudEFjdGl2ZVNoaXBzIiwicGxheWVyMkFjdGl2ZVNoaXBzIiwicmFuZG9tWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVkiLCJpc0hpdCIsImNlbGwiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3dpdGNoVHVybiIsInR1cm5EaXNwbGF5IiwicGxheWVyMUFjdGl2ZVNoaXBzIiwibmFtZSIsInBsYXllcjFOYW1lIiwicGxheWVyMk5hbWUiLCJwbGF5ZXJOYW1lIiwicmVuZGVyR2FtZWJvYXJkIiwicGxheWVyR3JpZFVJIiwicGxheWVySWQiLCJfdGhpczIiLCJncmlkQ29udGFpbmVyIiwicm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfbG9vcCIsIl9sb29wMiIsInNldEF0dHJpYnV0ZSIsImNlbGxWYWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXIxQm9hcmRFbGVtZW50IiwiY2xpY2tlZEJvYXJkIiwiY2xvc2VzdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWlucyIsInJlbW92ZVNoaXBzRnJvbVZpZXciLCJwbGF5ZXIxR2FtZWJvYXJkIiwicGxheWVyMkdhbWVib2FyZCIsImZvckVhY2giLCJhbGxTaGlwc1BsYWNlZCIsInBsYXllcjFTaGlwcyIsInBsYXllcjJTaGlwcyIsImRpc3BsYXkiLCJpbml0aWFsaXplR2FtZSIsIl90aGlzMyIsInBsYXllcjEiLCJwbGF5ZXIyIiwieElucHV0IiwieUlucHV0IiwicGFyc2VJbnQiLCJpc05hTiIsInNoaXBMZW5ndGgiLCJzdWNjZXNzIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJfcmVmMyIsIl9yZWY0IiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjgiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==