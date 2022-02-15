/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  } // For old IE

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
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --mobile: 375px;\n  --desktop: 1440px;\n  --primaryColor: #26c0ab;\n  --rightGreen: #00474B;\n  --adorableGreen: #9FE8DF;\n  --rightGreen35: rgba(0, 71, 75, 0.35);\n  --color1: #00494d;\n  --color2: #5e7a7d;\n  --color3: #7f9c9f;\n  --inputIconColor: #9EBBBD;\n  --inputBgColor: #F3F9FA;\n  --lightTeal: #c5e4e7;\n  --color5: #f4fafa;\n  --errorRed: #E17457;\n  --white: #ffffff;\n  --mainBgColor: var(--lightTeal);\n  --fontSizeFormInputs: 24px;\n  --font-family: 'Space Mono', sans-serif;\n  --fontWeightRegular: 400;\n  --fontWeightBold: 700;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n  font-family: var(--font-family);\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: var(--rightGreen35);\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: var(--rightGreen35);\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: var(--rightGreen35);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 0;\n}\n\ndiv.page-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n\n.spacer {\n  height: 100%;\n}\n\n.spacer:first-of-type {\n  min-height: 40px;\n}\n\nlabel {\n  display: block;\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--color2);\n}\n\ninput[type=\"text\"] {\n  background: var(--inputBgColor);\n  border: 2px solid var(--inputBgColor);\n  color: var(--rightGreen);\n  font-weight: bold;\n  height: 48px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 16px;\n  font-size: 24px;\n  text-align: right;\n  position: relative;\n  outline: none;\n}\n\ninput[type=\"text\"]:focus {\n  border: 2px solid var(--primaryColor);\n  outline: none;\n}\n\nbutton:active {\n  background: var(--adorableGreen) !important;\n  color: var(--rightGreen) !important;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\ninput:active {\n  border-color: var(--adorableGreen) !important;\n}\n\n#bill.icon-input {\n  padding-left: 40px;\n}\n\n#people.icon-input {\n  padding-left: 45px;\n}\n\ninput.invalid-input {\n  border: 2px solid var(--errorRed);\n}\n\n.bill-input-wrapper, .tip-container {\n  margin-bottom: 40px;\n}\n\n.bill-input-wrapper, .people-input-wrapper {\n  position: relative;\n}\n\n.bill-input-wrapper:before {\n  content: '';\n  position: absolute;\n  top: calc(50% - 12px);\n  left: 12px;\n  width: 16px;\n  height: 24px;\n  z-index: 10;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  user-select: none;\n  pointer-events: none;\n}\n\n.people-input-wrapper:before {\n  content: '';\n  position: absolute;\n  top: calc(50% - 12px);\n  height: 24px;\n  width: 21px;\n  left: 12px;\n  z-index: 10;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  user-select: none;\n  pointer-events: none;\n}\n\n.validation {\n  color: var(--errorRed);\n}\n\n.logo-container {\n  height: 100%;\n  width: 100%;\n  max-width: 920px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg.logo {\n  height: 50px;\n  width: auto;\n  margin-bottom: 80px;\n}\n\n.calculator-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: calc(50% - 16px) calc(50% - 16px);\n  grid-template-rows: auto;\n  grid-column-gap: 32px;\n  background-color: var(--white);\n  border-radius: 25px;\n  padding: 32px;\n  max-width: 920px;\n  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);\n}\n\n.label-line {\n  display: flex;\n  justify-content: space-between;\n}\n\n.label-line label {\n  line-height: 24px;\n  margin-bottom: 16px;\n}\n\n.tip-container {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n\n.tip-container button {\n  border: none;\n  background: var(--rightGreen);\n  color: var(--white);\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 36px;\n  border-radius: 5px;\n  height: 48px;\n}\n\n.tip-container button.selected {\n  background: var(--primaryColor);\n  color: var(--rightGreen);\n}\n\n.tip-container button:focus {\n  outline-color: var(--primaryColor);\n}\n\n.tip-container input.tip-option {\n  font-family: var(--font-family);\n  max-height: 48px;\n  font-weight: bold;\n}\n\n.tip-container input.tip-option.active {\n  background: var(--primaryColor);\n}\n\n.calculations {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--rightGreen);\n  padding: 48px;\n  border-radius: 15px;\n}\n\n.calculations-lines {\n  margin-bottom: 32px;\n}\n\n.calculations .line {\n  display: flex;\n  justify-content: space-between;\n  color: var(--primaryColor);\n  width: 100%;\n  overflow: hidden;\n}\n\n.calculations .line:first-of-type {\n  margin-bottom: 40px;\n}\n\n.value {\n  font-size: 48px;\n  line-height: 1;\n  max-width: 70%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: nowrap;\n}\n\n.calculations .line .label {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  flex-shrink: 0;\n}\n\n.calculations .line .label span {\n  color: var(--color3);\n}\n\n.calculations .reset-btn {\n  border: none;\n  font-size: 20px;\n  height: 48px;\n  width: 100%;\n  background: var(--primaryColor);\n  color: var(--rightGreen);\n  border-radius: 5px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.calculations .reset-btn:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 940px) {\n  .calculator-container {\n    max-width: 375px;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n    grid-row-gap: 32px;\n  }\n\n  .tip-container {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-row-gap: 16px;\n    grid-column-gap: 16px;\n  }\n\n  .value {\n    font-size: 32px;\n  }\n}\n\n@media (max-width: 375px) {\n  .calculator-container {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b30fba2935238113cf20.svg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d4acaedfeea2da7a61a.svg";

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bill)
/* harmony export */ });
class Bill {
  constructor (calculate) {
    this.calculate = calculate;
    this.validationMessage = '';
    this.showInvalidState = false;
    this.input = document.querySelector('#bill');
    this.currentValue = this.input.value;
    this.inputValidation = document.querySelector('.label-line .bill-validation');
    this.input.addEventListener('focus', () => {
      this.validationMessage = '';
      this.updateValidationMessage();
    });
    this.input.addEventListener('blur', () => {
      this.validInput();
    });

    this.input.addEventListener('beforeinput', (e) => {
      // if . already exists in input, don't allow another
      if ((e.data === '.' && this.input.value.indexOf('.') > -1)) {
        e.preventDefault();
      }
      if (!parseInt(e.data) && e.data !== '0' && e.data !== null && e.data !== '.') {
        e.preventDefault();
      }
    });

    this.input.addEventListener('input', () => {
      const decimalIndex = this.input.value.indexOf('.');
      const hasDecimal = decimalIndex > -1;
      const invalid = hasDecimal && decimalIndex < this.input.value.length - 3;
      if (invalid) {
        this.input.value = this.currentValue;
        return;
      }
      if (this.input.value.length > 0) {
        this.calculate({ bill: Number(this.input.value) });
      }
      this.currentValue = this.input.value;
    });

    this.input.addEventListener('paste', (e) => {
      const clipboardData = e.clipboardData.getData('text/plain');
      const decimalIndex = clipboardData.indexOf('.');
      const hasDecimal = decimalIndex > -1;
      const invalid = (hasDecimal && decimalIndex < clipboardData.length - 3) || !/^ [1 - 9]\d* $/.test(clipboardData);
      if (invalid) {
        e.preventDefault();
      }
    });
  }

