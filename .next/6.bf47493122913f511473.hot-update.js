webpackHotUpdate(6,{

/***/ "./components/Cards/MonthlyRevenues/MonthlyRevenues.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs__ = __webpack_require__("./node_modules/react-chartjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__);
var _jsxFileName = "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\MonthlyRevenues\\MonthlyRevenues.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var data = {
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

var MonthlyRevenuesCard = function MonthlyRevenuesCard() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card card-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Revenus mensuels"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__["Line"], {
    data: data,
    width: "400",
    height: "175",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Tableau d\xE9taill\xE9"));
};

var _default = MonthlyRevenuesCard;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\MonthlyRevenues\\MonthlyRevenues.jsx");
  reactHotLoader.register(MonthlyRevenuesCard, "MonthlyRevenuesCard", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\MonthlyRevenues\\MonthlyRevenues.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\MonthlyRevenues\\MonthlyRevenues.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Cards/YearlyEvolution/YearlyEvolution.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs__ = __webpack_require__("./node_modules/react-chartjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__);
var _jsxFileName = "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyEvolution\\YearlyEvolution.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



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

var YearlyEvolution = function YearlyEvolution() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card card-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Evolutions annuelles"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__["Bar"], {
    data: data,
    height: "200",
    width: "300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Tableau d\xE9taill\xE9"));
};

var _default = YearlyEvolution;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyEvolution\\YearlyEvolution.jsx");
  reactHotLoader.register(YearlyEvolution, "YearlyEvolution", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyEvolution\\YearlyEvolution.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyEvolution\\YearlyEvolution.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Cards/YearlyExpenses/YearlyExpenses.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs__ = __webpack_require__("./node_modules/react-chartjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__);
var _jsxFileName = "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyExpenses\\YearlyExpenses.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var data = [{
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

var YearlyExpenses = function YearlyExpenses() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card card-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "D\xE9penses annuelles"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_chartjs__["Doughnut"], {
    data: data,
    height: "175",
    width: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Vue d\xE9taill\xE9e"));
};

var _default = YearlyExpenses;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(data, "data", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyExpenses\\YearlyExpenses.jsx");
  reactHotLoader.register(YearlyExpenses, "YearlyExpenses", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyExpenses\\YearlyExpenses.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\components\\Cards\\YearlyExpenses\\YearlyExpenses.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-chartjs/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Bar: __webpack_require__("./node_modules/react-chartjs/lib/bar.js"),
  Doughnut: __webpack_require__("./node_modules/react-chartjs/lib/doughnut.js"),
  Line: __webpack_require__("./node_modules/react-chartjs/lib/line.js"),
  Pie: __webpack_require__("./node_modules/react-chartjs/lib/pie.js"),
  PolarArea: __webpack_require__("./node_modules/react-chartjs/lib/polar-area.js"),
  Radar: __webpack_require__("./node_modules/react-chartjs/lib/radar.js"),
  createClass: __webpack_require__("./node_modules/react-chartjs/lib/core.js").createClass
};


/***/ }),

/***/ "./pages/app/stats.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__ = __webpack_require__("./components/AppLayout/AppLayout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Cards_YearlyEvolution_YearlyEvolution__ = __webpack_require__("./components/Cards/YearlyEvolution/YearlyEvolution.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Cards_MonthlyRevenues_MonthlyRevenues__ = __webpack_require__("./components/Cards/MonthlyRevenues/MonthlyRevenues.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Cards_YearlyExpenses_YearlyExpenses__ = __webpack_require__("./components/Cards/YearlyExpenses/YearlyExpenses.jsx");
var _jsxFileName = "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\pages\\app\\stats.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var stats = function stats() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AppLayout_AppLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "app-content-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Statistiques"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Cards_MonthlyRevenues_MonthlyRevenues__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Cards_YearlyExpenses_YearlyExpenses__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

var _default = stats;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(stats, "stats", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\pages\\app\\stats.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\User\\Documents\\GitLab\\supertime\\reactssr\\pages\\app\\stats.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/app\\stats")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.bf47493122913f511473.hot-update.js.map