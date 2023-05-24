"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 41281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ personHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);

function personHandler({ query: { meter_serialNum  }  }, res) {
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .people.filter */ .M.filter((p)=>p.meter_serialNum === meter_serialNum);
    // User with meter_serialNum exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({
            message: `User with meter_serialNum: ${meter_serialNum} not found.`
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
var __webpack_exports__ = __webpack_require__.X(0, [8751], () => (__webpack_exec__(41281)));
module.exports = __webpack_exports__;

})();