  onReset () {
    this.input.value = '';
    this.validationMessage = '';
    this.showInvalidState = false;
    this.updateValidationMessage();
  }

  validInput () {
    const value = parseFloat(this.input.value);
    if (value) {
      this.showInvalidState = false;
    } else if (value === 0) {
      this.validationMessage = 'Cannot be 0';
      this.showInvalidState = true;
    } else {
      this.validationMessage = 'Invalid input';
      this.showInvalidState = true;
    }
    this.updateValidationMessage();
  }

  updateValidationMessage () {
    this.inputValidation.innerHTML = this.validationMessage;
    if (this.validationMessage) {
      this.input.classList.add('invalid-input');
    } else {
      this.input.classList.remove('invalid-input');
    }
  }
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TipPercent)
/* harmony export */ });
/* harmony import */ var _IntegerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


class TipPercent {
  constructor (calculate) {
    this.calculate = calculate;
    this.onValidInput = (val) => {
      this.calculate({ tip: val });
    };
    this.selected = document.querySelector('.tip-container .selected');
    this.buttons = document.querySelectorAll('button.tip-option');
    this.tipInput = new _IntegerInput__WEBPACK_IMPORTED_MODULE_0__["default"]('input.tip-option', this.onValidInput);

    this.addTipInputEvents();

    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;
        if (this.selected) {
          this.selected.classList.remove('selected');
          this.selected.classList.remove('active');
        }
        this.selected = event.target;
        this.selected.classList.add('selected');
        this.calculate({ tip: Number(value) });
      });

      button.addEventListener('focus', (e) => {
        if (this.selected) {
          this.selected.classList.remove('active');
        }
      });
    });
  }

  onReset () {
    if (this.selected) {
      this.selected.classList.remove('selected');
      this.selected.classList.remove('active');
    }
    this.tipInput.input.value = '';
  }

  addTipInputEvents () {
    if (!(this.tipInput && this.tipInput.input)) {
      return;
    }

    this.tipInput.input.addEventListener('focus', (e) => {
      if (this.selected) {
        this.selected.classList.remove('selected');
      }
      this.selected = e.target;
      this.selected.classList.add('selected');
      this.selected.classList.remove('active');
      if (e.target.value) {
        this.calculate({ tip: Number(e.target.value) });
      }
    });

    this.tipInput.input.addEventListener('blur', (e) => {
      if (this.selected === this.tipInput.input && this.tipInput.input.value) {
        this.tipInput.input.classList.add('active');
      }
    });
  }
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntegerInput)
/* harmony export */ });
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


