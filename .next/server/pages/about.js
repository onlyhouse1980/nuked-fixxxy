(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 36735:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "About_content___JqsF"
};


/***/ }),

/***/ 72092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36735);
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66197);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81952);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import VideoBg1 from '../components/VideoBg1'




async function getStaticProps() {
    return {
        props: {}
    };
}
const About = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        exit: {
            opacity: 0
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_2___default()), {
            top: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-center",
                        children: [
                            "Orchard Beach ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Community Group "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "The Orchard Beach water system is an existing Group A system located in the Southwest quarter of the Southeast quarter of Section 22, Township 21 North, Range 2 West, W.M situated in Mason County, Washington. The system is a waterfront system located by Pickering Passage in Puget Sound that serves 39 connections. The system's elevation ranges from 65 feet to 30 feet. The water system is composed of two 6 inch wells with a capacity of 10 gpm and 60 gpm located at 57 feet of elevation. Well water is pumped from SO2 (primary source) and SO1 (backup source) to 8 bladder tanks and out to distribution. SO1 (backup source) comes on only during the peak seasons. The distribution system is comprised of approximately 4,300 feet of 4-inch PVC pipe."
                    })
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81952:
/***/ ((module) => {

"use strict";
module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(72092));
module.exports = __webpack_exports__;

})();