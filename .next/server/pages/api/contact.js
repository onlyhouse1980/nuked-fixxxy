(() => {
var exports = {};
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 19117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./lazy-compilation-node.js": 26196,
	"./lazy-compilation-web.js": 7217
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 19117;

/***/ }),

/***/ 66488:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 66488;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 24628:
/***/ ((module) => {

"use strict";
module.exports = require("@webassemblyjs/ast");

/***/ }),

/***/ 25474:
/***/ ((module) => {

"use strict";
module.exports = require("@webassemblyjs/wasm-edit");

/***/ }),

/***/ 69582:
/***/ ((module) => {

"use strict";
module.exports = require("@webassemblyjs/wasm-parser");

/***/ }),

/***/ 89631:
/***/ ((module) => {

"use strict";
module.exports = require("acorn");

/***/ }),

/***/ 86617:
/***/ ((module) => {

"use strict";
module.exports = require("acorn-import-assertions");

/***/ }),

/***/ 10798:
/***/ ((module) => {

"use strict";
module.exports = require("browserslist");

/***/ }),

/***/ 60871:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 8469:
/***/ ((module) => {

"use strict";
module.exports = require("chrome-trace-event");

/***/ }),

/***/ 42275:
/***/ ((module) => {

"use strict";
module.exports = require("enhanced-resolve");

/***/ }),

/***/ 1995:
/***/ ((module) => {

"use strict";
module.exports = require("enhanced-resolve/lib/CachedInputFileSystem");

/***/ }),

/***/ 52190:
/***/ ((module) => {

"use strict";
module.exports = require("es-module-lexer");

/***/ }),

/***/ 24228:
/***/ ((module) => {

"use strict";
module.exports = require("eslint-scope");

/***/ }),

/***/ 33274:
/***/ ((module) => {

"use strict";
module.exports = require("eslint-scope/lib/referencer");

/***/ }),

/***/ 71239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 28340:
/***/ ((module) => {

"use strict";
module.exports = require("glob-to-regexp");

/***/ }),

/***/ 85740:
/***/ ((module) => {

"use strict";
module.exports = require("graceful-fs");

/***/ }),

/***/ 68515:
/***/ ((module) => {

"use strict";
module.exports = require("json-parse-even-better-errors");

/***/ }),

/***/ 72249:
/***/ ((module) => {

"use strict";
module.exports = require("loader-runner");

/***/ }),

/***/ 59514:
/***/ ((module) => {

"use strict";
module.exports = require("mime-types");

/***/ }),

/***/ 68558:
/***/ ((module) => {

"use strict";
module.exports = require("neo-async");

/***/ }),

/***/ 33410:
/***/ ((module) => {

"use strict";
module.exports = require("schema-utils");

/***/ }),

/***/ 52349:
/***/ ((module) => {

"use strict";
module.exports = require("schema-utils/dist/ValidationError");

/***/ }),

/***/ 34828:
/***/ ((module) => {

"use strict";
module.exports = require("tapable");

/***/ }),

/***/ 57166:
/***/ ((module) => {

"use strict";
module.exports = require("terser-webpack-plugin");

/***/ }),

/***/ 28981:
/***/ ((module) => {

"use strict";
module.exports = require("watchpack");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 31405:
/***/ ((module) => {

"use strict";
module.exports = require("inspector");

/***/ }),

/***/ 98188:
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 26144:
/***/ ((module) => {

"use strict";
module.exports = require("vm");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 26184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
// EXTERNAL MODULE: ./node_modules/webpack/lib/index.js
var lib = __webpack_require__(11045);
;// CONCATENATED MODULE: ./src/pages/api/contact.js


const transporter = external_nodemailer_default().createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
});
//[1]
/* harmony default export */ const contact = (Contact().then(()=>{
    async (req, res)=>{
        const { senderMail , name , tel , content , recipientMail  } = req.body;
        //[2]
        // Check if fields are all filled
        if (senderMail === "" || name === "" || content === "" || tel === "" || recipientMail === "") {
            res.status(403).send("");
            return;
        }
        //[3]
        const mailerRes = await mailer({
            senderMail,
            name,
            text: content + " ( phone )" + tel,
            recipientMail
        });
        res.send(mailerRes);
    //[4]
    };
    const mailer = ({ senderMail , name , text , recipientMail  })=>{
        const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
        const message = {
            from,
            to: `${recipientMail}`,
            subject: `New message from ${from}`,
            text,
            replyTo: from
        };
        //[5]
        return new Promise((resolve, reject)=>{
            transporter.sendMail(message, (error, info)=>error ? reject(error) : resolve(info));
        });
    //[6]
    };
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895], () => (__webpack_exec__(26184)));
module.exports = __webpack_exports__;

})();