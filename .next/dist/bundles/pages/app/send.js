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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/AppLayout/components/Header/Header.jsx




var Header_Header = function Header() {
  return external__react__default.a.createElement("div", {
    className: "jsx-1454368345" + " " + "app-header"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("img", {
    src: "/static/logo.svg",
    alt: "Welcome to supertime",
    className: "jsx-1454368345" + " " + "app-header-logo"
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "1454368345",
    css: [".app-header.jsx-1454368345{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:999999;width:100%;height:60px;background-color:#FFFFFF;box-shadow:0px 2px 4px rgba(0,0,0,0.1);-webkit-transition:.2s;transition:.2s;}", ".app-header-logo.jsx-1454368345{padding-top:4px;margin-left:2rem;}"]
  }));
};

/* harmony default export */ var components_Header_Header = (Header_Header);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/AppLayout/components/SideBar/SideBar.jsx





var links = [{
  img: '/static/feature1.svg',
  alt: 'feature1',
  link: 'stats'
}, {
  img: '/static/feature2.svg',
  alt: 'feature2',
  link: 'calc'
}, {
  img: '/static/feature3.svg',
  alt: 'feature3',
  link: 'send'
}, {
  img: '/static/feature4.svg',
  alt: 'feature4',
  link: 'keep'
}];

var SideBar_Sidebar = function Sidebar(_ref) {
  var router = _ref.router;
  return external__react__default.a.createElement("div", {
    className: "jsx-3869141197" + " " + "app-sidebar"
  }, external__react__default.a.createElement("ul", {
    className: "jsx-3869141197" + " " + "app-sidebar-links"
  }, links.map(function (link) {
    return external__react__default.a.createElement(link__default.a, {
      href: "/app/".concat(link.link),
      key: link.alt
    }, external__react__default.a.createElement("li", {
      className: "jsx-3869141197" + " " + ((router.pathname === "/app/".concat(link.link) ? 'active' : '') || "")
    }, external__react__default.a.createElement("input", {
      type: "image",
      src: link.img,
      alt: link.alt,
      height: "25px",
      width: "auto",
      className: "jsx-3869141197"
    })));
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "3869141197",
    css: [".app-sidebar{position:fixed;padding-top:60px;width:60px;height:100%;background:linear-gradient(167.4deg,#56CCF2 -17.77%,#3799B9 144.65%);box-shadow:0px 3px 6px rgba(0,0,0,0.25);}", ".app-sidebar ul{padding:0;margin:0;}", ".app-sidebar li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:60px;width:100%;padding:0;margin:0;cursor:pointer;}", ".app-sidebar li input:focus{outline:none;}", ".app-sidebar li:hover{background-color:#3799B9;}", ".app-sidebar li.active{background:#546275;box-shadow:inset 0px 1px 4px rgba(0,0,0,0.25);}"]
  }));
};

/* harmony default export */ var SideBar = (Object(router_["withRouter"])(SideBar_Sidebar));
// CONCATENATED MODULE: ./components/AppLayout/AppLayout.jsx




/* eslint-disable react/prop-types */

var AppLayout_AppLayout = function AppLayout(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-2818473124" + " " + "wrapper"
  }, external__react__default.a.createElement(components_Header_Header, null), external__react__default.a.createElement(SideBar, null), external__react__default.a.createElement("div", {
    className: "jsx-2818473124" + " " + "app-content"
  }, props.children), external__react__default.a.createElement(style__default.a, {
    styleId: "2818473124",
    css: ["html,body,#root,.wrapper,#__next{height:100%;}", "h1,h2,h3{font-family:'Heebo',sans-serif;font-weight:800;color:#383838;padding:0;margin:0px 0px 15px 0px;}", "h1{font-size:2em;}", "h2{font-size:1.5em;}", "p{font-family:'Roboto',sans-serif;font-weight:300;font-size:1.25em;color:#383838;}", ".font-white{color:#FFFFFF !important;}", ".app-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;padding:90px 15px 15px 100px;width:calc(100% - 115px);min-height:calc(100% - 105px);background-color:#F2F2F2;}", ".app-content-title{width:100%;font-family:Heebo,sans-serif;margin-bottom:25px;font-size:1.5em;font-weight:800;color:#546275;}", ".card{position:relative;overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:25px;margin-right:15px;margin-bottom:15px;background:#FFFFFF;box-shadow:0px 3px 3px rgba(0,0,0,0.1);border-radius:4px;-webkit-transition:.2s;transition:.2s;cursor:pointer;}", ".card:hover{box-shadow:1px 1px 15px 5px rgba(0,0,0,0.1);}", ".card-title{display:block;margin-bottom:15px;font-family:Heebo,sans-serif;font-weight:500;font-size:1.2em;color:#546275;}", ".card-link{position:absolute;font-family:Roboto,sans-serif;font-size:.7em;text-transform:uppercase;right:25px;bottom:15px;color:#9E9E9E;cursor:pointer;-webkit-transition:.2s;transition:.2s;}", ".card-link:hover{color:#6E6E6E;}", ".card-sm{width:200px;height:250px;}", ".card-md{width:300px;height:250px;}", ".card-lg{width:400px;height:250px;}"]
  }));
};

/* harmony default export */ var components_AppLayout_AppLayout = __webpack_exports__["a"] = (AppLayout_AppLayout);

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__ = __webpack_require__(5);



var Send = function Send() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "app-content-title"
  }, "Envoyer de l'argent"));
};

/* harmony default export */ __webpack_exports__["default"] = (Send);

/***/ })
/******/ ]);