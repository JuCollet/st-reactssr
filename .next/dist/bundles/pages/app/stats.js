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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/AppLayout/AppLayout.jsx + 2 modules
var AppLayout = __webpack_require__(5);

// EXTERNAL MODULE: external "react-chartjs"
var external__react_chartjs_ = __webpack_require__(6);
var external__react_chartjs__default = /*#__PURE__*/__webpack_require__.n(external__react_chartjs_);

// CONCATENATED MODULE: ./components/Cards/YearlyEvolution/YearlyEvolution.jsx


var data = {
  labels: [2015, 2016, 2017, 2018],
  datasets: [{
    label: '2017',
    fillColor: 'rgba(86,204,242,1)',
    strokeColor: 'rgba(86,204,242,1)',
    highlightFill: 'rgba(86,204,242,1)',
    highlightStroke: 'rgba(86,204,242,1)',
    data: [6500, 5900, 8000, 9100]
  }]
};

var YearlyEvolution_YearlyEvolution = function YearlyEvolution() {
  return external__react__default.a.createElement("div", {
    className: "card card-md"
  }, external__react__default.a.createElement("span", {
    className: "card-title"
  }, "Evolutions annuelles"), external__react__default.a.createElement(external__react_chartjs_["Bar"], {
    data: data,
    height: "200",
    width: "300"
  }), external__react__default.a.createElement("span", {
    className: "card-link"
  }, "Tableau d\xE9taill\xE9"));
};

/* harmony default export */ var Cards_YearlyEvolution_YearlyEvolution = (YearlyEvolution_YearlyEvolution);
// CONCATENATED MODULE: ./components/Cards/MonthlyRevenues/MonthlyRevenues.jsx


var MonthlyRevenues_data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [{
    label: '2017',
    fillColor: 'rgba(86,204,242,0.2)',
    strokeColor: 'rgba(86,204,242,1)',
    pointColor: 'rgba(86,204,242,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(86,204,242,1)',
    data: [650, 590, 800, 810, 560, 550, 400]
  }, {
    label: '2018',
    fillColor: 'rgba(84,98,117,0.2)',
    strokeColor: 'rgba(84,98,117,1)',
    pointColor: 'rgba(84,98,117,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(84,98,117,1)',
    data: [280, 480, 400, 190, 860, 270, 900]
  }]
};

var MonthlyRevenues_MonthlyRevenuesCard = function MonthlyRevenuesCard() {
  return external__react__default.a.createElement("div", {
    className: "card card-lg"
  }, external__react__default.a.createElement("span", {
    className: "card-title"
  }, "Revenus mensuels"), external__react__default.a.createElement(external__react_chartjs_["Line"], {
    data: MonthlyRevenues_data,
    width: "400",
    height: "175"
  }), external__react__default.a.createElement("span", {
    className: "card-link"
  }, "Tableau d\xE9taill\xE9"));
};

/* harmony default export */ var MonthlyRevenues = (MonthlyRevenues_MonthlyRevenuesCard);
// CONCATENATED MODULE: ./components/Cards/YearlyExpenses/YearlyExpenses.jsx


var YearlyExpenses_data = [{
  value: 300,
  color: '#56ccf2',
  highlight: '#74d3f2',
  label: 'Frais'
}, {
  value: 50,
  color: '#546275',
  highlight: '#5f6a77',
  label: 'Investissements'
}, {
  value: 100,
  color: '#9b9b9b',
  highlight: '#c6c4c4',
  label: 'Pertes'
}];

var YearlyExpenses_YearlyExpenses = function YearlyExpenses() {
  return external__react__default.a.createElement("div", {
    className: "card card-sm"
  }, external__react__default.a.createElement("span", {
    className: "card-title"
  }, "D\xE9penses annuelles"), external__react__default.a.createElement(external__react_chartjs_["Doughnut"], {
    data: YearlyExpenses_data,
    height: "175",
    width: "200"
  }), external__react__default.a.createElement("span", {
    className: "card-link"
  }, "Vue d\xE9taill\xE9e"));
};

