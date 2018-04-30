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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Index/Header/components/Navbar/Navbar.jsx



var Navbar_Navbar = function Navbar() {
  return external__react__default.a.createElement("nav", {
    className: "jsx-3020046027" + " " + "nav"
  }, external__react__default.a.createElement("ul", {
    className: "jsx-3020046027"
  }, external__react__default.a.createElement("li", {
    className: "jsx-3020046027"
  }, "Particuliers"), external__react__default.a.createElement("li", {
    className: "jsx-3020046027"
  }, "FAQ"), external__react__default.a.createElement("li", {
    className: "jsx-3020046027"
  }, "Tarifs"), external__react__default.a.createElement("li", {
    className: "jsx-3020046027"
  }, "Login")), external__react__default.a.createElement(style__default.a, {
    styleId: "3020046027",
    css: [".nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:3rem;}", ".nav ul{list-style:none;padding:0;margin:0;}", ".nav ul li{display:inline-block;font-family:'Roboto',sans-serif;font-size:1em;margin-left:2rem;cursor:pointer;opacity:.6;-webkit-transition:.2s;transition:.2s;}", ".nav ul li:hover{opacity:1;}"]
  }));
};

/* harmony default export */ var components_Navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./components/Index/Header/Header.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header_Header =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    _this.state = {
      userHasScrolled: false
    };
    _this.onScrollHandler = _this.onScrollHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScrollHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScrollHandler);
    }
  }, {
    key: "onScrollHandler",
    value: function onScrollHandler() {
      var userHasScrolled;
      if (window.scrollY > 10) userHasScrolled = true;else userHasScrolled = false;
      this.setState({
        userHasScrolled: userHasScrolled
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("header", {
        className: "jsx-4258745854" + " " + "home-header ".concat(this.state.userHasScrolled ? 'home-header-small' : '')
      }, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "Welcome to supertime",
        className: "jsx-4258745854" + " " + "home-header-logo"
      })), external__react__default.a.createElement(components_Navbar_Navbar, null), external__react__default.a.createElement(style__default.a, {
        styleId: "4258745854",
        css: [".home-header.jsx-4258745854{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;z-index:999999;width:100%;height:75px;background-color:#FFFFFF;-webkit-transition:.2s;transition:.2s;}", ".home-header.jsx-4258745854 .home-header-logo.jsx-4258745854{padding-top:4px;margin-left:2rem;}", ".home-header-small.jsx-4258745854{height:50px;box-shadow:0px 2px 4px rgba(0,0,0,0.1);}"]
      }));
    }
  }]);

  return Header;
}(external__react_["PureComponent"]);

/* harmony default export */ var Index_Header_Header = (Header_Header);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/Button/Button.jsx




var Button_Button = function Button(props) {
  return external__react__default.a.createElement("button", {
    onClick: props.clickHandler,
    className: "jsx-2404794180" + " " + "\n      btn\n      btn-".concat(props.size, "\n      btn-").concat(props.color, "\n    ")
  }, props.title, external__react__default.a.createElement(style__default.a, {
    styleId: "2404794180",
    css: [".btn.jsx-2404794180{font-family:'Roboto',sans-serif;margin:.5em 0;border:none;-webkit-transition:.2s;transition:.2s;cursor:pointer;}", ".btn-sm.jsx-2404794180{padding:10px 25px;border-radius:30px;font-size:1em;}", ".btn-md.jsx-2404794180{padding:12.5px 35px;border-radius:50px;font-size:1.25rem;}", ".btn-blue.jsx-2404794180{background-color:#56CCF2;color:white;}", ".btn-blue.jsx-2404794180:hover{box-shadow:0px 0px 7px 3px #E9E9E9;}", ".btn-outline.jsx-2404794180{background:none;border:1px solid rgb(26,65,78);}", ".btn-outline.jsx-2404794180:hover{border-color:white;color:white;}", ".btn.jsx-2404794180:focus{outline:0;}"]
  }));
};

Button_Button.defaultProps = {
  clickHandler: function clickHandler(a) {
    return a;
  },
  size: 'md',
  color: 'blue'
};
/* harmony default export */ var components_Button_Button = (Button_Button);
// CONCATENATED MODULE: ./components/Index/Main/components/Section1/Section1.jsx




/* eslint react/prop-types: 0 */

var Section1_Section1 = function Section1(_ref) {
  var router = _ref.router;
  return external__react__default.a.createElement("section", {
    className: "jsx-1053653029" + " " + "section1"
  }, external__react__default.a.createElement("div", {
    className: "jsx-1053653029" + " " + "section-content"
  }, external__react__default.a.createElement("article", {
    className: "jsx-1053653029" + " " + "section-content-left"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1053653029"
  }, "Recevoir des paiements n\u2019a jamais \xE9t\xE9 aussi simple."), external__react__default.a.createElement("p", {
    className: "jsx-1053653029"
  }, "En quelques clics, ouvrez gratuitement un compte et commencez \xE0 recevoir vos paiements."), external__react__default.a.createElement(components_Button_Button, {
    title: "Cr\xE9er un compte",
    clickHandler: function clickHandler() {
      return router.push('/app/stats');
    }
  })), external__react__default.a.createElement("aside", {
    className: "jsx-1053653029" + " " + "section-content-right"
  }, external__react__default.a.createElement("div", {
    title: "L'application est intuitive et simple \xE0 utiliser.",
    className: "jsx-1053653029" + " " + "section1-art"
  }))), external__react__default.a.createElement(style__default.a, {
    styleId: "1053653029",
    css: [".section1.jsx-1053653029{height:80%;background-color:#FFFFFF;}", ".section1.jsx-1053653029 .section-content.jsx-1053653029{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}", ".section1.jsx-1053653029 .section-content-left.jsx-1053653029{width:50%;}", ".section1.jsx-1053653029 .section-content-right.jsx-1053653029{width:50%;}", ".section-content-right.jsx-1053653029{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}", ".section-content-right.jsx-1053653029 .section1-art.jsx-1053653029{position:relative;top:25px;width:100%;height:100vh;min-height:600px;max-height:700px;background-position:top center;background-image:url(/static/mockup2.png);background-size:contain;background-repeat:no-repeat;}"]
  }));
};

