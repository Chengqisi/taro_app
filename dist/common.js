(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/codeHtml/index.less":
/*!********************************************!*\
  !*** ./src/components/codeHtml/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/codeHtml/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/codeHtml/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHtml; });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/codeHtml/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




/**
 * @code 富文本内容
 * @isReplace 是否使用正则进行替换
 * */




function CodeHtml(props) {
  var code = props.code;

  function unhtml(str) {
    return str ? str.replace(/[<">']/g, function (a) {
      return {
        '<': '&lt;',
        '"': '&quot;',
        '>': '&gt;',
        "'": '&#39;'
      }[a];
    }) : '';
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
      className: "code_box",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "code_head",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["Image"], {
          src: "https://cdn-ssl.meb.com/mwa/cheese3.png",
          style: {
            width: '30rpx',
            height: '30rpx'
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["Image"], {
          src: "https://cdn-ssl.meb.com/mwa/cheese2.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["Image"], {
          src: "https://cdn-ssl.meb.com/mwa/cheese1.png"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "copy",
        onClick: function onClick() {
          _utils_utils__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].copy("\n                =====\u867D\u7136\u5199\u7684\u5F88\u5DEE======\n                =====\u8FD8\u662F\u6709\u7248\u6743\uD83D\uDE2F======\n                ".concat(code, "  \n                =====\u672C\u4EBA\u8FD8\u662F\u4E2A\u5C0F\u5C0F\u524D\u7AEF\u4EBA======\n                =====\u590D\u5236\u540E\u8C28\u614E\u4F7F\u7528\uD83D\uDE0A========="));
        },
        children: "\u590D\u5236\u4EE3\u7801"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["View"], {
        className: "rich_text",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          nodes: "<div><pre><code>".concat(props.isReplace ? unhtml(code) : code, "</code></pre></div>")
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/utils/utils.tsx":
/*!*****************************!*\
  !*** ./src/utils/utils.tsx ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
 //剪切板复制，再通过剪切板获取，确保复制成功

var copy = function copy(data) {
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setClipboardData({
      data: data,
      success: function success() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getClipboardData({
          success: function success(res) {
            resolve(res);
          },
          fail: function fail() {
            reject('获取剪切板失败');
          }
        });
      },
      fail: function fail() {
        reject('复制失败');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  copy: copy
});

/***/ })

}]);
//# sourceMappingURL=common.js.map