webpackHotUpdate(6,{

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
/* harmony default export */ __webpack_exports__["a"] = (_default);
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
  }, "Statistiques"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Cards_YearlyEvolution_YearlyEvolution__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Cards_MonthlyRevenues_MonthlyRevenues__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Cards_YearlyExpenses_YearlyExpenses__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
//# sourceMappingURL=6.1c9243f5a03852ea41a4.hot-update.js.map