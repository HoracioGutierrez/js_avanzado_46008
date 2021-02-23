/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _estilos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estilos.css */ "./src/estilos.css");
//require("./archivo_1")

/* import archivo1 from "./archivo_1" */

/* class App {}

let foo =  () => {}

const arr = [1,2,3]
const [uno,dos,tres] = arr

const copia = [...arr]

console.log("Dev Server") */

var socket = io("ws://localhost:8000");
var form = document.querySelector("form");
var ul = document.querySelector("ul");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valor = e.target.elements.mensaje.value;
  var li = document.createElement("li");
  li.innerText = valor;
  ul.appendChild(li);
  e.target.elements.mensaje.value = "";
  socket.emit("mensaje_front", valor);
});
socket.on("mensaje_back", function (mensaje) {
  console.log(mensaje);
  var li = document.createElement("li");
  li.innerText = mensaje;
  ul.appendChild(li);
});

/***/ }),

/***/ "./src/estilos.css":
/*!*************************!*\
  !*** ./src/estilos.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map