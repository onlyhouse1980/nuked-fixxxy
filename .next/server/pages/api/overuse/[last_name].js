"use strict";
(() => {
var exports = {};
exports.id = 2018;
exports.ids = [2018];
exports.modules = {

/***/ 47294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ overHandler)
/* harmony export */ });
/* harmony import */ var _data1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22466);

function overHandler({ query: { last_name  }  }, res) {
    const filtered = _data1__WEBPACK_IMPORTED_MODULE_0__/* .LastNames.filter */ .M.filter((p)=>p.last_name === last_name);
    // User with meter_serialNum exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({
            message: `User with last_name: ${last_name} not found.`
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2466], () => (__webpack_exec__(47294)));
module.exports = __webpack_exports__;

})();