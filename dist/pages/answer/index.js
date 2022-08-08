(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/answer/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/answer/index.tsx":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/answer/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_chengqisi_Desktop_cheese_tarodemo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.umd.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var taro_ui_dist_style_components_tabs_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui/dist/style/components/tabs.scss */ "./node_modules/taro-ui/dist/style/components/tabs.scss");
/* harmony import */ var taro_ui_dist_style_components_tabs_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_tabs_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/pages/answer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


 // import logo from "./hook.png";







function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    title: 'tab1'
  }, {
    title: "tab2"
  }, {
    title: "tab3"
  }]),
      _useState2 = Object(_Users_chengqisi_Desktop_cheese_tarodemo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      tabList = _useState2[0],
      setTablist = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_Users_chengqisi_Desktop_cheese_tarodemo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var tabSwitch = function tabSwitch(tab) {
    setCurrent(tab);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtTabs"], {
      current: current,
      tabList: tabList,
      onClick: tabSwitch,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtTabsPane"], {
        current: current,
        index: 0,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtTabsPane"], {
        current: current,
        index: 1,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__["AtTabsPane"], {
        current: current,
        index: 2,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9"
        })
      })]
    })
  });
}

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/tabs.scss":
/*!**************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/tabs.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/answer/index.less":
/*!*************************************!*\
  !*** ./src/pages/answer/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/answer/index.tsx":
/*!************************************!*\
  !*** ./src/pages/answer/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/answer/index.tsx");


var config = {"navigationBarTitleText":"cheese星球","enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/answer/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/answer/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map