class IntegerInput extends _NumberInput__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (selector, onValidInput) {
    super(selector);
    this.onValidInput = typeof onValidInput === 'function' ? onValidInput : this.defaultOnValidInput;
    this.onInput = (e) => {
      const val = this.input.value;
      const intVal = parseInt(val);
      if (val.length > 0 && !isNaN(intVal)) {
        this.onValidInput(intVal);
      }
    };
  }

  onBeforeInput (e) {
    if (!parseInt(e.data) && e.data !== null && e.data !== '0') {
      e.preventDefault();
    }
  }

  // No action on valid input
  defaultOnValidInput () {}
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberInput)
/* harmony export */ });
class NumberInput {
  constructor (selector) {
    this.input = document.querySelector(selector);
    this.initEvents();
  }

  onInput (e) { }
  onBeforeInput (e) { }
  onBlur (e) { }
  onFocus (e) { }

  initEvents () {
    if (!this.input) {
      return;
    }
    this.input.addEventListener('input', (e) => this.onInput(e));
    this.input.addEventListener('beforeinput', (e) => this.onBeforeInput(e));
    this.input.addEventListener('blur', (e) => this.onBlur(e));
    this.input.addEventListener('focus', (e) => this.onFocus(e));
  }
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ People)
/* harmony export */ });
/* harmony import */ var _IntegerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


class People {
  constructor (calculate) {
    this.calculate = calculate;
    this.onValidInput = (val) => {
      this.calculate({ people: val });
    };
    this.peopleInput = new _IntegerInput__WEBPACK_IMPORTED_MODULE_0__["default"]('#people', this.onValidInput);
    this.inputValidation = document.querySelector('.label-line .people-validation');
    this.onReset = () => {
      this.peopleInput.input.value = '';
      this.validationMessage = '';
      this.showInputValidation = false;
      this.updateValidationMessage();
    };
    this.peopleInput.input.addEventListener('focus', () => {
      this.validationMessage = '';
      this.updateValidationMessage();
    });
    this.peopleInput.input.addEventListener('blur', () => {
      this.validInput();
    });
  }