/* harmony default export */ var Cards_YearlyExpenses_YearlyExpenses = (YearlyExpenses_YearlyExpenses);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(18);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// CONCATENATED MODULE: ./components/Cards/ExpensesList/ExpensesList.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ExpensesList_ExpensesList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ExpensesList, _PureComponent);

  function ExpensesList(props) {
    var _this;

    _classCallCheck(this, ExpensesList);

    _this = _possibleConstructorReturn(this, (ExpensesList.__proto__ || Object.getPrototypeOf(ExpensesList)).call(this, props));
    _this.state = {
      expensesList: []
    };
    return _this;
  }

  _createClass(ExpensesList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      external__axios__default.a.get('https://jsonplaceholder.typicode.com/todos').then(function (res) {
        _this2.setState({
          expensesList: res.data
        });
      });
    }
  }, {
    key: "renderExpensesList",
    value: function renderExpensesList() {
      function randomPrice() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        return Math.round((Math.random() * max + 1) * 100) / 100;
      }

      if (this.state.expensesList.length === 0) return null;
      return this.state.expensesList.map(function (el, i) {
        return external__react__default.a.createElement("li", {
          key: el.id,
          className: "expenseslist-el ".concat(i % 2 === 0 ? 'expenseslist-el-odd' : '')
        }, external__react__default.a.createElement("span", {
          className: "expenseslist-el-userId"
        }, el.userId, "x"), external__react__default.a.createElement("span", {
          className: "expenseslist-el-description"
        }, el.title), external__react__default.a.createElement("span", {
          className: "expenseslist-el-price"
        }, "".concat(randomPrice(), "\u20AC")));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "jsx-3614630842" + " " + "card card-lg"
      }, external__react__default.a.createElement("span", {
        className: "jsx-3614630842" + " " + "card-title"
      }, "Liste des d\xE9penses"), external__react__default.a.createElement("div", {
        className: "jsx-3614630842" + " " + "expenseslist-wrapper"
      }, external__react__default.a.createElement("ul", {
        className: "jsx-3614630842" + " " + "expenseslist"
      }, this.renderExpensesList())), external__react__default.a.createElement("span", {
        className: "jsx-3614630842" + " " + "card-link"
      }, "Tableau d\xE9taill\xE9"), external__react__default.a.createElement(style__default.a, {
        styleId: "3614630842",
        css: [".expenseslist-wrapper{position:absolute;padding-right:17px;left:0px;right:0px;top:60px;bottom:45px;width:calc(100% + 17px);overflow-y:scroll;}", ".expenseslist{padding:0;margin:0;list-style:none;font-family:Roboto,sans-serif;color:#546275;}", ".expenseslist-el{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 5px 10px 25px;background-color:#FEFEFE;}", ".expenseslist-el-odd{background-color:#F2F2F2;}", ".expenseslist-el-userId{display:inline-block;width:5%;margin-right:5%;}", ".expenseslist-el-description{display:inline-block;width:65%;margin-right:5%;}", ".expenseslist-el-price{display:inline-block;width:20%;font-weight:bold;}"]
      }));
    }
  }]);

  return ExpensesList;
}(external__react_["PureComponent"]);

/* harmony default export */ var Cards_ExpensesList_ExpensesList = (ExpensesList_ExpensesList);
// CONCATENATED MODULE: ./pages/app/stats.jsx







var stats_stats = function stats() {
  return external__react__default.a.createElement(AppLayout["a" /* default */], null, external__react__default.a.createElement("span", {
    className: "app-content-title"
  }, "Statistiques"), external__react__default.a.createElement(MonthlyRevenues, null), external__react__default.a.createElement(Cards_YearlyEvolution_YearlyEvolution, null), external__react__default.a.createElement(Cards_YearlyExpenses_YearlyExpenses, null), external__react__default.a.createElement(Cards_ExpensesList_ExpensesList, null));
};

/* harmony default export */ var app_stats = __webpack_exports__["default"] = (stats_stats);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);