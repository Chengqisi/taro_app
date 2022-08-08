(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_chengqisi_Desktop_cheese_tarodemo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_homeCard_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/homeCard/index */ "./src/components/homeCard/index.tsx");
/* harmony import */ var taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui/dist/style/components/nav-bar.scss */ "./node_modules/taro-ui/dist/style/components/nav-bar.scss");
/* harmony import */ var taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_nav_bar_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui/dist/style/components/icon.scss */ "./node_modules/taro-ui/dist/style/components/icon.scss");
/* harmony import */ var taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_components_icon_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    navigateUrl: '/other_page/javascript/index',
    cardTitle: 'JavaScript',
    imgUrl: 'https://img2.baidu.com/it/u=4158766407,612112290&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    introduce: "是一种具有函数优先的轻量级，解释型或即时编译型的编程语言"
  }, {
    navigateUrl: 'TypeScript',
    cardTitle: 'TypeScript',
    imgUrl: 'https://img0.baidu.com/it/u=4167016203,3166254551&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=311',
    introduce: "TypeScript是微软开发的一个开源的编程语言，通过在JavaScript的基础上添加静态类型定义构建而成"
  }, {
    navigateUrl: 'Vue',
    cardTitle: 'Vue',
    imgUrl: 'https://img1.baidu.com/it/u=3137752502,1535259864&fm=253&fmt=auto&app=138&f=PNG?w=500&h=288',
    introduce: "vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用"
  }, {
    navigateUrl: 'React',
    cardTitle: 'React',
    imgUrl: 'https://img1.baidu.com/it/u=3545225878,2086373205&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=236',
    introduce: "用于构建用户界面的 JavaScript库"
  }]),
      _useState2 = Object(_Users_chengqisi_Desktop_cheese_tarodemo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      cardList = _useState2[0],
      setCard = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
      scrollY: true,
      children: [cardList.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_homeCard_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
            navigateUrl: item.navigateUrl,
            cardTitle: item.cardTitle,
            imgUrl: item.imgUrl,
            introduce: item.introduce
          })
        });
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "foots",
        children: "--\u5B66\u4E60\u4F7F\u7528\uFF0C\u4EC5\u4F9B\u53C2\u8003--"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/nav-bar.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/nav-bar.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/homeCard/index.less":
/*!********************************************!*\
  !*** ./src/components/homeCard/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/homeCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/homeCard/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/homeCard/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








var HomeCard = function HomeCard(props) {
  var toPages = function toPages() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
      url: props.navigateUrl
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "homeCard",
      onClick: toPages,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: "nav",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          className: "img",
          src: props.imgUrl
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: "title",
        children: props.cardTitle
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: "box",
        children: props.introduce
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (HomeCard);

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"前端小知识","enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map