/* harmony default export */ var components_Section1_Section1 = (Object(router_["withRouter"])(Section1_Section1));
// CONCATENATED MODULE: ./components/Index/Main/components/Section2/Section2.jsx



var features = [{
  image: '/static/feature1.svg',
  alt: 'alt',
  title: 'Statistiques',
  title2: 'détaillées',
  description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
  link: 'link',
  btn: 'En savoir plus'
}, {
  image: '/static/feature2.svg',
  alt: 'alt',
  title: 'Outils de',
  title2: 'calcul avancés',
  description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
  link: 'link',
  btn: 'En savoir plus'
}, {
  image: '/static/feature3.svg',
  alt: 'alt',
  title: 'Réception de',
  title2: 'paiements',
  description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
  link: 'link',
  btn: 'En savoir plus'
}, {
  image: '/static/feature4.svg',
  alt: 'alt',
  title: 'Sécurité à',
  title2: 'toute épreuve',
  description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
  link: 'link',
  btn: 'En savoir plus'
}];

var Section2_featuresRender = function featuresRender() {
  return features.map(function (feature) {
    return external__react__default.a.createElement("li", {
      className: "feature",
      key: feature.title
    }, external__react__default.a.createElement("img", {
      src: feature.image,
      alt: feature.alt
    }), external__react__default.a.createElement("span", {
      className: "feature-title"
    }, feature.title, external__react__default.a.createElement("br", null), feature.title2), external__react__default.a.createElement("span", {
      className: "feature-description"
    }, feature.description), external__react__default.a.createElement(components_Button_Button, {
      title: feature.btn,
      color: "outline",
      size: "sm"
    }));
  });
};

var Section2_Section2 = function Section2() {
  return external__react__default.a.createElement("section", {
    className: "jsx-2541319007" + " " + "section2"
  }, external__react__default.a.createElement("div", {
    className: "jsx-2541319007" + " " + "section2-background"
  }), external__react__default.a.createElement("div", {
    className: "jsx-2541319007" + " " + "section-content"
  }, external__react__default.a.createElement("article", {
    className: "jsx-2541319007" + " " + "section-content-left"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-2541319007" + " " + "font-white"
  }, "Gardez le contr\xF4le."), external__react__default.a.createElement("p", {
    className: "jsx-2541319007" + " " + "font-white"
  }, "O\xF9 que vous soyez, configurez votre compte en un tour de main et b\xE9n\xE9ficiez d\u2019outils performants pour g\xE9rer vos revenus et vos d\xE9penses."))), external__react__default.a.createElement("div", {
    className: "jsx-2541319007" + " " + "section-content"
  }, external__react__default.a.createElement("ul", {
    className: "jsx-2541319007" + " " + "features-list"
  }, Section2_featuresRender())), external__react__default.a.createElement(style__default.a, {
    styleId: "2541319007",
    css: [".section2{position:relative;overflow:hidden;padding-top:100px;padding-bottom:100px;}", ".section2 .section-content-left{width:50%;}", ".section2 .features-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:75px 0 0 0;padding:0;list-style:none;}", ".features-list>li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:25%;text-align:center;}", ".features-list li>img{margin-bottom:25px;}", ".section2 .feature-title{margin-bottom:15px;font-family:'Roboto',sans-serif;font-size:1em;font-weight:600;color:white;text-transform:uppercase;}", ".section2 .feature-description{margin-bottom:25px;font-family:'Roboto',sans-serif;font-size:1em;color:white;max-width:175px;}", ".section2-background{position:absolute;z-index:-99999;top:0;bottom:0;right:0;left:0;width:100%;height:100%;background-image:linear-gradient(#56CCF2,#2D9CDB);-webkit-transform:skewY(-3deg);-ms-transform:skewY(-3deg);transform:skewY(-3deg);-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;}"]
  }));
};

/* harmony default export */ var components_Section2_Section2 = (Section2_Section2);
// CONCATENATED MODULE: ./components/Index/Main/Main.jsx





var Main_Main = function Main() {
  return external__react__default.a.createElement("main", {
    rol: "main",
    className: "jsx-1498764937" + " " + "main"
  }, external__react__default.a.createElement(components_Section1_Section1, null), external__react__default.a.createElement(components_Section2_Section2, null), external__react__default.a.createElement(style__default.a, {
    styleId: "1498764937",
    css: ["main{padding-top:75px;height:calc(100% - 75px);}", "section{width:100%;}", ".section-content{width:90%;max-width:960px;margin:0 auto;padding:0% 5%;}"]
  }));
};

/* harmony default export */ var Index_Main_Main = (Main_Main);
// CONCATENATED MODULE: ./pages/index.jsx




var pages_Index = function Index() {
  return external__react__default.a.createElement("div", {
    className: "wrapper"
  }, external__react__default.a.createElement(Index_Header_Header, null), external__react__default.a.createElement(Index_Main_Main, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);