"use strict";
(() => {
var exports = {};
exports.id = 9290;
exports.ids = [9290];
exports.modules = {

/***/ 46212:
/***/ ((module) => {

module.exports = require("sitemap");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 95326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sitemap)
/* harmony export */ });
const { SitemapStream , streamToPromise  } = __webpack_require__(46212);
const { Readable  } = __webpack_require__(12781);
function Sitemap() {
    async (req, res)=>{
        // An array with your links
        const links = [
            {
                url: "/about",
                changefreq: "never",
                priority: 0.3
            },
            {
                url: "/articles",
                changefreq: "never",
                priority: 0.3
            },
            {
                url: "/executive",
                changefreq: "never",
                priority: 0.3
            },
            {
                url: "/register",
                changefreq: "never",
                priority: 0.3
            },
            {
                url: "/contact",
                changefreq: "never",
                priority: 0.3
            }
        ];
        // Create a stream to write to
        const stream = new SitemapStream({
            hostname: `https://${req.headers.host}`
        });
        res.writeHead(200, {
            "Content-Type": "application/xml"
        });
        const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data)=>data.toString());
        res.end(xmlString);
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(95326));
module.exports = __webpack_exports__;

})();