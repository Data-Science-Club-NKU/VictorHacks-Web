"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/competitions/page",{

/***/ "(app-pages-browser)/./app/competitions/page.tsx":
/*!***********************************!*\
  !*** ./app/competitions/page.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompetitionPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/navbar/dist/chunk-5HDGDWGW.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/navbar/dist/chunk-PSG7VTZC.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/navbar/dist/chunk-MG5LCNUN.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/tabs/dist/chunk-TBXVIZ2K.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/tabs/dist/chunk-FXLYF44B.mjs\");\n/* harmony import */ var _tabs_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/data */ \"(app-pages-browser)/./app/competitions/tabs/data.tsx\");\n/* harmony import */ var _tabs_leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/leaderboard */ \"(app-pages-browser)/./app/competitions/tabs/leaderboard.tsx\");\n/* harmony import */ var _tabs_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/rules */ \"(app-pages-browser)/./app/competitions/tabs/rules.tsx\");\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload */ \"(app-pages-browser)/./app/competitions/upload.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CompetitionPage() {\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"data\");\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleFileChange = (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            setSelectedFile(file);\n        }\n    };\n    const handleSubmission = async ()=>{\n        if (!selectedFile) {\n            alert(\"Please select a file first\");\n            return;\n        }\n        try {\n            const formData = new FormData();\n            formData.append(\"file\", selectedFile);\n            alert(\"File submitted successfully!\");\n            setSelectedFile(null);\n        } catch (error) {\n            console.error(\"Error submitting file:\", error);\n            alert(\"Error submitting file. Please try again.\");\n        }\n    };\n    const renderTabContent = ()=>{\n        switch(selectedTab){\n            case \"data\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 16\n                }, this);\n            case \"leaderboard\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_leaderboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 16\n                }, this);\n            case \"rules\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_rules__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabs_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.navbar_default, {\n                isBordered: true,\n                className: \"bg-white shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.navbar_brand_default, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold\",\n                            children: \"AI Mathematical Olympiad\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.navbar_content_default, {\n                        justify: \"end\",\n                        className: \"gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.SignedIn, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.navbar_item_default, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_upload__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                onFileSelect: (file)=>setSelectedFile(file)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.navbar_item_default, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_12__.button_default, {\n                                            color: \"primary\",\n                                            children: \"Join Competition\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.SignedOut, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.navbar_item_default, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_13__.SignInButton, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_12__.button_default, {\n                                            color: \"primary\",\n                                            children: \"Sign In\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.SignedIn, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-6xl mx-auto mt-6 p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: \"AI Mathematical Olympiad - Progress Prize 2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Solve national-level math challenges using AI models.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__.tabs_default, {\n                            \"aria-label\": \"Competition Sections\",\n                            selectedKey: selectedTab,\n                            onSelectionChange: (key)=>setSelectedTab(String(key)),\n                            className: \"mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.tab_item_base_default, {\n                                    title: \"Data\"\n                                }, \"data\", false, {\n                                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.tab_item_base_default, {\n                                    title: \"Leaderboard\"\n                                }, \"leaderboard\", false, {\n                                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_15__.tab_item_base_default, {\n                                    title: \"Rules\"\n                                }, \"rules\", false, {\n                                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-6\",\n                            children: renderTabContent()\n                        }, void 0, false, {\n                            fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_10__.SignedOut, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg\",\n                        children: \"You must be signed in to view this page.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aadityakhanal/Desktop/VictorHacks-Web/app/competitions/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(CompetitionPage, \"mINzGbV5yI+naRUrP9wSSHDhUM4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CompetitionPage;\nvar _c;\n$RefreshReg$(_c, \"CompetitionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wZXRpdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUNzQjtBQUNvQztBQUVwRTtBQUNjO0FBQ1o7QUFDRjtBQUVuQixTQUFTZ0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDbUIsY0FBY0MsZ0JBQWdCLEdBQUdwQiwrQ0FBUUEsQ0FBYztJQUM5RCxNQUFNcUIsU0FBU3BCLDBEQUFTQTtJQUV4QixNQUFNcUIsbUJBQW1CLENBQUNDO1lBQ1hBO1FBQWIsTUFBTUMsUUFBT0Qsc0JBQUFBLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxjQUFsQkgsMENBQUFBLG1CQUFvQixDQUFDLEVBQUU7UUFDcEMsSUFBSUMsTUFBTTtZQUNSSixnQkFBZ0JJO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUI7UUFDdkIsSUFBSSxDQUFDUixjQUFjO1lBQ2pCUyxNQUFNO1lBQ047UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNQyxXQUFXLElBQUlDO1lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUVo7WUFDeEJTLE1BQU07WUFDTlIsZ0JBQWdCO1FBQ2xCLEVBQUUsT0FBT1ksT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUN4Q0osTUFBTTtRQUNSO0lBQ0Y7SUFFQSxNQUFNTSxtQkFBbUI7UUFDdkIsT0FBUWpCO1lBQ04sS0FBSztnQkFDSCxxQkFBTyw4REFBQ0wsa0RBQU9BOzs7OztZQUNqQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQyx5REFBY0E7Ozs7O1lBQ3hCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLG1EQUFRQTs7Ozs7WUFDbEI7Z0JBQ0UscUJBQU8sOERBQUNGLGtEQUFPQTs7Ozs7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDdUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMvQiw2REFBTUE7Z0JBQUNnQyxVQUFVO2dCQUFDRCxXQUFVOztrQ0FDM0IsOERBQUM5QixtRUFBV0E7a0NBQ1YsNEVBQUNnQzs0QkFBR0YsV0FBVTtzQ0FBb0I7Ozs7Ozs7Ozs7O2tDQUVwQyw4REFBQzdCLHFFQUFhQTt3QkFBQ2dDLFNBQVE7d0JBQU1ILFdBQVU7OzBDQUNyQyw4REFBQ2xDLG9EQUFRQTs7a0RBQ1AsOERBQUNNLG1FQUFVQTtrREFDVCw0RUFBQzJCOzRDQUFJQyxXQUFVO3NEQUViLDRFQUFDckIsK0NBQVVBO2dEQUFDeUIsY0FBYyxDQUFDaEIsT0FBU0osZ0JBQWdCSTs7Ozs7Ozs7Ozs7Ozs7OztrREFHeEQsOERBQUNoQixtRUFBVUE7a0RBQ1QsNEVBQUNDLDhEQUFNQTs0Q0FBQ2dDLE9BQU07c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUc1Qiw4REFBQ3RDLHFEQUFTQTswQ0FDUiw0RUFBQ0ssbUVBQVVBOzhDQUNULDRFQUFDSix3REFBWUE7a0RBQ1gsNEVBQUNLLDhEQUFNQTs0Q0FBQ2dDLE9BQU07c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbEMsOERBQUN2QyxvREFBUUE7MEJBQ1AsNEVBQUNpQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFHTixXQUFVO3NDQUFxQjs7Ozs7O3NDQUNuQyw4REFBQ087NEJBQUVQLFdBQVU7c0NBQWdCOzs7Ozs7c0NBRTdCLDhEQUFDMUIsNERBQUlBOzRCQUNIa0MsY0FBVzs0QkFDWEMsYUFBYTVCOzRCQUNiNkIsbUJBQW1CLENBQUNDLE1BQVE3QixlQUFlOEIsT0FBT0Q7NEJBQ2xEWCxXQUFVOzs4Q0FFViw4REFBQ3pCLHFFQUFHQTtvQ0FBWXNDLE9BQU07bUNBQWI7Ozs7OzhDQUNULDhEQUFDdEMscUVBQUdBO29DQUFtQnNDLE9BQU07bUNBQXBCOzs7Ozs4Q0FDVCw4REFBQ3RDLHFFQUFHQTtvQ0FBYXNDLE9BQU07bUNBQWQ7Ozs7Ozs7Ozs7O3NDQUdYLDhEQUFDZDs0QkFBSUMsV0FBVTtzQ0FBUUY7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkzQiw4REFBQy9CLHFEQUFTQTswQkFDUiw0RUFBQ2dDO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTzt3QkFBRVAsV0FBVTtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQWpHd0JwQjs7UUFHUGYsc0RBQVNBOzs7S0FIRmUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYWRpdHlha2hhbmFsL0Rlc2t0b3AvVmljdG9ySGFja3MtV2ViL2FwcC9jb21wZXRpdGlvbnMvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBTaWduZWRJbiwgU2lnbmVkT3V0LCBTaWduSW5CdXR0b24gfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2YmFyQ29udGVudCwgTmF2YmFySXRlbSwgQnV0dG9uLCBUYWJzLCBUYWIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IFVwbG9hZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBEYXRhVGFiIGZyb20gXCIuL3RhYnMvZGF0YVwiO1xuaW1wb3J0IExlYWRlcmJvYXJkVGFiIGZyb20gXCIuL3RhYnMvbGVhZGVyYm9hcmRcIjtcbmltcG9ydCBSdWxlc1RhYiBmcm9tIFwiLi90YWJzL3J1bGVzXCI7XG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tIFwiLi91cGxvYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGV0aXRpb25QYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJkYXRhXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXNzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBmaWxlIGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBzZWxlY3RlZEZpbGUpO1xuICAgICAgYWxlcnQoXCJGaWxlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgc2V0U2VsZWN0ZWRGaWxlKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3VibWl0dGluZyBmaWxlOlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkVycm9yIHN1Ym1pdHRpbmcgZmlsZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZFRhYikge1xuICAgICAgY2FzZSBcImRhdGFcIjpcbiAgICAgICAgcmV0dXJuIDxEYXRhVGFiIC8+O1xuICAgICAgY2FzZSBcImxlYWRlcmJvYXJkXCI6XG4gICAgICAgIHJldHVybiA8TGVhZGVyYm9hcmRUYWIgLz47XG4gICAgICBjYXNlIFwicnVsZXNcIjpcbiAgICAgICAgcmV0dXJuIDxSdWxlc1RhYiAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8RGF0YVRhYiAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPE5hdmJhciBpc0JvcmRlcmVkIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgICA8TmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+QUkgTWF0aGVtYXRpY2FsIE9seW1waWFkPC9oMT5cbiAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgPE5hdmJhckNvbnRlbnQganVzdGlmeT1cImVuZFwiIGNsYXNzTmFtZT1cImdhcC00XCI+XG4gICAgICAgICAgPFNpZ25lZEluPlxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZCBvbkZpbGVTZWxlY3Q9eyhmaWxlKSA9PiBzZXRTZWxlY3RlZEZpbGUoZmlsZSl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+Sm9pbiBDb21wZXRpdGlvbjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxuICAgICAgICAgIDwvU2lnbmVkSW4+XG4gICAgICAgICAgPFNpZ25lZE91dD5cbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxuICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+U2lnbiBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NpZ25JbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cbiAgICAgICAgICA8L1NpZ25lZE91dD5cbiAgICAgICAgPC9OYXZiYXJDb250ZW50PlxuICAgICAgPC9OYXZiYXI+XG5cbiAgICAgIDxTaWduZWRJbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBtdC02IHAtNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5BSSBNYXRoZW1hdGljYWwgT2x5bXBpYWQgLSBQcm9ncmVzcyBQcml6ZSAyPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+U29sdmUgbmF0aW9uYWwtbGV2ZWwgbWF0aCBjaGFsbGVuZ2VzIHVzaW5nIEFJIG1vZGVscy48L3A+XG5cbiAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbXBldGl0aW9uIFNlY3Rpb25zXCJcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5PXtzZWxlY3RlZFRhYn1cbiAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXsoa2V5KSA9PiBzZXRTZWxlY3RlZFRhYihTdHJpbmcoa2V5KSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGFiIGtleT1cImRhdGFcIiB0aXRsZT1cIkRhdGFcIiAvPlxuICAgICAgICAgICAgPFRhYiBrZXk9XCJsZWFkZXJib2FyZFwiIHRpdGxlPVwiTGVhZGVyYm9hcmRcIiAvPlxuICAgICAgICAgICAgPFRhYiBrZXk9XCJydWxlc1wiIHRpdGxlPVwiUnVsZXNcIiAvPlxuICAgICAgICAgIDwvVGFicz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPntyZW5kZXJUYWJDb250ZW50KCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWduZWRJbj5cblxuICAgICAgPFNpZ25lZE91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5Zb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gdmlldyB0aGlzIHBhZ2UuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2lnbmVkT3V0PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2lnbmVkSW4iLCJTaWduZWRPdXQiLCJTaWduSW5CdXR0b24iLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdmJhckNvbnRlbnQiLCJOYXZiYXJJdGVtIiwiQnV0dG9uIiwiVGFicyIsIlRhYiIsIkRhdGFUYWIiLCJMZWFkZXJib2FyZFRhYiIsIlJ1bGVzVGFiIiwiRmlsZVVwbG9hZCIsIkNvbXBldGl0aW9uUGFnZSIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJyb3V0ZXIiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVTdWJtaXNzaW9uIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwicmVuZGVyVGFiQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImlzQm9yZGVyZWQiLCJoMSIsImp1c3RpZnkiLCJvbkZpbGVTZWxlY3QiLCJjb2xvciIsImgyIiwicCIsImFyaWEtbGFiZWwiLCJzZWxlY3RlZEtleSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwia2V5IiwiU3RyaW5nIiwidGl0bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/competitions/page.tsx\n"));

/***/ })

});