(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/center/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/center/index.tsx":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/center/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_chengqisi_Desktop_cheese_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _imgs_head_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imgs/head.png */ "./src/imgs/head.png");
/* harmony import */ var _imgs_head_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_head_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/pages/center/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_imgs_head_png__WEBPACK_IMPORTED_MODULE_3___default.a),
      _useState2 = Object(_Users_chengqisi_Desktop_cheese_myApp_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      avatarUrl = _useState2[0],
      setAvtarl = _useState2[1];

  var bindchooseavatar = function bindchooseavatar(e) {
    console.log(e.detail.avatarUrl, "===>头像");
    var avatarUrl = e.detail.avatarUrl;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setStorageSync('avatarUrl', avatarUrl);
    setAvtarl(avatarUrl);
  }; // 对应 onShow


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useDidShow"])(function () {
    var avatarUrl = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getStorageSync('avatarUrl');

    if (avatarUrl) {
      setAvtarl(avatarUrl);
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "head",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          openType: "chooseAvatar",
          className: "head_img",
          onChooseAvatar: bindchooseavatar,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: avatarUrl
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
          className: "head_num",
          children: "\u6E38\u5BA2"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Card, {
          text: 'v1.0.0',
          url: '1',
          title: "版本号"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Card, {
          text: 'v1.0.0',
          url: '1',
          title: "版本号"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Card, {
          text: 'v1.0.0',
          url: '1',
          title: "版本号"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "foot",
        children: "--\u5B66\u4E60\u4F7F\u7528\uFF0C\u4EC5\u4F9B\u53C2\u8003--"
      })]
    })
  });
}

function Card(_ref) {
  var title = _ref.title,
      text = _ref.text,
      url = _ref.url;

  var naviageFnc = function naviageFnc() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
      url: url
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "card",
      onClick: naviageFnc,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
        children: [title, "\uFF1A", text]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: "https://cdn-ssl.meb.com/mwa/v2.4.8/arrow-right.png",
        mode: "widthFix"
      })]
    })
  });
}

/***/ }),

/***/ "./src/imgs/head.png":
/*!***************************!*\
  !*** ./src/imgs/head.png ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/head.png";

/***/ }),

/***/ "./src/pages/center/index.less":
/*!*************************************!*\
  !*** ./src/pages/center/index.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/center/index.tsx":
/*!************************************!*\
  !*** ./src/pages/center/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/center/index.tsx");


var config = {"navigationBarTitleText":"个人中心","enableShareAppMessage":true};

_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/center/index', {root:{cn:[]}}, config || {}))




/***/ })

},[["./src/pages/center/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map