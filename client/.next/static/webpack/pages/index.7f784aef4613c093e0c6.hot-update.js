webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/mauth/client/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar SignInInput = function SignInInput(_ref) {\n  var label = _ref.label,\n      placeholder = _ref.placeholder;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    fontSize: \"3xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"label\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"placeholder\"));\n};\n\n_c = SignInInput;\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"red\"),\n      bgColor = _useState[0],\n      setBgColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Hello World\"),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  }),\n      credentials = _useState3[0],\n      setCredentials = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"I'm rendering\");\n  }, [message]);\n\n  var onClick = function onClick() {\n    setMessage(message.split(\" \").reverse().join(\" \"));\n    setBgColor(bgColor === \"red\" ? \"green\" : \"red\");\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Center\"], {\n    w: \"100vw\",\n    h: \"100vh\",\n    position: \"absolute\",\n    top: 0,\n    left: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    p: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    fontSize: \"3xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"Sign In\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Username\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"], {\n    placeholder: \"Ingrese su username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, \"Contrase\\xF1a\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"], {\n    placeholder: \"Ingrese su contrase\\xF1a\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(IndexPage, \"KJW1XbVTCIILP0GY6Vsku78VNRU=\");\n\n_c2 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SignInInput\");\n$RefreshReg$(_c2, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiU2lnbkluSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiSW5kZXhQYWdlIiwidXNlU3RhdGUiLCJiZ0NvbG9yIiwic2V0QmdDb2xvciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBWUEsSUFBTUEsV0FBK0IsR0FBRyxTQUFsQ0EsV0FBa0MsT0FBNEM7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLFdBQWtDLFFBQWxDQSxXQUFrQztBQUNoRixTQUNJLG1FQUNJLE1BQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUUsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLENBREo7QUFNSCxDQVBEOztLQUFNRixXOztBQVNOLElBQU1HLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBUyxLQUFULENBRFI7QUFBQSxNQUN2QkMsT0FEdUI7QUFBQSxNQUNkQyxVQURjOztBQUFBLG1CQUVBRixzREFBUSxDQUFTLGFBQVQsQ0FGUjtBQUFBLE1BRXZCRyxPQUZ1QjtBQUFBLE1BRWRDLFVBRmM7O0FBQUEsbUJBSVFKLHNEQUFRLENBQWM7QUFBRUssWUFBUSxFQUFFLEVBQVo7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUFkLENBSmhCO0FBQUEsTUFJdkJDLFdBSnVCO0FBQUEsTUFJVkMsY0FKVTs7QUFNOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNSLE9BQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEJSLGNBQVUsQ0FBQ0QsT0FBTyxDQUFDVSxLQUFSLENBQWMsR0FBZCxFQUFtQkMsT0FBbkIsR0FBNkJDLElBQTdCLENBQWtDLEdBQWxDLENBQUQsQ0FBVjtBQUNBYixjQUFVLENBQUNELE9BQU8sS0FBSyxLQUFaLEdBQW9CLE9BQXBCLEdBQThCLEtBQS9CLENBQVY7QUFDSCxHQUhEOztBQUtBLFNBQ0ksTUFBQyxzREFBRDtBQUFRLEtBQUMsRUFBQyxPQUFWO0FBQWtCLEtBQUMsRUFBQyxPQUFwQjtBQUE0QixZQUFRLEVBQUMsVUFBckM7QUFBZ0QsT0FBRyxFQUFFLENBQXJEO0FBQXdELFFBQUksRUFBRSxDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQUdJLE1BQUMscURBQUQ7QUFBTyxlQUFXLEVBQUMscUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixFQUtJLE1BQUMscURBQUQ7QUFBTyxlQUFXLEVBQUMsMEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKLENBREo7QUFXSCxDQTFCRDs7R0FBTUYsUzs7TUFBQUEsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENlbnRlciwgSW5wdXQsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIENyZWRlbnRpYWxzIHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTaWduSW5wdXRQcm9wcyB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xufVxuXG5jb25zdCBTaWduSW5JbnB1dDogRkM8U2lnbklucHV0UHJvcHM+ID0gKHsgbGFiZWwsIHBsYWNlaG9sZGVyIH06IFNpZ25JbnB1dFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcIjN4bFwifT5sYWJlbDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PnBsYWNlaG9sZGVyPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgSW5kZXhQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwicmVkXCIpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJIZWxsbyBXb3JsZFwiKTtcblxuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGU8Q3JlZGVudGlhbHM+KHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJJ20gcmVuZGVyaW5nXCIpO1xuICAgIH0sIFttZXNzYWdlXSk7XG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRNZXNzYWdlKG1lc3NhZ2Uuc3BsaXQoXCIgXCIpLnJldmVyc2UoKS5qb2luKFwiIFwiKSk7XG4gICAgICAgIHNldEJnQ29sb3IoYmdDb2xvciA9PT0gXCJyZWRcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2VudGVyIHc9XCIxMDB2d1wiIGg9XCIxMDB2aFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IGxlZnQ9ezB9PlxuICAgICAgICAgICAgPEJveCBwPXs0fT5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCIzeGxcIn0+U2lnbiBJbjwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dD5Vc2VybmFtZTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IHVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8VGV4dD5Db250cmFzZcOxYTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NlbnRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})