  updateValidationMessage () {
    this.inputValidation.innerHTML = this.validationMessage;
    if (this.validationMessage) {
      this.peopleInput.input.classList.add('invalid-input');
    } else {
      this.peopleInput.input.classList.remove('invalid-input');
    }
  }

  validInput () {
    const value = parseFloat(this.peopleInput.input.value);
    if (value) {
      this.showInvalidState = false;
    } else if (value === 0) {
      this.validationMessage = 'Cannot be 0';
      this.showInvalidState = true;
    } else {
      this.validationMessage = 'Invalid input';
      this.showInvalidState = true;
    }
    this.updateValidationMessage();
  }
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Total)
/* harmony export */ });
class Total {
  constructor (calculations, reset) {
    this.calculations = calculations;
    this.reset = reset;
    this.tipPerPerson = document.querySelector('#tip-per-person');
    this.totalPerPerson = document.querySelector('#total-per-person');
    this.resetButton = document.querySelector('.reset-btn');
    this.updateValues();
    this.initResetEvents();
  }

  initResetEvents () {
    if (!this.resetButton) {
      return;
    }
    this.resetButton.addEventListener('click', (e) => {
      this.reset();
    });
  }

  setCalculations (newCalculations) {
    this.calculations = { ...this.calculations, ...newCalculations };
    this.updateValues();
  }

  updateValues () {
    const { bill, tip, people } = this.calculations;
    if (bill === null || tip === null || !people) {
      this.tipPerPerson.innerText = Number(0).toFixed(2);
      this.tipPerPerson.setAttribute('title', Number(0).toFixed(2));
      this.totalPerPerson.innerText = Number(0).toFixed(2);
      this.totalPerPerson.setAttribute('title', Number(0).toFixed(2));
      return;
    }
    const tipTotal = (bill * tip / 100);
    this.tipPerPerson.innerText = (tipTotal / people).toFixed(2);
    this.tipPerPerson.setAttribute('title', (tipTotal / people).toFixed(2));
    this.totalPerPerson.innerText = ((bill + tipTotal) / people).toFixed(2);
    this.totalPerPerson.setAttribute('title', ((bill + tipTotal) / people).toFixed(2));
  }
}


/***/ })
/******/ 	]);
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			0: 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_Bill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _components_TipPercent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _components_People__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _components_Total__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);






if (document.fonts) {
  document.fonts.ready.then(() => {
    document.querySelector('.page-container').style.opacity = 1;
  });
} else {
  // For IE, will potentially show font flash
  document.querySelector('.page-container').style.opacity = 1;
}

const INIT_CALCULATIONS = {
  bill: null,
  tip: null,
  people: null
};

class Calculator {
  constructor () {
    this.calculate = (thingy) => {
      this.total.setCalculations(thingy);
    };
    this.reset = () => {
      this.bill.onReset();
      this.tipPercent.onReset();
      this.people.onReset();
      this.calculate(INIT_CALCULATIONS);
    };
  }

  init () {
    this.bill = new _components_Bill__WEBPACK_IMPORTED_MODULE_1__["default"](this.calculate);
    this.tipPercent = new _components_TipPercent__WEBPACK_IMPORTED_MODULE_2__["default"](this.calculate);
    this.people = new _components_People__WEBPACK_IMPORTED_MODULE_3__["default"](this.calculate);
    this.total = new _components_Total__WEBPACK_IMPORTED_MODULE_4__["default"](INIT_CALCULATIONS, this.reset);
  }
}

const calculator = new Calculator();
calculator.init();

})();

/******/ })()
;